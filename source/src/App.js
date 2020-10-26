import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      message: '',
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch('/api/hello')
        .then(response => response.text())
        .then(text => {
          this.setState({
            message: text,
            isLoaded: true
          })
        })
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            {(this.state.isLoaded)
                ? (<p>Message from server: {this.state.message}</p>)
                : (<p>Loading...</p>)}
          </header>
        </div>
    );
  }
}

export default App;
