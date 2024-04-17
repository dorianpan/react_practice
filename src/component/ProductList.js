import React from 'react'

export default function ProductList({ category, items }){

    let qualifiedItem = [];
    // 遍历所有items，如果item属于该category，则加入qualified以便后续渲染
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
                <h3>{category}</h3>
                <div>
                    -- 新的宝贝在路上啦，请敬请期待！--
                </div>

             </div>
        )
    }

    return (
        <div>
            <h3>{category}</h3>
            <div className = "productListContainer">
                { qualifiedItem.map(
                    item => (
                        <div key = {items.id} id = {items.id} className="productListItemWrapper">
                            <div className = "productListItem">
                                {item.name}
                            </div>
                            
                            
                        </div>
                    )
                )}
            </div>

        </div>
        


    )
    
}