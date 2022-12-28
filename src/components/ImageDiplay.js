import React from 'react';
import OneImage from "./OneImage";
import s from './imageDisplay.module.css'

const ImageDiplay = ({imgs, settingsVisible}) => {
    const styleHandler = () => {
        let a = {}
        if (settingsVisible) {
            a = {
                opacity: 0.3
            }
        }
        return a
    }
    return (
        <div className={s.wrap} style={styleHandler()}>
            {imgs.map((e, idx )=> <OneImage key={idx} img={e}/>)}
        </div>
    );
};

export default ImageDiplay;