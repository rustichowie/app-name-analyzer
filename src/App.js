import React, { Component } from 'react';

import './App.css';
import {connect} from 'react-redux';
import { getNames } from './actions/names';
import ErrorMessage from './components/ErrorMessage';

class App extends Component {

  componentWillMount() {
      this.props.getNames();
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to your analyzer</h1>
          <h3>Pick a name and click</h3>
        </header>
        <ErrorMessage />
        <div className="">
          {this.props.children}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
      names: state.names
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getNames: () => {dispatch(getNames())}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
