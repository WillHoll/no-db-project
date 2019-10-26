import React, { Component } from 'react';
import axios from 'axios';
import ListView from './ListView';

class MyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myAdventures: []
        }
    }
    
    componentDidMount() {
        axios
            .get('/api/mylist')
            .then(res => {
                this.setState({
                    myAdventures: res.data
                })
            })
    }

    deleteEntry(id) {
        axios
            .delete(`/api/mylist/${id}`)
            .then((res) => {
                this.setState({
                    myAdventures: res.data
                })
            })
    }


    render() {
        let {myAdventures} = this.state
        const adventureDis = myAdventures.map(adventure => (
            <div key={adventure.personalId} className="container">
                <ListView adventureObj={adventure}/>
                <button onClick={this.deleteEntry(adventure.personalId)}>Delete</button>
            </div>
        ))
        return (
            <div className='user-list'>
                <h2>
                    Deez be mAAAiii adventures, SCRUB!
                </h2>
                {adventureDis}
            </div>
        );
    }
}

export default MyList;