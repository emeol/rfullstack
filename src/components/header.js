import React from 'react';

const getYear = ()=> {
    const nDate=new Date();
    return nDate.getFullYear(); 

}
const Header = ()=>{
    return (
        <div>
            This is the new Header
            <p>The date is {getYear()}</p>
        </div>
    )
}

export default Header;