import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Course from '../Course/Course';
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    courseClickHandler = (id, title) => {
        this.props.history.push('/courses/' + id + '?title=' + title)
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return <article className="Course" onClick={() => {this.courseClickHandler(course.id, course.title)}} key={course.id}>{course.title}</article>;
                        } )
                    }
                </section>
                <section>
                    <Route path="/courses/:id" exact component={Course}/>
                </section>
            </div>
        );
    }
}

export default Courses;