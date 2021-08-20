import React, { useState } from "react";

const Clock = () => {
    let time = new Date().toLocaleTimeString();
    
    const [Ctime, setCtime] = useState(time);
    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time)
    }

    setInterval(updateTime, 1000);

    return (
        <>
            <h4>{time}</h4>
        </>
    );
}

export default Clock;