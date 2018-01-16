import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hideError} from '../actions/error';

class ErrorMessage extends Component {

  componentWillReceiveProps(nextProps){
    if(nextProps.error && nextProps.error.message){
      console.log(nextProps);
      setTimeout(() => {
        this.props.hideError();
      }, 10 * 1000)
    }
  }

  render(){
    if(this.props.error && this.props.error.message){
      return (
        <div className="error-message">
          {this.props.error.message}
        </div>
      )
    }
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideError: () => {dispatch(hideError())}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessage);
