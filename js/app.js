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

var defautPageSetting = function() {
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
    activePageIndex: 0,
    currentComp: null
  },
  computed: {
    totalPage: function(){
      return this.pages.length;
    },
    currentPage: function(){
      return this.pages[this.activePageIndex];
    }
  }, 
  methods: {
    addNewPage: function(){
      this.pages.push(defautPageSetting());
      this.activePageIndex = this.totalPage - 1;
    },
    activePage: function(index){
      this.activePageIndex = index;
    },
    removePage: function(index){
      this.pages.splice(index, 1);
    },
    editPage: function(){

    },
    activeComp: function(comp) {
      this.currentComp = comp;
    },
    addTextComponent: function(){
      if(this.currentPage){
        this.currentPage.comps.push({
          type: 'hy-text',
          text: 'this is text'
        });        
      }
    },
    addImageComponent: function(){
      if(this.currentPage){
        this.currentPage.comps.push({
          type: 'hy-image',
          text: 'this is text'
        });        
      }
    }  
  },
  watch:{
    // save data
    pages: {
      handler: function (pages) {
        todoStorage.save(pages);
      },
      deep: true      
    }
  },   
  //  get data
  created: function(){
    var pages = todoStorage.fetch();
    if(pages.length <= 0 ){
      pages.push(defautPageSetting());
    }
    this.pages = pages;
  }  
});
