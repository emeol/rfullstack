import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';

//COMPONENTS
import Header from '../src/components/header';

class App extends Component {
    render(){
        return (
            <div>
                <Header/>
            </div>
        ) 
    }
}


const droot = document.getElementById('root');

ReactDOM.render(<App/>, droot);