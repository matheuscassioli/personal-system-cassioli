import React from 'react'
import InputComponent from '../InputTypes/InputComponent/InputComponent'


export default function RenderInputTypes({ placeholder, title, value, icon, id, type }) {


    if (type == "text")
        return <InputComponent
            placeholder={placeholder}
            title={title}
            value={value}
            icon={icon}
            id={id}
            type={type}
        />

    if (type == "password")
        return <InputComponent
            placeholder={placeholder}
            title={title}
            value={value}
            icon={icon}
            id={id}
            type={type}
        />

}
