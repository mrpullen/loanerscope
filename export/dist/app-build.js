"bundle";!function(){var e=System.get("@@amd-helpers").createDefine();define("app",["require","exports"],function(require,e){var t=function(){function e(){}return e.prototype.configureRouter=function(e,t){e.title="Aurelia",e.map([{route:["","welcome"],name:"welcome",moduleId:"welcome",nav:!0,title:"Welcome"},{route:"users",name:"users",moduleId:"users",nav:!0,title:"Github Users"},{route:"child-router",name:"child-router",moduleId:"child-router",nav:!0,title:"Child Router"}]),this.router=t},e}();e.App=t}),e()}(),function(){var e=System.get("@@amd-helpers").createDefine();define("app.html!github:systemjs/plugin-text@0.0.3",[],function(){return'<template>\n  <require from="nav-bar.html"></require>\n  <require from="bootstrap/css/bootstrap.css"></require>\n\n  <nav-bar router.bind="router"></nav-bar>\n\n  <div class="page-host">\n    <router-view></router-view>\n  </div>\n</template>\n'}),e()}(),function(){var e=System.get("@@amd-helpers").createDefine(),t=this&&this.__decorate||function(e,t,n,a){var r,i=arguments.length,o=3>i?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(3>i?r(o):i>3?r(t,n,o):r(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o},n=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0};define("blur-image",["require","exports","npm:aurelia-framework@1.0.0-beta.1.0.8"],function(require,e,a){function r(e,t,n,a,r,o){if(!(isNaN(o)||1>o)){o|=0;var s,c=e.getContext("2d");try{s=c.getImageData(t,n,a,r)}catch(f){throw new Error("unable to access image data: "+f)}var m,d,p,h,v,g,b,y,w,x,N,R,j,D,C,S,q,_,I,$,A,O,U,k,P=s.data,V=o+o+1,W=a-1,G=r-1,B=o+1,E=B*(B+1)/2,F=new i,L=F;for(p=1;V>p;p++)if(L=L.next=new i,p==B)var H=L;L.next=F;var J=null,T=null;b=g=0;var z=l[o],K=u[o];for(d=0;r>d;d++){for(S=q=_=I=y=w=x=N=0,R=B*($=P[g]),j=B*(A=P[g+1]),D=B*(O=P[g+2]),C=B*(U=P[g+3]),y+=E*$,w+=E*A,x+=E*O,N+=E*U,L=F,p=0;B>p;p++)L.r=$,L.g=A,L.b=O,L.a=U,L=L.next;for(p=1;B>p;p++)h=g+((p>W?W:p)<<2),y+=(L.r=$=P[h])*(k=B-p),w+=(L.g=A=P[h+1])*k,x+=(L.b=O=P[h+2])*k,N+=(L.a=U=P[h+3])*k,S+=$,q+=A,_+=O,I+=U,L=L.next;for(J=F,T=H,m=0;a>m;m++)P[g+3]=U=N*z>>K,0!=U?(U=255/U,P[g]=(y*z>>K)*U,P[g+1]=(w*z>>K)*U,P[g+2]=(x*z>>K)*U):P[g]=P[g+1]=P[g+2]=0,y-=R,w-=j,x-=D,N-=C,R-=J.r,j-=J.g,D-=J.b,C-=J.a,h=b+((h=m+o+1)<W?h:W)<<2,S+=J.r=P[h],q+=J.g=P[h+1],_+=J.b=P[h+2],I+=J.a=P[h+3],y+=S,w+=q,x+=_,N+=I,J=J.next,R+=$=T.r,j+=A=T.g,D+=O=T.b,C+=U=T.a,S-=$,q-=A,_-=O,I-=U,T=T.next,g+=4;b+=a}for(m=0;a>m;m++){for(q=_=I=S=w=x=N=y=0,g=m<<2,R=B*($=P[g]),j=B*(A=P[g+1]),D=B*(O=P[g+2]),C=B*(U=P[g+3]),y+=E*$,w+=E*A,x+=E*O,N+=E*U,L=F,p=0;B>p;p++)L.r=$,L.g=A,L.b=O,L.a=U,L=L.next;for(v=a,p=1;o>=p;p++)g=v+m<<2,y+=(L.r=$=P[g])*(k=B-p),w+=(L.g=A=P[g+1])*k,x+=(L.b=O=P[g+2])*k,N+=(L.a=U=P[g+3])*k,S+=$,q+=A,_+=O,I+=U,L=L.next,G>p&&(v+=a);for(g=m,J=F,T=H,d=0;r>d;d++)h=g<<2,P[h+3]=U=N*z>>K,U>0?(U=255/U,P[h]=(y*z>>K)*U,P[h+1]=(w*z>>K)*U,P[h+2]=(x*z>>K)*U):P[h]=P[h+1]=P[h+2]=0,y-=R,w-=j,x-=D,N-=C,R-=J.r,j-=J.g,D-=J.b,C-=J.a,h=m+((h=d+B)<G?h:G)*a<<2,y+=S+=J.r=P[h],w+=q+=J.g=P[h+1],x+=_+=J.b=P[h+2],N+=I+=J.a=P[h+3],J=J.next,R+=$=T.r,j+=A=T.g,D+=O=T.b,C+=U=T.a,S-=$,q-=A,_-=O,I-=U,T=T.next,g+=a}c.putImageData(s,t,n)}}function i(){this.r=0,this.g=0,this.b=0,this.a=0,this.next=null}function o(e,t){var n=e.width,a=e.height,i=e.getContext("2d");i.drawImage(t,0,0,n,a),r(e,0,0,n,a,c)}var s=function(){function e(e){this.element=e,this.element=e}return e.prototype.valueChanged=function(e){var t=this;e.complete?o(this.element,e):e.onload=function(){return o(t.element,e)}},e=t([a.autoinject,n("design:paramtypes",[Element])],e)}();e.BlurImageCustomAttribute=s;var l=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],u=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24],c=40}),e()}(),function(){var e=System.get("@@amd-helpers").createDefine();define("child-router",["require","exports"],function(require,e){var t=function(){function e(){this.heading="Child Router"}return e.prototype.configureRouter=function(e,t){e.map([{route:["","welcome"],name:"welcome",moduleId:"welcome",nav:!0,title:"Welcome"},{route:"users",name:"users",moduleId:"users",nav:!0,title:"Github Users"},{route:"child-router",name:"child-router",moduleId:"child-router",nav:!0,title:"Child Router"}]),this.router=t},e}();e.ChildRouter=t}),e()}(),function(){var e=System.get("@@amd-helpers").createDefine();define("child-router.html!github:systemjs/plugin-text@0.0.3",[],function(){return'<template>\n  <section class="au-animate">\n    <h2>${heading}</h2>\n    <div>\n      <div class="col-md-2">\n        <ul class="well nav nav-pills nav-stacked">\n          <li repeat.for="row of router.navigation" class="${row.isActive ? \'active\' : \'\'}">\n            <a href.bind="row.href">${row.title}</a>\n          </li>\n        </ul>\n      </div>\n      <div class="col-md-10" style="padding: 0">\n        <router-view></router-view>\n      </div>\n    </div>\n  </section>\n</template>\n'}),e()}(),function(){var e=System.get("@@amd-helpers").createDefine();define("main",["require","exports","github:twbs/bootstrap@3.3.6"],function(require,e){function t(e){e.use.standardConfiguration().developmentLogging(),e.start().then(function(e){return e.setRoot()})}e.configure=t}),e()}(),function(){var e=System.get("@@amd-helpers").createDefine();define("nav-bar.html!github:systemjs/plugin-text@0.0.3",[],function(){return'<template bindable="router">\n  <nav class="navbar navbar-default navbar-fixed-top" role="navigation">\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n        <span class="sr-only">Toggle Navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a class="navbar-brand" href="#">\n        <i class="fa fa-home"></i>\n        <span>${router.title}</span>\n      </a>\n    </div>\n\n    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n      <ul class="nav navbar-nav">\n        <li repeat.for="row of router.navigation" class="${row.isActive ? \'active\' : \'\'}">\n          <a data-toggle="collapse" data-target="#bs-example-navbar-collapse-1.in" href.bind="row.href">${row.title}</a>\n        </li>\n      </ul>\n\n      <ul class="nav navbar-nav navbar-right">\n        <li class="loader" if.bind="router.isNavigating">\n          <i class="fa fa-spinner fa-spin fa-2x"></i>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</template>\n'}),e()}(),function(){var e=System.get("@@amd-helpers").createDefine(),t=this&&this.__decorate||function(e,t,n,a){var r,i=arguments.length,o=3>i?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(3>i?r(o):i>3?r(t,n,o):r(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o},n=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0};define("users",["require","exports","npm:aurelia-framework@1.0.0-beta.1.0.8","npm:aurelia-fetch-client@1.0.0-beta.1.0.2","github:github/fetch@0.10.1"],function(require,e,a,r){var i=function(){function e(e){this.http=e,this.heading="Github Users",this.users=[],e.configure(function(e){e.useStandardConfiguration().withBaseUrl("https://api.github.com/")})}return e.prototype.activate=function(){var e=this;return this.http.fetch("users").then(function(e){return e.json()}).then(function(t){return e.users=t})},e=t([a.autoinject,n("design:paramtypes",[r.HttpClient])],e)}();e.Users=i}),e()}(),function(){var e=System.get("@@amd-helpers").createDefine();define("users.html!github:systemjs/plugin-text@0.0.3",[],function(){return'<template>\n  <require from="blur-image"></require>\n\n  <section class="au-animate">\n      <h2>${heading}</h2>\n      <div class="row au-stagger">\n        <div class="col-sm-6 col-md-3 card-container au-animate" repeat.for="user of users">\n            <div class="card">\n                <canvas class="header-bg" width="250" height="70" blur-image.bind="image"></canvas>\n                <div class="avatar">\n                    <img src.bind="user.avatar_url" crossorigin ref="image"/>\n                </div>\n                <div class="content">\n                    <p class="name">${user.login}</p>\n                    <p><a target="_blank" class="btn btn-default" href.bind="user.html_url">Contact</a></p>\n                </div>\n            </div>\n        </div>\n      </div>\n  </section>\n</template>\n'}),e()}(),function(){var e=System.get("@@amd-helpers").createDefine();define("welcome",["require","exports"],function(require,e){var t=function(){function e(){this.heading="Welcome to the Aurelia Navigation App!",this.firstName="John",this.lastName="Doe",this.previousValue=this.fullName}return Object.defineProperty(e.prototype,"fullName",{get:function(){return this.firstName+" "+this.lastName},enumerable:!0,configurable:!0}),e.prototype.submit=function(){this.previousValue=this.fullName,alert("Welcome, "+this.fullName+"!")},e.prototype.canDeactivate=function(){return this.fullName!==this.previousValue?confirm("Are you sure you want to leave?"):void 0},e}();e.Welcome=t;var n=function(){function e(){}return e.prototype.toView=function(e){return e&&e.toUpperCase()},e}();e.UpperValueConverter=n}),e()}(),function(){var e=System.get("@@amd-helpers").createDefine();define("welcome.html!github:systemjs/plugin-text@0.0.3",[],function(){return'<template>\n  <section class="au-animate">\n    <h2>${heading}</h2>\n    <form role="form" submit.delegate="submit()">\n      <div class="form-group">\n        <label for="fn">First Name</label>\n        <input type="text" value.bind="firstName" class="form-control" id="fn" placeholder="first name">\n      </div>\n      <div class="form-group">\n        <label for="ln">Last Name</label>\n        <input type="text" value.bind="lastName" class="form-control" id="ln" placeholder="last name">\n      </div>\n      <div class="form-group">\n        <label>Full Name</label>\n        <p class="help-block">${fullName | upper}</p>\n      </div>\n      <button type="submit" class="btn btn-default">Submit</button>\n    </form>\n  </section>\n</template>\n'}),e()}();