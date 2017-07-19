import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Dashboard from './dashboard';
import Products from './products';
import Quote from './quote';

class Home extends React.Component {
    render () {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Dashboard}/>
                    <Route path='/products' component={Products}/>
                    <Route path='/quote' component={Quote}/>
                </Switch>
            </main>);
    }
}

export default Home;
