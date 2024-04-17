import React from 'react'

/**
 * TypeItem 创建一个左侧商品类型tab， 如果商品被选中则标橙色
 * @param {Object} type - 商品类型object
 * @param {Function} handleClick - 用于改变父组件的selectedType
 * @param {Object} selected - 选中商品类型的object
 */
export default function TypeItem({type, handleClick, selected}){
    if (type.id === selected.id){
        return (
            <>  
                
                <li key = {type.id} onClick = {() => handleClick(type.id)}
                                className = "typeListItemSelected">
                    <div className = "orangeBar"></div>  
                    <div> {type.name} </div>
                </li>
            </>
        )
    }

    return (
        <>
            <li key = {type.id} onClick = {() => handleClick(type.id)}
                            className = "typeListItem">
                            {type.name}
            </li>
        </>
    )
}