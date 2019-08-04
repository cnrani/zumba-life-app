import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';


import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {Home} from './components/Home';
import {About} from './components/About';
import {Contact} from './components/Contact';



/*ReactDOM.render(

    <Router>
        <>
            <h1>Zumba life</h1>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
{/!*            <div>
                <Route path="/" exact component={Home}/>
                <Route path="/" exact component={About}/>
                <Route path="/" exact component={Contact}/>

            </div>*!/}

            <div>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/" exact component={About}/>
                    <Route path="/" exact component={Contact}/>
                </Switch>
            </div>
        </>

    </Router>,

    //<App />, document.getElementById('root')
    document.getElementById('root'),

);*/

ReactDOM.render(
    <Router>
        <>
            <h1> Zumba Life </h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact/1">Contact</Link></li>
            </ul>
            <div>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact/:id" component={Contact}/> {/* passes props */}
            </div>
        </>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
