import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import {NavLink, Route,Switch, Redirect} from 'react-router-dom'
import Users from '../Users/Users';
import Courses from '../Courses/Courses';
import Error from '../Error/Error';
//import Course from '../Course/Course';
import './MainContainer.css'

class MainContainer extends Component {

    render() {
        return(
            <Aux>
                <div className="MainContainer">
                <header >
                    <nav>
                        <ul>
                                <li><NavLink to="/users"  exact activeClassName="subbu">Users</NavLink></li>
                                <li><NavLink  to={{
                                    pathname: '/courses',
                                    
                                }}>courses</NavLink></li>
                            </ul>
                        </nav>
                    </header>
                   <div className="container">    
                       {/* <Users />
                       <Courses/>          */}
                    <Switch>
                    <Route path="/users" exact component={Users} />
                    <Route path="/courses" component={Courses} />
                    <Redirect from="/all-courses" to="/courses"/>
                    <Route component={Error} /> 
                   </Switch>
                                </div>
                
               </div>
            </Aux>
        );
    }
}

export default MainContainer;