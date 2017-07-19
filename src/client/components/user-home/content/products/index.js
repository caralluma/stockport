import React from 'react';
import {Button} from 'react-toolbox/lib/button';

//import ItemList from './product-list/index';

class Quote extends React.Component {
    render () {
        return (
            <div>
                <Button icon='sunil' className={{background: 'blue'}} floating accent mini />
                {/*                <ItemList/>*/}
            </div>
        );
    }
}

export default Quote;
