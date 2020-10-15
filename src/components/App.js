import React from 'react';
import '../style.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import Calculate from '../logic/calculate';

export default function App() {
  return (
    <div className="App d-flex">
      <Display />
      <ButtonPanel />
    </div>
  );
}
