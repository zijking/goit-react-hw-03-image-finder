(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__2MsIs",imageGalleryItemImage:"ImageGalleryItem_imageGalleryItemImage__3cGAF"}},11:function(e,t,a){e.exports={overlay:"Modal_overlay__MBhtt",modal:"Modal_modal__OS11U"}},16:function(e,t,a){e.exports={button:"ButtonLoadMore_button__uqbL4"}},17:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__znj59"}},24:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),o=a(13),i=a.n(o),s=(a(24),a(3)),l=a(4),u=a(6),h=a(5),m=a(14),d=a(7),g=a.n(d),b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={search:""},e.onChangeHandler=function(t){var a=t.currentTarget,n=a.name,r=a.value;e.setState(Object(m.a)({},n,r))},e.onSubmitHandel=function(t){""!==e.state.search.trim()?(t.preventDefault(),e.props.onSubmit(e.state.search)):alert("Write SEARCH WORD !!!")},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:g.a.searchbar,children:Object(n.jsxs)("form",{onSubmit:this.onSubmitHandel,className:g.a.searchForm,children:[Object(n.jsx)("button",{type:"submit",className:g.a.searchFormButton,children:Object(n.jsx)("span",{className:g.a.searchFormButtonLabel})}),Object(n.jsx)("input",{name:"search",className:g.a.searchFormInput,onChange:this.onChangeHandler,type:"text",placeholder:"Search images and photos",value:this.state.search})]})})}}]),a}(r.Component),p=a(9),f=a.n(p),j=a(12),y=a(15),v="19017356-b8756222892cfba3d959da30c",O="https://pixabay.com/api/",S=function(){function e(){Object(s.a)(this,e),this.page=1,this.searchWord=""}return Object(l.a)(e,[{key:"searchImg",value:function(){return fetch("".concat(O,"\\?key=").concat(v,"&q=").concat(this.searchWord,"&per_page=").concat(20,"&page=").concat(this.page)).then((function(e){return e.json()}))}},{key:"incrementPage",value:function(){this.page+=1}},{key:"searchImgById",value:function(e){return fetch("".concat(O,"\\?key=").concat(v,"&id=").concat(e)).then((function(e){return e.json()}))}},{key:"resetPage",value:function(){this.page=1}},{key:"setPage",set:function(e){e!==this.page&&e<this.page&&(this.page=e,console.log("new page big"))}},{key:"query",get:function(){return this.searchWord}},{key:"queryWord",set:function(e){this.searchWord=e}},{key:"currentPage",get:function(){return this.page}}]),e}(),w=a(16),x=a.n(w);var _=function(e){var t=e.onClick;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("button",{type:"button",className:x.a.button,onClick:t,children:"Load more"})})},k=a(17),I=a.n(k),F=a(10),C=a.n(F);var B=function(e){var t=e.img,a=e.onClickM;return Object(n.jsx)("li",{id:t.id,onClick:function(e){if("LI"===e.currentTarget.nodeName){var t=e.currentTarget.id;a(t)}},className:C.a.imageGalleryItem,children:Object(n.jsx)("img",{src:t.webformatURL,alt:t.tags,className:C.a.imageGalleryItemImage})})},M=a(11),L=a.n(M),N=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.toggleModal()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.toggleModal()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.item;return Object(n.jsx)("div",{onClick:this.handleBackdropClick,className:L.a.overlay,children:Object(n.jsx)("div",{className:L.a.modal,children:Object(n.jsx)("img",{src:e.largeImageURL,alt:e.tags})})})}}]),a}(r.Component),G=(a(26),a(18)),P=a.n(G);var T=function(){return Object(n.jsx)("div",{className:"loader",children:Object(n.jsx)(P.a,{type:"TailSpin",color:"#3F51B5",height:500,width:500})})},W=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:null,modalShow:!1,modalIndex:0,loading:!1},e.apiSearch=new S,e.fetchImg=function(){e.apiSearch.queryWord=e.props.sword,e.setState({loading:!0}),setTimeout((function(){e.apiSearch.searchImg().then((function(t){e.setState({images:t.hits})})).finally(e.setState({loading:!1}))}),1e3)},e.modalShow=function(){e.setState((function(e){return{modalShow:!e.modalShow}}))},e.handlerModal=function(t){var a=Number(t),n=e.state.images.findIndex((function(e){return e.id===a}));e.setState({modalIndex:n}),e.modalShow()},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){e.sword!==this.props.sword&&(this.apiSearch.resetPage(),this.setState({images:null}),this.fetchImg())}},{key:"onCkickLoadMore",value:function(){var e=Object(y.a)(f.a.mark((function e(t){var a=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.apiSearch.incrementPage();case 2:return e.next=4,this.apiSearch.searchImg().then((function(e){a.setState((function(t){var a=t.images;return{images:[].concat(Object(j.a)(a),Object(j.a)(e.hits))}}))}));case 4:window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.images,r=t.modalIndex,c=t.loading;return Object(n.jsxs)(n.Fragment,{children:[c&&Object(n.jsx)(T,{}),Object(n.jsx)("ul",{className:I.a.imageGallery,children:a&&a.map((function(t){return Object(n.jsx)(B,{img:t,onClickM:e.handlerModal},t.id)}))}),a&&Object(n.jsx)(_,{onClick:function(){return e.onCkickLoadMore()}}),this.state.modalShow&&Object(n.jsx)(N,{toggleModal:this.modalShow,item:a[r]})]})}}]),a}(r.Component),D=(a(48),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={modalShow:!1,sword:""},e.searchImg=new S,e.handelSubmit=function(t){e.setState({sword:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(b,{onSubmit:this.handelSubmit}),Object(n.jsx)(W,{sword:this.state.sword})]})}}]),a}(r.Component)),E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,50)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(D,{})}),document.getElementById("root")),E()},7:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__3ecvv",searchForm:"Searchbar_searchForm__8h8gC",searchFormButton:"Searchbar_searchFormButton__38PBj",searchFormBbutton:"Searchbar_searchFormBbutton__21ttE",searchFormButtonLabel:"Searchbar_searchFormButtonLabel__2mYEx",searchFormInput:"Searchbar_searchFormInput__2joHj",searchFormISnput:"Searchbar_searchFormISnput__2B1SB"}}},[[49,1,2]]]);
//# sourceMappingURL=main.7bc6c35e.chunk.js.map