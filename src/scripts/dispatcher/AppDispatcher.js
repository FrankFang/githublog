var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

module.exports = assign({}, Dispatcher.prototype, {

    handleViewAction: function (action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        })
    }

})
