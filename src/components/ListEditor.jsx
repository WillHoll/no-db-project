import React, { Component } from 'react';

class ListEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personalId: '',
            id: '',
            title: '',
            image: '',
            desc: '',
            price: null,
            duration: null
        }
    }
    componentDidMount() {
        const { personalId, id, title, image, desc, price, duration } = this.props.editAdventure
        this.setState({ personalId, id, title, image, desc, price, duration })
    }


    render() {
        let state = this.state
        let { personalId, id, title, image, desc, price, duration } = state
        return (
            <div className='list-editor'>
                <div className="input-holder">
                    <input className='title-input' type="text" placeholder={title} onChange={(e) => title = e.target.value}/>
                    <input className='image-input' type="text" placeholder={image} onChange={(e) => image = e.target.value}/>
                    <input className='description-input' type="text" placeholder={desc} onChange={(e) => desc = e.target.value}/>
                    <input className='price-input' type="number" placeholder={price} onChange={(e) => price = e.target.value}/>
                    <input className='duration-input' type="number" placeholder={duration} onChange={(e) => duration = e.target.value}/>
                </div>
                <button onClick={() => this.props.updateFn(personalId, {id, title, image, desc, price, duration})}>Save</button>

            </div>
        );
    }
}

export default ListEditor;