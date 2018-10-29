import React from 'react';

//COMPONENTS
import NewsItem from '../components/news_list.items';

//props is available on any component
const NewsList=(props)=>{

    console.log(props);
   
    const items = props.newsvariable.map((itm)=>{
        return (
            <NewsItem key={itm.id} item={itm}/>
        )
    });

    return(
        <div>
            {items}
        </div>

    )
}

export default NewsList;