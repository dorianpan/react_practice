import React from 'react'

export default function FilterBar({subTypes}){
    const handleClick = (id) => {
        const elem = document.getElementById(id);
        if (elem){
            elem.scrollIntoView({behavior: "smooth"}); //滚动到该id所在的位置
        }
    }

    
    return (
        <div className = "filterBarContainer">
            <ul>
            {
                subTypes.map(subType => (
                    <li key = {subType} onClick = {() => (handleClick(subType))}>
                    {subType}
                    </li>
                ))
            }
            </ul>
        
        </div>
    )
}