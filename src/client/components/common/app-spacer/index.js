import React, {Component} from 'react';

export class HSpacer extends Component {
    render() {
        return (
            <div style={{'clear': 'both'}}>
                <div style={{
/*
                    'border': '1px solid black',
*/
                    'min-width': this.props.size,
                    'display': '-webkit-inline-box',
                    'float': 'left'
                }}>&nbsp;</div>
            </div>
        );
    }
}

export class VSpacer extends Component {
    render() {
        return (
            <div>
                <div style={{
/*                    'border': '1px solid black',*/
                    'min-height': this.props.size,
                    'float': 'none'
                }}>&nbsp;</div>
            </div>
        );
    }
}
