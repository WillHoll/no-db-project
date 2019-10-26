import React, { Component } from 'react';
import axios from 'axios';
import ListView from './ListView';
import ListEditor from './ListEditor';

class MyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myAdventures: [],
            edit: false
        }
        this.update = this.update.bind(this)
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
    editToggle(edit) {
        this.setState({
            edit: !edit
        })
    }

    update(id, body) {
        axios
            .put(`api/mylist/${id}`, body)
            .then(res => {
                this.setState({
                    myAdventures: res.data
                })
            })
        this.editToggle(this.state.edit)
    }



    render() {
        let { myAdventures, edit } = this.state
        const adventureDis = myAdventures.map(adventure => (
            <div key={adventure.personalId} className="container">
                {
                    !edit ?
                        <div className="stupid-div">
                            <ListView adventureObj={adventure} />
                            <button onClick={() => this.deleteEntry(adventure.personalId)}>Delete</button>
                        </div>
                        :
                        <div className="stupid-div">
                            <ListEditor updateFn={this.update} editAdventure={adventure} />
                            <button onClick={() => this.editToggle(edit)}>Cancle</button>
                        </div>
                }
            </div>
        ))
        return (
            <article className='user-list'>
                <h2>
                    Deez be mAAAiii adventures, SCRUB!
                </h2>
                <button onClick={() => this.editToggle(edit)}>Edit</button>
                {adventureDis}
            </article>
        );
    }
}

export default MyList;