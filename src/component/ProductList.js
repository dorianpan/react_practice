import React from 'react'

export default function ProductList({ items }){
    return (
        <div className = "productListContainer">
            { items.map(
                item => (
                    <div key = {items.id} id = {items.id} className="productListItemWrapper">
                        <div className = "productListItem">
                            {item.name}
                        </div>
                           
                        
                    </div>
                )
            )}
        </div>


    )
    
}