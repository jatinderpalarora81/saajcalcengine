
import * as React from "react";
import {LehengaStyle, LenengaCholi} from "../typedef/style";
import {Button, Col, Form, Row} from "react-bootstrap";
import {calculateSize} from "../util/sizecalcutil";
import {Storage} from "aws-amplify"
//import saaj4 from '../images/saaj4.JPG';
import pic from '../images/pic.svg';


export class Lehenga extends React.Component<any, any>{
    private values: any;
    private logo:any;

    constructor(props:any) {
        super(props);
        this.values = {};
        this.state = {}
        this.logo = require('../images/cir.png');
         Storage.put("cir.png", this.logo).then((e)=>{
            console.log("Stored ",e)
         })
    }

    componentDidMount(): void {
        Storage.get("cir.png").then( (data) => {
               console.log(data)
                this.setState(
                {
                    url : data
                })
            }
        )
    }

    render(): React.ReactNode {
        return (
            <Form>
                <h4 style={{marginTop:'25px'}}>Choli Size: </h4>
                <Form.Row className="align-items-center">
                    <Col sm={3} className="my-1">
                        <Form.Label>Bust</Form.Label>
                        <Form.Control type="text" placeholder="Bust size"
                                      onChange={e=>{this.values.bust= e.target.value}}
                        />
                    </Col>
                    <Col sm={3} className="my-1">
                        <Form.Label>Shoulder Length</Form.Label>
                        <Form.Control type="number" placeholder="Shoulder Length (in inches)" onChange={e=>{this.values.shoulderLength= e.target.value}}
                        />

                    </Col>
                    <Col sm={3} className="my-1">
                        <Form.Label>Blouse Length: </Form.Label>
                        <Form.Control type="number" placeholder="Blouse Length (in inches)" onChange={e=>{this.values.blouseLength= e.target.value}}
                        />

                    </Col>
                    <Col sm={3} className="my-1">
                        <Form.Label>Arm Hole Size: </Form.Label>
                        <Form.Control type="number" placeholder="Arm Hole size (in inches)"   onChange={e=>{this.values.armHoleSize= e.target.value}}
                        />

                    </Col>
                    <Col xs="auto" className="my-1">
                        <Form.Label>AroundArm</Form.Label>
                        <Form.Control type="number" placeholder="Around Arm Size (in inches)" onChange={e=>{this.values.aroundArm= e.target.value}}
                        />
                    </Col>
                </Form.Row>

                <h4 style={{marginTop:'25px'}}>Lehenga Size: </h4>
                <Form.Row className="align-items-center">
                    <Col sm={3} className="my-1">
                        <Form.Label>Around Hips Size: </Form.Label>
                        <Form.Control type="number" placeholder="Arm Hole size (in inches)"   onChange={e=>{this.values.aroundHips= e.target.value}}
                        />
                    </Col>
                    <Col sm={3} className="my-1">
                        <Form.Label>Lehenga Length: </Form.Label>
                        <Form.Control type="number" placeholder="Lehenga Length (in inches)"   onChange={e=>{this.values.lehengaLength= e.target.value}}
                        />
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Form.Label>Around Waist Size: </Form.Label>
                        <Form.Control type="number" placeholder="Around Waist Size (in inches)"   onChange={e=>{this.values.aroundWaist= e.target.value}}
                        />
                    </Col>
                </Form.Row>

                <Col>
                    {/*<img src={Jumbotron} className="App-logo" alt="logo" />*/}
                    <img style={{height:'auto',width:'100%'}} src={ this.state.url }/>
                </Col>

                <Button style={{marginTop:'10px', marginLeft:'10px'}} variant="primary" type="button" onClick={()=>alert("You reccomended size is : "+calculateSize(this.values))}>
                    Submit
                </Button>

                <Button style={{marginTop:'10px'}}variant="secondary" type="button" onClick={()=>window.close()}>
                    Close
                </Button>
            </Form>
        )
    }
}