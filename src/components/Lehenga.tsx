
import * as React from "react";
import {LehengaStyle, LenengaCholi} from "../typedef/style";
import {Button, ButtonGroup, Col, Container, Form, Row, ToggleButton} from "react-bootstrap";
import {calculateSize} from "../util/sizecalcutil";
import {Storage} from "aws-amplify"
import BLOUSE from '../images/BLOUSE.png';


export class Lehenga extends React.Component<any, any>{
     private values: any;
     private logo:any;

    constructor(props:any) {
        super(props);
        this.values = {};
        this.state = {showCholi:false, showLehanga:false}
        //   Storage.put("BLOUSE.png", this.logo).then((e)=>{
        //     console.log("Stored ",e)
        //  })
    }

    componentDidMount(): void {
        Storage.get("BLOUSE.png").then( (data) => {
                //console.log("URL FROM STORAGE ",data)
                this.setState(
                 {
                     url1 :  data
                 })
             }
        ).catch(er => console.log('Error',er))
        Storage.get("SKIRT.png").then( (data) => {
                //console.log("URL FROM STORAGE ",data)
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
                    <Col md={5} >
                        <Form>
                            <h4>Choli Fitting (in inches):
                            <ButtonGroup toggle className="mb-2">
                                <ToggleButton
                                    type="checkbox"
                                    variant="secondary"
                                    checked={this.state.showCholi}
                                    value="1"
                                    onChange={(e) => {this.setState({showCholi: e.currentTarget.checked, showLehanga: false}); }}
                                >
                                    How to measure
                                </ToggleButton>
                            </ButtonGroup></h4>
                            <Form.Row className="align-items-center">
                                <Col >
                                    <Form.Label>Bust Size</Form.Label>
                                    <Form.Control type="number"
                                                  onChange={e=>{this.values.bust= e.target.value}}
                                    />
                                </Col>
                                <Col >
                                    <Form.Label>Shoulder Length</Form.Label>
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
                                    <Form.Label>AroundArm</Form.Label>
                                    <Form.Control type="number" onChange={e=>{this.values.aroundArm= e.target.value}}
                                    />
                                </Col>
                            </Form.Row>

                            <h4 style={{marginTop:'25px'}}>Lehenga Fitting (in inches):
                                <ButtonGroup toggle className="mb-2">
                                <ToggleButton
                                    type="checkbox"
                                    variant="secondary"
                                    checked={this.state.showLehanga}
                                    value="1"
                                    onChange={(e) => {this.setState({showCholi: false, showLehanga: e.currentTarget.checked});}}
                                >
                                    How to measure
                                </ToggleButton> </ButtonGroup>
                                </h4>
                            <Form.Row className="align-items-center">
                                <Col >
                                    <Form.Label>Around Hips Size: </Form.Label>
                                    <Form.Control type="number"    onChange={e=>{this.values.aroundHips= e.target.value}}
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

                            <Button style={{marginTop:'10px', marginRight:'10px'}} variant="primary" type="button" onClick={()=>alert("You reccomended size is : "+calculateSize(this.values))}>
                                Submit
                            </Button>

                            <Button style={{marginTop:'10px'}}variant="secondary" type="button" onClick={()=>window.close()}>
                                Close
                            </Button>
                        </Form>
                    </Col>
                    <Col>
                        { this.state.showCholi && this.state.url1 != '' && <img style={{height:'auto',width:'60%'}} src={ this.state.url1 }/>}
                        { this.state.showLehanga && this.state.url2 != '' && <img style={{height:'auto',width:'60%'}} src={ this.state.url2 }/>}
                    </Col>
                </Row>
            </Container>
        )
    }
}