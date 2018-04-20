if (self.CavalryLogger) { CavalryLogger.start_js(["5q0cf"]); }

__d("DeferredComponent.react",["React","createCancelableFunction","gkx"],(function a(b,c,d,e,f,g){__p&&__p();var h,i,j=c("React").PropTypes;h=babelHelpers.inherits(k,c("React").Component);i=h&&h.prototype;function k(l,m){"use strict";__p&&__p();i.constructor.call(this,l,m);this.$DeferredComponent1=function(p){this.setState({ComponentClass:p},function(){this.props.onComponentLoad&&this.props.onComponentLoad(p)}.bind(this))}.bind(this);var n=null;function o(p){n=p}this.props.deferredComponent(o);this.state={ComponentClass:n,cancelableModulesLoaded:c("createCancelableFunction")(this.$DeferredComponent1)}}k.prototype.componentDidMount=function(){"use strict";this.props.deferredComponent(this.state.cancelableModulesLoaded)};k.prototype.componentWillUnmount=function(){"use strict";this.state.cancelableModulesLoaded.cancel()};k.prototype.render=function(){"use strict";var l=this.state.ComponentClass;if(!l||this.props.deferredForcePlaceholder)return this.props.deferredPlaceholder;var m=this.props,n=m.deferredPlaceholder,o=m.deferredComponent,p=m.onComponentLoad,q=m.deferredForcePlaceholder,r=babelHelpers.objectWithoutProperties(m,["deferredPlaceholder","deferredComponent","onComponentLoad","deferredForcePlaceholder"]);return c("React").createElement(l,r)};k.propTypes={deferredPlaceholder:j.element.isRequired,deferredComponent:j.func.isRequired,onComponentLoad:j.func,deferredForcePlaceholder:j.bool};f.exports=k}),null);
__d("PerfHelperUtils",["cx","DeferredComponent.react","JSResource","React"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j;i=babelHelpers.inherits(k,c("React").PureComponent);j=i&&i.prototype;k.prototype.render=function(){var m=this.props,n=m.moduleId,o=m.timeLimitSecs,p=m.timeSpentSecs;return c("React").createElement(c("DeferredComponent.react"),{deferredPlaceholder:c("React").createElement("div",null),deferredComponent:function q(r){c("JSResource")("Tooltip.react").__setRef("PerfHelperUtils").load().done(r)},className:"_5_my",tooltip:"This bootloaded component has a red border\n          because "+n+"\n          took over "+o+" seconds ("+p+"s) to load"},this.props.children)};function k(){i.apply(this,arguments)}var l={RedBorderedInnerComponent:k};f.exports=l}),null);
__d("PerfUtils",["cx","React","performanceNow","PerfHelperUtils"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=c("React").Component,j=c("PerfHelperUtils").RedBorderedInnerComponent;function k(n,o){__p&&__p();var p,q;p=babelHelpers.inherits(r,i);q=p&&p.prototype;r.prototype.componentDidMount=function(){"use strict";o()};r.prototype.render=function(){"use strict";return c("React").createElement(n,this.props)};function r(){"use strict";p.apply(this,arguments)}return r}function l(n,o,p){__p&&__p();var q,r,s=1e4,t=c("performanceNow")()-p;if(t<s)return n;var u=s/1e3,v=Math.round(t)/1e3;q=babelHelpers.inherits(w,i);r=q&&q.prototype;w.prototype.componentDidMount=function(){"use strict"};w.prototype.render=function(){"use strict";return c("React").createElement("div",{className:"_4ez8"},c("React").createElement(j,{moduleId:o,timeLimitSecs:u,timeSpentSecs:v},c("React").createElement(n,this.props)))};function w(){"use strict";q.apply(this,arguments)}return w}var m={appendListener:k,markRedInDev:l};f.exports=m}),null);
__d("BootloadedComponent.react",["DeferredComponent.react","JSResource","PerfUtils","React","TimeSlice","performanceNow"],(function a(b,c,d,e,f,g){__p&&__p();var h,i,j=c("React").Component,k=c("PerfUtils").appendListener,l=c("PerfUtils").markRedInDev;h=babelHelpers.inherits(m,j);i=h&&h.prototype;function m(){var n,o;"use strict";for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=i.constructor).call.apply(n,[this].concat(q)),this.$BootloadedComponent1=function(s){var t=this.props.isContinuation,u=void 0,v=t?c("TimeSlice").PropagationType.CONTINUATION:c("TimeSlice").PropagationType.EXECUTION;c("TimeSlice").guard(c("JSResource").loadAll,"BootloadedComponent load all JSResource",{propagationType:v})([this.props.bootloadLoader],function(w){w=this.props.onComponentDidMount?k(w,this.props.onComponentDidMount):w;s(w)}.bind(this))}.bind(this),o}m.prototype.UNSAFE_componentWillMount=function(){"use strict";this.props.onBootloaderWillMount&&this.props.onBootloaderWillMount()};m.prototype.render=function(){"use strict";var n=this.props,o=n.bootloadLoader,p=n.isContinuation,q=n.bootloadPlaceholder,r=n.bootloadForcePlaceholder,s=babelHelpers.objectWithoutProperties(n,["bootloadLoader","isContinuation","bootloadPlaceholder","bootloadForcePlaceholder"]);return c("React").createElement(c("DeferredComponent.react"),babelHelpers["extends"]({deferredPlaceholder:q,deferredComponent:this.$BootloadedComponent1,deferredForcePlaceholder:r},s))};m.defaultProps={isContinuation:true};f.exports=Object.assign(m,{create:function n(f){__p&&__p();var o,p;o=babelHelpers.inherits(q,c("React").Component);p=o&&o.prototype;q.prototype.render=function(){"use strict";var r=this.props,s=r.bootloadLoader,t=babelHelpers.objectWithoutProperties(r,["bootloadLoader"]);return c("React").createElement(m,babelHelpers["extends"]({bootloadLoader:f,bootloadPlaceholder:c("React").createElement("div",null)},t))};function q(){"use strict";o.apply(this,arguments)}q.displayName="BootloadedComponent("+f.getModuleId()+")";return q}})}),null);
__d("TabBarItem.react",["cx","React","ReactDOM","Focus","Event","Keys","joinClasses"],(function a(b,c,d,e,f,g,h){__p&&__p();var i,j,k,l,m=c("React").PropTypes;i=babelHelpers.inherits(n,c("React").Component);j=i&&i.prototype;n.prototype.render=function(){"use strict";return c("React").createElement("li",this.props,this.props.children)};function n(){"use strict";i.apply(this,arguments)}k=babelHelpers.inherits(o,c("React").Component);l=k&&k.prototype;function o(){__p&&__p();var p,q;"use strict";for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=l.constructor).call.apply(p,[this].concat(s)),this.focus=function(){if(this.props.focused)c("Focus").set(this.refs.tab)}.bind(this),this.onKeyDown=function(event){var u=c("Event").getKeyCode(event);if(u===c("Keys").SPACE&&this.refs.tab){c("ReactDOM").findDOMNode(this.refs.tab).click();c("Event").prevent(event)}}.bind(this),q}o.prototype.render=function(){"use strict";var p=this.props,q=p.selected,r=p.hideFocusRing,s=p.shouldWrapTab,t="_45hc"+(q?" _1hqh":""),u="_3m1v"+(r?" _468f":"");if(s)return this.$TabBarItem1(t,u);return this.$TabBarItem2(c("joinClasses")(t,u))};o.prototype.$TabBarItem1=function(p,q){"use strict";__p&&__p();var r=this.props,s=r.className,t=r.href,u=r.ajaxify,v=r.tabIndex,w=r.rel,x=r.target,y=r.selected,z=r.wrapper,A=r.mockSpacebarClick,B=babelHelpers.objectWithoutProperties(r,["className","href","ajaxify","tabIndex","rel","target","selected","wrapper","mockSpacebarClick"]);t=t||"#";var C={};if(A)C.onKeyDown=this.onKeyDown;var D=c("React").createElement("a",{ref:"tab",ajaxify:u,href:t,role:"tab",rel:w,target:x,tabIndex:v,className:q,"aria-selected":y},this.props.children);delete B.focused;delete B.hideFocusRing;delete B.shouldWrapTab;return c("React").createElement(z,babelHelpers["extends"]({},B,{tabIndex:null,className:c("joinClasses")(s,p),role:"presentation"}),c("React").cloneElement(D,C))};o.prototype.$TabBarItem2=function(p){"use strict";__p&&__p();var q=this.props,r=q.className,s=q.href,t=q.selected,u=q.mockSpacebarClick,v=babelHelpers.objectWithoutProperties(q,["className","href","selected","mockSpacebarClick"]);s=s||"#";var w={};if(u)w.onKeyDown=this.onKeyDown;delete v.menuAlignh;delete v.menuClassName;delete v.tabComponent;delete v.maxDropdownHeight;delete v.focused;delete v.hideFocusRing;delete v.wrapper;delete v.shouldWrapTab;var x=c("React").createElement("a",babelHelpers["extends"]({},v,{href:s,ref:"tab",role:"tab",className:c("joinClasses")(r,p),"aria-selected":t}),this.props.children);return c("React").cloneElement(x,w)};o.prototype.componentDidMount=function(){"use strict";this.focus()};o.prototype.componentDidUpdate=function(){"use strict";this.focus()};o.propTypes={wrapper:m.func.isRequired,shouldWrapTab:m.bool,tabIndex:m.oneOf([-1,0]),selected:m.bool,focused:m.bool,hideFocusRing:m.bool,mockSpacebarClick:m.bool};o.defaultProps={wrapper:n,shouldWrapTab:true,tabIndex:-1,selected:false,focused:false,hideFocusRing:false,mockSpacebarClick:true};f.exports=o}),null);
__d("TabBarItemWrapper.react",["React"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i;h=babelHelpers.inherits(j,c("React").Component);i=h&&h.prototype;j.getComponent=function(k){return k.component};j.prototype.render=function(){return this.props.component};function j(){h.apply(this,arguments)}f.exports=j}),null);
__d("TabBar.react",["cx","fbt","invariant","React","ReactDOM","TabBarItem.react","Event","RTLKeys","BootloadedComponent.react","JSResource","TabBarItemWrapper.react","joinClasses","setTimeout","clearTimeout","emptyFunction"],(function a(b,c,d,e,f,g,h,i,j){__p&&__p();var k=c("React").PropTypes,l=i._("More"),m=c("React").createClass({displayName:"TabBar",_blurTimeout:null,propTypes:{activeTabKey:k.string,alwaysShowActive:k.bool,className:k.string,defaultActiveTabKey:k.string,dropdownMenuAlignh:k.string,dropdownMenuClassName:k.string,maxTabsVisible:k.number.isRequired,moreLabel:k.node,onTabClick:k.func.isRequired,orientation:k.oneOf(["horizontal","vertical"]).isRequired,dropdownTabComponent:k.func.isRequired,onWidthCalculated:k.func.isRequired,onHeightCalculated:k.func.isRequired,shouldCalculateVisibleTabs:k.bool,maxDropdownHeight:k.number},getDefaultProps:function n(){return{alwaysShowActive:true,className:"",dropdownTabComponent:c("TabBarItem.react"),maxTabsVisible:Infinity,moreLabel:l,onTabClick:c("emptyFunction").thatReturnsTrue,onHeightCalculated:c("emptyFunction"),onWidthCalculated:c("emptyFunction"),orientation:"horizontal",shouldCalculateVisibleTabs:true}},getInitialState:function n(){return{activeTabKey:this.props.activeTabKey||this.props.defaultActiveTabKey,focusedTabKey:null,previousFocusedTabKey:null,visibleTabsCount:0,shouldCalculateVisibleTabs:true,hideFocusRing:true}},setWidth:function n(o){c("ReactDOM").findDOMNode(this).style.width=o;this.setState({shouldCalculateVisibleTabs:true})},setHeight:function n(o){c("ReactDOM").findDOMNode(this).style.height=o;this.setState({shouldCalculateVisibleTabs:true})},render:function n(){__p&&__p();var o=this.getTabs(),p=o.length,q=this.getActiveTabIndex(),r=o[q],s=this.getActiveTabIndex(true),t,u,v;if(r)t=r.key;var w=this.props.dropdownTabComponent,x=c("React").createElement(w,{key:"_dropdown",ref:"more",className:"_45hd _2pik"},c("React").createElement("span",{className:"_1b0"},this.props.moreLabel));if(this.state.shouldCalculateVisibleTabs){u=o.map(function(H,I){return this._wrapTab(H,I,t,null,s,false,false)}.bind(this));if(p>2)u.push(x)}else{var y=this._groupTabsByVisibility();u=y.visibleTabs;v=y.extraTabs;var z=this._isDropdownSelected(),A=this.state.visibleTabsCount,B=this.state.focusedTabKey;B=B&&this.getFocusedTabIndex()===-1?m.MORE_TAB_KEY:B;u=u.map(function(H,I){return this._wrapTab(H,I,t,B,s,true,true)}.bind(this));v=v.map(function(H,I){return this._wrapTab(H,I,t,null,s,true,false)}.bind(this));if(v.length){var C;if(A===0&&r)C=r;var D=C&&C.props.children||this.props.moreLabel,E="_dropdown",F=c("React").createElement(c("BootloadedComponent.react"),{bootloadLoader:c("JSResource")("TabBarDropdownItem.react").__setRef("TabBar.react"),bootloadPlaceholder:x,menuAlignh:this.props.dropdownMenuAlignh,menuClassName:this.props.dropdownMenuClassName,selected:z,focused:B===m.MORE_TAB_KEY,hideFocusRing:this.state.hideFocusRing,onMouseDown:this.onMouseDown,onFocus:this.onFocus.bind(this,E),onBlur:this.onBlur,key:E,ref:"more",label:D,tabComponent:this.props.dropdownTabComponent,maxDropdownHeight:this.props.maxDropdownHeight},v);if(A===0)u=F;else u.push(F)}}var G=Object.assign({},this.props);delete G.moreLabel;delete G.maxTabsVisible;delete G.onTabClick;delete G.activeTabKey;delete G.onHeightCalculated;delete G.onWidthCalculated;delete G.orientation;delete G.alwaysShowActive;delete G.dropdownTabComponent;delete G.shouldCalculateVisibleTabs;return c("React").createElement("ul",babelHelpers["extends"]({},G,{className:c("joinClasses")(this.props.className,"_43o4"+(this.props.orientation==="horizontal"?" _4470":"")+(this.props.orientation==="vertical"?" _4471":"")),role:"tablist",onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp}),u)},componentDidMount:function n(){this._calculateVisibleTabs();this._calculateDimensions()},componentWillUnmount:function n(){c("clearTimeout")(this._blurTimeout)},UNSAFE_componentWillReceiveProps:function n(o){this.setState({shouldCalculateVisibleTabs:true,activeTabKey:o.activeTabKey||this.state.activeTabKey})},shouldComponentUpdate:function n(o,p){if(this.state.focusedTabKey&&!p.focusedTabKey)return false;if(!this.state.focusedTabKey&&!p.focusedTabKey&&this.state.previousFocusedTabKey&&!p.previousFocusedTabKey)return false;return true},componentDidUpdate:function n(){if(this.state.shouldCalculateVisibleTabs)this._calculateVisibleTabs();this._calculateDimensions()},_calculateDimensions:function n(){if(this.props.orientation==="vertical")this._calculateWidth();else this._calculateHeight()},_calculateWidth:function n(){this.props.onWidthCalculated(c("ReactDOM").findDOMNode(this).clientWidth)},_calculateHeight:function n(){this.props.onHeightCalculated(c("ReactDOM").findDOMNode(this).clientHeight)},_calculateVisibleTabs:function n(){__p&&__p();var o=this.getTabs(),p=o.length,q=Object.keys(this.refs).map(function(z){return this._measure(this.refs[z])}.bind(this)),r=this._measure(this),s=this._measure(this.refs.more),t=Math.min(p,this.props.maxTabsVisible);if(!this.props.shouldCalculateVisibleTabs){this.setState({visibleTabsCount:t,shouldCalculateVisibleTabs:false});return}var u=this.getActiveTabIndex();if(this.props.alwaysShowActive&&u!==-1){o.unshift(o.splice(u,1)[0]);q.unshift(q.splice(u,1)[0])}t=0;var v=0;for(var w=0;w<p;w++){var x=q[w],y=o[w].key||"";if(v+x>r&&!y.startsWith("visual_poll_")){if(t>0&&p>2)while(t>0&&(v+s>r||p-t<2)){t--;v-=q[t]}else t=0;break}t++;v+=x}this.setState({visibleTabsCount:Math.min(t,this.props.maxTabsVisible),shouldCalculateVisibleTabs:false})},_measure:function n(o){var p=c("ReactDOM").findDOMNode(o);if(!p||!(p instanceof HTMLElement))return 0;return this.props.orientation==="vertical"?p.offsetHeight:p.offsetWidth},getActiveTabIndex:function n(){var o=arguments.length<=0||arguments[0]===undefined?false:arguments[0],p=this.state.activeTabKey,q=[];if(o){var r=this._groupTabsByVisibility(),s=r.visibleTabs;q=s}else q=this.getTabs();return q.findIndex(function(t){return p!=null&&t&&t.key===p})},getFocusedTabIndex:function n(){var o=this.state.focusedTabKey||this.state.previousFocusedTabKey,p=this._groupTabsByVisibility(),q=p.visibleTabs;return q.findIndex(function(r){return o!=null&&r&&r.key===o})},getFocusedTab:function n(){var o=this.state.focusedTabKey,p=this._groupTabsByVisibility(),q=p.visibleTabs,r=q.findIndex(function(s){return o!=null&&s&&s.key===o});return q[r]},onClick:function n(o,event){var p=this.props.onTabClick(o,event);if(p!==false&&this.isMounted())this.activateTab(o)},onMouseDown:function n(){this.setState({hideFocusRing:true})},onKeyDown:function n(event){__p&&__p();var o=c("Event").getKeyCode(event);switch(o){case c("RTLKeys").UP:case c("RTLKeys").getRight():case c("RTLKeys").DOWN:case c("RTLKeys").getLeft():var p,q,r,s=this._groupTabsByVisibility(),t=s.visibleTabs,u=o===c("RTLKeys").UP||o===c("RTLKeys").getLeft(),v=u?-1:1,w=u?0:t.length-1,x=this.getFocusedTabIndex();if(x===-1&&v===-1)x=t.length;if(x===-1)r=null;else if(x===w&&v===1)r=m.MORE_TAB_KEY;else{p=u?Math.max:Math.min;q=p(x+v,w);r=t[q].key}if(r)this.setState({focusedTabKey:r,hideFocusRing:false});break;case c("RTLKeys").RETURN:var y=this.getFocusedTab();if(y){var z=y.key,A=this.props.onTabClick(z,event);if(A!==false&&this.isMounted())this.activateTab(z)}break}},onKeyUp:function n(event){if(c("Event").getKeyCode(event)===c("RTLKeys").TAB&&this.state.hideFocusRing)this.setState({hideFocusRing:false})},onFocus:function n(o,event){c("clearTimeout")(this._blurTimeout);if(o!==this.state.focusedTabKey){this.setState({focusedTabKey:o,previousFocusedTabKey:null});event.preventDefault();event.stopPropagation()}},onBlur:function n(){this.setState({previousFocusedTabKey:this.state.focusedTabKey,focusedTabKey:null});this._blurTimeout=c("setTimeout")(function(){this.setState({previousFocusedTabKey:null})}.bind(this),m.BLUR_TIMEOUT)},_wrapTab:function n(o,p,q,r,s,t,u){__p&&__p();o.key!==m.MORE_TAB_KEY||j(0);var v=q!=null&&q===o.key,w=r!=null&&r===o.key,x={selected:v,focused:w,tabIndex:v||s===-1&&p===0?0:-1,hideFocusRing:this.state.hideFocusRing};if(t){x.onClick=this.onClick.bind(this,o.key);x.onMouseDown=this.onMouseDown}else x.mockSpacebarClick=false;if(u){x.onFocus=this.onFocus.bind(this,o.key);x.onBlur=this.onBlur}o=c("React").cloneElement(o,x);return c("React").createElement(c("TabBarItemWrapper.react"),{key:o.key,component:o,ref:p})},activateTab:function n(o){if(o)this.setState({activeTabKey:o,focusedTabKey:o,shouldCalculateVisibleTabs:true})},getTabs:function n(){var o=[];c("React").Children.forEach(this.props.children,function(p){if(p)o.push(p)});return o},_groupTabsByVisibility:function n(){__p&&__p();var o=this.state.visibleTabsCount,p=this.getTabs(),q=this.getActiveTabIndex(),r,s,t;if(!this.props.alwaysShowActive||q<o||o===0){t=p.slice(o);s=p.slice(0,o)}else{r=p.splice(q,1)[0];var u=o>0?o-1:0;t=p.slice(u);s=p.slice(0,u);s.push(r)}return{visibleTabs:s,extraTabs:t}},_isDropdownSelected:function n(){var o=this.state.visibleTabsCount,p=this.getActiveTabIndex(),q=!this.props.alwaysShowActive&&p>=o||o===0&&p>-1;return q}});m.MORE_TAB_KEY="_moreTab";m.BLUR_TIMEOUT=120;m.Tab=c("TabBarItem.react");f.exports=m}),null);
__d("UITinyViewportAction",["Arbiter","ArbiterMixin","BanzaiScuba","CSS","Event","getDocumentScrollElement","queryThenMutateDOM"],(function a(b,c,d,e,f,g){__p&&__p();var h=document.documentElement,i,j,k,l,m=false,n=false,o=false,p=false,q={init:function r(s){__p&&__p();var t=c("queryThenMutateDOM").bind(null,function(){l=l||c("getDocumentScrollElement")();j=h.clientWidth<l.scrollWidth-1;k=h.clientHeight<400;i=k||j},function(){__p&&__p();if(i!==m||j!==n||k!==o){c("CSS").conditionClass(h,"tinyViewport",i);c("CSS").conditionClass(h,"tinyWidth",j);c("CSS").conditionClass(h,"tinyHeight",k);c("CSS").conditionClass(h,"canHaveFixedElements",!i);q.inform("change",i);c("Arbiter").inform("tinyViewport/change",{tiny:i,tinyWidth:j,tinyHeight:k},c("Arbiter").BEHAVIOR_STATE);m=i;n=j;o=k}if(!p){var u=new(c("BanzaiScuba"))("www_tinyview_port",null,{addBrowserFields:true});u.addInteger("clientWidth",h.clientWidth);u.addInteger("clientHeight",h.clientHeight);u.addNormal("view",i?"tiny":"normal");u.post();p=true}},"TinyViewport");t();c("Arbiter").subscribe("quickling/response",t);c("Event").listen(window,"resize",t)},isTiny:function r(){return i},isTinyWidth:function r(){return j},isTinyHeight:function r(){return k}};Object.assign(q,c("ArbiterMixin"));f.exports=q}),null);
__d("XUIPageNavigationItem.react",["cx","AsyncRequest","React","TabBarItem.react","joinClasses"],(function a(b,c,d,e,f,g,h){__p&&__p();var i,j,k=c("React").PropTypes;i=babelHelpers.inherits(l,c("React").Component);j=i&&i.prototype;function l(){__p&&__p();var m,n;"use strict";for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.onClick=function(r,event){if(this.props.ajaxify&&this.props.rel==="async")new(c("AsyncRequest"))(this.props.ajaxify).send();if(this.props.onClick)return this.props.onClick(r,event);return true}.bind(this),n}l.prototype.render=function(){"use strict";__p&&__p();var m="_5vwz"+(this.props.selected?" _5vwy":""),n=this.props;if(n.ajaxify&&n.rel==="async"){var o=n,p=o.ajaxify,q=o.rel,r=babelHelpers.objectWithoutProperties(o,["ajaxify","rel"]);n=r;n.onClick=this.onClick}var s=this.props.children,t=void 0,u=typeof s==="string"?s:c("React").isValidElement(s)&&s.props.children&&s.props.children.textContent;if(u){s=c("React").createElement("div",{className:"_4xjz"},s);t=c("React").createElement("div",{className:"_4xj-","aria-hidden":true},u)}return c("React").createElement(c("TabBarItem.react"),babelHelpers["extends"]({},n,{className:c("joinClasses")(this.props.className,m)}),c("React").createElement("div",{className:"_4jq5"},s,t),c("React").createElement("span",{className:"_13xf"}))};l.propTypes={selected:k.bool};l.defaultProps={selected:false};f.exports=l}),null);
__d("XUIPageNavigationGroup.react",["React","TabBar.react","XUIPageNavigationItem.react"],(function a(b,c,d,e,f,g){__p&&__p();var h,i,j=c("React").PropTypes;h=babelHelpers.inherits(k,c("React").Component);i=h&&h.prototype;k.prototype.componentDidUpdate=function(){"use strict";this.refs.bar.setWidth(this.props.width)};k.prototype.componentDidMount=function(){"use strict";this.refs.bar.setWidth(this.props.width)};k.prototype.render=function(){"use strict";return c("React").createElement(c("TabBar.react"),babelHelpers["extends"]({},this.props,{ref:"bar"}),this.props.children)};function k(){"use strict";h.apply(this,arguments)}k.propTypes={moreLabel:j.string,maxTabsVisible:function l(m,n,o){var p=m[n];if(p!=null&&!(typeof p==="number"&&p>=0))throw new Error("Invalid `"+n+"` supplied to `"+o+"`, expected positive integer.")},width:j.string};k.defaultProps={maxTabsVisible:Infinity};k.Item=c("XUIPageNavigationItem.react");f.exports=k}),null);
__d("XUIPageNavigation.react",["csx","cx","invariant","Arbiter","CSS","DOMQuery","Event","LeftRight.react","React","ReactDOM","SubscriptionsHandler","UITinyViewportAction","Vector","ViewportBounds","XUIPageNavigationGroup.react","joinClasses","throttle"],(function a(b,c,d,e,f,g,h,i,j){__p&&__p();var k,l,m=c("React").PropTypes,n=15;k=babelHelpers.inherits(o,c("React").PureComponent);l=k&&k.prototype;function o(){__p&&__p();var p,q;"use strict";for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=l.constructor).call.apply(p,[this].concat(s)),this.state={activeTabKey:undefined,leftWidth:null},this.onTabClick=function(u,event){if(this.props.onTabClick){var v=this.props.onTabClick(u,event);if(!v)return v}c("Arbiter").inform("pageNavigation/tabChanged");if(event.button===0)this.setState({activeTabKey:u});return true}.bind(this),this.resizeNavbarGroups=function(){__p&&__p();if(!this.refs.left)return;var u=c("ReactDOM").findDOMNode(this).clientWidth;if(isNaN(u)||u===0)return;if(!isNaN(this.$XUIPageNavigation7)&&this.refs.right){var v;v=u-this.$XUIPageNavigation7-n;if(this.$XUIPageNavigation7<v)v=this.$XUIPageNavigation7-n;this.setState({rightWidth:v+"px"})}if(!isNaN(this.$XUIPageNavigation6)){var w;w=u-this.$XUIPageNavigation6-n;if(w<this.$XUIPageNavigation6)w=this.$XUIPageNavigation6+n;this.setState({leftWidth:w+"px"})}else if(!this.refs.right)this.setState({leftWidth:u+"px"})}.bind(this),q}o.prototype.componentDidMount=function(){"use strict";__p&&__p();this.$XUIPageNavigation1=new(c("SubscriptionsHandler"))();this.resizeNavbarGroups();this.$XUIPageNavigation2();var p="^.fixed_elem._5vx1";this.wrapper=c("DOMQuery").scry(c("ReactDOM").findDOMNode(this),p)[0];if(this.wrapper){this.$XUIPageNavigation3();this.$XUIPageNavigation1.addSubscriptions(c("UITinyViewportAction").subscribe("change",function(){if(c("UITinyViewportAction").isTiny())this.$XUIPageNavigation4.remove();else this.$XUIPageNavigation3()}.bind(this)))}if(this.props.showDropShadowOnScroll&&(this.wrapper||c("DOMQuery").scry(c("ReactDOM").findDOMNode(this),"^._k").length)&&this.props.scrollThreshold!==null)this.$XUIPageNavigation5()};o.prototype.componentWillUnmount=function(){"use strict";this.$XUIPageNavigation1.release()};o.prototype.onWidthCalculated=function(p,q){"use strict";if(p)this.$XUIPageNavigation6=q;else this.$XUIPageNavigation7=q};o.prototype.render=function(){"use strict";__p&&__p();var p="_5vx2 _5vx4",q=c("joinClasses")(p,this.props.className),r=[],s=this.props.activeTabKey||this.state.activeTabKey||this.props.defaultActiveTabKey;c("React").Children.forEach(this.props.children,function(t,u){if(t===null)return;var v={onTabClick:this.onTabClick,activeTabKey:s,onWidthCalculated:this.onWidthCalculated.bind(this,u),ref:u?"right":"left",key:u};if(u===0)v.width=this.state.leftWidth;r.push(c("React").cloneElement(t,v))}.bind(this));r.length===1||r.length===2||j(0);return c("React").createElement("div",{className:q},c("React").createElement(c("LeftRight.react"),{className:"_5vx7",direction:this.props.floatDirection},r))};o.prototype.$XUIPageNavigation3=function(){"use strict";var p=this.wrapper.offsetHeight,q=c("ViewportBounds").getTop();this.$XUIPageNavigation4=c("ViewportBounds").addTop(q+p);c("Arbiter").subscribe("page_transition",function(){this.$XUIPageNavigation4.remove()})};o.prototype.$XUIPageNavigation2=function(){"use strict";this.$XUIPageNavigation1.addSubscriptions(c("Event").listen(window,"resize",c("throttle")(this.resizeNavbarGroups,30)))};o.prototype.$XUIPageNavigation5=function(){"use strict";this.$XUIPageNavigation1.addSubscriptions(c("Event").listen(window,"scroll",function(){var p=c("Vector").getScrollPosition().y>this.props.scrollThreshold;if(this.$XUIPageNavigation8===p)return;this.$XUIPageNavigation8=p;c("CSS").conditionClass(c("ReactDOM").findDOMNode(this),"_51j8",p)}.bind(this)))};o.propTypes={onTabClick:m.func,showDropShadowOnScroll:m.bool,scrollThreshold:m.number,floatDirection:m.oneOf(["left","right","both"])};o.defaultProps={showDropShadowOnScroll:true,scrollThreshold:0,floatDirection:"both"};o.Group=c("XUIPageNavigationGroup.react");o.Item=c("XUIPageNavigationGroup.react").Item;f.exports=o}),null);
__d("XUIPageNavigationShim",["DOMContainer.react","React","isNode"],(function a(b,c,d,e,f,g){__p&&__p();var h,i,j=function(){var m=0;return function(){return"XUIPageNavigationShim-"+m++}}();function k(m){__p&&__p();var n;if(m.children){n=m.children.map(function(p){if(typeof p==="object"&&typeof p.ctor==="function")return k(p);else if(c("isNode")(p))return c("React").createElement(c("DOMContainer.react"),{key:j()},p);else return p});if(n.length===1)n=n[0]}var o=m.ctor;return c("React").createElement(o,babelHelpers["extends"]({key:j()},m.props),n)}h=babelHelpers.inherits(l,c("React").Component);i=h&&h.prototype;l.prototype.render=function(){"use strict";return k(this.props)};function l(){"use strict";h.apply(this,arguments)}f.exports=l}),null);