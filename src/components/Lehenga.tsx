
import * as React from "react";
import {CommonProps, LehengaCholiStyle, PatternType} from "../typedef/style";
import {
    Button,
    ButtonGroup,
    Col,
    Container,
    Form,
    Modal,
    Row,
    ToggleButton,
    Tooltip
} from "react-bootstrap";
import {Storage} from "aws-amplify"
import {
    topLength,
    hipSize,
    lehengaLen,
    waistSize
} from "../util/sizeOptions";
import {VimeoVideo} from "./common/VimeoVideo";
import CommonTopFitting from "./common/CommonTopFitting";
import CustomTooltip from "./common/CutomTooltip";
import {tooltipTxt} from "../util/tooltipText";

export class Lehenga extends React.Component<CommonProps, any>{
     private values: LehengaCholiStyle|any;

    constructor(props:any) {
        super(props);
        this.values = {'Pattern': PatternType.LehenhaCholi};
        this.state = {howToMeasure:false}
    }

    componentDidMount(): void {
        // Storage.get("BLOUSE.png").then( (data) => {
        //         this.setState(
        //          {
        //              url1 :  data
        //          })
        //      }
        // ).catch(er => console.log('Error',er))
        // Storage.get("SKIRT.png").then( (data) => {
        //         this.setState(
        //             {
        //                 url2 :  data
        //             })
        //     }
        // ).catch(er => console.log('Error',er))
    }

    validate(){
        if(this.props.validateUserInfo()){
            this.props.postMeasurement(this.values)
        }
    }

    render(): React.ReactNode {
        return( <Container style={{marginTop:'25px'}}>

            <Row>
                    <Form style={{ width:'100%'}}>

                        <h5>Blouse Fitting :
                            <ButtonGroup toggle className="mb-2">
                                <ToggleButton
                                    type="checkbox"
                                    variant="link"
                                    checked={this.state.howToMeasure}
                                    value="1"
                                    onChange={(e) => {this.setState({howToMeasure: e.currentTarget.checked}); }}
                                >
                                    How to measure?
                                </ToggleButton>
                            </ButtonGroup></h5>

                       <CommonTopFitting values={this.values}/>

                            <Form.Group as={Row} style={{ width:'100%'}}>
                                <Form.Label >Blouse Length &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<CustomTooltip msg={tooltipTxt.blouseLength}/></Form.Label>
                                <Col >
                                    <Form.Control as="select"  onChange={e=>{this.values.topLength= e.target.value}}>
                                        {topLength.map( i => <option> {i} </option>)}
                                    </Form.Control>
                                </Col>
                            </Form.Group>


                        <Form.Group as={Row} style={{ width:'100%'}}>
                            <Form.Label>Padded &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                                <CustomTooltip msg={tooltipTxt.Empty}/></Form.Label>
                            <Col >
                                <Form.Control as="select"  onChange={e=>{this.values.pads= e.target.value}}>
                                <option>Select</option>
                                <option>No</option>
                                <option>Yes</option>
                            </Form.Control>
                            </Col>
                        </Form.Group>


                        <h5 style={{marginTop:'25px', marginBottom:'20px'}}>Lehenga/Skirt Fitting :
                            </h5>

                        <Form.Group as={Row} style={{ width:'100%'}}>
                            <Form.Label>Around Hips Size :  <CustomTooltip msg={tooltipTxt.hips}/> </Form.Label>
                            <Col >
                                <Form.Control as="select"  onChange={e=>{this.values.aroundHips= e.target.value}}>
                                    {hipSize.map( i => <option> {i} </option>)}
                                </Form.Control>
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row} style={{ width:'100%'}}>
                            <Form.Label>Around Waist Size :<CustomTooltip msg={tooltipTxt.waist}/></Form.Label>
                            <Col >
                                <Form.Control as="select"  onChange={e=>{this.values.aroundWaist= e.target.value}}>
                                    {waistSize.map( i => <option> {i} </option>)}
                                </Form.Control>
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row} style={{ width:'100%'}}>
                            <Form.Label>Lehenga Length &nbsp;&nbsp;&nbsp;:<CustomTooltip msg={tooltipTxt.Empty}/> </Form.Label>
                            <Col >
                                <Form.Control as="select"  onChange={e=>{this.values.lehengaLength= e.target.value}}>
                                    {lehengaLen.map( i => <option> {i} </option>)}
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
            </Row>
            <Modal show={this.state.howToMeasure} >
                <Modal.Header closeButton>
                    <Modal.Title>Reference Video</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    {/*{ this.state.showCholi && this.state.url1 != '' && <img style={{height:'auto',width:'100%'}} src={ this.state.url1 }/>}*/}
                    {/*{ this.state.showLehanga && this.state.url2 != '' && <img style={{height:'auto',width:'100%'}} src={ this.state.url2 }/>}*/}
                    <VimeoVideo id={'515597635'}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={()=> this.setState({howToMeasure:false})}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </Container>)
    }
}