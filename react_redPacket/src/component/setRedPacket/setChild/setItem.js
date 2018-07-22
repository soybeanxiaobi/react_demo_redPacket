import React from 'react'
import{ Link } from 'react-router-dom';
//引入css样式
import '../../RedPacketCss.css'

import $ from 'jquery'

class SetItem extends React.Component{
    constructor(...args){
        super(...args);

        this.state = {
            people:0,
            money:0,
            sendBtnCont:'发'
        }

    }
    //获得人数
    getPeopleNum(e){
        this.setState({
            people:e.target.value,
        })
    }

    //获得金额
    getMoneyNum(e){
        this.setState({
            money:e.target.value,
        })
    }
    //子组件点击发,把数据传回父组件:this.props.onSubmitParent
    onSubmitChild(e){
        var that = this;
        //设置传值
        this.props.onSubmitParent({
            people:this.state.people,
            money:this.state.money
        })
        //设置动画
        $('#sendBtn').animate({
            bottom:'180px',
        },500,function(){
            that.setState({
                sendBtnCont:'拆'
            })
        })
        $('.packetItem').fadeOut();

       
    }

    render(){
        //按钮状态不同呈现不同样式  注意状态不可重复
        let btnHtml = '';
        if(this.state.sendBtnCont==='发'){
            btnHtml = (
                <div onClick={this.onSubmitChild.bind(this)} id="sendBtn" className="sendPacket">{this.state.sendBtnCont}</div>
            )
        }
        else{
            btnHtml = (
                <Link to="/openPacket" id="sendBtn"  className="sendPacket" style={{bottom:'180px'}}>{this.state.sendBtnCont}</Link>
            )
        }
        


        return(
            <div className="setItemCont">
                <div className="packetWried">
                    <div className="packetHead">发红包</div>
                    <div className="packetItem" >
                        <div className="itemList">
                            <span>请输入人数</span>
                            <input name="peopleNum" type="text" onChange={this.getPeopleNum.bind(this)} />
                        </div>
                        <div className="itemList">
                            <span>请输入金额</span>
                            <input name="moneyNum" type="text" onChange={this.getMoneyNum.bind(this)}/>
                        </div>
                    </div>
                    {btnHtml}
                </div>
                <div className="packetItemBtm"></div>
            </div>
        )
    }
}

export default SetItem;