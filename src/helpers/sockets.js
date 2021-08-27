import { Enveloper, LogPlugin, Socket } from '@fantaptik/socket';
import { urls } from './host';

import websocketApi from '../api/websockets'
import {connect} from "react-redux";
/**
 * `createSocket` creates a `Socket` for the application.
 *
 * @returns {Object}
 */

import store from "./store";

export const createSocket = () => {
    //
    // Socket retryProvider with backoff algorithm.
    const initSocketRetryTimeouts = [ 1000, 2500, 5000, 10000 ];
    let socketRetryTimeouts = [ ...initSocketRetryTimeouts ];
    const socketRetryProvider = attemptCount => {
        if( attemptCount === 0 ) {
            socketRetryTimeouts = [ ...initSocketRetryTimeouts ];
            return 0;
        }
        return socketRetryTimeouts.length > 1 ? socketRetryTimeouts.shift() : socketRetryTimeouts[ 0 ];
    }

    //
    // The sockets options.
    const socketOptions = {
        retryProvider : count => {
            return socketRetryProvider( count );
        },
        uriProvider : count => {
            //return urls.socket;
            return "ws://127.0.0.1:8080/ws"
        },
        messageId : "messageId",

        onconnect : event => store.dispatch( websocketApi.connected() ),
        ondisconnect : event => store.dispatch( websocketApi.disconnected() ),

        ondata : event => console.log("socket.ondata", event ),//TODO RM
        onscheduled : event => console.log("socket.onscheduled",event),//TODO RM

        //
        // Plugins
        plugins : [
            new LogPlugin(),
        ],

        // Id enveloper
        enveloper : new Enveloper.Id( {
            id : "messageId",
            data : "payload",
            elevate : [ "type" ],
        } ),
    };
    const connection = new Socket( socketOptions );
    connection.connect();
    console.log(connection)
    return connection;
}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatch
    }
}


//export const connection = connect(null,mapDispatchToProps)(createSocket);
export const connection = createSocket();
export default connection;
