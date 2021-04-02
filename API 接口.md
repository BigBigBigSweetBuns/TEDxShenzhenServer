### API 接口

return 格式 （json）

```json
{
"code":200, // 状态码
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
	id:Number // 文章ID
	title: String,
	introduction: String ,
	thumbnail:{
		src: String,
		alt: String
	},
},]
```

#### 

