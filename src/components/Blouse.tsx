
import * as React from "react";
import {LehengaStyle, LenengaCholi} from "../typedef/style";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {calculateSize} from "../util/sizecalcutil";
import {Storage} from "aws-amplify"
import BLOUSE from '../images/BLOUSE.png';


export class Blouse extends React.Component<any, any>{
    private values: any;

    constructor(props:any) {
        super(props);
        this.values = {};
        this.state = {}

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
                    <Col>
                        <Form>
                            <h4>Blouse Fitting (in inches): </h4>
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

                            <Button style={{marginTop:'10px', marginRight:'10px'}} variant="primary" type="button" onClick={()=>alert("You reccomended size is : "+calculateSize(this.values))}>
                                Submit
                            </Button>

                            <Button style={{marginTop:'10px'}}variant="secondary" type="button" onClick={()=>window.close()}>
                                Close
                            </Button>
                        </Form>
                    </Col>
                    <Col>
                        { this.state.url1 != '' && <img style={{height:'auto',width:'60%'}} src={ this.state.url1 }/>}
                    </Col>
                </Row>
            </Container>
        )
    }
}