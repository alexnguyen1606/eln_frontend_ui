import React, { Component } from 'react';
import SliceShow from './SliceShow';

class NotFound extends Component {
    render() {
        return (
            <div>
                <SliceShow></SliceShow>
                <h3 className="text-center">404 Not Found !</h3>
            </div>
        );
    }
}

export default NotFound;