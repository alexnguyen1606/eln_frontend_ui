import React, { useState, useEffect } from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './../../../actions/Action';
import * as action from './../../../actions/Action';
import { get } from './../../../apis/RootApi';
import Chapters from './Chapters';
import Documents from './Documents';
function TabLearning(props) {
    const dispatch = useDispatch();
    const { courseId } = props;
    console.log("check courseId", courseId);
    const [size, setSize] = useState(window.innerWidth);
    const changeStatus = () => {
        props.changeStatus();
    }
    const { course } = props;

    const setCol = () => {
        if (size >= 576) {
            return "col-3";
        }
        return "col-md-3"
    }


    const getListCourseWareSeen = () => {
        if (courseId) {
            get("/api/course-ware-process/course/" + courseId).then((res) => {
                let { data } = res.data;
                dispatch(action.setPosition(data))


            }).catch((res) => {
                console.log("error call api");
            })
        }

    }
    const getCourseIds = () => {
        if (courseId) {
            get("/api/chapter-course-ware/course/" + courseId).then((res) => {
                let { data } = res.data;
                console.log("ids recive", data);
                dispatch(action.setCourseWareIds(data))
            }).catch((res) => {
                console.log("error call api", res);
            })
        }

    }
    useEffect(() => {
        getListCourseWareSeen();
        getCourseIds();
    }, [])
    const showTab = () => {
        if (props.status) {
            return (
                <div className={"tab-learning " + setCol()} id="tab" >
                    <ul className=" col-md-12  tab nav navbar navbar-expand-lg navbar-light bg-light tab panel-heading mb-1" style={{ height: "3em" }}>
                        <li className="nav-item ">
                            <a className="nav-link active" data-toggle="tab" aria-expanded="true" aria-selected="true" href="#tab1">
                                <i className="fa fa-book"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#tab2" data-toggle="tab" aria-expanded="false" >
                                <i className="fa fa-paperclip"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#tab3" data-toggle="tab" aria-expanded="false">
                                <i className="fa fa-star-o"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#tab4" data-toggle="tab" aria-expanded="false"><i className="fa fa-comments-o"></i></a>
                        </li>
                        <li className="nav-item clear">
                            <a className="nav-link" onClick={() => changeStatus()} ><i className="fa fa-times"></i></a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="tab1" className="tab-pane fade show active">
                            <Chapters course={course} courseId={course.id} ></Chapters>
                        </div>
                        <div id="tab2" className="tab-pane fade">
                            <Documents course={course}></Documents>
                        </div>
                        <div id="tab3" className="tab-pane fade">

                        </div>
                        <div id="tab4" className="tab-pane fade">

                        </div>

                    </div>

                </div >
            )
        }
        return ""
    }
    return (
        showTab()

    )
}


export default TabLearning;
