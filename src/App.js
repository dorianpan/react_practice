/**
 * FileName: App.js
 * Author: 潘思宇
 * Date: 2024/4/17
 * Description: 该app是基于React的前端模拟淘宝网商品分类节目的项目，该项目通过
 *              react实现了根据分类选项进行实时渲染的功能，同时运用css实现了和
 *              淘宝页面相近的样式设计。所使用的数据均为伪数据，数据获取渠道为Google
 */

import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import FilterBar from './component/FilterBar'
import TypeList from './component/TypeList' 
import Product from './component/Product'
import {types, products} from './component/data'

/**
 * 主要function,通过app实现商品分类页面的渲染
 */
function App() {
  // 使用useState初始化selectedType为数组的第一个元素
  const [selectedType, setSelectedType] = useState(types[0])
  const [selectedFilter, setSelectedFilter] = useState("猜你喜欢")
  /**
   * handleClick函数，更新用户选择的产品类型
   * 
   * @param {number} i 由TypeList传入的type id, 代表了用户选择的
   */
  function handleClick(i){
    // 更新selectedType为types数组的第i-1个元素
    // 因为数组是0索引的
    setSelectedType(types[i-1]); 
    setSelectedFilter("猜你喜欢"); //重新初始化子类别
  }

  function handleClickFilter(s){
    setSelectedFilter(s);

  }
  
  // 渲染组件
  return (
    <div className = "topLevel">
      {/* TypeList组件显示类型列表，点击类型时会调用handleClick */}
      <TypeList types = {types} handleClick = {handleClick} selected = {selectedType}> </TypeList>
      <div className = "rightContainer">
        {/* FilterBar组件显示选定类型的子类型过滤器，点击会跳转到页面对应位置 */}
        <FilterBar subTypes = {selectedType.subTypes} handleClickFilter = {handleClickFilter} 
                   selectedFilter = {selectedFilter}> </FilterBar>

        {/* 产品数据通过selectedType的id从products中获取，数据为伪数据，存放与data.js */}
        <Product items = {products[selectedType.id]} subTypes = {selectedType.subTypes}></Product>
      </div>
     
    </div>
  );
}

export default App;
