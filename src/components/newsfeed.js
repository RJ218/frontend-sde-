import React from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

class NewsFeed extends React.Component{
        constructor(props){
            super(props);
            this.state={
                "news_info":[]
            }
       
        }
        
        componentWillMount()
        {
            var fetch_url='http://newsapi.org/v2/top-headlines?'+ 'country=in&' +
            'apiKey=aae03ba7b435477095e08544ec74b5a7';
            console.log(fetch_url);
            fetch(fetch_url,
            {
                method:"GET"
            })
            .then(res=>res.json())
            .then(result=>{
                console.log(result);
                console.log(result.articles[0]);
                //this.state.news_info.push(result.articles);
                for(var i in result.articles)
                    {
                        this.state.news_info.push(result.articles[i])
                   }
            }).then(console.log(this.state))
        }
        render()
        {
           // alert("render");
            var output="";
            console.log(this.state.news_info);
            console.log(this.state.news_info[0]);
            for(var i=0;i<=this.state.news_info;i++)
                {
             //       alert('for loop');
                    console.log(this.state.news_info[i])
                   //output=output+ `<p>${this.state.news_heading[i]}</p>`;
                   // document.writeln(this.state.news_heading[i]);
                }
                
            return(
                <div>
                     
                </div>
            )
        }

}
export default NewsFeed;