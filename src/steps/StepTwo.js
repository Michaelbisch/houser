import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { updateImage } from '../ducks/reducer';

class StepTwo extends Component {
    render(){
        const { updateImage }
        return(
            <div>
               <input type='text' placeholder='Name' onChange={e => updateImage(e.target.value)}></input>
            </div>
        )

    }
}
function mapStateToProps(state) {
    const { image } = state;
    return{
        image
    }
}
export default connect(mapStateToProps, {updateImage})(StepTwo)