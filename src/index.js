import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';

//COMPONENTS
import Header from '../src/components/header';
import NewsList from '../src/components/news_list';

class App extends Component {

    state={
        news:JSON
    }

    render(){

        // console.log(this.state.news);

        return (
            <div>
                <Header/>
                <NewsList newsvariable={this.state.news}
                anotherprops="Me"/>
            </div>
        ) 
    }
}


const droot = document.getElementById('root');

ReactDOM.render(<App/>, droot);