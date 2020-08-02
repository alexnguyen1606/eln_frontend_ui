import React, { Component, Fragment } from 'react';
import ItemCourse from './ItemCourse';
import { NavLink, Link } from 'react-router-dom'
import HomeBreadCrumb from '../common/HomeBreadCrumb';
class Course extends Component {
    render() {
        return (
            <Fragment>
                <HomeBreadCrumb to="/course" label="Khóa học"></HomeBreadCrumb>
                <div className="container mt-4 ">
                    <div className="row">
                        <div className="w-100 col-md-9 pt-4 pb-4 breadcrumb">
                            <form className="form-group col-md-12 d-flex">
                                <input type="email" class="form-control col-md-8" name="" id="" aria-describedby="emailHelpId" placeholder="Tên khóa học" />
                                <button type="button" class="form-control col-md-3 btn btn-success ml-auto">Tìm kiếm</button>
                            </form>

                        </div>
                        <div className="col-md-9 col-sm-12  row">
                            <ItemCourse></ItemCourse>
                            <ItemCourse></ItemCourse>
                            <ItemCourse></ItemCourse>
                            <ItemCourse></ItemCourse>
                        </div>
                        <div className="col-md-3">
                            <h3>Danh mục</h3>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Cras justo odio</li>
                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Morbi leo risus</li>
                                <li class="list-group-item">Porta ac consectetur ac</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>


                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Course;