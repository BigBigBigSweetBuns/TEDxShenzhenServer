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

##### request

```
url:/news?path=""
```

##### return

```
result:{
	id       : Number,  // 文章ID
    banner   : {        // 大的展示图，可无
    	src  : String,
        alt  : String,
    },
    title    : String,  // 标题
    createTS : String,  // 创建时间戳
    article  : {
        type : String,  // iframe
        src  : String,  // 链接到网站HMTL
    },
    path     : String   // 路由地址
}
```



#### /list

获取一组 news 数据，用于列表展示

##### **request**

```
url:/news/list?page=1
```

##### return

```
result:[{
	id           : Number,  // 文章ID
    title        : String,  // 标题
    introduction : String,  // 简短介绍
    createTS     : String,  // 创建时间戳
    thumbnail    : {        // 主图
	  src        : String,
	  alt        : String,
	},
    path         : String,  // 路由地址
},]
```



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



###  /videos

获取单个视频相关数据

##### request

```
url:/videos?id=1
```

```
url:/videos?path=/
```

##### return

```
result:{
	id           : Number,  // 视频ID
	title        : String,  // 标题
	introduction : String,  // 简短描述
	contentHTML  : String,  // 详细介绍
    createTS     : Number,  // 创建时间
    video : {
      type       : String,  // 视频引用的类型 iframe / src
      src        : String,  // 是firame时，指向网址，是src时，指向文件
    },
    path         : String,  // 路由路径   
}
```



#### /list

获取一组 video 数据，用于列表展示

##### **request**

```
url:/videos/list?page=1
```

##### return

```
result:[{
	id           : Number,   // 视频ID
	title        : String,   // 标题
	introduction : String,   // 简短介绍
	thumbnail : {            // 主图
	  src        : String,   
	  alt        : String,
	},
	createTS     : Number,   // 创建时间
	path         : String,   // 路由路径    
},]
```

#### /list/division

获取一组 分类的 video 数据，用于列表展示

**request**

division 原为数组。转化为字符串以，分割。

```
url:/videos/list/division?page=1&division=talk,video
```

##### return

```
result:[{
	id           : Number,   // 视频ID
	title        : String,   // 标题
	introduction : String,   // 简短介绍
	thumbnail : {            // 主图
	  src        : String,   
	  alt        : String,
	},
	createTS     : Number,   // 创建时间
	path         : String,   // 路由路径    
},]
```

#### /list/authorid

获取一组 分类的 video 数据，用于列表展示

**request**

authorid 是 作者ID

```
url:/videos/list/authorid?authorid=1
```

##### return

```
result:[{
	id           : Number,   // 视频ID
	title        : String,   // 标题
	introduction : String,   // 简短介绍
	thumbnail : {            // 主图
	  src        : String,   
	  alt        : String,
	},
	createTS     : Number,   // 创建时间
	path         : String,   // 路由路径    
},]
```



### /speakers

获取单个讲者详细数据

##### request

```
url:/speakers?id=1
```

```
url:/speakers?path=/
```

##### return

```
result:{
	id           : Number,  // 视频ID
	name         : String,  // 讲者姓名
    portrait : {
      src        : String,  // 肖像
      alt        : String,  // 肖像介绍
    },
	contentHTML  : String,  // 详细介绍
    path         : String,  // 路由路径   
}
```



#### /list

获取一组 speaker 数据，用于列表展示

##### **request**

```
url:/speakers/list?page=1
```

##### return

```
result:[{
	id           : Number,  // 视频ID
	name         : String,  // 讲者姓名
    portrait : {
      src        : String,  // 肖像
      alt        : String,  // 肖像介绍
    },
	path         : String,  // 路由路径    
},]
```

#### /list/division

获取一组 分类的 speakers 数据，用于列表展示

##### **request**

division  为年份

```
url:/speakers/list/division?division=2021
```

##### return

```
result:[{
	id           : Number,  // 视频ID
	name         : String,  // 讲者姓名
    portrait : {
      src        : String,  // 肖像
      alt        : String,  // 肖像介绍
    },
	path         : String,  // 路由路径
},]
```
