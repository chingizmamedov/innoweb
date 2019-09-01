import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contacts from '../pages/Contacts';
import Circle from '../pages/Circle';
import fortyfor from '../pages/404';

export default class Main extends Component {
    render() {
        return (
            <div>
            <Switch>
                <Route path={'/'} exact component={Home} />
                <Route path={'/about'} component={About} />
                <Route path={'/projects'} component={Projects} />
                <Route path={'/contacts'} component={Contacts} />
                <Route path={'/circle'} component={Circle} />
                <Route component={fortyfor} />

            </Switch>
                
            </div>
        )
    }
}
