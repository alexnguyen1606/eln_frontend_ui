import React, { Fragment, useState, useEffect } from 'react'
import Search from '../../common/Search';
import * as SystemConstant from './../../../constants/SystemConstant';
import { get, post } from './../../../apis/RootApi';
import { withRouter, useHistory } from 'react-router-dom';
import Alert from '../../common/Alert';
import ItemCourse from '../ItemCourse';
import Paging from '../../common/Paging';
import HomeBreadCrumb from '../../common/HomeBreadCrumb';
import CourseBreadCrumb from '../CourseBreadCrumb';


function MyCourse(props) {
    const history = useHistory()
    const [dataSearch, setDataSearch] = useState({ typeMyCourse: SystemConstant.MY_COURSE_ALL });
    const [activePage, setActivePage] = useState(props.match.params.page);
    const [listCourse, setListCourse] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [typeMyCourse, setTypeMyCourse] = useState(SystemConstant.MY_COURSE_ALL)

    const [call, setCall] = useState(0)
    const changeDataSearch = (value) => {

        setDataSearch({ ...dataSearch, name: value })
    }
    const submitSearch = () => {
        setActivePage(1);
        setCall(call + 1);
    }
    useEffect(() => {
        getMyCourse();
    }, [call, activePage])
    const getMyCourse = () => {

        post("/api/v2/course/my-course?page=" + activePage, dataSearch).then((res) => {
            let { data } = res.data;
            let { totalPage } = res.data;
            let { currentPage } = res.data
            setListCourse(data);
            setActivePage(currentPage);
            setPageCount(totalPage);
        }).catch((error) => {
            console.log(error);
        })
    }
    const showCourse = () => {
        if (listCourse.length != 0) {
            return listCourse.map((item, i) => {
                return <ItemCourse course={item} key={i}></ItemCourse>
            })
        }
        return <Alert message="Không tìm thấy khóa học" style="alert-warning"></Alert>

    }
    const handlePageClick = (e) => {
        setActivePage(e.selected + 1)
        let active = e.selected + 1;
        history.push("/course/my-course/" + active)
    }
    const changeTypeMyCourse = (type) => {
        setTypeMyCourse(type);
        setActivePage(1)
        setDataSearch({ ...dataSearch, typeMyCourse: type })
        setCall(call + 1);

    }


    return (
        <Fragment>

            <CourseBreadCrumb to="/course/my-course/1" label="Khóa học của tôi"></CourseBreadCrumb>
            <div className="container mt-4 ">
                <div className="row">

                    <Search changeDataSearch={(value) => changeDataSearch(value)} submitSearch={() => submitSearch()}></Search>
                    <div className="col-md-9 col-sm-12  row">
                        {showCourse()}
                        <Paging activePage={activePage - 1} totalPage={pageCount} handlePageClick={handlePageClick}></Paging>
                    </div>

                    <div className="col-md-3">
                        <h3 ><span className="ml-3" >Danh mục</span></h3>
                        <ul class="list-group list-group-flush">
                            <a exact onClick={() => changeTypeMyCourse(SystemConstant.MY_COURSE_ALL)} className="list-group-item "><span style={typeMyCourse === SystemConstant.MY_COURSE_ALL ? active : {}}>Tất cả khóa học</span></a>
                            <a exact onClick={() => changeTypeMyCourse(SystemConstant.MY_COURSE_WAS_JOIN)} className={"list-group-item "}><span style={typeMyCourse === SystemConstant.MY_COURSE_WAS_JOIN ? active : {}}>Khóa học đã tham gia</span></a>
                            <a exact onClick={() => changeTypeMyCourse(SystemConstant.MY_COURSE_NOT_JOIN)} className="list-group-item "><span style={typeMyCourse === SystemConstant.MY_COURSE_NOT_JOIN ? active : {}}>Khóa học chưa học</span></a>
                            <a exact onClick={() => changeTypeMyCourse(SystemConstant.MY_COURSE_WAIT_ACCEPT)} className="list-group-item "><span style={typeMyCourse === SystemConstant.MY_COURSE_WAIT_ACCEPT ? active : {}}>Khóa học chờ duyệt</span></a>
                            {/* <a exact onClick={() => changeTypeMyCourse(SystemConstant.MY_COURSE_ALL)} className="list-group-item "><span style={typeMyCourse === SystemConstant.MY_COURSE_ALL ? active : {}}>Tất cả khóa học</span></a> */}
                        </ul>
                        {/* <div>
                            <a onClick={() => changeTypeMyCourse(SystemConstant.MY_COURSE_ALL)} className="form-control col-md-12 btn btn-success ml-auto">Tất cả khóa học</a>
                        </div> */}

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
const active = {

    color: 'rgb(252, 176, 25) '
}
export default withRouter(MyCourse)
