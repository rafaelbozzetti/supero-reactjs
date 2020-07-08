import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from '../pages/Search';
import Detail from '../pages/Detail';

const Routes: React.FC = () => {
    return (
        <>
            <Switch>
                <Route path="/" component={Search} exact />
                <Route path="/detail" component={Detail}  />
            </Switch>
        </>
    );
}

export default Routes;
