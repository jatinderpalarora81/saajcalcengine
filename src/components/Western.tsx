
import * as React from "react";
import { CommonProps, PatternType, WesternStyle} from "../typedef/style";
import {Button, ButtonGroup, Col, Container, Form, Modal, Row, ToggleButton} from "react-bootstrap";
import {Storage} from "aws-amplify"
import CommonTopFitting from "./common/CommonTopFitting";
import CustomTooltip from "./common/CutomTooltip";
import {tooltipTxt} from "../util/tooltipText";
import {fullToplngth} from "../util/sizeOptions";
import {VimeoVideo} from "./common/VimeoVideo";
import {isInput} from "../util/validator";
import {ModalPopup} from "./common/ModalPopup";


export class Western extends React.Component<CommonProps, any>{
    private values:WesternStyle|any;
    private msg:string="";

    constructor(props:any) {
        super(props);
        this.values = {'Pattern': PatternType.Western};
        this.state = {howToMeasure:false}

        }

    componentDidMount(): void {
        // Storage.get("BLOUSE.png").then( (data) => {
        //         this.setState(
        //             {
        //                 url1 :  data
        //             })
        //     }
        // ).catch(er => console.log('Error',er))
    }
    validate(){
        if(this.props.validateUserInfo()){
            const missingList:string[] = isInput("Select", ["bust", "belowBustWaist", "shoulderLength", "armHoleSize"], this.values);
            if( missingList.length > 0){
                this.setState({missingInfo:true})
                this.msg= 'We need measurement detail of '+missingList+" to give you best fit, please fill it and submit again"
            }else {
                this.props.postMeasurement(this.values)
            }
        }
    }

    render(): React.ReactNode {
        return (
            <Container style={{marginTop:'15px'}}>
                <Row>
                    <Form style={{ width:'100%'}}>
                        <h5>Western Dress Fitting:
                            <ButtonGroup toggle className="mb-2">
                                <ToggleButton
                                    type="checkbox"
                                    variant="link"
                                    checked={this.state.howToMeasure}
                                    value="1"
                                    onChange={(e) => {this.setState({howToMeasure: e.currentTarget.checked}); }}>
                                    How to measure?
                                </ToggleButton>
                            </ButtonGroup>
                        </h5>
                        <CommonTopFitting values={this.values}/>

                        <Form.Group as={Row} style={{ width:'100%'}}>
                            <Form.Label>Dress Length &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<CustomTooltip msg={tooltipTxt.Empty}/> </Form.Label>
                            <Col >
                                <Form.Control as="select"  onChange={e=>{this.values.dressLength= e.target.value}}>
                                    {fullToplngth.map( i => <option> {i} </option>)}
                                </Form.Control>
                            </Col>
                        </Form.Group>


                        <Form.Row>
                            <Form.Label>Add Comments &nbsp;&nbsp;:<CustomTooltip msg={tooltipTxt.Empty}/></Form.Label>
                            <Form.Control as="textarea" rows={2} onChange={e=>{this.values.comments= e.target.value}}/>
                        </Form.Row>

                        <Button style={{marginTop:'10px', marginRight:'10px'}} variant="primary" type="button" onClick={()=>this.validate()}>
                            Submit
                        </Button>

                    </Form>

                    <Row>
                        {this.state.missingInfo  && <ModalPopup headerMsg="Missing Info" msg={this.msg} action={ ()=>  this.setState({missingInfo:false})} />}
                    </Row>
                </Row>

                <Modal show={this.state.howToMeasure} >
                    <Modal.Header closeButton>
                        <Modal.Title>Blouse Measurement Video</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/*{ this.state.howToMeasure && this.state.url1 != '' && <img style={{height:'auto',width:'70%'}} src={ this.state.url1 }/>}*/}
                        <VimeoVideo id={'515596882'}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={()=> this.setState({howToMeasure:false})}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </Container>
        )
    }
}