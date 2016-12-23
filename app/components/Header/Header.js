import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class Header extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
	        <div className="header" onTouchTap={this.props.handleTouchTapOpen}>Headers</div>
        );
    }
}

export default Header;
