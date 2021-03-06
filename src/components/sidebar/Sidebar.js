import React, { Component } from 'react';
import './Sidebar.css';
import Accordion from '../accordion/Accordion';

export default class Sidebar extends Component {

    constructor(props) {
        super(props);

        this.accordions = [
            {
                title: '⌚History',
                items: ['#ff0000', '#00ff00', '#0000ff']
            },
            {
                title: '⭐Favorites',
                items: ['#ff0000', '#00ff00', '#0000ff']
            },
            {
                title: '🔴Common',
                items: ['#ff0000', '#00ff00', '#0000ff', '#ffffff']
            },
            {
                title: '🤪Overflow',
                items: ['#ff0000', '#00ff00', '#0000ff', '#ffffff','#ff0000', '#00ff00', '#0000ff', '#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ffffff','#ff0000', '#00ff00', '#0000ff', '#ffffff']
            }
        ];
    }

    render() {
        const accordions = this.accordions.map((x, i) => (
            <Accordion title={x.title} items={x.items} colorSelection={this.props.colorSelection}
                key={i} />
        ));

        return (
            <div className="sidebar">
                <h2 className="sidebar-title">Color picker</h2>
                <div className="accordions">{accordions}</div>                
            </div>
        );
    }
}