(this["webpackJsonphc.visacomui"]=this["webpackJsonphc.visacomui"]||[]).push([[0],{12:function(e,t,n){},1523:function(e,t,n){},1524:function(e,t,n){},1526:function(e,t,n){},1527:function(e,t,n){},1528:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(26),s=n.n(r),i=(n(32),n(5)),l=n(6),o=n(8),j=n(7),d=n(0),u=function(e){var t=e.className,n=e.href,c=e.children;return Object(d.jsx)("a",{onClick:function(e){e.preventDefault(),window.history.pushState({},"",n);var t=new PopStateEvent("popstate");window.dispatchEvent(t)},className:t,href:n,children:c})},h=(n(34),function(){localStorage.removeItem("Veryfi"),window.location.reload(!1)}),b=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return null!=localStorage.getItem("Veryfi")?Object(d.jsxs)("div",{className:"topnav",children:[Object(d.jsx)(u,{href:"/",children:"Home"}),Object(d.jsx)(u,{href:"/shop",children:"Shop"}),Object(d.jsx)(u,{href:"/blog",children:"Blog"}),Object(d.jsx)(u,{href:"/",children:"Maps"}),Object(d.jsx)("div",{onClick:h,className:"topanvRight",style:{float:"right"},children:Object(d.jsx)(u,{href:"/",children:"Logout"})}),Object(d.jsx)("div",{className:"topanvRight",style:{float:"right"},children:Object(d.jsx)(u,{href:"/CMS",children:"CMS"})}),Object(d.jsx)("input",{type:"text",placeholder:"Search.."})]}):Object(d.jsxs)("div",{className:"topnav",children:[Object(d.jsx)(u,{href:"/",children:"Home"}),Object(d.jsx)(u,{href:"/shop",children:"Shop"}),Object(d.jsx)(u,{href:"/blog",children:"Blog"}),Object(d.jsx)(u,{href:"/",children:"Maps"}),Object(d.jsx)("input",{type:"text",placeholder:"Search.."}),Object(d.jsxs)("div",{className:"topanvRight",style:{float:"right"},children:[Object(d.jsx)(u,{href:"/login",style:{float:"right"},children:"Login"}),Object(d.jsx)(u,{href:"/register",style:{float:"right"},children:"Register"})]})]})}}]),n}(a.a.Component);n(12);var p=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{className:"open-button",onClick:function(){document.getElementById("myForm").style.display="block"},children:"Show Cart"}),Object(d.jsx)("div",{className:"form-popup",id:"myForm",children:Object(d.jsxs)("form",{action:"/action_page.php",className:"form-container",children:[Object(d.jsx)("h2",{children:"Your Cart"}),Object(d.jsx)("label",{className:"item",children:Object(d.jsx)("b",{children:"Item"})}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{className:"item",children:Object(d.jsx)("b",{children:"Item"})}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{className:"item",children:Object(d.jsx)("b",{children:"Item"})}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{className:"item",children:Object(d.jsx)("b",{children:"Item"})}),Object(d.jsx)("button",{type:"submit",className:"btn",children:"Checkout"}),Object(d.jsx)("button",{type:"button",className:"btn cancel",onClick:function(){document.getElementById("myForm").style.display="none"},children:"Close Preview"})]})})]})},O=function(){return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)(p,{}),Object(d.jsx)("h1",{children:"OkiPlants"})]})},m=function(){return Object(d.jsx)("div",{className:"footer",children:Object(d.jsx)("h4",{children:"App Version, pre alpha 0.4"})})},x=n(4),f=n.n(x),v=(n(1523),function(){return Object(d.jsx)("div",{className:"contactConteiner",children:Object(d.jsxs)("form",{action:"action_page.php",children:[Object(d.jsx)("label",{for:"fname",children:"Nick"}),Object(d.jsx)("input",{type:"text",id:"fname",name:"firstname",placeholder:"Your nick name.."}),Object(d.jsx)("label",{for:"lname",children:"E-mail"}),Object(d.jsx)("input",{type:"text",id:"lname",name:"lastname",placeholder:"Your e-mail.."}),Object(d.jsx)("label",{for:"country",children:"Category"}),Object(d.jsxs)("select",{id:"country",name:"country",children:[Object(d.jsx)("option",{value:"Product info",children:"Product"}),Object(d.jsx)("option",{value:"Question",children:"Question"}),Object(d.jsx)("option",{value:"Reclamation",children:"Reclamation"}),Object(d.jsx)("option",{value:"General",children:"General"})]}),Object(d.jsx)("label",{for:"subject",children:"Description"}),Object(d.jsx)("textarea",{id:"subject",name:"subject",placeholder:"Write something..",style:{height:"200px"}}),Object(d.jsx)("input",{type:"submit",value:"Submit"})]})})}),g=function(){return Object(d.jsxs)("div",{className:"rightcolumn",children:[Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("h3",{children:"Popular Plants"}),Object(d.jsx)("div",{className:"fakeimg",children:Object(d.jsx)("img",{src:f.a.image.cats(),alt:"",className:"PopularPlantsImg"})}),Object(d.jsx)("div",{className:"fakeimg",children:Object(d.jsx)("img",{src:f.a.image.people(),alt:"",className:"PopularPlantsImg"})}),Object(d.jsx)("div",{className:"fakeimg",children:Object(d.jsx)("img",{src:f.a.image.abstract(),alt:"",className:"PopularPlantsImg"})})]}),Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("h3",{children:"Contact Us"}),Object(d.jsx)(v,{})]}),Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("h3",{children:"Our Gallery"}),Object(d.jsx)("p",{children:f.a.random.words(5)})]})]})},y=n(3),w=(n(1524),n(2)),N=n.n(w),S=n(9);function k(){return(k=Object(S.a)(N.a.mark((function e(t,n){var c,a,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://okiplants.azurewebsites.net/api/account/login",c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})},e.next=4,fetch("https://okiplants.azurewebsites.net/api/account/login",c);case 4:return a=e.sent,e.next=7,a.text();case 7:if(r=e.sent,a.ok){e.next=12;break}window.alert("Z\u0142e Dane"),e.next=17;break;case 12:return e.next=14,localStorage.setItem("Veryfi",r);case 14:return window.history.pushState({},"","/"),e.next=17,window.location.reload(!1);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=function(){var e=Object(c.useState)(""),t=Object(y.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(y.a)(r,2),i=s[0],l=s[1];return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e,t){k.apply(this,arguments)}(n,i)},children:[Object(d.jsx)("h1",{children:"Sign In"}),Object(d.jsx)("label",{htmlFor:"email",children:Object(d.jsx)("b",{children:"Email"})}),Object(d.jsx)("input",{onChange:function(e){return a(e.target.value)},type:"text",placeholder:"Enter Email",name:"email",required:!0}),Object(d.jsx)("label",{htmlFor:"psw",children:Object(d.jsx)("b",{children:"Password"})}),Object(d.jsx)("input",{onChange:function(e){return l(e.target.value)},type:"password",placeholder:"Enter Password",name:"psw",required:!0}),Object(d.jsx)("div",{className:"clearfix",children:Object(d.jsx)("button",{type:"submit",className:"signupbtn",children:"Sign In"})})]})})};n(1526);function P(){return(P=Object(S.a)(N.a.mark((function e(t,n,c,a,r,s){var i;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://okiplants.azurewebsites.net/api/account/register",i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n,confirmPassword:c,firstName:a,lastName:r,phoneNumber:s})},e.next=4,fetch("https://okiplants.azurewebsites.net/api/account/register",i);case 4:if(e.sent.ok){e.next=9;break}window.alert("Co\u015b Posz\u0142o nie tak"),e.next=12;break;case 9:return window.history.pushState({},"","/"),e.next=12,window.location.reload(!1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(){var e=Object(c.useState)(""),t=Object(y.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(y.a)(r,2),i=s[0],l=s[1],o=Object(c.useState)(""),j=Object(y.a)(o,2),u=j[0],h=j[1],b=Object(c.useState)(""),p=Object(y.a)(b,2),O=p[0],m=p[1],x=Object(c.useState)(""),f=Object(y.a)(x,2),v=f[0],g=f[1],w=Object(c.useState)(""),N=Object(y.a)(w,2),S=N[0],k=N[1];return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e,t,n,c,a,r){P.apply(this,arguments)}(n,i,u,O,v,S)},children:[Object(d.jsx)("h1",{children:"Sign Up"}),Object(d.jsx)("p",{children:"Please fill in this form to create an account."}),Object(d.jsx)("hr",{}),Object(d.jsx)("label",{htmlFor:"email",children:Object(d.jsx)("b",{children:"Email"})}),Object(d.jsx)("input",{onChange:function(e){return a(e.target.value)},type:"text",placeholder:"Enter Email",name:"email",required:!0}),Object(d.jsx)("label",{htmlFor:"psw",children:Object(d.jsx)("b",{children:"Password"})}),Object(d.jsx)("input",{onChange:function(e){return l(e.target.value)},type:"password",placeholder:"Enter Password",name:"psw",required:!0}),Object(d.jsx)("label",{htmlFor:"psw-repeat",children:Object(d.jsx)("b",{children:"Repeat Password"})}),Object(d.jsx)("input",{onChange:function(e){return h(e.target.value)},type:"password",placeholder:"Repeat Password",name:"psw-repeat",required:!0}),Object(d.jsx)("label",{htmlFor:"firstname",children:Object(d.jsx)("b",{children:"First Name"})}),Object(d.jsx)("input",{onChange:function(e){return m(e.target.value)},type:"text",placeholder:"Enter First Name",name:"firstname",required:!0}),Object(d.jsx)("label",{htmlFor:"lastname",children:Object(d.jsx)("b",{children:"Last Name"})}),Object(d.jsx)("input",{onChange:function(e){return g(e.target.value)},type:"text",placeholder:"Enter Last Name",name:"lastname",required:!0}),Object(d.jsx)("label",{htmlFor:"PhoneNumber",children:Object(d.jsx)("b",{children:"Phone Number"})}),Object(d.jsx)("input",{onChange:function(e){return k(e.target.value)},type:"text",placeholder:"Enter Phone Number",name:"PhoneNumber",required:!0}),Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"checkbox",checked:"checked",name:"remember",style:{marginBottom:"15px"}})," Remember me"]}),Object(d.jsxs)("p",{children:["By creating an account you agree to our ",Object(d.jsx)("a",{href:"#",style:{color:"dodgerblue"},children:"Terms and Privacy"}),"."]}),Object(d.jsx)("div",{className:"clearfix",children:Object(d.jsx)("button",{type:"submit",className:"signupbtn",children:"Sign Up"})})]})})},E=function(e){var t=e.path,n=e.children,a=Object(c.useState)(window.location.pathname),r=Object(y.a)(a,2),s=r[0],i=r[1];return Object(c.useEffect)((function(){var e=function(){i(window.location.pathname)};return window.addEventListener("popstate",e),function(){window.removeEventListener("popstate",e)}}),[]),s===t?n:null},I=function(){return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("h2",{children:f.a.random.words(2)}),Object(d.jsx)("h5",{children:"Blog element to show, May 1, 2021"}),Object(d.jsx)("div",{className:"fakeimg",style:{height:"200px"},children:"Image"}),Object(d.jsx)("p",{children:f.a.random.words(2)}),Object(d.jsx)("p",{children:f.a.random.words(30)})]})},F=function(e){return Object(d.jsxs)("div",{className:"ShopItem",children:[Object(d.jsx)("div",{className:"ShopItemPic",children:Object(d.jsx)("img",{src:e.plantImage})}),Object(d.jsxs)("div",{className:"ShopItemDiscription",children:[Object(d.jsx)("div",{className:"ShopItemName",children:e.plantName}),Object(d.jsxs)("div",{className:"ShopItemPrice",children:[e.plantPrice,"$"]})]})]})},z=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={productData:null},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(S.a)(N.a.mark((function e(){var t,n,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":" *"}},"https://okiplants.azurewebsites.net/api/products",e.next=4,fetch("https://okiplants.azurewebsites.net/api/products",t);case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,this.setState({productData:JSON.parse(JSON.stringify(c))}),console.log(this.state.productData);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=[];return this.state.isLoading?Object(d.jsx)("div",{children:"loading"}):this.state.productData?(this.state.productData,Object(d.jsxs)("div",{className:"ShopContainer",children:[this.state.productData.forEach((function(n,c){console.log(e.state.productData[c].name),console.log(e.state.productData[c].price),t.push(Object(d.jsx)(F,{plantImage:f.a.image.nature(),plantName:e.state.productData[c].name,plantPrice:e.state.productData[c].price})),console.log(t)})),Object(d.jsx)("div",{children:t}),console.log(this.state.productData)]})):Object(d.jsx)("div",{children:"object is null"})}}]),n}(a.a.Component),M=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("blogCard",{}),Object(d.jsx)("blogCard",{}),Object(d.jsx)("blogCard",{}),Object(d.jsx)("blogCard",{})]})},U=n(10),A=(n(1527),function(e){var t=Object.values(e.data),n=Object.keys(e.data),c="";return t.forEach((function(e,a){c=c+n[a]+" : "+t[a]+" | "})),Object(d.jsxs)("div",{className:"CMS_Item",children:[c,Object(d.jsx)("div",{className:"CMSdelete"}),Object(d.jsx)("div",{className:"CMSedit"})]})}),T=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={productData:null},e}return Object(l.a)(n,[{key:"componentWillReceiveProps",value:function(){var e=Object(S.a)(N.a.mark((function e(t){var n,c,a,r,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("Veryfi"),c={method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":" *",Authorization:"bearer "+n}},a="https://okiplants.azurewebsites.net/"+t.url,e.next=5,fetch(a,c);case 5:return r=e.sent,e.next=8,r.json();case 8:s=e.sent,this.setState({productData:JSON.parse(JSON.stringify(s))}),console.log("uda\u0142o sie");case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(S.a)(N.a.mark((function e(){var t,n,c,a,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("Veryfi"),n={method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":" *",Authorization:"bearer "+t}},c="https://okiplants.azurewebsites.net/"+this.props.url,e.next=5,fetch(c,n);case 5:return a=e.sent,e.next=8,a.json();case 8:r=e.sent,this.setState({productData:JSON.parse(JSON.stringify(r))}),console.log("uda\u0142o sie");case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=[];return this.state.isLoading?Object(d.jsx)("div",{children:"loading"}):this.state.productData?Object(d.jsxs)("div",{className:"CMS_Listing",children:[this.state.productData.forEach((function(n,c){t.push(Object(d.jsx)(A,{data:e.state.productData[c]}))})),t]}):Object(d.jsx)("div",{children:"object is null"})}}]),n}(a.a.Component),J=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).state={SelectedUrl:Object(d.jsx)(T,{url:"api/account/manage/getusers"})},c.changeHandler=function(e){"Products"==e.target.value?c.setState({SelectedUrl:Object(d.jsx)(T,{url:"api/products"})}):"Users"==e.target.value?c.setState({SelectedUrl:Object(d.jsx)(T,{url:"api/account/manage/getusers"})}):"Orders"==e.target.value?c.setState({SelectedUrl:Object(d.jsx)(T,{url:"api/orders"})}):c.setState({SelectedUrl:""})},c.change=c.changeHandler.bind(Object(U.a)(c)),c}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{style:{padding:"15px"},children:[Object(d.jsxs)("form",{children:[Object(d.jsx)("label",{for:"Options",children:"Wybierz:"}),Object(d.jsxs)("select",{name:"Options",onChange:this.changeHandler,id:"Options",children:[Object(d.jsx)("option",{value:"Users",children:"Users"}),Object(d.jsx)("option",{value:"Products",children:"Products"}),Object(d.jsx)("option",{value:"Orders",children:"Orders"}),Object(d.jsx)("option",{value:"Blog",children:"Blog Posts"})]})]}),this.state.SelectedUrl]})}}]),n}(a.a.Component),R=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(E,{path:"",children:Object(d.jsx)(I,{})}),Object(d.jsx)(E,{path:"/",children:Object(d.jsx)(I,{})}),Object(d.jsx)(E,{path:"/blog",children:Object(d.jsx)(M,{})}),Object(d.jsx)(E,{path:"/login",children:Object(d.jsx)(C,{})}),Object(d.jsx)(E,{path:"/register",children:Object(d.jsx)(D,{})}),Object(d.jsx)(E,{path:"/shop",children:Object(d.jsx)(z,{})}),Object(d.jsx)(E,{path:"/CMS",children:Object(d.jsx)(J,{})})]})}}]),n}(a.a.Component),q=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(O,{}),Object(d.jsx)(b,{}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"leftcolumn",children:Object(d.jsx)(R,{})}),Object(d.jsx)(g,{})]}),Object(d.jsx)(m,{})]})};s.a.render(Object(d.jsx)(q,{}),document.querySelector("#root"))},32:function(e,t,n){},34:function(e,t,n){}},[[1528,1,2]]]);
//# sourceMappingURL=main.745b0db0.chunk.js.map