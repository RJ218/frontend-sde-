import React from 'react';
import { Modal,Button,ModalBody,ModalHeader,ModalFooter } from 'reactstrap';

class NewsModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            msg: ''
        }
    }
componentWillMount()
{
    this.setState({title:this.props.title});
}


    render() {
        
        console.log(this.state);
        return (
            <div>
              
            </div>
        );
    }
}
export default NewsModal;