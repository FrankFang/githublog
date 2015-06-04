var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var $ = require('jquery')
var _ = require('lodash')

var CHANGE_EVENT = 'change';

var _user = {};
OAuth.initialize('SStsPkMVykVJFszLnFSqa11r_-o');

var UserStore = assign({}, EventEmitter.prototype, {

    getAll: function () {
        return _user;
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

function fetch() {
    OAuth.popup('github', {cache: true})
        .done(function (result) {
            result.me().done(function (e) {
                console.log(e.raw.login);
                result.post('/gists', {
                    data: {
                        description: 'the description for this gist',
                        public: true,
                        files: {
                            'file1.txt': {
                                'content': 'String file contents'
                            }
                        }
                    }
                })
            })
        }).fail(function (e) {
            console.log(e);
        })
}

AppDispatcher.register(function (action) {

    switch (action.type) {
        case 'fetch:user':
            fetch()
            break;

        default:
            // nothing
            break;
    }
});

module.exports = UserStore;
