"use strict";(self.webpackChunkimgur_web=self.webpackChunkimgur_web||[]).push([[8763],{nilk:(e,t,i)=>{i.d(t,{Z:()=>u});var n=i("lwsE"),a=i.n(n),r=i("W8MJ"),o=i.n(r),s=i("VZKN"),u=function(){function e(t){a()(this,e),this.animationState=t,this.x=.5*t.viewWidth,this.y=.5*t.viewHeight,this.startRadius=24,this.time=0,this.duration=.4,this.progress=0,this.complete=!1}return o()(e,[{key:"reset",value:function(){this.time=0,this.progress=0,this.complete=!1}},{key:"update",value:function(){this.time=Math.min(this.duration,this.time+this.animationState.timeStep),this.progress=s.SX.inBack(this.time,0,1,this.duration),this.complete=this.time===this.duration}},{key:"draw",value:function(){this.animationState.ctx.fillStyle="transparent",this.animationState.ctx.beginPath(),this.animationState.ctx.arc(this.x,this.y,this.startRadius*(1-this.progress),0,s.uo),this.animationState.ctx.fill()}}]),e}()},netK:(e,t,i)=>{i.d(t,{Z:()=>u});var n=i("lwsE"),a=i.n(n),r=i("W8MJ"),o=i.n(r),s=i("VZKN"),u=function(){function e(t){a()(this,e),this.animationState=t,this.x=.5*t.viewWidth,this.y=.5*t.viewHeight,this.r=24,this._progress=0,this.complete=!1}return o()(e,[{key:"reset",value:function(){this._progress=0,this.complete=!1}},{key:"draw",value:function(){this.animationState.ctx.fillStyle=this.animationState.loadingColor,this.animationState.ctx.beginPath(),this.animationState.ctx.arc(this.x,this.y,this.r,-s.pj,s.uo*this._progress-s.pj),this.animationState.ctx.lineTo(this.x,this.y),this.animationState.ctx.closePath(),this.animationState.ctx.fill()}},{key:"progress",set:function(e){this._progress=e<0?0:e>1?1:e,this.complete=this._progress>=1},get:function(){return this._progress}}]),e}()},hvCU:(e,t,i)=>{i.d(t,{Z:()=>u});var n=i("lwsE"),a=i.n(n),r=i("W8MJ"),o=i.n(r),s=i("VZKN"),u=function(){function e(t,i,n,r,o){a()(this,e),this.animationState=t,this.p0=i,this.p1=n,this.p2=r,this.p3=o,this.time=0,this.duration=3+2*Math.random(),this.color="#".concat(Math.floor(16777215*Math.random()).toString(16)),this.w=8,this.h=8,this.complete=!1}return o()(e,[{key:"update",value:function(){this.time=Math.min(this.duration,this.time+this.animationState.timeStep);var e=s.SX.outCubic(this.time,0,1,this.duration),t=(0,s.V1)(this.p0,this.p1,this.p2,this.p3,e),i=t.x-this.x,n=t.y-this.y;this.r=Math.atan2(n,i)+s.pj,this.sy=Math.sin(Math.PI*e*10),this.x=t.x,this.y=t.y,this.complete=this.time===this.duration}},{key:"draw",value:function(){this.animationState.ctx.save(),this.animationState.ctx.translate(this.x,this.y),this.animationState.ctx.rotate(this.r),this.animationState.ctx.scale(1,this.sy),this.animationState.ctx.fillStyle=this.color,this.animationState.ctx.fillRect(.5*-this.w,.5*-this.h,this.w,this.h),this.animationState.ctx.restore()}}]),e}()},aFY3:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i("lwsE"),a=i.n(n),r=function e(t,i){a()(this,e),this.x=t||0,this.y=i||0}},"79fG":(e,t,i)=>{i.d(t,{Z:()=>g});var n=i("lwsE"),a=i.n(n),r=i("W8MJ"),o=i.n(r),s=i("7W2i"),u=i.n(s),c=i("a1gu"),l=i.n(c),m=i("Nsbk"),h=i.n(m),p=i("q1tI"),d=(i("17x9"),i("MHWf")),f=i("VZKN");i("IMzE");function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,n=h()(e);if(t){var a=h()(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return l()(this,i)}}var g=function(e){u()(i,e);var t=v(i);function i(e){var n;return a()(this,i),(n=t.call(this,e)).canvas=p.createRef(),n}return o()(i,[{key:"componentDidMount",value:function(){this.run()}},{key:"componentDidUpdate",value:function(){this.run()}},{key:"shouldComponentUpdate",value:function(e){return this.props.run!==e.run}},{key:"run",value:function(){var e=this.props,t=e.viewWidth,i=e.viewHeight,n=e.loadSpeed,a=e.loadingColor,r={ctx:this.canvas.current.getContext("2d"),particles:[],phase:0,timeStep:1/70,viewWidth:t,viewHeight:i,loadSpeed:n,loadingColor:a},o=(0,f.Ke)(r),s=(0,f.Ir)(r);(0,f.Gc)(r),(0,d.U7)((0,f.ip)(r,o,s))}},{key:"render",value:function(){var e=this.props,t=e.className,i=e.viewWidth,n=e.viewHeight;return p.createElement("div",{className:"ThankYouConfetti ".concat(t)},p.createElement("canvas",{width:i,height:n,className:"ThankYouConfetti-canvas",ref:this.canvas}))}}]),i}(p.Component);g.defaultProps={className:"",loadingColor:"transparent",loadSpeed:45,run:0},g.__docgenInfo={description:"",methods:[{name:"run",docblock:null,modifiers:[],params:[],returns:null}],displayName:"ThankYouConfetti",props:{className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},loadingColor:{defaultValue:{value:"'transparent'",computed:!1},type:{name:"string"},required:!1,description:""},loadSpeed:{defaultValue:{value:"45",computed:!1},type:{name:"number"},required:!1,description:""},run:{defaultValue:{value:"0",computed:!1},type:{name:"number"},required:!1,description:""},viewWidth:{type:{name:"number"},required:!0,description:""},viewHeight:{type:{name:"number"},required:!0,description:""}}}},VZKN:(e,t,i)=>{i.d(t,{Gc:()=>h,Ir:()=>m,Ke:()=>l,SX:()=>d,V1:()=>f,ip:()=>p,pj:()=>c,uo:()=>u});var n=i("MHWf"),a=i("aFY3"),r=i("netK"),o=i("nilk"),s=i("hvCU"),u=2*Math.PI,c=.5*Math.PI;function l(e){return new r.Z(e)}function m(e){return new o.Z(e)}function h(e){for(var t=e.viewWidth,i=e.viewHeight,n=e.particles,r=0;r<128;r++){var o=new a.Z(.5*t,.5*i),u=new a.Z(Math.random()*t,Math.random()*i),c=new a.Z(Math.random()*t,Math.random()*i),l=new a.Z(Math.random()*t,i+64);n.push(new s.Z(e,o,u,c,l))}}function p(e,t,i){return function a(){!function(e,t,i){switch(e.phase){case 0:t.progress+=1/e.loadSpeed;break;case 1:i.update();break;case 2:e.particles.forEach((function(e){e.update()}))}}(e,t,i),function(e,t,i){var n=e.viewWidth,a=e.viewHeight,r=e.phase,o=e.ctx,s=e.particles;switch(o.clearRect(0,0,n,a),r){case 0:t.draw();break;case 1:i.draw();break;case 2:s.forEach((function(e){e.draw()}))}}(e,t,i);var r=!1;0===e.phase&&t.complete?e.phase=1:1===e.phase&&i.complete?e.phase=2:2===e.phase&&function(e){for(var t=0;t<e.length;t++)if(!1===e[t].complete)return!1;return!0}(e.particles)&&(e.phase=0,t.reset(),i.reset(),e.particles.length=0,h(e),r=!0),r||(0,n.U7)(a)}}var d={inCubic:function(e,t,i,n){return i*(e/=n)*e*e+t},outCubic:function(e,t,i,n){return e/=n,i*(--e*e*e+1)+t},inOutCubic:function(e,t,i,n){return(e/=n/2)<1?i/2*e*e*e+t:i/2*((e-=2)*e*e+2)+t},inBack:function(e,t,i,n,a){return i*(e/=n)*e*(((a=a||1.70158)+1)*e-a)+t}};function f(e,t,i,n,r){var o=new a.Z,s=1-r;return o.x=s*s*s*e.x+3*s*s*r*t.x+3*s*r*r*i.x+r*r*r*n.x,o.y=s*s*s*e.y+3*s*s*r*t.y+3*s*r*r*i.y+r*r*r*n.y,o}},r9od:(e,t,i)=>{i.d(t,{Z:()=>w});var n=i("/MKj"),a=i("pVnL"),r=i.n(a),o=i("J4zp"),s=i.n(o),u=i("q1tI"),c=(i("17x9"),i("ucDD")),l=i("DHkX"),m=i("qIoc"),h=i("MHWf"),p=i("mOu4"),d=i("VGss");function f(e){var t=e.initialNumber,i=e.minNumber,n=e.maxNumber,a=e.onNumberChange,r=(0,u.useState)(t),o=s()(r,2),c=o[0],l=o[1],m=function(e){""!==e?(e=Math.min(Math.max(i,e),n))!==c&&(l(e),a(e)):l(e)},h=function(e,t){return u.createElement(d.ZP,{name:e,width:"26",height:"26",viewBox:"0 0 26 26",className:t?"disabled":"",fillColor:t?"#585D6A":"#ffffff",strokeColor:t?"#585D6A":"#ffffff"})};return u.createElement("div",{className:"InputStepper"},u.createElement("div",{className:"InputStepper-minus",onClick:function(){return m(c-1)}},h(d.qs,i===c)),u.createElement("div",{className:"InputStepper-number"},u.createElement("input",{type:"number",value:c,onChange:function(e){return m(e.target.value)},onBlur:function(){c||l(i)},min:i,max:n})),u.createElement("div",{className:"InputStepper-plus",onClick:function(){return m(c+1)}},h(d.au,n===c)))}function v(e){var t=e.monthNumber,i=e.price,n=e.onClick,a=e.isDisabled;return u.createElement("button",{type:"button",className:"GiveGiftButton",onClick:n,disabled:a},u.createElement("div",{className:"GiveGiftButton-description"},u.createElement(d.ZP,{name:d.Ch,width:"20",height:"20",viewBox:"0 0 20 20"}),u.createElement("span",null,(0,l.Z)("giftPeriod",t))),u.createElement("div",{className:"GiveGiftButton-price"},"$".concat((i*t).toFixed(2))))}f.defaultProps={initialNumber:1,minNumber:1,maxNumber:12,onNumberChange:function(){}},f.__docgenInfo={description:"",methods:[],displayName:"InputStepper",props:{initialNumber:{defaultValue:{value:"1",computed:!1},type:{name:"number"},required:!1,description:""},minNumber:{defaultValue:{value:"1",computed:!1},type:{name:"number"},required:!1,description:""},maxNumber:{defaultValue:{value:"12",computed:!1},type:{name:"number"},required:!1,description:""},onNumberChange:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:""}}},v.defaultProps={monthNumber:1,price:5,onClick:function(){}},v.__docgenInfo={description:"",methods:[],displayName:"GiveGiftButton",props:{monthNumber:{defaultValue:{value:"1",computed:!1},type:{name:"number"},required:!1,description:""},price:{defaultValue:{value:"5",computed:!1},type:{name:"number"},required:!1,description:""},onClick:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:""},isDisabled:{type:{name:"bool"},required:!1,description:""}}};var g=i("5bgp");i("/FT0");var y=i("4ELA"),b=i("+qrI"),N=i("QlXF");const w=(0,n.$j)((function(e){var t=e.emerald,i=e.user,n=t.get("giveEmeraldData").toJS();return n.gifterId=i.get("id"),{giftData:n}}),(function(e){return{close:function(){e((0,b.gk)(m.nm)),e((0,N.XW)())},submit:function(t){e((0,N.EX)(t))}}}))(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};function i(i){var n=i.giftData,a=i.close,o=i.onDialogOpen,y=i.submit;if(!n.recipientUsername)return null;var b=(0,u.useState)(n.amount||1),N=s()(b,2),w=N[0],x=N[1],S=(0,u.useState)(n.anonymous||!1),E=s()(S,2),k=E[0],G=E[1],C=(0,u.useState)(!1),D=s()(C,2),M=D[0],Z=D[1];return u.createElement(e,r()({className:"GiveGiftDialog",isModal:!1,onClose:a,name:m.nm,onOpen:o},t),u.createElement("div",{className:"GiveGiftDialog-head"},u.createElement(p.ZP,{name:p.bx}),u.createElement(g.ZP,{className:"GiveGiftDialog-head--close",image:u.createElement(d.ZP,{name:d.dq,width:"32",height:"32"}),onClick:a})),u.createElement("div",{className:"GiveGiftDialog-content"},u.createElement("div",{className:"GiveGiftDialog-title"},n.title||(0,l.Z)("giveGiftDialogTitle")),u.createElement("div",{className:"GiveGiftDialog-description"},(0,l.Z)("giveGiftDialogDescription",n.recipientUsername)),u.createElement("div",{className:"GiveGiftDialog-input"},u.createElement("span",null,(0,l.Z)("howManyMonths")),u.createElement(f,{initialNumber:w,onNumberChange:x})),u.createElement("div",{className:"GiveGiftDialog-anonymously"},u.createElement("label",{className:"GiveGiftDialog-anonymously--input"},u.createElement("input",{type:"checkbox",name:"giftAnonymously",id:"giftAnonymously",onChange:function(){return G(!k)},checked:k}),u.createElement("span",null)),u.createElement("label",{className:"GiveGiftDialog-anonymously--label",htmlFor:"giftAnonymously"},(0,l.Z)("giftAnonymously"))),u.createElement("div",{className:"GiveGiftDialog-button"},u.createElement(v,{monthNumber:w,onClick:function(){Z(!0);var e=(0,h.Re)();y(Object.assign(n,{amount:w,anonymous:k,redirectURL:e,sourceURL:n.sourceURL?n.sourceURL:e,recipientUsername:n.recipientUsername}))},isDisabled:M})),u.createElement("div",{className:"GiveGiftDialog-footer"},(0,l.Z)("giveGiftDialogFooter"),u.createElement("a",{href:"/".concat(c.EL,"?source=giveGiftDialog"),target:"_blank",rel:"noreferrer noopener"},(0,l.Z)("fullInfo")))))}return i.defaultProps={onDialogOpen:function(){}},i}(y.U))},IMzE:()=>{},"/FT0":()=>{}}]);