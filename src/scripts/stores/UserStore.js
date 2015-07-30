var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var $ = require('jquery')
var _ = require('lodash')

var CHANGE_EVENT = 'change';

var _user = {};
OAuth.initialize('SStsPkMVykVJFszLnFSqa11r_-o');

var UserStore = assign({}, EventEmitter.prototype, {

    get: function () {
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

function exit() {
    OAuth.clearCache('github')
    _user = null
    UserStore.emitChange()
}

function refresh() {
    OAuth.popup('github', {
            cache: true
        })
        .done(function (result) {
            result.me().done(function (me) {
                _user = me
                UserStore.emitChange()
            })
        }).fail(function (e) {
            console.log(e);
        })
}

function fetch() {

    var userData = OAuth.create('github');
    if (!userData) {
        _user = null
        UserStore.emitChange()
        return
    }
    userData.me().done(function (me) {
        _user = me
        console.log(me)
        UserStore.emitChange()
    }).fail(function (err) {
        _user = null
        UserStore.emitChange()
    });
}

AppDispatcher.register(function (action) {

    switch (action.type) {
        case 'fetch:user':
            fetch()
            break;
        case 'refresh:user':
            refresh()
            break;
        case 'exit:user':
            exit()
            break;

        default:
            // nothing
            break;
    }
});

module.exports = UserStore;
