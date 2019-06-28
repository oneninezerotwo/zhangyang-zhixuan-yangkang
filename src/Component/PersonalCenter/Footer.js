import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="foot">
                <div className="foot-nav">
                    <a href="//m.juanpi.com">返回首页</a>
                    <a href="javascript:void(0);" className="joa_load_app">客户端</a>
                    <a href="//www.juanpi.com/" id="pcJuanpi">电脑版</a>
                </div>
                <div className="cut-line"></div>
                <div className="foot-copyright"></div>
                <h2>copyright © 武汉奇米网络科技有限公司</h2>
            </div>
        );
    }
}

export default Footer