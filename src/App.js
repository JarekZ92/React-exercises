import React from 'react';

class App extends React.Component {
  state = {
    startCount: 0
  }

  additionCounter = () => {
    this.setState({
      startCount: this.state.startCount + 1
    })
  }

















  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;
