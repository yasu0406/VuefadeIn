var windowStatePlugin = {
    install: function() {
        // windowState
        var state = {
            scrollX: 0,
            scrollY: 0,
            width: 0,
            height: 0
        }
        // onScroll
        var onScroll = function() {
            state.scrollX = window.pageXOffset
            state.scrollY = window.pageYOffset
        }    
        document.addEventListener('scroll', onScroll)
        // set is windowSize
        var onResize = function() {
            state.width = document.documentElement.clientWidth
            state.height = document.documentElement.clientHeight
        }
        window.addEventListener('resize', onResize)
        onResize()
        // firstSetting
        window.addEventListener('load', onScroll)
        // 
        Vue.util.defineReactive(Vue.prototype, '$window', state)
    }
}