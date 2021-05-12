const navBtn = $('.nav-btn');
const navMenu = $('.nav-menu');


// CSS3导航栏item的渐入动画
let navMenuItems = $('.nav-menu li');
// navMenuItems = (navMenuItems);
navBtn.on('click', function () {
  navBtn.toggleClass('active');
  navMenu.toggleClass('open');
  // js获取到的是数组型对象，所以要转成数组才能进行数组操作
  navMenuItems = Array.from(navMenuItems);
  navMenuItems.forEach((item, index) => {
    if (item.style.animation) {
      item.style.animation = '';
    } else {
      item.style.animation = `0.3s ease-in slideIn forwards ${index * 0.1 + 0.1}s`;
    }
  })
})

