import React, { Component } from 'react';
import axios from 'axios';

class AddToList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            image: '',
            desc: '',
            price: null,
            duration: null
        }
    }
    personal(body) {
        axios
            .post('/api/mylist', body)
            .then((res) => {
                this.props.history.push('/')
            })
        this.setState({
            title: '',
            image: '',
            desc: '',
            price: null,
            duration: null
        })
    }
    postable(body) {
        axios
            .post('/api/adventures', body)
            .then(res => {
                this.props.history.push('/ideas')
            })
        this.setState({
            title: '',
            image: '',
            desc: '',
            price: null,
            duration: null
        })
    }

    render() {
        return (
            <div className="add-to-list">
                <div className='input-holder'>
                    <h2>Time to Make Some SOUP</h2>
                    <p>What's your title gonna be?</p>
                    <input onChange={(e) => this.setState({ title: e.target.value })} />
                    <p>Wanna picture? You can add one. It's pretty easy</p>
                    <input onChange={(e) => this.setState({ image: e.target.value })} />
                    <p>Add some kind of description. You don't want people guessing</p>
                    <input onChange={(e) => this.setState({ desc: e.target.value })} />
                    <p>How much money does it cost?/How much you wanna get?</p>
                    <input onChange={(e) => this.setState({ price: e.target.value })} />
                    <p>How many days will this activity last?</p>
                    <input onChange={(e) => this.setState({ duration: e.target.value })} />
                </div>
                <div className="button-holder">
                    <button onClick={() => this.personal(this.state)}>Add as Personal Activity</button>
                    <button onClick={() => this.postable(this.state)}>Post as Offer</button>
                </div>
            </div>
        );
    }
}

export default AddToList;