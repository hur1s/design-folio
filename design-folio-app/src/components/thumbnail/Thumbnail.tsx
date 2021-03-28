import React, { useState } from 'react';
import './Thumbnail.scss';

function Thumbnail(props: any) {
    const [image, setImage] = useState(props.image);
    return (
        <div className="thumbnail h-40 w-40 inline-block md:h-52 md:w-52" style={{backgroundImage:`url(${image})`}} onClick={() => props.onClick(image)}>
        </div>
    )
}

export default Thumbnail;