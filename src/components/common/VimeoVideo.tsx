import React, {Component} from "react";
// @ts-ignore
import Vimeo from '@u-wave/react-vimeo';

interface  VimeoProps {
    id:string
}
export class VimeoVideo extends Component<VimeoProps, any>{

    render(): React.ReactNode {
      const url = "https://vimeo.com/"+this.props.id
      return (
          <Vimeo
              video= {url}
              autoplay
              width ='320'
          />
        );
    }
}