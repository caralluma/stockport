import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-toolbox/lib/button';
import {VSpacer, HSpacer} from '../../common/app-spacer/index';
//import SideNavStyles from './side-nav.css';

class Sidebar extends Component {
    render() {
        return (
            <div >
                <VSpacer size="12px"/>
                <HSpacer size="15px"/>
                <Link to='/'>
                    <Button width="100%" label='Dashboard' accent style={{'color': '#c03645', 'min-width': '0px'}}/>
                </Link>
                <VSpacer size="10px"/>
                <HSpacer size="15px"/>
                <Link to='/products'>
                    <Button label='Products' accent style={{'color': '#c03645', 'min-width': '0px'}}/>
                </Link>
                <VSpacer size="10px"/>
                <HSpacer size="15px"/>
                <Link to='/quote'>
                    <Button label='Quote' accent style={{'color': '#c03645', 'min-width': '0px'}}/>
                </Link>
            </div>
        );
    }
}

export default Sidebar;

