import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import { mountEvents, sendMessage } from 'actions/messages';

class ChatContainer extends PureComponent{
    constructor(props) {
        super(props);

        this.state = {
            author: '',
            text: '',
        }
    }

    componentDidMount() {
        const { mountEvents } = this.props;
        mountEvents();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSend = (e) => {
        const { sendMessage } = this.props;

        sendMessage(this.state);
        e.preventDefault();
    };


    render() {
        const { messages } = this.props;
        const { author, text } = this.state;

        return (
            <Fragment>
                <ul>
                    {messages.map((messages, idx) => <li key={idx}>{messages.author}: {messages.text}</li>)}
                </ul>
                <form>
                    <input onChange={this.handleChange} type="text" name="author" value={author} /><br />
                    <textarea onChange={this.handleChange} name="text" value={text} /><br />
                    <button onClick={this.handleSend}>Send</button>
                </form>
            </Fragment>
        )
    }

}

//отвечает за то , что будет в пропс компонента из стора.
//маппит стейт в пропс реакт компонента. следим за изменениями
//props те пропеоти которые изначально в компонент были переданы
//state - все содержимое нашего стора
function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        messages: state.messages.entities, //возьми сообения в редуксе
    }
}

//отвечает за то , что будет в пропс компонента из экшена
//метод, чтобы могли внутрь компонента прокинуть какие-то экшены, чтобы мог их вызывать, посылать
function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        mountEvents: () => mountEvents(dispatch),
        sendMessage: sendMessage(dispatch),
    }
}

//подключи React компонент к Redux store
export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
//в первые скобки передаются методы, кот определяют на какие части стора наш компонент подписывается
//во вторые скобки компонент

