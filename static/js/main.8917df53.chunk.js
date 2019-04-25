(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(t,e,n){t.exports=n(83)},42:function(t,e,n){},58:function(t,e,n){},59:function(t,e,n){},62:function(t,e,n){},63:function(t,e,n){},64:function(t,e,n){},82:function(t,e,n){},83:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(20),s=n.n(i),o=n(6),c=n(7),l=n(9),u=n(8),d=n(10),h=(n(42),n(15)),m=(n(23),n(84)),f=n(85),p=n(86),g=n(94),v=n(87),b=n(88),y=n(89),E=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={value:[],isOpen:!1},n.handleChange=function(t){n.setState({value:t.target.value})},n.handleSubmit=function(t){sessionStorage.clear()},n.toggle=function(){n.setState({isOpen:!n.state.isOpen})},n}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m.a,{color:"#464EA3",dark:!0,expand:"md"},r.a.createElement(f.a,{tag:h.b,to:"/"},"Common Ground"),r.a.createElement(p.a,{onClick:this.toggle}),r.a.createElement(g.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(v.a,{navbar:!0},r.a.createElement(b.a,null,r.a.createElement(y.a,{tag:h.b,to:"/"},"Home")),r.a.createElement(b.a,null,r.a.createElement(y.a,{tag:h.b,to:"/topartists"},"Top Artists")),r.a.createElement(b.a,null,r.a.createElement(y.a,{tag:h.b,to:"/shared"},"Share")),r.a.createElement(b.a,null,r.a.createElement(y.a,{tag:h.b,to:"/weather"},"Weather")),r.a.createElement(b.a,null,r.a.createElement(y.a,{onClick:this.handleSubmit,tag:h.b,to:"/login"},"Log Out"))))))}}]),e}(a.Component),O=n(17),j=(n(58),n(90)),S=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(j.a,null,r.a.createElement("h1",null,"Hello ",this.props.currentUser))}}]),e}(a.Component),k=(n(59),"http://localhost:5002"),I={get:{spotifyTopArtists:function(t){return fetch("".concat("https://api.spotify.com/v1","/me/top/artists?time_range=medium_term&limit=50"),{headers:{Accept:"application/json",Authorization:"Bearer ".concat(t),"Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(t){return t.items.map(function(t){return t.id}).join()})},spotifyArtistsInfo:function(t,e){return fetch("https://api.spotify.com/v1/artists?ids=".concat(t),{headers:{Accept:"application/json",Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}}).then(function(t){return t.json()})},JSONArtistDetail:function(t){return fetch("".concat(k,"/users/").concat(t,"/?_embed=artists")).then(function(t){return t.json()}).then(function(t){return t.artists[0].artistDetail})},JSONArtistList:function(t){return fetch("".concat(k,"/users/").concat(t)).then(function(t){return t.json()}).then(function(t){return t.artistList.split(",")})},JSONUsers:function(){return fetch("".concat(k,"/users")).then(function(t){return t.json()})}},post:{toJSONServer:function(t,e){return fetch("".concat(k,"/").concat(t),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(function(t){return t.json()})}}},w=n(91),A=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={popoverOpen:!1},n.toggle=function(){n.setState({popoverOpen:!n.state.popoverOpen})},n.handleSubmit=function(t){n.props.tweener(t)},n}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"card",id:this.props.artist.artistId},r.a.createElement("div",{className:"card-body"},r.a.createElement("img",{src:this.props.artist.image,className:"card-img",alt:"Artist"}),r.a.createElement(w.a,{onClick:this.handleSubmit,id:"a"+this.props.artist.artistId.slice(0,5),type:"button"},this.props.artist.name)))}}]),e}(a.Component),N=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={artists:[]},n}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=sessionStorage.getItem("userId");I.get.JSONArtistDetail(e).then(function(e){return t.setState({artists:e})})}},{key:"render",value:function(){return r.a.createElement(j.a,{className:"topArtists"},r.a.createElement("h1",null,"Top Artists"),this.state.artists.map(function(t){return r.a.createElement(A,{key:t.artistId,artist:t})}))}}]),e}(a.Component),C=(n(60),n(61),n(62),function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=document.createElement("script");t.src="https://cdn.rawgit.com/oauth-io/oauth-js/c5af4519/dist/oauth.js",document.body.appendChild(t)}},{key:"handleClick",value:function(t){t.preventDefault(),this.props.authenticateUser(),this.props.history.push("/home")}},{key:"render",value:function(){return r.a.createElement(j.a,null,r.a.createElement("h1",null,"Welcome to Common Ground"),r.a.createElement("h3",null,"Please log in to continue"),r.a.createElement(w.a,{onClick:this.handleClick.bind(this),size:"lg","bg-color":"#E3E0DA"},r.a.createElement("span",{className:"fa fa-spotify"})," Sign in with Spotify"))}}]),e}(a.Component)),U=Object(O.e)(C),L=(n(63),n(64),n(93)),J=n(22),D=n(92),T=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).handleClick=function(t){n.props.removeArtist(t)},n}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement(D.a,{className:"animated fadeIn flip-card"},r.a.createElement("div",{className:"flip-card-inner"},r.a.createElement("div",{className:"flip-card-front"},r.a.createElement("img",{className:"flip-image",src:this.props.artist.image,alt:"artist"})),r.a.createElement("div",{className:"flip-card-back"},r.a.createElement("h2",null,this.props.artist.name),r.a.createElement(w.a,{id:this.props.artist.artistId,onClick:this.handleClick},"Remove Artist"))))}}]),e}(a.Component),x=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={active:[],second:[],shared:[],onlyActive:[],onlySecond:[],playlist:[]},n.sharedArtists=function(){var t=n.state.active,e=n.state.second,a=t.filter(function(t){return e.find(function(e){return e.artistId===t.artistId})}),r=t.filter(function(t){return!e.find(function(e){return e.artistId===t.artistId})}),i=e.filter(function(e){return!t.find(function(t){return t.artistId===e.artistId})});n.setState({shared:a,onlyActive:r,onlySecond:i})},n.tweener=function(t){if(n.state.playlist.length<5){var e=t.target.parentNode.parentNode;e.classList.add("outFront");var a=t.target.previousSibling,r=Object(J.b)(a),i=n.state.active.concat(n.state.onlySecond).find(function(t){return t.artistId===e.id});n.setState({playlist:n.state.playlist.concat(i)}),setTimeout(function(){e.classList.add("display-none")},2600),a.classList.add("outFront"),Object(J.c)({from:0,to:{x:-1100,y:-1100,rotate:180},duration:2e3,ease:J.a.backOut,flip:2}).start(r.set)}},n.removeArtist=function(t){var e=t.target.id;console.log(e);var a=n.state.playlist.filter(function(t){return t.artistId!==e});n.setState({playlist:a})},n}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=sessionStorage.getItem("userId");I.get.JSONArtistDetail(e).then(function(e){return t.setState({active:e})}),I.get.JSONArtistDetail(3).then(function(e){return t.setState({second:e})})}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"shared"},r.a.createElement("h1",null,"Shared Artists"),r.a.createElement(w.a,{onClick:this.sharedArtists},"Click to make Magic"),r.a.createElement(L.a,{className:"playlist"},this.state.playlist.map(function(e){return r.a.createElement(T,{key:e.artistId,artist:e,removeArtist:t.removeArtist})})),r.a.createElement("div",{className:"fixer"},r.a.createElement("div",{className:"container left"},this.state.onlyActive.map(function(e){return r.a.createElement(A,{key:e.artistId,artist:e,tweener:t.tweener})})),r.a.createElement("div",{className:"container center"},this.state.shared.map(function(e){return r.a.createElement(A,{key:e.artistId,artist:e,tweener:t.tweener})})),r.a.createElement("div",{className:"container right"},this.state.onlySecond.map(function(e){return r.a.createElement(A,{key:e.artistId,artist:e,tweener:t.tweener})}))))}}]),e}(a.Component),W=n(12),M=n(36),_=n.n(M),F=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={delay:100,result:"No result"},n.handleScan=n.handleScan.bind(Object(W.a)(Object(W.a)(n))),n}return Object(d.a)(e,t),Object(c.a)(e,[{key:"handleScan",value:function(t){this.setState({result:t})}},{key:"handleError",value:function(t){console.error(t)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(_.a,{delay:this.state.delay,style:{height:240,width:320},onError:this.handleError,onScan:this.handleScan,facingMode:"rear"}),r.a.createElement("p",null,this.state.result))}}]),e}(a.Component),z=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={isLoggedIn:!1,allUsers:[],currentUser:[],userId:[]},n.isAuthenticated=function(){return null!==sessionStorage.getItem("access_token")},n.authenticateUser=function(){window.OAuth.initialize("rKtNmq0HtvZws6tMLOJFcXiyypo"),window.OAuth.popup("spotify",{cache:!0}).done(function(t){sessionStorage.setItem("access_token",t.access_token),t.me().then(function(e){sessionStorage.setItem("username",e.name),n.setState({currentUser:e.name,isLoggedIn:!0});var a=n.state.allUsers.find(function(t){return t.username===e.name});a?(n.setState({userId:a.id}),sessionStorage.setItem("userId",a.id)):I.get.spotifyTopArtists(t.access_token).then(function(t){var e={artistList:t,username:n.state.currentUser};return I.post.toJSONServer("users",e).then(function(t){return n.setState({userId:t.id}),sessionStorage.setItem("userId",t.id),t}),e}).then(function(e){I.get.spotifyArtistsInfo(e.artistList,t.access_token).then(function(t){return t.artists.map(function(t){return{name:t.name,artistId:t.id,image:t.images[1].url}})}).then(function(t){var e={userId:parseInt(sessionStorage.getItem("userId")),artistDetail:t};I.post.toJSONServer("artists",e)})})})})},n}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=sessionStorage.getItem("username"),n=sessionStorage.getItem("userId");e&&this.setState({currentUser:e,isLoggedIn:!0,userId:n}),this.state.isLoggedIn||I.get.JSONUsers().then(function(e){t.setState({allUsers:e})})}},{key:"render",value:function(){var t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.b,{exact:!0,path:"/",render:function(e){return t.isAuthenticated()?r.a.createElement(O.a,{to:"/home"}):r.a.createElement(O.a,{to:"/login"})}}),r.a.createElement(O.b,{path:"/home",render:function(){return r.a.createElement(S,{currentUser:t.state.currentUser})}}),r.a.createElement(O.b,{path:"/login",render:function(){return r.a.createElement(U,{authenticateUser:t.authenticateUser})}}),r.a.createElement(O.b,{exact:!0,path:"/topartists",render:function(){return t.isAuthenticated()?r.a.createElement(N,{userId:t.state.userId}):r.a.createElement(O.a,{to:"/login"})}}),r.a.createElement(O.b,{exact:!0,path:"/weather",render:function(){return t.isAuthenticated()?r.a.createElement(F,{userId:t.state.userId}):r.a.createElement(O.a,{to:"/login"})}}),r.a.createElement(O.b,{exact:!0,path:"/shared",render:function(){return t.isAuthenticated()?r.a.createElement(x,{userId:t.state.userId}):r.a.createElement(O.a,{to:"/login"})}}))}}]),e}(a.Component),B=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement(z,null))}}]),e}(a.Component),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(t,e){navigator.serviceWorker.register(t).then(function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}}).catch(function(t){console.error("Error during service worker registration:",t)})}n(82);!function(t){if("serviceWorker"in navigator){if(new URL("/tests",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/tests","/service-worker.js");P?(function(t,e){fetch(t).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(t){t.unregister().then(function(){window.location.reload()})}):R(t,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,t),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):R(e,t)})}}(),s.a.render(r.a.createElement(h.a,null,r.a.createElement(B,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.8917df53.chunk.js.map