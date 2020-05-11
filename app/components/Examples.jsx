var React = require('react');
var Link = require('react-router').Link;

var Examples = React.createClass({
    render: function() {
        return (
            <div>
                <h1 className="text-center page-title">Examples</h1>
                <p>Here are a few example locations to try out:</p>
                <ol>
                    <li>
                        <Link to='/?location=St.Louis'>St.Louis, MO</Link>
                    </li>
                    <li>
                        <Link to='/?location=Gulf Shores'>Gulf Shores, AL</Link>
                    </li>
                    <li>
                        <Link to='/?location=London'>London, UK</Link>
                    </li>
                </ol>
            </div>
        )
    }
});

module.exports = Examples;