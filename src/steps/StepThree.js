import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { updateDrent } from '../ducks/reducer';

class StepThree extends Component {
    render(){
        const { updateDrent } = this.state
        return(
            <div>
              <input type='text' placeholder='Name' onChange={e => updateDrent(e.target.value)}></input>
              
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { drent } = state;
    return{
        drent
    }
}
export default connect(mapStateToProps, {updateDrent})(StepThree)