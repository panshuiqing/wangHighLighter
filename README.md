1. 介绍
===
<b>wangHighLighter</b>是一个将代码进行格式化和高亮显示的javascript插件，可应用到富文本框中。例如[wangEditor](https://github.com/wangfupeng1988/wangEditor)。
![](http://images.cnitblog.com/blog/138012/201411/192054591091324.png)
<b>wangHighLighter</b>支持常用的20中编程语言，并提供多种主题风格供选择，让您的代码“动”起来！

2. 使用wangHighLighter
===
<b>2.1. 引用 wangHighLighter.min.js</b>
```html
<script src="js/wangHighLighter-1.0.0-min.js" type="text/javascript"></script>
```

<b>2.2. 设置语言和主题选项</b><br/>
通过```wangHighLighter.getLangArray()```可以获取一个数组，里面包含了wangHighLighter支持的所有语言；<br/>
通过```wangHighLighter.getThemeArray()```可以获取一个数组，里面包含了wangHighLighter支持的所有主题；
```html
<span>语言：</span>
<select id="sltLang"></select>
<span>主题：</span>
<select id="sltTheme"></select>

<script type="text/javascript">
	var $sltLang = $('#sltLang'),
        langArray = wangHighLighter.getLangArray(),  //获取语言数组
        $sltTheme = $('#sltTheme'),
        themeArray = wangHighLighter.getThemeArray(), //获取主题数组
        item;
	//绑定语言下拉框
	for (item in langArray) {
        $sltLang.append($('<option>' + langArray[item] + '</option>'));
    }
	//绑定主题下拉框
    for (item in themeArray) {
        $sltTheme.append($('<option>' + themeArray[item] + '</option>'));
    }
</script>
```
效果如下：
![](http://images.cnitblog.com/blog/138012/201411/192050194685488.png)

<b>2.3. 应用</b><br/>
通过执行```wangHighLighter.highLight(lang, theme, code)```即可把一段代码进行格式化、高亮显示。
```javascript
var code = $txt1.val(),  //获取 $txt1 输入框中输入的原始字符串
    lang = $sltLang.val(), //获取语言
    theme = $sltTheme.val(), //获取主题选项
    highLightCode;

highLightCode = wangHighLighter.highLight(lang, theme, code); //格式化代码
$div1.html(highLightCode); 
```
wangHighLighter支持多个主题：
![](http://images.cnitblog.com/blog/138012/201411/192050281563968.png)

3. 应用于wangEditor
===
<b>[wangEditor](https://github.com/wangfupeng1988/wangEditor)</b>是一款基于bootstrap的富文本编辑器，
现在已经利用wangHighLighter.js为wangEditor实现了“插入代码”的功能！使wangEditor成为一款互联网上不多见的开源的可插入代码的富文本编辑器。
![](http://images.cnitblog.com/blog/138012/201411/192103320781243.png)
