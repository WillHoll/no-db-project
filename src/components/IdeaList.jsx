import React, { Component } from 'react';
import axios from 'axios';

class IdeaList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adventureList: [],
            duration: '',
            price: '',
        }
    }
    
    componentDidMount() {
        axios
            .get('/api/adventures')
            .then(res => {
                this.setState({
                    adventureList: res.data
                });
            });
    }

    adventurerFilter(duration, price) {
        if (duration && price) {
            axios
                .get(`/api/adventures?q={"duration": "${duration}", "price": {"${price}"}`)
                .then((res) => {
                    this.setState({
                        adventureList: res.data
                    })
                })
        }
    }


    render() {
        let {duration, price} = this.state
        return (
            <div className='idea-list'>
                <div className="search-inputs">
                    <input placeholder='Duration' onChange={(e) => this.setState({duration: e.target.value})}/>
                    <input placeholder='Max price' onChange={(e) => this.setState({price: e.target.value})}/>
                    <button onClick={() => this.adventurerFilter(duration, price)}>Search</button>
                </div>
            </div>
        );
    }
}

export default IdeaList;