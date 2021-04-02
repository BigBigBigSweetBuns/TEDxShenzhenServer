### API 接口

return 格式 （json）

```json
{
"code":0, // 状态码
"message":"成功", // 调用结果
"result":{} // 返回结果集
}
```



### /news

获取新闻文章数据。

### /events

 获取单个活动数据

##### request

```
url:/events?id=""
```

##### return

```
result:{
	id      : Number  // 文章ID
	article : {
	  type  : "html",      
	  src   : "/events/article/article.html",  // 绝对位置
	}
	path    : String  // 路由索引
}
```



#### /list

获取一组 events 数据，用于列表展示

##### **request**

```
url:/events/list?page=1
```

##### return

```
result:[{
	id           : Number    // 文章ID
	title        : String,   // 标题
	introduction : String ,  // 简短介绍
	thumbnail : {            // 主图
	  src     : String,
	  alt     : String
	},
},]
```

#### 

