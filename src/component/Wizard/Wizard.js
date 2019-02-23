import React, { Component } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import axios from 'axios'
class Wizard extends Component {
    constructor(){
        super()
    }
    
render(){
    return(
        <div>
            <button id='dashboard' onClick={<Dashboard/>}>Cancel</button>
        </div>
    )
}
}

export default Wizard