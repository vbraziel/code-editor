(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{527:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n(1),o=n.n(a),r=n(57),i=n.n(r),s=n(71),c=(n(533),n(4)),u=n(474),p=n(18);function d(){var e=Object(s.a)("Github Login"),t=o.a.parse(i.a.render('<div id="github-login" class="main">\n  <form class="form" action="#">\n    <input type="text" id="username" placeholder="username">\n    <input type="password" id="password" placeholder="password">\n    <span class="hr">or</span>\n    <input type="text" id="token" placeholder="token">\n\n    <span id="error-msg"></span>\n    <div class="button-container primary">\n      <button type="submit">login</button>\n    </div>\n  </form>\n</div>',strings)),n=t.get(".form"),a=t.get("#username"),r=t.get("#password"),d=t.get("#token"),l=t.get("#error-msg");p.a.deleteFile(cordova.file.externalDataDirectory+".github"),e.append(t),t.onclick=function(e){e.target instanceof HTMLInputElement&&(l.textContent="")},n.onsubmit=function(t){t.preventDefault();var n=d.value,o=a.value,i=r.value,s=c.a.credentials;if(!o&&!n)return l.textContent="Please enter username and password or token!";n&&localStorage.setItem("token",s.encrypt(n));if(o){if(!i)return l.textContent="Please enter password!";o=s.encrypt(o),i=s.encrypt(i),localStorage.setItem("username",o),localStorage.setItem("password",i)}Object(u.a)({$loginPage:e})},actionStack.push({id:"github login",action:e.hide}),e.onhide=function(){actionStack.remove("github login")},e.setMessage=function(e){l.textContent=e},document.body.appendChild(e)}},533:function(e,t,n){}}]);