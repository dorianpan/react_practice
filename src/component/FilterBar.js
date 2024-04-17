import React from 'react'

export default function FilterBar({subTypes}){
    return (
        <div className = "filterBarContainer">
            <ul>
            {
                subTypes.map(subType => (
                    <li key = {subType}>
                        {subType}
                    </li>
                ))
            }
            </ul>
        
        </div>
    )
}