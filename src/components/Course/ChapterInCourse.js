import React, { Fragment, useState, useEffect } from 'react'
import ChapterItem from './ChapterItem';
import Alert from '../common/Alert';
function ChapterInCourse(props) {
    const [data, setData] = useState();
    const showChapter = () => {
        let result = <Alert message="Chưa có chương mục" style="alert-warning"></Alert>;
        if (!data) {
            return result;
        }
        if (!data.chapters) {
            return result;
        }
        if (data.chapters.length === 0) {
            return result;
        }
        return data.chapters.map((item, i) => {
            return <ChapterItem key={i} item={item} id={item.id}></ChapterItem>
        })


    }
    useEffect(() => {
        setData(props.data)
    }, [props])
    return (
        <Fragment>
            <div className="mt-3">
                {showChapter()}
            </div>

        </Fragment>
    )
}

export default ChapterInCourse;
