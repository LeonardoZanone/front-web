import React from 'react'
import './layouts.css';

export default function Button({ text, className }) {
    return (
        <>
            <button className={className + ' simple-button'}>{text}</button>
        </>
    )
}
