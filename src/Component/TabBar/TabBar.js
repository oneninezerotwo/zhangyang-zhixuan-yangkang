import React, { Component } from 'react';

export default class Tabbar extends Component {
    render() {
        return (
            <div className="bottom-menu" style={{}}>
                <nav className="col4">
                    <a className="type3 bc" data-bc="[&quot;trackEvent&quot;, &quot;tab&quot;, &quot;click_navigation&quot;,&quot;item&quot;,&quot;首页&quot;]" style={{ width: '25%' }} href="https://m.juanpi.com/?select=1_1">
                        <img className="bg-icon" src="https://goods4.juancdn.com/bao/171127/6/0/5a1bce9a8150a16b4e766a8d_72x72.png" />首页</a>
                    <a className="type3 bc" data-bc="[&quot;trackEvent&quot;, &quot;tab&quot;, &quot;click_navigation&quot;,&quot;item&quot;,&quot;分类&quot;]" style={{ width: '25%' }} href="https://m.juanpi.com/cate/index?select=2_1">
                        <img className="bg-icon" src="https://goods5.juancdn.com/bao/171127/9/6/5a1bcef08150a176c87f92be_72x72.png" />分类</a>
                    <a className="type3 bc" data-bc="[&quot;trackEvent&quot;, &quot;tab&quot;, &quot;click_navigation&quot;,&quot;item&quot;,&quot;购物车&quot;]" style={{ width: '25%' }} href="https://m.juanpi.com/cart/?select=3_1">
                        <img className="bg-icon" src="https://goods2.juancdn.com/bao/170411/3/a/58ecaebaa43d1f6f166e6882_72x72.png" />购物车</a>
                    <a className="type3 bc" data-bc="[&quot;trackEvent&quot;, &quot;tab&quot;, &quot;click_navigation&quot;,&quot;item&quot;,&quot;我的卷皮&quot;]" style={{ width: '25%', color: '#FF464E' }} href="https://m.juanpi.com/user/?select=4_1">
                        <img className="bg-icon" src="https://goods1.juancdn.com/bao/170411/0/d/58ecaec6a43d1f5e7a188a96_72x72.png" />我的卷皮</a>
                </nav>
            </div>
        )
    }
}