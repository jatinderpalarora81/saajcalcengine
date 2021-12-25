import * as React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Storage} from "aws-amplify"
import {GenericMeasurements, Info} from "../typedef/style";
import {fileName} from "../util/nameUtil";
import {ModalPopup} from "./common/ModalPopup";
import {isEmail} from "../util/validator";
import {GenericInput} from "./GenericInput";

interface InputState {
    fileUrl:string,
    msg:string|undefined,
    header:string|undefined,
    warningPopup:boolean,
    closePopup:boolean
    initialMeasValues: GenericMeasurements|any;
}

export class InputPage extends React.Component<any, InputState>{

   private values:Info;

    constructor(props:any) {
        super(props);
        this.state = {fileUrl:'', msg:undefined, header:undefined, warningPopup:false, closePopup:false, initialMeasValues: undefined};
        this.values = {
            name:"",
            email:"",
            phone:""
        }
    }
    componentDidMount(): void {
        // Storage.get("saaj3.4.jpg").then(data =>{
        //     this.setState(
        //         {
        //             fileUrl :  data.toString()
        //         })
        // })
    }

    closeIt(){
        console.log("CLOSING")
        window.close();
    }

    warnIt(){
        this.setState({warningPopup:false});
    }

     postInfo(val:any){
        //const r = await API.post('sizeapi', '/size', {body: {name:"Jatin"}});
        const fName = fileName(this.values);
         console.log(fName);
         const selection = JSON.stringify({...this.values, ...val}, null ,4)
        Storage.put('sizes/'+fName, selection)
            .then (result => {
                this.setState( {closePopup:true, header:'Saaj Designs',
                    msg :"Thank you for submitting your measurement details, our Saaj team will get back to you in case we need any further detail. " +
                        "You can now close this window and continue with your shopping"} );
                }
            ) 
            .catch(err => {
                this.setState( {closePopup:true, header:'Failed to save', msg :" could not save your details, please try in some time"} )
                }
            );

         return true;
    }

    validateInfo():boolean{
        if( (this.values.email=== "" || !isEmail(this.values.email) ) &&  (this.values.phone === "" )){
            this.setState( {warningPopup:true, header:'Saaj Designs', msg :"Dear Customer, please provide a valid email id, this will help us to serve you better."} )
            return false;
        }
        return true;
    }

    fetchAndFill():void{
        if(this.validateInfo()) {
            const fName = fileName(this.values);
            const obj  = this;
            Storage.get('sizes/'+fName).then(url =>{

                console.log('filena,e ;',fName)
                console.log(url)
                fetch(url.toString())
                    .then(function (response) {
                         // console.log(response.json())
                      response.json()
                          .then(d => {console.log(d); obj.setState({initialMeasValues:{...d}})})
                          .catch( function (err) {
                              console.log("failed to load ");
                              obj.setState({initialMeasValues:{}});
                              console.log("failed to load---");
                          });
                        return response.body;
                    })
                    .catch(function (err) {
                        console.log("failed to load ");
                    });

            }).catch(
                function (err) {
                    console.log("failed to load ");
                    obj.setState({initialMeasValues:{}});
                }
            )
        }
    }

    render(){
        return (<Container  style={{width:'80vw', height:'90vh'}}>
            <Row>
                <h5 style={{color:'orange', marginTop:'10px'}}>Saaj Designs Customize Measurement Form</h5>
            </Row>
            { !this.state.initialMeasValues && <Row style={{marginTop: '10px'}}>
                <Form>
                    <Form.Group as={Row} style={{width: '100%'}}>
                        <Form.Label>Email Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </Form.Label>
                        <Col>
                            <Form.Control type="email" placeholder="Your Email-id"
                                          onChange={e => {
                                              this.values.email = e.target.value
                                          }}
                                          onBlur={() => {
                                              console.log('Hello')
                                          }}
                            />
                        </Col>
                    </Form.Group>
                </Form>
                <Button style={{ marginRight: '10px'}} variant="primary" type="button"
                        onClick={() => this.fetchAndFill()}>
                    Next
                </Button>

                <Button style={{ marginRight: '10px'}} variant="secondary" type="button"
                        onClick={() => this.closeIt()}>
                    Close
                </Button>
            </Row>
            }

            {this.state.initialMeasValues &&
            <Row>
                <GenericInput postMeasurement={(val) => this.postInfo(val)} validateUserInfo={() => this.validateInfo()}
                              close={() => this.closeIt()} initialVal={this.state.initialMeasValues}/>
            </Row>
            }

            <Row  style={{marginTop:'30px'}}>
                {this.state.closePopup &&
                <ModalPopup headerMsg={this.state.header} msg={this.state.msg} action={() => this.closeIt()}/>}
                {this.state.warningPopup &&
                <ModalPopup headerMsg={this.state.header} msg={this.state.msg} action={() => this.warnIt()}/>}
            </Row>

        </Container>);
    }

}