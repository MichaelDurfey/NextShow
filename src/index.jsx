import React from 'react';
import { render } from 'react-dom';

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
        Hello react
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
