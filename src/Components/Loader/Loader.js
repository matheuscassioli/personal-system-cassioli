import React from 'react'
import { Triangle } from 'react-loader-spinner'

export default function Loader({ className }) {

    return (
        <Triangle
            wrapperClass={className}
            height="100"
            width="100"
            radius="9"
            color="#ffffff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    )
}
