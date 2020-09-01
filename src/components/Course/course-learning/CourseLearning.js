import React, { Component, Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './../../../css/CourseLearning.css';
import { findById } from '../../../apis/RootApi'
import TabLearning from './Tab';
import Content from './Content';
import PreHeader from '../../PreHeader';
function CourseLearning(props) {

    const courseId = props.match.params.id;
    const [status, setStatus] = useState(true)
    const [course, setCourse] = useState({})
    const getCourse = () => {
        findById("/api/course/" + courseId).then((res) => {
            let { data } = res.data;
            setCourse(data);
            console.log(data);
        })
    }

    useEffect(() => {
        getCourse()
    }, [])
    const changeStatus = () => {

        setStatus(!status)
    }


    return (
        <Fragment>

            <div className="container-fluid mt-5 h-100">
                <div className="row h-100">
                    <TabLearning status={status} changeStatus={() => changeStatus()} courseId={courseId} course={course}></TabLearning>
                    <Content changeStatus={() => changeStatus()} course={course}></Content>
                </div>
            </div>
        </Fragment>
    );

}

export default withRouter(CourseLearning);