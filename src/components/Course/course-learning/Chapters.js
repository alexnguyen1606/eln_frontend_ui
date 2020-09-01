import React, { useState, useEffect, useCallback } from 'react'
import Alert from '../../common/Alert';
import Chapter from './Chapter';
import { get } from './../../../apis/RootApi';
import { useSelector, useDispatch } from 'react-redux';
import * as action from './../../../actions/Action';
function Chapters(props) {
    const { course } = props;
    const { courseId } = props;

    const showChapter =
        () => {

            if (!course) {
                return "";
            }
            if (!course.outline) {
                return "";
            }
            if (!course.outline.chapters) {
                return "";
            }
            if (course.outline.chapters.length > 0) {
                return course.outline.chapters.map((item, i) => {

                    return <Chapter chapter={item} courseId={course.id} course={course} key={i}></Chapter>
                })
            }
            return <Alert style="alert-warning" message="Chưa có học liệu"></Alert>

        }
    return (
        <div className="col-md-12 row ">
            {showChapter()}
        </div>
    )
}

export default Chapters
