import React from 'react'
import ProductList from './ProductList'

export default function Product({subTypes, items}){
    return (
        <div>
            {subTypes.map(
            t => <ProductList category = {t} items = {items}></ProductList>
            )}
        </div>
    )

}