var React = require('react');
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;

// When you are using IndexRoute like we are in app.jsx, you have
// to also use IndexLink like we have below to link to that route.
// Using IndexLink as opposed to regular link will allow us to not
// have the link text bold all the time, only after its been clicked on
// and before a different link has been clicked

var Nav = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Nav Component</h2>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </div>    
        );
    }
});

module.exports = Nav;