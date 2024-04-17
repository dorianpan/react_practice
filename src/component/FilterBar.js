import React from 'react'

/**
 * FilterBar 模组，用于顶部商品子类别的快速定位
 * 
 * @param {Array} subTypes - 该商品类型包含的子类别
 */
export default function FilterBar({subTypes}){
    
    // FilterBar 元素的handleClick，将屏幕滚动到对应HTML id的位置，快速定位
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