import React from 'react';

const ListView = (props) => {
    const {title, image, desc, price, duration} = props.adventureObj
    return (
        <div className='list-view'>
            <h3>{title}</h3>
            <div className="image-handler">
            <img src={image} alt={`${title}`}/>
            <p>{desc}</p>
            </div>
            <div className="info">
                <div>${price}</div>
                <div>{duration} Day(s)</div>
            </div>
        </div>
    );
}
export default ListView;