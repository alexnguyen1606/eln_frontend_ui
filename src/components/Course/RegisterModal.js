import React, { useState, Fragment, useEffect } from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import { get, post } from './../../apis/RootApi';
import { Link } from 'react-router-dom';
import { withRouter, useHistory } from 'react-router-dom';
import handleDate from './../../utils/HandleDate'
export default function RegisterModal(props) {
    const [code, setCode] = useState(null);
    const id = props.courseId;
    const { config } = props;
    const [check, setCheck] = useState(false);
    let history = useHistory();
    const request = () => {
        get("/api/course/request/" + id).then((res) => {
            let message = res.data.message;
            window.alert(message);
        }).catch((error) => {
            console.log(error.response.data);
            let message = error.response.data.message;
            window.alert(message);
        })
    }

    const requestWithCode = () => {
        let data = {
            courseId: id,
            courseCode: code
        };
        post("/api/course/request-code", data).then((res) => {
            window.alert("Đăng ký thành công");
            history.push("/course/learning/" + id);
        }).catch((error) => {
            window.alert(error.response.data.message);
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        requestWithCode();
    }
    const checkInCourse = () => {
        get("/api/v2/course-join/check/" + id).then((res) => {
            if (res.data.data) {
                setCheck(res.data.data);
            }
        })
    }
    const checkRegister = async () => {
        let path = "/course/learning/" + id;
        let data = {
            id: id
        }
        if (check) {
            post("/api/course/join", data).then((res) => {
                console.log(res);
            })
            history.push(path);
            return;
        }
        let current = handleDate(new Date());
        let startLearning = handleDate(config.startLearning);
        let endLearning = handleDate(config.endLearning);
        if (!(current >= startLearning && current <= endLearning)) {
            window.alert("Ngoài thời gian học")
            return;
        }

        if (window.confirm("Xác nhận vào học")) {

            post("/api/course/join", data).then((res) => {
                console.log(res);
            })
            history.push(path);
            return;
        }
    }

    const showRegister = () => {

        if (config.freedomRegister === 1) {
            if (check) {
                return <Link to={"/course/learning/" + id} className="btn btn-primary text-center btn-lg mt-3">Vào học <i className="fa fa-sign-in ml-2"></i></Link>
            }
            return <a className="btn btn-primary text-center btn-lg mt-3" data-toggle="modal" data-target="#registerModal">Đăng ký học<i className="fa fa-sign-in ml-2"></i></a>
        }
        return <a onClick={() => checkRegister()} className="btn btn-primary text-center btn-lg mt-3">Vào học <i className="fa fa-sign-in ml-2"></i></a>

    }
    useEffect(() => {
        checkInCourse();
    }, [])
    return (
        <Fragment>
            {showRegister()}
            <div className="modal fade" id="registerModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Đăng ký học</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Tabs defaultActiveKey="description" transition={false} id="noanim-tab-example">
                                <Tab eventKey="description" title="Đăng ký bằng mã" >
                                    <div className="col-md-12">
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group">

                                                <input type="text" required onChange={e => setCode(e.target.value)} className="form-control" name="code" id aria-describedby="emailHelpId" placeholder="Mã khóa học" />
                                            </div>
                                            <button type="submit" className="btn btn-primary">Gưi yêu cầu</button>
                                        </form>

                                    </div>
                                </Tab>
                                <Tab eventKey="outline " title="Gửi đăng ký">
                                    <div className="col-md-12 mt-5" onClick={request}> <button className="btn btn-primary">Gửi đăng ký học</button></div>
                                </Tab>
                            </Tabs>



                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}
