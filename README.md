# stickto

[简体中文](./README.zh-CN.md)

make elements stick to top automatically(多dom自动吸顶库)

**Stickto** is a small lib that helps DOM nodes stick to top of viewport automatically.

When you have more than one DOM needs to stick on top, **stickto** can help these DOM nodes auto switch with each other smoothly.

[Demo transport](http://docs.gomeminus.com/stickto/)

![demo.gif](demo.gif)


## Install 

```
npm install stickto
```

## Import

this lib support UMD specification

1. use script tag
```html
<script src="stickto.js"/>
<script>
    // stick
    var stikcer = stickto.stick(/* DOM */)

    //unstick
    stickto.unstick(/* sticker or DOM */)
</script>
```

2. use commonjs/es5

```javascript
var stickto = require('stickto')

// stick
var stikcer = stickto.stick(/* DOM */)

//unstick
stickto.unstick(/* sticker or DOM */)
```

3. use commonjs/es6

```javascript
import {stick, unstick} from 'stickto'

// stick
var stikcer = stick(/* DOM */)

//unstick
unstick(/* sticker or DOM */)
```

## API

### stick

tells `stickto` there's a DOM node that needs to stick to viewport top automatically.

```js
var stiker = stick(DOM[, options])
```

#### @params

* DOM 
    * type: HTMLElementNode
    * description: a DOM node that `document.querySelector` returned
    * optional: no

eg:

```js
stick(document.querySelector('#foo'))
```

* options
    * type: Object
    * description: customize `z-index` and/or css class name when sticker is sticking at top
    * optional: yes
    * default: `{zIndex: 20, className: 'stickto-auto-generated-sticker'}`
    * zIndex
        * type: Number/String
        * description: set `z-index` when sticker is sticking
        * optional: yes
        * default: 20
    * className
        * type: String
        * description: set css class name when sticker is sticking
        * optional: yes
        * default: stickto-auto-generated-sticker

eg:

```js
stick(document.querySelector('#foo'), {
    zIndex: 1000,
    className: 'sticky',
})
```

#### @return 

* sticker
    * type: Sticker
    * description: an instance of Sticker

the `stick` method returns an instance of Sticker, when you don't want the sticker auto stick, it will be useful with the `unstick` method.

eg:

```js
const stick = stick(document.querySelector('#foo'), {
    zIndex: 1000,
    className: 'sticky',
})
```

### unstick

make a sticker unstick

```js
unstick(sticker)
```

#### @params

* sticker
    * type: Sticker/DOM
    * description: let a sticker unstick, the sticker was the `stick` method returned, or the DOM node that was used in `stick` method

eg:

recommand
```js
const sticker = stick(document.querySelector('#foo'))
unstick(sticker)
```
or

```js
const domNode = document.querySelector('#foo')
stick(domNode)
unstick(domNode)
```