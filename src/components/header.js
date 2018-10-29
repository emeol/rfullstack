import React,{Component} from 'react';
import '../css/styles.css';

class Header extends Component{

    state={
        keywords:'Hello'
    }

    inputChangeHandler(event){
        // console.log(event.target.value);
        // console.log('hey');
        this.setState({
            keywords:event.target.value
        });
    }

    render () {
        return  (
            <header>
                <div className='logo'
                onClick={()=>console.log('i was clicked!')}>Logo Two</div>
                <input 
                onChange={this.inputChangeHandler.bind(this)}
                type='text'/>
            </header>
    )}
}

export default Header;