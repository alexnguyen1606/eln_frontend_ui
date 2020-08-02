import React, { Component } from 'react';
import ItemCourse from './ItemCourse'
import TitleIntro from '../common/TitleIntro';
class CourseIntro extends Component {
    render() {
        return (
            <div className="container mt-4">
                <TitleIntro title="Khóa học nổi bật"></TitleIntro>
                <div className="row ">
                    <ItemCourse></ItemCourse>
                    <ItemCourse></ItemCourse>
                    <ItemCourse></ItemCourse>
                    <ItemCourse></ItemCourse>
                </div>
            </div>
        );
    }
}

export default CourseIntro;