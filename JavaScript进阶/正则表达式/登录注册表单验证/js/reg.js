/*
 * @Description: 正则表达式(手机号、QQ、昵称、短信验证码、登录密码、确认密码)
 * @Autor: Tong
 * @Date: 2021-07-03 14:02:13
 * @LastEditors: Tong
 * @LastEditTime: 2021-07-05 16:20:13
 */
window.onload = function () {
    let regtel = /^1[3|4|5|6|7|8|9]\d{9}$/
    let regqq = /^[1-9]\d{4,}$/ // 10000
    let regnick = /^[\u4e00-\u9fa5A-Za-z0-9_-]{2,10}$/
    let regmsg = /^\d{6}$/
    let regpwd = /^[A-Za-z0-9_-]{6,16}$/
    let tel = document.querySelector('#tel')
    let qq = document.querySelector('#qq')
    let nickname = document.querySelector('#nc')
    let msg = document.querySelector('#msg')
    let pwd = document.querySelector('#pwd')
    let surepwd = document.querySelector('#surepwd')

    regexp(tel, regtel)
    regexp(qq, regqq)
    regexp(nickname, regnick)
    regexp(msg, regmsg)
    regexp(pwd, regpwd)

    function regexp(ele, reg) {
        ele.onblur = function () {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜输入正确！'
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error"></i>格式有误！'
            }
        }
    }

    surepwd.onblur = function () {
        if (this.value === pwd.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜输入正确！'
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error"></i>两次密码不一致！'
        }
    }
}