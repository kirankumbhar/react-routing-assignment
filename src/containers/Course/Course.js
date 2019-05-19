import React, { Component } from 'react';

class Course extends Component {
    state = {
        title: null
    }

    componentDidMount () {
        this.loadTitle();
    }

    componentDidUpdate () {
        this.loadTitle();
    }

    loadTitle = () => {
        const query = new URLSearchParams(this.props.location.search);
        const title = query.get('title');
        if (title != this.state.title) {
            this.setState({title: title});
        }
    }

    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;