
import socket from '../helpers/sockets';

const fetch = () => {
    const type = "proxies/fetch";
    return dispatch => {
        dispatch( { type : type + "/begin"} );
        socket.promise( { type : type } ).then( result => {
            dispatch( result );
        } ).catch( error => {
            console.log( "actions." + type + ".rejected -> ",error );//TODO RM
        } );
    };
};


const create = (proxy) => {
    const type = "proxies/create";
    return dispatch => {
        dispatch( { type : type + "/begin"} );
        socket.promise( { type ,  proxy } ).then( result => {
            dispatch( result );
        } ).catch( error => {
            console.log( "actions." + type + ".rejected -> ",error );//TODO RM
        } );
    };
};

const edit = (proxy) => {
    const type = "proxies/edit";
    return dispatch => {
        dispatch( { type : type + "/begin"} );
        socket.promise( { type , proxy } ).then( result => {
            dispatch( result );
        } ).catch( error => {
            console.log( "actions." + type + ".rejected -> ",error );//TODO RM
        } );
    };
};




const del = (inp) => {
    const type = "proxies/delete";
    let proxy;
    switch (typeof (inp)) {
        case "object":
            proxy = inp
            break;
        case "string":
            proxy = {name:inp}
            break;
    }
    return dispatch => {
        dispatch( { type : type + "/begin" } ); // TODO add begin dispatch
        socket.promise( { type, proxy } ).then( result => {
            dispatch( result ); // TODO example response: {type:"tasks/delete",task:<task json>}
        } ).catch( error => {
            console.log( "actions." + type + ".rejected -> ",error );//TODO RM
        } );
    };
};

function isJSON(data) {
    let ret = true;
    try {
        JSON.parse(data);
    }catch(e) {
        ret = false;
    }
    return ret;
}

export default { fetch , create , edit , del };