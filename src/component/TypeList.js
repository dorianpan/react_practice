import React from 'react'

/**
 * TypeList是左侧分类栏的组件，显示一组类型列表
 * @param {Array} types - 包含了所有可能的商品类型
 * @param {Function} handleClick - 由App组件传入的handler，负责让父组件知道
 *                   选中的类型id
 * 
 */
export default function TypeList({ types, handleClick }){
    return (
        <div  className = "typeListContainer">
            {   
                // 迭代types数组，为每个类型生产一个列表项
                types.map(
                    type => (
                        // 使用箭头函数在点击事件上调用handleClick函数，传入当前类id
                        // 让父组件知道选中类型的id
                        <li key = {type.id} onClick = {() => handleClick(type.id)}
                            className = "typeListItem">
                            {type.name}
                        </li>
                    )
                )
            }
        </div>
    )
}