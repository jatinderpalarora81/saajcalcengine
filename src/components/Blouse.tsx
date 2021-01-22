
import * as React from "react";
import {CommonPros, BlouseStyle} from "../typedef/style";
import {Button, ButtonGroup, Col, Container, Form, Modal, Row, ToggleButton} from "react-bootstrap";
import {Storage} from "aws-amplify"


export class Blouse extends React.Component<CommonPros, any>{
    private values: any

    constructor(props:any) {
        super(props);
        this.values = {};
        this.state = {showBlouse:false}

        }

    componentDidMount(): void {
        Storage.get("BLOUSE.png").then( (data) => {
                this.setState(
                    {
                        url1 :  data
                    })
            }
        ).catch(er => console.log('Error',er))
    }

    render(): React.ReactNode {
        return (
            <Container style={{marginTop:'15px'}}>
                <Row>
                    <Form>
                        <h5>Blouse Fitting (in inches):
                            <ButtonGroup toggle className="mb-2">
                                <ToggleButton
                                    type="checkbox"
                                    variant="link"
                                    checked={this.state.showBlouse}
                                    value="1"
                                    onChange={(e) => {this.setState({showBlouse: e.currentTarget.checked}); }}>
                                    How to measure?
                                </ToggleButton>
                            </ButtonGroup>
                        </h5>
                        <Form.Row className="align-items-center">
                            <Col  className="my-1">
                                <Form.Label>Bust</Form.Label>
                                <Form.Control type="text"
                                              onChange={e=>{this.values.bust= e.target.value}}
                                />
                            </Col>
                            <Col className="my-1">
                                <Form.Label>Shoulder</Form.Label>
                                <Form.Control type="number"  onChange={e=>{this.values.shoulderLength= e.target.value}}
                                />
                            </Col>

                            <Col className="my-1">
                                <Form.Label>Arm Hole: </Form.Label>
                                <Form.Control type="number"   onChange={e=>{this.values.armHoleSize= e.target.value}}
                                />
                            </Col>

                            <Col>
                                <Form.Label>Around Arm</Form.Label>
                                <Form.Control type="number" onChange={e=>{this.values.aroundArm= e.target.value}}
                                />
                            </Col>

                            <Col  className="my-1">
                                <Form.Label>Blouse Length: </Form.Label>
                                <Form.Control type="number"  onChange={e=>{this.values.blouseLength= e.target.value}}
                                />
                            </Col>

                        </Form.Row>

                        <Button style={{marginTop:'10px', marginRight:'10px'}} variant="primary" type="button" onClick={()=>alert("You reccomended size is : FREE SIZE ")}>
                            Submit
                        </Button>


                    </Form>
                </Row>

                <Modal show={this.state.showBlouse} >
                    <Modal.Header closeButton>
                        <Modal.Title>Blouse Image</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        { this.state.showBlouse && this.state.url1 != '' && <img style={{height:'auto',width:'70%'}} src={ this.state.url1 }/>}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={()=> this.setState({showBlouse:false})}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </Container>
        )
    }
}