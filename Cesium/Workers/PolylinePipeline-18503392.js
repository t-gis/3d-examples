define(["exports","./Matrix2-ccd5b911","./when-4bbc8319","./RuntimeError-346a3079","./EllipsoidGeodesic-19ea7553","./EllipsoidRhumbLine-aa9e6266","./IntersectionTests-66bcab6d","./ComponentDatatype-93750d1a","./Plane-18bb00f8"],function(a,m,p,e,r,d,w,v,P){"use strict";var T={numberOfPoints:function(a,e,r){a=m.Cartesian3.distance(a,e);return Math.ceil(a/r)},numberOfPointsRhumbLine:function(a,e,r){a=Math.pow(a.longitude-e.longitude,2)+Math.pow(a.latitude-e.latitude,2);return Math.max(1,Math.ceil(Math.sqrt(a/(r*r))))}},o=new m.Cartographic,y=(T.extractHeights=function(a,e){for(var r=a.length,t=new Array(r),n=0;n<r;n++){var i=a[n];t[n]=e.cartesianToCartographic(i,o).height}return t},new m.Matrix4),b=new m.Cartesian3,A=new m.Cartesian3,E=new P.Plane(m.Cartesian3.UNIT_X,0),R=new m.Cartesian3,M=new P.Plane(m.Cartesian3.UNIT_X,0),S=new m.Cartesian3,D=new m.Cartesian3,x=[];function N(a,e,r){var t=x;if(t.length=a,e===r)for(i=0;i<a;i++)t[i]=e;else for(var n=(r-e)/a,i=0;i<a;i++)t[i]=e+i*n;return t}var G=new m.Cartographic,I=new m.Cartographic,V=new m.Cartesian3,k=new m.Cartesian3,L=new m.Cartesian3,_=new r.EllipsoidGeodesic,O=new d.EllipsoidRhumbLine;T.wrapLongitude=function(a,e){var r=[],t=[];if(p.defined(a)&&0<a.length){e=p.defaultValue(e,m.Matrix4.IDENTITY);for(var e=m.Matrix4.inverseTransformation(e,y),n=m.Matrix4.multiplyByPoint(e,m.Cartesian3.ZERO,b),i=m.Cartesian3.normalize(m.Matrix4.multiplyByPointAsVector(e,m.Cartesian3.UNIT_Y,A),A),o=P.Plane.fromPointNormal(n,i,E),e=m.Cartesian3.normalize(m.Matrix4.multiplyByPointAsVector(e,m.Cartesian3.UNIT_X,R),R),s=P.Plane.fromPointNormal(n,e,M),c=1,l=(r.push(m.Cartesian3.clone(a[0])),r[0]),u=a.length,h=1;h<u;++h){var g,C,f=a[h];(P.Plane.getPointDistance(s,l)<0||P.Plane.getPointDistance(s,f)<0)&&(g=w.IntersectionTests.lineSegmentPlane(l,f,o,S),p.defined(g))&&(C=m.Cartesian3.multiplyByScalar(i,5e-9,D),P.Plane.getPointDistance(o,l)<0&&m.Cartesian3.negate(C,C),r.push(m.Cartesian3.add(g,C,new m.Cartesian3)),t.push(c+1),m.Cartesian3.negate(C,C),r.push(m.Cartesian3.add(g,C,new m.Cartesian3)),c=1),r.push(m.Cartesian3.clone(a[h])),c++,l=f}t.push(c)}return{positions:r,lengths:t}},T.generateArc=function(a){var e=(a=p.defined(a)?a:{}).positions,r=e.length,t=p.defaultValue(a.ellipsoid,m.Ellipsoid.WGS84),n=p.defaultValue(a.height,0),i=Array.isArray(n);if(r<1)return[];if(1===r)return l=t.scaleToGeodeticSurface(e[0],k),0!==(n=i?n[0]:n)&&(g=t.geodeticSurfaceNormal(l,V),m.Cartesian3.multiplyByScalar(g,n,g),m.Cartesian3.add(l,g,l)),[l.x,l.y,l.z];for(var o=a.minDistance,s=(p.defined(o)||(g=p.defaultValue(a.granularity,v.CesiumMath.RADIANS_PER_DEGREE),o=v.CesiumMath.chordLength(g,t.maximumRadius)),0),c=0;c<r-1;c++)s+=T.numberOfPoints(e[c],e[c+1],o);var l=3*(s+1),u=new Array(l),h=0;for(c=0;c<r-1;c++)h=function(a,e,r,t,n,i,o,s){var c=t.scaleToGeodeticSurface(a,k),l=t.scaleToGeodeticSurface(e,L),u=T.numberOfPoints(a,e,r),a=t.cartesianToCartographic(c,G),e=t.cartesianToCartographic(l,I),h=N(u,n,i),g=(_.setEndPoints(a,e),_.surfaceDistance/u),C=s,f=(a.height=n,t.cartographicToCartesian(a,V));m.Cartesian3.pack(f,o,C),C+=3;for(var p=1;p<u;p++){var d=_.interpolateUsingSurfaceDistance(p*g,I);d.height=h[p],f=t.cartographicToCartesian(d,V),m.Cartesian3.pack(f,o,C),C+=3}return C}(e[c],e[c+1],o,t,i?n[c]:n,i?n[c+1]:n,u,h);x.length=0;var a=e[r-1],g=t.cartesianToCartographic(a,G),a=(g.height=i?n[r-1]:n,t.cartographicToCartesian(g,V));return m.Cartesian3.pack(a,u,l-3),u};var B=new m.Cartographic,U=new m.Cartographic;T.generateRhumbArc=function(a){var e=(a=p.defined(a)?a:{}).positions,r=e.length,t=p.defaultValue(a.ellipsoid,m.Ellipsoid.WGS84),n=p.defaultValue(a.height,0),i=Array.isArray(n);if(r<1)return[];if(1===r)return f=t.scaleToGeodeticSurface(e[0],k),0!==(n=i?n[0]:n)&&(h=t.geodeticSurfaceNormal(f,V),m.Cartesian3.multiplyByScalar(h,n,h),m.Cartesian3.add(f,h,f)),[f.x,f.y,f.z];for(var o,s=p.defaultValue(a.granularity,v.CesiumMath.RADIANS_PER_DEGREE),c=0,l=t.cartesianToCartographic(e[0],B),u=0;u<r-1;u++)o=t.cartesianToCartographic(e[u+1],U),c+=T.numberOfPointsRhumbLine(l,o,s),l=m.Cartographic.clone(o,B);var h=3*(c+1),g=new Array(h),C=0;for(u=0;u<r-1;u++)C=function(a,e,r,t,n,i,o,s){var a=t.cartesianToCartographic(a,G),e=t.cartesianToCartographic(e,I),c=T.numberOfPointsRhumbLine(a,e,r),l=(a.height=0,e.height=0,N(c,n,i)),u=((O=O.ellipsoid.equals(t)?O:new d.EllipsoidRhumbLine(void 0,void 0,t)).setEndPoints(a,e),O.surfaceDistance/c),h=s,g=(a.height=n,t.cartographicToCartesian(a,V));m.Cartesian3.pack(g,o,h),h+=3;for(var C=1;C<c;C++){var f=O.interpolateUsingSurfaceDistance(C*u,I);f.height=l[C],g=t.cartographicToCartesian(f,V),m.Cartesian3.pack(g,o,h),h+=3}return h}(e[u],e[u+1],s,t,i?n[u]:n,i?n[u+1]:n,g,C);x.length=0;var f=e[r-1],a=t.cartesianToCartographic(f,G),f=(a.height=i?n[r-1]:n,t.cartographicToCartesian(a,V));return m.Cartesian3.pack(f,g,h-3),g},T.generateCartesianArc=function(a){for(var e=T.generateArc(a),r=e.length/3,t=new Array(r),n=0;n<r;n++)t[n]=m.Cartesian3.unpack(e,3*n);return t},T.generateCartesianRhumbArc=function(a){for(var e=T.generateRhumbArc(a),r=e.length/3,t=new Array(r),n=0;n<r;n++)t[n]=m.Cartesian3.unpack(e,3*n);return t},a.PolylinePipeline=T});