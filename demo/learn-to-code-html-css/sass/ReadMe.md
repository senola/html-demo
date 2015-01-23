## SASS 常用指令

#### (1) 安装SASS

```shell
   # 首先需安装好ruby,建议安装（ruby1.9.3）不要安装最新版本，问题多。
   $ gem install sass
```
#### (2) \*.scss 与 \*.sass 相互文件互转

```Shell
   # Convert Sass to SCSS
   $ sass-convert style.sass style.scss

   # Convert SCSS to Sass
   $ sass-convert style.scss style.sass
```
#### (3) 执行SASS操作

```shell
   # scss文件生成css文件
   $ sass style.scss output.css
   
   # 监听文件变化，同时生成对应的css文件
   $ sass --watch style.scss:output.css

   # 监听文件夹下所有SASS变化，同时生成对应的css文件
   $ sass --watch app/sass:public/stylesheets


``` 
#### (4) SASS提供四个编译风格的选项

```
	-  nested：嵌套缩进的css代码，它是默认值。   
	-  expanded：没有缩进的、扩展的css代码。   
	-  compact：简洁格式的css代码。   
	-  compressed：压缩后的css代码。   
``` 
列如：  

```
    sass --watch --style expanded expanded main.scss:test/test.css；
```

#### (5) Encodings（编码）
若要在scss文件内增加中文注释，则必须在文件最顶端加入文档编码：

```
   @charset 'utf-8';
```

## CSS Extensions(css语法扩展)

#### (1) Nested Rules (嵌套规则)

SASS 扩展了css的嵌套，嵌套的规则仅仅能运用于外层选择器，如：  

```
    #main p {
	  color: #00ff00;
	  width: 97%;
	
	  .redbox {
	    background-color: #ff0000;
	    color: #000000;
	  }
	}
```  
编译后生成：  

```
   #main p {
	  color: #00ff00;
	  width: 97%; 
   }
   #main p .redbox {
      background-color: #ff0000;
      color: #000000; 
   }
```

这可以避免重复写父类选择器，使得复杂的CSS布局变得更简单。 如：  

```
   #main {
	 width: 97%;
	 p, div {
	   font-size: 2em;
	   a { font-weight: bold; }
	 }
	 pre { font-size: 3em; }
   }
```  

编译后生成：  

```
   #main {
     width: 97%; }
   #main p, #main div {
     font-size: 2em; }
   #main p a, #main div a {
      font-weight: bold; }
   #main pre {
      font-size: 3em; }
```
#### (2) 父类引用选择器：&  

父类引用选择器在嵌套规则中是相当方便的，如：  

```
    a {
	  font-weight: bold;
	  text-decoration: none;
	  &:hover { text-decoration: underline; }
	  body.firefox & { font-weight: normal; }
	}
```

编译后生成：  

```
	a {
	  font-weight: bold;
	  text-decoration: none; }
    a:hover {
	    text-decoration: underline; }
	body.firefox a {
	    font-weight: normal; }
```

& 可以替父类选择器，并且在编译后与父类选择器替换。这意味着，如果你有一个深度嵌套规则，&会有就近原则，如： 

``` 
   #main {
	  color: black;
	  a {
	    font-weight: bold;
	    &:hover { color: red; }
	  }
	}
```
编译后生成： 

```
	#main {
	  color: black; }
	#main a {
	  font-weight: bold; }
	#main a:hover {
	  color: red; }
```

& 也可以出现在一个复合选择器的开头，如：  

```
    #main {
	  color: black;
	  &-sidebar { border: 1px solid; }
	}
```
编译后生成：  

```
   #main {
     color: black; }
   #main-sidebar {
     border: 1px solid; }
```

#### (3) Placeholder Selectors(占位符选择器): %foo

SASS 支持一个特殊的类型叫占位符选择器（placeholder selector). 这相当于CSS中的class和id.

#### (4) 注释： /\* \*/ 和 //  

SASS 支持标准的多行CSS注释语法： /\* \*/,同事也支持单行的注释语法： // 。 编译后多行注释会保留在css文件中，而单行注释则会移除。 如： 

```
   /* This comment is
	 * several lines long.
	 * since it uses the CSS comment syntax,
	 * it will appear in the CSS output. */
	body { color: black; }
	
	// These comments are only one line long each.
	// They won't appear in the CSS output,
	// since they use the single-line comment syntax.
	a { color: green; }
```
编译后生成： 
```
    /* This comment is
	 * several lines long.
	 * since it uses the CSS comment syntax,
	 * it will appear in the CSS output. */
	body {
	  color: black; }
	
	a {
	  color: green; }
```
注意： 当多行注释的第一个字符为"!"，即格式为/\*! \*/时，即使选择压缩格式输出模式，该注释也会当做copyright保留。

## SassScript (SASS 脚本) 
除了普通的CSS属性语法， SASS支持一小部分脚本扩展称为--SassScript. SassSCript允许属性使用变量，算数和额外的函数（function），SassScript可以被用在任何属性中。   

SassScript 也可以用在 generate selectors 和 property names，在写混合指令（mixins）的时候非常有用。

## 变量：$

最直接了当的使用SassScript是使用变量。变量以$符号开始，是一系列类似CSS属性的字符串，如：  

``` 
   $width: 5em;
   #main {
      width: $width;
   }
```
编译后生成： 

```
   #main {
      width: 5em;
   }
```

## 数据类型（Data Types）

SassScript 支持7种数据类型：  

- numbers (如： 1.2， 13， 10px)
- Strings (有引号或者无，如："foo", 'goo', hoo)
- colors (如： blue, #eee, rgba(0, 0, 0, 0.5))
- booleans (如： true， false)
- nulls (null)
- lists （如： 1.5em 1em 0 2em, Helvetica, Arial, sans-serif） 
- maps (如 key1: value1, key2:value2)

SassScript同时也支持所有其他CSS属性值，如Unicode, ！important声明。











http://sass-lang.com/documentation/file.SASS_REFERENCE.html

sassDoc: http://sassdoc.com/
