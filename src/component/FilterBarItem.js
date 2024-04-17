import React from 'react'

export default function FilterBarItem({subType, handleClick, selectedFilter}){
    if (selectedFilter === subType){
        return (
            <li onClick = {() => (handleClick(subType))} className = "filterSelected">
                {subType}
            </li>
        )
        
    }
    
    return (
        <li onClick = {() => (handleClick(subType))}>
            {subType}
        </li>
    )
    

    
}