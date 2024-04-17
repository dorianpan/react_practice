import React from 'react'
import ProductList from './ProductList'

/**
 * Product组件，用来在页面的右下方展示所有的商品以及对应的子类
 * @param {Array} subTypes - 商品子类的数组，包含了所有该商品类型的子类别
 * @param {Array} items - 所有商品的数组
 */
export default function Product({subTypes, items}){
    return (
        <div className = "productContainer">
            {
                // 遍历所有数组，为每个子类渲染一个ProductList组件
                subTypes.map(
                    // 使用箭头函数遍历子类型，每个子类型对应一个商品列表
                    t => (
                         // 将子类型作为category传给子组件， 同时将商品数组传入
                        <ProductList key = {t} category = {t} items = {items}> 
                        </ProductList>
                    )
                       
            )}
        </div>
    )

}