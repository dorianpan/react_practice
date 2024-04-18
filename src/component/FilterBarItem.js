import React from 'react'

/**
 * FilterBarItem 创建一个顶部商品子类型tab， 如果商品类型被选中则标橙色
 * @param {string} subType - 商品子类型object
 * @param {Function} handleClick - 用于改变父组件的selectedFilter
 * @param {string} selected - 选中的商品子类型
 */
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