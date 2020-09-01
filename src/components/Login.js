import React, { Fragment, Component, useState } from 'react'
import { useDispatch } from 'react-redux'
import { post, login } from './../apis/RootApi';
import * as actions from './../actions/Action';
import handleDate from './../utils/HandleDate';
import * as SystemConstant from './../constants/SystemConstant'
import { Redirect, useHistory } from 'react-router-dom'
function Login() {
    let history = useHistory();
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false)
    const changUsername = (e) => {
        let username = e.target.value;
        setUsername(username);
    }
    const changPassword = (e) => {
        let password = e.target.value;
        setPassword(password);
    }
    const handleChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })

    }
    const submit = (e) => {
        e.preventDefault();
        let data = {
            username: username,
            password: password
        }
        console.log(data);
        login("/api/authentication", data).then((res) => {
            let { token } = res.data.data;
            let jwtDecode = require('jwt-decode');
            let info = jwtDecode(token);
            console.log(info);
            dispatch(actions.setUserInfo(info));
            dispatch(actions.setToken(token))
            //localStorage.setItem(SystemConstant.USER_INFO, JSON.stringify(info))
            localStorage.setItem(SystemConstant.TOKEN, token);
            setLoggedIn(true);
            history.push("/")
            // window.location.href = "/"


        }).catch((error) => {
            window.alert("Đăng nhập không thành công")
        });
    }


    return (<Fragment>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="limiter">
                        <div className="container-login100">
                            <div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
                                <form onSubmit={(e) => submit(e)} className="login100-form validate-form flex-sb flex-w">

                                    <span className="txt1 p-b-11">
                                        Tài khoản
                                     </span>
                                    <div className="wrap-input100 validate-input m-b-36" data-validate="Username is required">
                                        <input className="input100" onChange={(event) => changUsername(event)} type="text" name="username" />
                                        <span className="focus-input100" />
                                    </div>
                                    <span className="txt1 p-b-11">
                                        Mật khẩu
                                     </span>
                                    <div className="wrap-input100 validate-input m-b-12" data-validate="Password is required">
                                        {/* <span className="btn-show-pass">
                                            <i className="fa fa-eye" />
                                        </span> */}
                                        <input className="input100" type="password" onChange={(e) => changPassword(e)} name="password" />
                                        <span className="focus-input100" />
                                    </div>
                                    <div className="flex-sb-m w-full p-b-48">
                                        {/* <div className="contact100-form-checkbox">
                                            <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                                            <label className="label-checkbox100" htmlFor="ckb1">
                                                Remember me
                                             </label>
                                        </div> */}
                                        <div>
                                            <a href="#" className="txt3">
                                                Forgot Password?
                                             </a>
                                        </div>
                                    </div>
                                    <div className="container-login100-form-btn">
                                        <button type="submit" className="login100-form-btn">
                                            Đăng nhập
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </Fragment>)
}


export default Login
