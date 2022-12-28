import React from 'react';
import s from './oneImage.module.css'

const OneImage = ({img}) => {
    return (
        <div className={s.wrapper}>
            <img className={s.img} src={img}/>
        </div>
    );
};

export default OneImage;