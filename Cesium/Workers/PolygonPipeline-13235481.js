define(["exports","./Matrix2-ccd5b911","./RuntimeError-346a3079","./ComponentDatatype-93750d1a","./when-4bbc8319","./EllipsoidRhumbLine-aa9e6266","./GeometryAttribute-4cca8ebf","./WebGLConstants-1c8239cc"],function(e,L,h,D,G,O,T,t){"use strict";var n=r,f=r;function r(e,t,n){n=n||2;var r,a,i,u,x,o=t&&t.length,s=o?t[0]*n:e.length,p=y(e,0,s,n,!0),h=[];if(p&&p.next!==p.prev){if(o&&(p=function(e,t,n,r){var a,i,u,x,o=[];for(a=0,i=t.length;a<i;a++)x=t[a]*r,u=a<i-1?t[a+1]*r:e.length,(x=y(e,x,u,r,!1))===x.next&&(x.steiner=!0),o.push(function(e){var t=e,n=e;for(;(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next,t!==e;);return n}(x));for(o.sort(d),a=0;a<o.length;a++)n=function(e,t){var n=function(e,t){var n,r=t,a=e.x,i=e.y,u=-1/0;do{if(i<=r.y&&i>=r.next.y&&r.next.y!==r.y){var x=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(x<=a&&u<x&&(u=x,n=r.x<r.next.x?r:r.next,x===a))return n}}while(r=r.next,r!==t);if(!n)return null;var o,s=n,p=n.x,h=n.y,f=1/0;r=n;for(;a>=r.x&&r.x>=p&&a!==r.x&&z(i<h?a:u,i,p,h,i<h?u:a,i,r.x,r.y)&&(o=Math.abs(i-r.y)/(a-r.x),I(r,e))&&(o<f||o===f&&(r.x>n.x||r.x===n.x&&function(e,t){return R(e.prev,e,t.prev)<0&&R(t.next,e,e.next)<0}(n,r)))&&(n=r,f=o),r=r.next,r!==s;);return n}(e,t);return n?(Z(e=B(n,e),e.next),Z(n,n.next)):t}(o[a],n);return n}(e,t,p,n)),e.length>80*n){for(var f=r=e[0],l=a=e[1],v=n;v<s;v+=n)(i=e[v])<f&&(f=i),(u=e[v+1])<l&&(l=u),r<i&&(r=i),a<u&&(a=u);x=0!==(x=Math.max(r-f,a-l))?32767/x:0}S(p,h,n,f,l,x,0)}return h}function y(e,t,n,r,a){var i,u;if(a===0<c(e,t,n,r))for(i=t;i<n;i+=r)u=x(i,e[i],e[i+1],u);else for(i=n-r;t<=i;i-=r)u=x(i,e[i],e[i+1],u);return u&&W(u,u.next)&&(N(u),u=u.next),u}function Z(e,t){if(!e)return e;t=t||e;var n,r=e;do{if(n=!1,r.steiner||!W(r,r.next)&&0!==R(r.prev,r,r.next))r=r.next;else{if(N(r),(r=t=r.prev)===r.next)break;n=!0}}while(n||r!==t);return t}function S(e,t,n,r,a,i,u){if(e){if(!u&&i){for(var x=e,o=r,s=a,p=i,h=x;0===h.z&&(h.z=A(h.x,h.y,o,s,p)),h.prevZ=h.prev,h.nextZ=h.next,(h=h.next)!==x;);h.prevZ.nextZ=null,h.prevZ=null;var f,l,v,y,c,d,m,C,g=h,b=1;do{for(l=g,c=g=null,d=0;l;){for(d++,v=l,f=m=0;f<b&&(m++,v=v.nextZ);f++);for(C=b;0<m||0<C&&v;)0!==m&&(0===C||!v||l.z<=v.z)?(l=(y=l).nextZ,m--):(v=(y=v).nextZ,C--),c?c.nextZ=y:g=y,y.prevZ=c,c=y;l=v}}while(c.nextZ=null,b*=2,1<d)}for(var w,E,M=e;e.prev!==e.next;)if(w=e.prev,E=e.next,i?function(e,t,n,r){var a=e.prev,i=e,u=e.next;if(0<=R(a,i,u))return;var x=a.x,o=i.x,s=u.x,p=a.y,h=i.y,f=u.y,l=x<o?x<s?x:s:o<s?o:s,v=p<h?p<f?p:f:h<f?h:f,y=o<x?s<x?x:s:s<o?o:s,c=h<p?f<p?p:f:f<h?h:f,d=A(l,v,t,n,r),m=A(y,c,t,n,r),C=e.prevZ,g=e.nextZ;for(;C&&C.z>=d&&g&&g.z<=m;){if(C.x>=l&&C.x<=y&&C.y>=v&&C.y<=c&&C!==a&&C!==u&&z(x,p,o,h,s,f,C.x,C.y)&&0<=R(C.prev,C,C.next))return;if(C=C.prevZ,g.x>=l&&g.x<=y&&g.y>=v&&g.y<=c&&g!==a&&g!==u&&z(x,p,o,h,s,f,g.x,g.y)&&0<=R(g.prev,g,g.next))return;g=g.nextZ}for(;C&&C.z>=d;){if(C.x>=l&&C.x<=y&&C.y>=v&&C.y<=c&&C!==a&&C!==u&&z(x,p,o,h,s,f,C.x,C.y)&&0<=R(C.prev,C,C.next))return;C=C.prevZ}for(;g&&g.z<=m;){if(g.x>=l&&g.x<=y&&g.y>=v&&g.y<=c&&g!==a&&g!==u&&z(x,p,o,h,s,f,g.x,g.y)&&0<=R(g.prev,g,g.next))return;g=g.nextZ}return 1}(e,r,a,i):function(e){var t=e.prev,n=e,e=e.next;if(0<=R(t,n,e))return;var r=t.x,a=n.x,i=e.x,u=t.y,x=n.y,o=e.y,s=r<a?r<i?r:i:a<i?a:i,p=u<x?u<o?u:o:x<o?x:o,h=a<r?i<r?r:i:i<a?a:i,f=x<u?o<u?u:o:o<x?x:o,l=e.next;for(;l!==t;){if(l.x>=s&&l.x<=h&&l.y>=p&&l.y<=f&&z(r,u,a,x,i,o,l.x,l.y)&&0<=R(l.prev,l,l.next))return;l=l.next}return 1}(e))t.push(w.i/n|0),t.push(e.i/n|0),t.push(E.i/n|0),N(e),e=E.next,M=E.next;else if((e=E)===M){u?1===u?S(e=function(e,t,n){var r=e;do{var a=r.prev,i=r.next.next}while(!W(a,i)&&P(a,r,r.next,i)&&I(a,i)&&I(i,a)&&(t.push(a.i/n|0),t.push(r.i/n|0),t.push(i.i/n|0),N(r),N(r.next),r=e=i),r=r.next,r!==e);return Z(r)}(Z(e),t,n),t,n,r,a,i,2):2===u&&function(e,t,n,r,a,i){var u=e;do{for(var x,o=u.next.next;o!==u.prev;){if(u.i!==o.i&&function(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&P(n,n.next,e,t))return 1}while(n=n.next,n!==e);return}(e,t)&&(I(e,t)&&I(t,e)&&function(e,t){var n=e,r=!1,a=(e.x+t.x)/2,i=(e.y+t.y)/2;for(;n.y>i!=n.next.y>i&&n.next.y!==n.y&&a<(n.next.x-n.x)*(i-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next,n!==e;);return r}(e,t)&&(R(e.prev,e,t.prev)||R(e,t.prev,t))||W(e,t)&&0<R(e.prev,e,e.next)&&0<R(t.prev,t,t.next))}(u,o))return x=B(u,o),u=Z(u,u.next),x=Z(x,x.next),S(u,t,n,r,a,i,0),S(x,t,n,r,a,i,0);o=o.next}}while(u=u.next,u!==e)}(e,t,n,r,a,i):S(Z(e),t,n,r,a,i,1);break}}}function d(e,t){return e.x-t.x}function A(e,t,n,r,a){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*a|0)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-r)*a|0)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function z(e,t,n,r,a,i,u,x){return(e-u)*(i-x)<=(a-u)*(t-x)&&(n-u)*(t-x)<=(e-u)*(r-x)&&(a-u)*(r-x)<=(n-u)*(i-x)}function R(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function W(e,t){return e.x===t.x&&e.y===t.y}function P(e,t,n,r){var a=s(R(e,t,n)),i=s(R(e,t,r)),u=s(R(n,r,e)),x=s(R(n,r,t));return a!==i&&u!==x||0===a&&o(e,n,t)||0===i&&o(e,r,t)||0===u&&o(n,e,r)||!(0!==x||!o(n,t,r))}function o(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function s(e){return 0<e?1:e<0?-1:0}function I(e,t){return R(e.prev,e,e.next)<0?0<=R(e,t,e.next)&&0<=R(e,e.prev,t):R(e,t,e.prev)<0||R(e,e.next,t)<0}function B(e,t){var n=new u(e.i,e.x,e.y),r=new u(t.i,t.x,t.y),a=e.next,i=t.prev;return(e.next=t).prev=e,(n.next=a).prev=n,(r.next=n).prev=r,(i.next=r).prev=i,r}function x(e,t,n,r){e=new u(e,t,n);return r?(e.next=r.next,(e.prev=r).next.prev=e,r.next=e):(e.prev=e).next=e,e}function N(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function u(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function c(e,t,n,r){for(var a=0,i=t,u=n-r;i<n;i+=r)a+=(e[u]-e[i])*(e[i+1]+e[u+1]),u=i;return a}r.deviation=function(e,t,n,r){var a=t&&t.length,i=a?t[0]*n:e.length,u=Math.abs(c(e,0,i,n));if(a)for(var x=0,o=t.length;x<o;x++){var s=t[x]*n,p=x<o-1?t[x+1]*n:e.length;u-=Math.abs(c(e,s,p,n))}for(var h=0,x=0;x<r.length;x+=3){var f=r[x]*n,l=r[x+1]*n,v=r[x+2]*n;h+=Math.abs((e[f]-e[v])*(e[1+l]-e[1+f])-(e[f]-e[l])*(e[1+v]-e[1+f]))}return 0===u&&0===h?0:Math.abs((h-u)/u)},r.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,a=0;a<e.length;a++){for(var i=0;i<e[a].length;i++)for(var u=0;u<t;u++)n.vertices.push(e[a][i][u]);0<a&&(r+=e[a-1].length,n.holes.push(r))}return n},n.default=f;var a={CLOCKWISE:t.WebGLConstants.CW,COUNTER_CLOCKWISE:t.WebGLConstants.CCW,validate:function(e){return e===a.CLOCKWISE||e===a.COUNTER_CLOCKWISE}},i=Object.freeze(a),l=new L.Cartesian3,v=new L.Cartesian3,p={computeArea2D:function(e){for(var t=e.length,n=0,r=t-1,a=0;a<t;r=a++){var i=e[r],u=e[a];n+=i.x*u.y-u.x*i.y}return.5*n},computeWindingOrder2D:function(e){return 0<p.computeArea2D(e)?i.COUNTER_CLOCKWISE:i.CLOCKWISE},triangulate:function(e,t){e=L.Cartesian2.packArray(e);return n(e,t,2)}},U=new L.Cartesian3,_=new L.Cartesian3,K=new L.Cartesian3,V=new L.Cartesian3,k=new L.Cartesian3,q=new L.Cartesian3,F=new L.Cartesian3,H=(p.computeSubdivision=function(e,t,n,r){r=G.defaultValue(r,D.CesiumMath.RADIANS_PER_DEGREE);for(var a=n.slice(0),i=t.length,u=new Array(3*i),x=0,o=0;o<i;o++){var s=t[o];u[x++]=s.x,u[x++]=s.y,u[x++]=s.z}for(var p=[],h={},f=e.maximumRadius,n=D.CesiumMath.chordLength(r,f),l=n*n;0<a.length;){var v,y,c=a.pop(),d=a.pop(),m=a.pop(),C=L.Cartesian3.fromArray(u,3*m,U),g=L.Cartesian3.fromArray(u,3*d,_),b=L.Cartesian3.fromArray(u,3*c,K),w=L.Cartesian3.multiplyByScalar(L.Cartesian3.normalize(C,V),f,V),E=L.Cartesian3.multiplyByScalar(L.Cartesian3.normalize(g,k),f,k),M=L.Cartesian3.multiplyByScalar(L.Cartesian3.normalize(b,q),f,q),Z=L.Cartesian3.magnitudeSquared(L.Cartesian3.subtract(w,E,F)),E=L.Cartesian3.magnitudeSquared(L.Cartesian3.subtract(E,M,F)),M=L.Cartesian3.magnitudeSquared(L.Cartesian3.subtract(M,w,F)),w=Math.max(Z,E,M);l<w?Z===w?(o=h[v=Math.min(m,d)+" "+Math.max(m,d)],G.defined(o)||(y=L.Cartesian3.add(C,g,F),L.Cartesian3.multiplyByScalar(y,.5,y),u.push(y.x,y.y,y.z),o=u.length/3-1,h[v]=o),a.push(m,o,c),a.push(o,d,c)):E===w?(o=h[v=Math.min(d,c)+" "+Math.max(d,c)],G.defined(o)||(y=L.Cartesian3.add(g,b,F),L.Cartesian3.multiplyByScalar(y,.5,y),u.push(y.x,y.y,y.z),o=u.length/3-1,h[v]=o),a.push(d,o,m),a.push(o,c,m)):M===w&&(o=h[v=Math.min(c,m)+" "+Math.max(c,m)],G.defined(o)||(y=L.Cartesian3.add(b,C,F),L.Cartesian3.multiplyByScalar(y,.5,y),u.push(y.x,y.y,y.z),o=u.length/3-1,h[v]=o),a.push(c,o,d),a.push(o,m,d)):(p.push(m),p.push(d),p.push(c))}return new T.Geometry({attributes:{position:new T.GeometryAttribute({componentDatatype:D.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:u})},indices:p,primitiveType:T.PrimitiveType.TRIANGLES})},new L.Cartographic),J=new L.Cartographic,Q=new L.Cartographic,j=new L.Cartographic;p.computeRhumbLineSubdivision=function(e,t,n,r){r=G.defaultValue(r,D.CesiumMath.RADIANS_PER_DEGREE);for(var a=n.slice(0),i=t.length,u=new Array(3*i),x=0,o=0;o<i;o++){var s=t[o];u[x++]=s.x,u[x++]=s.y,u[x++]=s.z}for(var p=[],h={},n=e.maximumRadius,f=D.CesiumMath.chordLength(r,n),l=new O.EllipsoidRhumbLine(void 0,void 0,e),v=new O.EllipsoidRhumbLine(void 0,void 0,e),y=new O.EllipsoidRhumbLine(void 0,void 0,e);0<a.length;){var c,d,m,C,g=a.pop(),b=a.pop(),w=a.pop(),E=L.Cartesian3.fromArray(u,3*w,U),M=L.Cartesian3.fromArray(u,3*b,_),Z=L.Cartesian3.fromArray(u,3*g,K),E=e.cartesianToCartographic(E,H),M=e.cartesianToCartographic(M,J),Z=e.cartesianToCartographic(Z,Q),S=(l.setEndPoints(E,M),l.surfaceDistance),A=(v.setEndPoints(M,Z),v.surfaceDistance),z=(y.setEndPoints(Z,E),y.surfaceDistance),R=Math.max(S,A,z);f<R?S===R?(o=h[c=Math.min(w,b)+" "+Math.max(w,b)],G.defined(o)||(d=l.interpolateUsingFraction(.5,j),m=.5*(E.height+M.height),C=L.Cartesian3.fromRadians(d.longitude,d.latitude,m,e,F),u.push(C.x,C.y,C.z),o=u.length/3-1,h[c]=o),a.push(w,o,g),a.push(o,b,g)):A===R?(o=h[c=Math.min(b,g)+" "+Math.max(b,g)],G.defined(o)||(d=v.interpolateUsingFraction(.5,j),m=.5*(M.height+Z.height),C=L.Cartesian3.fromRadians(d.longitude,d.latitude,m,e,F),u.push(C.x,C.y,C.z),o=u.length/3-1,h[c]=o),a.push(b,o,w),a.push(o,g,w)):z===R&&(o=h[c=Math.min(g,w)+" "+Math.max(g,w)],G.defined(o)||(d=y.interpolateUsingFraction(.5,j),m=.5*(Z.height+E.height),C=L.Cartesian3.fromRadians(d.longitude,d.latitude,m,e,F),u.push(C.x,C.y,C.z),o=u.length/3-1,h[c]=o),a.push(g,o,b),a.push(o,w,b)):(p.push(w),p.push(b),p.push(g))}return new T.Geometry({attributes:{position:new T.GeometryAttribute({componentDatatype:D.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:u})},indices:p,primitiveType:T.PrimitiveType.TRIANGLES})},p.scaleToGeodeticHeight=function(e,t,n,r){n=G.defaultValue(n,L.Ellipsoid.WGS84);var a=l,i=v;if(t=G.defaultValue(t,0),r=G.defaultValue(r,!0),G.defined(e))for(var u=e.length,x=0;x<u;x+=3)L.Cartesian3.fromArray(e,x,i),r&&(i=n.scaleToGeodeticSurface(i,i)),0!==t&&(a=n.geodeticSurfaceNormal(i,a),L.Cartesian3.multiplyByScalar(a,t,a),L.Cartesian3.add(i,a,i)),e[x]=i.x,e[x+1]=i.y,e[x+2]=i.z;return e},e.PolygonPipeline=p,e.WindingOrder=i});
