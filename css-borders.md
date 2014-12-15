## css之border初探

关于css的border属性相信大家已经熟悉的不能再熟悉了。那么是不是这就意味border没有什么可以探究了呢？ <span class="font-1">no..let learn something that we never konew about!</span>    

我们知道CSS3可以很简单地创建圆角，而CSS2要实现圆角效果就复杂多了。在这些新技术未出现之前，我们可以通过使用绝对定位背景图片来显示圆或箭头，这就意味着需要另外的图片处理工具（如photoshop）配合使用。其实，如今显示圆或者圆角已不再需要其他背景图片了。

#### <span class="font-italic">1.The Basic</span>   

可以经常看到border的一下用法：  

```css
   border: 1px solid black;
```

上面代码的意思为给元素加上一个1px的边框。这是border属性的简写方式，普通而又简单，我们也可以拆分如下：   

```css
   border-width: 1px;   
   border-style: solid;
   border-color: black;
```

http://code.tutsplus.com/tutorials/css-refreshers-borders--net-24655#disqus_thread



<style>
 .font-italic {
 	font-style:italic;
 }
 .font-1 {
 	font-style:italic;
 	font-weight:bold;
 	color:green;
 }
</style>

