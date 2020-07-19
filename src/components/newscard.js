import React from 'react';
import {Card,CardBody,CardTitle,CardSubtitle,CardText,Button,CardImg} from 'reactstrap';
import './newscard.css'

class Newscard extends React.Component {
    constructor(props)
        {
            super(props);
        }

    render() {
            console.log(this.props);

        return (
            <div>
               <Card>
        <CardImg top width="100%" src={this.props.item.urlToImage} alt="Card image cap" />
        <CardBody>
          <CardTitle><h2>{this.props.item.title}</h2></CardTitle>
        <CardText>{this.props.item.content}</CardText>
          
        </CardBody>
      </Card>
            </div>
        )
    }
}
export default Newscard;