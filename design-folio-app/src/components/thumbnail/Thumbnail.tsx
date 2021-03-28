import React, { useState } from 'react';
import './Thumbnail.scss';

function Thumbnail(props: any) {
    const [image, setImage] = useState(props.image);
    return (
        <div className="thumbnail" style={{backgroundImage:`url(${image})`}}>
        </div>
    )
}

export default Thumbnail;