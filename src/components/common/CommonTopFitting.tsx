import {Component} from "react";
import {Button, ButtonGroup, Col, Form, OverlayTrigger, Row, ToggleButton, Tooltip} from "react-bootstrap";
import {
    armHole,
    belowBustWaistSize,
    chestSizes,
    shoulderWidth,
    sleeveLength, topLength,
    tucksPointSize
} from "../../util/sizeOptions";
import * as React from "react";
import CustomTooltip from "./CutomTooltip";
import {tooltipTxt} from "../../util/tooltipText";

interface CommonTopFittingProps {
    values:any

}
export default class CommonTopFitting extends Component<CommonTopFittingProps, any>{

    render(): React.ReactNode {
        return (
            <Form>

                <Form.Group as={Row} style={{ width:'100%'}}>
                    <Form.Label>Chest or Bust Size:  <CustomTooltip msg={tooltipTxt.chest}/>
                    </Form.Label>
                    <Col >
                        <Form.Control as="select"
                                      onChange={e=>{this.props.values.bust= e.target.value}}>
                            {chestSizes.map( i => <option> {i} </option>)}
                        </Form.Control>
                    </Col>
                </Form.Group>

                {/*<Form.Row className="align-items-center">*/}
                {/*    <Form.Label>Chest/Bust Size : <CustomTooltip msg={tooltipTxt.chest}/>*/}
                {/*    </Form.Label>*/}
                {/*    <Form.Control as="select"*/}
                {/*                  onChange={e=>{this.props.values.bust= e.target.value}}>*/}
                {/*        {chestSizes.map( i => <option> {i} </option>)}*/}
                {/*    </Form.Control>*/}
                {/*</Form.Row>*/}

                <Form.Group as={Row} style={{ width:'100%'}}>
                    <Form.Label>Below Chest Waist:<CustomTooltip msg={tooltipTxt.belowChestWait}/></Form.Label>
                    <Col >
                        <Form.Control as="select"
                                      onChange={e=>{this.props.values.belowBustWaist= e.target.value}}>
                            {belowBustWaistSize.map( i => <option> {i} </option>)}
                        </Form.Control>
                    </Col>
                </Form.Group>

                {/*<Form.Row className="align-items-center">*/}
                {/*    <Form.Label>Below Chest/Bust waist :  <CustomTooltip msg={tooltipTxt.belowChestWait}/></Form.Label>*/}
                {/*    <Form.Control as="select"*/}
                {/*                  onChange={e=>{this.props.values.belowBustWaist= e.target.value}}>*/}
                {/*        {belowBustWaistSize.map( i => <option> {i} </option>)}*/}
                {/*    </Form.Control>*/}
                {/*</Form.Row>*/}

                <Form.Group as={Row} style={{ width:'100%'}}>
                    <Form.Label>Tucks Points Len  &nbsp;&nbsp;:<CustomTooltip msg={tooltipTxt.tuckPoint}/> </Form.Label>
                    <Col >
                        <Form.Control as="select" onChange={e=>{this.props.values.tucksPoint= e.target.value}}>
                            {tucksPointSize.map( i => <option> {i} </option>)}
                        </Form.Control>
                    </Col>
                </Form.Group>



                <Form.Group as={Row} style={{ width:'100%'}}>
                    <Form.Label>Arm Hole Size &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<CustomTooltip msg={tooltipTxt.armHole}/> </Form.Label>
                    <Col >
                        <Form.Control as="select"   onChange={e=>{this.props.values.armHoleSize= e.target.value}}>
                            {armHole.map( i => <option> {i} </option>)}
                        </Form.Control>
                    </Col>
                </Form.Group>


                <Form.Group as={Row} style={{ width:'100%'}}>
                    <Form.Label>Shoulder Width &nbsp;&nbsp;&nbsp;&nbsp;:<CustomTooltip msg={tooltipTxt.shoulder}/></Form.Label>
                    <Col >
                        <Form.Control as="select" onChange={e=>{this.props.values.shoulderLength= e.target.value}}>
                            {shoulderWidth.map( i => <option> {i} </option>)}
                        </Form.Control>
                    </Col>
                </Form.Group>


                <Form.Group as={Row} style={{ width:'100%'}}>
                    <Form.Label>Sleeve Length &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<CustomTooltip msg={tooltipTxt.sleeveLength}/> </Form.Label>
                    <Col >
                        <Form.Control as="select" onChange={e=>{this.props.values.sleeveLength= e.target.value}}>
                            {sleeveLength.map( i => <option> {i} </option>)}
                        </Form.Control>
                    </Col>
                </Form.Group>


            </Form>
                )
    }
}