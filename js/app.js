Vue.config.debug  = true;
var todoStorage = {
  name: 'hy-sms-h5', 
  fetch: function () {
    return JSON.parse(localStorage.getItem(this.name) || '[]');
  },
  save: function (todos) {
    localStorage.setItem(this.name, JSON.stringify(todos));
  }
};

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

var defautSetting = function() {
  return {
    active: true,
    style: {
      backgroundColor: '#ffffff',
      backgroundImage: 'none' //url("resource/bg01.png")
    },
    comps:[]
  }
};

var app = new Vue({
  el: 'body',
  data: {
    pages:[],
    currentPage: 0,
    activeComp: null
  },
  computed: {
    totalPage: function(){
      return this.pages.length;
    }
  },
  watch:{
    pages: {
      handler: function (pages) {
        todoStorage.save(pages);
      },
      deep: true      
    }
  },  
  methods: {
    addPage: function(){
      this.pages.push(defautSetting());
      this.currentPage = this.totalPage - 1;
    },
    updateCurrentPage: function(index){
      this.currentPage = index;
    },
    updateActiveComp: function(comp) {
      this.activeComp = comp;
    },
    addTextComponent: function(){
      this.pages[this.currentPage].comps.push({
        id: '001',
        type: 'hy-text',
        isShow: true,
        active: true,
        text: 'this is text'
      });
    },
    addImageComponent: function(){
      this.pages[this.currentPage].comps.push({
        id: '001',
        type: 'hy-image',
        isShow: true,
        active: true,
        text: 'this is text'
      });
    }  
  },
  created: function(){
    var pages = todoStorage.fetch();
    this.pages = pages;
  }  
});
