// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));


import { createStore } from 'redux';
import "bootstrap/dist/css/bootstrap.css";
//import "@fortawesome/fontawesome-free/css/all.min.css";

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

//For form handling
//const addTrackBtn = document.querySelectorAll('.addTrack')[0];
const addTrackBtn = document.getElementById('addTrack');
const trackInput = document.getElementById('trackInput');
const list = document.querySelectorAll('.list')[0];

store.subscribe(() => {                 //* subscribe to watch store changes
    console.log('subscribe: ', store.getState());   
    

    //Cleaning list and input
    list.innerHTML = '';
    trackInput.value = '';

    //Show changed list (the store)
    store.getState().forEach(track => {
        const li = document.createElement('li');
        li.textContent = track;
        list.appendChild(li);
    });


})

//* Changing store values by dispatch-event (creates action to chg. store), payload = data!
//store.dispatch({ type: 'ADD_TRACK', payload: 'Smells like spirit' });
//store.dispatch({ type: 'ADD_TRACK', payload: 'Anther album (payload)' });

console.log( '***store.getState(): ' + store.getState());

//2. Adding form handler
//const addTrackBtn = document.querySelectorAll('.addTrack')[0];
//const addTrackBtn = document.getElementById('addTrack');
addTrackBtn.addEventListener('click', () => {
    //const trackName = document.querySelectorAll('.trackInput')[0].nodeValue;
    const trackName = trackInput.value;
    console.log('trackname', trackName);
    store.dispatch({ type: 'ADD_TRACK', payload: trackName });
})