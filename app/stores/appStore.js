var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');

var CHANGE_EVENT = 'change';

// Data Store.
var _data = {

};

// Setter methods.
var setterBoilerplate = function(value) {
  console.log(value.target.value);
}

// Store.
var appStore = objectAssign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(cb) {
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener: function(cb) {
    this.removeChangeListener(CHANGE_EVENT, cb);
  }
});

// Register to dispatcher.
AppDispatcher.register(function(payload) {
  var action = payload;

  // If dispatched event correspond to switch statement, launch the appropriate
  // setters, then broadcast the change to the views.
  switch (action.actionType) {
    case appConstants.CONSTANT:
      // Action

      // Broadcast change
      appStore.emitChange();
      break;


    default:
      return true;
  }
});

module.exports = appStore;
