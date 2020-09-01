import React, { Component, Fragment, useEffect, useState } from 'react';
import ItemCourse from './ItemCourse';
import { withRouter, useHistory } from 'react-router-dom';
import HomeBreadCrumb from '../common/HomeBreadCrumb';
import { create } from './../../apis/RootApi'
import Category from './Category';
import Search from '../common/Search';
import Alert from './../common/Alert'
import Paging from '../common/Paging';


function Course(props) {
    const [listCourse, setListCourse] = useState([]);
    const [pageCount, setPageCount] = useState(0)
    const [dataSearch, setDataSearch] = useState({})
    const [activePage, setActivePage] = useState(props.match.params.page);
    let history = useHistory();
    useEffect(() => {
        loadData();
    }, [activePage])

    const submitSearch = () => {
        setActivePage(1)
        loadData();
    }

    const changeDataSearch = (value) => {
        setDataSearch({ name: value })
    }
    const loadData = () => {
        create("/api/course?page=" + activePage, dataSearch).then((res) => {
            let { data } = res.data;
            let { totalPage } = res.data;
            let { currentPage } = res.data
            setListCourse(data);
            setActivePage(currentPage);
            setPageCount(totalPage);
        })
            .catch((error) => {
                console.log("error", error);
            });
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
        history.push("/course/" + active)
    }
    return (
        <Fragment>
            <HomeBreadCrumb exact={true} to="/course/1" label="Khóa học"></HomeBreadCrumb>
            <div className="container mt-4 ">
                <div className="row">
                    <Search changeDataSearch={(value) => changeDataSearch(value)} submitSearch={() => submitSearch()} ></Search>
                    <div className="col-md-9 col-sm-12 row ">

                        {showCourse()}

                        <Paging activePage={activePage - 1} totalPage={pageCount} handlePageClick={handlePageClick}></Paging>
                    </div>
                    <Category></Category>

                </div>
            </div>
        </Fragment>
    );

}

export default withRouter(Course);