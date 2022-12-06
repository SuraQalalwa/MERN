import React, {Component} from "react";

class Dojo extends Component { 
    state = {
        dojos:["Learn React","Climb Mt Evereset","Run a marathon","Feed the dogs"]
      }
        render() {        
            return( 
            <div>
                <h1 className="my-class">Hello Dojo!</h1>
                <h4 className="my-class">Things I need to do:</h4>
                <ul className="my-class">{this.state.dojos.map(x=><li key={x}>{x}</li>)}</ul>
            </div>            
        );    
        }
    }
export default Dojo;
