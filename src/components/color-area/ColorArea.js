import React, { Component } from 'react';
import './ColorArea.css';

export default class ColorArea extends Component {

    render() {
        return (
            <div className="color-area" style={{ background: this.props.background }}>
                <div className="color-code">{this.props.background}</div>
            </div>
        );
    }
    
}
