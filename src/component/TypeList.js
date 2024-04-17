import React from 'react'

export default function TypeList({ types, handleClick }){
    return (
        <div  className = "typeListContainer">
            {
                types.map(
                    type => (
                        <li onClick = {() => handleClick(type.id)}
                            className = "typeListItem">
                            {type.name}
                        </li>
                    )
                )
            }
        </div>
    )
}