import React, { Component, Fragment } from 'react';
import './../../css/CourseDetail.css'
import CourseBreadCrumb from './../Course/CourseBreadCrumb';
class CourseDetail extends Component {
    render() {
        return (
            <Fragment>
                <CourseBreadCrumb to="/course/detail" label="Chi tiết khóa học"></CourseBreadCrumb>
                <div className="container">
                    <div className="row">

                        <div className="col-md-8 mt-2">

                            <div className="col-md-12 w-100">
                                <h3>Chi tiết khóa học (Tên)</h3>
                                <div className="breadcrumb mt-5">
                                    <div className="col-md-4 col-xs-12 info-item">
                                        <p className="info-title">Người tạo:</p>
                                        <p>admin</p>
                                    </div>
                                    <div className="col-md-4 col-xs-12 info-item">
                                        <p className="info-title">Đánh giá:</p>
                                        <p>4/5</p>
                                    </div>
                                    <div className="col-md-4 col-xs-12  ">
                                        <p className="info-title">Danh mục:</p><p>Danh mục</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <img className="w-100" src="http://elearning-uat.vnpost.vn/e-learning/upload/images/3abf9b6d-c5dd-4df9-a858-70a477a16761image%2027.png" alt="Card image cap"></img>
                            </div>
                            <div className="col-md-12 text-center">
                                <a className="btn btn-primary text-center btn-lg mt-3">Vào học<i className="fa fa-sign-in ml-2"></i></a>
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
                                        <p className="ml-4">Thời gian bắt đầu học</p>
                                    </div>
                                    <div>
                                        <small className="course-price"><i className="fa fa-clock-o icon"></i>Thời gian bắt đầu học</small>
                                        <br />
                                        <p className="ml-4">Thời gian đăng ký</p>
                                    </div>

                                    <div><small className="course-price"><i className="fa fa-sign-in icon"></i>Đăng ký học</small>: Yêu cầu đăng ký<p></p></div>
                                    <div><small className="course-price"><i className="fa fa-users icon"></i>Số học viên</small>: 0</div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </Fragment >
        );
    }
}

export default CourseDetail;