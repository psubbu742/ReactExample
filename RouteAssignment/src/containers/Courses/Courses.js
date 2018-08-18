import React, { Component } from 'react';
import Course from '../Course/Course';
import {Route} from 'react-router-dom';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        courseId:null
    }

    displayCourse = (id,title) => {
        this.setState({courseId:id})
        this.props.history.push({
            pathname:'/courses/'+id,
            search:'?title='+title
        })
    }
       
  
    render () {
       
        //let rendComp = this.state.courseId? <Course id={this.state.courseId}/> : <h5>Select course</h5>;
        return (
           
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses" >
                    {
                        this.state.courses.map( course => {
                            return <article className="Course" key={course.id} onClick={() => this.displayCourse(course.id, course.title)}>{course.title}</article>;
                        } )
                    }
                </section>

                <hr/>
                 <Route path="/courses/:id" component={Course} />
            </div>
        );
    }
}

export default Courses;