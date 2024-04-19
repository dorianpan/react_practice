/**
 * FileName: data.js
 * Author: 潘思宇
 * Date: 2024/4/17
 */
// 该文件包含了所有商品页面用到的伪数据


// 所有商品类型以及子类型的数据
  export const types = [

    { id: 1, name: "运动", subTypes: ["猜你喜欢", "跑步", "运动潮流", "垂钓", "球迷", "健身", "登山", "足球"] },
    { id: 2, name: "食品", subTypes: ["猜你喜欢", "零食", "方便速食", "有机食品", "生鲜", "进口食品"] },
    { id: 3, name: "图书", subTypes: ["猜你喜欢", "童书", "教育考试", "文学", "历史", "科技"] },
    { id: 4, name: "进口", subTypes: ["猜你喜欢", "进口食品", "进口日用品", "进口化妆品", "进口电子", "进口家具"] },
    { id: 5, name: "箱包", subTypes: ["猜你喜欢", "旅行箱", "背包", "手提包", "电脑包", "休闲包"] },
    { id: 6, name: "母婴", subTypes: ["猜你喜欢", "婴儿服饰", "儿童玩具", "婴儿用品", "孕妇用品", "教育早教"] },
    { id: 7, name: "洗护", subTypes: ["猜你喜欢", "洗发水", "沐浴露", "护肤品", "口腔护理", "个人清洁"] },
    { id: 8, name: "电子", subTypes: ["猜你喜欢", "手机", "电脑", "智能穿戴", "相机", "音频设备"] },
    { id: 9, name: "家电", subTypes: ["猜你喜欢", "小家电", "厨房电器", "生活电器", "个人护理电器", "大家电"] },
    { id: 10, name: "家具", subTypes: ["猜你喜欢", "卧室家具", "客厅家具", "办公家具", "户外家具", "儿童家具"] },
    { id: 11, name: "化妆品", subTypes: ["猜你喜欢", "面部护理", "彩妆", "护肤套装", "香水", "男士护理"] },
    { id: 12, name: "鞋靴", subTypes: ["猜你喜欢", "男鞋", "女鞋", "运动鞋", "休闲鞋", "童鞋"] },
    { id: 13, name: "家纺", subTypes: ["猜你喜欢", "床品套件", "被褥", "枕头", "毛巾浴巾", "窗帘/窗饰"] },
    { id: 14, name: "服装", subTypes: ["猜你喜欢", "男装", "女装", "童装", "内衣", "运动服"] },
    { id: 15, name: "珠宝首饰", subTypes: ["猜你喜欢", "黄金", "钻石", "时尚饰品", "手表", "婚庆饰品"] }
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
      {id : 2005, name : "健康清饮食", img : "/images/健康清饮食.jpg", types: ["猜你喜欢"]},
      {id : 2006, name : "有机蔬菜", img : "/images/有机蔬菜.jpg", types: ["猜你喜欢", "有机食品"]},
      {id : 2007, name : "果汁", img : "/images/果汁.jpg", types: ["猜你喜欢", "生鲜"]},
      {id : 2008, name : "坚果", img : "/images/坚果.jpg", types: ["零食"]},
      {id : 2009, name : "牛奶", img : "/images/牛奶.jpg", types: ["猜你喜欢", "生鲜"]},
      {id : 2010, name : "豆制品", img : "/images/豆制品.jpg", types: ["猜你喜欢", "生鲜"]},
      {id : 2011, name : "进口饼干", img : "/images/进口饼干.jpg", types: [ "进口食品", "零食"]},
      {id : 2012, name : "蜂蜜", img : "/images/蜂蜜.jpg", types: ["零食", "有机食品"]},
      {id : 2013, name : "调味品", img : "/images/调味品.jpg", types: [ "零食", "有机食品"]},
      {id : 2014, name : "速冻食品", img : "/images/速冻食品.jpg", types: ["猜你喜欢", "方便速食"]},
      {id : 2015, name : "糖果", img : "/images/糖果.jpg", types: ["猜你喜欢", "零食", "进口食品"]},
    ]
  , 
  
    3 : [
      {id : 3001, name : "贴纸书", img : "/images/贴纸书.jpg", types: ["猜你喜欢"]},
      {id : 3002, name : "发声书", img :"/images/发声书.jpg", types: ["猜你喜欢"]},
      {id : 3003, name : "立体书", img : "/images/立体书.jpg", types: ["猜你喜欢"]},
      {id : 3004, name : "年轻阅读", img : "/images/年轻阅读.jpg", types: ["猜你喜欢"]},
      {id : 3005, name : "洞洞书", img : "/images/洞洞书.jpg", types: ["猜你喜欢"]},
      {id : 3006, name : "科普书籍", img : "/images/科普书籍.jpg", types: ["教育考试"]},
      {id : 3007, name : "文学作品", img : "/images/文学作品.jpg", types: ["文学"]},
      {id : 3008, name : "历史书籍", img : "/images/历史书籍.jpg", types: ["历史"]},
      {id : 3009, name : "儿童文学", img : "/images/儿童文学.jpg", types: ["童书"]},
      {id : 3010, name : "编程书籍", img : "/images/编程书籍.jpg", types: ["科技"]},
      {id : 3011, name : "艺术与设计", img : "/images/艺术与设计.jpg", types: ["猜你喜欢"]},
      {id : 3012, name : "心理学书籍", img : "/images/心理学书籍.jpg", types: ["猜你喜欢"]},
      {id : 3013, name : "经济学书籍", img : "/images/经济学书籍.jpg", types: ["猜你喜欢"]},
      {id : 3014, name : "法律书籍", img : "/images/法律书籍.jpg", types: ["猜你喜欢"]},
      {id : 3015, name : "自然科学", img : "/images/自然科学.jpg", types: ["猜你喜欢"]},
    ],
    4: [
      {id : 4001, name : "进口巧克力", img : "/images/进口巧克力.jpg", types: ["猜你喜欢", "进口食品"]},
      {id : 4002, name : "进口护肤品", img : "/images/进口护肤品.jpg", types: ["猜你喜欢", "进口化妆品"]},
      {id : 4003, name : "进口红酒", img : "/images/进口红酒.jpg", types: ["猜你喜欢", "进口食品"]},
      {id : 4004, name : "进口家具", img : "/images/进口家具.jpg", types: ["猜你喜欢", "进口家具"]},
      {id : 4005, name : "进口电器", img : "/images/进口电器.jpg", types: ["猜你喜欢", "进口电子"]},
      {id : 4006, name : "进口手表", img : "/images/进口手表.jpg", types: ["猜你喜欢", "进口饰品"]},
      {id : 4007, name : "进口玩具", img : "/images/进口玩具.jpg", types: ["猜你喜欢", "进口商品"]},
      {id : 4008, name : "进口咖啡", img : "/images/进口咖啡.jpg", types: ["猜你喜欢", "进口食品"]},
      {id : 4009, name : "进口奶粉", img : "/images/进口奶粉.jpg", types: ["猜你喜欢", "进口食品"]},
      {id : 4010, name : "进口香水", img : "/images/进口香水.jpg", types: ["猜你喜欢", "进口化妆品"]},
      {id : 4011, name : "进口鞋类", img : "/images/进口鞋类.jpg", types: ["猜你喜欢", "进口商品"]},
      {id : 4012, name : "进口包包", img : "/images/进口包包.jpg", types: ["猜你喜欢", "进口箱包"]},
      {id : 4013, name : "进口太阳镜", img : "/images/进口太阳镜.jpg", types: ["猜你喜欢", "进口饰品"]},
      {id : 4014, name : "进口糖果", img : "/images/进口糖果.jpg", types: ["猜你喜欢", "进口食品"]},
      {id : 4015, name : "进口茶叶", img : "/images/进口茶叶.jpg", types: ["猜你喜欢", "进口食品"]},
    ],
    5: [
      {id : 5001, name : "旅行箱", img : "/images/旅行箱.jpg", types: ["猜你喜欢", "旅行箱"]},
      {id : 5002, name : "背包", img : "/images/背包.jpg", types: ["猜你喜欢", "背包"]},
      {id : 5003, name : "手提包", img : "/images/手提包.jpg", types: ["猜你喜欢", "手提包"]},
      {id : 5004, name : "电脑包", img : "/images/电脑包.jpg", types: ["猜你喜欢", "电脑包"]},
      {id : 5005, name : "休闲包", img : "/images/休闲包.jpg", types: ["猜你喜欢", "休闲包"]},
      {id : 5006, name : "行李标签", img : "/images/行李标签.jpg", types: ["猜你喜欢", "旅行配件"]},
      {id : 5007, name : "钱包", img : "/images/钱包.jpg", types: ["猜你喜欢", "小皮件"]},
      {id : 5008, name : "旅行配件", img : "/images/旅行配件.jpg", types: ["猜你喜欢", "旅行配件"]},
      {id : 5009, name : "相机包", img : "/images/相机包.jpg", types: ["猜你喜欢", "相机包"]},
      {id : 5010, name : "购物袋", img : "/images/购物袋.jpg", types: ["猜你喜欢", "购物袋"]},
      {id : 5011, name : "女士手袋", img : "/images/女士手袋.jpg", types: ["猜你喜欢", "手提包"]},
      {id : 5012, name : "男士公文包", img : "/images/男士公文包.jpg", types: ["猜你喜欢", "公文包"]},
      {id : 5013, name : "化妆包", img : "/images/化妆包.jpg", types: ["猜你喜欢", "化妆包"]},
      {id : 5014, name : "运动包", img : "/images/运动包.jpg", types: ["猜你喜欢", "运动包"]},
      {id : 5015, name : "防水包", img : "/images/防水包.jpg", types: ["猜你喜欢", "防水包"]},
    ],
    6: [
      {id : 6001, name : "婴儿服饰", img : "/images/婴儿服饰.jpg", types: ["猜你喜欢", "婴儿服饰"]},
      {id : 6002, name : "儿童玩具", img : "/images/儿童玩具.jpg", types: ["猜你喜欢", "儿童玩具"]},
      {id : 6003, name : "婴儿用品", img : "/images/婴儿用品.jpg", types: ["猜你喜欢", "婴儿用品"]},
      {id : 6004, name : "孕妇用品", img : "/images/孕妇用品.jpg", types: ["猜你喜欢", "孕妇用品"]},
      {id : 6005, name : "教育早教", img : "/images/教育早教.jpg", types: ["猜你喜欢", "教育早教"]},
      {id : 6006, name : "婴儿车", img : "/images/婴儿车.jpg", types: ["猜你喜欢", "婴儿用品"]},
      {id : 6007, name : "儿童书籍", img : "/images/儿童书籍.jpg", types: ["猜你喜欢", "童书"]},
      {id : 6008, name : "儿童服饰", img : "/images/儿童服饰.jpg", types: ["猜你喜欢", "儿童服饰"]},
      {id : 6009, name : "婴儿床", img : "/images/婴儿床.jpg", types: ["猜你喜欢", "婴儿用品"]},
      {id : 6010, name : "安全座椅", img : "/images/安全座椅.jpg", types: ["猜你喜欢", "婴儿用品"]},
      {id : 6011, name : "儿童安全用品", img : "/images/儿童安全用品.jpg", types: ["猜你喜欢", "儿童安全用品"]},
      {id : 6012, name : "婴儿洗护用品", img : "/images/婴儿洗护用品.jpg", types: ["猜你喜欢", "婴儿用品"]},
      {id : 6013, name : "婴儿奶粉", img : "/images/婴儿奶粉.jpg", types: ["猜你喜欢", "婴儿用品"]},
      {id : 6014, name : "哺乳用品", img : "/images/哺乳用品.jpg", types: ["猜你喜欢", "孕妇用品"]},
      {id : 6015, name : "婴儿玩具", img : "/images/婴儿玩具.jpg", types: ["猜你喜欢", "婴儿用品"]},
    ],
    7: [
      {id : 7001, name : "洗发水", img : "/images/洗发水.jpg", types: ["猜你喜欢", "洗发水"]},
      {id : 7002, name : "沐浴露", img : "/images/沐浴露.jpg", types: ["猜你喜欢", "沐浴露"]},
      {id : 7003, name : "护肤品", img : "/images/护肤品.jpg", types: ["猜你喜欢", "护肤品"]},
      {id : 7004, name : "口腔护理", img : "/images/口腔护理.jpg", types: ["猜你喜欢", "口腔护理"]},
      {id : 7005, name : "个人清洁", img : "/images/个人清洁.jpg", types: ["猜你喜欢", "个人清洁"]},
    ],
    8 : [],
    9 : [],
    10 : [],
    11 : [],
    12 : [],
    13 : [],
    14 : [],
    15 : []
  }
  