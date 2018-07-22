import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import ShowData from './openChild/openPacketShowData'

class Open extends React.Component{
    constructor(){
        super();

        this.state = {

        }
    }

    static propTypes = {
        bags: PropTypes.array
    }

    render(){
        return(
            <div className="openPacket">
                <div className="packetWried">
                    <div className="openPacketHead">
                        <span>打开红包</span><br/>
                        {/*<span>不是手气王</span>*/}
                    </div>
                    <div className="packetCont">
                        <div className="openPacketItem" >
                            { this.props.bags.map((bag,i) => 
                                <ShowData listIdx={`${i+1}、`} getBag={`获得${bag.bag}元`} rest={`剩余${bag.rest}元`} key={i} />    
                            )}
                            {/*<div className="openItemList">1、获得0.75元 剩余7.35元</div>*/}
                            
                        </div>
                    </div>
                    <Link to="/" className="backBtn">返回</Link>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    console.log('金额')
    console.log(state.bags);
    return {
        bags:state.bags
    }
}

Open = connect(mapStateToProps)(Open)


export default Open;