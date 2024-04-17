// 该文件包含了所有商品页面用到的伪数据

// 所有商品类型以及子类型的数据
  export const types = [
    { id: 1, name: "运动", subTypes : ["猜你喜欢", "跑步", "运动潮流", "垂钓"]},
    { id: 2, name: "食品", subTypes : ["猜你喜欢", "零食", "方便速食"]},
    { id: 3, name: "图书", subTypes : ["猜你喜欢", "童书", "教育考试"]},
  ]

// 所有商品的数据，每个object对于一个商品类以及包含的商品
  export const products = { 
    1 : [
      {id : 1001, name : "跑步鞋", img : "", types: ["猜你喜欢","跑步","运动潮流"]},
      {id : 1002, name : "篮球鞋", img : "", types: ["猜你喜欢","运动潮流"]},
      {id : 1003, name : "运动卫衣", img : "", types: ["猜你喜欢","运动潮流"]},
      {id : 1004, name : "滑板", img : "", types: ["猜你喜欢","运动潮流"]},
      {id : 1005, name : "鱼钩", img : "", types: ["垂钓"]}
    ]
  , 
  
  
    2 : [
      {id : 2001, name : "零食", img : "", types: ["猜你喜欢"]},
      {id : 2002, name : "方便面", img : "", types: ["猜你喜欢"]},
      {id : 2003, name : "饼干", img : "", types: ["猜你喜欢"]},
      {id : 2004, name : "熟食", img : "", types: ["猜你喜欢"]},
      {id : 2005, name : "健康清饮食", img : "", types: ["猜你喜欢"]}
    ]
  , 
  
  
    3 : [
      {id : 3001, name : "贴纸书", img : "", types: ["猜你喜欢"]},
      {id : 3001, name : "发声书", img :"", types: ["猜你喜欢"]},
      {id : 3001, name : "立体书", img : "", types: ["猜你喜欢"]},
      {id : 3001, name : "年轻阅读", img : "", types: ["猜你喜欢"]},
      {id : 3001, name : "洞洞书", img : "", types: ["猜你喜欢"]}
    ]
  }
  