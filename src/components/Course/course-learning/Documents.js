import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Alert from '../../common/Alert';
import { get } from './../../../apis/RootApi'
import * as action from './../../../actions/Action';
import DocumentItem from './DocumentItem';
function Documents(props) {
    let { course } = props;
    const [document, setDocument] = useState([]);
    const dispatch = useDispatch();
    const getDocument = () => {
        get("/api/course/" + course.id + "/document").then((res, i) => {
            let { data } = res.data
            setDocument(data);
        })
    }
    useEffect(() => {
        getDocument();
    }, [course]);
    const showDetail = (item) => {
        dispatch(action.setDocumentDetail(item))
    }
    const showDocument = () => {
        let alert = <Alert message="Chưa có tài liệu" style="alert-warning"></Alert>
        if (document.length === 0) {
            return alert;
        }
        return document.map((item, i) => {
            return <DocumentItem document={item} key={i}></DocumentItem>
        })
    }
    return (
        <div className="col-md-12 row">
            <ul className="col-md-12 ">
                {showDocument()}
            </ul>

        </div>
    )
}

export default Documents
