var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({

    getDefaultProps: function() {
        return {
            title: 'Error'
        };
    },

    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },

    componentDidMount: function(){
        var title = this.props.title;
        var message = this.props.message;

        var modalMarkup = (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">
                        Gotcha
                    </button>
                </p>
            </div>
        );
        
        // jQuery code to help us render the html we need, it is our work around to 
        // fix the issue introduced when Foundation manipulates the DOM by opening the 
        // modal without React.  React gets mad causing us to not able use the application
        // after we open the modal and search for a non-existent city.  So as a workaround
        // we have to use this jQuery code below to return the markup that we now have moved
        // into this componentDidMount() function
        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);

        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },

    render: function() {
        return (
            <div>
            </div>
        );
    }
});

module.exports = ErrorModal;