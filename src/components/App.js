//libraries
import React from 'react'
//components 
import Accordion from './Accordion';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front-end JavaScript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a popular JavaScript library among engineers'
    },
    {
        title: 'How do we use React?',
        content: 'We use React by creating components'
    }
]

const App = () => {
    return (
        <div>
            <Accordion items={items}/>
        </div>
    );
};

export default App;