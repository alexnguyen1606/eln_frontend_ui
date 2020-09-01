import React, { Fragment, useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import * as action from './../../../actions/Action';
import { get } from './../../../apis/RootApi'
import CourseWareItem from './CourseWareItem';
function Chapter(props) {
    const dispatch = useDispatch();
    const { chapter } = props;
    const courseId = props.courseId;
    const { course } = props
    const positions = useSelector(state => state.courseWare.positions);

    const [percent, setPercent] = useState(0);
    const [call, setCall] = useState(0)
    const getListCourseWareSeen = () => {

        get("/api/course-ware-process/course/" + courseId).then((res) => {
            let { data } = res.data;
            dispatch(action.setPosition(data))

        })
    }
    const setPosition = (position) => {
        dispatch(action.addPosition(position))
    }
    const computePercent = () => {
        let total = chapter.chapterCourseWares.length;
        let count = 0;
        chapter.chapterCourseWares.map((item, i) => {
            let courseWare = item.courseWare;
            if (positions.includes(courseWare.id)) {
                count++;
            }
        })
        if (total !== 0) {
            let per = Math.round((count / total) * 100)
            console.log("before", per);
            setPercent(per);
            console.log("after", per);

        }
    }

    useEffect(() => {
        computePercent()

    }, [positions])
    const showCourseWare = () => {
        chapter.chapterCourseWares.sort((a, b) => {
            return a.position - b.position;
        })
        return chapter.chapterCourseWares.map((item, i) => {
            let courseWare = item.courseWare;
            return <CourseWareItem course={course} courseId={courseId} chapter={chapter} courseWare={courseWare} key={i}></CourseWareItem>
        })
    }
    return (
        <Fragment>

            <div className="col-md-12  mt-1  panel-heading" style={{ height: "4em" }}  >
                <div className="col-md-12 row ">
                    <div className="mt-3 " data-toggle="collapse" href={"#collapse_" + chapter.id} aria-expanded="true">
                        <span  >{chapter.name}</span>
                    </div>

                    <div className="ml-auto mt-1">
                        <div className={"c100 center ml-auto " + "p" + percent} style={{ fontSize: "50px" }}>
                            <span>{percent}%</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            {/* <a className=" col-md-12 mt-1  panel-heading" data-toggle="collapse" href={"#collapse_" + chapter.id} aria-expanded="true"></a> */}

            <div className="collapse mt-1 pl-0 pr-0  col-md-12" id={"collapse_" + chapter.id}>
                {showCourseWare()}
            </div>
        </Fragment >

    )
}

export default Chapter
