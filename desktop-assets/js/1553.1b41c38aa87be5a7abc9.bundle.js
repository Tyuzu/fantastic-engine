"use strict";(self.webpackChunkimgur_web=self.webpackChunkimgur_web||[]).push([[1553],{"iY/4":(e,t,n)=>{n.d(t,{Z:()=>m});var r=n("q1tI"),i=(n("17x9"),n("/MKj")),o=n("puhG"),a=n("tKQO"),s=n("+qrI"),c=n("Txp7"),l=n("4ELA"),d=n("5bgp"),u=n("mOu4");function p(e){var t=e.closeDialog,n=e.removeFromPublic,i=e.postId,s=e.isAlbum;if(!i)return null;var c=function(){t()};return r.createElement(l.U,{className:"RemoveFromPublicDialog",name:a.ZA,isModal:!1},r.createElement("div",{className:"RemoveFromPublicDialog-head"},r.createElement("span",null,(0,o.Z)("removeFromPublicDialogTitle")),r.createElement(d.zx,{className:"RemoveFromPublicDialog-head--close",imageSrc:u.UZ[u.oV],onClick:c})),r.createElement("div",{className:"RemoveFromPublicDialog-content"},r.createElement("div",{className:"RemoveFromPublicDialog-content--text"},(0,o.Z)("removeFromPublicDialogText")),r.createElement("div",{className:"RemoveFromPublicDialog-content--buttons"},r.createElement(d.zx,{className:"btn btn--cancel",onClick:c,label:(0,o.Z)("removeFromPublicDialogCancelBtn")}),r.createElement(d.zx,{className:"btn btn--submit",onClick:function(){n(i,s),t()},label:(0,o.Z)("removeFromPublicDialogSubmitBtn")}))))}p.__docgenInfo={description:"",methods:[],displayName:"RemoveFromPublicDialog",props:{closeDialog:{type:{name:"func"},required:!0,description:""},removeFromPublic:{type:{name:"func"},required:!0,description:""},postId:{type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1,description:""},isAlbum:{type:{name:"bool"},required:!1,description:""}}};const m=(0,i.$j)(null,{closeDialog:s.gk,removeFromPublic:c.b4})(p)},c8NV:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n("lwsE"),i=n.n(r),o=n("W8MJ"),a=n.n(o),s=n("PJYZ"),c=n.n(s),l=n("7W2i"),d=n.n(l),u=n("a1gu"),p=n.n(u),m=n("Nsbk"),f=n.n(m),g=n("lSNA"),h=n.n(g),b=n("q1tI"),y=(n("17x9"),n("TSYQ")),v=n.n(y),E=n("MHWf"),C=n("VQbN"),k=n("c08G");function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f()(e);if(t){var i=f()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return p()(this,n)}}var P="top",q="center",T=function(e){d()(n,e);var t=D(n);function n(e){var r;return i()(this,n),r=t.call(this,e),h()(c()(r),"handleOnMouseEnter",(function(){r.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({show:!0},r.getTooltipPlacement()))})),h()(c()(r),"handleOnMouseLeave",(function(){r.setState({isLoading:!0,show:!1,yPosition:P,xPosition:q})})),h()(c()(r),"handleMediaLoad",(function(){r.state.isLoading&&r.setState({isLoading:!1},(function(){r.setState(r.getTooltipPlacement())}))})),r.state={show:!1,yPosition:P,xPosition:q,isLoading:!0},r}return a()(n,[{key:"getTooltipPlacement",value:function(){var e=this.props.popupRef,t=P,n=q,r=this.tooltip.getBoundingClientRect().top,i=this.tooltiptext.getBoundingClientRect().left,o=this.tooltiptext.getBoundingClientRect().right,a=(0,E.w0)(),s=(0,E.Be)();if(e&&e.current){var c=e.current;r-=c.getBoundingClientRect().top,i-=c.getBoundingClientRect().left,a=c.getBoundingClientRect().right,s=c.getBoundingClientRect().height}return r<s/2&&(t="bottom"),i<0?n="right":o>a&&(n="left"),{yPosition:t,xPosition:n}}},{key:"getMediaComponentFromSrc",value:function(){var e=this.props.src;if(!e)return"";var t=(0,C.Wv)(this.props.src),n=v()({hide:this.state.isLoading}),r=b.createElement("img",{className:n,onLoad:this.handleMediaLoad,src:e});return t&&(e=this.props.src,".gifv"===t[0]&&(e=e.replace(".gifv",".mp4")),r=b.createElement("video",{src:e,className:n,onCanPlay:this.handleMediaLoad,muted:!0,loop:!0,autoPlay:!0})),b.createElement("div",null,this.state.isLoading&&b.createElement(k.AR,{size:20}),r)}},{key:"render",value:function(){var e,t=this,n=this.props,r=n.className,i=n.children,o=n.text,a=n.src,s=n.onClick,c=v()((e={Tooltip:!0},h()(e,"Tooltip-".concat(this.state.yPosition),!0),h()(e,"Tooltip-".concat(this.state.xPosition),!0),h()(e,"inline",this.props.inline),h()(e,"inlineBlock",!this.props.inline),h()(e,r,r),e));return b.createElement("div",{className:c,ref:function(e){t.tooltip=e},onMouseEnter:this.handleOnMouseEnter,onMouseLeave:this.handleOnMouseLeave,onClick:s},i,b.createElement("span",{className:"Tooltip-text",ref:function(e){t.tooltiptext=e}},o,this.state.show&&a&&this.getMediaComponentFromSrc()))}}]),n}(b.Component);T.defaultProps={inline:!1,onClick:function(){}},T.__docgenInfo={description:"",methods:[{name:"getTooltipPlacement",docblock:null,modifiers:[],params:[],returns:null},{name:"handleOnMouseEnter",docblock:null,modifiers:[],params:[],returns:null},{name:"handleOnMouseLeave",docblock:null,modifiers:[],params:[],returns:null},{name:"handleMediaLoad",docblock:null,modifiers:[],params:[],returns:null},{name:"getMediaComponentFromSrc",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Tooltip",props:{inline:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},onClick:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:""},children:{type:{name:"node"},required:!0,description:""},text:{type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:""},src:{type:{name:"string"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},popupRef:{type:{name:"object"},required:!1,description:""}}}},Ldd3:(e,t,n)=>{n.d(t,{Z:()=>P});var r=n("pVnL"),i=n.n(r),o=n("lwsE"),a=n.n(o),s=n("W8MJ"),c=n.n(s),l=n("PJYZ"),d=n.n(l),u=n("7W2i"),p=n.n(u),m=n("a1gu"),f=n.n(m),g=n("Nsbk"),h=n.n(g),b=n("lSNA"),y=n.n(b),v=n("q1tI"),E=(n("17x9"),n("/MKj")),C=n("+qrI"),k=n("MHWf"),N=n("puhG");function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var i=h()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return f()(this,n)}}function P(e){var t,n=function(t){p()(r,t);var n=D(r);function r(e){var t;return a()(this,r),t=n.call(this,e),y()(d()(t),"timeoutId",null),y()(d()(t),"clipboardCopy",(function(){var e=t.inputElement.value;t.inputElement.current.select(),t.timeoutId&&clearTimeout(t.timeoutId);try{var n=(0,k.zg)("copy");(0,k.Mf)().removeAllRanges(),n?(t.props.clipboardCopySuccess(e),t.timeoutId=(0,k.iK)(t.props.clipboardCopyClear,3e3)):t.props.clipboardCopyFail(e,(0,N.Z)("clipboardCopyFailMessage"))}catch(n){t.props.clipboardCopyFail(e,n.message)}})),y()(d()(t),"renderInput",(function(e){var n=e.className,r=e.text;return v.createElement("input",{className:n,ref:t.inputElement,readOnly:!0,value:r})})),t.inputElement=v.createRef(),t}return c()(r,[{key:"render",value:function(){return v.createElement(e,i()({},this.props,{renderInput:this.renderInput,clipboardCopy:this.clipboardCopy}))}}]),r}(v.Component);return n.displayName="WithClipboardCopy(".concat((t=e).displayName||t.name||"Component",")"),(0,E.$j)(null,{clipboardCopyFail:C.ME,clipboardCopySuccess:C.UV,clipboardCopyClear:C.wQ})(n)}},"0yzV":(e,t,n)=>{n.d(t,{ZP:()=>W});var r=n("q1tI"),i=(n("17x9"),n("/MKj")),o=n("ANjH"),a=n("qk1P"),s=n("NSLs"),c=n("puhG"),l=n("oIX6"),d=n("Txp7"),u=n("1q3c"),p=n("mOu4"),m=n("9eUW"),f=n("Ldd3"),g=n("D1bG"),h=n("lwsE"),b=n.n(h),y=n("W8MJ"),v=n.n(y),E=n("PJYZ"),C=n.n(E),k=n("7W2i"),N=n.n(k),D=n("a1gu"),P=n.n(D),q=n("Nsbk"),T=n.n(q),I=n("lSNA"),R=n.n(I),S=n("TSYQ"),x=n.n(S);const F=n.p+"desktop-assets/facebook_share.8a1a86eac5223496bcac.svg",L=n.p+"desktop-assets/twitter_share.4d031af55e423cf9ebd9.svg",A=n.p+"desktop-assets/reddit_share.baa45974c901969819f8.svg",w=n.p+"desktop-assets/email_share.c6c76446af61784ef0ac.svg",M=n.p+"desktop-assets/pinterest_share.519bd6494aa4f2f088f2.svg",O=n.p+"desktop-assets/tumblr_share.18923c90b880c896f25a.svg";function Z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=T()(e);if(t){var i=T()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return P()(this,n)}}var j=function(e){N()(n,e);var t=Z(n);function n(e){var r;return b()(this,n),r=t.call(this,e),R()(C()(r),"handleExpand",(function(){return r.setState({isExpanded:!0})})),R()(C()(r),"shareFacebook",(function(){var e=r.props,t=e.shareToFacebookAction,n=e.title,i=e.postId,o=e.tags;t((0,m.rX)(),n,i,o,a.Fr)})),R()(C()(r),"shareTwitter",(function(){var e=r.props,t=e.shareToTwitterAction,n=e.title,i=e.postId,o=e.tags;t((0,m.rX)(),n,i,o,a.Fr)})),R()(C()(r),"shareReddit",(function(){var e=r.props,t=e.shareToRedditAction,n=e.title,i=e.postId,o=e.tags;t((0,m.rX)(),n,i,o,a.Fr)})),R()(C()(r),"sharePinterest",(function(){var e=r.props,t=e.isPinterestEnable,n=e.shareToPinterestAction,i=e.title,o=e.postId,s=e.tags;t&&n((0,m.rX)(),i,o,s,a.Fr)})),R()(C()(r),"shareTumblr",(function(){var e=r.props,t=e.shareToTumblrAction,n=e.title,i=e.postId,o=e.tags;t((0,m.rX)(),n,i,o,a.Fr)})),R()(C()(r),"emailClick",(function(){var e=r.props,t=e.shareToEmailAction,n=e.title,i=e.postId,o=e.tags;t((0,m.rX)(),n,i,o,a.Fr)})),r.state={isExpanded:!1},r}return v()(n,[{key:"render",value:function(){var e=this.state.isExpanded,t=this.props.isPinterestEnable;return r.createElement("div",{className:"SocialShare"},r.createElement("div",{className:"SocialShare-row isExpanded"},r.createElement("img",{src:F,onClick:this.shareFacebook}),r.createElement("img",{src:L,onClick:this.shareTwitter}),r.createElement("img",{src:A,onClick:this.shareReddit}),r.createElement("img",{src:w,onClick:this.emailClick})),r.createElement("div",{className:x()("SocialShare-row",{isExpanded:e})},e?r.createElement(r.Fragment,null,r.createElement("img",{className:x()({disabled:!t}),src:M,onClick:this.sharePinterest}),r.createElement("img",{src:O,onClick:this.shareTumblr})):r.createElement("button",{type:"button",className:"SocialShare-moreOptions",onClick:this.handleExpand},(0,c.Z)("uploadShareMoreOptions"),r.createElement(p.ZP,{name:p.cw}))))}}]),n}(r.Component);j.defaultProps={isPinterestEnable:!0},j.__docgenInfo={description:"",methods:[{name:"handleExpand",docblock:null,modifiers:[],params:[],returns:null},{name:"shareFacebook",docblock:null,modifiers:[],params:[],returns:null},{name:"shareTwitter",docblock:null,modifiers:[],params:[],returns:null},{name:"shareReddit",docblock:null,modifiers:[],params:[],returns:null},{name:"sharePinterest",docblock:null,modifiers:[],params:[],returns:null},{name:"shareTumblr",docblock:null,modifiers:[],params:[],returns:null},{name:"emailClick",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SocialShare",props:{isPinterestEnable:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},title:{type:{name:"string"},required:!1,description:""},postId:{type:{name:"string"},required:!1,description:""},tags:{type:{name:"array"},required:!1,description:""},shareToFacebookAction:{type:{name:"func"},required:!0,description:""},shareToTwitterAction:{type:{name:"func"},required:!0,description:""},shareToRedditAction:{type:{name:"func"},required:!0,description:""},shareToPinterestAction:{type:{name:"func"},required:!0,description:""},shareToTumblrAction:{type:{name:"func"},required:!0,description:""},shareToEmailAction:{type:{name:"func"},required:!0,description:""}}};const _=(0,i.$j)(null,{shareToFacebookAction:d.GB,shareToTwitterAction:d.v0,shareToRedditAction:d.oN,shareToPinterestAction:d.Gm,shareToTumblrAction:d.Dm,shareToEmailAction:d.RC})(j);function H(e){var t=e.runNewUpload,n=e.doneUpload,i=e.isLoggedIn,o=e.renderInput,l=e.clipboardCopy,d=e.copyLinkAction,u=e.isCopySuccess,f=e.title,h=e.postId,b=e.tags,y=e.albumFirstImg,v=e.hasImage;return r.createElement(g.Z,{className:"HiddenPostConfirmDialog",name:s.KX,head:(0,c.Z)("hiddenPostDialogHead")},r.createElement("div",{className:"HiddenPostConfirmDialog-link"},r.createElement("div",{className:"HiddenPostConfirmDialog-link--head"},(0,c.Z)("shareOptionsDialogShareLink")),r.createElement("div",{className:"HiddenPostConfirmDialog-copyLink"},o({className:"HiddenPostConfirmDialog-copyLink--input",text:(0,m.rX)()}),r.createElement("button",{type:"button",className:"HiddenPostConfirmDialog-copyLink--button",onClick:function(){l(),d((0,m.rX)(),f,h,b,a.Fr)}},(0,c.Z)("embedDialogCopy".concat(u?"Done":"")),u&&r.createElement(p.ZP,{name:p.xN})))),r.createElement(_,{title:f,postId:h,tags:b,imgSrc:y?y.get("link"):"",isPinterestEnable:v}),i&&r.createElement(B,{runNew:t,done:n}),i||r.createElement(U,null))}function U(){var e=(0,c.Z)("hiddenPostDialogRegister");return r.createElement("div",{className:"HiddenPostConfirmDialog-notLoggedLinks"},r.createElement("a",{href:l.C3},e.login),e.or,r.createElement("a",{href:l.$j},e.register),e.save)}function B(e){var t=e.runNew,n=e.done;return r.createElement("div",{className:"HiddenPostConfirmDialog-confirm"},r.createElement("button",{type:"button",className:"HiddenPostConfirmDialog-confirm--again",onClick:t},(0,c.Z)("hiddenPostDialogNewPost")),r.createElement("button",{type:"button",className:"HiddenPostConfirmDialog-confirm--done",onClick:n},(0,c.Z)("hiddenPostDialogBackHome")))}H.__docgenInfo={description:"",methods:[],displayName:"HiddenPostConfirmDialog",props:{isLoggedIn:{type:{name:"bool"},required:!1,description:""},runNewUpload:{type:{name:"func"},required:!0,description:""},doneUpload:{type:{name:"func"},required:!0,description:""},isCopySuccess:{type:{name:"bool"},required:!0,description:""},renderInput:{type:{name:"func"},required:!0,description:""},clipboardCopy:{type:{name:"func"},required:!0,description:""},copyLinkAction:{type:{name:"func"},required:!0,description:""},title:{type:{name:"string"},required:!1,description:""},postId:{type:{name:"string"},required:!1,description:""},tags:{type:{name:"array"},required:!1,description:""},albumFirstImg:{type:{name:"object"},required:!1,description:""},hasImage:{type:{name:"bool"},required:!1,description:""}}};const W=(0,o.qC)(f.Z,(0,i.$j)((function(e){var t=e.upload,n=e.user,r=e.ui,i=t.get("queue").reduce((function(e,t){return e||!t.get("isVideo")&&t.get("status")===u.lq}),!1);return{title:t.getIn(["post","title"]),postId:t.getIn(["album","id"]),tags:t.getIn(["post","tags"]).keySeq().toArray(),albumFirstImg:t.get("queue").first(),isLoggedIn:n.get("isLoggedIn"),isCopySuccess:r.clipboardCopy.get("isSuccess"),hasImage:i}}),{runNewUpload:u.$n,doneUpload:u.i9,copyLinkAction:d.fB}))(H)},x5KM:(e,t,n)=>{n.d(t,{l:()=>a});var r=n("q1tI"),i=(n("17x9"),n("TSYQ")),o=n.n(i);function a(e){var t=e.name,n=e.value,i=e.toggleHandler,a=e.labelText,s=e.className,c=e.children,l=e.isDisabled;return r.createElement("div",{className:o()("UploadCheckbox",{isDisabled:l},s)},r.createElement("label",null,r.createElement("input",{type:"checkbox",name:t,value:"true",id:t,checked:n,onChange:i,disabled:l}),r.createElement("span",null)),a&&r.createElement("label",{htmlFor:t},a),c)}a.__docgenInfo={description:"",methods:[],displayName:"UploadCheckbox",props:{name:{type:{name:"string"},required:!0,description:""},value:{type:{name:"bool"},required:!0,description:""},toggleHandler:{type:{name:"func"},required:!0,description:""},labelText:{type:{name:"string"},required:!1,description:""},className:{type:{name:"string"},required:!0,description:""},children:{type:{name:"instanceOf",value:"Object"},required:!1,description:""},isDisabled:{type:{name:"bool"},required:!1,description:""}}}},x2zi:(e,t,n)=>{n.d(t,{Z:()=>O});var r=n("lwsE"),i=n.n(r),o=n("W8MJ"),a=n.n(o),s=n("PJYZ"),c=n.n(s),l=n("7W2i"),d=n.n(l),u=n("a1gu"),p=n.n(u),m=n("Nsbk"),f=n.n(m),g=n("lSNA"),h=n.n(g),b=n("q1tI"),y=(n("17x9"),n("/MKj")),v=n("ANjH"),E=n("4cUD"),C=n("mOu4"),k=n("puhG"),N=n("Do23"),D=n("+qrI"),P=n("Ldd3"),q=n("4ELA"),T=n("5bgp"),I=n("8GRf"),R=n("Ktyt");function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f()(e);if(t){var i=f()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return p()(this,n)}}var x=function(e){d()(n,e);var t=S(n);function n(){return i()(this,n),t.apply(this,arguments)}return a()(n,[{key:"componentDidMount",value:function(){this.props.mountEmbedNode(this.props.nodeId)}},{key:"componentWillUnmount",value:function(){this.props.unmountEmbedNode(this.props.nodeId)}},{key:"render",value:function(){var e=this.props,t=e.isRenderReady,n=e.children,r=e.height,i=e.className;return b.createElement("div",{className:i},b.createElement("div",{id:this.props.nodeId,style:{height:t?r:0,overflow:"hidden"}}),t?null:n)}}]),n}(b.Component);x.__docgenInfo={description:"",methods:[],displayName:"EmbedNode",props:{mountEmbedNode:{type:{name:"func"},required:!0,description:""},unmountEmbedNode:{type:{name:"func"},required:!0,description:""},nodeId:{type:{name:"string"},required:!0,description:""},isRenderReady:{type:{name:"bool"},required:!0,description:""},height:{type:{name:"number"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},children:{type:{name:"instanceOf",value:"Object"},required:!1,description:""}}};const F=(0,v.qC)((0,y.$j)((function(e){var t=e.embed;return{isRenderReady:t.get("isRenderReady"),height:t.get("height"),hasTitle:t.get("hasTitle")}}),{mountEmbedNode:N.nF,unmountEmbedNode:N.mS}),(0,R.A)(I.SM,I.Fg))(x);var L=n("x5KM"),A=n("c08G");function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f()(e);if(t){var i=f()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return p()(this,n)}}var M=function(e){d()(n,e);var t=w(n);function n(){var e;i()(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),h()(c()(e),"onClose",(function(){var t=e.props;(0,t.closeDialog)(t.name||E.k)})),e}return a()(n,[{key:"render",value:function(){var e=this.props,t=e.renderInput,n=e.clipboardCopy,r=e.embedSnippet,i=e.toggleTitle,o=e.hasTitle,a=e.isCopySuccess,s=e.name,c=e.nodeId;return b.createElement(q.U,{className:"EmbedDialog",name:s||E.k,isModal:!1},b.createElement("div",{className:"CommonUploadDialog-head"},b.createElement("span",null,(0,k.Z)("embedDialogHead")),b.createElement(T.zx,{className:"CommonUploadDialog-head--close",imageSrc:C.UZ[C.oV],onClick:this.onClose})),b.createElement("div",{className:"EmbedDialog-content"},b.createElement("div",{className:"EmbedDialog-copyLink"},t({className:"EmbedDialog-copyLink--input",text:r}),b.createElement("button",{type:"button",className:"EmbedDialog-copyLink--button",onClick:n},(0,k.Z)("embedDialogCopy".concat(a?"Done":"")),a&&b.createElement(C.ZP,{name:C.xN}))),b.createElement(F,{className:"EmbedDialog-embed",nodeId:c||E.Q},b.createElement(A.AR,{size:60,className:"EmbedDialog-embed--spinner"})),b.createElement("div",{className:"EmbedDialog-titleToggle"},(0,k.Z)("embedDialogTitleToggle"),b.createElement(L.l,{name:"titleToggle",className:"EmbedDialog-titleToggle--checkbox",value:!o,toggleHandler:i,labelText:(0,k.Z)("embedDialogTitleToggleLabel")}))))}}]),n}(b.Component);M.__docgenInfo={description:"",methods:[{name:"onClose",docblock:null,modifiers:[],params:[],returns:null}],displayName:"EmbedDialog",props:{hasTitle:{type:{name:"bool"},required:!1,description:""},isCopySuccess:{type:{name:"bool"},required:!1,description:""},embedSnippet:{type:{name:"string"},required:!1,description:""},name:{type:{name:"string"},required:!1,description:""},nodeId:{type:{name:"string"},required:!1,description:""},renderInput:{type:{name:"func"},required:!0,description:""},clipboardCopy:{type:{name:"func"},required:!0,description:""},toggleTitle:{type:{name:"func"},required:!0,description:""},closeDialog:{type:{name:"func"},required:!0,description:""}}};const O=(0,v.qC)(P.Z,(0,y.$j)((function(e){var t=e.embed,n=e.ui;return{embedSnippet:t.get("snippet"),hasTitle:t.get("hasTitle"),isCopySuccess:n.clipboardCopy.get("isSuccess")}}),{toggleTitle:N.bN,closeDialog:D.gk}))(M)},"4cUD":(e,t,n)=>{n.d(t,{Q:()=>r,k:()=>i});var r="DEFAULT_EMBED_NODE_ID",i="DEFAULT_EMBED_DIALOG"}}]);