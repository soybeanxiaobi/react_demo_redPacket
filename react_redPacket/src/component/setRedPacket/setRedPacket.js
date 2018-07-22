/**
 * 页面主要
 */

import React from 'react'
import { connect } from 'react-redux'
//引入子组件
import SetItem from './setChild/setItem'
import { setArgu } from './action'


class Set extends React.Component{
    constructor(...args){
        super(...args);

        this.state = {
            val:'',
        }
        
    }

    handleState(e){
        console.log('我是子组件传来的数据')
        console.log(e);
        //传入函数
        this.props.onSubmitParent(e);
    }

    render(){
        return(
            <div className="setRedPacketCont">
                <SetItem onSubmitParent={this.handleState.bind(this)}>
                </SetItem>
            </div>
        )
    }              
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitParent({people,money}){
            dispatch(setArgu({people,money}))
        }
    }
}

Set = connect(null,mapDispatchToProps)(Set)

export default Set;