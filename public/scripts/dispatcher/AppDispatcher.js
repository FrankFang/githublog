var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AppDispatcher = function () {
    Dispatcher.call(this)
}

AppDispatcher.prototype = Object.create(Dispatcher.prototype)

AppDispatcher.prototype.handleViewAction = function (action) {
    this.dispatch({
        source: 'VIEW_ACTION',
        action: action
    })
}

var instance = new AppDispatcher()

module.exports = instance
