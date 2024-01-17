import React from 'react'

const Button = ({ children, onClick, disabled }) => {
    const handleClick = () => {
        if (onClick && !disabled) {
            onClick();
        }
    };
    return (
        <button onClick={handleClick} className={`w-[100px] border-0 p-2 bg-[crimson] ${disabled && 'opacity-50 cursor-not-allowed' 
            } text-white rounded`}>{children}</button>
    )
}

export default Button