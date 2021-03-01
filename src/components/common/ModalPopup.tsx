import {Component} from "react";
import {Button, Modal} from "react-bootstrap";

interface PopupProps {
    msg:string|undefined,
    headerMsg:string|undefined,
    action():void
}

export class ModalPopup extends Component<PopupProps, any>{

    constructor(props:PopupProps) {
        super(props);
        this.state = {showIt:true};
    }

    action(){
        this.setState({showIt:false}, ()=> this.props.action())
    }

    render(): React.ReactNode {
        console.log("RENDERING MODAL")
        return (
            <Modal show={this.state.showIt} >
                <Modal.Header >
                    <Modal.Title>{this.props.headerMsg}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{this.props.msg}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary " onClick={()=> this.action()}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
