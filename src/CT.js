import  React , {Component} from 'react';
import './CT.css';

class CT extends Component {
	

render(){
	
return (
 
    <div>
        <div id="header1">
            <img src="http://pluspng.com/img-png/amazon-logo-vector-png-amazon-logo-vector-512.png"/>
        </div>
        <div id = "container">  
                <div id="section1"><img id="image" src="https://i.imgur.com/PTgQlim.png"/></div>
                <div id="timetextC">00:00:00</div>
                <div id="heart1">
                   <i className="fas fa-heart-circle"></i>

                   <p>75></p>
                </div>
          
            <div id="section2">
                <h1>FitBit 19 - The Smartest Watch</h1>
                <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor </p>
              <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor </p>
 <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor </p>
              <h2>Select Color</h2>
                <div id="colors">
                    <p id="purple" className="col"></p>
                    <p id="black" className="col"></p>
                    <p id="blue" className="col"></p>
                    <p id="pink" className="col"></p>
                    <p id="red" className="col"></p>
                </div>
                <h2>Features</h2>
                <div id="buttons">
                    <button id="button1">Time</button>
        <button id="button2" >Heart Rate</button>
                </div>
                <button>Buy Now</button>
            </div>
        </div>
    </div>
  );
}}


 export default  CT;