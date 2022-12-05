import React, {Component} from "react";

class Dojo extends Component {    
        render() {        
            return( 
            <div>
                <h1 className="my-class">Hello Dojo!</h1>
                <h4 className="my-class">Things I need to do:</h4>
                <ul className="my-class">
                    <li>Learn React</li>
                    <li>Climb Mt Evereset</li>
                    <li>Run a marathon</li>
                    <li>Feed the dogs</li>
                </ul>
            </div>            
        );    
        }
    }
export default Dojo;