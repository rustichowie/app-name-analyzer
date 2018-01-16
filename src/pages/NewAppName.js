import React, { Component } from 'react';

import { connect } from 'react-redux';
import { generateNames, analyzeNames, setAppName, selectGeneratedName } from '../actions/names';

import { setError } from '../actions/error';

import NewNameForm from '../components/NewNameForm';
class NewAppName extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: ''
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(field, val){
    let newState = {...this.state};

    newState[field] = val;
    this.setState(newState);
  }

  handleFormSubmit(){
    if(this.state.name === ''){
      this.props.setError('Ugyldig app-navn');
      return;
    }

    this.props.setAppName(this.state.name);
    this.props.generateNames();
  }
  render(){
    //If createNewApp button is pushed with a name, generate a list of all possible combinations
    //Then once you want to analyze can be selected and you can add custom names as well.
    //Then click analyze and we get all the data we need for each name.
    return (<div className="new-app-name">
      <NewNameForm onSubmit={this.handleFormSubmit} onFieldChange={this.handleFieldChange}/>
      <div className="new-app-name__list">
        {(this.props.possibleNames ? this.props.possibleNames.map((pName, index) => {
          let selected = this.props.selectedNames && this.props.selectedNames.indexOf(pName) >= 0;

          return(<div className={"name-item " + (selected ? "name-item--selected" : "")} onClick={(e) => {this.props.selectGeneratedName(pName)}}>{pName}</div>);
        }) : null)}
      </div>
      {(this.props.selectedNames && this.props.selectedNames.length > 0 ? (
        <button onClick={() => {this.props.analyzeNames()}}>Analyze</button>
      ) : null)}

    </div>);

  }

}

const mapStateToProps = (state) => {
  return {
    selectedNames: state.names.selectedNames,
    possibleNames: state.names.possibleNames,
    appName: state.names.appName,
    loading: state.loading,
    error: state.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAppName: (name) => {dispatch(setAppName(name))},
    selectGeneratedName: (generatedName) => {dispatch(selectGeneratedName(generatedName))},
    generateNames: () => {dispatch(generateNames())},
    analyzeNames: () => {dispatch(analyzeNames())},
    setError: (message) => {dispatch(setError(message))}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewAppName);
