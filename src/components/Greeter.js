import React from 'react';

export default React.createClass({
    render: function() {
        const { name } = this.props.params;
        console.log (this.props)
        return (
            <h2>
                Helloooo {name}
            </h2>
        );
    }
});
