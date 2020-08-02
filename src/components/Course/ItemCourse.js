import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
class ItemCourse extends Component {
    redirect = () => {
        // <Redirect to="/course/detail/3"></Redirect>
    }
    render() {
        return (

            <div className="col-md-4 mt-3">
                <Link to="/course/detail/3" className="item">
                    <div className="card  ">
                        <img className="card-img-top" src="http://elearning-uat.vnpost.vn/e-learning/upload/images/3abf9b6d-c5dd-4df9-a858-70a477a16761image%2027.png" alt="Card image cap"></img>
                        <div className="card-body">
                            <h4 className="card-title">Title</h4>
                            <div >
                                <h6 className="text-muted">Admin</h6>
                                <small>Đơn vị</small>
                            </div>

                        </div>
                        <div className="card-footer">
                            <p className="course-price"><i className="fa fa-book icon "></i>Số chương mục</p>
                            <div className="course-price mr-auto">
                                Miễn phí
                            </div>
                        </div>
                    </div>
                </Link>

            </div>

        );
    }
}

export default ItemCourse;