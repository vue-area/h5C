Vue.component('hy-text', {
  template: '<p>text:{{item.text}}</p>',
  props: ["item"]
});
Vue.component('hy-text-edit', {
  template: '<p>text:<input type="text" v-model="item.text"/></p>',
  props: ["item"]
});

Vue.component('hy-image', {
  template: '<p>image:{{item.text}}</p>',
  props: ["item"]
});
Vue.component('hy-image-edit', {
  template: '<p>image:<input type="text" v-model="item.text"/></p>',
  props: ["item"]
});

// Vue.component('hy-text',{
//   template: '#hyText',
//   props:["activePage"]
// });

// Vue.component('hy-text-view',{
//   template: '#hyTextView',
//   props:["textComponents"],
//   data: function(){
//     return {
//       currentIndex: 0
//     }
//   },
//   watch:{
//     currentIndex: function(){
//       var that = this;
//       this.textComponents = this.textComponents.map(function(item, index){
//         if(index == that.currentIndex){
//           item.active = true;
//         }
//         else{
//           item.active = false;
//         }
//         return item;
//       });
//     }
//   },
//   computed:{},
//   methods: {
//     updateCurrentIndex: function(index){
//       this.currentIndex = index;
//       console.log(this.currentIndex);
//     }
//   }
// });