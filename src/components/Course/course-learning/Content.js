import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './../../../actions/Action';
import { isEmpty } from './../../../utils/ObjectUtils';
import CKEditor from 'ckeditor4-react';
import { Link } from 'react-router-dom'
function Content(props) {
    const dispatch = useDispatch();
    const courseWare = useSelector(state => state.courseWare.courseWare);
    const document = useSelector(state => state.courseWare.document);
    const data = useSelector(state => state.courseWare);
    const [size, setSize] = useState(window.innerWidth);
    const changeStatus = () => {
        props.changeStatus();
    }
    useLayoutEffect(() => {
        setSize(window.innerWidth);
    }, [size])
    useEffect(() => {
        showContent();
    }, [data])
    const showContent = () => {
        if (data.type === 0) {
            return showCourseWare()
        } else {
            return showDocument();
        }
    }
    const officersFile = (files) => {
        let path = "https://view.officeapps.live.com/op/embed.aspx?src=http://elearning-uat.vnpost.vn" + files;
        return (<iframe style={{ width: "100%", height: "100%" }} src={path}></iframe>)
    }
    const createMarkup = (content) => {
        return { __html: content };
    }
    const showCourseWare = () => {
        if (isEmpty(courseWare)) {
            return "";
        }
        let { files } = courseWare;
        let { id } = courseWare.courseWareType;
        if (id === 4) {
            return officersFile(files);
        }
        if (id === 1) {
            return (<div><iframe className="col-md-12 position-absolute" style={{ height: "100%" }} src={files} ></iframe></div>)
        }
        if (id === 3) {
            return <div><div dangerouslySetInnerHTML={createMarkup(courseWare.content)} /></div>;

        }
        if (id === 5 && courseWare.type_video === 1) {

            return <video width="100%" height="100%" controls><source src={files} type="video/mp4" /></video>;
        }
        if (id === 5 && courseWare.type_video == 2) {

            return <iframe width="100%" height="100%" src={files} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>;
        }
        if (id === 5 && courseWare.type_video == 3) {
            return <audio src={courseWare.files} preload controls></audio>;
        }

    }
    const showDocument = () => {
        console.log("data", document);
        let { linkFile } = document;
        switch (document.type) {
            case "pptx":
                return officersFile(linkFile);
            case "jpg":

                break;
            case "xlsx":
                return officersFile(linkFile);
            case "rar":
                linkFile = "http://elearning-uat.vnpost.vn" + linkFile;
                return ""
            case "pdf":

                return officersFile(linkFile);
            case "png":

                break;
            case "docx":
                return officersFile(linkFile);
            case "doc":
                return officersFile(linkFile);
            default:
                break;
        }
    }
    const setCol = () => {
        if (size <= 575) {
            return "col-md-9"
        }
        return "col";
    }
    return (
        <div className={"h-100  " + setCol()}>
            <nav className=" navbar navbar-expand-lg navbar-light bg-light">
                <button className="btn" onClick={() => changeStatus()} ><i className="fa fa-bars" ></i></button>
                <span className="text-center">{props.course.name}</span>

            </nav>
            <div className="col-md-12 pl-0 pr-0 h-100">
                {showContent()}
            </div>
        </div>
    )
}

export default Content
