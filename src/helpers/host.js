// src/conf/host.js
export const home = window.location.href.replace( /\/+$/, '' );
export const socket = home.replace( /^http/, 'ws' );
export const path = home.replace( /^http(s)?:\/\/[^/]+/, '');

export const urls = {
    socket : socket + "/socket",
};