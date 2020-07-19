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
            choosennews:this.props.choosennews
        }


        this.replaceModalItem=this.replaceModalItem.bind(this);

    }

    componentWillMount() {
        var fetch_url = 'http://newsapi.org/v2/top-headlines?' + 'country=in&' +
            'apiKey=aae03ba7b435477095e08544ec74b5a7';
        
        fetch(fetch_url,
            {
                method: "GET"
            })
            .then(res => res.json())
            .then(result => {
             
                this.setState({ news_info: result.articles })
            })
    }

    componentDidUpdate(){
        this.render();
           
    }

    async replaceModalItem(id)
        {
            
            await this.setState( {choosennews: id}  )
                        
         
        }




    render() {

        var output = "";
      
        if (this.state.news_info.length != 0) {
            
           
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
            content={this.state.news_info[this.state.choosennews].content}
            modal={true}
            url={this.state.news_info[this.state.choosennews].url}
            date={this.state.news_info[this.state.choosennews].publishedAt}

            >

            </NewsModal>

            
            </div>)
        


        }
        else
            return (<div></div>)
    }
}


export default NewsFeed;