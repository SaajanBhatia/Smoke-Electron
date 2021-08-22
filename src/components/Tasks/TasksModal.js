// Import Global Modal Style
import "../../global/styles/modalStyle.scss"

// Import Boxicons
import "boxicons";

import Form from 'react-bootstrap/Form';

function TasksModal() {

    return (
        <div className="modal">

            <div className="modal-container">
                <input id="modal-toggle" type="checkbox"></input>
                <label className="modal-btn" for="modal-toggle">
                    <span><h4>Add Task <box-icon name='pencil' type='solid' size="18px" color="white"></box-icon></h4></span>  
                </label> 
                
                <label className="modal-backdrop" for="modal-toggle"></label>
                <div className="modal-content">
                    <label className="modal-close" for="modal-toggle">&#x2715;</label>
                    <h2>Add Task</h2><hr />
                    <div style={{"padding-top": "10px"}} className="inside-modal" className="use-da-boot">
                        <p>Hello from inside the modal!</p>

                        <Form>
                        <>
                            <Form.Control size="lg" type="text" placeholder="Large text" />
                            <br />
                            <Form.Control type="text" placeholder="Normal text" />
                            <br />
                            <Form.Control size="sm" type="text" placeholder="Small text" />
                        </>
                        </Form>
                    </div>
                    
                    <label className="modal-content-btn" for="modal-toggle">OK</label>   
                </div>          
            </div>  

        </div>
    )
}

export default TasksModal;



