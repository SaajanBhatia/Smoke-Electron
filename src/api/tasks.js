import socket from '../helpers/sockets';

const fetch = () => {
    const type = "tasks/fetch";
    return dispatch => {
        dispatch( { type : type + "/begin" } ); // TODO add begin dispatch
        socket.promise( { type } ).then( result => {
            dispatch( result ); // TODO example response: {type:"tasks/fetch",tasks:[etc...]}
        } ).catch( error => {
            console.log( "actions." + type + ".rejected -> ",error );//TODO RM
        } );
    };
};

const create = (task) => {
    const type = "tasks/create";
    return dispatch => {
        dispatch( { type : type + "/begin"} );
        socket.promise( { type , task  } ).then( result => {
            dispatch( result );
        } ).catch( error => {
            console.log( "actions." + type + ".rejected -> ",error );//TODO RM
        } );
    };
};

const start = (inp) => {
    const type = "tasks/start";
    let task;
    switch (typeof (inp)) {
        case "object":
            task = inp
            break;
        case "string":
            task = {id:inp}
            break;
    }

    return dispatch => {
        dispatch( { type : type + "/begin"} );
        socket.promise( { type , task  } ).then( result => {
            dispatch( result );
        } ).catch( error => {
            console.log( "actions." + type + ".rejected -> ",error );//TODO RM
        } );
    };
};

const stop = (inp) => {
    const type = "tasks/stop";
    let task;
    switch (typeof (inp)) {
        case "object":
            task = inp
            break;
        case "string":
            task = {id:inp}
            break;
    }

    return dispatch => {
        dispatch( { type : type + "/begin"} );
        socket.promise( { type , task  } ).then( result => {
            dispatch( result );
        } ).catch( error => {
            console.log( "actions." + type + ".rejected -> ",error );//TODO RM
        } );
    };
};


const del = (inp) => {
    const type = "tasks/delete";
    let task;
    switch (typeof (inp)) {
        case "object":
            task = inp
            break;
        case "string":
            task = {id:inp}
            break;
    }

    return dispatch => {
        dispatch( { type : type + "/begin" } ); // TODO add begin dispatch
        socket.promise( { type , task  } ).then( result => {
            dispatch( result ); // TODO example response: {type:"tasks/delete",task:<task json>}
        } ).catch( error => {
            console.log( "actions." + type + ".rejected -> ",error );//TODO RM
        } );
    };
};



export default { fetch,start,stop, create, del };