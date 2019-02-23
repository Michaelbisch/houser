import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { updateName, updateAddress,  updateCity, updateZipcode, updateInput  } from '../ducks/reducer';


class StepOne extends Component {
    constructor(props){
        super(props)
    }
    postHouse(){
        const { name, address, city, state, zipcode } = this.props;
    axios.post('/api/house', { name, address, city, state, zipcode }).then(res => {
      this.setState({
        name: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        input: ''
      });
    });
    }
    render(){
        const { updateName, updateAddress,  updateCity, updateZipcode, updateInput } = this.props
        return(
            <div>
                <input type='text' placeholder='Name' onChange={e => updateName(e.target.value)}></input>
                <input type='text' placeholder='Address' onChange={e => updateAddress(e.target.value)}></input>
                <input type='text' placeholder='City' onChange={e => updateCity(e.target.value)}></input>
                <input type='text' placeholder='State' onChange={e => updateState(e.target.value)}></input>
                <input type='text' placeholder='Zipcode' onChange={e => updateZipcode(e.target.value)}></input>
                <button onClick={() => this.postHouse()}>complete</button>
                <button id='dashboard' onClick={<Dashboard/>}>Cancel</button>
            </div>
        )
    }
    }
    function mapStateToProps(state) {
        const {name, address, city, state, zipcode, input  } = state;
        return{
            name,
            address,
            city,
            state, 
            zipcode,
            input
        }
    }
    export default connect(mapStateToProps, {updateName, updateAddress,  updateCity, updateZipcode, updateInput})(StepOne)