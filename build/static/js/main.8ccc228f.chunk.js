(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/img1.2839cfb7.jpg"},,,,function(e,t,a){e.exports=a.p+"static/media/img2.0bb6e406.jpg"},function(e,t,a){e.exports=a.p+"static/media/img3.a708b4ea.jpg"},function(e,t,a){e.exports=a.p+"static/media/img4.9c73c946.jpg"},function(e,t,a){e.exports=a.p+"static/media/img5.5bd7f7ab.jpg"},function(e,t,a){e.exports=a.p+"static/media/img6.0f7e9eb2.jpg"},function(e,t,a){e.exports=a.p+"static/media/img7.59c4090f.jpg"},function(e,t,a){e.exports=a.p+"static/media/img8.7662399b.jpg"},function(e,t,a){e.exports=a.p+"static/media/img9.01c834f5.jpg"},function(e,t,a){e.exports=a.p+"static/media/img10.7bf7cb12.jpg"},function(e,t,a){e.exports=a.p+"static/media/img11.a965f309.jpg"},function(e,t,a){e.exports=a.p+"static/media/img12.399fbb92.jpg"},function(e,t,a){e.exports=a.p+"static/media/img13.3ecb187b.jpg"},function(e,t,a){e.exports=a.p+"static/media/img14.2f4822b6.jpg"},function(e,t,a){e.exports=a.p+"static/media/img15.8ddac040.jpg"},function(e,t,a){e.exports=a.p+"static/media/img16.4a6bbe43.jpg"},function(e,t,a){e.exports=a.p+"static/media/img17.b9f6dfcb.jpg"},function(e,t,a){e.exports=a.p+"static/media/img18.12cf3b6d.jpg"},function(e,t,a){e.exports=a(34)},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(8),s=a.n(c),r=a(1),o=a(2),l=a(4),p=a(3),m=a(5),d=a(9),u=a.n(d),g=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("header",{className:"app-header"},n.a.createElement("div",{className:"container"},n.a.createElement("button",{className:"link",onClick:this.props.handleReload},n.a.createElement("h2",null,"Clicky Game")),n.a.createElement("h2",null,this.props.guess),n.a.createElement("h2",null,"score = ",this.props.score," | high score = ",this.props.highscore)))}}]),t}(i.Component),f=a(6),h=a.n(f);var b=function(){return n.a.createElement("div",{className:"fluid-container"},n.a.createElement("img",{className:"jum-image",src:h.a,alt:"imagefont"}),n.a.createElement("div",{className:"div-image"},n.a.createElement("h1",null,"Clicky Game!"),n.a.createElement("p",null,"Click on an image to earn points, but don't click on any more than once!")))},j=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"botom"},n.a.createElement("div",{className:"para"},"react clicky game"))}}]),t}(i.Component),k=a(10),E=a.n(k),v=a(11),y=a.n(v),O=a(12),x=a.n(O),N=a(13),w=a.n(N),C=a(14),R=a.n(C),A=a(15),G=a.n(A),J=a(16),S=a.n(J),B=a(17),I=a.n(B),T=a(18),q=a.n(T),z=a(19),D=a.n(z),F=a(20),H=a.n(F),K=a(21),L=a.n(K),M=a(22),P=a.n(M),Q=a(23),U=a.n(Q),V=a(24),W=a.n(V),X=a(25),Y=a.n(X),Z=a(26),$=a.n(Z),_=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.props.images.map(function(t){return n.a.createElement("div",{className:"display-images",key:t.id,"data-pid":t.id,onClick:e.props.clickimage},n.a.createElement("img",{className:"imginsert",src:t.title,alt:t.id}))})}}]),t}(i.Component),ee=(a(33),[{id:1,title:h.a},{id:2,title:E.a},{id:3,title:y.a},{id:4,title:x.a},{id:5,title:w.a},{id:6,title:R.a},{id:7,title:G.a},{id:8,title:S.a},{id:9,title:I.a},{id:10,title:q.a},{id:11,title:D.a},{id:12,title:H.a},{id:13,title:L.a},{id:14,title:P.a},{id:15,title:U.a},{id:16,title:W.a},{id:17,title:Y.a},{id:18,title:$.a}]);var te=function(e){function t(){var e,a;Object(r.a)(this,t);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={score:0,highscore:0,clicked:[],guess:"click to guess"},a.clickimage=function(e){var t=e.currentTarget.dataset.pid;if(-1===a.state.clicked.indexOf(t)){var i=a.state,n=i.clicked,c=i.score,s=i.highscore;n.push(t),++c>s&&(s=c),a.setState({score:c,highscore:s,clicked:n,guess:"you guessed correctly"})}else a.setState({score:0,clicked:[],guess:"you guessed incorrectly"})},a.handleReload=function(){window.location.reload(!0)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=u()(ee,{copy:!0});return n.a.createElement("div",{className:"App"},n.a.createElement(g,{guess:this.state.guess,score:this.state.score,highscore:this.state.highscore,handleReload:this.handleReload}),n.a.createElement(b,null),n.a.createElement(_,{images:e,clickimage:this.clickimage}),n.a.createElement(j,null))}}]),t}(i.Component);s.a.render(n.a.createElement(te,null),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.8ccc228f.chunk.js.map