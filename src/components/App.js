import React from 'react';
import '../style.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  } 

  render() {
    return (
      <div className="App d-flex">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}
