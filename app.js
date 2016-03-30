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
      backgroundColor: '#ffffff'
    }
  }
}

var app = new Vue({
  el:'body',
  data:{
    pages: [],
    currentPage: 0,
    backgroundColor: '#fff'
  },
  watch:{
    backgroundColor: function(val){
      if(this.pages.length !== 0){
        this.pages[this.currentPage].style.backgroundColor = val;
      }
    },
    pages: {
      handler: function (pages) {
        debugger;
        console.log(this.currentPage);
        todoStorage.save(pages);
      },
      deep: true      
    }
  },
  methods: {
    addPage: function(){
      this.pages.push(defautSetting());
      this.currentPage++;
    },
    removePage: function(index){
      if (window.confirm("你确定删除页面吗？")) { 
        this.pages.splice(index, 1);
      }
    },
    activePage: function(index){
      this.currentPage = index;
    },
    changeBackgroundColor: function(){
      console.log(this);
    }
  },
  created: function(){
    var pages = todoStorage.fetch();
    // if( pages.length === 0) {
    //   pages.push(defautSetting());
    // }
    this.pages = pages;
  }
});