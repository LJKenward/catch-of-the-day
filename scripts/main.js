var React = require('react');
var ReactDOM = require('react-dom');

/*
  StorePicker
  This will let us make <StorePicker/>
*/
  var StorePicker = React.createClass({

    render : function() {
      var name = "lj";
      // normal comments
      return (
        <form className="store-selector">
        <h2>Please Enter A Store, {name}</h2>
        {/* this is how you write comments in JSX */}
        <input type="text" ref="storeId" required />
        <input type="Submit" />

        </form>
      )
    }

  });


ReactDOM.render(<StorePicker/>, document.querySelector('#main'));
