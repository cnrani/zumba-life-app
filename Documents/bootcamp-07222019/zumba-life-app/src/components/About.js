import React from 'react';
import {Route, Link} from 'react-router-dom';

export const About= () => {
    return  <>
        <h1>About</h1>
        <ul>
            <li><Link to="/about/team">Team</Link></li>
            <li><Link to="/about/location">Location</Link></li>
            <li><Link to="/about/music">Music</Link></li>
        </ul>
        <Route path='/about/team' render={()=> {

        return <>
            <h2> ZumZum Team </h2>
            <p>
                we are the best Zumba trainers in the world.
            </p>

        </>

        }
        }>
        </Route>

        <Route path='/about/location' render={()=> {

            return <>
                <h2> Location is MTV </h2>
                <p>
                    we zumba in best place on earth.
                </p>

            </>

        }
        }>
        </Route>
        <Route path='/about/music' render={()=> {

            return <>
                <h2> Despacito </h2>
                <p>
                    we crush our ememies while we zumba to despacito.
                </p>

            </>

        }
        }>
        </Route>
    </>
};