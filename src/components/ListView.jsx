import React from 'react';
import './ListView.css';

const ListView = (props) => {
    const {title, image, desc, price, duration} = props.adventureObj
    return (
        <div className='list-view'>
            <h3>{title}</h3>
            <div className="image-handler">
            <img src={image} alt={`${title}`}/>
            </div>
            <div className='desc'>{desc}</div>
            <div className="info">
                <div>${price}</div>
                <div>{duration} Day(s)</div>
            </div>
        </div>
    );
}
export default ListView;