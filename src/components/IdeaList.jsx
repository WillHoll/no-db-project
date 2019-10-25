import React, { Component } from 'react';
import axios from 'axios';

class IdeaList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adventureList: [],
            duration: '',
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
            return(
                alert("enter valid search inputs")
            )
        }
        this.setState({
            duration: '',
            price: null
        })
    }


    render() {
        let {duration, price} = this.state
        return (
            <div className='idea-list'>
                <div className="search-inputs">
                    <input placeholder='Duration' onChange={(e) => this.setState({duration: e.target.value})}/>
                    <input placeholder='Max price' onChange={(e) => this.setState({price: e.target.value})}/>
                    <button onClick={() => this.adventureFilter(duration, price)}>Search</button>
                </div>
            </div>
        );
    }
}

export default IdeaList;