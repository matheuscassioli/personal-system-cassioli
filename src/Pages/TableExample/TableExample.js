import React from 'react';
import api from "./API/api.json";

export default function TableExample() {

    console.log(api)

    return (
        <div className='has-text-black'>
            <table>
                <thead>
                    <td>
                        {Object.keys(api.data.headers).map(key => {
                            return <th key={key}>{api.data.headers[key]}</th>
                        })}
                    </td>
                </thead>
                <tbody>
                    {Object.keys(api.data.data).map(key => {
                        return <tr key={key}>
                            {
                                Object.keys(api.data.data[key]).map(index => {
                                    if (index !== 'id') {
                                        return (<td key={index}>{api.data.data[key][index]}</td>)
                                    }
                                })
                            }
                        </tr>
                    })}
                </tbody>
            </table>
            {/* <Pagination
                count={10}
                renderItem={(item) => (
                    <PaginationItem
                        slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                        {...item}
                    />
                )}
            /> */}
        </div>
    );
}
