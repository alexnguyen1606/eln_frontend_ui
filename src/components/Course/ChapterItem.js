import React, { Fragment, useState } from 'react'
import Alert from '../common/Alert';

function ChapterItem(props) {
    const { item } = props;

    const showCourseWare = () => {
        if (item.chapterCourseWares.length > 0) {
            return item.chapterCourseWares.map((item, i) => {
                return <div className="col-md-12 alert alert-warning" key={i}>{item.courseWare.name}</div>;
            })
        }
        return <Alert message="Chưa có học liệu" style="alert-warning"></Alert>;
    }
    return (
        <Fragment>
            <div className="mt-1 panel-heading" data-toggle="collapse" data-target={"#collapseExample" + item.id} aria-expanded="false" aria-controls="collapseExample">
                <a className="" >{item.name} </a>
            </div>
            <div className="collapse mt-1  col-md-12" id={"collapseExample" + item.id}>
                {showCourseWare()}
            </div>
        </Fragment>
    )
}

export default ChapterItem
