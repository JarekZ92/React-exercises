import React from 'react';

class Counter extends React.Component {
  state = {
    startCount: 0
  }

  additionCounter = () => {
    this.setState({
      startCount: this.state.startCount + 1
    })
  }

  substractCounter = () => {
    this.setState({
      startCount: this.state.startCount - 1
    })
  }

  resetCounter = () => {
    this.setState({
      startCount: this.state.startCount = 0
    })
  }

  componentDidMount() {
    const request = {
      method: "POST",
      body: JSON.stringify({ startCount: this.state.startCount })
    }

    fetch('https://react-exercises.firebaseio.com/counter/state.json', request)
      .then(response => {
        this.setState({
          startCount: this.state.startCount
        })
      })
  }

  render() {
    return (
      <div>
        <h1>{this.state.startCount}</h1>
        <button onClick={this.additionCounter}> + </button>
        <button onClick={this.substractCounter}> - </button>
        <br /> <button onClick={this.resetCounter}> Reset counter </button>
      </div>
    );
  }
}

export default Counter;
