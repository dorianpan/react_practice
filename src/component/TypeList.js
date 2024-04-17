import React from 'react'

export default function TypeList({ types }){
    return (
        <div  className = "typeListContainer">
            {
                types.map(
                    type => (
                        <li>
                            {type.name}
                        </li>
                    )
                )
            }
        </div>
    )
}