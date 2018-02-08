$(function(){
  var titleSpedd = 2500; 
  var boxSpeed = 5000;
  Vue.use(windowStatePlugin)

  if(screen.width > 768){
    var pageTop = new Vue({
      el: '#pageTop',
      data: function(){
        return{
          posY: 0,
          visible: false
        }
      },
      watch: {
        '$window.scrollY': 'getPosition'
      },
      methods: {
        getPosition: function() {
          this.posY = this.$window.scrollY
          console.info(this.posY)
          if(this.posY > 100) {
            this.visible = true
          } else if(this.posY < 100) {
            this.visible = false
          }
        }
      }
    });
  }

  var navScroll = new Vue({
      el: '.nav'
  });
  var navbarBrand = new Vue({
      el: '.navbar-brand'
  });
    var aboutContents = new Vue({
      el: '#about',
      data: function() {
          return {
            posY: 0,
            posX: 0,
            visible: false
          }
        },
        watch: {
          '$window.scrollY': 'getPosition'
        },
        methods: {
          getPosition: function() {
            this.posY = this.$window.scrollY
            this.posX = this.$window.width
            if(this.posX > 1000) {
              if (this.posY > 550) {
                  this.visible = true
              }
            } else if(this.posX < 1000) {
              if (this.posY > 0) {
                  this.visible = true
              }
            }
          }
        }
    });

    var portfolioContents = new Vue({
      el: '#portfolio',
      data: function() {
          return {
            posY: 0,
            posX: 0,
            visible: false
          }
        },
        watch: {
          '$window.scrollY': 'getPosition'
        },
        methods: {
          getPosition: function() {
            this.posY = this.$window.scrollY
            this.posX = this.$window.width
            if(this.posX > 1000) {
              if (this.posY > 1110) {
                  this.visible = true
              }
            } else if(this.posX < 1000) {
              if (this.posY > 550) {
                  this.visible = true
              }
            }
          }
        }
    });

    var blogContents = new Vue({
      el: '#blog',
      data: function() {
          return {
            posY: 0,
            posX: 0,
            visible: false
          }
        },
        watch: {
          '$window.scrollY': 'getPosition'
        },
        methods: {
          getPosition: function() {
            this.posY = this.$window.scrollY
            this.posX = this.$window.width
            if(this.posX > 1000) {
              if (this.posY > 1750) {
                  this.visible = true
              }
            } else if(this.posX < 1000) {
              if (this.posY > 2050) {
                  this.visible = true
              }
            }
          }
        }
    });

  $(window).load(function () {
    $.when(  
      $('#overlay').delay(500).fadeOut(1000)).
    done(function(){
      $('#main').delay(500).fadeIn(1000)})
    });
});