/*
battle-map-explorer version 1.1

This code is released into the public domain - attribution is appreciated but not required.
Made by Byron Knoll.

https://github.com/byronknoll/battle-map-explorer
*/

window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(D,m){window.setTimeout(D,1E3/60)}}();function BattleMapExplorer(){}
BattleMapExplorer.run=function(D,m,K,E,v){function L(a){return 87==a||38==a||104==a?!0:!1}function M(a){return 65==a||37==a||100==a?!0:!1}function N(a){return 68==a||39==a||102==a?!0:!1}function O(a){return 83==a||40==a||98==a?!0:!1}function x(a,b){for(var c=0;c<segments.length-F;++c)if(VisibilityPolygon.doLineSegmentsIntersect(k,l,a,b,segments[c][0][0],segments[c][0][1],segments[c][1][0],segments[c][1][1]))return;k=a;l=b;f=!0}function P(){var a=canvas.getContext("2d");if(!Q){if(R){Q=!0;var b=q.width,
c=q.height;K.push([[-1,-1],[b+1,-1],[b+1,c+1],[-1,c+1]]);segments=VisibilityPolygon.convertToSegments(K);segments=VisibilityPolygon.breakIntersections(segments);for(b=0;b<E.length;++b)segments.push(E[b]);F=E.length}a.save()}else if(f){f=!1;G||(y&&(x(k-w,l),f=!0),z&&(x(k+w,l),f=!0),A&&(x(k,l-w),f=!0),B&&(x(k,l+w),f=!0));H&&(y||z||A||B)&&(G=!0);var b=n/2,c=p/2,e=Math.min(n,p)/2;a.restore();a.save();a.clearRect(0,0,n,p);v&&(a.beginPath(),a.arc(b,c,e,0,2*Math.PI,!0),a.clip());var h=b-k,r=c-l,g=VisibilityPolygon.computeViewport([k,
l],segments,[-h,-r],[n-h,p-r]);a.beginPath();a.moveTo(g[0][0]+h,g[0][1]+r);for(var d=1;d<g.length;++d)a.lineTo(g[d][0]+h,g[d][1]+r);a.clip();var g=k-n/2,d=l-p/2,t=n,u=p,m=b-n/2,C=c-p/2;v&&(g=k-e,d=l-e,t=2*e,u=2*e,m=b-e,C=c-e);0>g&&(m-=g,t+=g,g=0);0>d&&(C-=d,u+=d,d=0);g+t>=q.width&&(t=q.width-g-1);d+u>=q.height&&(u=q.height-d-1);a.drawImage(q,g,d,t,u,m,C,t,u);for(d=segments.length-F;d<segments.length;++d)a.beginPath(),a.lineWidth=10,a.strokeStyle="black",a.moveTo(segments[d][0][0]+h,segments[d][0][1]+
r),a.lineTo(segments[d][1][0]+h,segments[d][1][1]+r),a.stroke(),a.beginPath(),a.lineWidth=6,a.strokeStyle="white",a.moveTo(segments[d][0][0]+h,segments[d][0][1]+r),a.lineTo(segments[d][1][0]+h,segments[d][1][1]+r),a.stroke();a.beginPath();a.lineWidth=2;a.strokeStyle="black";a.fillStyle="white";a.fillRect(b-2,c-25,4,20);a.rect(b-2,c-25,4,20);a.stroke();a.fillRect(b-2,c+5,4,20);a.rect(b-2,c+5,4,20);a.stroke();a.fillRect(b-25,c-2,20,4);a.rect(b-25,c-2,20,4);a.stroke();a.fillRect(b+5,c-2,20,4);a.rect(b+
5,c-2,20,4);a.stroke();v&&(h=a.createRadialGradient(b,c,10,b,c,e),h.addColorStop(0,"rgba(0,0,0,0)"),h.addColorStop(.7,"rgba(0,0,0,0)"),h.addColorStop(1,"rgba(0,0,0,1)"),a.fillStyle=h,a.fillRect(b-e,c-e,2*e,2*e))}requestAnimFrame(P)}v="undefined"!==typeof v?v:!0;var n=window.innerWidth,p=window.innerHeight;canvas.getContext("2d").canvas.width=n;canvas.getContext("2d").canvas.height=p;var f=!0,F=0,Q=!1,k=m[0],l=m[1],y=!1,z=!1,A=!1,B=!1,H=!1,G=!1,S=0,T=0,I=0,J=0;m=new Hammer(document.getElementById("canvas"));
m.get("pan").set({direction:Hammer.DIRECTION_ALL});var w=5,q=new Image,R=!1;q.onload=function(){R=!0};q.src=D;requestAnimFrame(P);window.onresize=function(a){n=window.innerWidth;p=window.innerHeight;canvas.getContext("2d").canvas.width=n;canvas.getContext("2d").canvas.height=p;f=!0};document.addEventListener("touchmove",function(a){a.preventDefault()},!1);document.onkeydown=function(a){L(a.keyCode)?f=A=!0:M(a.keyCode)?f=y=!0:N(a.keyCode)?f=z=!0:O(a.keyCode)?f=B=!0:16==a.keyCode&&(H=!0)};document.onkeyup=
function(a){L(a.keyCode)?(A=!1,f=!0):M(a.keyCode)?(y=!1,f=!0):N(a.keyCode)?(z=!1,f=!0):O(a.keyCode)?(B=!1,f=!0):32==a.keyCode?console.log("["+Math.round(k)+","+Math.round(l)+"],"):191==a.keyCode||96==a.keyCode?w=Number(prompt("Enter movement speed:",w)):16==a.keyCode&&(H=!1);G=!1};m.on("pan",function(a){var b=a.center.x,c=a.center.y,e=a.deltaX;a=a.deltaY;b-=e;c-=a;if(b!=S||c!=T)J=I=0;S=b;T=c;b=e;c=a;e-=I;a-=J;I=b;J=c;x(k-e,l-a)})};
