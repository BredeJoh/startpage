import React from 'react';
import Frontpage from './pages/frontpage'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  
  }

  render(){
    return(
      <div className="App">
        <Frontpage />
      </div>
    )
      
  }
}

export default App;
