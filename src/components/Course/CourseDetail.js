import React, { Component, Fragment } from 'react';
import { withRouter, Link, NavLink, Redirect } from 'react-router-dom';
import './../../css/CourseDetail.css'
import CourseBreadCrumb from './../Course/CourseBreadCrumb';
import { findById, get } from './../../apis/RootApi';
import { API_URL } from './../../constants/Config';
import { Tabs, Tab } from 'react-bootstrap'
import RegisterModal from './RegisterModal';
import toSlug from './../../utils/ToSlug'

class CourseDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            data: {},
            config: {},
            image: "",
            register: "Không giới hạn thời gian đăng ký",
        }
    }
    totalUserInCourse = () => {
        let totalUser = 0;
        get("/api/v2/course/total?courseId=" + this.state.id).then((res) => {
            totalUser = res.data.data;
        }).catch((error) => {
            console.log(error.data);
        })
        return totalUser;
    }
    componentDidMount() {
        findById("/api/admin/course/" + this.state.id).then((res) => {
            let data = res.data.data;
            console.log(data);
            this.setState({
                data: data,
                config: data.courseConfig,
            });
            if (data.courseConfig.freedomRegister === 1) {
                this.setState({
                    register: this.state.config.registerStart + " / " + this.state.config.registerEnd
                })
            }
        }).catch((error) => {
            console.log(error);
        })
    }
    checkRegister = () => {
        if (window.confirm("Xác nhận vào học")) {
            let id = this.state.id;
            let url = "/course/learning/" + id;
            window.location.href = url;
        }
    }
    showRegister = () => {
        if (this.state.config.freedomRegister === 1) {
            return <a className="btn btn-primary text-center btn-lg mt-3" data-toggle="modal" data-target="#registerModal">Đăng ký học<i className="fa fa-sign-in ml-2"></i></a>
        } else {
            let url = "/course/learning/" + this.state.id;
            return <a onClick={() => this.checkRegister()} className="btn btn-primary text-center btn-lg mt-3">Vào học <i className="fa fa-sign-in ml-2"></i></a>
        }
    }
    render() {
        return (
            <Fragment>
                <CourseBreadCrumb to="/course/detail" label="Chi tiết khóa học"></CourseBreadCrumb>
                <div className="container">
                    <div className="row">

                        <div className="col-md-8 mt-2">

                            <div className="col-md-12 w-100">
                                <h3>{this.state.data.name}</h3>
                                <div className="breadcrumb mt-5">
                                    <div className="col-md-4 col-xs-12 info-item">
                                        <p className="info-title">Người tạo:</p>
                                        <p>{this.state.data.createdBy}</p>
                                    </div>
                                    <div className="col-md-4 col-xs-12 info-item">
                                        <p className="info-title">Đánh giá:</p>
                                        <p>4/5</p>
                                    </div>
                                    <div className="col-md-4 col-xs-12  ">
                                        <p className="info-title">Danh mục:</p><p>{this.state.data.categoryName}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <img className="w-100" src={API_URL + this.state.data.avatar} alt="Card image cap"></img>
                            </div>
                            <div className="col-md-12">
                                <Tabs defaultActiveKey="description" transition={false} id="noanim-tab-example">
                                    <Tab eventKey="description" title="Mô tả" >
                                        <div className="col-md-12"> {this.state.data.description}</div>
                                    </Tab>
                                    <Tab eventKey="outline " title="Đề tương">

                                    </Tab>
                                    <Tab eventKey="document" title="Tài Liệu" >

                                    </Tab>

                                    <Tab eventKey="rate" title="Đánh giá" >

                                    </Tab>
                                </Tabs>
                            </div>
                            <div className="col-md-12 text-center">
                                {this.showRegister()}
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
                                        <p className="ml-4">{this.state.register}</p>
                                    </div>
                                    <div>
                                        <small className="course-price"><i className="fa fa-clock-o icon"></i>Thời gian bắt đầu học</small>
                                        <br />
                                        <p className="ml-4">{this.state.config.startLearning} / {this.state.config.endLearning}</p>
                                    </div>

                                    <div><small className="course-price"><i className="fa fa-sign-in icon"></i>Đăng ký học</small>: Yêu cầu đăng ký<p></p></div>
                                    <div><small className="course-price"><i className="fa fa-users icon"></i>Số học viên</small>: {this.totalUserInCourse()}</div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <RegisterModal courseId={this.state.id}></RegisterModal>

            </Fragment >
        );
    }
}

export default withRouter(CourseDetail);