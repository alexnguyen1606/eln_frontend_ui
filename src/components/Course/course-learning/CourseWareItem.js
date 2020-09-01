import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as action from './../../../actions/Action';
import { get } from './../../../apis/RootApi'
function CourseWareItem(props) {
    let dispatch = useDispatch();
    const positions = useSelector(state => state.courseWare.positions);
    const courseWareIds = useSelector(state => state.courseWare.courseWareIds)
    let { courseWare } = props;
    let { chapter } = props;
    const { course } = props;
    //  let listSeen = useSelector(state => state.courseWare.positions);
    let { courseId } = props;
    const [active, setActive] = useState("");
    const [status, setStatus] = useState(false);

    const checkStatus = () => {
        if (course.stepbystep !== 1) {
            return true;
        }
        let indexExpect = courseWareIds.indexOf(courseWare.id);
        if (indexExpect === 0) {
            return true;
        }
        if (positions.includes(courseWareIds[indexExpect - 1])) {
            return true;
        }
        return false;


    }

    const setCourseWare = () => {

        if (checkStatus()) {
            dispatch(action.setCourseWare(courseWare))
            updateProgress();
            setActive("active-course-ware");
            if (!positions.includes(courseWare.id)) {
                dispatch(action.addPosition(courseWare.id))
            }
            console.log("check after rv", positions);

            return;
        }
        window.alert("Khóa học cần học tuần tự");

    }
    const checkActive = () => {
        if (positions.includes(courseWare.id)) {
            setActive("active-course-ware");
        }
    }
    useEffect(() => {
        checkActive();
        checkStatus();
    }, [positions])
    const updateProgress = () => {
        get("/api/course-ware-process/" + courseWare.id + "/" + chapter.id).then((res) => {
            let { data } = res;
        }).catch((e) => {
            console.log(e.data);
        })
    }
    return (
        <div title={courseWare.name} style={{ background: "aliceblue" }} onClick={() => setCourseWare()} className={active + " col-md-12 alert "} >{courseWare.name}</div>
    )
}

export default CourseWareItem
