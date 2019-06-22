import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function One()
{
  return(
    <div>
      <h2>So 1 tap 1</h2>
      <h3>So 1 tap 2</h3>
    </div>
  );
}

var Two = function() {
  return (
    <div>
      <h3>Cach so 3</h3>
    </div>
  );
}

var Three = () => (
  <div>
    <h3> Cach so 4</h3>
  </div>
)

class App extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <One/>
      </header>
       <Two/>
      <Three/>
      
      <hr></hr> 
      <button>React js component so 4</button>
    {/* <Five/> */ }
    </div>
  );
}
}

// class Five extends Component {
//   render() {
//     return (
//       <div>
//         <h5>React js so 5</h5>
//       </div>
//     );
//   }
// }

export default App;
