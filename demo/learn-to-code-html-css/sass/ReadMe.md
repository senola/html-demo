## SASS 常用指令

#### (0) 认识SASS

Sass(Syntactically Awesome StyleSheets) 是css的扩展，她增强了css的基本功能且使其编码起来显得更优雅。Sass允许你使用变量（variables）、嵌套规则（nested rules)、混合指令（mixins）、inline import等，同时Sass也完全兼容css语法（包括注释等）。Sass有助于组织较大的样式集合。

##### Sass特点

 - 完全兼容css3 
 - 语法扩展，例如变量，嵌套，混合指令等
 - 增加很多有用的function来操作colors和其他值
 - control directives
 - 格式化，可定制css样式输出 

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
    sass --watch --style expanded main.scss:test/test.css；
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
     width: 97%; 
   }
   #main p, #main div {
     font-size: 2em; 
   }
   #main p a, #main div a {
      font-weight: bold; 
   }
   #main pre {
      font-size: 3em; 
   }
```
#### (2) 父类引用选择器：&  

父类引用选择器在嵌套规则中是相当方便的，如：  

```
    a {
	  font-weight: bold;
	  text-decoration: none;
	  &:hover { 
         text-decoration: underline; 
      }
	  body.firefox & {
         font-weight: normal; 
      }
	}
```

编译后生成：  

```
	a {
	  font-weight: bold;
	  text-decoration: none; 
    }
    a:hover {
	    text-decoration: underline; 
    }
	body.firefox a {
	    font-weight: normal; 
    }
```

& 可以替父类选择器，并且在编译后与父类选择器替换。这意味着，如果你有一个深度嵌套规则，&会有就近原则，如： 

``` 
   #main {
	  color: black;
	  a {
	    font-weight: bold;
	    &:hover { 
		   color: red; 
        }
	  }
	}
```
编译后生成： 

```
	#main {
	  color: black;
    }
	#main a {
	  font-weight: bold; 
    }
	#main a:hover {
	  color: red; 
    }
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
     color: black; 
   }
   #main-sidebar {
     border: 1px solid; 
   }
```

#### (3) Placeholder Selectors(占位符选择器): %foo

SASS 支持一个特殊的类型叫占位符选择器（placeholder selector). 这相当于CSS中的class和id.

#### (4) 注释： /\* \*/ 和 //  

SASS 支持标准的多行CSS注释语法： /\* \*/,同时也支持单行的注释语法： // 。 编译后多行注释会保留在css文件中，而单行注释则会移除。 如： 

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
	  color: black; 
    }
	
	a {
	  color: green; 
    }
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

### （1） Strings  

CSS支持两种类型的字符串，一种是带有双引号或者单引号的（如："senola", "senola.github.com/"），另一种是不带引号的（如： sans-serif、bold）。 而SassScript都能识别它们，

有一点需要注意的是当使用“#{}” 插值时，将不使用引号。这是为了方便某些操作使用，如mixins中的选择器：  

```
   @mixins firefox-message($selector) {
      body.firefox #{$selector}:before{
         content: 'HI, Firefox users!';
      }
   }

   @include firefox-message(".header");
```

编译生成：  

```
   body.firefox .header:before {
      content: "Hi, Firefox users!"; 
   }
```

### (2) Lists 

Lists是SASS用来呈现CSS的声明如“margin: 10px 15px 0 0” 或 “font-face: Helvetica, Arial, sans-serif”。简单来说，在SASS中Lists仅仅是一系列用空格或者逗号分隔的其他值的组合。实际上单个值也可以算作是lists,只是这个lists中仅仅有一个item。

对于lists本身，并不能做很多事儿，但是`SassScript list functions`使得lists非常有用。比如： `nth`函数能访问一个lists中的item;`join`函数可以合并多个lists;`append`函数可以给一个lists增加一个item;`@each`指令可以给lists中的每一个item增加css样式。 强大吧O(∩_∩)O~

另外，为了包含单个值，lists可以包含lists。比如，“1px 2px, 5px 6px”是一个有两个item的lists.如果内层的lists包含外层lists的分隔符，那么就需要使用逗号来分开，如（1px 2px）(5px 6px)也是一个有两个item的lists。唯一不同的是之前的是一逗号分隔，而此处是以空格分隔。

当lists被转换成纯css,Sass不会增加任何括号。这意味着（1px 2px）(5px 6px)和`1px 2px 5px 6px`在被转换成css的时候是一样的，但是在Sass中并不是一样，前者包含两个lists,后者是一个lists包含4个numbers.

Lists中也可以没有items，他们不能直接转成css。如果你尝试用`font-family:()`,Sass会提示有误。如果一个list包含了空值或者null元素，如`1px 2px () 3px`或者`1px 2px null 3px`，空的lists和null值在转成css时候将会被移除。

注意：关于lists的分隔，Sass做了兼容处理。如（1，）表示一个lists包含1；（1  2，3）表示一个lists包含1，2，3。

### (3) Maps

Sass中的Maps跟我们平时使用的Map类似。定义如下：

```
  $map: (key1: value1, key2: value2, key3: value3);
```

和Lists不同，Maps必须用括号括起来并且用逗号分隔。 Sass提供很多函数还操作Maps。 `map-get`函数用来查询值，`map-merge`用来增加一个键值对到map,`@each`指令用来给每个键值对增加样式。

其他详情 <a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#maps" target="_blank" class="senola-a">点这里</a>

### (4) Colors

任何CSS color表达式都返回一个SassScript Color值。 这里包含了<a href="https://github.com/sass/sass/blob/stable/lib/sass/script/value/color.rb#L28-L180" target="_blank" class="senola-a">大量被命名的colors</a>

在压缩（compressed）输出模式，Sass会输出颜色的最小CSS显示，比如：在`compressed` 模式中`#FF0000`会被输出`red`，但是`blanchedalmond` 会被转换成`#FFEBCD`。

### (5) Operations

所有的类型支持比较操作（==和!=）。另外，每一种类型都有它自己特殊的操作支持。 详情<a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#operations"target="_blank" class="senola-a">点这里</a>

#### (1) Number Operations






http://sass-lang.com/documentation/file.SASS_REFERENCE.html#parentheses

sassDoc: http://sassdoc.com/
