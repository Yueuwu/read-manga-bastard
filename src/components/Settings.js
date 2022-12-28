import React from 'react';
import s from './settings.module.css'

const Settings = ({current, setChapter}) => {
    const arr = Array.apply(null, {length: 95}).map((_, i) => i++);
    const changeChapter = e => {
        console.log((e.target.value), typeof(e.target.value));
        setChapter(Number(e.target.value))
    }
    const save = () => {
        const data = {
            chapter: current,
            position: window.pageYOffset
        }
        const json = JSON.stringify(data)
        localStorage.setItem('data', json)
    }
    const load = () => {
        let data = localStorage.getItem('data')
        data = data ? JSON.parse(data) : {}
        setChapter(data['chapter'])
        window.scrollTo(0, Number(data['position']))
    }
    return (
        <div className={s.wrap}>
            <div>
                <h4>Choose chapter</h4>
                <select value={current} onChange={changeChapter}>
                    {arr.map((e, i) => <option  key={i} value={e}>{e}</option>)}
                </select>
            </div>
            <div>
                <div className={s.saveload} onClick={save}><h4>Save</h4></div>
                <div className={s.saveload} onClick={load}><h4>Load</h4></div>
            </div>
        </div>
    );
};

export default Settings;