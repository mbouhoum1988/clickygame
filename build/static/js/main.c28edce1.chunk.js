(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/img1.2839cfb7.jpg"},,,,function(e,t,a){e.exports=a.p+"static/media/img2.0bb6e406.jpg"},function(e,t,a){e.exports=a.p+"static/media/img3.a708b4ea.jpg"},function(e,t,a){e.exports=a.p+"static/media/img4.9c73c946.jpg"},function(e,t,a){e.exports=a.p+"static/media/img5.5bd7f7ab.jpg"},function(e,t,a){e.exports=a.p+"static/media/img6.0f7e9eb2.jpg"},function(e,t,a){e.exports=a.p+"static/media/img7.59c4090f.jpg"},function(e,t,a){e.exports=a.p+"static/media/img8.7662399b.jpg"},function(e,t,a){e.exports=a.p+"static/media/img9.01c834f5.jpg"},function(e,t,a){e.exports=a.p+"static/media/img10.7bf7cb12.jpg"},function(e,t,a){e.exports=a.p+"static/media/img11.a965f309.jpg"},function(e,t,a){e.exports=a.p+"static/media/img12.399fbb92.jpg"},function(e,t,a){e.exports=a.p+"static/media/img13.3ecb187b.jpg"},function(e,t,a){e.exports=a.p+"static/media/img14.2f4822b6.jpg"},function(e,t,a){e.exports=a.p+"static/media/img15.8ddac040.jpg"},function(e,t,a){e.exports=a.p+"static/media/img16.4a6bbe43.jpg"},function(e,t,a){e.exports=a.p+"static/media/img17.b9f6dfcb.jpg"},function(e,t,a){e.exports=a.p+"static/media/img18.12cf3b6d.jpg"},function(e,t,a){e.exports=a(34)},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),c=a.n(i),n=a(8),s=a.n(n),r=a(1),o=a(2),l=a(4),m=a(3),p=a(5),u=a(9),d=a.n(u),g=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("header",{className:"app-header"},c.a.createElement("div",{className:"container"},c.a.createElement("a",{className:"link",href:"/clickygame/"},c.a.createElement("h2",null,"Clicky Game")),c.a.createElement("h2",null,this.props.guess),c.a.createElement("h2",null,"score = ",this.props.score," | high score = ",this.props.highscore)))}}]),t}(i.Component),f=a(6),h=a.n(f);var b=function(){return c.a.createElement("div",{className:"fluid-container"},c.a.createElement("img",{className:"jum-image",src:h.a,alt:"imagefont"}),c.a.createElement("div",{className:"div-image"},c.a.createElement("h1",null,"Clicky Game!"),c.a.createElement("p",null,"Click on an image to earn points, but don't click on any more than once!")))},j=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"botom"},c.a.createElement("div",{className:"para"},"react clicky game"))}}]),t}(i.Component),k=a(10),y=a.n(k),E=a(11),v=a.n(E),O=a(12),x=a.n(O),N=a(13),C=a.n(N),w=a(14),A=a.n(w),G=a(15),J=a.n(G),S=a(16),B=a.n(S),I=a(17),T=a.n(I),q=a(18),z=a.n(q),D=a(19),F=a.n(D),H=a(20),K=a.n(H),L=a(21),M=a.n(L),P=a(22),Q=a.n(P),R=a(23),U=a.n(R),V=a(24),W=a.n(V),X=a(25),Y=a.n(X),Z=a(26),$=a.n(Z),_=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.props.images.map(function(t){return c.a.createElement("div",{className:"display-images",key:t.id,"data-pid":t.id,onClick:e.props.clickimage},c.a.createElement("img",{className:"imginsert",src:t.title,alt:t.id}))})}}]),t}(i.Component),ee=(a(33),[{id:1,title:h.a},{id:2,title:y.a},{id:3,title:v.a},{id:4,title:x.a},{id:5,title:C.a},{id:6,title:A.a},{id:7,title:J.a},{id:8,title:B.a},{id:9,title:T.a},{id:10,title:z.a},{id:11,title:F.a},{id:12,title:K.a},{id:13,title:M.a},{id:14,title:Q.a},{id:15,title:U.a},{id:16,title:W.a},{id:17,title:Y.a},{id:18,title:$.a}]);var te=function(e){function t(){var e,a;Object(r.a)(this,t);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={score:0,highscore:0,clicked:[],guess:"click to guess"},a.clickimage=function(e){var t=e.currentTarget.dataset.pid;if(console.log(t,a.state.clicked),-1===a.state.clicked.indexOf(t)){var i=a.state,c=i.clicked,n=i.score,s=i.highscore;c.push(t),++n>s&&(s=n),a.setState({score:n,highscore:s,clicked:c,guess:"you guessed correctly"})}else a.setState({score:0,clicked:[],guess:"you guessed incorrectly"})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=d()(ee,{copy:!0});return c.a.createElement("div",{className:"App"},c.a.createElement(g,{guess:this.state.guess,score:this.state.score,highscore:this.state.highscore}),c.a.createElement(b,null),c.a.createElement(_,{images:e,clickimage:this.clickimage}),c.a.createElement(j,null))}}]),t}(i.Component);s.a.render(c.a.createElement(te,null),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.c28edce1.chunk.js.map