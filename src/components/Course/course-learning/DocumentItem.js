import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import * as action from './../../../actions/Action';
import { NavLink } from 'react-bootstrap';
function DocumentItem(props) {
    const dispatch = useDispatch();
    const [active, setActive] = useState("")
    const showDetail = (item) => {
        setActive("active")
        dispatch(action.setDocumentDetail(item))
    }

    let { document } = props;
    let path = "http://elearning-uat.vnpost.vn" + document.linkFile;
    const download = () => {
        window.location.href = path;
    }
    const checkDownload = () => {
        if (document.allowedDownload === 0) {
            return "";
        }
        return <NavLink title="Tải xuống" onClick={() => download()} className="ml-2 fa fa-download"></NavLink>
    }

    return (
        <li>
            <div className="mt-1 mb-1 ml-1 row" style={{ borderBottom: "solid 1px #e5e5e5", height: "50px" }}>
                <span title={document.name} className={active} onClick={() => showDetail(document)} style={{ color: "black" }}>{document.name}</span>
                {checkDownload()}
            </div>
        </li>
    )
}

export default DocumentItem
