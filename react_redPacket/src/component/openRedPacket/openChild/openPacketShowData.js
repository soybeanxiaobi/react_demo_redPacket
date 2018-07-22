import React from 'react'
import '../../RedPacketCss.css'

class ShowData extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div className="openItemList">
                <span>{this.props.listIdx}</span>
                <span>{this.props.getBag}</span>
                <span>{this.props.rest}</span>
            </div>
        )
    }
}

export default ShowData