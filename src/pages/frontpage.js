import React from 'react';
import './frontpage.scss';

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
                <div className="col-sm">
                    One of three columns \\n
                    testOne of three columns \\n
                    testOne of three columns \\n
                    testOne of three columns \\n
                    testOne of three columns \\n
                </div>
                <div className="col-sm">
                    One of three columns
                </div>
                <div className="col-sm">
                    One of three columns
                </div>
            </div>
            <div className="row">
                <div id="testCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#testCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#testCarousel" data-slide-to="1"></li>
                        <li data-target="#testCarousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="logo512.png" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="testimage_1.png" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="logo192.png" className="d-block w-100" alt="..." />                       
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#testCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#testCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                
            </div>
        </div>
      </div>
    )
      
  }
}

export default Frontpage;
