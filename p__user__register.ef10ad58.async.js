(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{qq80:function(e,t,r){"use strict";var a=r("g09b"),s=r("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("14J3");var l=a(r("BMrR"));r("+L6B");var i=a(r("2/Rp"));r("jCWc");var u=a(r("kPKH"));r("Q9mQ");var n=a(r("diRs"));r("miYZ");var d=a(r("tsqr"));r("MXD1");var o=a(r("CFYs")),c=a(r("p0pE")),f=a(r("2Taf")),g=a(r("vZ4D")),m=a(r("l4Ni")),p=a(r("ujKo")),h=a(r("MhPg"));r("5NDa");var v=a(r("5rEg"));r("OaEy");var E=a(r("2fM7"));r("y8nQ");var w,y,M,b=a(r("Vl3Y")),F=r("Y2fQ"),k=s(r("q1tI")),P=a(r("wY1l")),q=r("MuoO"),C=a(r("3a4m")),N=a(r("vyRF")),S=b.default.Item,x=E.default.Option,R=v.default.Group,z={ok:k.default.createElement("div",{className:N.default.success},k.default.createElement(F.FormattedMessage,{id:"user-register.strength.strong"})),pass:k.default.createElement("div",{className:N.default.warning},k.default.createElement(F.FormattedMessage,{id:"user-register.strength.medium"})),poor:k.default.createElement("div",{className:N.default.error},k.default.createElement(F.FormattedMessage,{id:"user-register.strength.short"}))},D={ok:"success",pass:"normal",poor:"exception"},I=(w=(0,q.connect)(function(e){var t=e.userRegister,r=e.loading;return{userRegister:t,submitting:r.effects["userRegister/submit"]}}),w((M=function(e){function t(){var e,r;(0,f.default)(this,t);for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return r=(0,m.default)(this,(e=(0,p.default)(t)).call.apply(e,[this].concat(s))),r.state={count:0,confirmDirty:!1,visible:!1,help:"",prefix:"86"},r.interval=void 0,r.onGetCaptcha=function(){var e=59;r.setState({count:e}),r.interval=window.setInterval(function(){e-=1,r.setState({count:e}),0===e&&clearInterval(r.interval)},1e3)},r.getPasswordStatus=function(){var e=r.props.form,t=e.getFieldValue("password");return t&&t.length>9?"ok":t&&t.length>5?"pass":"poor"},r.handleSubmit=function(e){e.preventDefault();var t=r.props,a=t.form,s=t.dispatch;a.validateFields({force:!0},function(e,t){if(!e){var a=r.state.prefix;s({type:"userRegister/submit",payload:(0,c.default)({},t,{prefix:a})})}})},r.checkConfirm=function(e,t,a){var s=r.props.form;t&&t!==s.getFieldValue("password")?a((0,F.formatMessage)({id:"user-register.password.twice"})):a()},r.checkPassword=function(e,t,a){var s=r.state,l=s.visible,i=s.confirmDirty;if(t)if(r.setState({help:""}),l||r.setState({visible:!!t}),t.length<6)a("error");else{var u=r.props.form;t&&i&&u.validateFields(["confirm"],{force:!0}),a()}else r.setState({help:(0,F.formatMessage)({id:"user-register.password.required"}),visible:!!t}),a("error")},r.changePrefix=function(e){r.setState({prefix:e})},r.renderPasswordProgress=function(){var e=r.props.form,t=e.getFieldValue("password"),a=r.getPasswordStatus();return t&&t.length?k.default.createElement("div",{className:N.default["progress-".concat(a)]},k.default.createElement(o.default,{status:D[a],className:N.default.progress,strokeWidth:6,percent:10*t.length>100?100:10*t.length,showInfo:!1})):null},r}return(0,h.default)(t,e),(0,g.default)(t,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.userRegister,r=e.form,a=r.getFieldValue("mail");"ok"===t.status&&(d.default.success("\u6ce8\u518c\u6210\u529f\uff01"),C.default.push({pathname:"/user/register-result",state:{account:a}}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.props,t=e.form,r=e.submitting,a=t.getFieldDecorator,s=this.state,d=s.count,o=s.prefix,c=s.help,f=s.visible;return k.default.createElement("div",{className:N.default.main},k.default.createElement("h3",null,k.default.createElement(F.FormattedMessage,{id:"user-register.register.register"})),k.default.createElement(b.default,{onSubmit:this.handleSubmit},k.default.createElement(S,null,a("mail",{rules:[{required:!0,message:(0,F.formatMessage)({id:"user-register.email.required"})},{type:"email",message:(0,F.formatMessage)({id:"user-register.email.wrong-format"})}]})(k.default.createElement(v.default,{size:"large",placeholder:(0,F.formatMessage)({id:"user-register.email.placeholder"})}))),k.default.createElement(S,{help:c},k.default.createElement(n.default,{getPopupContainer:function(e){return e&&e.parentNode?e.parentNode:e},content:k.default.createElement("div",{style:{padding:"4px 0"}},z[this.getPasswordStatus()],this.renderPasswordProgress(),k.default.createElement("div",{style:{marginTop:10}},k.default.createElement(F.FormattedMessage,{id:"user-register.strength.msg"}))),overlayStyle:{width:240},placement:"right",visible:f},a("password",{rules:[{validator:this.checkPassword}]})(k.default.createElement(v.default,{size:"large",type:"password",placeholder:(0,F.formatMessage)({id:"user-register.password.placeholder"})})))),k.default.createElement(S,null,a("confirm",{rules:[{required:!0,message:(0,F.formatMessage)({id:"user-register.confirm-password.required"})},{validator:this.checkConfirm}]})(k.default.createElement(v.default,{size:"large",type:"password",placeholder:(0,F.formatMessage)({id:"user-register.confirm-password.placeholder"})}))),k.default.createElement(S,null,k.default.createElement(R,{compact:!0},k.default.createElement(E.default,{size:"large",value:o,onChange:this.changePrefix,style:{width:"20%"}},k.default.createElement(x,{value:"86"},"+86"),k.default.createElement(x,{value:"87"},"+87")),a("mobile",{rules:[{required:!0,message:(0,F.formatMessage)({id:"user-register.phone-number.required"})},{pattern:/^\d{11}$/,message:(0,F.formatMessage)({id:"user-register.phone-number.wrong-format"})}]})(k.default.createElement(v.default,{size:"large",style:{width:"80%"},placeholder:(0,F.formatMessage)({id:"user-register.phone-number.placeholder"})})))),k.default.createElement(S,null,k.default.createElement(l.default,{gutter:8},k.default.createElement(u.default,{span:16},a("captcha",{rules:[{required:!0,message:(0,F.formatMessage)({id:"user-register.verification-code.required"})}]})(k.default.createElement(v.default,{size:"large",placeholder:(0,F.formatMessage)({id:"user-register.verification-code.placeholder"})}))),k.default.createElement(u.default,{span:8},k.default.createElement(i.default,{size:"large",disabled:!!d,className:N.default.getCaptcha,onClick:this.onGetCaptcha},d?"".concat(d," s"):(0,F.formatMessage)({id:"user-register.register.get-verification-code"}))))),k.default.createElement(S,null,k.default.createElement(i.default,{size:"large",loading:r,className:N.default.submit,type:"primary",htmlType:"submit"},k.default.createElement(F.FormattedMessage,{id:"user-register.register.register"})),k.default.createElement(P.default,{className:N.default.login,to:"/user/login"},k.default.createElement(F.FormattedMessage,{id:"user-register.register.sign-in"})))))}}]),t}(k.Component),y=M))||y),V=b.default.create()(I);t.default=V},vyRF:function(e,t,r){e.exports={main:"antd-pro-pages-user-register-style-main",getCaptcha:"antd-pro-pages-user-register-style-getCaptcha",submit:"antd-pro-pages-user-register-style-submit",login:"antd-pro-pages-user-register-style-login",error:"antd-pro-pages-user-register-style-error",success:"antd-pro-pages-user-register-style-success",warning:"antd-pro-pages-user-register-style-warning","progress-pass":"antd-pro-pages-user-register-style-progress-pass",progress:"antd-pro-pages-user-register-style-progress"}}}]);