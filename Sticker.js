/*
 * @Author: zhaoye 
 * @Date: 2018-03-23 18:06:08 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2018-04-08 23:31:14
 */

let cid = -1
export default class Sticker {
    constructor ($el, className, zIndex) {
        cid++
        this.cid = cid
        this.$el = $el
        const $elStyle = window.getComputedStyle($el)
        this.zIndex = '20'
        if (zIndex) {
            this.zIndex = zIndex
        }
        this.className = 'stickto-auto-generated-sticker'
        if (className) {
            this.className = className.trim()
        }
        this.styleCache = {
            position: $elStyle.position,
            top: $elStyle.top,
            zIndex: $elStyle.zIndex,
        }
        this.$holder = document.createElement('div')
        this.$holder.className = `stickto-auto-generated-stick-holder stickto-auto-generated-stick-holder-${this.cid}`

        this.$el.parentNode.insertBefore(this.$holder, this.$el)
    }
    getBoundingClientRect () {
        return this.$el.getBoundingClientRect()
    }
    getHeight () {
        return Number(window.getComputedStyle(this.$el).height.split('px')[0])
    }
    smoothSwitch (replacer) {
        this.$el.style.transform = `translate(0,${replacer.getBoundingClientRect().top - this.getHeight()}px)`
    }
    copyStyle (style1, style2, name) {
        if (style1[name] !== style2[name])
            style1[name] = style2[name]
    }
    destroy () {
        this.unstick()
        this.$holder.parentNode.removeChild(this.$holder)
        this.$holder = null
        this.styleCache = null
        this.$el = null
        cid--
    }
    isInDangerZone (sticking) {
        const holderRect = this.$holder.getBoundingClientRect()
        const height = Number(window.getComputedStyle(sticking.$el).height.split('px')[0])
        if (holderRect.top > 0 && holderRect.top < height)
            return true
        else
            return false
    }
    shouldStick () {
        const holderRect = this.$holder.getBoundingClientRect()
        const height = Number(window.getComputedStyle(this.$el).height.split('px')[0])
        
        if (holderRect.top <= 0)
            return true
        else
            return false
    }
    stick () {
        const stickyStyle = {
            position: 'fixed',
            top: '0px',
            zIndex: this.zIndex,
        }
        this.copyStyle(this.$holder.style, window.getComputedStyle(this.$el), 'height')
        this.copyStyle(this.$el.style, stickyStyle, 'position')
        this.copyStyle(this.$el.style, stickyStyle, 'top')
        this.copyStyle(this.$el.style, stickyStyle, 'zIndex')
        this.copyStyle(this.$el.style, {transform: 'translate(0,0)'}, 'transform')
        if (this.className && !this.$el.className.match(new RegExp(this.className))) {
            this.$el.className += ` ${this.className}`
        }
    }
    unstick () {
        const reg = new RegExp(` ${this.className}`, 'g')
        this.copyStyle(this.$el.style, this.styleCache, 'position')
        this.copyStyle(this.$el.style, this.styleCache, 'top')
        this.copyStyle(this.$el.style, this.styleCache, 'zIndex')
        this.copyStyle(this.$holder.style, {height: '0px'}, 'height')
        this.copyStyle(this.$el.style, {transform: 'translate(0,0)'}, 'transform')
        if (this.className && this.$el.className.match(reg)) {
            this.$el.className = this.$el.className.replace(reg, '')
        }
    }
}