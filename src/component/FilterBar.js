import React from 'react'
import FilterBarItem from './FilterBarItem'
/**
 * FilterBar 模组，用于顶部商品子类别的快速定位
 * 
 * @param {Array} subTypes - 该商品类型包含的子类别
 */
export default function FilterBar({subTypes, handleClickFilter, selectedFilter}){
    
    // FilterBar 元素的handleClick，将屏幕滚动到对应HTML id的位置，快速定位
    const handleClick = (id) => {
        handleClickFilter(id) /* 将父组件的selectedFilter改为当前类别 */
        const elem = document.getElementById(id);
        if (elem){
            elem.scrollIntoView({alignToTop: false, behavior: "smooth"}); //滚动到该id所在的位置
        }
        
    }

    
    return (
        <>
            <div className = "topMask"> </div>
            <div className = "filterBarContainer">
                {
                    subTypes.map(subType => (

                       <FilterBarItem key = {subType} subType = {subType} 
                                      handleClick = {handleClick} selectedFilter = {selectedFilter}></FilterBarItem>
                    ))
                }   
            </div>

        </>
        
    )
}