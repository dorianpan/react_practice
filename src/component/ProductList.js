/**
 * FileName: ProductList.js
 * Author: 潘思宇
 * Date: 2024/4/17
 */
import React from 'react'
import Item from './Item'
/**
 * ProductList 模组，属于Product的子模组，用于渲染一个商品展示的block
 * 
 * @param {string} category - 该block对应的子类型
 * @param {Array} items - 包含所有商品object的数组
 */
export default function ProductList({ category, items }){
    let qualifiedItem = []; // 初始化一个数组用来存放符合条件的商品

    // 遍历所有items，筛选出符合当前类别的商品
    items.forEach(item => {
        item.types.forEach(t => {
            if (t === category){
                qualifiedItem.push(item);
            }
        })
    })

    if (qualifiedItem.length === 0){ // 没有符合元素，该类别为空
        return (
            <div>
                <h3 className = "productListHeader">{category}</h3>
                <div className = "productListMsg">
                    -- 新的宝贝在路上啦，请敬请期待！--
                </div>

             </div>
        )
    }

    return (
        <div>
            <div id = {category} className = "productListHeader">{category}</div>
            <div className = "productListContainer">
                { qualifiedItem.map(
                    item => (
                        <Item key = {item.id} item = {item}></Item>
                    )
                )}
            </div>

        </div>
    )
    
}