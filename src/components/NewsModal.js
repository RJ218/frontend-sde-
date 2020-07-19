import React from 'react';
import { Modal, Button, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';


class NewsModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            content: this.props.content,
            modal: false,
            date:'',
            url:''
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    

    componentDidUpdate(previousProps, previousState) {
        
        if (previousProps.title !== this.props.title) {
            this.setState({ title: this.props.title });
            this.setState({modal: this.props.modal});
            this.setState({content:this.props.content});
            this.setState({date:this.props.date});
            this.setState({url:this.props.url});
        }
    }

    render() {

      
        return (
            <div>
                <link
                    rel='stylesheet'
                    href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'
                />
               
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.state.title}</ModalHeader>
                    
                    <ModalBody>
        <p>{this.state.date}</p>    
                        {this.state.content}
                        <br></br>
                        <br/>
                        <a href={this.state.url}>{this.state.url}</a>
                                  </ModalBody>
                   
                </Modal>
            </div>
        );
    }
}
export default NewsModal;