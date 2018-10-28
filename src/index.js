import React from 'react';
import ReactDOM from 'react-dom';

//COMPONENTS
import Header from '../src/components/header';


const App= ()=>{
    return (
    <div>
        <Header/>
    </div>
    )
}

const droot = document.getElementById('root');

ReactDOM.render(<App/>, droot);