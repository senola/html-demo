### SASS 常用指令

#### (1) 安装SASS

```shell
   /*首先需安装好ruby,建议安装（ruby1.9.3）不要安装最新版本，问题多。*/
   $ gem install sass
```
#### (2) \*.scss 与 \*.sass 相互文件互转

```Shell
   # Convert Sass to SCSS
   $ sass-convert style.sass style.scss

   # Convert SCSS to Sass
   $ sass-convert style.scss style.sass
```
#### (2) 执行SASS操作

```shell
   /*scss文件生成css文件*/
   $ sass style.scss output.css
   
   /*监听文件变化，同时生成对应的css文件*/
   $ sass --watch style.scss:output.css

   /*监听文件夹下所有SASS变化，同时生成对应的css文件*/
   $ sass --watch app/sass:public/stylesheets


``` 
http://sass-lang.com/documentation/file.SASS_REFERENCE.html