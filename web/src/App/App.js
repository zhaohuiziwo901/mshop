import React, {Component} from "react";
import LeftNav from "../LeftNav/LeftNav.js";
import {Link, browserHistory} from "react-router";

import "./App.scss";

class App extends Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        return (
            <div className="wrap">
                <div className="top-bar">
                    <Link to="/" className="logo">Logo</Link>
                </div>
                <div className="clear">
                    <div className="nav-wrap fl">
                        <LeftNav />
                    </div>
                    <div className="main bd fl">
                        <div className="title-back clear">
                            <a href="javascript:;" className="back fl">←</a>
                            <h2 className="title fl">标题</h2>
                        </div>
                        <div className="content">{this.props.children}</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;