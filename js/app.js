Vue.config.debug  = true;
var STORAGE_KEY = 'hy-sms-h5';

var todoStorage = {
  fetch: function () {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
};

var defautSetting = function() {
  return {
    active: true,
    style: {
      backgroundColor: '#ffffff',
      backgroundImage: 'none' //url("resource/bg01.png")
    }
  }
}

var app = new Vue({
  el:'body',
  data:{
    pages: [],
    currentPage: 0,
    backgroundColor: '#ffffff',
    backgroundImage: 'none'
  },
  computed: {
    totalPage: function(){
      return this.pages.length;
    },
    backgroundColor:{
      get: function(){
        if(this.pages.length !== 0){
          return this.pages[this.currentPage].style.backgroundColor;
        }
        else{
          return '#ffffff';
        }     
      },
      set: function(val){
        if(this.pages.length !== 0){
          this.pages[this.currentPage].style.backgroundColor = val;
        }
        else{
          return '#ffffff';
        }
      }
    },
    backgroundImage:{
      get: function(){
        if(this.pages.length !== 0){
          return this.pages[this.currentPage].style.backgroundImage;
        }
        else{
          return '#ffffff';
        }     
      },
      set: function(val){
        if(this.pages.length !== 0){
          this.pages[this.currentPage].style.backgroundImage = val;
        }
        else{
          return '#ffffff';
        }
      }
    },
    activePage: function(){
      return this.pages[this.currentPage];
    } 
  },
  watch:{
    pages: {
      handler: function (pages) {
        console.log(this.currentPage);
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
    removePage: function(index){
      if (window.confirm("你确定删除页面吗？")) { 
        this.pages.splice(index, 1);
      }
    },
    updateCurrentPage: function(index){
      this.currentPage = index;
    },
    addTextComponent: function(){
      if(!!this.pages.length){
        var tmp = 'pages[' + this.currentPage + '].textComponents';
        if(!this.$get(tmp)){
          this.$set(tmp, []);
        }; 
        var that = this;
        that.$nextTick(function () {
          // debugger;
          that.pages[that.currentPage].textComponents.push({
            active: false,
            text: '文字',
            style:{
              fontSize: '25px',
              color:'red'
            }
          });
        });
      }
    }
  },
  created: function(){
    var pages = todoStorage.fetch();
    if( pages.length === 0) {
      pages.push(defautSetting());
    }
    this.pages = pages;
  }
});