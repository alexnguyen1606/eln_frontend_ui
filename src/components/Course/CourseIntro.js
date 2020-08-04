import React, { Component } from 'react';
import ItemCourse from './ItemCourse'
import TitleIntro from '../common/TitleIntro';
import * as api from './../../apis/RootApi'
class CourseIntro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listCourse: []
        }
    }
    componentDidMount() {
        api.getAllWithPost("/api/course?size=6", {}).then((res) => {
            let data = res.data.data;
            console.log(data);
            this.setState({ listCourse: data });
        })
            .catch((error) => {
                console.log("error", error);
            });
    }
    showCourse = () => {
        if (this.state.listCourse.length !== 0) {
            return this.state.listCourse.map((item, i) => {
                return <ItemCourse key={i} course={item}></ItemCourse>
            })
        }
        return "";
    }
    render() {
        return (
            <div className="container mt-4">
                <TitleIntro title="Khóa học nổi bật"></TitleIntro>
                <div className="row ">
                    {this.showCourse()}
                </div>
            </div>
        );
    }
}

export default CourseIntro;