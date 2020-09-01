import React, { Fragment, useState, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import './../../css/CourseDetail.css'
import CourseBreadCrumb from './../Course/CourseBreadCrumb';
import { findById, get } from './../../apis/RootApi';
import { API_URL } from './../../constants/Config';
import { Tabs, Tab } from 'react-bootstrap';
import RegisterModal from './RegisterModal';
import DocumentInCourse from './DocumentInCourse'

import ChapterInCourse from './ChapterInCourse';
import handleDate from './../../utils/HandleDate'


function CourseDetail(props) {


    let id = props.match.params.id;
    const [data, setData] = useState({});
    const [config, setConfig] = useState({});
    const [image, setImage] = useState("");
    const [register, setRegister] = useState("Không giới hạn thời gian đăng ký")
    const [totalUser, setTotalUser] = useState(0);
    const [rate, setRate] = useState("Chưa có đánh giá");
    const [startLearning, setStartLearning] = useState("")
    const [endLearning, setEndLearning] = useState("")
    const [registerEnd, setRegisterEnd] = useState("")
    const [registerStart, setRegisterStart] = useState("")
    const [outline, setOutline] = useState({})
    let history = useHistory();

    const totalUserInCourse = async () => {
        await get("/api/v2/course/total/" + id).then((response) => {
            return response.data.data;
        });

    }
    const getRate = () => {
        get("/api/v2/course/rating/" + id).then((res) => {
            if (res.data.data > 0) {
                setRate(res.data.data.toFixed(1) + "/5");
            }

        })
    }
    const getTotalUser = () => {
        get("/api/v2/course/total/" + id).then((response) => {
            setTotalUser(response.data.data)
        });
    }

    useEffect(() => {
        findById("/api/course/" + id).then((res) => {
            let dataApi = res.data.data;
            console.log(dataApi);
            setData(dataApi);
            setConfig(dataApi.courseConfig);
            setStartLearning(handleDate(dataApi.courseConfig.startLearning));
            setEndLearning(handleDate(dataApi.courseConfig.endLearning));
            setOutline(dataApi.outline)

            if (dataApi.courseConfig.freedomRegister === 1) {
                setRegister(handleDate(config.registerStart) + " / " + handleDate(config.registerEnd))
            }
        }).catch((error) => {
            console.log(error);
        });

        getTotalUser();
        getRate();
    }, [])



    return (
        <Fragment>

            <CourseBreadCrumb to="/course/detail" label="Chi tiết khóa học"></CourseBreadCrumb>
            <div className="container">
                <div className="row">

                    <div className="col-md-8 mt-2">

                        <div className="col-md-12 w-100">
                            <h3>{data.name}</h3>
                            <div className="breadcrumb mt-5">
                                <div className="col-md-4 col-xs-12 info-item">
                                    <p className="info-title">Người tạo:</p>
                                    <p>{data.createdBy}</p>
                                </div>
                                <div className="col-md-4 col-xs-12 info-item">
                                    <p className="info-title">Đánh giá:</p>
                                    <p>{rate}</p>
                                </div>
                                <div className="col-md-4 col-xs-12  ">
                                    <p className="info-title">Danh mục:</p><p>{data.categoryName}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <img className="w-100" src={API_URL + data.avatar} alt="Card image cap"></img>
                        </div>
                        <div className="col-md-12 tab">
                            <Tabs defaultActiveKey="description" transition={false} id="noanim-tab-example">
                                <Tab eventKey="description" title="Mô tả">
                                    <div className="col-md-12"> {data.description}</div>
                                </Tab>
                                <Tab eventKey="outline " title="Đề tương">
                                    <ChapterInCourse data={outline} ></ChapterInCourse>
                                </Tab>
                                <Tab eventKey="document" title="Tài Liệu" >
                                    <DocumentInCourse courseId={id}></DocumentInCourse>
                                </Tab>

                                <Tab eventKey="rate" title="Đánh giá" >

                                </Tab>
                            </Tabs>
                        </div>
                        <div className="col-md-12 text-center">
                            <RegisterModal courseId={id} config={config} ></RegisterModal>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5 ">
                        <div className="col-md-12 ">
                            <h4 className="mb-4">Thông tin khóa học</h4>
                            <div className="detail-info">
                                <h5 className="course-price">Miễn phí</h5>
                                <div>
                                    <small className="course-price"><i className="fa fa-calendar icon"></i>Thời gian đăng ký khóa học</small>
                                    <br />
                                    <p className="ml-4">{register}</p>
                                </div>
                                <div>
                                    <small className="course-price"><i className="fa fa-clock-o icon"></i>Thời gian bắt đầu học</small>
                                    <br />
                                    <p className="ml-4">{startLearning} / {endLearning}</p>
                                </div>

                                <div><small className="course-price"><i className="fa fa-sign-in icon"></i>Đăng ký học</small>: Yêu cầu đăng ký<p></p></div>
                                <div><small className="course-price"><i className="fa fa-users icon"></i>Số học viên</small>: {totalUser}</div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>


        </Fragment >
    );

}

export default withRouter(CourseDetail);