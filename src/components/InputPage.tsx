import * as React from 'react';
import {Accordion, Button, Card, Col, Container, Form, FormControl, Image, InputGroup, Row} from "react-bootstrap";
import {API} from 'aws-amplify'
import {Lehenga} from "./Lehenga";
import {Storage} from "aws-amplify"
import {SalwarKameez} from "./SalwarKameez";
import {Western} from "./Western";
import {Info} from "../typedef/style";
import {fileName} from "../util/nameUtil";

interface InputState {
    fileUrl:string
}

export class InputPage extends React.Component<any, InputState>{

   private values:Info;

    constructor(props:any) {
        super(props);
        this.state = {fileUrl:''};
        this.values = {
            name:"",
            email:"",
            phone:""
        }
    }
    componentDidMount(): void {
        Storage.get("saaj3.4.jpg").then(data =>{
            this.setState(
                {
                    fileUrl :  data.toString()
                })
        })
    }

     postInfo(val:any){
        //const r = await API.post('sizeapi', '/size', {body: {name:"Jatin"}});
        const fName = fileName(this.values);
         console.log(fName);
         const selection = JSON.stringify({...this.values, ...val}, null ,4)
         console.log(selection)

        Storage.put('sizes/'+fName, selection)
            .then (result => {
                 const str = "Thank you "+this.values.name+" for submitting your measurement data, you can close this window and continue with your shopping";
                 alert(str);
                }
            ) // {key: "test.txt"}
            .catch(err => console.log(err));

         return true;
    }

    validateInfo():boolean{
        if(this.values.email=== "" && this.values.phone === ""){
            alert(" Please provide your email id or phone number, this will help us to serve you better.")
            return false;
        }
        return true;
    }

    render(){
        return (<Container  style={{width:'80vw', height:'90vh'}}>
            <Row>
                { this.state.fileUrl != '' && <img style={{height:'auto',width:'300px'}} src={ this.state.fileUrl }/>}
            </Row>
            <Row style={{marginTop:'15px', marginBottom:'20px'}}>
                        <Form>
                            <Form.Group as={Row} style={{ width:'100%'}}>
                                <Form.Label>Enter Name&nbsp;&nbsp;: </Form.Label>
                                <Col >
                                    <Form.Control type="text" placeholder="your name"
                                                  onChange={e=>{this.values.name= e.target.value}}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} style={{ width:'100%'}}>
                                <Form.Label>Email Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </Form.Label>
                                <Col >
                                    <Form.Control type="email" placeholder="your email"
                                                  onChange={e=>{this.values.email= e.target.value}}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} style={{ width:'100%'}}>
                                <Form.Label>Mobile Num : </Form.Label>
                                <Col >
                                    <Form.Control type="test" placeholder="mobile number"
                                                  onChange={e=>{this.values.phone= e.target.value}}
                                    />
                                </Col>
                            </Form.Group>

                        </Form>
            </Row>
            <Row ><h3> Choose a Pattern </h3>
                <Accordion defaultActiveKey="-1" style={{width:'100%', marginBottom:'20px'}} >
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Lehenga
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body><Lehenga postMeasurement={(val) => this.postInfo(val)} validateUserInfo={()=> this.validateInfo()}/></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Western Dress
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body><Western postMeasurement={(val) => this.postInfo(val)} validateUserInfo={()=> this.validateInfo()}/></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                Salwar Kameez
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body> <SalwarKameez postMeasurement={(val) => this.postInfo(val)} validateUserInfo={()=> this.validateInfo()}/></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Row>
            <Row>
                <Button style={{marginTop:'10px'}}variant="secondary" type="button" onClick={()=>window.close()}>
                    Close
                </Button>
            </Row>
        </Container>);
    }

}