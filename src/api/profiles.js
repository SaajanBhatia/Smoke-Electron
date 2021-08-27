
import socket from '../helpers/sockets';

const fetch = () => {
    const type = "profiles/fetch";
    return dispatch => {
        dispatch( { type : type + "/begin"} );
        socket.promise( { type : type } ).then( result => {
            dispatch( result );
        } ).catch( error => {
            console.log( "actions." + type + ".rejected -> ",error );//TODO RM
        } );
    };
};


const create = (profile) => {
    const type = "profiles/create";
    return dispatch => {
        dispatch( { type : type + "/begin"} );
        socket.promise( { type , profile  } ).then( result => {
            dispatch( result );
        } ).catch( error => {
            console.log( "actions." + type + ".rejected -> ",error );//TODO RM
        } );
    };
};



const del = (inp) => {
    const type = "profiles/delete";
    let profile;
    switch (typeof (inp)) {
        case "object":
            profile = inp
            break;
        case "string":
            profile = {name:inp}
            break;
    }
    return dispatch => {
        dispatch( { type : type + "/begin" } ); // TODO add begin dispatch
        socket.promise( { type , profile  } ).then( result => {
            dispatch( result );
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

export default { fetch , create , del};