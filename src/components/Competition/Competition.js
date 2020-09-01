import React, { Fragment, useState, useEffect } from 'react';
import ItemCompetition from './round-test/ItemCompetition';
import HomeBreadCrumb from '../common/HomeBreadCrumb';
import PreHeader from '../PreHeader';
import { get, post } from './../../apis/RootApi'
import Category from './Category';
import Search from '../common/Search';
import Paging from '../common/Paging';
import Alert from '../common/Alert';
import { withRouter } from 'react-router-dom'
function Competition(props) {
    const [dataSearch, setDataSearch] = useState({})
    const [competitions, setCompetitions] = useState([])
    const [totalPage, setTotalPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(props.match.params.page)
    const changeDataSearch = (value) => {
        setDataSearch({
            searchValue: value
        })
    }
    const submitSearch = () => {

        getData();
    }
    const getData = () => {
        post("/api/v2/competition/list/all?size=6&page=" + currentPage, dataSearch).then((res) => {
            let { data } = res.data;
            let { totalPage } = res.data;
            setTotalPage(totalPage);
            if (data) {
                setCompetitions(data)
            }
        })
    }
    const showData = () => {
        if (competitions.length > 0) {
            return competitions.map((item, i) => {
                return <ItemCompetition key={i} competition={item}></ItemCompetition>
            })
        }
        return <Alert message="Không tìm thấy khóa học" style="alert-warning"></Alert>
    }
    const handlePageClick = (e) => {
        setCurrentPage(e.selected + 1)
    }
    useEffect(() => {
        getData();
    }, [currentPage])
    return (
        <Fragment>

            <HomeBreadCrumb to="/competition" label="Cuộc thi"></HomeBreadCrumb>
            <div className="container mt-5">
                <div className="row">
                    <Search changeDataSearch={(value) => changeDataSearch(value)} submitSearch={() => submitSearch()}></Search>
                    <div className="col-md-9 col-sm-12 row">
                        {showData()}
                        <Paging totalPage={totalPage} activePage={currentPage - 1} handlePageClick={handlePageClick}></Paging>
                    </div>
                    <Category></Category>

                </div>

            </div>
        </Fragment>
    );
}


export default withRouter(Competition);