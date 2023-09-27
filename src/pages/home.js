import React, { Component } from 'react';
 
class Home extends Component {
  render() {
    const myStyle={
        backgroundImage: "url('bg1.jpg')",
  height: '75vh',
  width : '189vh',
  backgroundattachment: 'fixed',
  backgroundposition: 'center center',
  backgroundrepeat: 'no-repeat',
  backgroundsize: 'cover',
    };
    return (
      
        <div className ="container fixed-left">
          <div className="col-sm">
          <div style={myStyle}>
          
          </div>
        </div>
      
      </div>
    );
  }
}
  
export default Home;