
var React = require('react');
var ReactDOM = require('react-dom');
var BoilerplateComponent = require('./components/BoilerplateComponent');
var hexStore = require('./stores/appStore');

var App = React.createClass({

  // Whatever should happen when first loading the app.
  getInitialState: function() {
    return {
      data: appStore.getData()
    };
  },

  // Register for any changes broadcasted by the store.
  componentDidMount: function() {
    appStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    appStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    // Whatever should happen when values change inside the store.
    this.setState({
      data: appStore.getData()
    });
  },

  render: function() {
    return (
      <div>
        <BoilerplateComponent/>
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('app'));
