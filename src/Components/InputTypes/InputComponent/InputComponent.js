import React from 'react'

export default function InputComponent({ placeholder, title, value, icon, id, type }) {
    return (
        <div className="field">
            <label className="label">{title}</label>
            <div className="control has-icons-left has-icons-right">
                <input className="input" id={id} type={type} placeholder={placeholder} value={value} autoComplete='off' />
                <span className="icon is-small is-left">
                    {icon}
                </span>
                <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle"></i>
                </span>
            </div>
            <p className="help is-danger"></p>
        </div>
    )
}
