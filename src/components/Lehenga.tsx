
import * as React from "react";
import {CommonPros, LehengaCholiStyle} from "../typedef/style";
import {Button, ButtonGroup, Col, Container, Form, Modal, Row, ToggleButton} from "react-bootstrap";
import {Storage} from "aws-amplify"
import {calculateLehengaSize} from "../util/sizecalcutil";


export class Lehenga extends React.Component<CommonPros, any>{
     private values: LehengaCholiStyle|any;

    constructor(props:any) {
        super(props);
        this.values = {};
        this.state = {showCholi:false, showLehanga:false}

    }

    componentDidMount(): void {
        Storage.get("BLOUSE.png").then( (data) => {
                this.setState(
                 {
                     url1 :  data
                 })
             }
        ).catch(er => console.log('Error',er))
        Storage.get("SKIRT.png").then( (data) => {
                this.setState(
                    {
                        url2 :  data
                    })
            }
        ).catch(er => console.log('Error',er))
    }

    validate(){
        if(this.props.validateInfo()){
            alert("Your reccomended size is : "+calculateLehengaSize(this.values));
        }
    }

    render(): React.ReactNode {
        return( <Container style={{marginTop:'25px'}}>
            <Row>
                    <Form>
                        <h5>Choli Fitting (in inches):
                        <ButtonGroup toggle className="mb-2">
                            <ToggleButton
                                type="checkbox"
                                variant="link"
                                checked={this.state.showCholi}
                                value="1"
                                onChange={(e) => {this.setState({showCholi: e.currentTarget.checked, showLehanga: false}); }}
                            >
                                How to measure?
                            </ToggleButton>
                        </ButtonGroup></h5>
                        <Form.Row className="align-items-center">
                            <Col >
                                <Form.Label>Bust Size:</Form.Label>
                                <Form.Control type="number"
                                              onChange={e=>{this.values.bust= e.target.value}}
                                />
                            </Col>
                            <Col >
                                <Form.Label>Shoulder Length:</Form.Label>
                                <Form.Control type="number" onChange={e=>{this.values.shoulderLength= e.target.value}}
                                />

                            </Col>
                            <Col>
                                <Form.Label>Blouse Length: </Form.Label>
                                <Form.Control type="number"  onChange={e=>{this.values.blouseLength= e.target.value}}
                                />

                            </Col>
                            <Col>
                                <Form.Label>Arm Hole Size: </Form.Label>
                                <Form.Control type="number"   onChange={e=>{this.values.armHoleSize= e.target.value}}
                                />

                            </Col>
                            <Col>
                                <Form.Label>Around Arm Size:</Form.Label>
                                <Form.Control type="number" onChange={e=>{this.values.aroundArm= e.target.value}}
                                />
                            </Col>
                        </Form.Row>

                        <h5 style={{marginTop:'25px'}}>Lehenga Fitting (in inches):
                            <ButtonGroup toggle >
                            <ToggleButton
                                type="checkbox"
                                variant="link"
                                checked={this.state.showLehanga}
                                value="1"
                                onChange={(e) => {this.setState({showCholi: false, showLehanga: e.currentTarget.checked});}}
                            >
                                How to measure?
                            </ToggleButton> </ButtonGroup>
                            </h5>
                        <Form.Row className="align-items-center">
                            <Col >
                                <Form.Label>Around Hips Size: </Form.Label>
                                <Form.Control type="number"  onChange={e=>{this.values.aroundHips= e.target.value}}
                                />
                            </Col>
                            <Col >
                                <Form.Label>Lehenga Length: </Form.Label>
                                <Form.Control type="number"  onChange={e=>{this.values.lehengaLength= e.target.value}}
                                />
                            </Col>
                            <Col >
                                <Form.Label>Around Waist Size: </Form.Label>
                                <Form.Control type="number"  onChange={e=>{this.values.aroundWaist= e.target.value}}
                                />
                            </Col>
                        </Form.Row>

                        <Button style={{marginTop:'10px', marginRight:'10px'}} variant="primary" type="button" onClick={()=>this.validate()}>
                            Submit
                        </Button>


                    </Form>
            </Row>
            <Modal show={this.state.showCholi || this.state.showLehanga} >
                <Modal.Header closeButton>
                    <Modal.Title>Reference Image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { this.state.showCholi && this.state.url1 != '' && <img style={{height:'auto',width:'100%'}} src={ this.state.url1 }/>}
                    { this.state.showLehanga && this.state.url2 != '' && <img style={{height:'auto',width:'100%'}} src={ this.state.url2 }/>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={()=> this.setState({showCholi:false, showLehanga:false})}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </Container>)
    }
}