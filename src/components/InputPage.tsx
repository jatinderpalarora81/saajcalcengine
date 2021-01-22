import * as React from 'react';
import {Accordion, Button, Card, Col, Container, Form, FormControl, Image, InputGroup, Row} from "react-bootstrap";
import {API} from 'aws-amplify'
import {Lehenga} from "./Lehenga";
import {Storage} from "aws-amplify"
import {SalwarKameez} from "./SalwarKameez";
import {Blouse} from "./Blouse";
import {Info} from "../typedef/style";

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

    async printit(){
        const r = await API.post('sizeapi', '/size', {body: {name:"Jatin"}});
        console.log(r)
        alert(r.body.name);
    }

    getInfo(){
        return this.values;
    }
    validateInfo():boolean{
        if(this.values.email=== "" && this.values.phone === ""){
            alert(" Please provide your email id or phone number, this will help us to serve you better.")
            return false;
        }
        this.printit().then((i)=> console.log('Send'));
        return true;
    }

    render(){
        // this.printit();
        return (<Container  style={{width:'80vw', height:'90vh'}}>
            <Row>
                { this.state.fileUrl != '' && <img style={{height:'auto',width:'300px'}} src={ this.state.fileUrl }/>}
            </Row>
            <Row style={{marginTop:'15px', marginBottom:'20px'}}>
                        <Form>
                            <Form.Row className="align-items-right">
                                <Col sm={3} className="my-1">
                                    <Form.Label>Enter Name</Form.Label>
                                    <Form.Control type="text" placeholder="Name"
                                                  onChange={e=>{this.values.name= e.target.value}}
                                    />
                                </Col>
                                <Col sm={3} className="my-1">
                                    <Form.Label>Email Id</Form.Label>
                                    <Form.Control type="email" placeholder="email"
                                                  onChange={e=>{this.values.email= e.target.value}}
                                    />
                                </Col>
                                <Col xs="auto" className="my-1">
                                    <Form.Label>Phone Num</Form.Label>
                                    <Form.Control type="test" placeholder="Phone"
                                                  onChange={e=>{this.values.phone= e.target.value}}
                                    />
                                </Col>
                            </Form.Row>
                        </Form>
            </Row>
            <Row ><h3> Choose a Pattern </h3>
                            <Accordion defaultActiveKey="-1" style={{width:'80vw', marginBottom:'20px'}} >
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            Lehenga
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body><Lehenga getInfo={() => this.getInfo()} validateInfo={()=> this.validateInfo()}/></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                            Blouse
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body><Blouse getInfo={() => this.getInfo()} validateInfo={()=> this.validateInfo()}/></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                            Salwar Kameez
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body> <SalwarKameez getInfo={() => this.getInfo()} validateInfo={()=> this.validateInfo()}/></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
            </Row>
                        {/*    <Form.Group controlId="n1">*/}
                        {/*        <Form.Label style={{marginTop:'20px'}}> <h5>Choose your Pattern: </h5></Form.Label>*/}
                        {/*        <Form.Control style={{marginTop:'20px'}} as="select"  className="my-1 mr-sm-2"*/}
                        {/*                      id="inlineFormCustomSelectPref"*/}
                        {/*                      custom*/}
                        {/*                      onChange={e=>{this.setState({selection : e.target.value})}}*/}
                        {/*        >*/}
                        {/*            <option value="0">Choose an option..</option>*/}
                        {/*            <option value="1">Lehenga</option>*/}
                        {/*            <option value="2">Salwar Kameez</option>*/}
                        {/*            <option value="3">Blouse</option>*/}
                        {/*        </Form.Control>*/}
                        {/*    </Form.Group>*/}
                        {/*</Form>*/}

                    {/*</div>*/}

            {/*<Row>*/}
            {/*    {this.state.selection === '1' ? (<Lehenga/>) : this.state.selection === '2' ? (<SalwarKameez/>) : this.state.selection === '3' ? <Blouse/> : <div/>}*/}

            {/*</Row>*/}
            <Row>
                <Button style={{marginTop:'10px'}}variant="secondary" type="button" onClick={()=>window.close()}>
                    Close
                </Button>
            </Row>
        </Container>);
    }

}