import React from 'react'
import "./Title.css"

export default function Title({ children, className }) {
    return (
        <h3 className={'title-h3 ' + className}>{children}</h3>
    )
}
