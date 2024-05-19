import { useState, useEffect } from "react";
import Link from "next/link";
import login from "./login"
import styles from "../app/styles/index.css"

const linkStyle = {
    marginRight: 15
}

const Menu = () => {
    const [mode, setMode] = useState('work'); 
    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        } else if (!isActive && time !== 0) {
            clearInterval(interval);
        } else if (isActive && time === 0) {
            if (mode === 'work') {
                setMode('rest');
                setTime(5 * 60); 
            } else {
                setMode('work');
                setTime(25 * 60); 
            }
        }
        return () => clearInterval(interval);
    }, [isActive, time, mode]);

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        if (mode === 'work') {
            setTime(25 * 60);
        } else {
            setTime(5 * 60);
        }
        setIsActive(false);
    };

    const addTime = (additionalTime) => {
        setTime(prevTime => prevTime + additionalTime);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div>
            <nav className="navbar">
                <div className="max-width">
                    <div className="logo">
                        <a href="/">Pomofocus</a>
                    </div>
                    <ul className="menu">
                        <li><a href="/tasks" className="menu-btn">Tasks</a></li>
                        <li><a href="/" className="menu-btn">Log Out</a></li>
                    </ul>
                    <div className="menu-btn">
                        Menu
                    </div>
                </div>
            </nav>
            <div className="pomodoro-container">
                <h1>Pomodoro Timer</h1>
                <div className="timer">{formatTime(time)}</div>
                <div className="controls">
                    <div className="button-container">
                        <button className={`btn ${isActive ? 'pause-btn' : 'start-btn'}`} onClick={toggleTimer}>
                            {isActive ? 'Pause' : 'Start'}
                        </button>
                    </div>
                    <div className="button-container">
                        <button className="btn" onClick={resetTimer}>
                            Reset
                        </button>
                    </div>
                    <div className="button-container">
                        <Link href="./short_break">
                            <button className="btn add-time-btn" >
                                Short Break
                            </button> 
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;