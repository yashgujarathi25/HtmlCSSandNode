import React, { component } from 'react'
class Second extends React.Component{

    incrementCounter=()=>{
        alert ("in increament");
    };

    decreamentCounter=()=>{
        alert("in decreament")
    };
render(){
    return(
        <div>
            <button type="button" name='btn' id='btn' value='btn' onClick={this.incrementCounter}>Click Counter</button>
            <br/><br/>
            <button type='button' name='btn' id='btn1' value='btn1' onClick={this.decreamentCounter}>Decrement Counter</button>
        </div>
    );
}
}

export default Second;