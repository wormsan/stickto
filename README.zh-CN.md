# stickto

多DOM自动吸顶库

`stickto`是一个允许多个DOM元素自动吸顶的功能库。

当你有多个DOM元素的时候，`stickto`可以帮助多个DOM元素之间平滑切换吸顶。

[Demo transport](http://docs.gomeminus.com/stickto/)

![demo.gif](demo.gif)


## 安装

```
npm install stickto
```

## 引用

这个库支持UMD规范

1. 使用script标签
```html
<script src="stickto.js"/>
<script>
    // stick
    var stikcer = stickto.stick(/* DOM */)

    //unstick
    stickto.unstick(/* sticker or DOM */)
</script>
```

2. 使用 commonjs/es5

```javascript
var stickto = require('stickto')

// stick
var stikcer = stickto.stick(/* DOM */)

//unstick
stickto.unstick(/* sticker or DOM */)
```

3. 使用 commonjs/es6

```javascript
import {stick, unstick} from 'stickto'

// stick
var stikcer = stick(/* DOM */)

//unstick
unstick(/* sticker or DOM */)
```

## API

### stick

这个方法用来注册需要自动吸顶的元素。

```js
var stiker = stick(DOM[, options])
```

#### @参数

* DOM 
    * 类型: HTMLElementNode
    * 描述: 一个`document.querySelector`返回的DOM元素
    * 可选: 否

eg:

```js
stick(document.querySelector('#foo'))
```

* options
    * 类型: Object
    * 描述: 当一个sticker吸顶时，自定义sticker的`z-index`或css类名
    * 可选: 是
    * 默认值: `{zIndex: 20, className: 'stickto-auto-generated-sticker'}`
    * zIndex
        * 类型: Number/String
        * 描述: sticker吸顶时的`z-index`
        * 可选: 是
        * 默认: 20
    * className
        * 类型: String
        * 描述: sticker吸顶时的css类名
        * 可选: yes
        * 默认值: stickto-auto-generated-sticker

eg:

```js
stick(document.querySelector('#foo'), {
    zIndex: 1000,
    className: 'sticky',
})
```

#### @返回值

* sticker
    * 类型: Sticker
    * 描述: 一个Sticker类的实例

`stick`方法返回一个Sticker类的实例，这个实例在`unstick`的时候会用到

eg:

```js
const stick = stick(document.querySelector('#foo'), {
    zIndex: 1000,
    className: 'sticky',
})
```

### unstick

让一个sticker不在自动吸顶

```js
unstick(sticker)
```

#### @参数

* sticker
    * 类型: Sticker/DOM
    * 描述: 让一个sticker不再自动吸顶，这个参数可以是stick返回的值，也可以是注册stick时使用的DOM元素

例子:

推荐

```js
const sticker = stick(document.querySelector('#foo'))
unstick(sticker)
```
或

```js
const domNode = document.querySelector('#foo')
stick(domNode)
unstick(domNode)
```