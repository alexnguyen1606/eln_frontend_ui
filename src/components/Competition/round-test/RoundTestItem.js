import React, { Fragment } from 'react'
import RegisterCompetition from './RegisterCompetition';

function RoundTestItem(props) {
    const { roundTest } = props;
    console.log(roundTest);
    const showTime = () => {
        if (roundTest.timeStart === null || roundTest.timeEnd === null) {
            return "Không giới hạn thời gian";
        }
        return new Date(roundTest.timeEnd)
    }
    return (
        <Fragment>
            <div class="card text-left col-md-3 pr-0 pl-0">
                <div className="card-header">
                    <div>{roundTest.nameRound}</div>
                </div>
                <div class="card-body mt-5 mb-5">
                    <p className="card-text"><i className="fa fa-clock-o fa-2x icon"></i>Thời gian làm bài : {roundTest.timeRound / 3600} phút</p>
                    <p className="card-text"><i className="fa fa-calendar-o fa-2x icon"></i>Thời gian bắt đầu : {showTime()} </p>
                </div>
                <RegisterCompetition roundTest={roundTest}></RegisterCompetition>
            </div>
        </Fragment>
    )
}

export default RoundTestItem
