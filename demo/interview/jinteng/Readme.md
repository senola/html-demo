## 进腾科技前端面试题

请你按照附件上的图片(layout.png)，用HTML5, CSS和JS做一个差不多的网页。颜色不用跟图片的一模一样，用差不多颜色的就行了。
要求:

1. 左边的Home, About和Blog 是导航(Navigation Links)  
1.1 Home的链结是/index.html  
1.2 About和Blog是#

2. 右边的是Blog的简要内容列表，其中单项包括(相片、标题、第二标题、发布时间、作者、简要内容和留言数)  
2.1 相片要圆角，大小要一致
2.2 标题只能显示25个字母，有多请用(…)省去  
2.3 发布时间要自动计算出距离当前时多少，e.g. 文章是昨天发表的，发布时间就应该显示(a day ago).  
2.4 简要内容只能显示250字母包括标点符号，如有多了就把多了的字省去，用(…)来代表  
2.5 留言的图标請用 https://fortawesome.github.io/Font-Awesome/icon/comments/ 或其他差不多的  
3. 文章内容和标题可以用 lorem-ipsum 或其他 placeholders  
4. 要能够换页 (最少要有2页可换)  
5. 不需要做文章的详细内容，i.e. 相片、文章标题或其他链结可以是本页(#)   
6. 留言也不需要做，只需要显示数目字就可以了.


总结如下：
    1. 加入了重置样式文件reset.css
    2. 采用了div + css 布局模式实现，外加html5语义标签。
    3. 经测试IE8+ , chrome, firefox, opera 能正常显示。IE7下comment图标未能正常显示，疑是Font-Awesome对IE7支持不友好，暂未深入细查。
    4. javascript 对时间做了简单比较。

ps:只会css控制单行超出范围时候显示省略号，段落的话没想出来怎么用CSS控制做，只想到用js对字符串进行裁剪！这里暂未实现~