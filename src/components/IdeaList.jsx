import React, { Component } from 'react';
import axios from 'axios';
import ListView from './ListView';


class IdeaList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adventureList: [],
            duration: null,
            price: null,
        }
    }
    
    componentDidMount() {
        axios
            .get('/api/adventures')
            .then(res => {
                this.setState({
                    adventureList: res.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    adventureFilter(duration, price) { //send proper url based on query/queries
        if (duration && price) {
            axios
                .get(`/api/adventures?duration=${duration}&price=${price}`)
                .then((res) => {
                    this.setState({
                        adventureList: res.data
                    })
                })
                .catch(err => {
                    console.log(err);
                });
        } else if (duration && !price) {
            axios
                .get(`/api/adventures?duration=${duration}`)
                .then((res) => {
                    this.setState({
                        adventureList: res.data
                    })
                })
                .catch(err => {
                    console.log(err);
                });
        } else if (!duration && price) {
            axios
                .get(`/api/adventures?price=${price}`)
                .then((res) => {
                    this.setState({
                        adventureList: res.data
                    })
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            this.componentDidMount()
        }
        this.setState({
            duration: null,
            price: null
        })
    }

    adventureTaker(adventure) {
        axios
            .post(`/api/mylist/`, adventure)
            .then(res => {
                this.props.history.push('/')
            })
    }


    render() {
        let {adventureList, duration, price} = this.state
        const adventureDis = adventureList.map(adventure => (
            <div key={adventure.id} className="container">
                <ListView  adventureObj={adventure}/>
                <button  onClick={() => this.adventureTaker(adventure)}>Add to My List</button>
            </div>
        ))
        return (
            <div className='idea-list'>
                <h2>Good Ideas to Add to Some Bucket List if that's what you're into</h2>
                <div className="search-inputs">
                    <input placeholder='Max days'  onChange={(e) => this.setState({duration: e.target.value})}/>
                    <input placeholder='Max price' onChange={(e) => this.setState({price: e.target.value})}/>
                    <button onClick={() => this.adventureFilter(duration, price)}>Search</button>
                </div>
                <div className="display-data">
                    {adventureDis}
                </div>
            </div>
        );
    }
}

export default IdeaList;