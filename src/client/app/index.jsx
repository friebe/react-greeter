import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      greeting: ''
    }
  }

  onGreetingChange(event) {
    this.setState({
      greeting: event.target.value
    });
  }

  onGreetClicked() {
    alert(`Hello, ${this.state.greeting}`);
  }

  getCharsRemaining() {
    return this.props.maxLength - this.state.greeting.length;
  }

  isGreetingValid() {
    return this.state.greeting.length > 0 && this.getCharsRemaining() >= 0;
  }


  render () {
    let greetingValid = this.isGreetingValid();
    return (
      <div>
        <input
          value={this.state.greeting}
          onChange={(e)=>this.onGreetingChange(e)}>
        </input>
        <span>{this.getCharsRemaining()}</span>

          <button
            disabled={console.log(!greetingValid)}
            onClick={()=>this.onGreetClicked()}>
            Senden
          </button>
      </div>
    );
  }
}

render(<App maxLength={10}/>, document.getElementById('app'));
