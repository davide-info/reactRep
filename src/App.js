import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
class App extends Component {
constructor(){
super();
this.state = {string: "Hello David"};
}

 render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {this.state.string}
        </p>
        <button onClick={()=>{this.setState({npm})}}></button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}
export default App;