import  React , {Component} from 'react';


class Time extends Component {
	

render(){
	
return (
 
	<div>
<h1> The time is : <div id="timeText1">00:00:00</div></h1>

</div>

  );
}}



setInterval(function(){
    this.timeText1.innerHTML =new Date().toLocaleTimeString();
}, 1000);
 
 
 
 export default  Time;