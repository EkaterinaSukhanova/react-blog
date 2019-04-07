import React, { Component, Fragment } from 'react';

import CommentsForm from 'components/CommentsForm';

export default class CommentsFormContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            body: '',
        }
    }

    handleClick = () => {
        const {onSend} = this.props;

        console.log('dcx');
        onSend(this.state)
    };


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render () {
        const {name, body} = this.state;

        return(
            <Fragment>
                <CommentsForm name={name} body={body} handleChange={this.handleChange} handleClick={this.handleClick} />
            </Fragment>
        );
    }


}