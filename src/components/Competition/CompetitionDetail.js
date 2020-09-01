import React, { useEffect, Fragment } from 'react';
import CompetitionBreadCrumb from './CompetitionBreadCrumb';
import PreHeader from '../PreHeader';
import { withRouter } from 'react-router-dom';
import { findById } from './../../apis/RootApi'
import HomeBreadCrumb from '../common/HomeBreadCrumb';
import { useState } from 'react';
import RoundTestItem from './round-test/RoundTestItem';
import Alert from '../common/Alert';
function CompetitionDetail(props) {
    let { id } = props.match.params;
    const [competition, setCompetition] = useState({});
    const [roundTests, setRoundTests] = useState([]);
    const getCompetition = () => {
        findById("/api/competition/" + id).then((res) => {
            let { data } = res.data;
            setCompetition(data);

        })
    }
    const getRoundTests = () => {
        findById("/api/competition/" + id + "/roundTest/list").then((res) => {
            let { data } = res.data;
            setRoundTests(data);
        })
    }
    useEffect(() => {
        getCompetition();
        getRoundTests()
    }, [id])
    const showRoundTest = () => {
        if (roundTests.length > 0) {
            console.log(roundTests);
            return roundTests.map((item, i) => {
                return <RoundTestItem roundTest={item} key={i}></RoundTestItem>
            })
        }
        return <Alert message="Chưa có vòng thi" style="alert-warning text-center"></Alert>;
    }
    return (
        <Fragment>

            <div>
                <HomeBreadCrumb to="/competition" label="Cuộc thi"></HomeBreadCrumb>
                <div className="col-md-12 text-center bg-competition-label">
                    <h4 className="pt-3"> {competition.nameCompetition}</h4>
                </div>
                <div className="col-md-12 breadcrumb">
                    {showRoundTest()}
                </div>
            </div>
        </Fragment>

    );

}

export default withRouter(CompetitionDetail);