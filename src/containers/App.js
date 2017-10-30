import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Header from '../components/Header';

class App extends Component {
  render() {
    return (
      <div className="calendar">
        <Header selectedDate={this.props.selectedDate} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({ selectedDate: state.selectedDate })
}

export default connect(mapStateToProps)(App);
