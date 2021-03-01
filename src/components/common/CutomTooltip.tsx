import {Component} from "react";
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";
import * as React from "react";

interface CustomTooltipProps {
    msg:string
}
export default class CustomTooltip extends Component<CustomTooltipProps, any>{

    render(): React.ReactNode {
        return (
            <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id={'a'}> {this.props.msg} </Tooltip>}
            >
                <Button variant="secondary" size="sm">?</Button>
            </OverlayTrigger>
        )
    }
}