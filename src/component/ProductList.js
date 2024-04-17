import React from 'react'

export default function ProductList({ items }){
    return (
        <div className = "productListContainer">
            { items.map(
                item => (
                    <div key = {items.id} id = {items.id}>
                        <span>
                            {item.name}
                        </span>
                    </div>
                )
            )}
        </div>


    )
    
}