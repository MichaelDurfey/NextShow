import React from 'react';
import { render } from 'react-dom';
import Login from './login';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      artists: [],
      events: [],

    }
  }
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
