import React, { Fragment, useState } from 'react'
import { get, post } from '../../../apis/RootApi'
import { useHistory, NavLink } from 'react-router-dom'
import { Tabs, Tab } from 'react-bootstrap';
import toSLug from './../../../utils/ToSlug'
function RegisterCompetition(props) {
    let { roundTest } = props;
    const [code, setCode] = useState();
    const [checkInRoundTest, setCheckInRoundTest] = useState(false)
    let history = useHistory();
    const checkUserInCompetitionRoundTest = () => {
        get("/api/competition/join/" + roundTest.id + "/currentUser").then((res) => {
            let { data } = res.data;
            setCheckInRoundTest(data)
        })
    }
    checkUserInCompetitionRoundTest();
    const request = () => {
        post("/api/roundtest/" + roundTest.id + "/request").then((res) => {
            let { message } = res.data;
            window.alert(message);
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        post("/api/roundtest/" + roundTest.id + "/inputCode/" + code).then((res) => {
            let { data } = res.data;
            let { message } = res.data;
            if (data === 0) {
                route();
            }
            window.alert(message)
        })
    }
    const route = () => {
        let slug = toSLug(roundTest.nameRound);
        let path = "/competition/round-test/" + slug + "." + roundTest.id;
        history.push(path)
    }
    const showBtn = () => {
        if (checkInRoundTest) {
            return <button onClick={() => { route() }} className="btn btn-outline btn-outline-primary">Tham gia vòng thi</button>
        }
        return (<button onClick={() => checkUserInCompetitionRoundTest()} data-toggle="modal" data-target="#registerModal" className="btn btn-outline btn-outline-primary">Tham gia vòng thi</button>)
    }
    return (
        <Fragment>
            <div className="card-footer text-center">
                {showBtn()}
            </div>
            <div className="modal fade" id="registerModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Đăng ký thi</h5>
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

                                                <input type="text" required onChange={e => setCode(e.target.value)} className="form-control" name="code" id aria-describedby="emailHelpId" placeholder="Mã vòng thi" />
                                            </div>
                                            <button type="submit" className="btn btn-primary">Gưi yêu cầu</button>
                                        </form>

                                    </div>
                                </Tab>
                                <Tab eventKey="outline " title="Gửi đăng ký">
                                    <div className="col-md-12 mt-5" onClick={request}> <button className="btn btn-primary">Gửi đăng ký thi</button></div>
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

export default RegisterCompetition
