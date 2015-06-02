var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var $ = require('jquery')
var _ = require('lodash')

var CHANGE_EVENT = 'change';

var _user = {};
