Vue.component('hy-page-edit', {
  template: '#hyPageEdit',
  props: ["page"]
});

// 文字组件
Vue.component('hy-text', {
  template: '<p>text:{{comp.text}}</p>',
  props: ["comp"]
});

Vue.component('hy-text-edit', {
  template: '#hyTextEdit',
  props: ["comp"]
});

// 图片组件
Vue.component('hy-image', {
  template: '<p>image:{{comp.text}}</p>',
  props: ["comp"]
});
Vue.component('hy-image-edit', {
  template: '#hyImageEdit',
  props: ["comp"]
});