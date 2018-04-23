import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'James', age: 28 },
            { name: 'Rose', age: 32 },
            { name: 'Jim', age: 30 },
        ]
    }

    switchNameHandler = (newName) => {
        // console.log('Was Clicked')
        this.setState({
            persons: [
                { name: newName, age: 28 },
                { name: 'Rose Salamea', age: 32 },
                { name: 'Jim Jam', age: 30 },
            ]
        })
    }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
          <button onClick={this.switchNameHandler.bind(this, 'James De Francesco')}>Switch Name</button>
          <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}/>
          <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler}> Hobbies: Coding
                </Person>
          <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}/>
      </div>
    )
  }
}

export default App;
