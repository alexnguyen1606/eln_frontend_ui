import React, { Component } from 'react';

class TitleIntro extends Component {
    render() {
        return (
            <div className="container mt-3">
                <h1 className="text-center title-intro">{this.props.title}</h1>
            </div>
        );
    }
}

export default TitleIntro;