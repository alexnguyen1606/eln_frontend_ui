import React, { Component, Fragment } from 'react';
import ItemCourse from './ItemCourse';
import { withRouter } from 'react-router-dom'
import HomeBreadCrumb from '../common/HomeBreadCrumb';
import { create } from './../../apis/RootApi'
import Category from './Category';

class CourseCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listCourse: [],
            categoryId: this.props.match.params.id,
            dataSearch: {
                categoryId: this.props.match.params.id
            }
        }
    }
    componentDidUpdate(prevProps, prevState) {
        let { match } = this.props;
        if (match.params.id !== prevProps.match.params.id) {
            this.setState({
                dataSearch: { categoryId: match.params.id }
            })

            this.loadData();
        }
    }
    componentDidMount() {
        this.loadData();
    }
    loadData = () => {
        create("/api/course/course-category", this.state.dataSearch).then((res) => {
            let data = res.data.data;
            this.setState({ listCourse: data });
        })
            .catch((error) => {
                console.log("error", error);
            });
    }

    showCourse = () => {
        let result = null
        if (this.state.listCourse.length != 0) {
            return this.state.listCourse.map((item, i) => {
                return <ItemCourse course={item} key={i}></ItemCourse>
            })
        }
        return <p>Không có khóa học</p>

    }
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
                            {this.showCourse()}
                        </div>
                        <Category></Category>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default withRouter(CourseCategory);