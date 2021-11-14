
import * as React from "react";
import {CommonProps, GenericMeasurements} from "../typedef/style";
import {
    Button,
    ButtonGroup,
    Col,
    Container,
    Form,
    Modal,
    Row,
    ToggleButton
} from "react-bootstrap";
import {
    hipSize,
    waistSize, chestSizes, armHole, shoulderWidth, aroundArm, bodyHeight, thighCircum
} from "../util/sizeOptions";
import {VimeoVideo} from "./common/VimeoVideo";
import CustomTooltip from "./common/CutomTooltip";
import {tooltipTxt} from "../util/tooltipText";
import {ModalPopup} from "./common/ModalPopup";
import {isInput} from "../util/validator";

export class GenericInput extends React.Component<CommonProps, any>{
    private values: GenericMeasurements|any;
    private msg:string="";

    constructor(props:any) {
        super(props);
        this.values = {};
        this.state = {howToMeasure:false, missingInfo:false}
    }

    componentDidMount(): void {
        // Storage.get("BLOUSE.png").then( (data) => {
        //         this.setState(
        //          {
        //              url1 :  data
        //          })
        //      }
        // ).catch(er => console.log('Error',er))

    }

    validate(){
        if(this.props.validateUserInfo()){
            const missingList:string[] = isInput("Select", ["bust", "aroundWaist", "aroundHips"], this.values);
            if( missingList.length > 0){
                this.setState({missingInfo:true})
                this.msg= 'We need measurement detail of '+missingList+" to give you best fit, please fill it and submit again"
            }else {
                this.props.postMeasurement(this.values)
            }
        }
    }

    render(): React.ReactNode {
        return (<Container >

            <Row>
                <ButtonGroup toggle className="mb-2">
                    <ToggleButton
                        type="checkbox"
                        variant="link"
                        checked={this.state.howToMeasure}
                        value="1"
                        onChange={(e) => {
                            this.setState({howToMeasure: e.currentTarget.checked});
                        }}
                    >
                        How to measure (Video)?
                    </ToggleButton>
                </ButtonGroup>
                <Form style={{width: '100%'}}>

                    <Form.Group as={Row} style={{width: '100%'}}>
                        <Form.Label>*Your Height :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <CustomTooltip msg={tooltipTxt.height}/>
                        </Form.Label>
                        <Col>
                            <Form.Control as="select"
                                          onChange={e => {
                                              this.values.height = e.target.value
                                          }}>
                                {bodyHeight.map(i => <option> {i} </option>)}
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} style={{width: '100%'}}>
                        <Form.Label>*Chest/Bust Size : <CustomTooltip msg={tooltipTxt.chest}/>
                        </Form.Label>
                        <Col>
                            <Form.Control as="select"
                                          onChange={e => {
                                              this.values.bust = e.target.value
                                          }}>
                                {chestSizes.map(i => <option> {i} </option>)}
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} style={{width: '100%'}}>
                        <Form.Label>*Waist Size :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <CustomTooltip msg={tooltipTxt.waist}/></Form.Label>
                        <Col>
                            <Form.Control as="select" onChange={e => {
                                this.values.aroundWaist = e.target.value
                            }}>
                                {waistSize.map(i => <option> {i} </option>)}
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} style={{width: '100%'}}>
                        <Form.Label>*Hips Size :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <CustomTooltip msg={tooltipTxt.hips}/> </Form.Label>
                        <Col>
                            <Form.Control as="select" onChange={e => {
                                this.values.aroundHips = e.target.value
                            }}>
                                {hipSize.map(i => <option> {i} </option>)}
                            </Form.Control>
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row} style={{width: '100%'}}>
                        <Form.Label>Thigh Size :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CustomTooltip
                            msg={tooltipTxt.thigh}/> </Form.Label>
                        <Col>
                            <Form.Control as="select" onChange={e => {
                                this.values.thighSize = e.target.value
                            }}>
                                {thighCircum.map(i => <option> {i} </option>)}
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} style={{width: '100%'}}>
                        <Form.Label>Arm Hole Size :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CustomTooltip
                            msg={tooltipTxt.armHole}/> </Form.Label>
                        <Col>
                            <Form.Control as="select" onChange={e => {
                                this.values.armHoleSize = e.target.value
                            }}>
                                {armHole.map(i => <option> {i} </option>)}
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} style={{width: '100%'}}>
                        <Form.Label>Around Arm Size :&nbsp;<CustomTooltip msg={tooltipTxt.aroundArm}/>
                        </Form.Label>
                        <Col>
                            <Form.Control as="select" onChange={e => {
                                this.values.aroundArm = e.target.value
                            }}>
                                {aroundArm.map(i => <option> {i} </option>)}
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} style={{width: '100%'}}>
                        <Form.Label>Shoulder Width :&nbsp;&nbsp;&nbsp;&nbsp;<CustomTooltip
                            msg={tooltipTxt.shoulder}/></Form.Label>
                        <Col>
                            <Form.Control as="select" onChange={e => {
                                this.values.shoulderLength = e.target.value
                            }}>
                                {shoulderWidth.map(i => <option> {i} </option>)}
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Row>
                        <Form.Label>Add Comments :&nbsp;&nbsp;<CustomTooltip msg={tooltipTxt.Empty}/></Form.Label>
                        <Form.Control as="textarea" rows={1} onChange={e => {
                            this.values.comments = e.target.value
                        }}/>
                    </Form.Row>

                    <Button style={{marginTop: '10px', marginRight: '10px'}} variant="primary" type="button"
                            onClick={() => this.validate()}>
                        Submit
                    </Button>

                    <Button style={{marginTop: '10px', marginRight: '10px'}} variant="primary" type="button"
                            onClick={() => this.props.close()}>
                        Close
                    </Button>

                </Form>
                <Row>
                    {this.state.missingInfo && <ModalPopup headerMsg="Missing Info" msg={this.msg}
                                                           action={() => this.setState({missingInfo: false})}/>}
                </Row>
            </Row>
            <Modal show={this.state.howToMeasure}>
                <Modal.Header closeButton>
                    <Modal.Title>Reference Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <VimeoVideo id={'645688653'}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => this.setState({howToMeasure: false})}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>


        </Container>);
    }
}