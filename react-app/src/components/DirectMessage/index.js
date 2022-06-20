import React, { useEffect } from 'react';
import { io } from 'socket.io-client';

let socket;

const DirectMessage = () => {

    useEffect(() => {
        // create websocket/connect
        socket = io();

        // when component unmounts, disconnect
        return (() => {
            socket.disconnect();
        })
    }, [])

    // additional code to be added 
    return (
        <div>DirectMessage</div>
    )
}

export default DirectMessage
