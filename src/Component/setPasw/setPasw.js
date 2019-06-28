import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

export default withRouter(connect((state)=>{
    return state
})(class Passw extends Component {
    constructor() {
        super()
        this.state = {
            pasw: '',
            light: false,
            check: false
        }
    }
    getPasw(e) {
        let pasw = e.target.value
        this.setState({
            pasw,
            light: true
        }, () => {
            if (this.state.pasw === '') {
                this.setState({
                    light: false
                })
            }
        })
    }
    //验证跳转
    check() {
        this.props.dispatch({
            type: 'CHANGESTATUS',
            status: true
        })
        let reg = /^[\w_-]{6,16}$/;
        let res = reg.test(this.state.pasw)
        if (res) {
            this.setState({
                check: true,
            }, () => {
                this.props.history.push('/');
            })
            localStorage.setItem('pas', JSON.stringify(this.state.pasw))
        } else {
            this.setState({
                check: false,
            }, () => {
                alert('密码格式错误')
            })
        }
    }
    render() {
        // console.log(this)
        return (
            <div className="app common">
                <div id="head">
                    <div className="fixtop">
                        <a id="t-find" href="javascript:history.go(-1);" target="_parent" className="btnBack"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_black.png?578e3149-1&amp;sv=449ce9ee" /></a>
                        <span id="t-index">设置密码</span>
                        <span id="t-user"></span>
                    </div>
                </div>

                <div className="wap-login">
                    <p className="reg-notice">请设置密码并妥善保管</p>
                    <form onsubmit="return false;" method="post" action="https://user.juanpi.com/Muser/setPwd" id="passwordForm">
                        <div className="login-info">
                            <ul>
                                <li className="clear">
                                    <input type="text" name="password" id="password" placeholder="密码(6-16个数字、字母和符号组合)" className="normalInput fl" onChange={this.getPasw.bind(this)} value={this.state.pasw} />
                                    <i style={{ display: 'none' }} className="reg-close fl" id="reg-code-close"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/x.png?2dc3a154-1&amp;sv=449ce9ee" /></i>
                                </li>
                            </ul>
                            <input type="hidden" name="token" value="" />
                            <input type="hidden" name="mtokenact" value="reg" />
                            <input type="hidden" name="action" value="" />
                            <label className="submitBtn" onClick={this.check.bind(this)} style={{
                                cursor: this.state.light ? '' : 'default',
                                pointerEvents: this.state.light ? '' : 'none'
                            }}>
                                <a href="javascript:;" id="submitBtn" style={{ background: this.state.light ? '#ff464e' : '#dbdbdb', }} >注册</a>
                                {/* <input type="submit" id="setPassword" className="disabled" value="注册" /> */}
                            </label>
                        </div>

                    </form>

                </div>
            </div>
        )
    }
}))