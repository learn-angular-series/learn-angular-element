# learn-angular-element

@angular/element 是一个强大的工具，可以用来定义框架无关的HTML标签，从而可以创建出通用的组件，其整体上的效果非常类似于WebComponent。

这是一个教学项目，用来示范 @angular/element 的用法。

## 用法

- git clone 本项目
- cd learn-angular-element
- npm i -g http-server
- npm i -g concat
- npm i 
- npm run build
- npm run package
- 修改./dist/learn-angular-element/index.html，把最底部的script标签删掉，因为拼接好的js里面已经包含了全部脚本，不依赖外部任何内容
- cd ./dist/learn-angular-element
- http-server
- 打开浏览器访问 http://localhost:8080/index.html 就可以看到效果

实例已经针对当前最新的 Angular 9.0 版本做了兼容处理。

## 备注

learn-anguar-***是一个Angular系列教学项目用的实例源代码，一共分成了10个项目。

- 国内推荐使用gitee.com，链接在这里：https://gitee.com/organizations/learn-angular-series
- github上的链接在这里：https://github.com/learn-angular-series
- 如果你需要一个更复杂、更完整一点的例子，请试试NiceFish：https://gitee.com/mumu-osc/NiceFish
- 如果你想看到关于Angular的更多中文资源，请点这里：http://www.ngfans.net/

## 联系我

<img src="./src/assets/imgs/damoqiongqiu-wechat.jpg" width="250"/>
