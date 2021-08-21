import React, { useState } from "react";

const Clock = () => {
    let time = new Date().toLocaleTimeString();
    var zone = new Date().toLocaleTimeString('en-us',{timeZoneName:'short'})
    
    const [Ctime, setCtime] = useState(time);
    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time)
    }

    setInterval(updateTime, 1000);

    return (
        <>
            <h4> {zone}</h4>
        </>
    );
}

export default Clock;