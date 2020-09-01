import React, { Component, useState, Fragment, useEffect } from 'react';
import ItemCourse from './ItemCourse';
import { withRouter, useHistory } from 'react-router-dom'
import HomeBreadCrumb from '../common/HomeBreadCrumb';
import { create } from './../../apis/RootApi'
import Category from './Category';
import Search from '../common/Search';

import Paging from '../common/Paging';
import CategoryBreadCrumb from './CategoryBreadCrumb'

function CourseCategory(props) {

    const [listCourse, setListCourse] = useState([])
    const [totalPage, setTotalPage] = useState(1)
    const categoryId = props.match.params.id
    const { slug } = props.match.params;
    const [currentPage, setCurrentPage] = useState(1)
    const [dataSearch, setDataSearch] = useState({
        categoryId: categoryId
    })
    let history = useHistory();
    const submitSearch = () => {
        loadData();
    }
    const changeDataSearch = (value) => {
        setDataSearch({
            name: value,
            categoryId: categoryId
        })
    }


    useEffect(() => {
        setDataSearch({
            categoryId: categoryId
        })
        loadData();
    }, [categoryId])
    useEffect(() => {
        loadData();
    }, [currentPage])

    const loadData = () => {
        create("/api/course/course-category?page=" + currentPage, dataSearch).then((res) => {
            let { data } = res.data;
            let { currentPage } = res.data;
            let { totalPage } = res.data;
            setTotalPage(totalPage)
            setCurrentPage(currentPage)
            setListCourse(data)
        })
            .catch((error) => {
                console.log("error", error);
            });
    }

    const showCourse = () => {
        let result = null
        if (listCourse.length != 0) {
            return listCourse.map((item, i) => {
                return <ItemCourse course={item} key={i}></ItemCourse>
            })
        }
        return <p>Không có khóa học</p>


    }
    const handlePageClick = (e) => {
        let page = e.selected + 1;
        // history.push("/course/category/" + slug + "." + categoryId + ".html");
        setCurrentPage(page)
    }

    return (
        <Fragment>

            <CategoryBreadCrumb name="Danh mục khóa học"></CategoryBreadCrumb>
            {/* <HomeBreadCrumb exact={false} to="/course/1" label="Khóa học"></HomeBreadCrumb> */}
            <div className="container mt-4 ">
                <div className="row">
                    <Search changeDataSearch={(value) => changeDataSearch(value)} submitSearch={() => submitSearch()} ></Search>
                    <div className="col-md-9 col-sm-12  row">
                        {showCourse()}
                        <Paging activePage={currentPage - 1} totalPage={totalPage} handlePageClick={handlePageClick}></Paging>
                    </div>
                    <Category></Category>
                </div>
            </div>
        </Fragment>
    );

}

export default withRouter(CourseCategory);