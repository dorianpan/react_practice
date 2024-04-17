import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import FilterBar from './component/FilterBar'
import TypeList from './component/TypeList' 
import ProductList from './component/ProductList'

const types = [
  { id: 1, name: "运动", subTypes : ["猜你喜欢", "跑步", "运动潮流", "垂钓"]},
  { id: 2, name: "食品", subTypes : ["猜你喜欢", "零食", "方便速食"]},
  { id: 3, name: "图书", subTypes : ["猜你喜欢", "童书", "教育考试"]},
]

const products = { 
  1 : [
    {id : 1001, name : "跑步鞋", img : ""},
    {id : 1002, name : "篮球鞋", img : ""},
    {id : 1003, name : "运动卫衣", img : ""},
    {id : 1004, name : "滑板", img : ""},
    {id : 1005, name : "瑜伽垫", img : ""}
  ]
, 


  2 : [
    {id : 2001, name : "零食", img : ""},
    {id : 2002, name : "方便面", img : ""},
    {id : 2003, name : "饼干", img : ""},
    {id : 2004, name : "熟食", img : ""},
    {id : 2005, name : "健康清饮食", img : ""}
  ]
, 


  3 : [
    {id : 3001, name : "贴纸书", img : ""},
    {id : 3001, name : "发声书", img :""},
    {id : 3001, name : "立体书", img : ""},
    {id : 3001, name : "年轻阅读", img : ""},
    {id : 3001, name : "洞洞书", img : ""}
  ]
}



function App() {
  const [selectedType, setSelectedType] = useState(types[0])
  console.log(products[selectedType.id])
  return (
    <div className = "topLevel">
      <TypeList types = {types}> </TypeList>
      <div className = "rightContainer">
        <FilterBar subTypes = {selectedType.subTypes} > </FilterBar>
        <ProductList items = {products[selectedType.id]}></ProductList>
      </div>
     
    </div>
  );
}

export default App;
