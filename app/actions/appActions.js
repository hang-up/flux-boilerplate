var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');

var AppActions = {
  
  /**
  * Example of action creator.
  *
  */
  checkValidHex: function(value) {
    AppDispatcher.handleAction({
      actionType: appConstants.CHECK_HEX_VALUE,
      data: value
    });
  }
};

module.exports = AppActions;
