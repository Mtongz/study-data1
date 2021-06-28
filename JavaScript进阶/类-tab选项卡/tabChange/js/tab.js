/*
 * @Description: 面向对象编程- tab类
 * @Autor: Tong
 * @Date: 2021-06-26 09:45:44
 * @LastEditors: Tong
 * @LastEditTime: 2021-06-26 14:42:24
 */
let that;
class Tab {
    constructor(ele) {
        that = this;
        // 获取元素
        this.tabsbox = document.querySelector(ele)
        this.tabadd = this.tabsbox.querySelector('.tabadd')

        // li的父元素
        this.ul = this.tabsbox.querySelector('.fisrstnav ul:first-child')
        // section的父元素
        this.fsection = this.tabsbox.querySelector('.tabscon')
        this.init()
    }
    init() {
        this.updateNode()
        // 初始化，让相关元素绑定事件
        for (let i = 0; i < this.lis.length; i++) {
            // 给每个li添加一个index
            this.lis[i].index = i
            this.lis[i].onclick = this.toggleTab
            this.remove[i].onclick = this.removeTab
            this.spans[i].ondblclick = this.editTab
        }
        this.tabadd.onclick = this.addTab
    }
    // 获取li和section元素
    updateNode() {
        this.lis = this.tabsbox.querySelectorAll('li')
        this.sections = this.tabsbox.querySelectorAll('section')
        // 删除按钮元素
        this.remove = this.tabsbox.querySelectorAll('.icon-guanbi')
        this.spans = this.tabsbox.querySelectorAll('.fisrstnav li span:first-child')
    }
    // 1.切换功能
    toggleTab() {
        that.clearClass()
        this.classList.add("liactive")
        that.sections[this.index].classList.add('conactive')
    }
    // 1.1 清除所选元素active类名
    clearClass() {
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].classList.remove('liactive')
            this.sections[i].classList.remove('conactive')
        }
    }
    // 2.添加功能
    addTab() {
        that.clearClass()
        let random = Math.random()
        let li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>'
        let section = '<section class="conactive">测试' + random + '</section>'
        that.fsection.insertAdjacentHTML('beforeend', section)
        that.ul.insertAdjacentHTML('beforeend', li)
        that.init()
    }
    // 3.删除功能
    removeTab(e) {
        e.stopPropagation();
        let index = this.parentNode.index;
        that.lis[index].remove()
        that.sections[index].remove()
        that.init()
        if (document.querySelector('.liactive')) return
        index--
        that.lis[index] && that.lis[index].onclick()
    }
    blur(ele) {
        console.log(this);
    }
    // 4.修改功能
    editTab() {
        let txt = this.innerHTML
        // 双击禁止选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text" />'
        let input = this.children[0]
        input.value = txt
        // 全选
        input.select()
        input.onblur = this.blur
        // function () {
        //     this.parentNode.innerHTML = input.value
        // }
    }
}
new Tab('.tabsbox')