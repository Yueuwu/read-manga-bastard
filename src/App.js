import './App.css';
import {useEffect, useState} from "react";
import t from './assets/manga.json'
import ImageDiplay from "./components/ImageDiplay";
import Settings from "./components/Settings";
import React from "react";
import settingsIcon from './assets/settings_icon.png'

const App = () => {
    const [items, setItems] = useState([])
    const [currentChapter, setChapter] = useState(0)
    const [settingsVisible, setVisible] = useState(false)
    useEffect(() => {
        const res = JSON.stringify(t)
        let a = JSON.parse(res);
        setItems(a)
    }, [])
    const nextChapter = () => {
        if (currentChapter < 94) {
            setChapter(currentChapter + 1)
            window.scrollTo(0, 0)
        }

    }
    const previousChapter = () => {
        if (currentChapter > 0){
            setChapter(currentChapter - 1)
            window.scrollTo(0, 0)
        }
    }

    return (
        <div className="App">
        <div onClick={() => setVisible(false)}>
            <div className='title'><h1>Chapter {currentChapter}</h1></div>
            {items.map((e, idx) => e['chapter'] === currentChapter &&
                <ImageDiplay key={idx} settingsVisible={settingsVisible} imgs={e['imgs']}/>)}
            <div className='btns'>
                <button onClick={nextChapter} className='btn'>Next</button>
                <button onClick={previousChapter} className='btn'>Prev</button>
            </div>
        </div>
            {
                settingsVisible && <Settings current={currentChapter} setChapter={setChapter}/>
            }
            <div onClick={() => setVisible(!settingsVisible)} className='settingsbtn'>
                <img className='settingsimg'
                     src={settingsIcon}/>
            </div>
        </div>
    );
}

export default App;
