import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {setFilter} from "../actions.js";

const Link = ({active, children, onClick}) => {
    if (active) {
        return <div className="filter selected">{children}</div>
    } else {
        return (
            <a href="javascript:;" className="filter not-selected" onClick={ (ev) => {
                ev.preventDefault();
                onClick();
            }}>
                {children}
            </a>
        );
    }
};

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.filter === ownProps.filter
    };
};