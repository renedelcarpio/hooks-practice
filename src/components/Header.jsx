import React, { useState } from 'react'

import '../styles/Header.css'

function Header() {
    const [darkMode, setDarkMode] = useState(false)

    const handleClick = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
            <h1>Práctica de React Hooks</h1>
            <button type='button' onClick={handleClick}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
        </div>
    )
}

export default Header
