//libraries
import {React, Fragment, useState} from 'react';

const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const renderedItems = items.map(({title, content}, index) => {
        const active = index === activeIndex ? 'active' : ''

        return <Fragment key={title}>
            <div 
            className={`title ${active}`}
            onClick={() => onTitleClick(index)}
            >
                <i className='dropdown icon'></i>
                {title}
            </div>
            <div className={`content ${active}`}>
                <p>{content}</p>
            </div>
        </Fragment>
    });

    return (
        <div className='ui styled accordion'>
            {renderedItems}
            <h1>
                {activeIndex}
            </h1>
        </div>
    );
}

export default Accordion;