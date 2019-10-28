import React, { Component } from 'react';
import './ListEditor.css'

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
                    <h2>Title</h2>
                    <input className='title-input' type="text" placeholder={title} onChange={(e) => title = e.target.value} />
                    <div className='image-title'>image</div>
                    <input className='image-input' type="text" placeholder={image} onChange={(e) => image = e.target.value} />
                    <p>description</p>
                    <input className='description-input' type="text" placeholder={desc} onChange={(e) => desc = e.target.value} />
                    <div className="info-container">
                        <div className="price-container">
                            <div>price</div>
                            <input className='price-input' type="number" placeholder={price} onChange={(e) => price = e.target.value} />
                        </div>
                        <div className="days-container">
                            <div>days</div>
                            <input className='duration-input' type="number" placeholder={duration} onChange={(e) => duration = e.target.value} />
                        </div>
                    </div>
                </div>
                <button onClick={() => this.props.updateFn(personalId, { id, title, image, desc, price, duration })}>Save</button>

            </div>
        );
    }
}

export default ListEditor;