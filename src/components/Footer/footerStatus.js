import React from "react";

import connection from "../../helpers/sockets";

import {connect} from "react-redux";
import websocketApi from "../../api/websockets";


class FooterStatus extends React.Component {
    render() {


        return(
            <p style={{color: "grey"}}>
                <box-icon name='circle' type='solid' color="green" size="xs"/>
                {this.props.websocket}
            </p>
        )
    }

}

const mapStateToProps = (props) => {
    return {
        websocket: props.websocket
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatch
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(FooterStatus);