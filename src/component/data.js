/**
 * FileName: data.js
 * Author: 潘思宇
 * Date: 2024/4/17
 */
// 该文件包含了所有商品页面用到的伪数据


// 所有商品类型以及子类型的数据
  export const types = [
    { id: 1, name: "运动", subTypes : ["猜你喜欢", "跑步", "运动潮流", "垂钓", "球迷","健身", "登山","足球"]},
    { id: 2, name: "食品", subTypes : ["猜你喜欢", "零食", "方便速食"]},
    { id: 3, name: "图书", subTypes : ["猜你喜欢", "童书", "教育考试"]},
    { id: 4, name: "进口", subTypes : ["猜你喜欢"]},
    { id: 5, name: "箱包", subTypes : ["猜你喜欢"]},
    { id: 6, name: "母婴", subTypes : ["猜你喜欢"]},
    { id: 7, name: "洗护", subTypes : ["猜你喜欢"]},
  ]

// 所有商品的数据，每个object对于一个商品类以及包含的商品
  export const products = { 
    1 : [
      {id : 1001, name : "跑步鞋", img : "/images/跑步鞋.jpg", types: ["猜你喜欢","跑步","健身"]},
      {id : 1002, name : "篮球鞋", img : "/images/篮球鞋.jpg", types: ["猜你喜欢","运动潮流","健身","球迷"]},
      {id : 1003, name : "运动卫衣", img : "/images/运动卫衣.jpg", types: ["猜你喜欢","运动潮流"]},
      {id : 1004, name : "滑板", img : "/images/滑板.jpg", types: ["猜你喜欢","运动潮流"]},
      {id : 1005, name : "鱼钩", img : "/images/鱼钩.jpg", types: ["垂钓"]},
      {id : 1006, name : "跑步T恤", img : "/images/跑步T恤.jpg", types: ["猜你喜欢","健身","运动潮流","跑步"]},
      {id : 1007, name : "跑步裤", img : "/images/跑步裤.jpg", types: ["猜你喜欢","健身","跑步"]},
      {id : 1008, name : "跑步外套", img : "/images/跑步外套.jpg", types: ["猜你喜欢","健身", "运动潮流","跑步"]},
      {id : 1009, name : "帽子", img : "/images/帽子.jpg", types: ["健身", "运动潮流","登山","跑步"]},
      {id : 1010, name : "鱼竿", img : "/images/鱼竿.jpg", types: ["垂钓"]},
      {id : 1011, name : "足球", img : "/images/足球.jpg", types: ["足球"]},
    ]
  , 
  
  
    2 : [
      {id : 2001, name : "零食", img : "/images/零食.jpg", types: ["猜你喜欢","零食"]},
      {id : 2002, name : "方便面", img : "/images/方便面.jpg", types: ["猜你喜欢","方便速食"]},
      {id : 2003, name : "饼干", img : "/images/饼干.jpg", types: ["猜你喜欢","零食"]},
      {id : 2004, name : "熟食", img : "/images/熟食.jpg", types: ["猜你喜欢","零食"]},
      {id : 2005, name : "健康清饮食", img : "/images/健康清饮食.jpg", types: ["猜你喜欢"]}
    ]
  , 
  
  
    3 : [
      {id : 3001, name : "贴纸书", img : "/images/贴纸书.jpg", types: ["猜你喜欢"]},
      {id : 3002, name : "发声书", img :"/images/发声书.jpg", types: ["猜你喜欢"]},
      {id : 3003, name : "立体书", img : "/images/立体书.jpg", types: ["猜你喜欢"]},
      {id : 3004, name : "年轻阅读", img : "/images/年轻阅读.jpg", types: ["猜你喜欢"]},
      {id : 3005, name : "洞洞书", img : "/images/洞洞书.jpg", types: ["猜你喜欢"]}
    ],
    4 : [],
    5 : [],
    6 : [],
    7 : [],
  }
  