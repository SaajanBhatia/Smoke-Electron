
import socket from '../helpers/sockets';

const fetch = () => {
    const type = "modules/fetch";
    return dispatch => {
        dispatch( { type : type + "/begin"} );
        socket.promise( { type : type } ).then( result => {
            dispatch( result );
        } ).catch( error => {
            console.log( "actions." + type + ".rejected -> ",error );//TODO RM
        } );
    };
};

export default { fetch };