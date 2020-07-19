import React from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import { Col, Row, Container } from 'reactstrap';
import Newscard from './newscard';
import './newsfeed.css'
import NewsModal from './NewsModal';

class NewsFeed extends React.Component {
    
    constructor(props) {
        
        super(props);
        this.state = {
            news_info: [],
            choosennews:0
        }
        this.replaceModalItem=this.replaceModalItem.bind(this);

    }

    componentWillMount() {
        var fetch_url = 'http://newsapi.org/v2/top-headlines?' + 'country=in&' +
            'apiKey=aae03ba7b435477095e08544ec74b5a7';
        console.log(fetch_url);
        fetch(fetch_url,
            {
                method: "GET"
            })
            .then(res => res.json())
            .then(result => {
              //  console.log(result);
             //   console.log(result.articles[0]);
                this.setState({ news_info: result.articles })
            }).then(console.log(this.state))
    }
    replaceModalItem(id)
        {

            this.setState({choosennews:id});
            console.log(this.state.choosennews);
           
           
          //  console.log(this.state);
         //   console.log(this.state.news_info[this.state.choosennews]);
        }




    render() {

       




        // alert("render");
        var output = "";
       // console.log(this.state.news_info);
        //console.log(this.state.news_info.length);
        if (this.state.news_info.length != 0) {
            
            const requiredItem=this.state.choosennews;
            let modaldata=this.state.news_info[requiredItem];
            
            return (<div>
                <h1 className="heading">News Feed</h1>
                <Row>
                
               { this.state.news_info.map((item,index) => {
                   //id++;
                return (
                 <Col md="4"  className="mb-3" onClick={()=>{this.replaceModalItem(index)}} id={index} key={index}>   
                <Newscard  item={item}>
                        
                </Newscard>
                </Col>)
            })}
            </Row>
            <NewsModal 
            title={this.state.news_info[this.state.choosennews].title}
            >

            </NewsModal>

          

            
            </div>)
        


        }
        else
            return (<div></div>)
    }
}


export default NewsFeed;