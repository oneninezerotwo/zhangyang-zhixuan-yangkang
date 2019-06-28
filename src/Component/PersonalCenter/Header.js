import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

export default withRouter(connect((state)=>{
    return state
}) (class Header extends Component {
    constructor(){
        super()
        this.state={

        }
    }
    goReg() {
        this.props.history.push('/register')
    }
    goLog() {
        this.props.history.push('/login')
    }
    cleanTel(){
        this.props.dispatch({
            type: 'CHANGESTATUS',
            status: false
        })
        // window.location.reload( true )
        console.log(this.props.status)
    }
    render() {
        console.log(this)
        return (
            <div className="userCenter">
                <header id="head">
                    <div className="userTop">
                        <a id="t-goback" href="javascript:window.history.go(-1)">
                            <span className="iconfont icon-fanhui"></span>
                        </a>
                        <span id="t-index">个人中心</span>
                    </div>
                    <div className="user-login" style={{display:this.props.status?'none':'block'}}>
                        <a href="javascript:;" onClick={this.goReg.bind(this)}>注册</a><i className="line"></i>
                        <a href="javascript:;" onClick={this.goLog.bind(this)}>登录</a>
                    </div>

                    <div class="user-box-person" style={{display:this.props.status?'block':'none'}}>
                        <span className="exit" onClick={this.cleanTel.bind(this)}>退出</span>
                        <div class="user">
                            <div class="head_img">
                                <a href="//m.juanpi.com/userinfo">
                                    <img src="https://face1.juancdn.com/face/150101/0/0/default_204x204.jpg?iopcmd=thumbnail&amp;type=11&amp;height=80&amp;width=80%7Ciopcmd=convert&amp;Q=88&amp;dst=jpg" />
                                </a>
                            </div>
                            <div class="message">
                                <p class="tel"><a href="//m.juanpi.com/userinfo">{localStorage.getItem('tel').slice(1,-1)}</a></p>
                                <div class="message_detal">
                                    <span><a href="//m.juanpi.com/userinfo">我的账户</a><i class="arrow"></i><i class="circle"></i></span>
                                    {/* <span style="display: block;">
                                        <a id="level" href="https://m.juanpi.com/userlevel/index">V0会员</a><i class="arrow"></i>
                                        <i class="circle"></i>

                                    </span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}))