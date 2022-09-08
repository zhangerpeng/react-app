## DOCKER COMPOSE
### Compose
定义与运行多个容器应用。defining and running multi-container docker applications 

### 补充说明
使用一个docker文件能够方便的定义一个应用容器。但在正式的应用程序，往往需要多个容器相互配合实现任务。如常见的web项目，其采用前后分离的模式，，同时，其需要添加数据库服务，负载均衡的服务等。\
因此，其应用中存在的容器可能会存在依赖的关系。其docker-compose 有效解决
1. 在同一个文件中对于项目所需要的容器进行有效的编排，如容器启动创建的顺序,容器间的依赖关系
2. 提供

### 代码实例
1. docker-compose.yaml
   
```




```



