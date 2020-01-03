// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));


import { createStore } from 'redux';

function playlist(state = [], action) {
    //console.log(action);
    if(action.type === 'ADD_TRACK') {
        return [
            ...state,                   //* empty array + payload ('...' - add value to ar. and retrn NEW ARRAY)
            action.payload
        ];
    }
    return state;
} 

const store = createStore(playlist);    //adding reducer

console.log(store.getState());

store.subscribe(() => {                 //* subscribe to watch store changes
    console.log('subscribe: ', store.getState());
})

//* Changing store values by dispatch-event (creates action to chg. store), payload = data!
store.dispatch({ type: 'ADD_TRACK', payload: 'Smells like spirit' });
store.dispatch({ type: 'ADD_TRACK', payload: 'Anther album (payload)' });

console.log( '***store.getState(): ' + store.getState());

