"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14],{9699:function(a,b,c){var d=c(5893),e=c(9800),f=c(1163);function g(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function h(){var a=g(["\n  width: 100%;\n  height: 35px;\n  border-bottom: 1px solid black;\n  margin-bottom: 9px;\n  line-height: 35px;\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]);return h=function(){return a},a}function i(){var a=g(["\n  color: #55b2d4;\n  font-weight: 700;\n  font-size: 13px;\n  margin-right: 6px;\n"]);return i=function(){return a},a}function j(){var a=g(["\n  color: black;\n  font-weight: 400;\n  font-size: 8px;\n"]);return j=function(){return a},a}function k(){var a=g(["\n  width: 75px;\n  height: 19px;\n  font-size: 10px;\n  background-color: #dddddd;\n  border: none;\n  border-radius: 4px;\n  margin-left: auto;\n  cursor: pointer;\n"]);return k=function(){return a},a}function l(){var a=g(["\n  color: #55b2d4;\n  font-size: 13px;\n  font-weight: 700;\n"]);return l=function(){return a},a}var m=e.Z.div(h()),n=e.Z.span(i()),o=e.Z.span(j()),p=e.Z.button(k()),q=e.Z.div(l());b.Z=function(a){var b=(0,f.useRouter)();return(0,d.jsxs)(m,{children:[(0,d.jsx)(n,{children:a.mainTitle}),(0,d.jsx)(o,{children:a.subTitle}),"/diary/new"===b.asPath&&(0,d.jsx)(q,{children:"| 글 등록"}),b.asPath.includes("edit")&&(0,d.jsx)(q,{children:"| 글 수정"}),"TODAY STORY"===a.subTitle&&(0,d.jsx)(p,{onClick:function(){b.push("/diary/new")},children:"다이어리 작성"})]})}},5396:function(a,b,c){c.d(b,{u:function(){return h},T:function(){return i}});var d=c(7283);function e(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function f(){var a=e(["\n  query fetchBoard($number: Int) {\n    fetchBoard(number: $number) {\n      writer\n      title\n      contents\n      createdAt\n    }\n  }\n"]);return f=function(){return a},a}function g(){var a=e(["\n  mutation deleteBoard($number: Int) {\n    deleteBoard(number: $number) {\n      message\n    }\n  }\n"]);return g=function(){return a},a}var h=(0,d.Ps)(f()),i=(0,d.Ps)(g())},8014:function(a,b,c){c.d(b,{Z:function(){return N}});var d=c(4051),e=c.n(d),f=c(5893),g=c(319),h=c(7887),i=c(1163),j=c(7294),k=c(5396),l=c(9699),m=c(9800);function n(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function o(){var a=n(["\n  width: 100%;\n  height: 316px;\n  border: 1px solid #dddddd;\n  display: flex;\n  flex-direction: column;\n  padding: 18px 19px;\n"]);return o=function(){return a},a}function p(){var a=n(["\n  width: 100%;\n  height: 18px;\n  color: #666666;\n  border: 1px solid #dddddd;\n  border-radius: 3px;\n  font-size: 3px;\n"]);return p=function(){return a},a}function q(){var a=n(["\n  width: 100%;\n  height: 248px;\n  border: 1px solid #dddddd;\n  margin-top: 14px;\n  padding-top: 2px;\n  border-radius: 3px;\n  font-size: 10px;\n  resize: none;\n  :focus {\n    outline: none;\n  }\n"]);return q=function(){return a},a}function r(){var a=n(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  padding: 15px;\n"]);return r=function(){return a},a}function s(){var a=n(["\n  width: 70px;\n  height: 23px;\n  border: 1px solid #666666;\n  background-color: #d9d9d9;\n  font-size: 12px;\n  color: #ffffff;\n  margin-right: 28px;\n  cursor: pointer;\n"]);return s=function(){return a},a}function t(){var a=n(["\n  width: 70px;\n  height: 23px;\n  border: 1px solid #666666;\n  background-color: #d9d9d9;\n  font-size: 12px;\n  color: #ffffff;\n  cursor: pointer;\n"]);return t=function(){return a},a}var u=m.Z.div(o()),v=m.Z.input(p()),w=m.Z.textarea(q()),x=m.Z.div(r()),y=m.Z.button(s()),z=m.Z.button(t()),A=function(a){var b,c,d,e,g,h;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.Z,{mainTitle:"Diary",subTitle:""}),(0,f.jsxs)(u,{children:[(0,f.jsx)(v,{placeholder:" 제목을 입력해주세요",onChange:a.onChangeTitle,defaultValue:(null===(b=a.data)|| void 0===b?void 0:null===(c=b.fetchBoard)|| void 0===c?void 0:c.title)||""}),(0,f.jsx)(w,{onChange:a.onChangeContents,defaultValue:(null===(d=a.data)|| void 0===d?void 0:null===(e=d.fetchBoard)|| void 0===e?void 0:e.contents)||""})]}),(0,f.jsxs)(x,{children:[(0,f.jsx)(y,{onClick:(null===(g=a.data)|| void 0===g?void 0:g.fetchBoard)?a.onClickUpdate:a.onClickCreate,children:(null===(h=a.data)|| void 0===h?void 0:h.fetchBoard)?"수정하기":"등록하기"}),(0,f.jsx)(z,{onClick:a.onClickCancel,children:"취소하기"})]})]})},B=c(7283);function C(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function D(){var a=C(["\n  mutation createBoard($writer: String, $title: String, $contents: String) {\n    createBoard(writer: $writer, title: $title, contents: $contents) {\n      _id\n      number\n    }\n  }\n"]);return D=function(){return a},a}function E(){var a=C(["\n  mutation updateBoard(\n    $number: Int\n    $writer: String\n    $title: String\n    $contents: String\n  ) {\n    updateBoard(\n      number: $number\n      writer: $writer\n      title: $title\n      contents: $contents\n    ) {\n      _id\n      number\n    }\n  }\n"]);return E=function(){return a},a}var F=(0,B.Ps)(D()),G=(0,B.Ps)(E());function H(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=new Array(b);c<b;c++)d[c]=a[c];return d}function I(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(j){c(j);return}h.done?b(i):Promise.resolve(i).then(d,e)}function J(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){var f=a.apply(b,c);function g(a){I(f,d,e,g,h,"next",a)}function h(a){I(f,d,e,g,h,"throw",a)}g(void 0)})}}function K(a,b){return null!=b&&"undefined"!=typeof Symbol&&b[Symbol.hasInstance]?b[Symbol.hasInstance](a):a instanceof b}function L(a,b){return(function(a){if(Array.isArray(a))return a})(a)||(function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}})(a,b)||M(a,b)||(function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")})()}function M(a,b){if(a){if("string"==typeof a)return H(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return H(a,b)}}var N=function(){var a,b,c=(0,j.useState)(""),d=c[0],l=c[1],m=(0,j.useState)(""),n=m[0],o=m[1],p=(0,i.useRouter)(),q=L((0,g.D)(F),1)[0],r=L((0,g.D)(G),1)[0],s=(0,h.a)(k.u,{variables:{number:Number(p.query.diaryId)}}).data,t=(a=J(e().mark(function a(){var b,c;return e().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(d){a.next=3;break}return alert("제목을 입력하세요"),a.abrupt("return");case 3:if(n){a.next=6;break}return alert("내용을 입력하세요"),a.abrupt("return");case 6:return a.prev=6,a.next=10,q({variables:{writer:"본인의 이름을 넣어주세요",title:d,contents:n}});case 10:c=a.sent,alert("다이어리 등록 성공!"),p.push("/diary/".concat(null===(b=c.data)|| void 0===b?void 0:b.createBoard.number)),a.next=18;break;case 15:a.prev=15,a.t0=a.catch(6),alert(a.t0);case 18:case"end":return a.stop()}},a,null,[[6,15]])})),function(){return a.apply(this,arguments)}),u=(b=J(e().mark(function a(){var b,c,f;return e().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return f={number:Number(p.query.diaryId),title:d,contents:n},d||(f.title=null==s?void 0:null===(b=s.fetchBoard)|| void 0===b?void 0:b.title),n||(f.contents=null==s?void 0:null===(c=s.fetchBoard)|| void 0===c?void 0:c.contents),a.prev=4,a.next=7,r({variables:f});case 7:alert("게시물 수정에 성공했습니다!"),p.push("/diary/".concat(p.query.diaryId)),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(4),K(a.t0,Error)&&alert("내용을 확인해주세요");case 14:case"end":return a.stop()}},a,null,[[4,11]])})),function(){return b.apply(this,arguments)});return(0,f.jsx)(A,{onChangeTitle:function(a){l(a.target.value)},onChangeContents:function(a){o(a.target.value)},onClickCreate:t,onClickUpdate:u,onClickCancel:function(){p.push("/diary")},data:s})}},319:function(a,b,c){c.d(b,{D:function(){return k}});var d=c(655),e=c(7294),f=c(4012),g=c(2152),h=c(4692),i=c(990),j=c(6252);function k(a,b){var c=(0,j.x)(null==b?void 0:b.client);(0,h.Vp)(a,h.n_.Mutation);var k=(0,e.useState)({called:!1,loading:!1,client:c}),l=k[0],m=k[1],n=(0,e.useRef)({result:l,mutationId:0,isMounted:!0,client:c,mutation:a,options:b});Object.assign(n.current,{client:c,options:b,mutation:a});var o=(0,e.useCallback)(function(a){void 0===a&&(a={});var b=n.current,c=b.client,e=b.options,h=b.mutation,j=(0,d.pi)((0,d.pi)({},e),{mutation:h});n.current.result.loading||j.ignoreResults||m(n.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:c});var k=++n.current.mutationId,l=(0,f.J)(j,a);return c.mutate(l).then(function(b){var d,e,f,h=b.data,j=b.errors,o=j&&j.length>0?new i.c({graphQLErrors:j}):void 0;if(k===n.current.mutationId&&!l.ignoreResults){var p={called:!0,loading:!1,data:h,error:o,client:c};n.current.isMounted&&!(0,g.D)(n.current.result,p)&&m(n.current.result=p)}return null===(e=null===(d=n.current.options)|| void 0===d?void 0:d.onCompleted)|| void 0===e||e.call(d,b.data),null===(f=a.onCompleted)|| void 0===f||f.call(a,b.data),b}).catch(function(b){var d,e,f,h;if(k===n.current.mutationId&&n.current.isMounted){var i={loading:!1,error:b,data:void 0,called:!0,client:c};(0,g.D)(n.current.result,i)||m(n.current.result=i)}if((null===(d=n.current.options)|| void 0===d?void 0:d.onError)||l.onError)return null===(f=null===(e=n.current.options)|| void 0===e?void 0:e.onError)|| void 0===f||f.call(e,b),null===(h=a.onError)|| void 0===h||h.call(a,b),{data:void 0,errors:b};throw b})},[]),p=(0,e.useCallback)(function(){m({called:!1,loading:!1,client:c})},[]);return(0,e.useEffect)(function(){return n.current.isMounted=!0,function(){n.current.isMounted=!1}},[]),[o,(0,d.pi)({reset:p},l)]}}}])