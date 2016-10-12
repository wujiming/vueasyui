define(function (require) {
    var app = new Vue({
        el: '#app',
        data: {
            currentView: 'index'
        },
        components: {
            index: require('index')
        }
    })
})