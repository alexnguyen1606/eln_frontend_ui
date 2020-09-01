import React, { Fragment, useState, useEffect } from 'react'
import Alert from './../common/Alert';
import { findById } from './../../apis/RootApi'
function DocumentInCourse(props) {
    const { courseId } = props;
    const [documents, setDocuments] = useState([]);
    const getDocumentByCourseId = () => {
        findById("/api/course/" + courseId + "/document").then((res) => {
            setDocuments(res.data.data);
        })
    }
    useEffect(() => {
        getDocumentByCourseId();
    }, [courseId])
    const showDocument = () => {
        // getDocumentByCourseId();
        if (documents.length === 0) {
            return <Alert message="Chưa có tài liệu" style="alert-warning"></Alert>
        }
        return documents.map((item, i) => {
            return <li className="list-group-item" key={i}>{item.name}</li>
        })
    }
    return (
        <Fragment>
            <div className="mt-3">
                <ul className="list-group list-group-flush">
                    {showDocument()}
                </ul>
            </div>
        </Fragment>
    )
}

export default DocumentInCourse
