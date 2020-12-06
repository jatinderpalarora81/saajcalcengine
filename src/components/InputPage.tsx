import * as React from 'react';
import {Button, Col, Container, Form, FormControl, Image, InputGroup, Row} from "react-bootstrap";
import pic from '../images/pic.svg';
import {calculateSize} from "../util/sizecalcutil";
import {API} from 'aws-amplify'
import {Lehenga} from "./Lehenga";
export class InputPage extends React.Component{
    values = {
        name:"",
        age:"",
        height:"",
        bust:"",
        waist:"",
        hips:''
    }

    constructor(props:any) {
        super(props);
    }

    async printit(){
        const r = await API.post('sizeapi', '/size', {body: {name:"Jatin"}});
        console.log(r)
        alert(r.body.name);
    }

    render(){
        this.printit();
        return (<Container  >
            <Row>
                <h2>Saaj Designs</h2>
            </Row>
            <Row style={{marginTop:'25px'}}>
                <Col>
                    <div style={{width:'800px', height:'900px'}}>
                        <Form>
                            <Form.Row className="align-items-center">
                                <Col sm={3} className="my-1">
                                    <Form.Label>Enetr Name</Form.Label>
                                    <Form.Control type="text" placeholder="Name"
                                                  onChange={e=>{this.values.name= e.target.value}}
                                    />
                                </Col>
                                <Col sm={3} className="my-1">
                                    <Form.Label>Email Id</Form.Label>
                                    <Form.Control type="text" placeholder="email"
                                                  onChange={e=>{this.values.name= e.target.value}}
                                    />

                                </Col>
                                <Col xs="auto" className="my-1">
                                    <Form.Label>Phone Num</Form.Label>
                                    <Form.Control type="text" placeholder="Phone"
                                                  onChange={e=>{this.values.name= e.target.value}}
                                    />
                                </Col>
                            </Form.Row>



                            <Form.Group controlId="n1">
                                <Form.Label style={{marginTop:'10px'}}> <h5>Choose your Pattern</h5></Form.Label>
                                <Form.Control as="select"  className="my-1 mr-sm-2"
                                              id="inlineFormCustomSelectPref"
                                              custom
                                              onChange={e=>{alert(e.target.value)}}
                                >
                                    <option value="1">Lehenge</option>
                                    <option value="2">Salwar Kameez</option>
                                    <option value="3">Blouse</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        <Lehenga/>
                    </div>
                </Col>
                <Col>
                    {/*<img src={Jumbotron} className="App-logo" alt="logo" />*/}
                    <img style={{height:'auto',width:'100%'}} src={ pic }/>
                </Col>

            </Row>
        </Container>);
    }

}