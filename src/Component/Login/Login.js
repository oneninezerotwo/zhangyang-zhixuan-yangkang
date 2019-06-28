import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

export default withRouter(connect((state)=>{
	return state
})(class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			getTel: '',
			getPas: '',
			lTel: '',
			lPas: '',
			login:false,
			light:false
		}
	}
	goReg() {
		this.props.history.push('/register')
	}
	//登录亮灯
	light(){
		if(this.refs.phone.value && this.refs.pasw.value){
			this.setState({
				light:true
			})
		}else{
			this.setState({
				light:false
			})
		}
	}
	//
	getTel(e) {
		let lTel = localStorage.getItem('tel').slice(1,-1)
		let getTel = e.target.value
		this.setState({
			getTel
		}, () => {
			this.setState({
				lTel
			})
		})
		this.light()
	}
	getPas(e) {
		let lPas = localStorage.getItem('pas').slice(1,-1)
		let getPas = e.target.value
		this.setState({
			getPas
		}, () => {
			this.setState({
				lPas
			})
		})
		this.light()
	}
	login() {
		if(this.state.getTel === '' && this.state.getPas === ''){
			alert('请输入账号密码')
		}else if (this.state.getTel === this.state.lTel && this.state.getPas === this.state.lPas) {
			this.props.dispatch({
				type: 'CHANGESTATUS',
				status: true
			})
			this.props.history.push('/')
		}else{
			alert('输入有误')
		}
		
	}

	render() {
		// console.log(this)
		return (
			<div className="app notfull vip" style={{
				transform: 'rotate(0deg)',
				position: 'absolute',
				top: 0,
				left: 0,
				paddingBottom: '2.05rem',
				marginLeft: '0px',
			}}>
				<div className="go-app-new" style={{ height: '1.1rem' }}> <a href="javascript:;" className="joa_load_app" data-bc="app_huanqi_2.0" data-url="//www.juanpi.com/jump/to?redirect=%2F%2Fm.juanpi.com%2Flanding%2Fapp_1437990734"><img src="//jp.juancdn.com/jpwebapp/images/go_load_new.png?20161115" /></a></div>
				<div id="head">
					<div className="fixtop">
						<a id="t-find" href="javascript:history.go(-1);" className="btnBack"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_white.png?5123297e-1&amp;sv=449ce9ee" /></a>
						<span id="t-index">登录</span>
						<a id="t-user" href="javascript:;" className="free-reg" rel="nofollow" target="_parent" onClick={this.goReg.bind(this)}>注册</a>
					</div>
				</div>
				<div className="wap-login">
					<ul id="login_switch" className="login-txt">
						<li className="active">卷皮账号登录</li>
						<li className="">手机快捷登录</li>
					</ul>
					<form id="normal-logo" action="/user/login" method="post" enctype="application/x-www-form-urlencoded">
						<input name="return_url" type="hidden" value="https://m.juanpi.com/user/?select=4_1" />
						<div className="login-info">
							<ul className="info-input">
								<li>
									<input type="text" name="username" id="username" placeholder="手机号/邮箱/用户名" className="normalInput" onChange={this.getTel.bind(this)} ref="phone"/>
									<em className="reg-close" style={{ display: 'none' }}><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/x.png?2dc3a154-1&amp;sv=449ce9ee" /></em>
								</li>
								<li>
									<input type="password" name="password" id="password" placeholder="密码" className="normalInput" onChange={this.getPas.bind(this)} ref="pasw"/>
									<em className="reg-close" style={{ display: 'none' }}><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/x.png?2dc3a154-1&amp;sv=449ce9ee" /></em>
								</li>
							</ul>


							<a id="btn_login" className="sub disable-btn" rel="nofollow" onClick={this.login.bind(this)} style={{background:this.state.light?'#ff464e':'#dbdbdb'}}>登  录</a>



							<div id="login_l" className="other-action"><label className="freeLogin on"><input type="checkbox" className="ck" name="auto" checked="checked" /><i className="before"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/label_on.png?63443b91-1&amp;sv=449ce9ee" /></i>两周内免登录</label><a href="//m.juanpi.com/user/forget" target="_parent" className="free-reg">忘记密码？</a>
							</div>
						</div>
					</form>
					<form id="quick-login" action="/muser/password" method="post" enctype="application/x-www-form-urlencoded" style={{ display: 'none' }}>
						<div className="login-info">
							<ul className="info-input clear">
								<li>
									<input type="tel" pattern="[0-9]*" placeholder="请输入手机号码" id="mobile" name="mobile" className="normalInput" />
									<em className="reg-close" style={{ display: 'none' }} id="reg-mobile-close"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/x.png?2dc3a154-1&amp;sv=449ce9ee" /></em>
								</li>
								<li>
									<div className="quickLoginHmtl clear">
										<input type="tel" className="code-txt normalInput fl" id="code" placeholder="请输入验证码" name="code" />
										<i style={{ display: 'none' }} className="reg-close fl" id="reg-code-close"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/x.png?2dc3a154-1&amp;sv=449ce9ee" /></i>
										<a className="btn_get get-code disable-code" id="code_btn" href="javascript:;">获取验证码</a>
									</div>
								</li>
							</ul>
							<input type="hidden" name="mtoken" value="b40023eba75e38ff84d112be553cb3fc" id="mtoken" />
							<input type="hidden" name="mtokenact" value="quick" id="mtokenact" />
							<a id="btn_quick_login" className="sub codeBtn disable-btn" rel="nofollow">登  录</a>
							<a style={{ display: 'none' }} id="normal_login" className="sub disable-btn" rel="nofollow">登  录</a>
							<div id="quick_l" className="other-action"><label className="freeLogin on"><input type="checkbox" className="ck" name="auto_quick" checked="checked" /><i className="before"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/label_on.png?63443b91-1&amp;sv=449ce9ee" /></i>两周内免登录</label><a href="//m.juanpi.com/user/forget" target="_parent" className="free-reg">忘记密码？</a>
							</div>
						</div>
					</form>
					<div className="wap-app">
						<h3 className="third-txt">第三方账号快速登录</h3>
						<div className="third-app clear">
							<a href="//user.juanpi.com/login/connect/type/qq?returnurl=https://m.juanpi.com/user/?select=4_1&amp;platform=wap&amp;app=zhe" className="qq" target="_parent" onclick="_paq.push(['trackEvent', 'login', 'click_login_third_qq', '', '']);"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/tencent.png?29cf7667-1&amp;sv=449ce9ee" />
							</a>
							<a href="//user.juanpi.com/login/connect/type/taobao?returnurl=https://m.juanpi.com/user/?select=4_1&amp;platform=wap&amp;app=zhe" className="tao" target="_parent" onclick="_paq.push(['trackEvent', 'login', 'click_login_third_taobao', '', '']);"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/taobao.png?b6b2268f-1&amp;sv=449ce9ee" />
							</a>
							<a href="//user.juanpi.com/login/connect/type/sina?returnurl=https://m.juanpi.com/user/?select=4_1&amp;platform=wap&amp;app=zhe" className="sina" target="_parent" onclick="_paq.push(['trackEvent', 'login', 'click_login_third_weibo', '', '']);"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/sina.png?e6100489-1&amp;sv=449ce9ee" />
							</a>

						</div>
						<ul className="protection">
							<li className="fl"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/unexpress.png?6a15f6a5-1&amp;sv=449ce9ee" />全场包邮</li>
							<li><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/search.png?597c2e82-1&amp;sv=449ce9ee" />100%人工质检</li>
							<li className="fr"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/seven.png?902d32d9-1&amp;sv=449ce9ee" />7天放心退</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}))