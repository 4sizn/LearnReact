import React, { Component } from 'react';
import {Home, About, NoMatch, Posts} from '../routers'
import {Route, Switch} from 'react-router-dom';
import Menu from '../components/Menu';

class App extends Component {
    render() {
        return (
            <div>
                <Menu></Menu>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route path='/about/:username' component={About}/>
                    <Route path="/posts" component={Posts}/> 
                    <Route component={NoMatch}/>        
                </Switch>
                </div>
        );
    }
}

export default App;