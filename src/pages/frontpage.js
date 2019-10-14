import React from 'react';
import './frontpage.css';

class Frontpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  
  }

  render(){
    return(
      <div className="frontpage">
        <div className="container-fluid">
            <div className="row">
                <div class="col-sm">
                    One of three columns \\n
                    testOne of three columns \\n
                    testOne of three columns \\n
                    testOne of three columns \\n
                    testOne of three columns \\n
                    testOne of three columns \\n
                    testOne of three columns \\n
                    testOne of three columns \\n
                    testOne of three columns \\n
                    te
                </div>
                <div class="col-sm">
                    One of three columns
                </div>
                <div class="col-sm">
                    One of three columns
                </div>
            </div>
            <div className="row">
                <div class="col">
                    One of two columns
                </div>
                <div class="col-11">
                    One of two columns
                </div>
            </div>
        </div>
      </div>
    )
      
  }
}

export default Frontpage;
