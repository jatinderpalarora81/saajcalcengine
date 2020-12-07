import * as React from 'react';
import {Button, Col, Container, Form, FormControl, Image, InputGroup, Row} from "react-bootstrap";
import {API} from 'aws-amplify'
import {Lehenga} from "./Lehenga";
import {Storage} from "aws-amplify"
import {SalwarKameez} from "./SalwarKameez";
import {Blouse} from "./Blouse";

interface InputState {
    fileUrl:string,
    selection:string
}

export class InputPage extends React.Component<any, InputState>{
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
        this.state = {fileUrl:'', selection:'0'};
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

    render(){
        // this.printit();
        return (<Container  style={{width:'80vw', height:'90vh'}}>
            <Row>
                { this.state.fileUrl != '' && <img style={{height:'auto',width:'300px'}} src={ this.state.fileUrl }/>}
            </Row>
            <Row style={{marginTop:'15px', marginBottom:'20px'}}>
                    <div >
                        <Form>
                            <Form.Row className="align-items-center">
                                <Col sm={3} className="my-1">
                                    <Form.Label>Enter Name</Form.Label>
                                    <Form.Control type="text" placeholder="Name"
                                                  onChange={e=>{this.values.name= e.target.value}}
                                    />
                                </Col>
                                <Col sm={3} className="my-1">
                                    <Form.Label>Email Id</Form.Label>
                                    <Form.Control type="email" placeholder="email"
                                                  onChange={e=>{this.values.name= e.target.value}}
                                    />

                                </Col>
                                <Col xs="auto" className="my-1">
                                    <Form.Label>Phone Num</Form.Label>
                                    <Form.Control type="number" placeholder="Phone"
                                                  onChange={e=>{this.values.name= e.target.value}}
                                    />
                                </Col>
                            </Form.Row>

                            <Form.Group controlId="n1">
                                <Form.Label style={{marginTop:'20px'}}> <h5>Choose your Pattern: </h5></Form.Label>
                                <Form.Control style={{marginTop:'20px'}} as="select"  className="my-1 mr-sm-2"
                                              id="inlineFormCustomSelectPref"
                                              custom
                                              onChange={e=>{this.setState({selection : e.target.value})}}
                                >
                                    <option value="0">Choose an option..</option>
                                    <option value="1">Lehenga</option>
                                    <option value="2">Salwar Kameez</option>
                                    <option value="3">Blouse</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>

                    </div>
            </Row>
            <Row>
                {this.state.selection === '1' ? (<Lehenga/>) : this.state.selection === '2' ? (<SalwarKameez/>) : this.state.selection === '3' ? <Blouse/> : <div/>}

            </Row>
        </Container>);
    }

}