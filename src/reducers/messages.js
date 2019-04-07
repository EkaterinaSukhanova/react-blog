import { handleActions } from 'redux-actions';

import { messageReceived } from 'actions/messages';

const initialState = {
    entities: [], //будем хранить объекты сообщений
};

//mapping между экшн и функцией кот будет обрабатывать
export default handleActions({
    //указываем action и функцию обработчик
    //state - предыдущее состояние, action - объект действия
    [messageReceived]: (state, action) => {
        return {
            ...state,
            entities: state.entities.concat([action.payload]), //сообщение отправили в параметрах экшена (см. экшн месседж)
            //concat принимает в качестве параметров массив, а action.payload массивом не является
        }
    }
}, initialState);