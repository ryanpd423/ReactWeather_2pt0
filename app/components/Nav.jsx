var React = require('react');
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;

// When you are using IndexRoute like we are in app.jsx, you have
// to also use IndexLink like we have below to link to that route.
// Using IndexLink as opposed to regular link will allow us to not
// have the link text bold all the time, only after its been clicked on
// and before a different link has been clicked

var Nav = React.createClass({
    onSearch: function(event) {
        event.preventDefault(); //prevents the browser from refreshing the page
        alert('Not yet wired up!');
    },
    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li class="menu-text">React Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>        
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>   
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search Weather"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Nav;