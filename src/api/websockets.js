import socket from '../helpers/sockets';

const connected = () => {
    const type = "websocket/connected";
    return dispatch => {
        dispatch( { type : type + "/begin"} );
        socket.promise( { type : type } ).then( result => {
            dispatch( result );
        } ).catch( error => {
            console.log( "actions." + type + ".rejected -> ",error );//TODO RM
        } );
    };
};


const disconnected = () => {
    const type = "websocket/disconnected";
    return dispatch => {
        dispatch( { type : type + "/begin"} );
        socket.promise( { type : type } ).then( result => {
            dispatch( result );
        } ).catch( error => {
            console.log( "actions." + type + ".rejected -> ",error );//TODO RM
        } );
    };
};

export default {connected,disconnected};