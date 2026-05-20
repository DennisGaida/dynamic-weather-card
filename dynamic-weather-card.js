var y=function(e,o,a,n){var i=arguments.length,r=i<3?o:n===null?n=Object.getOwnPropertyDescriptor(o,a):n,l;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,o,a,n);else for(var t=e.length-1;t>=0;t--)if(l=e[t])r=(i<3?l(r):i>3?l(o,a,r):l(o,a))||r;return i>3&&r&&Object.defineProperty(o,a,r),r};var $=globalThis,L=$.ShadowRoot&&($.ShadyCSS===void 0||$.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,te=Symbol(),Ke=new WeakMap;class O{constructor(e,o,a){if(this._$cssResult$=!0,a!==te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=o}get styleSheet(){let e=this.o,o=this.t;if(L&&e===void 0){let a=o!==void 0&&o.length===1;a&&(e=Ke.get(o)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&Ke.set(o,e))}return e}toString(){return this.cssText}}var Ze=(e)=>new O(typeof e=="string"?e:e+"",void 0,te),P=(e,...o)=>{let a=e.length===1?e[0]:o.reduce((n,i,r)=>n+((l)=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1],e[0]);return new O(a,e,te)},We=(e,o)=>{if(L)e.adoptedStyleSheets=o.map((a)=>a instanceof CSSStyleSheet?a:a.styleSheet);else for(let a of o){let n=document.createElement("style"),i=$.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=a.cssText,e.appendChild(n)}},se=L?(e)=>e:(e)=>e instanceof CSSStyleSheet?((o)=>{let a="";for(let n of o.cssRules)a+=n.cssText;return Ze(a)})(e):e;var{is:za,defineProperty:Da,getOwnPropertyDescriptor:Ha,getOwnPropertyNames:Ta,getOwnPropertySymbols:Ka,getPrototypeOf:Za}=Object,E=globalThis,Ve=E.trustedTypes,Wa=Ve?Ve.emptyScript:"",Va=E.reactiveElementPolyfillSupport,H=(e,o)=>e,T={toAttribute(e,o){switch(o){case Boolean:e=e?Wa:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,o){let a=e;switch(o){case Boolean:a=e!==null;break;case Number:a=e===null?null:Number(e);break;case Object:case Array:try{a=JSON.parse(e)}catch(n){a=null}}return a}},G=(e,o)=>!za(e,o),Je={attribute:!0,type:String,converter:T,reflect:!1,useDefault:!1,hasChanged:G};Symbol.metadata??=Symbol("metadata"),E.litPropertyMetadata??=new WeakMap;class N extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,o=Je){if(o.state&&(o.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((o=Object.create(o)).wrapped=!0),this.elementProperties.set(e,o),!o.noAccessor){let a=Symbol(),n=this.getPropertyDescriptor(e,a,o);n!==void 0&&Da(this.prototype,e,n)}}static getPropertyDescriptor(e,o,a){let{get:n,set:i}=Ha(this.prototype,e)??{get(){return this[o]},set(r){this[o]=r}};return{get:n,set(r){let l=n?.call(this);i?.call(this,r),this.requestUpdate(e,l,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Je}static _$Ei(){if(this.hasOwnProperty(H("elementProperties")))return;let e=Za(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(H("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(H("properties"))){let o=this.properties,a=[...Ta(o),...Ka(o)];for(let n of a)this.createProperty(n,o[n])}let e=this[Symbol.metadata];if(e!==null){let o=litPropertyMetadata.get(e);if(o!==void 0)for(let[a,n]of o)this.elementProperties.set(a,n)}this._$Eh=new Map;for(let[o,a]of this.elementProperties){let n=this._$Eu(o,a);n!==void 0&&this._$Eh.set(n,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let o=[];if(Array.isArray(e)){let a=new Set(e.flat(1/0).reverse());for(let n of a)o.unshift(se(n))}else e!==void 0&&o.push(se(e));return o}static _$Eu(e,o){let a=o.attribute;return a===!1?void 0:typeof a=="string"?a:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e)=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e)=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,o=this.constructor.elementProperties;for(let a of o.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return We(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e)=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e)=>e.hostDisconnected?.())}attributeChangedCallback(e,o,a){this._$AK(e,a)}_$ET(e,o){let a=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,a);if(n!==void 0&&a.reflect===!0){let i=(a.converter?.toAttribute!==void 0?a.converter:T).toAttribute(o,a.type);this._$Em=e,i==null?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,o){let a=this.constructor,n=a._$Eh.get(e);if(n!==void 0&&this._$Em!==n){let i=a.getPropertyOptions(n),r=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:T;this._$Em=n;let l=r.fromAttribute(o,i.type);this[n]=l??this._$Ej?.get(n)??l,this._$Em=null}}requestUpdate(e,o,a,n=!1,i){if(e!==void 0){let r=this.constructor;if(n===!1&&(i=this[e]),a??=r.getPropertyOptions(e),!((a.hasChanged??G)(i,o)||a.useDefault&&a.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,a))))return;this.C(e,o,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,o,{useDefault:a,reflect:n,wrapped:i},r){a&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??o??this[e]),i!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||a||(o=void 0),this._$AL.set(e,o)),n===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,i]of this._$Ep)this[n]=i;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[n,i]of a){let{wrapped:r}=i,l=this[n];r!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,i,l)}}let e=!1,o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),this._$EO?.forEach((a)=>a.hostUpdate?.()),this.update(o)):this._$EM()}catch(a){throw e=!1,this._$EM(),a}e&&this._$AE(o)}willUpdate(e){}_$AE(e){this._$EO?.forEach((o)=>o.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((o)=>this._$ET(o,this[o])),this._$EM()}updated(e){}firstUpdated(e){}}N.elementStyles=[],N.shadowRootOptions={mode:"open"},N[H("elementProperties")]=new Map,N[H("finalized")]=new Map,Va?.({ReactiveElement:N}),(E.reactiveElementVersions??=[]).push("2.1.2");var ce=globalThis,qe=(e)=>e,I=ce.trustedTypes,Be=I?I.createPolicy("lit-html",{createHTML:(e)=>e}):void 0;var M=`lit$${Math.random().toFixed(9).slice(2)}$`,Oe="?"+M,Ja=`<${Oe}>`,F=document,Z=()=>F.createComment(""),W=(e)=>e===null||typeof e!="object"&&typeof e!="function",de=Array.isArray,qa=(e)=>de(e)||typeof e?.[Symbol.iterator]=="function";var K=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,je=/-->/g,Re=/>/g,C=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Qe=/'/g,$e=/"/g,Ee=/^(?:script|style|textarea|title)$/i,ue=(e)=>(o,...a)=>({_$litType$:e,strings:o,values:a}),g=ue(1),p=ue(2),ho=ue(3),A=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Le=new WeakMap,S=F.createTreeWalker(F,129);function Ge(e,o){if(!de(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Be!==void 0?Be.createHTML(o):o}var Ba=(e,o)=>{let a=e.length-1,n=[],i,r=o===2?"<svg>":o===3?"<math>":"",l=K;for(let t=0;t<a;t++){let s=e[t],_,d,h=-1,m=0;for(;m<s.length&&(l.lastIndex=m,d=l.exec(s),d!==null);)m=l.lastIndex,l===K?d[1]==="!--"?l=je:d[1]!==void 0?l=Re:d[2]!==void 0?(Ee.test(d[2])&&(i=RegExp("</"+d[2],"g")),l=C):d[3]!==void 0&&(l=C):l===C?d[0]===">"?(l=i??K,h=-1):d[1]===void 0?h=-2:(h=l.lastIndex-d[2].length,_=d[1],l=d[3]===void 0?C:d[3]==='"'?$e:Qe):l===$e||l===Qe?l=C:l===je||l===Re?l=K:(l=C,i=void 0);let b=l===C&&e[t+1].startsWith("/>")?" ":"";r+=l===K?s+Ja:h>=0?(n.push(_),s.slice(0,h)+"$lit$"+s.slice(h)+M+b):s+M+(h===-2?t:b)}return[Ge(e,r+(e[a]||"<?>")+(o===2?"</svg>":o===3?"</math>":"")),n]};class V{constructor({strings:e,_$litType$:o},a){let n;this.parts=[];let i=0,r=0,l=e.length-1,t=this.parts,[s,_]=Ba(e,o);if(this.el=V.createElement(s,a),S.currentNode=this.el.content,o===2||o===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=S.nextNode())!==null&&t.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(let d of n.getAttributeNames())if(d.endsWith("$lit$")){let h=_[r++],m=n.getAttribute(d).split(M),b=/([.?@])?(.*)/.exec(h);t.push({type:1,index:i,name:b[2],strings:m,ctor:b[1]==="."?Ue:b[1]==="?"?Xe:b[1]==="@"?Ye:q}),n.removeAttribute(d)}else d.startsWith(M)&&(t.push({type:6,index:i}),n.removeAttribute(d));if(Ee.test(n.tagName)){let d=n.textContent.split(M),h=d.length-1;if(h>0){n.textContent=I?I.emptyScript:"";for(let m=0;m<h;m++)n.append(d[m],Z()),S.nextNode(),t.push({type:2,index:++i});n.append(d[h],Z())}}}else if(n.nodeType===8)if(n.data===Oe)t.push({type:2,index:i});else{let d=-1;for(;(d=n.data.indexOf(M,d+1))!==-1;)t.push({type:7,index:i}),d+=M.length-1}i++}}static createElement(e,o){let a=F.createElement("template");return a.innerHTML=e,a}}function z(e,o,a=e,n){if(o===A)return o;let i=n!==void 0?a._$Co?.[n]:a._$Cl,r=W(o)?void 0:o._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(e),i._$AT(e,a,n)),n!==void 0?(a._$Co??=[])[n]=i:a._$Cl=i),i!==void 0&&(o=z(e,i._$AS(e,o.values),i,n)),o}class Ie{constructor(e,o){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:o},parts:a}=this._$AD,n=(e?.creationScope??F).importNode(o,!0);S.currentNode=n;let i=S.nextNode(),r=0,l=0,t=a[0];for(;t!==void 0;){if(r===t.index){let s;t.type===2?s=new J(i,i.nextSibling,this,e):t.type===1?s=new t.ctor(i,t.name,t.strings,this,e):t.type===6&&(s=new ea(i,this,e)),this._$AV.push(s),t=a[++l]}r!==t?.index&&(i=S.nextNode(),r++)}return S.currentNode=F,n}p(e){let o=0;for(let a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(e,a,o),o+=a.strings.length-2):a._$AI(e[o])),o++}}class J{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,o,a,n){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=o,this._$AM=a,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,o=this._$AM;return o!==void 0&&e?.nodeType===11&&(e=o.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,o=this){e=z(this,e,o),W(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==A&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):qa(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&W(this._$AH)?this._$AA.nextSibling.data=e:this.T(F.createTextNode(e)),this._$AH=e}$(e){let{values:o,_$litType$:a}=e,n=typeof a=="number"?this._$AC(e):(a.el===void 0&&(a.el=V.createElement(Ge(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===n)this._$AH.p(o);else{let i=new Ie(n,this),r=i.u(this.options);i.p(o),this.T(r),this._$AH=i}}_$AC(e){let o=Le.get(e.strings);return o===void 0&&Le.set(e.strings,o=new V(e)),o}k(e){de(this._$AH)||(this._$AH=[],this._$AR());let o=this._$AH,a,n=0;for(let i of e)n===o.length?o.push(a=new J(this.O(Z()),this.O(Z()),this,this.options)):a=o[n],a._$AI(i),n++;n<o.length&&(this._$AR(a&&a._$AB.nextSibling,n),o.length=n)}_$AR(e=this._$AA.nextSibling,o){for(this._$AP?.(!1,!0,o);e!==this._$AB;){let a=qe(e).nextSibling;qe(e).remove(),e=a}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,o,a,n,i){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=o,this._$AM=n,this.options=i,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=v}_$AI(e,o=this,a,n){let i=this.strings,r=!1;if(i===void 0)e=z(this,e,o,0),r=!W(e)||e!==this._$AH&&e!==A,r&&(this._$AH=e);else{let l=e,t,s;for(e=i[0],t=0;t<i.length-1;t++)s=z(this,l[a+t],o,t),s===A&&(s=this._$AH[t]),r||=!W(s)||s!==this._$AH[t],s===v?e=v:e!==v&&(e+=(s??"")+i[t+1]),this._$AH[t]=s}r&&!n&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ue extends q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}}class Xe extends q{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}}class Ye extends q{constructor(e,o,a,n,i){super(e,o,a,n,i),this.type=5}_$AI(e,o=this){if((e=z(this,e,o,0)??v)===A)return;let a=this._$AH,n=e===v&&a!==v||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,i=e!==v&&(a===v||n);n&&this.element.removeEventListener(this.name,this,a),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ea{constructor(e,o,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=o,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){z(this,e)}}var ja=ce.litHtmlPolyfillSupport;ja?.(V,J),(ce.litHtmlVersions??=[]).push("3.3.2");var aa=(e,o,a)=>{let n=a?.renderBefore??o,i=n._$litPart$;if(i===void 0){let r=a?.renderBefore??null;n._$litPart$=i=new J(o.insertBefore(Z(),r),r,void 0,a??{})}return i._$AI(e),i};var ge=globalThis;class w extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=aa(o,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}}w._$litElement$=!0,w.finalized=!0,ge.litElementHydrateSupport?.({LitElement:w});var Ra=ge.litElementPolyfillSupport;Ra?.({LitElement:w});(ge.litElementVersions??=[]).push("4.2.2");var Qa={attribute:!0,type:String,converter:T,reflect:!1,hasChanged:G},$a=(e=Qa,o,a)=>{let{kind:n,metadata:i}=a,r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),r.set(a.name,e),n==="accessor"){let{name:l}=a;return{set(t){let s=o.get.call(this);o.set.call(this,t),this.requestUpdate(l,s,e,!0,t)},init(t){return t!==void 0&&this.C(l,void 0,e,t),t}}}if(n==="setter"){let{name:l}=a;return function(t){let s=this[l];o.call(this,t),this.requestUpdate(l,s,e,!0,t)}}throw Error("Unsupported decorator location: "+n)};function k(e){return(o,a)=>typeof a=="object"?$a(e,o,a):((n,i,r)=>{let l=i.hasOwnProperty(r);return i.constructor.createProperty(r,n),l?Object.getOwnPropertyDescriptor(i,r):void 0})(e,o,a)}function U(e){return k({...e,state:!0,attribute:!1})}var oa="0.5.2",x={SUNRISE_START:360,SUNRISE_END:480,DAY_END:1080,SUNSET_END:1200},na=["templow","temperature_low","temp_low","min_temp","yandex_pogoda_minimal_forecast_temperature"],u={showFeelsLike:!0,showWind:!1,showWindGust:!1,showWindDirection:!1,showHumidity:!1,showMinTemp:!0,showForecast:!1,showHourlyForecast:!1,showDailyForecast:!1,hourlyForecastHours:5,dailyForecastDays:5,showSunriseSunset:!1,showClock:!1,clockPosition:"top",clockFormat:"24h",overlayOpacity:0.1,textShadow:1,language:"auto",height:null,windSpeedUnit:"ms",layout:"default"};var ia={sunny:"Солнечно",clear:"Ясно",overcast:"Пасмурно",cloudy:"Облачно",partlycloudy:"Переменная облачность",rainy:"Дождь",rain:"Дождь",snowy:"Снег",snow:"Снег",foggy:"Туман",fog:"Туман",lightning:"Гроза","lightning-rainy":"Гроза с дождем",pouring:"Сильный дождь","snowy-rainy":"Мокрый снег",hail:"Град","clear-night":"Ясная ночь",feels_like:"Ощущается как",forecast_title:"Прогноз на сегодня",daily_forecast_title:"Ежедневный прогноз",no_data:"Нет данных",forecast_unavailable:"Прогноз недоступен",weather:"Погода",language:"Language",wind_unit_kmh:"км/ч",wind_unit_ms:"м/с",wind_unit_mph:"миль/ч",wind_unit_knots:"узлы",wind_unit_fts:"фут/с",show_clock:"Показывать часы",am:"ДП",pm:"ПП",editor:{entity:"Погодная сущность",name:"Название карточки",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",height:"Высота карточки",show_feels_like:"Показывать ощущаемую температуру",show_wind:"Показывать скорость ветра",show_wind_gust:"Показывать порывы ветра",show_wind_direction:"Показывать направление ветра",show_humidity:"Показывать влажность",show_min_temp:"Показывать минимальную температуру",show_hourly_forecast:"Показывать почасовой прогноз",hourly_forecast_hours:"Часы прогноза",show_daily_forecast:"Показывать дневной прогноз",daily_forecast_days:"Дни прогноза",show_sunrise_sunset:"Показывать восход/закат",sunrise_entity:"Сущность восхода",sunset_entity:"Сущность заката",show_clock:"Показывать часы",clock_position:"Позиция часов",clock_position_top:"Вверху",clock_position_details:"Детали",clock_format:"Формат времени",clock_format_12h:"12-часовой (AM/PM)",clock_format_24h:"24-часовой",overlay_opacity:"Прозрачность подложки",text_shadow:"Интенсивность тени текста",language:"Язык",language_auto:"Авто",language_en:"Английский",language_ru:"Русский",language_de:"Немецкий",language_nl:"Нидерландский",language_fr:"Французский",language_es:"Испанский",language_it:"Итальянский",language_sk:"Словацкий",language_hu:"Венгерский",wind_speed_unit:"Единицы скорости ветра",wind_speed_unit_ms:"м/с",wind_speed_unit_kmh:"км/ч"},demo:{pageTitle:"Динамическая карточка погоды",pageSubtitle:"Интерактивная демонстрация и настройка",livePreview:"Предпросмотр",configuration:"Конфигурация",quickPresets:"Быстрые пресеты",sunnyDay:"Солнечный день",rainy:"Дождь",snowy:"Снег",clearNight:"Ясная ночь",weatherCondition:"Погодные условия",condition:"Состояние",temperature:"Температура",humidity:"Влажность (%)",windSpeed:"Скорость ветра",timeOfDay:"Время суток",timeMode:"Режим времени",autoTime:"Авто (текущее время)",manualControl:"Ручное управление",sunrise:"Восход",day:"День",sunset:"Закат",night:"Ночь",currentTime:"Текущее время",displayOptions:"Опции отображения",cardName:"Название карточки",height:"Высота (px)",feelsLike:"Ощущается как",minTemp:"Мин. температура",windDirection:"Направление ветра",windGust:"Порывы ветра",hourlyForecast:"Почасовой прогноз",dailyForecast:"Ежедневный прогноз",sunriseSunset:"Восход/Закат",showClock:"Часы",clockPosition:"Позиция часов",clockPositionTop:"Вверху справа",clockPositionDetails:"В строке деталей",clockFormat:"Формат часов",clockFormat12h:"12-часовой (AM/PM)",clockFormat24h:"24-часовой",overlayOpacity:"Прозрачность подложки (0-1)",windSpeedUnit:"Единицы скорости ветра",dailyForecastDays:"Дни прогноза",hourlyForecastHours:"Часы прогноза",updateCard:"Обновить карточку",startDemo:"Запустить демо",stopDemo:"Остановить демо",madeWith:"Сделано с любовью для Home Assistant",loading:"Загрузка карточки...",errorTitle:"Не удалось загрузить карточку",errorDetails:"Проверьте консоль браузера (F12) для деталей",errorServer:"Убедитесь, что файл открыт через локальный сервер (не file://)",placeholderEmpty:"Оставьте пустым, чтобы скрыть",weatherConditions:{sunny:"Солнечно",clear:"Ясно",clearNight:"Ясная ночь",partlyCloudy:"Переменная облачность",cloudy:"Облачно",rainy:"Дождь",pouring:"Ливень",snowy:"Снег",sleet:"Мокрый снег",hail:"Град",foggy:"Туман",lightning:"Гроза",thunderstorm:"Гроза с дождем"},language:{title:"Язык",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano",slovak:"Slovenčina",hungarian:"Magyar"}}};var ra={sunny:"Sonnig",clear:"Klar",overcast:"Bedeckt",cloudy:"Bewölkt",partlycloudy:"Teilweise bewölkt",rainy:"Regnerisch",rain:"Regen",snowy:"Schneefall",snow:"Schnee",foggy:"Nebelig",fog:"Nebel",lightning:"Blitz","lightning-rainy":"Gewitter",pouring:"Starkregen","snowy-rainy":"Schneeregen",hail:"Hagel","clear-night":"Klare Nacht",feels_like:"Gefühlt",forecast_title:"Heutige Vorhersage",daily_forecast_title:"Tagesvorhersage",no_data:"Keine Daten",forecast_unavailable:"Vorhersage nicht verfügbar",weather:"Wetter",language:"Sprache",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"Knoten",wind_unit_fts:"ft/s",show_clock:"Aktuelle Uhrzeit anzeigen",am:"AM",pm:"PM",editor:{entity:"Wetter-Entität",name:"Kartentitel",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",height:"Kartenhöhe",show_feels_like:"Gefühlte Temperatur anzeigen",show_wind:"Windgeschwindigkeit anzeigen",show_wind_gust:"Windböen anzeigen",show_wind_direction:"Windrichtung anzeigen",show_humidity:"Luftfeuchtigkeit anzeigen",show_min_temp:"Mindesttemperatur anzeigen",show_hourly_forecast:"Stundenprognose anzeigen",hourly_forecast_hours:"Stunden der Prognose",show_daily_forecast:"Tagesprognose anzeigen",daily_forecast_days:"Tage der Prognose",show_sunrise_sunset:"Sonnenaufgang/Sonnenuntergang anzeigen",sunrise_entity:"Sonnenaufgang-Entität",sunset_entity:"Sonnenuntergang-Entität",show_clock:"Uhr anzeigen",clock_position:"Uhrposition",clock_position_top:"Oben",clock_position_details:"Details",clock_format:"Zeitformat",clock_format_12h:"12-Stunden (AM/PM)",clock_format_24h:"24-Stunden",overlay_opacity:"Überlagerungs-Transparenz",text_shadow:"Textschatten-Stärke",language:"Sprache",language_auto:"Automatisch",language_en:"Englisch",language_ru:"Russisch",language_de:"Deutsch",language_nl:"Niederländisch",language_fr:"Französisch",language_es:"Spanisch",language_it:"Italienisch",language_sk:"Slowakisch",language_hu:"Ungarisch",wind_speed_unit:"Einheit der Windgeschwindigkeit",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Dynamische Wetterkarte",pageSubtitle:"Interaktive Demo & Konfiguration",livePreview:"Live-Vorschau",configuration:"Konfiguration",quickPresets:"Schnellvorlagen",sunnyDay:"Sonniger Tag",rainy:"Regnerisch",snowy:"Schnee",clearNight:"Klare Nacht",weatherCondition:"Wetterbedingungen",condition:"Zustand",temperature:"Temperatur",humidity:"Luftfeuchtigkeit (%)",windSpeed:"Windgeschwindigkeit",timeOfDay:"Tageszeit",timeMode:"Zeitmodus",autoTime:"Automatisch (Aktuelle Zeit)",manualControl:"Manuelle Steuerung",sunrise:"Sonnenaufgang",day:"Tag",sunset:"Sonnenuntergang",night:"Nacht",currentTime:"Aktuelle Zeit",displayOptions:"Anzeigeoptionen",cardName:"Kartenname",height:"Höhe (px)",feelsLike:"Gefühlte Temperatur",minTemp:"Mindesttemperatur",windDirection:"Windrichtung",windGust:"Windböen",hourlyForecast:"Stündliche Vorhersage",dailyForecast:"Tägliche Vorhersage",sunriseSunset:"Sonnenaufgang / Sonnenuntergang",showClock:"Uhr",clockPosition:"Uhrposition",clockPositionTop:"Oben rechts",clockPositionDetails:"Detailzeile",clockFormat:"Uhrzeitformat",clockFormat12h:"12-Stunden (AM/PM)",clockFormat24h:"24-Stunden",overlayOpacity:"Überlagerungs-Transparenz (0-1)",windSpeedUnit:"Windgeschwindigkeitseinheit",dailyForecastDays:"Tage der Prognose",hourlyForecastHours:"Stunden der Prognose",updateCard:"Karte aktualisieren",startDemo:"Demo starten",stopDemo:"Demo stoppen",madeWith:"Mit Liebe für Home Assistant gemacht",loading:"Karte wird geladen...",errorTitle:"Karte konnte nicht geladen werden",errorDetails:"Überprüfe die Browser-Konsole (F12) für Details",errorServer:"Stelle sicher, dass die Datei über einen lokalen Server geladen wird (nicht file://)",placeholderEmpty:"Leer lassen, um auszublenden",weatherConditions:{sunny:"Sonnig",clear:"Klar",clearNight:"Klare Nacht",partlyCloudy:"Teilweise bewölkt",cloudy:"Bewölkt",rainy:"Regen",pouring:"Starkregen",snowy:"Schnee",sleet:"Schneeregen",hail:"Hagel",foggy:"Nebel",lightning:"Blitz",thunderstorm:"Gewitter"},language:{title:"Sprache",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano",slovak:"Slovenčina",hungarian:"Magyar"}}};var la={sunny:"Zonnig",clear:"Helder",overcast:"Bewolkt",cloudy:"Bewolkt",partlycloudy:"Gedeeltelijk bewolkt",rainy:"Regenachtig",rain:"Regen",snowy:"Sneeuwachtig",snow:"Sneeuw",foggy:"Mistig",fog:"Mist",lightning:"Bliksem","lightning-rainy":"Onweersbui",pouring:"Zware regen","snowy-rainy":"Natte sneeuw",hail:"Hagel","clear-night":"Heldere nacht",feels_like:"Gevoelstemperatuur",forecast_title:"Voorspelling van vandaag",daily_forecast_title:"Dagelijkse voorspelling",no_data:"Geen gegevens",forecast_unavailable:"Voorspelling niet beschikbaar",weather:"Weer",language:"Taal",wind_unit_kmh:"km/u",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Huidige tijd weergeven",am:"AM",pm:"PM",editor:{entity:"Weer-entiteit",name:"Kaarttitel",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",height:"Kaart hoogte",show_feels_like:"Gevoelstemperatuur tonen",show_wind:"Windsnelheid tonen",show_wind_gust:"Windstoten tonen",show_wind_direction:"Windrichting tonen",show_humidity:"Luchtvochtigheid tonen",show_min_temp:"Minimumtemperatuur tonen",show_hourly_forecast:"Uurverwachting tonen",hourly_forecast_hours:"Aantal uren",show_daily_forecast:"Dagverwachting tonen",daily_forecast_days:"Aantal dagen",show_sunrise_sunset:"Zonsopgang/zonsondergang tonen",sunrise_entity:"Zonsopgang-entiteit",sunset_entity:"Zonsondergang-entiteit",show_clock:"Klok tonen",clock_position:"Klokpositie",clock_position_top:"Boven",clock_position_details:"Details",clock_format:"Tijdformaat",clock_format_12h:"12-uurs (AM/PM)",clock_format_24h:"24-uurs",overlay_opacity:"Overlay-doorzichtigheid",text_shadow:"Tekstschaduw sterkte",language:"Taal",language_auto:"Automatisch",language_en:"Engels",language_ru:"Russisch",language_de:"Duits",language_nl:"Nederlands",language_fr:"Frans",language_es:"Spaans",language_it:"Italiaans",language_sk:"Slowaaks",language_hu:"Hongaars",wind_speed_unit:"Windsnelheidseenheid",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/u"},demo:{pageTitle:"Dynamische Weerkaart",pageSubtitle:"Interactieve demo & configuratietool",livePreview:"Live voorbeeld",configuration:"Configuratie",quickPresets:"Snelle presets",sunnyDay:"Zonnige dag",rainy:"Regen",snowy:"Sneeuw",clearNight:"Heldere nacht",weatherCondition:"Weersomstandigheden",condition:"Conditie",temperature:"Temperatuur",humidity:"Luchtvochtigheid (%)",windSpeed:"Windsnelheid",timeOfDay:"Tijd van de dag",timeMode:"Tijdmodus",autoTime:"Automatisch (huidige tijd)",manualControl:"Handmatige bediening",sunrise:"Zonsopgang",day:"Dag",sunset:"Zonsondergang",night:"Nacht",currentTime:"Huidige tijd",displayOptions:"Weergaveopties",cardName:"Kaartnaam",height:"Hoogte (px)",feelsLike:"Gevoelstemperatuur",minTemp:"Minimumtemperatuur",windDirection:"Windrichting",windGust:"Windstoten",hourlyForecast:"Uurlijkse voorspelling",dailyForecast:"Dagelijkse voorspelling",sunriseSunset:"Zonsopgang / Zonsondergang",showClock:"Klok",clockPosition:"Klokpositie",clockPositionTop:"Rechtsboven",clockPositionDetails:"Detailregel",clockFormat:"Klokformaat",clockFormat12h:"12-uurs (AM/PM)",clockFormat24h:"24-uurs",overlayOpacity:"Overlay-transparantie (0-1)",windSpeedUnit:"Windsnelheidseenheid",dailyForecastDays:"Voorspellingsdagen",hourlyForecastHours:"Voorspellingsuren",updateCard:"Kaart bijwerken",startDemo:"Demo starten",stopDemo:"Demo stoppen",madeWith:"Gemaakt met liefde voor Home Assistant",loading:"Kaart laden...",errorTitle:"Kan kaart niet laden",errorDetails:"Controleer de browserconsole (F12) voor details",errorServer:"Zorg ervoor dat het bestand via een lokale server wordt geladen (niet file://)",placeholderEmpty:"Leeg laten om te verbergen",weatherConditions:{sunny:"Zonnig",clear:"Helder",clearNight:"Heldere nacht",partlyCloudy:"Gedeeltelijk bewolkt",cloudy:"Bewolkt",rainy:"Regen",pouring:"Zware regen",snowy:"Sneeuw",sleet:"Natte sneeuw",hail:"Hagel",foggy:"Mist",lightning:"Bliksem",thunderstorm:"Onweer"},language:{title:"Taal",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano",slovak:"Slovenčina",hungarian:"Magyar"}}};var ta={sunny:"Ensoleillé",clear:"Dégagé",overcast:"Couvert",cloudy:"Nuageux",partlycloudy:"Partiellement nuageux",rainy:"Pluvieux",rain:"Pluie",snowy:"Neigeux",snow:"Neige",foggy:"Brumeux",fog:"Brouillard",lightning:"Éclairs","lightning-rainy":"Orage",pouring:"Forte pluie","snowy-rainy":"Neige fondue",hail:"Grêle","clear-night":"Nuit claire",feels_like:"Ressenti",forecast_title:"Prévisions du jour",daily_forecast_title:"Prévisions quotidiennes",no_data:"Aucune donnée",forecast_unavailable:"Prévisions non disponibles",weather:"Météo",language:"Langue",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Afficher l'heure actuelle",am:"AM",pm:"PM",editor:{entity:"Entité météo",name:"Titre de la carte",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",height:"Hauteur de la carte",show_feels_like:"Afficher le ressenti",show_wind:"Afficher la vitesse du vent",show_wind_gust:"Afficher les rafales",show_wind_direction:"Afficher la direction du vent",show_humidity:"Afficher l'humidité",show_min_temp:"Afficher la température minimale",show_hourly_forecast:"Afficher la prévision horaire",hourly_forecast_hours:"Heures de prévision",show_daily_forecast:"Afficher la prévision quotidienne",daily_forecast_days:"Jours de prévision",show_sunrise_sunset:"Afficher lever/coucher du soleil",sunrise_entity:"Entité de lever du soleil",sunset_entity:"Entité de coucher du soleil",show_clock:"Afficher l'horloge",clock_position:"Position de l'horloge",clock_position_top:"En haut",clock_position_details:"Détails",clock_format:"Format de l'heure",clock_format_12h:"12 heures (AM/PM)",clock_format_24h:"24 heures",overlay_opacity:"Opacité du voile",text_shadow:"Intensité de l'ombre du texte",language:"Langue",language_auto:"Auto",language_en:"Anglais",language_ru:"Russe",language_de:"Allemand",language_nl:"Néerlandais",language_fr:"Français",language_es:"Espagnol",language_it:"Italien",language_sk:"Slovaque",language_hu:"Hongrois",wind_speed_unit:"Unité de vitesse du vent",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Carte Météo Dynamique",pageSubtitle:"Démo Interactive & Outil de Configuration",livePreview:"Aperçu en direct",configuration:"Configuration",quickPresets:"Pré-réglages rapides",sunnyDay:"Journée ensoleillée",rainy:"Pluvieux",snowy:"Neigeux",clearNight:"Nuit claire",weatherCondition:"Condition météo",condition:"Condition",temperature:"Température",humidity:"Humidité (%)",windSpeed:"Vitesse du vent",timeOfDay:"Moment de la journée",timeMode:"Mode horaire",autoTime:"Auto (heure actuelle)",manualControl:"Contrôle manuel",sunrise:"Lever du soleil",day:"Jour",sunset:"Coucher du soleil",night:"Nuit",currentTime:"Heure actuelle",displayOptions:"Options d'affichage",cardName:"Nom de la carte",height:"Hauteur (px)",feelsLike:"Température ressentie",minTemp:"Température minimale",windDirection:"Direction du vent",windGust:"Rafales de vent",hourlyForecast:"Prévisions horaires",dailyForecast:"Prévisions quotidiennes",sunriseSunset:"Lever/Coucher du soleil",showClock:"Horloge",clockPosition:"Position de l'horloge",clockPositionTop:"En haut à droite",clockPositionDetails:"Ligne de détails",clockFormat:"Format de l'horloge",clockFormat12h:"12 heures (AM/PM)",clockFormat24h:"24 heures",overlayOpacity:"Opacité du voile (0-1)",windSpeedUnit:"Unité de vitesse du vent",dailyForecastDays:"Jours de prévision",hourlyForecastHours:"Heures de prévision",updateCard:"Mettre à jour la carte",startDemo:"Démarrer le mode démo",stopDemo:"Arrêter la démo",madeWith:"Fait avec amour pour Home Assistant",loading:"Chargement de la carte...",errorTitle:"Échec du chargement de la carte",errorDetails:"Vérifiez la console du navigateur (F12) pour plus de détails",errorServer:"Assurez-vous que le fichier est servi via un serveur local (pas file://)",placeholderEmpty:"Laisser vide pour masquer",weatherConditions:{sunny:"Ensoleillé",clear:"Dégagé",clearNight:"Nuit claire",partlyCloudy:"Partiellement nuageux",cloudy:"Nuageux",rainy:"Pluvieux",pouring:"Forte pluie",snowy:"Neigeux",sleet:"Neige fondue",hail:"Grêle",foggy:"Brumeux",lightning:"Éclairs",thunderstorm:"Orage"},language:{title:"Langue",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano",slovak:"Slovenčina",hungarian:"Magyar"}}};var sa={sunny:"Sunny",clear:"Clear",overcast:"Overcast",cloudy:"Cloudy",partlycloudy:"Partly Cloudy",rainy:"Rainy",rain:"Rain",snowy:"Snowy",snow:"Snow",foggy:"Foggy",fog:"Fog",lightning:"Lightning","lightning-rainy":"Thunderstorm",pouring:"Heavy Rain","snowy-rainy":"Sleet",hail:"Hail","clear-night":"Clear Night",feels_like:"Feels like",forecast_title:"Today's Forecast",daily_forecast_title:"Daily's Forecast",no_data:"No data",forecast_unavailable:"Forecast unavailable",weather:"Weather",language:"Language",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Show current time",am:"AM",pm:"PM",editor:{entity:"Weather Entity",name:"Card Title",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",height:"Card Height",show_feels_like:"Show Feels Like",show_wind:"Show Wind Speed",show_wind_gust:"Show Wind Gust",show_wind_direction:"Show Wind Direction",show_humidity:"Show Humidity",show_min_temp:"Show Min Temperature",show_hourly_forecast:"Show Hourly Forecast",hourly_forecast_hours:"Hourly Forecast Hours",show_daily_forecast:"Show Daily Forecast",daily_forecast_days:"Daily Forecast Days",show_sunrise_sunset:"Show Sunrise/Sunset",sunrise_entity:"Sunrise Entity",sunset_entity:"Sunset Entity",show_clock:"Show Clock",clock_position:"Clock Position",clock_position_top:"Top",clock_position_details:"Details",clock_format:"Clock Format",clock_format_12h:"12-hour (AM/PM)",clock_format_24h:"24-hour",overlay_opacity:"Overlay Opacity",text_shadow:"Text Shadow Strength",language:"Language",language_auto:"Auto",language_en:"English",language_ru:"Russian",language_de:"German",language_nl:"Dutch",language_fr:"French",language_es:"Spanish",language_it:"Italian",language_sk:"Slovak",language_hu:"Hungarian",wind_speed_unit:"Wind Speed Unit",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Dynamic Weather Card",pageSubtitle:"Interactive Demo & Configuration Tool",livePreview:"Live Preview",configuration:"Configuration",quickPresets:"Quick Presets",sunnyDay:"Sunny Day",rainy:"Rainy",snowy:"Snowy",clearNight:"Clear Night",weatherCondition:"Weather Condition",condition:"Condition",temperature:"Temperature",humidity:"Humidity (%)",windSpeed:"Wind Speed",timeOfDay:"Time of Day",timeMode:"Time Mode",autoTime:"Auto (Current Time)",manualControl:"Manual Control",sunrise:"Sunrise",day:"Day",sunset:"Sunset",night:"Night",currentTime:"Current Time",displayOptions:"Display Options",cardName:"Card Name",height:"Height (px)",feelsLike:"Feels Like Temperature",minTemp:"Min Temperature",windDirection:"Wind Direction",windGust:"Wind Gust",hourlyForecast:"Hourly Forecast",dailyForecast:"Daily Forecast",sunriseSunset:"Sunrise/Sunset",showClock:"Clock",clockPosition:"Clock Position",clockPositionTop:"Top right",clockPositionDetails:"Details row",clockFormat:"Clock Format",clockFormat12h:"12-hour (AM/PM)",clockFormat24h:"24-hour",overlayOpacity:"Overlay Opacity (0-1)",windSpeedUnit:"Wind Speed Unit",dailyForecastDays:"Daily Forecast Days",hourlyForecastHours:"Hourly Forecast Hours",updateCard:"Update Card",startDemo:"Start Demo Mode",stopDemo:"Stop Demo",madeWith:"Made with love for Home Assistant",loading:"Loading card...",errorTitle:"Failed to load card",errorDetails:"Check the browser console (F12) for details",errorServer:"Make sure the file is served via a local server (not file://)",placeholderEmpty:"Leave empty to hide",weatherConditions:{sunny:"Sunny",clear:"Clear",clearNight:"Clear Night",partlyCloudy:"Partly Cloudy",cloudy:"Cloudy",rainy:"Rainy",pouring:"Pouring",snowy:"Snowy",sleet:"Sleet",hail:"Hail",foggy:"Foggy",lightning:"Lightning",thunderstorm:"Thunderstorm"},language:{title:"Language",english:"English",russian:"Russian",french:"French",german:"German",dutch:"Dutch",spanish:"Spanish",italian:"Italian",slovak:"Slovak",hungarian:"Magyar"}}};var ca={sunny:"Soleado",clear:"Despejado",overcast:"Cubierto",cloudy:"Nublado",partlycloudy:"Parcialmente Nublado",rainy:"Lluvioso",rain:"Lluvia",snowy:"Nevado",snow:"Nieve",foggy:"Nublado",fog:"Niebla",lightning:"Rayo","lightning-rainy":"Tormenta Eléctrica",pouring:"Lluvia Intensa","snowy-rainy":"Aguanieve",hail:"Granizo","clear-night":"Noche Despejada",feels_like:"Sensación térmica",forecast_title:"Previsión para hoy",daily_forecast_title:"Previsión Diaria",no_data:"Sin datos",forecast_unavailable:"Previsión no disponible",weather:"Clima",language:"Idioma",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Mostrar hora actual",am:"AM",pm:"PM",editor:{entity:"Entidad de clima",name:"Título de la tarjeta",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",height:"Altura de la tarjeta",show_feels_like:"Mostrar sensación térmica",show_wind:"Mostrar velocidad del viento",show_wind_gust:"Mostrar ráfaga de viento",show_wind_direction:"Mostrar dirección del viento",show_humidity:"Mostrar humedad",show_min_temp:"Mostrar temperatura mínima",show_hourly_forecast:"Mostrar pronóstico por horas",hourly_forecast_hours:"Horas del pronóstico",show_daily_forecast:"Mostrar pronóstico diario",daily_forecast_days:"Días del pronóstico",show_sunrise_sunset:"Mostrar amanecer/atardecer",sunrise_entity:"Entidad de amanecer",sunset_entity:"Entidad de atardecer",show_clock:"Mostrar reloj",clock_position:"Posición del reloj",clock_position_top:"Arriba",clock_position_details:"Detalles",clock_format:"Formato de hora",clock_format_12h:"12 horas (AM/PM)",clock_format_24h:"24 horas",overlay_opacity:"Opacidad de superposición",text_shadow:"Intensidad de sombra de texto",language:"Idioma",language_auto:"Automático",language_en:"Inglés",language_ru:"Ruso",language_de:"Alemán",language_nl:"Neerlandés",language_fr:"Francés",language_es:"Español",language_it:"Italiano",language_sk:"Eslovaco",language_hu:"Húngaro",wind_speed_unit:"Unidad de velocidad del viento",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Tarjeta Meteorológica Dinámica",pageSubtitle:"Demostración interactiva y Herramienta de Configuración",livePreview:"Vista previa en vivo",configuration:"Configuración",quickPresets:"Ajustes Rápidos",sunnyDay:"Día soleado",rainy:"Lluvioso",snowy:"Nevado",clearNight:"Noche despejada",weatherCondition:"Condiciones Meteorológicas",condition:"Condición",temperature:"Temperatura",humidity:"Humedad (%)",windSpeed:"Velocidad del Viento",timeOfDay:"Hora del Día",timeMode:"Modo Tiempo",autoTime:"Auto (Hora Actual)",manualControl:"Control Manual",sunrise:"Amanecer",day:"Día",sunset:"Atardecer",night:"Noche",currentTime:"Hora Actual",displayOptions:"Opciones de Visualización",cardName:"Nombre de la tarjeta",height:"Altura (px)",feelsLike:"Sensación Térmica",minTemp:"Temperatura Mínima",windDirection:"Dirección del Viento",windGust:"Ráfaga de Viento",hourlyForecast:"Previsión por Horas",dailyForecast:"Previsión Diaria",sunriseSunset:"Amanecer/Atardecer",showClock:"Reloj",clockPosition:"Posición del Reloj",clockPositionTop:"Arriba a la derecha",clockPositionDetails:"Línea de detalles",clockFormat:"Formato del Reloj",clockFormat12h:"12 horas (AM/PM)",clockFormat24h:"24 horas",overlayOpacity:"Opacidad de Superposición (0-1)",windSpeedUnit:"Unidad de Velocidad del Viento",dailyForecastDays:"Días de Previsión",hourlyForecastHours:"Horas de Previsión",updateCard:"Actualizar Tarjeta",startDemo:"Iniciar Modo Demostración",stopDemo:"Detener Demostración",madeWith:"Hecho con amor para Home Assistant",loading:"Cargando tarjeta...",errorTitle:"No se pudo cargar la tarjeta",errorDetails:"Consulte la consola del navegador (F12) para obtener más detalles",errorServer:"Asegúrese de que el archivo se sirve a través de un servidor local (no file://)",placeholderEmpty:"Deje vacío para ocultar",weatherConditions:{sunny:"Soleado",clear:"Despejado",clearNight:"Noche Despejada",partlyCloudy:"Parcialmente Nublado",cloudy:"Nublado",rainy:"Lluvioso",pouring:"Torrencial",snowy:"Nevado",sleet:"Aguanieve",hail:"Granizo",foggy:"Nublado",lightning:"Rayos",thunderstorm:"Tormenta Eléctrica"},language:{title:"Idioma",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano",slovak:"Slovenčina",hungarian:"Magyar"}}};var da={sunny:"Soleggiato",clear:"Sereno",overcast:"Coperto",cloudy:"Nuvoloso",partlycloudy:"Parzialmente Nuvoloso",rainy:"Piovoso",rain:"Pioggia",snowy:"Nevoso",snow:"Neve",foggy:"Nebbia",fog:"Nebbia",lightning:"Fulmine","lightning-rainy":"Temporale",pouring:"Pioggia Intensa","snowy-rainy":"Nevischio",hail:"Grandine","clear-night":"Notte Serena",feels_like:"Percepita",forecast_title:"Previsioni di oggi",daily_forecast_title:"Previsioni Giornaliere",no_data:"Nessun dato",forecast_unavailable:"Previsioni non disponibili",weather:"Meteo",language:"Lingua",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Mostra ora corrente",am:"AM",pm:"PM",editor:{entity:"Entità meteo",name:"Titolo della scheda",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",height:"Altezza della scheda",show_feels_like:"Mostra temperatura percepita",show_wind:"Mostra velocità del vento",show_wind_gust:"Mostra raffiche di vento",show_wind_direction:"Mostra direzione del vento",show_humidity:"Mostra umidità",show_min_temp:"Mostra temperatura minima",show_hourly_forecast:"Mostra previsione oraria",hourly_forecast_hours:"Ore di previsione",show_daily_forecast:"Mostra previsione giornaliera",daily_forecast_days:"Giorni di previsione",show_sunrise_sunset:"Mostra alba/tramonto",sunrise_entity:"Entità alba",sunset_entity:"Entità tramonto",show_clock:"Mostra orologio",clock_position:"Posizione orologio",clock_position_top:"In alto",clock_position_details:"Dettagli",clock_format:"Formato orario",clock_format_12h:"12 ore (AM/PM)",clock_format_24h:"24 ore",overlay_opacity:"Opacità sovrapposizione",text_shadow:"Intensità ombra testo",language:"Lingua",language_auto:"Auto",language_en:"Inglese",language_ru:"Russo",language_de:"Tedesco",language_nl:"Olandese",language_fr:"Francese",language_es:"Spagnolo",language_it:"Italiano",language_sk:"Slovacco",language_hu:"Ungherese",wind_speed_unit:"Unità velocità del vento",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Dynamic Weather Card",pageSubtitle:"Demo interattiva & Strumento di configurazione",livePreview:"Anteprima live",configuration:"Configurazione",quickPresets:"Preset veloci",sunnyDay:"Giornata Soleggiata",rainy:"Piovoso",snowy:"Nevoso",clearNight:"Notte Serena",weatherCondition:"Condizione Meteo",condition:"Condizione",temperature:"Temperatura",humidity:"Umidità (%)",windSpeed:"Velocità del Vento",timeOfDay:"Momento della giornata",timeMode:"Modalità ora",autoTime:"Automatico (Ora corrente)",manualControl:"Controllo manuale",sunrise:"Alba",day:"Giorno",sunset:"Tramonto",night:"Notte",currentTime:"Ora corrente",displayOptions:"Opzioni di visualizzazione",cardName:"Nome della card",height:"Altezza (px)",feelsLike:"Temperatura percepita",minTemp:"Temperatura minima",windDirection:"Direzione del vento",windGust:"Raffiche di vento",hourlyForecast:"Previsioni orarie",dailyForecast:"Previsioni giornaliere",sunriseSunset:"Alba/Tramonto",showClock:"Orologio",clockPosition:"Posizione Orologio",clockPositionTop:"In alto a destra",clockPositionDetails:"Riga dettagli",clockFormat:"Formato Orologio",clockFormat12h:"12 ore (AM/PM)",clockFormat24h:"24 ore",overlayOpacity:"Opacità Sovrapposizione (0-1)",windSpeedUnit:"Unità Velocità Vento",dailyForecastDays:"Giorni di Previsione",hourlyForecastHours:"Ore di Previsione",updateCard:"Aggiorna card",startDemo:"Avvia Demo",stopDemo:"Ferma Demo",madeWith:"Creato con amore per Home Assistant",loading:"Caricamento card...",errorTitle:"Impossibile caricare la card",errorDetails:"Controlla la console del browser (F12) per i dettagli",errorServer:"Assicurati che il file sia servito tramite server locale (non file://)",placeholderEmpty:"Lascia vuoto per nascondere",weatherConditions:{sunny:"Soleggiato",clear:"Sereno",clearNight:"Notte Serena",partlyCloudy:"Parzialmente Nuvoloso",cloudy:"Nuvoloso",rainy:"Piovoso",pouring:"Pioggia Intensa",snowy:"Nevoso",sleet:"Nevischio",hail:"Grandine",foggy:"Nebbia",lightning:"Fulmine",thunderstorm:"Temporale"},language:{title:"Lingua",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano",slovak:"Slovenčina",hungarian:"Magyar"}}};var ua={sunny:"Slnečno",clear:"Jasno",overcast:"Zamračené",cloudy:"Oblačno",partlycloudy:"Polooblačno",rainy:"Daždivo",rain:"Dážď",snowy:"Sneženie",snow:"Sneh",foggy:"Hmlisto",fog:"Hmla",lightning:"Blesky","lightning-rainy":"Búrka",pouring:"Silný dážď","snowy-rainy":"Dážď so snehom",hail:"Krúpy","clear-night":"Jasná noc",feels_like:"Pocitová teplota",forecast_title:"Predpoveď na dnes",daily_forecast_title:"Denná predpoveď",no_data:"Žiadne dáta",forecast_unavailable:"Predpoveď nedostupná",weather:"Počasie",language:"Jazyk",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"uzly",wind_unit_fts:"ft/s",show_clock:"Zobraziť aktuálny čas",am:"dop.",pm:"pop.",editor:{entity:"Entita počasia",name:"Názov karty",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",height:"Výška karty",show_feels_like:"Zobraziť pocitovú teplotu",show_wind:"Zobraziť rýchlosť vetra",show_wind_gust:"Zobraziť nárazy vetra",show_wind_direction:"Zobraziť smer vetra",show_humidity:"Zobraziť vlhkosť",show_min_temp:"Zobraziť minimálnu teplotu",show_hourly_forecast:"Zobraziť hodinovú predpoveď",hourly_forecast_hours:"Počet hodín v predpovedi",show_daily_forecast:"Zobraziť dennú predpoveď",daily_forecast_days:"Počet dní v predpovedi",show_sunrise_sunset:"Zobraziť východ/západ slnka",sunrise_entity:"Entita východu slnka",sunset_entity:"Entita západu slnka",show_clock:"Zobraziť hodiny",clock_position:"Pozícia hodín",clock_position_top:"Hore",clock_position_details:"V detailoch",clock_format:"Formát času",clock_format_12h:"12-hodinový (AM/PM)",clock_format_24h:"24-hodinový",overlay_opacity:"Priehľadnosť vrstvy",text_shadow:"Intenzita tieňa textu",language:"Jazyk",language_auto:"Automaticky",language_en:"Angličtina",language_ru:"Ruština",language_de:"Nemčina",language_nl:"Holandčina",language_fr:"Francúzština",language_es:"Španielčina",language_it:"Taliančina",language_sk:"Slovenčina",language_hu:"Maďarčina",wind_speed_unit:"Jednotka rýchlosti vetra",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Dynamická karta počasia",pageSubtitle:"Interaktívne demo a konfiguračný nástroj",livePreview:"Živý náhľad",configuration:"Konfigurácia",quickPresets:"Rýchle predvoľby",sunnyDay:"Slnečný deň",rainy:"Daždivo",snowy:"Sneženie",clearNight:"Jasná noc",weatherCondition:"Poveternostné podmienky",condition:"Stav",temperature:"Teplota",humidity:"Vlhkosť (%)",windSpeed:"Rýchlosť vetra",timeOfDay:"Čas dňa",timeMode:"Režim času",autoTime:"Automaticky (Aktuálny čas)",manualControl:"Manuálne ovládanie",sunrise:"Východ slnka",day:"Deň",sunset:"Západ slnka",night:"Noc",currentTime:"Aktuálny čas",displayOptions:"Možnosti zobrazenia",cardName:"Názov karty",height:"Výška (px)",feelsLike:"Pocitová teplota",minTemp:"Minimálna teplota",windDirection:"Smer vetra",windGust:"Nárazy vetra",hourlyForecast:"Hodinová predpoveď",dailyForecast:"Denná predpoveď",sunriseSunset:"Východ/Západ slnka",showClock:"Hodiny",clockPosition:"Pozícia hodín",clockPositionTop:"Vpravo hore",clockPositionDetails:"Riadok s detailmi",clockFormat:"Formát času",clockFormat12h:"12-hodinový (AM/PM)",clockFormat24h:"24-hodinový",overlayOpacity:"Priehľadnosť vrstvy (0-1)",windSpeedUnit:"Jednotka rýchlosti vetra",dailyForecastDays:"Dni dennej predpovede",hourlyForecastHours:"Hodiny hodinovej predpovede",updateCard:"Aktualizovať kartu",startDemo:"Spustiť Demo režim",stopDemo:"Zastaviť Demo",madeWith:"Vytvorené s láskou pre Home Assistant",loading:"Načítavam kartu...",errorTitle:"Nepodarilo sa načítať kartu",errorDetails:"Skontrolujte konzolu prehliadača (F12) pre detaily",errorServer:"Uistite sa, že súbor je poskytovaný cez lokálny server (nie cez file://)",placeholderEmpty:"Ponechajte prázdne pre skrytie",weatherConditions:{sunny:"Slnečno",clear:"Jasno",clearNight:"Jasná noc",partlyCloudy:"Polooblačno",cloudy:"Oblačno",rainy:"Daždivo",pouring:"Lejak",snowy:"Sneženie",sleet:"Dážď so snehom",hail:"Krúpy",foggy:"Hmla",lightning:"Blesky",thunderstorm:"Búrka"},language:{title:"Jazyk",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano",slovak:"Slovenčina",hungarian:"Magyar"}}};var ga={sunny:"Napos",clear:"Derült",overcast:"Borult",cloudy:"Felhős",partlycloudy:"Részben felhős",rainy:"Esős",rain:"Eső",snowy:"Havas",snow:"Hó",foggy:"Ködös",fog:"Köd",lightning:"Villámlás","lightning-rainy":"Zivatar",pouring:"Heves eső","snowy-rainy":"Havas eső",hail:"Jégeső","clear-night":"Derült éj",feels_like:"Hőérzet",forecast_title:"Mai előrejelzés",daily_forecast_title:"Napi előrejelzés",no_data:"Nincs adat",forecast_unavailable:"Előrejelzés nem elérhető",weather:"Időjárás",language:"Nyelv",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"csomó",wind_unit_fts:"ft/s",show_clock:"Aktuális idő mutatása",am:"DE",pm:"DU",editor:{entity:"Időjárás entitás",name:"Kártya címe",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",height:"Kártya magasság",show_feels_like:"Hőérzet mutatása",show_wind:"Szélsebesség mutatása",show_wind_gust:"Széllökések mutatása",show_wind_direction:"Szélirány mutatása",show_humidity:"Páratartalom mutatása",show_min_temp:"Min. hőmérséklet",show_hourly_forecast:"Óránkénti előrejelzés",hourly_forecast_hours:"Óránkénti órák száma",show_daily_forecast:"Napi előrejelzés",daily_forecast_days:"Napok száma a napi előrejelzésben",show_sunrise_sunset:"Napkelte/Napnyugta",sunrise_entity:"Napkelte entitás",sunset_entity:"Napnyugta entitás",show_clock:"Óra mutatása",clock_position:"Óra pozíció",clock_position_top:"Felül",clock_position_details:"Részletek",clock_format:"Óra formátum",clock_format_12h:"12 órás (DE/DU)",clock_format_24h:"24 órás",overlay_opacity:"Fedőréteg átlátszóság",text_shadow:"Szövegárnyék erőssége",language:"Nyelv",language_auto:"Automatikus",language_en:"Angol",language_ru:"Orosz",language_de:"Német",language_nl:"Holland",language_fr:"Francia",language_es:"Spanyol",language_it:"Olasz",language_hu:"Magyar",language_sk:"Szlovák",wind_speed_unit:"Szélsebesség egység",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Dynamic Weather Card",pageSubtitle:"Interaktív demó és beállító eszköz",livePreview:"Élő előnézet",configuration:"Beállítások",quickPresets:"Gyors presetek",sunnyDay:"Napos nap",rainy:"Esős",snowy:"Havas",clearNight:"Derült éj",weatherCondition:"Időjárási állapot",condition:"Állapot",temperature:"Hőmérséklet",humidity:"Páratartalom (%)",windSpeed:"Szélsebesség",timeOfDay:"Napszak",timeMode:"Idő mód",autoTime:"Automatikus (aktuális idő)",manualControl:"Kézi vezérlés",sunrise:"Napkelte",day:"Nappal",sunset:"Napnyugta",night:"Éjszaka",currentTime:"Aktuális idő",displayOptions:"Megjelenítés",cardName:"Kártya neve",height:"Magasság (px)",feelsLike:"Hőérzet",minTemp:"Min. hőmérséklet",windDirection:"Szélirány",windGust:"Széllökés",hourlyForecast:"Óránkénti előrejelzés",dailyForecast:"Napi előrejelzés",sunriseSunset:"Napkelte/Napnyugta",showClock:"Óra",clockPosition:"Óra pozíció",clockPositionTop:"Jobb felső",clockPositionDetails:"Részletek sora",clockFormat:"Óra formátum",clockFormat12h:"12 órás (DE/DU)",clockFormat24h:"24 órás",overlayOpacity:"Fedőréteg átlátszóság (0–1)",windSpeedUnit:"Szélsebesség egység",dailyForecastDays:"Napi napok",hourlyForecastHours:"Óránkénti órák",updateCard:"Kártya frissítése",startDemo:"Demó indítása",stopDemo:"Demó leállítása",madeWith:"Szeretettel a Home Assistanthez",loading:"Kártya betöltése…",errorTitle:"Nem sikerült betölteni",errorDetails:"Részletek a böngésző konzolban (F12)",errorServer:"A fájlt helyi szerveren szolgáld ki (nem file://)",placeholderEmpty:"Üresen hagyva elrejt",weatherConditions:{sunny:"Napos",clear:"Derült",clearNight:"Derült éj",partlyCloudy:"Részben felhős",cloudy:"Felhős",rainy:"Esős",pouring:"Zuhogó eső",snowy:"Havas",sleet:"Havas eső",hail:"Jégeső",foggy:"Ködös",lightning:"Villámlás",thunderstorm:"Zivatar"},language:{title:"Nyelv",english:"Angol",russian:"Orosz",french:"Francia",german:"Német",dutch:"Holland",spanish:"Spanyol",italian:"Olasz",hungarian:"Magyar",slovak:"Slovenčina"}}};var _e={en:sa,ru:ia,de:ra,nl:la,fr:ta,es:ca,it:da,sk:ua,hu:ga};class _a{lang="en";fallback="en";t(e){let o=e.split("."),a=o.reduce((i,r)=>i?.[r],_e[this.lang]);if(a!=null)return a;return o.reduce((i,r)=>i?.[r],_e[this.fallback])??e}setLanguage(e){if(!_e[e]||this.lang===e)return;this.lang=e,window.dispatchEvent(new CustomEvent("language-changed"))}}var c=new _a;window.i18n=c;var B=({configLang:e,hassLang:o}={})=>{if(e&&e!=="auto")return e;if(o)return o;if(typeof navigator<"u"&&navigator.language){let a=navigator.language.toLowerCase();if(a.startsWith("ru"))return"ru";if(a.startsWith("de"))return"de";if(a.startsWith("nl"))return"nl";if(a.startsWith("fr"))return"fr";if(a.startsWith("it"))return"it";if(a.startsWith("es"))return"es";if(a.startsWith("sk"))return"sk";if(a.startsWith("hu"))return"hu"}return"en"};function ao(){let e=new Date,o=e.getHours(),a=e.getMinutes(),n=o*60+a;if(n>=x.SUNRISE_START&&n<x.SUNRISE_END)return{type:"sunrise",progress:(n-x.SUNRISE_START)/120};if(n>=x.SUNRISE_END&&n<x.DAY_END)return{type:"day",progress:(n-x.SUNRISE_END)/600};if(n>=x.DAY_END&&n<x.SUNSET_END)return{type:"sunset",progress:(n-x.DAY_END)/120};return{type:"night",progress:0}}function pa(e,o,a){if(e.type==="sunrise"){let n=e.progress;return{x:o*(0.3+n*0.4),y:a*(0.85-n*0.55)}}else if(e.type==="sunset"){let n=e.progress;return{x:o*(0.5+n*0.3),y:a*(0.3+n*0.55)}}else if(e.type==="day"){let i=e.progress*Math.PI;return{x:o*(0.5+Math.sin(i)*0.25),y:a*(0.25-Math.sin(i)*0.1)}}else return{x:o*0.75,y:a*0.3}}function ha(e){if(e.type==="sunrise"){let o=e.progress,a={r:26,g:26,b:46},n={r:255,g:160,b:122},i={r:255,g:215,b:0};return{start:{r:Math.round(a.r+(n.r-a.r)*o),g:Math.round(a.g+(n.g-a.g)*o),b:Math.round(a.b+(n.b-a.b)*o)},end:{r:Math.round(a.r+(i.r-a.r)*o),g:Math.round(a.g+(i.g-a.g)*o),b:Math.round(a.b+(i.b-a.b)*o)}}}else if(e.type==="sunset"){let o=e.progress,a={r:255,g:107,b:107},n={r:255,g:160,b:122},i={r:26,g:26,b:46};return{start:{r:Math.round(a.r+(i.r-a.r)*o),g:Math.round(a.g+(i.g-a.g)*o),b:Math.round(a.b+(i.b-a.b)*o)},end:{r:Math.round(n.r+(i.r-n.r)*o),g:Math.round(n.g+(i.g-n.g)*o),b:Math.round(n.b+(i.b-n.b)*o)}}}return null}function ma(e,o="24h",a="AM",n="PM"){if(!e)return"";let r=new Date(e).getHours();if(o==="12h"){let l=r%12||12,t=r<12?a:n;return`${l} ${t}`}return`${r.toString().padStart(2,"0")}:00`}function ya(e,o){if(!e)return"";let a=new Date(e);if(Number.isNaN(a.getTime()))return"";return a.toLocaleDateString(o||void 0,{weekday:"short",day:"numeric",month:"short"})}function pe(e,o="24h",a="AM",n="PM"){if(!e)return"";let i=typeof e==="string"?new Date(e):e,r=i.getHours(),l=i.getMinutes();if(o==="12h"){let t=r>=12?n:a;return r=r%12||12,`${r}:${l.toString().padStart(2,"0")} ${t}`}else return`${r.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}`}function he(e,o=null,a=null,n=null){let i=null,r=null;if(o&&n&&n.states[o]){let l=n.states[o];i=new Date(l.state)}if(a&&n&&n.states[a]){let l=n.states[a];r=new Date(l.state)}if(!i||!r){if(e&&e.attributes){let l=e.attributes;if(!i&&(l.forecast_sunrise||l.sunrise))i=new Date(l.forecast_sunrise||l.sunrise);if(!r&&(l.forecast_sunset||l.sunset))r=new Date(l.forecast_sunset||l.sunset)}}if((!i||!r)&&n&&n.states["sun.sun"]){let t=n.states["sun.sun"].attributes;if(!i&&t.next_rising)i=new Date(t.next_rising);if(!r&&t.next_setting)r=new Date(t.next_setting)}return{sunrise:i,sunset:r,hasSunData:!!(i&&r)}}function me(e){let o=new Date;if(e.hasSunData&&e.sunrise&&e.sunset){let a=o.getTime(),n=e.sunrise.getTime(),i=e.sunset.getTime();if(n-a>43200000)n-=86400000;if(i-a>43200000)i-=86400000;let r=n-3600000,l=n+3600000,t=i-3600000,s=i+3600000;if(a>=r&&a<l)return{type:"sunrise",progress:(a-r)/(l-r)};if(a>=l&&a<t)return{type:"day",progress:(a-l)/(t-l)};if(a>=t&&a<s)return{type:"sunset",progress:(a-t)/(s-t)};return{type:"night",progress:0}}return ao()}function ye(e,o,a){if(e==null)return null;if(o.wind_speed_unit)return Math.round(e*10)/10;if(a==="kmh")return Math.round(e*3.6*10)/10;return Math.round(e*10)/10}function ka(e,o,a){let n=e.wind_speed_unit;if(n){let i=n.toLowerCase().replace(/[^a-z]/g,"");if(i==="kmh"||i==="kmph")return a("wind_unit_kmh");else if(i==="ms"||i==="mps")return a("wind_unit_ms");else if(i==="mph")return a("wind_unit_mph");else if(i==="knots"||i==="kn"||i==="kt")return a("wind_unit_knots");else if(i==="fts"||i==="ftps")return a("wind_unit_fts");return n}return o==="kmh"?a("wind_unit_kmh"):a("wind_unit_ms")}function va(e,o,a,n){if(o==="12h"){let i=e.getHours(),r=String(e.getMinutes()).padStart(2,"0"),l=i>=12?n:a;return i=i%12||12,`${i}:${r} ${l}`}else{let i=String(e.getHours()).padStart(2,"0"),r=String(e.getMinutes()).padStart(2,"0");return`${i}:${r}`}}function Y(e,o){let a=e?.querySelector(o);if(!a)return null;let n=(i)=>{let r=i;if(r.deltaY!==0)i.preventDefault(),a.scrollLeft+=r.deltaY};return a.addEventListener("wheel",n,{passive:!1}),()=>a.removeEventListener("wheel",n)}var wa=P`
  :host {
    display: block;
    --card-width: 100%;
    --card-height: 200px;
    --primary-color: #007AFF;
    --day-gradient-start: #87CEEB;
    --day-gradient-end: #E0F6FF;
    --night-gradient-start: #1a1a2e;
    --night-gradient-end: #16213e;
    --sunset-gradient-start: #FF6B6B;
    --sunset-gradient-end: #FFA07A;
    --sunrise-gradient-start: #FFA07A;
    --sunrise-gradient-end: #FFD700;
    --overlay-opacity: 0.1;
  }

  ha-card {
    overflow: hidden;
    background: transparent;
    box-shadow: none;
    position: relative;
    z-index: 0;
    isolation: isolate;
  }

  .weather-card {
    position: relative;
    width: var(--card-width);
    min-height: var(--card-height, 200px);
    border-radius: 16px;
    overflow: visible;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    background: linear-gradient(135deg, var(--day-gradient-start), var(--day-gradient-end));
    transition: background 2s ease-in-out, min-height 0.3s ease;
  }

  .weather-card.night {
    background: linear-gradient(135deg, var(--night-gradient-start), var(--night-gradient-end));
  }

  .weather-card.sunset {
    background: linear-gradient(135deg, var(--sunset-gradient-start), var(--sunset-gradient-end));
  }

  .weather-card.sunrise {
    background: linear-gradient(135deg, var(--sunrise-gradient-start), var(--sunrise-gradient-end));
  }

  .canvas-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
    pointer-events: none;
    z-index: 0;
  }

  canvas {
    width: 100%;
    height: 100%;
    display: block;
  }

  /* Dark overlay for better text contrast */
  .weather-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(var(--overlay-opacity) * 0.8)) 0%,
      rgba(0, 0, 0, calc(var(--overlay-opacity) * 1.2)) 100%
    );
    z-index: 1;
    border-radius: 16px;
  }

  .content {
    position: relative;
    z-index: 2;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    text-shadow: var(--card-text-shadow);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
  }

  .location {
    font-size: 18px;
    font-weight: 500;
    opacity: 0.9;
  }

  .temperature {
    font-size: 64px;
    font-weight: 100;
    line-height: 1;
    margin: 0;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .details--clock {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
  }

  .details--clock .info-grid {
    flex: 1;
  }

  .condition {
    font-size: 20px;
    font-weight: 400;
    opacity: 0.9;
  }

  .primary {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
  }

  .primary-left {
    display: flex;
    flex-direction: column;
  }

  .feels-like {
    font-size: 16px;
    opacity: 0.85;
    margin-top: 8px;
  }

  .temp-range {
    font-size: 18px;
    opacity: 0.9;
    margin-top: 8px;
    display: flex;
    align-items: baseline;
    gap: 8px;
  }

  .temp-min {
    font-size: 14px;
    opacity: 0.7;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6px 12px;
    font-size: 13px;
    opacity: 0.9;
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .info-item span:last-child {
    white-space: nowrap;
  }

  .info-icon {
    font-size: 16px;
    width: 20px;
    height: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .info-icon svg {
    width: 20px;
    height: 20px;
    display: block;
  }

  .forecast-container {
    margin-top: 20px;
    padding-top: 20px;
    padding-bottom: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;
  }

  .forecast-title {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.8;
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .forecast-scroll {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 12px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
  }

  .forecast-scroll::-webkit-scrollbar {
    height: 6px;
  }

  .forecast-scroll::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }

  .forecast-scroll::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }

  .forecast-scroll::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  .forecast-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
    min-width: 60px;
  }

  .forecast-time {
    font-size: 12px;
    opacity: 0.7;
    font-weight: 400;
  }

  .forecast-icon {
    line-height: 1;
  }

  .forecast-icon svg {
    width: 32px;
    height: 32px;
    display: block;
  }

  .forecast-temp {
    font-size: 16px;
    font-weight: 500;
    opacity: 0.9;
  }

  .clock {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 48px;
    font-weight: 200;
    line-height: 1;
    color: white;
    text-align: right;
    text-shadow: var(--card-text-shadow);
    z-index: 2;
    pointer-events: none;
  }

  @media (max-width: 600px) {
    .clock {
      font-size: 36px;
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  /* ---- Minimal layout ---- */
  .weather-card.layout--minimal {
    min-height: 56px;
  }

  .weather-card.layout--minimal .content {
    flex-direction: row;
    align-items: center;
    padding: 4px 12px;
    gap: 12px;
    min-height: inherit;
  }

  .mini-primary {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
    gap: 0;
  }

  .mini-condition {
    font-size: 11px;
    opacity: 0.85;
    font-weight: 400;
    white-space: nowrap;
  }

  .mini-temp {
    font-size: 44px;
    font-weight: 100;
    line-height: 1;
  }

  .mini-temp-low {
    font-size: 11px;
    opacity: 0.7;
    margin-top: 1px;
  }

  .mini-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2px;
    min-width: 0;
  }

  .weather-card.layout--minimal weather-clock .clock {
    font-size: 26px;
  }
`;class f{ctx;constructor(e){this.ctx=e}drawCloud(e,o,a,n){let i=this.ctx.shadowBlur,r=this.ctx.shadowColor,l=this.ctx.globalAlpha;this.ctx.shadowBlur=a*0.25,this.ctx.shadowColor=`rgba(255, 255, 255, ${n*0.4})`,this.ctx.globalAlpha=n*0.85,this.ctx.fillStyle="rgba(255, 255, 255, 1)",[{x:e,y:o,r:a*0.4},{x:e+a*0.35,y:o,r:a*0.5},{x:e+a*0.65,y:o,r:a*0.48},{x:e+a*0.92,y:o,r:a*0.38},{x:e+a*0.18,y:o-a*0.28,r:a*0.38},{x:e+a*0.52,y:o-a*0.32,r:a*0.42},{x:e+a*0.78,y:o-a*0.28,r:a*0.38},{x:e+a*0.32,y:o-a*0.42,r:a*0.32},{x:e+a*0.62,y:o-a*0.48,r:a*0.36},{x:e+a*0.82,y:o-a*0.42,r:a*0.32}].forEach((s)=>{this.ctx.beginPath(),this.ctx.arc(s.x,s.y,s.r,0,Math.PI*2),this.ctx.fill()}),this.ctx.shadowBlur=i,this.ctx.shadowColor=r,this.ctx.globalAlpha=l}drawClouds(e,o,a,n=0.5){let i=Math.max(2,Math.floor(o/150*n));for(let r=0;r<i;r++){let l=(e*3+r*150)%(o+200)-100,t=a*(0.2+r%3*0.15)+Math.sin(e*0.2+r)*8,s=40+r%3*15,_=0.6+r%2*0.2;this.drawCloud(l,t,s,_)}}}class ke extends f{draw(e,o,a,n){let i=Date.now()*0.001,r=pa(n,o,a),l=r.x,t=r.y;if(n.type==="day"||n.type==="sunrise"||n.type==="sunset"){if(this.drawSun(l,t,i),n.type==="sunrise"||n.type==="sunset")this.drawHorizonReflection(l,t,a,i)}else if(n.type==="night")this.drawNightSky(o,a,i);this.drawClouds(i,o,a,0.3)}drawSun(e,o,a){let n=48+Math.sin(a*0.15)*1.5,i=this.ctx.createRadialGradient(e,o,n*0.3,e,o,n*3.5);i.addColorStop(0,"rgba(255, 248, 230, 0.25)"),i.addColorStop(0.15,"rgba(255, 240, 200, 0.2)"),i.addColorStop(0.3,"rgba(255, 230, 170, 0.15)"),i.addColorStop(0.5,"rgba(255, 220, 140, 0.1)"),i.addColorStop(0.7,"rgba(255, 210, 120, 0.06)"),i.addColorStop(0.85,"rgba(255, 200, 100, 0.03)"),i.addColorStop(1,"rgba(255, 190, 90, 0)"),this.ctx.fillStyle=i,this.ctx.beginPath(),this.ctx.arc(e,o,n*3.5,0,Math.PI*2),this.ctx.fill();let r=this.ctx.createRadialGradient(e,o,n*0.5,e,o,n*2.2);r.addColorStop(0,"rgba(255, 250, 220, 0.35)"),r.addColorStop(0.3,"rgba(255, 240, 190, 0.25)"),r.addColorStop(0.6,"rgba(255, 230, 160, 0.15)"),r.addColorStop(0.85,"rgba(255, 220, 140, 0.08)"),r.addColorStop(1,"rgba(255, 210, 120, 0)"),this.ctx.fillStyle=r,this.ctx.beginPath(),this.ctx.arc(e,o,n*2.2,0,Math.PI*2),this.ctx.fill();let l=this.ctx.createRadialGradient(e,o,n*0.6,e,o,n*1.6);l.addColorStop(0,"rgba(255, 252, 240, 0.5)"),l.addColorStop(0.4,"rgba(255, 245, 210, 0.35)"),l.addColorStop(0.7,"rgba(255, 235, 180, 0.2)"),l.addColorStop(1,"rgba(255, 225, 150, 0)"),this.ctx.fillStyle=l,this.ctx.beginPath(),this.ctx.arc(e,o,n*1.6,0,Math.PI*2),this.ctx.fill();let t=this.ctx.createRadialGradient(e-n*0.1,o-n*0.1,0,e,o,n);t.addColorStop(0,"#FFFEF5"),t.addColorStop(0.15,"#FFF9E6"),t.addColorStop(0.3,"#FFF4D6"),t.addColorStop(0.5,"#FFEDC0"),t.addColorStop(0.7,"#FFE4A8"),t.addColorStop(0.85,"#FFDC95"),t.addColorStop(1,"#FFD37F"),this.ctx.fillStyle=t,this.ctx.beginPath(),this.ctx.arc(e,o,n,0,Math.PI*2),this.ctx.fill()}drawHorizonReflection(e,o,a,n){let i=48+Math.sin(n*0.15)*1.5,r=a*0.85;if(o>=r-50){let l=Math.max(0,(r-o)/50)*0.3;this.ctx.fillStyle=`rgba(255, 140, 0, ${l})`,this.ctx.beginPath(),this.ctx.ellipse(e,r,i*1.5,i*0.5,0,0,Math.PI*2),this.ctx.fill()}}drawNightSky(e,o,a){this.ctx.fillStyle="#FFFFFF";for(let r=0;r<20;r++){let l=(e*0.2+r*47)%e,t=(o*0.2+r*23)%(o*0.6),s=Math.sin(a*0.8+r)*0.5+0.5;this.ctx.globalAlpha=s*0.8,this.ctx.beginPath(),this.ctx.arc(l,t,1.5,0,Math.PI*2),this.ctx.fill()}let n=e*0.75,i=o*0.3;this.ctx.globalAlpha=0.9,this.ctx.fillStyle="#F0F0F0",this.ctx.beginPath(),this.ctx.arc(n,i,25,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="#1a1a2e",this.ctx.beginPath(),this.ctx.arc(n-8,i-5,22,0,Math.PI*2),this.ctx.fill(),this.ctx.globalAlpha=1}}class j extends f{rainDrops=[];lastTime=0;draw(e,o,a,n,i=!1){let r=Date.now()*0.001;this.drawClouds(r,o,a,i?1:0.8),this.drawRain(o,a,i)}drawRain(e,o,a){let n=a?130:90;if(this.rainDrops.length!==n){this.rainDrops=[];for(let t=0;t<n;t++)this.rainDrops.push({x:Math.random()*e,y:Math.random()*o-Math.random()*200,speed:a?80+Math.random()*100:60+Math.random()*80,windOffset:(Math.random()-0.5)*30,width:a?1.2+Math.random()*1:0.8+Math.random()*0.7,length:a?8+Math.random()*10:6+Math.random()*8,alpha:a?0.75+Math.random()*0.15:0.65+Math.random()*0.2,phase:Math.random()*Math.PI*2})}let i=Date.now()*0.001,r=this.lastTime>0?Math.min(i-this.lastTime,0.1):0.016666666666666666;this.lastTime=i;let l=i;for(let t=0;t<this.rainDrops.length;t++){let s=this.rainDrops[t];if(s.y+=s.speed*r,s.y>o+50)s.y=-50-Math.random()*100,s.x=Math.random()*e;let _=s.windOffset*(1+Math.sin(l*0.5+s.phase)*0.2),d=s.x+_;if(d<-10)s.x=e+10;else if(d>e+10)s.x=-10;this.drawRainDrop(d,s.y,s)}}drawRainDrop(e,o,a){this.ctx.save(),this.ctx.globalAlpha=a.alpha;let n=o-a.length*0.5,i=o+a.length*0.5,r=a.alpha,l=a.alpha*0.5;this.ctx.fillStyle="rgba(220, 240, 255, "+r+")",this.ctx.strokeStyle="rgba(240, 250, 255, "+l+")",this.ctx.lineWidth=0.4,this.ctx.beginPath(),this.ctx.moveTo(e,n),this.ctx.quadraticCurveTo(e-a.width*0.3,o,e-a.width,i-a.width*0.3),this.ctx.arc(e,i,a.width,Math.PI,0,!1),this.ctx.quadraticCurveTo(e+a.width*0.3,o,e,n),this.ctx.closePath(),this.ctx.fill(),this.ctx.stroke(),this.ctx.restore()}}class ve extends f{snowflakes=[];lastTime=0;draw(e,o,a,n){let i=Date.now()*0.001;this.drawClouds(i,o,a,0.7),this.drawSnowflakes(o,a)}drawSnowflakes(e,o){let a=Math.floor(e*o/5000),n=Math.max(30,Math.min(a,80));if(this.snowflakes.length!==n){this.snowflakes=[];for(let t=0;t<n;t++)this.snowflakes.push({x:Math.random()*e,y:Math.random()*o-Math.random()*100,speedY:15+Math.random()*10,speedX:(Math.random()-0.5)*8,size:1.5+Math.random()*1.5,alpha:0.6+Math.random()*0.3,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-0.5)*0.3,swayPhase:Math.random()*Math.PI*2,swaySpeed:0.5+Math.random()*0.5})}let i=Date.now()*0.001,r=this.lastTime>0?Math.min(i-this.lastTime,0.1):0.016666666666666666;this.lastTime=i;let l=i;this.ctx.lineCap="round";for(let t=0;t<this.snowflakes.length;t++){let s=this.snowflakes[t],_=Math.sin(l*s.swaySpeed+s.swayPhase)*2;if(s.y+=s.speedY*r,s.x+=(s.speedX+_)*r,s.rotation+=s.rotationSpeed*r,s.y>o+20)s.y=-20-Math.random()*50,s.x=Math.random()*e;if(s.x<-10)s.x=e+10;else if(s.x>e+10)s.x=-10;this.drawSnowflake(s.x,s.y,s.size,s.alpha,s.rotation)}}drawSnowflake(e,o,a,n,i){this.ctx.save(),this.ctx.translate(e,o),this.ctx.rotate(i),this.ctx.strokeStyle=`rgba(255, 255, 255, ${n})`,this.ctx.lineWidth=1,this.ctx.beginPath();for(let r=0;r<6;r++){let l=Math.PI/3*r,t=Math.cos(l),s=Math.sin(l);this.ctx.moveTo(0,0),this.ctx.lineTo(s*a*2.5,t*a*2.5);let _=s*a*1.5+t*a*0.5,d=t*a*1.5-s*a*0.5,h=s*a*1.8+t*a*1.2,m=t*a*1.8-s*a*1.2;this.ctx.moveTo(_,d),this.ctx.lineTo(h,m);let b=s*a*1.5-t*a*0.5,ie=t*a*1.5+s*a*0.5,re=s*a*1.8-t*a*1.2,le=t*a*1.8+s*a*1.2;this.ctx.moveTo(b,ie),this.ctx.lineTo(re,le)}this.ctx.stroke(),this.ctx.restore()}}class we extends f{draw(e,o,a,n){let i=Date.now()*0.001;this.drawClouds(i,o,a,0.7)}}class fe extends f{draw(e,o,a,n){let i=Date.now()*0.0003;this.ctx.fillStyle="rgba(200, 200, 200, 0.4)";for(let r=0;r<3;r++){let l=a*(0.4+r*0.2),t=Math.sin(i+r)*20;this.ctx.beginPath(),this.ctx.moveTo(0,l);for(let s=0;s<=o;s+=5){let _=Math.sin((s/o+i)*Math.PI*4+r)*15;this.ctx.lineTo(s,l+_+t)}this.ctx.lineTo(o,a),this.ctx.lineTo(0,a),this.ctx.closePath(),this.ctx.fill()}}}class be extends f{hailStones=[];draw(e,o,a,n){let i=Date.now()*0.001;this.drawClouds(i,o,a,1),this.drawHailStones(o,a)}drawHailStones(e,o){if(this.hailStones.length!==60){this.hailStones=[];for(let i=0;i<60;i++)this.hailStones.push({startX:Math.random()*e,startY:Math.random()*(o+150)-75,speed:120+Math.random()*80,windOffset:(Math.random()-0.5)*20,size:2+Math.random()*3,alpha:0.8+Math.random()*0.15,phase:Math.random()*Math.PI*2})}let n=Date.now()*0.002;this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.strokeStyle="rgba(255, 255, 255, 0.9)",this.ctx.lineWidth=0.5;for(let i=0;i<this.hailStones.length;i++){let r=this.hailStones[i],l=(r.startY+n*r.speed)%(o+150);if(l>o+30)r.startY=-30-Math.random()*30,r.startX=Math.random()*e;let t=r.windOffset*(1+Math.sin(n*0.6+r.phase)*0.15),s=(r.startX+t+n*20%e)%e;if(s<-5)r.startX=e+5;else if(s>e+5)r.startX=-5;this.drawHailStone(s,l,r)}}drawHailStone(e,o,a){this.ctx.save(),this.ctx.globalAlpha=a.alpha,this.ctx.beginPath(),this.ctx.ellipse(e,o,a.size,a.size*0.9,0,0,Math.PI*2),this.ctx.fill(),this.ctx.stroke(),this.ctx.fillStyle="rgba(255, 255, 255, 0.6)",this.ctx.beginPath(),this.ctx.ellipse(e-a.size*0.3,o-a.size*0.3,a.size*0.3,a.size*0.25,0,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.restore()}}class xe extends f{rainyAnimation;constructor(e){super(e);this.rainyAnimation=new j(e)}draw(e,o,a,n,i=!0){let r=Date.now()*0.001;if(this.drawClouds(r,o,a,1),i)this.rainyAnimation.draw(e,o,a,n,!1);this.drawLightning(o,a,r)}drawLightning(e,o,a){let n=Math.sin(a*2.5)*Math.sin(a*5.3)*Math.sin(a*7.1),i=Math.max(0,n);if(i>0.4){let r=(i-0.4)/0.6,l=r*0.6,t=Math.min(l,Math.sin(r*Math.PI)*0.6);this.ctx.fillStyle=`rgba(255, 255, 255, ${t})`,this.ctx.fillRect(0,0,e,o)}}}class Pe{canvas=null;ctx=null;animationFrame=null;animations={};resizeObserver=null;width=0;height=0;container=null;getDrawParams;handleVisibilityChange=()=>{if(document.hidden)this.stopAnimation();else this.startAnimation()};constructor(e){this.getDrawParams=e}setup(e){if(this.container=e,this.setupCanvas(),this.canvas&&this.ctx)this.initializeAnimations(),this.startAnimation(),this.setupResizeObserver(),document.addEventListener("visibilitychange",this.handleVisibilityChange)}destroy(){if(document.removeEventListener("visibilitychange",this.handleVisibilityChange),this.stopAnimation(),this.resizeObserver)this.resizeObserver.disconnect(),this.resizeObserver=null;this.canvas=null,this.ctx=null,this.container=null}resize(){if(this.canvas&&this.ctx)this.resizeCanvas()}setupCanvas(){if(!this.container)return;let e=this.container.querySelector("canvas");if(e)e.remove();this.canvas=document.createElement("canvas"),this.container.appendChild(this.canvas),this.resizeCanvas()}resizeCanvas(){if(!this.canvas||!this.container)return;let e=this.container.getBoundingClientRect();if(e.width===0||e.height===0)return;let o=window.devicePixelRatio||2;if(this.canvas.width=e.width*o,this.canvas.height=e.height*o,this.canvas.style.width="100%",this.canvas.style.height="100%",this.ctx=this.canvas.getContext("2d"),this.ctx)this.ctx.scale(o,o);this.width=e.width,this.height=e.height,this.initializeAnimations()}setupResizeObserver(){if(!this.container)return;this.resizeObserver=new ResizeObserver(()=>{this.resizeCanvas()}),this.resizeObserver.observe(this.container)}initializeAnimations(){if(!this.ctx)return;this.animations={sunny:new ke(this.ctx),rainy:new j(this.ctx),snowy:new ve(this.ctx),cloudy:new we(this.ctx),foggy:new fe(this.ctx),hail:new be(this.ctx),thunderstorm:new xe(this.ctx)}}startAnimation(){if(this.animationFrame)return;let e=()=>{this.draw(),this.animationFrame=requestAnimationFrame(e)};e()}stopAnimation(){if(this.animationFrame)cancelAnimationFrame(this.animationFrame),this.animationFrame=null}draw(){if(!this.ctx||!this.canvas)return;if(!this.width||!this.height){if(this.resizeCanvas(),!this.width||!this.height)return}let e=this.getDrawParams();if(!e)return;let{condition:o,timeOfDay:a}=e,n=this.width,i=this.height;switch(this.ctx.clearRect(0,0,n,i),o.toLowerCase()){case"sunny":case"clear":this.animations.sunny?.draw(Date.now(),n,i,a);break;case"clear-night":this.animations.sunny?.draw(Date.now(),n,i,{type:"night",progress:0});break;case"rainy":case"rain":this.animations.rainy?.draw(Date.now(),n,i,a,!1);break;case"pouring":this.animations.rainy?.draw(Date.now(),n,i,a,!0);break;case"snowy":case"snow":this.animations.snowy?.draw(Date.now(),n,i,a);break;case"snowy-rainy":this.animations.rainy?.draw(Date.now(),n,i,a,!1),this.animations.snowy?.draw(Date.now(),n,i,a);break;case"hail":this.animations.hail?.draw(Date.now(),n,i,a);break;case"foggy":case"fog":this.animations.foggy?.draw(Date.now(),n,i,a);break;case"lightning":this.animations.thunderstorm?.draw(Date.now(),n,i,a,!1);break;case"lightning-rainy":this.animations.thunderstorm?.draw(Date.now(),n,i,a,!0);break;case"cloudy":case"partlycloudy":default:this.animations.cloudy?.draw(Date.now(),n,i,a);break}}}class Ne{hourlyForecast=[];dailyForecast=[];hourlySubscription=null;dailySubscription=null;onUpdate;constructor(e){this.onUpdate=e}getHourlyData(){return this.hourlyForecast}getDailyData(){return this.dailyForecast}async subscribe(e,o,a){if(!e||!o)return;await this.unsubscribe();try{if(this.hourlySubscription=e.connection.subscribeMessage((n)=>{if(n.forecast&&n.forecast.length>0)this.hourlyForecast=n.forecast,this.onUpdate()},{type:"weather/subscribe_forecast",forecast_type:"hourly",entity_id:o}),a)this.dailySubscription=e.connection.subscribeMessage((n)=>{if(n.forecast&&n.forecast.length>0)this.dailyForecast=n.forecast,this.onUpdate()},{type:"weather/subscribe_forecast",forecast_type:"daily",entity_id:o})}catch{}}async unsubscribe(){if(this.hourlySubscription){try{(await this.hourlySubscription)()}catch{}this.hourlySubscription=null}if(this.dailySubscription){try{(await this.dailySubscription)()}catch{}this.dailySubscription=null}}getHourlyForecast(e,o){let a=Math.max(1,Math.floor(Number(e??u.hourlyForecastHours)));if(this.hourlyForecast&&this.hourlyForecast.length>0)return this.hourlyForecast.slice(0,a);if(!o?.forecast||o.forecast.length===0)return[];let n=new Date,i=new Date(n.getFullYear(),n.getMonth(),n.getDate()),r=new Date(i);return r.setDate(r.getDate()+1),o.forecast.filter((t)=>{if(!t.datetime)return!1;let s=new Date(t.datetime),_=new Date(s.getFullYear(),s.getMonth(),s.getDate());return _.getTime()===i.getTime()||_.getTime()===r.getTime()&&s.getHours()<=n.getHours()}).sort((t,s)=>new Date(t.datetime).getTime()-new Date(s.datetime).getTime()).slice(0,a)}getDailyForecast(e,o){let a=Math.max(1,Math.floor(Number(e??u.dailyForecastDays)));if(this.dailyForecast&&this.dailyForecast.length>0)return this.dailyForecast.slice(0,a);if(!o?.forecast||o.forecast.length===0)return[];let n=new Date,i=new Date(n.getFullYear(),n.getMonth(),n.getDate()),r=new Date(i);r.setDate(r.getDate()+a);let l=(s)=>{let _=s.getFullYear(),d=String(s.getMonth()+1).padStart(2,"0"),h=String(s.getDate()).padStart(2,"0");return`${_}-${d}-${h}`},t=new Map;return o.forecast.forEach((s)=>{if(!s.datetime)return;let _=new Date(s.datetime);if(Number.isNaN(_.getTime()))return;if(_<i||_>=r)return;let d=l(_),h=Math.abs(_.getHours()+_.getMinutes()/60-12),m=t.get(d);if(!m||h<m.hourScore)t.set(d,{item:s,itemDate:_,hourScore:h})}),Array.from(t.values()).sort((s,_)=>s.itemDate.getTime()-_.itemDate.getTime()).map((s)=>s.item).slice(0,a)}}class Me{holdTimer=null;lastTap=null;holdFired=!1;holdDelay=500;getHass;getConfig;fireEvent;constructor(e,o,a){this.getHass=e,this.getConfig=o,this.fireEvent=a}handleTap(e){if(e.target.closest(".forecast-item")||e.target.closest(".info-item"))return;if(this.lastTap&&Date.now()-this.lastTap<300){this.handleDoubleTap(),this.lastTap=null;return}this.lastTap=Date.now(),setTimeout(()=>{if(this.lastTap)this.handleAction(this.getConfig().tapAction),this.lastTap=null},300)}handlePointerDown(){this.holdTimer=window.setTimeout(()=>{this.handleHold(),this.holdFired=!0},this.holdDelay)}handlePointerUp(e){if(this.holdTimer)clearTimeout(this.holdTimer);if(this.holdFired)e.preventDefault(),e.stopPropagation(),this.holdFired=!1}handleHold(){this.handleAction(this.getConfig().holdAction)}handleDoubleTap(){this.handleAction(this.getConfig().doubleTapAction)}handleAction(e){let o=this.getHass(),a=this.getConfig();if(!e||!o)return;switch(e.action||"more-info"){case"more-info":this.fireEvent("hass-more-info",{entityId:e.entity||a.entity});break;case"toggle":o.callService("homeassistant","toggle",{entity_id:e.entity||a.entity});break;case"call-service":if(e.service){let[i,r]=e.service.split(".");o.callService(i,r,e.service_data||{})}break;case"navigate":if(e.navigation_path)window.history.pushState(null,"",e.navigation_path),this.fireEvent("location-changed",{replace:!1});break;case"url":if(e.url_path)window.open(e.url_path);break;case"none":default:break}}}function oo(e,o){if(!e||!o)return null;let a=e.states[o];return a?a.state:null}function ee(e,o){if(!e||!o)return{};let a=e.states[o];return a?a.attributes:{}}function Ce(e,o,a,n){let i=oo(e,o),r=ee(e,o),l=r.condition||i||"sunny",t=null;if(a.templowAttribute&&r[a.templowAttribute]!=null)t=r[a.templowAttribute];else{for(let s of na)if(r[s]!=null){t=r[s];break}if(t==null)t=(r.forecast&&r.forecast[0]?r.forecast[0].templow??null:null)||(r.forecast_hourly&&r.forecast_hourly[0]?r.forecast_hourly[0].native_templow??null:null)}return{condition:l,temperature:r.temperature!=null?r.temperature:null,apparentTemperature:r.apparent_temperature||null,humidity:r.humidity!=null?r.humidity:null,windSpeed:r.wind_speed!=null?r.wind_speed:null,windGust:r.wind_gust_speed||r.wind_gust||null,windBearing:r.wind_bearing!=null?r.wind_bearing:null,windDirection:r.wind_direction||null,pressure:r.pressure||null,forecast:r.forecast||r.forecast_hourly||n||[],friendlyName:r.friendly_name||c.t("weather"),templow:t}}class fa extends w{constructor(){super(...arguments);this.format=null;this.currentTime=""}clockInterval=null;static styles=P`
    :host {
      display: block;
    }

    :host([hidden]) {
      display: none;
    }

    .clock {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 48px;
      font-weight: 200;
      line-height: 1;
      color: white;
      text-align: right;
      text-shadow: var(--card-text-shadow);
      z-index: 2;
      pointer-events: none;
    }

    @media (max-width: 600px) {
      .clock {
        font-size: 36px;
        margin-top: 0;
        margin-bottom: 0;
      }
    }
  `;connectedCallback(){if(super.connectedCallback(),this.format)this.updateTime(),this.clockInterval=window.setInterval(()=>this.updateTime(),1000)}disconnectedCallback(){if(super.disconnectedCallback(),this.clockInterval)clearInterval(this.clockInterval),this.clockInterval=null}updated(e){if(super.updated(e),e.has("format")){if(this.clockInterval)clearInterval(this.clockInterval),this.clockInterval=null;if(this.format)this.updateTime(),this.clockInterval=window.setInterval(()=>this.updateTime(),1000)}}updateTime(){if(!this.format)return;this.currentTime=va(new Date,this.format,c.t("am"),c.t("pm"))}render(){if(!this.format)return g``;return g`<div class="clock">${this.currentTime}</div>`}}y([k({type:String})],fa.prototype,"format",void 0),y([U()],fa.prototype,"currentTime",void 0);customElements.define("weather-clock",fa);var no={wind:p`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-dasharray="35 22" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M43.64 20a5 5 0 113.61 8.46h-35.5">
        <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" values="-57; 57"/>
      </path>
      <path fill="none" stroke="currentColor" stroke-dasharray="24 15" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M29.14 44a5 5 0 103.61-8.46h-21">
        <animate attributeName="stroke-dashoffset" begin="-1.5s" dur="2s" repeatCount="indefinite" values="-39; 39"/>
      </path>
    </svg>
  `,humidity:p`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M32 17c-6.09 9-10 14.62-10 20.09a10 10 0 0020 0C42 31.62 38.09 26 32 17z"/>
      <path fill="currentColor" opacity="0.8" d="M26.24 30.19a3 3 0 012.12-.69 3 3 0 012.12.69 2.51 2.51 0 01.74 1.92v1.24a2.48 2.48 0 01-.74 1.9 3.05 3.05 0 01-2.12.68 3 3 0 01-2.12-.68 2.48 2.48 0 01-.74-1.9v-1.24a2.51 2.51 0 01.74-1.92zm11-.23a.42.42 0 01-.08.4L29 41.69a1.37 1.37 0 01-.44.44 1.87 1.87 0 01-.72.09h-.67c-.2 0-.33-.06-.38-.18s0-.25.09-.42l8.2-11.35a1 1 0 01.41-.41 2 2 0 01.67-.08h.76q.27 0 .34.22zm-8.9 1.17c-.79 0-1.19.36-1.19 1.07v1c0 .71.4 1.07 1.19 1.07s1.19-.36 1.19-1.07v-1c.02-.71-.38-1.07-1.17-1.07zm5.16 5.63a3 3 0 012.12-.69 3 3 0 012.12.69 2.51 2.51 0 01.74 1.92v1.24a2.48 2.48 0 01-.74 1.9 3 3 0 01-2.12.68 3.05 3.05 0 01-2.12-.68 2.48 2.48 0 01-.74-1.9v-1.24a2.51 2.51 0 01.76-1.92zm2.12.94c-.79 0-1.19.35-1.19 1.07v1c0 .73.4 1.09 1.19 1.09s1.19-.36 1.19-1.09v-1c.02-.72-.38-1.07-1.17-1.07z"/>
    </svg>
  `,sunrise:p`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 25l-6.34 6.34M14 16v2m18 12a10 10 0 00-10 10m24 0a10 10 0 00-10-10m22 16H6m50.34-16L50 23.66"/>
      <circle cx="32" cy="40" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path fill="none" stroke="currentColor" stroke-dasharray="2 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 40a14 14 0 00-28 0"/>
    </svg>
  `,sunset:p`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 41l-6.34-6.34M14 50v-2m18-12a10 10 0 0110 10m-24 0a10 10 0 0110-10M6 52h52M7.66 42L14 48.34"/>
      <circle cx="32" cy="46" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path fill="none" stroke="currentColor" stroke-dasharray="2 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 46a14 14 0 01-28 0"/>
    </svg>
  `},ba=(e)=>p`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="transform: rotate(${e}deg); transform-origin: center;">
    <path fill="currentColor" d="M12 2L4 20L12 17L20 20L12 2Z"/>
  </svg>
`,io={sunny:p`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"/>
        <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate"/>
      </g>
    </svg>
  `,clear:p`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"/>
        <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate"/>
      </g>
    </svg>
  `,"clear-night":p`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"/>
        <animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-5 32 32;15 32 32;-5 32 32"/>
      </g>
    </svg>
  `,partlycloudy:p`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs>
        <clipPath id="partly-cloudy-clip">
          <path fill="none" d="M12 35l-5.28-4.21-2-6 1-7 4-5 5-3h6l5 1 3 3L33 20l-6 4h-6l-3 3v4l-4 2-2 2z"/>
        </clipPath>
      </defs>
      <g clip-path="url(#partly-cloudy-clip)">
        <g>
          <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M23.5 24a4.5 4.5 0 11-4.5-4.5 4.49 4.49 0 014.5 4.5zM19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"/>
          <animateTransform attributeName="transform" dur="45s" from="0 19 24" repeatCount="indefinite" to="360 19 24" type="rotate"/>
        </g>
      </g>
      <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    </svg>
  `,overcast:p`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs>
        <clipPath id="overcast-clip-a">
          <path fill="none" d="M12 35l-8-1-1-10 2-8 5-4 4.72-2.21h6L29 10l4 3v7l-6 4h-6l-3 3v4l-4 2-2 2z"/>
        </clipPath>
        <clipPath id="overcast-clip-b">
          <path fill="none" d="M41.8 20.25l4.48 6.61.22 4.64 5.31 2.45 1.69 5.97h8.08L61 27l-9.31-8.5-9.89 1.75z"/>
        </clipPath>
      </defs>
      <g clip-path="url(#overcast-clip-a)">
        <g>
          <g>
            <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M23.5 24a4.5 4.5 0 11-4.5-4.5 4.49 4.49 0 014.5 4.5zM19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"/>
            <animateTransform attributeName="transform" dur="45s" from="0 19 24" repeatCount="indefinite" to="360 19 24" type="rotate"/>
          </g>
          <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="3 0; -3 0; 3 0"/>
        </g>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
      <g clip-path="url(#overcast-clip-b)">
        <path fill="none" stroke="#9ca3af" stroke-linejoin="round" stroke-width="2" d="M34.23 33.45a4.05 4.05 0 004.05 4h16.51a4.34 4.34 0 00.81-8.61 3.52 3.52 0 00.06-.66 4.06 4.06 0 00-6.13-3.48 6.08 6.08 0 00-11.25 3.19 6.34 6.34 0 00.18 1.46h-.18a4.05 4.05 0 00-4.05 4.1z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-2.1 0; 2.1 0; -2.1 0"/>
      </g>
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,cloudy:p`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,rainy:p`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"/>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
    </svg>
  `,rain:p`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"/>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
    </svg>
  `,pouring:p`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"/>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
    </svg>
  `,snowy:p`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"/>
      <g>
        <circle cx="31" cy="45" r="1.25" fill="none" stroke="#72b8d4" stroke-miterlimit="10"/>
        <path fill="none" stroke="#72b8d4" stroke-linecap="round" stroke-miterlimit="10" d="M33.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M31 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/>
        <animateTransform additive="sum" attributeName="transform" dur="4s" repeatCount="indefinite" type="translate" values="-1 -6; 1 12"/>
        <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 31 45; 360 31 45"/>
        <animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/>
      </g>
      <g>
        <circle cx="24" cy="45" r="1.25" fill="none" stroke="#72b8d4" stroke-miterlimit="10"/>
        <path fill="none" stroke="#72b8d4" stroke-linecap="round" stroke-miterlimit="10" d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/>
        <animateTransform additive="sum" attributeName="transform" begin="-2s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/>
        <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 24 45; 360 24 45"/>
        <animate attributeName="opacity" begin="-2s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/>
      </g>
      <g>
        <circle cx="38" cy="45" r="1.25" fill="none" stroke="#72b8d4" stroke-miterlimit="10"/>
        <path fill="none" stroke="#72b8d4" stroke-linecap="round" stroke-miterlimit="10" d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/>
        <animateTransform additive="sum" attributeName="transform" begin="-1s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/>
        <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 38 45; 360 38 45"/>
        <animate attributeName="opacity" begin="-1s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/>
      </g>
    </svg>
  `,snow:p`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"/>
      <g>
        <circle cx="31" cy="45" r="1.25" fill="none" stroke="#72b8d4" stroke-miterlimit="10"/>
        <path fill="none" stroke="#72b8d4" stroke-linecap="round" stroke-miterlimit="10" d="M33.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M31 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/>
        <animateTransform additive="sum" attributeName="transform" dur="4s" repeatCount="indefinite" type="translate" values="-1 -6; 1 12"/>
        <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 31 45; 360 31 45"/>
        <animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/>
      </g>
      <g>
        <circle cx="24" cy="45" r="1.25" fill="none" stroke="#72b8d4" stroke-miterlimit="10"/>
        <path fill="none" stroke="#72b8d4" stroke-linecap="round" stroke-miterlimit="10" d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/>
        <animateTransform additive="sum" attributeName="transform" begin="-2s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/>
        <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 24 45; 360 24 45"/>
        <animate attributeName="opacity" begin="-2s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/>
      </g>
      <g>
        <circle cx="38" cy="45" r="1.25" fill="none" stroke="#72b8d4" stroke-miterlimit="10"/>
        <path fill="none" stroke="#72b8d4" stroke-linecap="round" stroke-miterlimit="10" d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/>
        <animateTransform additive="sum" attributeName="transform" begin="-1s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/>
        <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 38 45; 360 38 45"/>
        <animate attributeName="opacity" begin="-1s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/>
      </g>
    </svg>
  `,foggy:p`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
      <g>
        <path fill="none" stroke="#d1d5db" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"/>
        <animateTransform attributeName="transform" begin="0s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/>
      </g>
      <g>
        <path fill="none" stroke="#d1d5db" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"/>
        <animateTransform attributeName="transform" begin="-4s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/>
      </g>
    </svg>
  `,fog:p`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
      <g>
        <path fill="none" stroke="#d1d5db" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"/>
        <animateTransform attributeName="transform" begin="0s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/>
      </g>
      <g>
        <path fill="none" stroke="#d1d5db" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"/>
        <animateTransform attributeName="transform" begin="-4s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/>
      </g>
    </svg>
  `,hail:p`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"/>
      <g>
        <circle cx="24" cy="45" r="1.5" fill="#72b8d4"/>
        <animateTransform attributeName="transform" dur="0.6s" repeatCount="indefinite" type="translate" values="1 -5; -2 18; -4 14"/>
        <animate attributeName="opacity" dur="0.6s" repeatCount="indefinite" values="1;1;0"/>
      </g>
      <g>
        <circle cx="31" cy="45" r="1.5" fill="#72b8d4"/>
        <animateTransform attributeName="transform" begin="-0.4s" dur="0.6s" repeatCount="indefinite" type="translate" values="1 -5; -2 18; -4 14"/>
        <animate attributeName="opacity" begin="-0.4s" dur="0.6s" repeatCount="indefinite" values="1;1;0"/>
      </g>
      <g>
        <circle cx="38" cy="45" r="1.5" fill="#72b8d4"/>
        <animateTransform attributeName="transform" begin="-0.2s" dur="0.6s" repeatCount="indefinite" type="translate" values="1 -5; -2 18; -4 14"/>
        <animate attributeName="opacity" begin="-0.2s" dur="0.6s" repeatCount="indefinite" values="1;1;0"/>
      </g>
    </svg>
  `,"snowy-rainy":p`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"/>
      <g>
        <circle cx="24" cy="45" r="1.5" fill="#72b8d4"/>
        <animateTransform attributeName="transform" dur="0.6s" repeatCount="indefinite" type="translate" values="1 -5; -2 18; -4 14"/>
        <animate attributeName="opacity" dur="0.6s" repeatCount="indefinite" values="1;1;0"/>
      </g>
      <g>
        <circle cx="31" cy="45" r="1.5" fill="#72b8d4"/>
        <animateTransform attributeName="transform" begin="-0.4s" dur="0.6s" repeatCount="indefinite" type="translate" values="1 -5; -2 18; -4 14"/>
        <animate attributeName="opacity" begin="-0.4s" dur="0.6s" repeatCount="indefinite" values="1;1;0"/>
      </g>
      <g>
        <circle cx="38" cy="45" r="1.5" fill="#72b8d4"/>
        <animateTransform attributeName="transform" begin="-0.2s" dur="0.6s" repeatCount="indefinite" type="translate" values="1 -5; -2 18; -4 14"/>
        <animate attributeName="opacity" begin="-0.2s" dur="0.6s" repeatCount="indefinite" values="1;1;0"/>
      </g>
    </svg>
  `,lightning:p`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"/>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="#f59e0b" d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z"/>
        <animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"/>
      </g>
    </svg>
  `,"lightning-rainy":p`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"/>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="#f59e0b" d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z"/>
        <animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"/>
      </g>
    </svg>
  `,windy:p`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,"windy-variant":p`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `};function R(e,...o){let a=no[e];if(typeof a==="function")return a(...o);return a||""}function ae(e){if(!e)return"";return io[e.toLowerCase()]||""}class xa extends w{constructor(){super(...arguments);this.weather=null;this.sunData=null;this.config=null;this.entityAttributes=null;this.compact=!1}static styles=P`
    :host {
      display: block;
    }

    :host([hidden]) {
      display: none;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 6px 12px;
      font-size: 13px;
      opacity: 0.9;
      text-shadow: var(--card-text-shadow);
    }

    :host([compact]) .info-grid {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 4px 12px;
      font-size: 12px;
    }

    .info-item {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .info-item span:last-child {
      white-space: nowrap;
    }

    .info-icon {
      font-size: 16px;
      width: 20px;
      height: 20px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: white;
      filter: var(--card-icon-filter);
    }

    .info-icon svg {
      width: 20px;
      height: 20px;
      display: block;
    }

    :host([compact]) .sun-group {
      display: flex;
      flex-direction: row;
      gap: 12px;
    }
  `;hasContent(){if(!this.weather||!this.config)return!1;return this.config.showHumidity&&this.weather.humidity!=null||this.config.showWind&&this.weather.windSpeed!=null||this.config.showSunriseSunset&&this.sunData?.hasSunData===!0}renderHumidity(){if(!this.config?.showHumidity||this.weather?.humidity==null)return g``;return g`
      <div class="info-item">
        <span class="info-icon">${R("humidity")}</span>
        <span>${this.weather.humidity} %</span>
      </div>
    `}renderSunrise(){if(!this.config?.showSunriseSunset||!this.sunData?.hasSunData||!this.sunData.sunrise)return g``;return g`
      <div class="info-item">
        <span class="info-icon">${R("sunrise")}</span>
        <span>${pe(this.sunData.sunrise,this.config.clockFormat,c.t("am"),c.t("pm"))}</span>
      </div>
    `}renderWind(){if(!this.config?.showWind||this.weather?.windSpeed==null)return g``;let e=this.entityAttributes||{},o=ye(this.weather.windSpeed,e,this.config.windSpeedUnit),a=ka(e,this.config.windSpeedUnit,c.t.bind(c)),n="";if(this.config.showWindGust&&this.weather.windGust)n=` / ${ye(this.weather.windGust,e,this.config.windSpeedUnit)} ${a}`;let i=this.config.showWindDirection&&this.weather.windBearing!=null?ba(this.weather.windBearing):R("wind");return g`
      <div class="info-item">
        <span class="info-icon">${i}</span>
        <span>${o} ${a}${n}</span>
      </div>
    `}renderSunset(){if(!this.config?.showSunriseSunset||!this.sunData?.hasSunData||!this.sunData.sunset)return g``;return g`
      <div class="info-item">
        <span class="info-icon">${R("sunset")}</span>
        <span>${pe(this.sunData.sunset,this.config.clockFormat,c.t("am"),c.t("pm"))}</span>
      </div>
    `}render(){if(!this.hasContent())return g``;let o=this.config?.showSunriseSunset&&this.sunData?.hasSunData?g`
      <div class="sun-group">
        ${this.renderSunrise()}
        ${this.renderSunset()}
      </div>
    `:g``;return g`
      <div class="info-grid">
        ${this.renderHumidity()}
        ${this.renderWind()}
        ${this.compact?o:g`${this.renderSunrise()}${this.renderSunset()}`}
      </div>
    `}}y([k({type:Object})],xa.prototype,"weather",void 0),y([k({type:Object})],xa.prototype,"sunData",void 0),y([k({type:Object})],xa.prototype,"config",void 0),y([k({type:Object})],xa.prototype,"entityAttributes",void 0),y([k({type:Boolean,reflect:!0})],xa.prototype,"compact",void 0);customElements.define("weather-details",xa);var oe=P`
  :host {
    display: block;
  }

  :host([hidden]) {
    display: none;
  }

  .forecast-container {
    margin-top: 20px;
    padding-top: 20px;
    padding-bottom: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;
  }

  .forecast-title {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.8;
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-shadow: var(--card-text-shadow);
  }

  .forecast-scroll {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 12px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
  }

  .forecast-scroll::-webkit-scrollbar {
    height: 6px;
  }

  .forecast-scroll::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }

  .forecast-scroll::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }

  .forecast-scroll::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  .forecast-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
    min-width: 60px;
  }

  .forecast-time {
    font-size: 12px;
    opacity: 0.7;
    font-weight: 400;
    text-shadow: var(--card-text-shadow);
  }

  .forecast-icon {
    line-height: 1;
    filter: var(--card-icon-filter);
  }

  .forecast-icon svg {
    width: 32px;
    height: 32px;
    display: block;
  }

  .forecast-temp {
    font-size: 16px;
    font-weight: 500;
    opacity: 0.9;
    text-shadow: var(--card-text-shadow);
  }

  .forecast-unavailable {
    opacity: 0.6;
    font-size: 14px;
  }
`;class Pa extends w{constructor(){super(...arguments);this.forecast=[];this.clockFormat="24h"}static styles=oe;_cleanup=null;connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._cleanup=Y(this.shadowRoot,".forecast-scroll")})}disconnectedCallback(){super.disconnectedCallback(),this._cleanup?.(),this._cleanup=null}getTemperature(e){return Math.round(e.temperature??e.temp??e.native_temperature??0)}render(){if(this.forecast.length===0)return g``;return g`
      <div class="forecast-container">
        <div class="forecast-title">${c.t("forecast_title")}</div>
        <div class="forecast-scroll">
          ${this.forecast.map((e)=>g`
            <div class="forecast-item">
              <div class="forecast-time">${ma(e.datetime,this.clockFormat,c.t("am"),c.t("pm"))}</div>
              <div class="forecast-icon">${ae(e.condition||"sunny")}</div>
              <div class="forecast-temp">${this.getTemperature(e)}°</div>
            </div>
          `)}
        </div>
      </div>
    `}}y([k({type:Array})],Pa.prototype,"forecast",void 0),y([k({type:String})],Pa.prototype,"clockFormat",void 0);customElements.define("hourly-forecast",Pa);class Na extends w{constructor(){super(...arguments);this.forecast=[];this.lang="en"}static styles=oe;_cleanup=null;connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._cleanup=Y(this.shadowRoot,".forecast-scroll")})}disconnectedCallback(){super.disconnectedCallback(),this._cleanup?.(),this._cleanup=null}getTemperature(e){return Math.round(e.temperature??e.temp??e.native_temperature??0)}render(){if(this.forecast.length===0)return g``;return g`
      <div class="forecast-container">
        <div class="forecast-title">${c.t("daily_forecast_title")}</div>
        <div class="forecast-scroll">
          ${this.forecast.map((e)=>g`
            <div class="forecast-item">
              <div class="forecast-time">${ya(e.datetime,this.lang)}</div>
              <div class="forecast-icon">${ae(e.condition||"sunny")}</div>
              <div class="forecast-temp">${this.getTemperature(e)}°</div>
            </div>
          `)}
        </div>
      </div>
    `}}y([k({type:Array})],Na.prototype,"forecast",void 0),y([k({type:String})],Na.prototype,"lang",void 0);customElements.define("daily-forecast",Na);class Se extends w{animationManager;forecastService;actionHandler;subscribedEntity=null;subscribedShowDaily=!1;_testTimeOfDay;static get styles(){return wa}static getConfigElement(){return document.createElement("dynamic-weather-card-editor")}static getStubConfig(){return{type:"custom:dynamic-weather-card",entity:"weather.home",show_hourly_forecast:!0,hourly_forecast_hours:u.hourlyForecastHours,show_daily_forecast:!0,daily_forecast_days:u.dailyForecastDays}}constructor(){super();this.config={},this.animationManager=new Pe(()=>this.getDrawParams()),this.forecastService=new Ne(()=>this.requestUpdate()),this.actionHandler=new Me(()=>this.hass,()=>this.config,(e,o)=>this.fireEvent(e,o))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{setTimeout(()=>{let e=this.shadowRoot?.querySelector(".canvas-container");if(e)this.animationManager.setup(e)},100)})}disconnectedCallback(){super.disconnectedCallback(),this.animationManager.destroy(),this.forecastService.unsubscribe()}updated(e){if(super.updated(e),e.has("hass")||e.has("config")){let a=this.config.entity,n=this.config.showDailyForecast??!1;if(this.hass&&a&&(a!==this.subscribedEntity||n!==this.subscribedShowDaily))this.subscribedEntity=a,this.subscribedShowDaily=n,this.forecastService.subscribe(this.hass,a,n)}let o=B({configLang:this.config?.language,hassLang:this.hass?.language});if(c.lang!==o)c.setLanguage(o)}getDrawParams(){if(!this.hass||!this.config.entity)return null;let e=Ce(this.hass,this.config.entity,this.config,this.forecastService.getHourlyData()),o=this.hass.states[this.config.entity],a=he(o||{},this.config.sunriseEntity,this.config.sunsetEntity,this.hass),n=this._testTimeOfDay||me(a);return{condition:e.condition,timeOfDay:n}}getDetailsConfig(){return{showHumidity:this.config.showHumidity??!0,showWind:this.config.showWind??!0,showWindGust:this.config.showWindGust??!0,showWindDirection:this.config.showWindDirection??!0,showSunriseSunset:this.config.showSunriseSunset??!0,clockFormat:this.config.clockFormat??"24h",windSpeedUnit:this.config.windSpeedUnit??"ms"}}setConfig(e){if(!e.entity)throw Error("Please define a weather entity");let o=e.show_hourly_forecast??e.show_forecast;if(this.config={type:"custom:dynamic-weather-card",entity:e.entity,icons_path:e.icons_path,name:e.name,height:e.height||u.height,showFeelsLike:e.show_feels_like!==!1,showWind:e.show_wind!==!1,showWindGust:e.show_wind_gust!==!1,showWindDirection:e.show_wind_direction!==!1,showHumidity:e.show_humidity!==!1,showMinTemp:e.show_min_temp!==!1,showForecast:e.show_forecast===!0,showHourlyForecast:o===!0,showDailyForecast:e.show_daily_forecast===!0,hourlyForecastHours:e.hourly_forecast_hours??u.hourlyForecastHours,dailyForecastDays:e.daily_forecast_days??u.dailyForecastDays,showSunriseSunset:e.show_sunrise_sunset!==!1,showClock:e.show_clock===!0,clockPosition:e.clock_position||u.clockPosition,clockFormat:e.clock_format||u.clockFormat,overlayOpacity:e.overlay_opacity!==void 0?e.overlay_opacity:u.overlayOpacity,textShadow:e.text_shadow!==void 0?e.text_shadow:u.textShadow,language:e.language||u.language,windSpeedUnit:e.wind_speed_unit||u.windSpeedUnit,layout:e.layout||u.layout,sunriseEntity:e.sunrise_entity||null,sunsetEntity:e.sunset_entity||null,templowAttribute:e.templow_attribute||null,tapAction:e.tap_action||{action:"more-info"},holdAction:e.hold_action||{action:"none"},doubleTapAction:e.double_tap_action||{action:"none"}},this.config.language)c.setLanguage(this.config.language)}fireEvent(e,o={}){let a=new CustomEvent(e,{detail:o,bubbles:!0,composed:!0});this.dispatchEvent(a)}getCardSize(){return 1}render(){if(!this.hass)return g`<div>No Home Assistant connection</div>`;let e=Ce(this.hass,this.config.entity,this.config,this.forecastService.getHourlyData()),o=this.hass.states[this.config.entity],a=he(o,this.config.sunriseEntity,this.config.sunsetEntity,this.hass),n=this._testTimeOfDay||me(a),i=`weather-card ${n.type}`,r=this.config.layout==="minimal",l=r?"56px":"200px",t=this.config.height?`${this.config.height}px`:l,s=ha(n),_=s?`background: linear-gradient(135deg, rgb(${s.start.r}, ${s.start.g}, ${s.start.b}), rgb(${s.end.r}, ${s.end.g}, ${s.end.b}));`:"",h=`--overlay-opacity: ${this.config.overlayOpacity!==void 0?this.config.overlayOpacity:u.overlayOpacity};`,m=this.config.textShadow??u.textShadow,b=m===0?"none":[`0 1px 2px rgba(0,0,0,${Math.min(1,0.4*m).toFixed(2)})`,`0 2px 6px rgba(0,0,0,${Math.min(1,0.3*m).toFixed(2)})`,`0 4px 12px rgba(0,0,0,${Math.min(1,0.2*m).toFixed(2)})`].join(", "),ie=m===0?"none":`drop-shadow(0px 1px 3px rgba(0,0,0,${Math.min(1,0.6*m).toFixed(2)}))`,re=`--card-text-shadow: ${b}; --card-icon-filter: ${ie};`,le=this.config.showHourlyForecast?this.forecastService.getHourlyForecast(this.config.hourlyForecastHours??u.hourlyForecastHours,e):[],Aa=this.config.showDailyForecast?this.forecastService.getDailyForecast(this.config.dailyForecastDays??u.dailyForecastDays,e):[],He=`min-height: ${t}; ${_}; ${h} ${re} cursor: pointer;`,Te=this.hass;return g`
      <ha-card
        @click=${(D)=>this.actionHandler.handleTap(D)}
        @pointerdown=${()=>this.actionHandler.handlePointerDown()}
        @pointerup=${(D)=>this.actionHandler.handlePointerUp(D)}
        @pointercancel=${(D)=>this.actionHandler.handlePointerUp(D)}
      >
        ${r?this.renderMinimal(e,a,Te,i,He):this.renderDefault(e,a,le,Aa,Te,i,He)}
      </ha-card>
    `}renderDefault(e,o,a,n,i,r,l){return g`
      <div class="${r}" style="${l}">
        <div class="canvas-container"></div>
        <div class="content">
          ${this.config.name&&this.config.name.trim()!==""?g`
            <div class="header">
              <div class="location">${this.config.name}</div>
            </div>
          `:""}
          <div class="primary">
            <div class="primary-left">
              <div class="condition">${c.t(e.condition)}</div>
              <div class="temperature">${e.temperature!=null?Math.round(e.temperature)+"°":c.t("no_data")}</div>
              ${this.config.showMinTemp?g`
                <div class="temp-range">
                  <span class="temp-min">↓ ${e.templow!=null?`${Math.round(e.templow)}°`:c.t("no_data")}</span>
                </div>
              `:""}
              ${this.config.showFeelsLike?g`
                <div class="feels-like">${c.t("feels_like")} ${e.apparentTemperature!=null?`${Math.round(e.apparentTemperature)}°`:c.t("no_data")}</div>
              `:""}
            </div>
            <weather-clock
              .format=${this.config.showClock&&this.config.clockPosition==="top"?this.config.clockFormat:null}
            ></weather-clock>
          </div>
          <div class="details ${this.config.showClock&&this.config.clockPosition==="details"?"details--clock":""}">
            <weather-details
              .weather=${e}
              .sunData=${o}
              .config=${this.getDetailsConfig()}
              .entityAttributes=${ee(i,this.config.entity)}
            ></weather-details>
            <weather-clock
              .format=${this.config.showClock&&this.config.clockPosition==="details"?this.config.clockFormat:null}
            ></weather-clock>
          </div>
          <hourly-forecast
            .forecast=${a}
            .clockFormat=${this.config.clockFormat??"24h"}
          ></hourly-forecast>
          <daily-forecast
            .forecast=${n}
            .lang=${c.lang}
          ></daily-forecast>
        </div>
      </div>
    `}renderMinimal(e,o,a,n,i){let r=e.temperature!=null?Math.round(e.temperature)+"°":c.t("no_data"),l=e.templow!=null?`↓ ${Math.round(e.templow)}°`:null;return g`
      <div class="${n} layout--minimal" style="${i}">
        <div class="canvas-container"></div>
        <div class="content">
          <div class="mini-primary">
            <div class="mini-temp">${r}</div>
            ${this.config.showMinTemp&&l?g`<div class="mini-temp-low">${l}</div>`:""}
          </div>
          <div class="mini-details">
            <div class="mini-condition">${c.t(e.condition)}</div>
            <weather-details
              .weather=${e}
              .sunData=${o}
              .config=${this.getDetailsConfig()}
              .entityAttributes=${ee(a,this.config.entity)}
              .compact=${!0}
            ></weather-details>
          </div>
          ${this.config.showClock?g`
            <weather-clock .format=${this.config.clockFormat}></weather-clock>
          `:""}
        </div>
      </div>
    `}}y([k({type:Object})],Se.prototype,"hass",void 0),y([k({type:Object})],Se.prototype,"config",void 0);class Fe extends w{constructor(){super(...arguments);this._config={}}setConfig(e){this._config={name:"",layout:u.layout,height:u.height,show_feels_like:u.showFeelsLike,show_wind:u.showWind,show_wind_gust:u.showWindGust,show_wind_direction:u.showWindDirection,show_humidity:u.showHumidity,show_min_temp:u.showMinTemp,show_hourly_forecast:u.showHourlyForecast,hourly_forecast_hours:u.hourlyForecastHours,show_daily_forecast:u.showDailyForecast,daily_forecast_days:u.dailyForecastDays,show_sunrise_sunset:u.showSunriseSunset,show_clock:u.showClock,clock_position:u.clockPosition,clock_format:u.clockFormat,overlay_opacity:u.overlayOpacity,text_shadow:u.textShadow,language:u.language,wind_speed_unit:u.windSpeedUnit,sunrise_entity:"",sunset_entity:"",...e}}updated(e){if(super.updated(e),e.has("hass")){let o=B({hassLang:this.hass?.language});if(c.lang!==o)c.setLanguage(o),this.requestUpdate()}}get _schema(){return[{name:"entity",required:!0,selector:{entity:{domain:["weather"]}}},{name:"name",selector:{text:{}}},{name:"layout",selector:{select:{options:[{label:c.t("editor.layout_default"),value:"default"},{label:c.t("editor.layout_minimal"),value:"minimal"}]}}},{name:"height",selector:{number:{min:50,max:800,step:10,mode:"box"}}},{name:"show_feels_like",selector:{boolean:{}}},{name:"show_wind",selector:{boolean:{}}},{name:"show_wind_gust",selector:{boolean:{}}},{name:"show_wind_direction",selector:{boolean:{}}},{name:"show_humidity",selector:{boolean:{}}},{name:"show_min_temp",selector:{boolean:{}}},{name:"show_hourly_forecast",selector:{boolean:{}}},{name:"hourly_forecast_hours",selector:{number:{min:1,max:24,step:1,mode:"box"}}},{name:"show_daily_forecast",selector:{boolean:{}}},{name:"daily_forecast_days",selector:{number:{min:1,max:14,step:1,mode:"box"}}},{name:"show_sunrise_sunset",selector:{boolean:{}}},{name:"sunrise_entity",selector:{entity:{domain:["sensor"]}}},{name:"sunset_entity",selector:{entity:{domain:["sensor"]}}},{name:"show_clock",selector:{boolean:{}}},{name:"clock_position",selector:{select:{options:[{label:c.t("editor.clock_position_top"),value:"top"},{label:c.t("editor.clock_position_details"),value:"details"}]}}},{name:"clock_format",selector:{select:{options:[{label:c.t("editor.clock_format_24h"),value:"24h"},{label:c.t("editor.clock_format_12h"),value:"12h"}]}}},{name:"overlay_opacity",selector:{number:{min:0,max:1,step:0.05,mode:"box"}}},{name:"text_shadow",selector:{number:{min:0,max:3,step:1,mode:"box"}}},{name:"language",selector:{select:{options:[{label:c.t("editor.language_auto"),value:"auto"},{label:c.t("editor.language_en"),value:"en"},{label:c.t("editor.language_ru"),value:"ru"},{label:c.t("editor.language_de"),value:"de"},{label:c.t("editor.language_nl"),value:"nl"},{label:c.t("editor.language_fr"),value:"fr"},{label:c.t("editor.language_es"),value:"es"},{label:c.t("editor.language_it"),value:"it"},{label:c.t("editor.language_sk"),value:"sk"},{label:c.t("editor.language_hu"),value:"hu"}]}}},{name:"wind_speed_unit",selector:{select:{options:[{label:c.t("editor.wind_speed_unit_ms"),value:"ms"},{label:c.t("editor.wind_speed_unit_kmh"),value:"kmh"}]}}}]}_computeLabel=(e)=>{let o=`editor.${e.name}`,a=c.t(o);return a===o?e.name:a};_valueChanged(e){let o=e.detail?.value;if(!o)return;this._config=o,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}render(){if(!this.hass)return g``;return g`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._schema}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}}y([k({attribute:!1})],Fe.prototype,"hass",void 0),y([U()],Fe.prototype,"_config",void 0);var Ma={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ae=(e)=>(...o)=>({_$litDirective$:e,values:o});class ze{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,a){this._$Ct=e,this._$AM=o,this._$Ci=a}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}}var Ca=(e)=>e.strings===void 0;var Q=(e,o)=>{let a=e._$AN;if(a===void 0)return!1;for(let n of a)n._$AO?.(o,!1),Q(n,o);return!0},ne=(e)=>{let o,a;do{if((o=e._$AM)===void 0)break;a=o._$AN,a.delete(e),e=o}while(a?.size===0)},Sa=(e)=>{for(let o;o=e._$AM;e=o){let a=o._$AN;if(a===void 0)o._$AN=a=new Set;else if(a.has(e))break;a.add(e),to(o)}};function ro(e){this._$AN!==void 0?(ne(this),this._$AM=e,Sa(this)):this._$AM=e}function lo(e,o=!1,a=0){let n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(o)if(Array.isArray(n))for(let r=a;r<n.length;r++)Q(n[r],!1),ne(n[r]);else n!=null&&(Q(n,!1),ne(n));else Q(this,e)}var to=(e)=>{e.type==Ma.CHILD&&(e._$AP??=lo,e._$AQ??=ro)};class De extends ze{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,a){super._$AT(e,o,a),Sa(this),this.isConnected=e._$AU}_$AO(e,o=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),o&&(Q(this,e),ne(this))}setValue(e){if(Ca(this._$Ct))this._$Ct._$AI(e,this);else{let o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}class Fa extends De{_key="";_onLangChange=null;render(e){return this._key=e,c.t(e)}reconnected(){this._onLangChange=()=>{this.setValue(c.t(this._key))},window.addEventListener("language-changed",this._onLangChange)}disconnected(){if(this._onLangChange)window.removeEventListener("language-changed",this._onLangChange)}}var so=Ae(Fa);try{customElements.define("dynamic-weather-card",Se),customElements.define("dynamic-weather-card-editor",Fe),console.log(`%cDynamic Weather Card %c${oa}`,"color: #007AFF; font-weight: bold; font-size: 14px;","color: #666; font-size: 12px;",`
Динамическая карточка погоды`),window.customCards=window.customCards||[];let e={type:"dynamic-weather-card",name:"Dynamic Weather Card",description:"Динамическая карточка погоды",preview:!0,documentationURL:"https://github.com/teuchezh/dynamic-weather-card"};window.customCards.push(e)}catch(e){console.error("❌ Ошибка при регистрации Dynamic Weather Card:",e)}export{so as t,B as resolveLanguage,c as i18n};
