import React from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import { Col, Row, Container } from 'reactstrap';
import Newscard from './newscard';
import './newsfeed.css'

class NewsFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news_info: []
        }

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
                console.log(result);
                console.log(result.articles[0]);
                this.setState({ news_info: result.articles })
            }).then(console.log(this.state))
    }
    render() {

        var id=-1;




        // alert("render");
        var output = "";
        console.log(this.state.news_info);
        console.log(this.state.news_info.length);
        if (this.state.news_info.length != 0) {
            return (<div>
                <h1 className="heading">News Feed</h1>
                <Row>
                
               { this.state.news_info.map((item) => {
                   id++;
                return (
                 <Col md="4"   id={id}>   
                <Newscard  item={item}>

                </Newscard>
                </Col>)
            })}
            </Row>
            </div>)
        


        }
        else
            return (<div></div>)
    }
}


export default NewsFeed;