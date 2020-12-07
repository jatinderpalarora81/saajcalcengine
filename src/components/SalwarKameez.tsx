import * as React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {calculateSize} from "../util/sizecalcutil";
import {Storage} from "aws-amplify";

export class SalwarKameez extends React.Component<any, any>{
    private values: any;

    constructor(props:any) {
        super(props);
        this.values = {};
        this.state = {}
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
                   <Col md={6} >
                       <Form>
                           <h4>Kameez Fitting (in inches): </h4>

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

                           <h4 style={{marginTop:'25px'}}>Salwar Fitting (in inches): </h4>
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

                           <Button style={{marginTop:'10px', marginRight:'10px'}} variant="primary" type="button" onClick={()=>alert("You reccomended size is : "+calculateSize(this.values))}>
                               Submit
                           </Button>

                           <Button style={{marginTop:'10px'}}variant="secondary" type="button" onClick={()=>window.close()}>
                               Close
                           </Button>
                       </Form>
                   </Col>
                   <Col >
                       { this.state.url1 != '' && <img style={{height:'auto',width:'100%'}} src={ this.state.url1 }/>}
                   </Col>
                   <Col md={3}>
                       { this.state.url2 != '' && <img style={{height:'auto',width:'100%'}} src={ this.state.url2 }/>}

                   </Col>
               </Row>
           </Container>
       )
    }

}