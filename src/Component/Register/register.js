import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            telNum: '',
            xshow: false,
            random: '',
            yzm: '',
            next: false,
            goLog: false,
        }
    }
    getTel(e) {
        let telNum = e.target.value
        this.setState({
            telNum,
            xshow: true,
            light: false,
        }, () => {
            if (this.state.telNum.length <= 0) {
                this.setState({
                    xshow: false
                })
            }
            let reg = /^1[3-9]\d{9}$/
            let res = reg.test(this.state.telNum)
            if (res) {
                this.setState({
                    light: true,
                })
            } else {
                this.setState({
                    light: false,
                })
            }
        })
    }
    //点x清空Input的内容
    clear() {
        this.setState({
            telNum: '',
            xshow: false,
            light: false
        })
    }
    //获取验证码
    click() {
        // let random = Math.floor(Math.random() * 10000)
        let random = '';
        for (let i = 0; i < 4; i++) {
            random += parseInt(Math.random() * 10);
        }
        this.setState({
            random
        }, () => {
            console.log(this.state.random)
        })
    }
    //存储输入的验证码
    save(e) {
        let yzm = e.target.value
        this.setState({
            yzm,
        }, () => {
            if (this.state.random) {
                this.setState({
                    next: true
                })
            } else {
                this.setState({
                    next: false
                })
            }
        })
    }
    //跳转
    next() {
        if (parseInt(this.state.yzm) === parseInt(this.state.random)) {
            this.setState({
                goLog: true
            }, () => {
                this.props.history.push('/sp');
                localStorage.setItem('tel', JSON.stringify(this.state.telNum))
            })
        }
    }

    render() {
        console.log(this)
        return (
            <div className="main">
                <div className="app common">
                    <div id="head">
                        <div className="fixtop">
                            <a href="javascript:history.go(-1);" id="t-find" className="btnBack"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_black.png?578e3149-1&amp;sv=449ce9ee" /></a>
                            <span id="t-index">注册</span>
                            <span id="t-user"></span>
                        </div>
                    </div>

                    <div className="wap-login">
                        <p className="reg-notice">请确保你的手机畅通，用于接收验证码短信</p>
                        <form id="mobileFrom" method="post" action="/muser/password">
                            <input name="ajax_action" type="hidden" value="" enctype="application/x-www-form-urlencoded" />
                            <div className="login-info">
                                <ul className="info-input clear">
                                    <li>
                                        {/* <!--<i><img  src="//jp.juancdn.com/jpwebapp/images/login/phone.png?ts=20181022174388-1&sv=449ce9ee" /></i>--> */}
                                        <input type="tel" pattern="[0-9]*" placeholder="请输入手机号码" id="mobile" name="mobile" className="txt normalInput" onChange={this.getTel.bind(this)} value={this.state.telNum} />

                                        <em className="reg-close" style={{ display: this.state.xshow ? 'block' : 'none' }} id="reg-mobile-close" onClick={this.clear.bind(this)}>
                                            <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/x.png?2dc3a154-1&amp;sv=449ce9ee" />
                                        </em>
                                    </li>
                                    <li className="clear">
                                        {/* <!--<i><img  src="//jp.juancdn.com/jpwebapp_v1/images/login/code.png?ts=20181022174388-1&sv=449ce9ee" /></i>--> */}
                                        <input ref="clear" type="tel" className="txt normalInput code-txt fl" id="code" placeholder="请输入验证码" name="code" onChange={this.save.bind(this)} />
                                        <i style={{ display: 'none' }} className="reg-close fl" id="reg-code-close">
                                            <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/x.png?2dc3a154-1&amp;sv=449ce9ee" />
                                        </i>
                                        <a className='btn_get get-code disable-code fr' id="code_btn" href="javascript:;" style={{
                                            color: this.state.light ? '#ff464e' : '',
                                            cursor: this.state.light ? '' : 'default',
                                            pointerEvents: this.state.light ? '' : 'none'
                                        }} onClick={this.click.bind(this)}>获取验证码</a>
                                    </li>
                                </ul>
                                <input type="hidden" name="hidMobile" id="hidMobile" value="" />
                                <input type="hidden" name="mtoken" id="mtoken" value="7f45d684b010fc0d1e1298aa0f55d18c" />
                                <a id="btn-code" href="javascript:;" className={this.state.next ? 'codeBtn' : 'codeBtn disable-btn'} style={{
                                    cursor: this.state.next ? '' : 'default',
                                    pointerEvents: this.state.next ? '' : 'none'
                                }} onClick={this.next.bind(this)}>下一步</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(connect((state) => {
    return state
})(Register))