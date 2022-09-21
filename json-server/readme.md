# JSON SERVER
## JSON SERVER
[JSON-SERVER-GITHUB](https://github.com/typicode/json-server)
## 作用
快速构建一个应用服务，以json 文件作为数据源，对外提供API，获取其所提供的数据
## 使用方式
1. 安装服务依赖
   ```npm install -g json-server```
2. 构建db.json数据文件
3. 启动服务
   ```json-server --watch db.json```
4. call the api
```
http://localhost:3000/products
http://localhost:3000/comments
http://localhost:3000/profile
```