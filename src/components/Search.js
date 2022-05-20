import {React, useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('react js');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResult] = useState([]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        //Cleanup: Cancel the timer
        return () => {
            clearTimeout(timeoutId);
        }
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            })
            setResult(data.query.search);
        }
        search();
    }, [debouncedTerm]);

    const renderedResults = results.map(result => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a 
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    className="ui button"
                    target='_blank' rel="noreferrer"
                    >
                        view
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        );
    })

    return (
        <div>
            {/* FORM */}
            <div className="ui form">
                <div className="field">
                    <label>
                        Enter Search Term
                    </label>
                    <input 
                    value={term} 
                    type="text" 
                    className="input" 
                    onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </div>
            {/* LIST */}
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search;