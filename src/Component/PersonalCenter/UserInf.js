import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="userBox">
                {/* <!-- 新增我的订单入口 --> */}
				<a href="//m.juanpi.com/order" className="user-item-horizontal">
                    <span>我的订单</span>
                    <span className="iconfont icon-liebiaojiantou fr"></span>
                    <span className="label fr">全部订单</span>
                </a>
                <div className="userItem">
                    {/* <!-- 新增横菜单 --> */}
					<a href="//m.juanpi.com/order/index/t/1">
                        <em className="iconfont icon-daifukuan"></em><span className="text">待付款</span>					</a>
                    <a href="//m.juanpi.com/order/index/t/13">
                        <em className="iconfont icon-daichengtuan"></em><span className="text">待成团</span>					</a>
                    <a href="//m.juanpi.com/order/index/t/14">
                        <em className="iconfont icon-daishouhuo"></em><span className="text">待收货</span>					</a>
                    <a href="//m.juanpi.com/refund/backlist">
                        <em className="iconfont icon-tuikuanshouhou"></em><span className="text">退款/售后</span>
                    </a>
                </div>
                {/* <!-- 模块广告 --> */}
				<div id="banner_block"></div>
                <div id="module-ad"></div>

                <div className="userItems">
                    <a href="//m.juanpi.com/coupon" className="user-item-horizontal">
                        <span>我的优惠券</span>
                        <span className="iconfont icon-liebiaojiantou fr"></span>
                    </a>

                    <a href="//m.juanpi.com/myfavorite" className="user-item-horizontal">
                        <span>
                            我的收藏
													</span>
                        <span className="iconfont icon-liebiaojiantou fr">
                            <i className="sc_circle"></i>
                        </span>
                    </a>
                    <a href="https://tuan.juanpi.com/pintuan/my" className="user-item-horizontal">
                        <span>我的拼团</span>
                        <span className="iconfont icon-liebiaojiantou fr"></span>

                    </a>
                    {/* <!--<a href="https://m.juanpi.com/pay/card_confirm?pf=2" className="user-item-horizontal" onclick="_paq.push(['trackEvent','center','click_center_item', 'item','vip'])">
                        <span>至尊会员卡</span>
                        <span className="iconfont icon-liebiaojiantou fr"></span>
                        <span className="label fr">办理即享9折</span>
                    </a>--> */}
					<a href="https://mact.juanpi.com/couponlist_leaderfree" className="user-item-horizontal">
                        <span>我的免单券</span>
                        <span className="iconfont icon-liebiaojiantou fr"></span>
                        <span className="label fr">0张</span>

                    </a>
                    <a href="https://m.juanpi.com/jieqian?imageProtocol=0" className="user-item-horizontal">
                        <span>借钱</span>
                        <span className="iconfont icon-liebiaojiantou fr"></span>
                        <span className="label fr">新用户免费领1000元</span>
                    </a>
                </div>
                <div className="userItems">
                    <a href="//m.juanpi.com/service/index" className="user-item-horizontal">
                        <span>客服中心</span>
                        <span className="iconfont icon-liebiaojiantou fr"></span>

                    </a>
                    <a href="//m.juanpi.com/about/juanpi" className="user-item-horizontal no-bottom">
                        <span>关于卷皮</span>
                        <span className="iconfont icon-liebiaojiantou fr"></span>

                    </a>
                </div>
                <input type="hidden" id="isBoxShow" name="isBoxShow" value="0"/>
                    <input type="hidden" id="fromLoginUrl" name="fromLoginUrl" value=""/>
			</div>
                    )
                }
}