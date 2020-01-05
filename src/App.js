import React, { Component } from 'react';
import { connect } from 'react-redux';


// original function App()
/*
function App() {

  console.log(this.props.testStore);
  return (    
    <div>
      <h2>{this.props.testStore}</h2>
    </div>
  );
}
*/


class App extends Component {
  render() {

    console.log(this.props.testStore);
    return (
      <div>
        {/* ASV: Adding form (for rendering store) */}
        <input type="text" className="form-control" id="trackInput" />
        <button className="addTrack">Add track</button>
        <button type="submit" className="btn btn-primary" id="addTrack">Add track</button>
        <ul class="list">
          {this.props.testStore.map((track, index) =>
            <li key={index}>{track}</li>
          )}
        </ul>
      </div>
    )
  }
}


//export default App
// 1 - mapStateToProps() - подписаться на компонент и следить за его изменениями, 2 - 
export default connect(
  state => ({
    testStore: state    //глобальное состояние Store
  }),
  dispatch => ({})
)(App);
