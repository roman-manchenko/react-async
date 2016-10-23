import * as React from 'react'

import './goodies.scss'

class Goodies extends React.Component <any, any>{
    render() {
        let url = window.location.protocol + '//' + window.location.host + '/' + "Settings.site.name" + '/'
        let img = window.location.protocol + '//' + window.location.host + '/static/img/resources/'

        return (<div className="goodies">
                <div className="dash-tab-title">
                    <h3>Goodies</h3>
                    <h3 className="sub-title">Here are some goodies for you to use to easily link to your
                        RebelMouse page from your blog, site, or anywhere else you'd like!</h3>
                </div>
            <div className="resource">
                <div className="resource-title"><h4>Buttons</h4></div>
                <div className="resource-note">
                    Save any of these icons to link to your RebelMouse front page.
                </div>
                <ul className="resource-buttons">
                    <li>
                        <i className="goodies-preview bt1"></i>
                        <a href="/static/img/resources/btn1.eps">EPS</a>
                        <a href="/static/img/resources/btn1.png">PNG</a>
                    </li>
                    <li>
                        <i className="goodies-preview bt2"></i>
                        <a href="/static/img/resources/btn2.eps">EPS</a>
                        <a href="/static/img/resources/btn2.png">PNG</a>
                    </li>
                    <li>
                        <i className="goodies-preview bt3"></i>
                        <a href="/static/img/resources/btn3.eps">EPS</a>
                        <a href="/static/img/resources/btn3.png">PNG</a>
                    </li>
                    <li>
                        <i className="goodies-preview bt4"></i>
                        <a href="/static/img/resources/btn4.eps">EPS</a>
                        <a href="/static/img/resources/btn4.png">PNG</a>
                    </li>
                    <li>
                        <i className="goodies-preview bt5"></i>
                        <a href="/static/img/resources/btn5.eps">EPS</a>
                        <a href="/static/img/resources/btn5.png">PNG</a>
                    </li>
                    <li>
                        <i className="goodies-preview bt6"></i>
                        <a href="/static/img/resources/btn6.eps">EPS</a>
                        <a href="/static/img/resources/btn6.png">PNG</a>
                    </li>
                </ul>
            </div>
            <div className="resource">
                <div className="resource-title"><h4>Follow Buttons</h4></div>
                <div className="resource-note">
                    You can copy the HTML below to automatically link to your RebelMouse site.
                </div>
                <ul className="resource-follow-buttons">
                {['follow-me-logo', 'follow-me-drk', 'follow-me-drk-logo'].map(
                    (itemName:string, i:number) => {
                        let val = '<a href="' + url +'"><img src="' + img + 'follow-me-logo.png"/></a>'
                        return (<li key={i}>
                            <a href="#"><i className="icons follow-me-logo"></i></a>
                            <input onFocus={this.onFocus} readOnly={true} value={val}/>
                        </li>)
                    }
                )}
                </ul>
            </div>
            <div className="resource hidden">
                <div className="resource-title">The Bookmarklet Button</div>
                <div className="resource-note">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </div>
                <div className="resource-bookmarklet">
                    <a href="#"><i className="icons stick-btn"></i></a>
                </div>
            </div>
            <div className="resource">
                <div className="resource-title"><h4>Logo and Artwork</h4></div>
                <div className="resource-note">
                    If you're writing a piece on RebelMouse (or just love the Mouse!), you might find
                    these additional images helpful. Feel free to use any of them as long as you link
                    back to us.
                </div>
                <ul className="resource-logo">
                    <li>
                        <div className="item"><i className="goodies-preview logo1"></i></div>
                        <a href="/static/img/resources/TextLogo-Light.eps" target="_blank">EPS</a>
                        <a href="/static/img/resources/TextLogo-Light.png" target="_blank">PNG</a>
                    </li>
                    <li>
                        <div className="item"><i className="goodies-preview logo2"></i></div>
                        <a href="/static/img/resources/TextLogo-Dark.eps" target="_blank">EPS</a>
                        <a href="/static/img/resources/TextLogo-Dark.png" target="_blank">PNG</a>
                    </li>
                </ul>
                <ul className="resource-artwork">
                    <li>
                        <div className="item"><i className="goodies-preview artwork1"></i></div>
                        <div><a href="/static/img/resources/TheMouse.eps" target="_blank">EPS</a>
                        <a href="/static/img/resources/TheMouse.png" target="_blank">PNG</a></div>
                    </li>
                    <li>
                        <div className="item"><i className="goodies-preview artwork2"></i></div>
                        <div><a href="/static/img/resources/TheMouseMono-LightHead.eps" target="_blank">EPS</a>
                        <a href="/static/img/resources/TheMouseMono-Light.png" target="_blank">PNG</a></div>
                    </li>
                    <li>
                        <div className="item"><i className="goodies-preview artwork3"></i></div>
                        <div><a href="/static/img/resources/TheMouseMono-Light.eps" target="_blank">EPS</a>
                        <a href="/static/img/resources/TheMouseMono-LightHead.png" target="_blank">PNG</a></div>
                    </li>
                    <li>
                        <div className="item item-gr"><i className="goodies-preview artwork4"></i></div>
                        <div><a href="/static/img/resources/TheMouseMono-Dark.eps" target="_blank">EPS</a>
                        <a href="/static/img/resources/TheMouseMono-Dark.png" target="_blank">PNG</a></div>
                    </li>
                </ul>
                <ul className="resource-artwork">
                    <li>
                        <div className="item"><i className="goodies-preview artwork5"></i></div>
                        <div><a href="/static/img/resources/TheMouse-128-128.png" target="_blank">PNG 128x128</a></div>
                    </li>
                    <li>
                        <div className="item"><i className="goodies-preview artwork6"></i></div>
                        <div><a href="/static/img/resources/TheMouse-64-64.png" target="_blank">PNG 64x64</a></div>
                    </li>
                    <li>
                        <div className="item"><i className="goodies-preview artwork7"></i></div>
                        <div><a href="/static/img/resources/TheMouse-32-32.png" target="_blank">PNG 32x32</a></div>
                    </li>
                    <li>
                        <div className="item"><i className="goodies-preview artwork8"></i></div>
                        <div><a href="/static/img/resources/circle mouse.png" target="_blank">PNG 32x32</a></div>
                    </li>
                </ul>
            </div>
            </div>
        )
    }
    private onFocus = (event: any) => {
        event.target.select();
    }
}

export default Goodies
