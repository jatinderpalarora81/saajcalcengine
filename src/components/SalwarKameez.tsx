import * as React from "react";
import {Button, ButtonGroup, Col, Container, Form, Modal, Row, ToggleButton} from "react-bootstrap";
import {Storage} from "aws-amplify";
import {CommonPros} from "../typedef/style";

export class SalwarKameez extends React.Component<CommonPros, any>{
    private values: any;

    constructor(props:any) {
        super(props);
        this.values = {};
        this.state = {showKameez:false, showSalwar:false}
    }
    componentDidMount(): void {
        Storage.get("kameez.jpg").then( (data) => {
                this.setState(
                    {
                        url1 :  data
                    })
            }
        ).catch(er => console.log('Error',er))
        Storage.get("salwar.jpg").then( (data) => {
                this.setState(
                    {
                        url2 :  data
                    })
            }
        ).catch(er => console.log('Error',er))
    }


    render(): React.ReactNode {
       return (
           <Container style={{marginTop:'25px'}}>
               <Row>
                       <Form>
                           <h5>Kameez Fitting (in inches):
                               <ButtonGroup toggle className="mb-2">
                                   <ToggleButton
                                       type="checkbox"
                                       variant="link"
                                       checked={this.state.showKameez}
                                       value="1"
                                       onChange={(e) => {this.setState({showKameez: e.currentTarget.checked, showSalwar: false}); }}
                                   >
                                       How to measure?
                                   </ToggleButton>
                               </ButtonGroup>
                           </h5>

                           <Form.Row className="align-items-center">
                               <Col>
                                   <Form.Label>Bust: </Form.Label>
                                   <Form.Control type="number"
                                                 onChange={e=>{this.values.bust= e.target.value}}
                                   />
                               </Col>
                               <Col>
                                   <Form.Label>Shoulder Length</Form.Label>
                                   <Form.Control type="number" onChange={e=>{this.values.shoulderLength= e.target.value}}
                                   />

                               </Col>
                               <Col>
                                   <Form.Label>kameez Length: </Form.Label>
                                   <Form.Control type="number"  onChange={e=>{this.values.kameezLength= e.target.value}}
                                   />

                               </Col>
                               <Col>
                                   <Form.Label>Arm Hole Size: </Form.Label>
                                   <Form.Control type="number"    onChange={e=>{this.values.armHoleSize= e.target.value}}
                                   />

                               </Col>
                               <Col>
                                   <Form.Label>AroundArm</Form.Label>
                                   <Form.Control type="number" onChange={e=>{this.values.aroundArm= e.target.value}}
                                   />
                               </Col>
                           </Form.Row>

                           <h5 style={{marginTop:'25px'}}>Salwar Fitting (in inches):
                               <ButtonGroup toggle className="mb-2">
                                   <ToggleButton
                                       type="checkbox"
                                       variant="link"
                                       checked={this.state.showSalwar}
                                       value="1"
                                       onChange={(e) => {this.setState({showSalwar: e.currentTarget.checked, showKameez: false}); }}
                                   >
                                       How to measure?
                                   </ToggleButton>
                               </ButtonGroup>
                           </h5>
                           <Form.Row className="align-items-center">
                               <Col>
                                   <Form.Label>Around Thigh Size: </Form.Label>
                                   <Form.Control type="number"   onChange={e=>{this.values.aroundThigh= e.target.value}}
                                   />
                               </Col>
                               <Col>
                                   <Form.Label>Salwar Length: </Form.Label>
                                   <Form.Control type="number"    onChange={e=>{this.values.salwarLength= e.target.value}}
                                   />
                               </Col>
                               <Col>
                                   <Form.Label>Around Calf Length: </Form.Label>
                                   <Form.Control type="number"  onChange={e=>{this.values.aroundCalf= e.target.value}}
                                   />
                               </Col>
                               <Col>
                                   <Form.Label>Around Knee Length: </Form.Label>
                                   <Form.Control type="number"   onChange={e=>{this.values.aroundKnee= e.target.value}}
                                   />
                               </Col>
                               <Col>
                                   <Form.Label>Around Waist Size: </Form.Label>
                                   <Form.Control type="number"   onChange={e=>{this.values.aroundWaist= e.target.value}}
                                   />
                               </Col>

                           </Form.Row>

                           <Button style={{marginTop:'10px', marginRight:'10px'}} variant="primary" type="button" onClick={()=>alert("You reccomended size is : Free Size")}>
                               Submit
                           </Button>

                       </Form>
               </Row>

               <Modal show={this.state.showKameez || this.state.showSalwar} >
                   <Modal.Header closeButton>
                       <Modal.Title>Kammez Salwar Image</Modal.Title>
                   </Modal.Header>
                   <Modal.Body>
                       { this.state.showKameez && this.state.url1 != '' && <img style={{height:'auto',width:'50%'}} src={ this.state.url1 }/>}
                       { this.state.showSalwar && this.state.url2 != '' && <img style={{height:'auto',width:'100%'}} src={ this.state.url2 }/>}
                   </Modal.Body>
                   <Modal.Footer>
                       <Button variant="primary" onClick={()=> this.setState({showKameez:false, showSalwar:false})}>
                           Close
                       </Button>

                   </Modal.Footer>
               </Modal>

           </Container>
       )
    }

}