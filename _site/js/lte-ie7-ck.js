/* Use this script if you need to support IE 7 and IE 6. */window.onload=function(){function e(e,t){var n=e.innerHTML;e.innerHTML="<span style=\"font-family: 'icomoon'\">"+t+"</span>"+n}var t={"icon-film":"&#xe001;"},n=document.getElementsByTagName("*"),r,i,s,o,u;for(r=0;r<n.length;r+=1){u=n[r];i=u.getAttribute("data-icon");i&&e(u,i);o=u.className;o=o.match(/icon-[^\s'"]+/);o&&t[o[0]]&&e(u,t[o[0]])}};