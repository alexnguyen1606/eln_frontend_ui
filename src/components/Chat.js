import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import Alert from './common/Alert';
import Peer from 'peerjs'
function Chat() {
    let socket = io('http://localhost:5000');
    const [message, setMessage] = useState("")
    const [source, setSource] = useState("")
    const [dataMessage, setDataMessage] = useState([]);
    const submit = (e) => {
        e.preventDefault();
        socket.emit('new_message', { message: message })
        setMessage("");

    }

    socket.emit('change_username', { nickName: "alex nguyen" });
    socket.on("receive_message", (data) => {
        let dataCurrent = [...dataMessage];
        dataCurrent.push(data)
        setDataMessage(dataCurrent)

    })
    const getDataMessage = () => {

        console.log(dataMessage);
    }
    const changeMessage = (e) => {
        setMessage(e.target.value);
    }
    useEffect(() => {
        showMessage(dataMessage)

    }, [message, dataMessage, source])
    const showMessage = (data) => {
        if (data.length == 0) {
            return "";
        }
        return data.map((item, i) => {
            return <Alert message={item.message} style="alert-success"></Alert>
        })
    }
    const openStream = () => {
        let config = { audio: true, video: true };
        return navigator.mediaDevices.getUserMedia(config);
    }
    const startStream = () => {
        const constraints = {
            'video': true,
            'audio': true
        }
        openStream().then(stream => {
            console.log(stream);
            socket.emit("stream", stream);
            const video = document.getElementById("local-video")
            video.srcObject = stream;
            video.onloadedmetadata = () => {
                video.play();
            }
        })
            .catch(error => {
                console.error('Error accessing media devices.', error);
            });
    }
    socket.on("stream", (data) => {
        console.log(data);
        const videoRec = document.getElementById("remote-video")
        videoRec.srcObject = data;
        videoRec.onloadedmetadata = () => {
            videoRec.play();
        }
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label htmlFor ></label>
                        <form onSubmit={submit}>
                            <input className="form-control" onChange={(e) => changeMessage(e)} value={message} aria-describedby="emailHelpId" placeholder ></input>
                        </form>
                    </div>
                    <button onClick={() => startStream()}>Start</button>
                    <small id="emailHelpId" className="form-text text-muted">Help text</small>
                    {showMessage(dataMessage)}
                    <div class="video-chat-container">
                        <h2 class="talk-info" id="talking-with-info">
                            Select active user on the left menu.</h2>
                        <div className="video-container">
                            <video autoPlay className="remote-video" id="remote-video"></video>
                            <video autoPlay className="local-video" id="local-video"  >

                            </video>
                        </div>
                    </div>
                </div>
            </div >
        </div >


    )
}

export default Chat
