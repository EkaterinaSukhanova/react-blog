import { createAction } from 'redux-actions';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3000');

//actions
export const messageReceived = createAction('[Message] Receive'); //название сущности и действие, кот. с ней совершается

//side effects - побочные эффекты, кот. взаимодействуют с сервером (обыкновенные функции)
export const mountEvents = (dispatch) => {
    //подписываемся на событие прихода соощения
    socket.on('message', (message) => {
        dispatch(messageReceived(message)); //обработка событий //кладем в стор
    })
};

//метод отправки сообщений
export const sendMessage = (dispatch) => (message) => {
    socket.emit('message', message); //отправляем на сервак с помощью сокета
};