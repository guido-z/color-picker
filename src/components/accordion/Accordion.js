import React, { Component } from 'react';
import './Accordion.css';

export default class Accordion extends Component {

    render() {
        const items = this.props.items.map((x, i) => (
            <li key={i} onClick={() => this.props.colorSelection(x)}>
                <span className="color-preview" style={{ background: x }}></span>
                {x}
            </li>
        ));

        return (
            <div className="accordion">
                <h4 className="accordion-title">
                    <label htmlFor="toggle-list">{this.props.title}</label>
                </h4>
                <input type="checkbox" id="toggle-list" />
                <ul className="accordion-items">
                    {items}
                </ul>
            </div>
        );
    }

}