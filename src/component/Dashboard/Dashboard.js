import React, { Component } from 'react';
import House from '../House/House'
import Wizard from '../Wizard/Wizard'
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            houses: []
        }
        this.deleteHouse = this.deleteHouse.bind(this)
    }
    componentDidMount(){
        axios.get('/api/houses/').then( res => {
            this.setState({
                houses: res.data
            })
        })
    }
    getNewHouseList(){
        axios.get('/api/houses/').then( res => {
            this.setState({
                houses: res.data
            })
        })
    }

deleteHouse(id) {
    axios.delete(`/api/house/${id}`).then( res => {
     this.setState({
         houses: res.data
     })
    })
}

render(){
    const mappedHouses = this.state.houses.map(house => {
        return(
            <House 
            houses={this.state.houses}
            delete={this.deleteHouse}/>
        )
    })
    return(
        <div>
            <button id='wizard' onClick={<Wizard/>}>Add new property</button>
            {mappedHouses}
        </div>
    )
}
}

export default Dashboard

//hey