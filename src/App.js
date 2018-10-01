import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Brandon', age: 28},
      {name: 'Manu', age: 40},
      {name: 'Stephanie', age: 26},
    ]

  }

  swithNameHandler = (newName) => {
    // console.log('Was clicked');
    // DON'T DO THIS: this.state.persons[0].name = 'Samuel';
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Ginobli', age: 42},
        {name: 'Stephanie', age: 27},
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Brandon', age: 28},
        {name: event.target.value, age: 42},
        {name: 'Stephanie', age: 27},
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h2>I Am a React App!</h2>
        <p>This is really working!</p>
        <button onClick={this.swithNameHandler.bind(this, 'Bufty')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.swithNameHandler.bind(this, 'OX!!!!')} changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );

  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
