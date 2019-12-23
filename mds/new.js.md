# new.js

## 特点

* 零后端基础就可以直接上手；可以不接触语法直接上手开发管理系统。
* 模型分模块：View、Api(Action)、Controller、Dao
* View 侧重通用的数据模板
* View 提供抽象模型Map
* 支持单独生成：页面(Vue,React,HTML等)，页面+RESTful，服务端（express/struts/python等）接口的业务逻辑，Controller的RESTful，Controller的Dao
* 支持生成：服务端中间件，或者本地Html包，直接调用RESTful接口操作

## 层级控制

### View

* 服务器端渲染，服务器端的template架构

### Controller

Controller('modelName').

### Dao

```js
Dao('modelName').create = (data) => {
	data.order_no=H.buildOrderNo();
	Dao('survey').query({user_id:data.user_id})
	.first().catch('没有数据')
	.filter(H.getOrderParamsFromSurvey)
	.filter(Dao('modelName')._create)
	.then()
}
```

## 核心编写元素



## 步骤

1. 每个function的逻辑抽象，都可以用搭积木界面的元素构成。 ---逻辑->代码
2. 表结构的设计。表结构->数据库结构->框架中的可调用对象
3. 系统模块的引入和引用，以及索引 --框架图->代码
4. 整个系统架构以及模块的解析，深入可以做出代码分析工具（还可以有性能分析，冗余代码分析）--代码->框架图
5. 业务模块的抽象，看看是否可以业务模块化，打包成一套。
