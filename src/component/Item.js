import React from 'react'

export default function Item({item}){
    return (
        <div className="productListItemWrapper">
            <div className = "productListItem">
                <div >
                    <img className = "image" src = {item.img} alt = "" title = {item.name}></img>
                </div>
                <div>
                    {item.name}
                </div>   
            </div>
        </div>
    )
}