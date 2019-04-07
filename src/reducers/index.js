import { combineReducers } from 'redux';

import messagesReducer from './messages';

export default combineReducers({
    messages: messagesReducer,
});
//за какую ветку отвечает какой редусер