(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{536:function(e,t,n){},549:function(e,t,n){"use strict";n.r(t);var i=n(195),a=n.n(i),r=n(1),s=n.n(r),o=n(62),c=n.n(o),l=(n(536),n(70)),d=n(3),p=n(197),f=n(4),g=n(527),u=n(192),m=n(15),v=n(198);t.default=function(e){var t=Object.keys(e.files),n=Object(l.a)(t[0]||"Gist:"+e.id),i={files:function(){var t=[];return Object.values(e.files).map((function(e){t.push({filename:e.filename,type:d.a.getIconForFile(e.filename)})})),t},msg:strings["empty folder message"]},r=s.a.parse(c.a.render('<div id="gistFiles" empty-msg="{{msg}}" class="main list">{{#files}}\n  <div class="list-item" action="file" filename="{{filename}}">\n    <span class="icon {{type}}"></span>\n    <div class="container">\n      <div class="text">\n        <span>{{filename}}</span>\n      </div>\n    </div>\n    <span class="icon delete" action="delete-file"></span>\n  </div>\n  {{/files}}</div>',i)),o=s()("span",{className:"icon more_vert",attr:{action:"toggle-menu"}}),h=Object(p.a)(c.a.render('<li action="create">\n  <span class="text">{{new file}}</span>\n  <span class="icon file-control document-add"></span>\n</li>\n<li action="delete-gist">\n  <span class="text">Delete gist</span>\n  <span class="icon delete"></span>\n</li>',strings),{top:"8px",right:"8px",toggle:o,transformOrigin:"top right"}),w=s()("span",{className:"icon search",attr:{action:"search"}});function y(t){var n,i=t.target,r=i.getAttribute("action");if(r)switch(["create","delete-gist"].includes(r)&&h.hide(),r){case"file":n=i.getAttribute("filename"),editorManager.addNewFile(n,{type:"gist",text:e.files[n].content,isUnsaved:!1,record:e,render:!0}),actionStack.pop(),actionStack.pop(),actionStack.pop();break;case"share":!function(){var e=i.parentElement.getAttribute("filename");console.log(e)}();break;case"create":f.a.prompt(strings["enter file name"],strings["new file"],"text",{match:m.a.FILE_NAME_REGEX,required:!0}).then((function(t){e.addFile(t),editorManager.addNewFile(t,{type:"gist",filename:t,isUnsaved:!1,record:e,render:!0}),actionStack.pop(),actionStack.pop(),actionStack.pop()}));break;case"delete-gist":f.a.confirm(strings.warning,strings["delete {name}"].replace("{name}","Gist: "+e.id)).then((function(){var t=u.a.GitHub().getGist(e.id);f.a.loaderShow("",strings.loading+"..."),t.delete().then((function(t){if(204===t.status){var n=!0,i=!1,r=void 0;try{for(var s,o=editorManager.files[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var c=s.value;"gist"===c.type&&c.record.id===e.id&&editorManager.removeFile(c,!0)}}catch(e){i=!0,r=e}finally{try{n||null==o.return||o.return()}finally{if(i)throw r}}window.plugins.toast.showShortBottom(strings.success),actionStack.pop(),actionStack.pop(),Object(g.a)((function(t){var n,i=!0,r=!1,s=void 0;try{for(var o,c=t.entries()[Symbol.iterator]();!(i=(o=c.next()).done);i=!0){var l=a()(o.value,2),d=l[0];if(l[1].id===e.id){n=d;break}}}catch(e){r=!0,s=e}finally{try{i||null==c.return||c.return()}finally{if(r)throw s}}return void 0!==n&&t.splice(n,1),t}))}})).catch((function(e){e&&(console.log(e),f.a.alert(strings.error,e.toString()))})).finally((function(){f.a.loaderHide()}))}));break;case"delete-file":!function(){var t=i.parentElement.getAttribute("filename");f.a.confirm(strings.warning,strings["delete {name}"].replace("{name}",t)).then((function(){t&&(f.a.loaderShow(t,strings.loading+"..."),e.removeFile(t).then((function(){i.parentElement.remove(),window.plugins.toast.showShortBottom(strings.success)})).catch((function(e){e&&f.a.alert(strings.error,e.toString())})).finally((function(){f.a.loaderHide()})))}))}()}}r.on("click",y),h.on("click",y),n.append(r),n.querySelector("header").append(w,o),app.appendChild(n),w.onclick=function(){Object(v.a)(n.querySelector(".list"))},actionStack.push({id:"gistFiles",action:n.hide}),n.onhide=function(){actionStack.remove("gistFiles")}}}}]);