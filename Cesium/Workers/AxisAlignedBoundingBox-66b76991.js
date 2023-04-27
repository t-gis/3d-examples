define(["exports","./Matrix2-ccd5b911","./RuntimeError-346a3079","./when-4bbc8319","./Transforms-2f9313e7"],function(e,d,n,h,a){"use strict";function y(e,n,i){this.minimum=d.Cartesian3.clone(h.defaultValue(e,d.Cartesian3.ZERO)),this.maximum=d.Cartesian3.clone(h.defaultValue(n,d.Cartesian3.ZERO)),i=h.defined(i)?d.Cartesian3.clone(i):d.Cartesian3.midpoint(this.minimum,this.maximum,new d.Cartesian3),this.center=i}y.fromPoints=function(e,n){if(h.defined(n)||(n=new y),h.defined(e)&&0!==e.length){for(var i=e[0].x,t=e[0].y,a=e[0].z,m=e[0].x,r=e[0].y,s=e[0].z,u=e.length,c=1;c<u;c++)var o=e[c],l=o.x,x=o.y,o=o.z,i=Math.min(l,i),m=Math.max(l,m),t=Math.min(x,t),r=Math.max(x,r),a=Math.min(o,a),s=Math.max(o,s);var f=n.minimum,C=(f.x=i,f.y=t,f.z=a,n.maximum);C.x=m,C.y=r,C.z=s,n.center=d.Cartesian3.midpoint(f,C,n.center)}else n.minimum=d.Cartesian3.clone(d.Cartesian3.ZERO,n.minimum),n.maximum=d.Cartesian3.clone(d.Cartesian3.ZERO,n.maximum),n.center=d.Cartesian3.clone(d.Cartesian3.ZERO,n.center);return n},y.clone=function(e,n){if(h.defined(e))return h.defined(n)?(n.minimum=d.Cartesian3.clone(e.minimum,n.minimum),n.maximum=d.Cartesian3.clone(e.maximum,n.maximum),n.center=d.Cartesian3.clone(e.center,n.center),n):new y(e.minimum,e.maximum,e.center)},y.equals=function(e,n){return e===n||h.defined(e)&&h.defined(n)&&d.Cartesian3.equals(e.center,n.center)&&d.Cartesian3.equals(e.minimum,n.minimum)&&d.Cartesian3.equals(e.maximum,n.maximum)};var m=new d.Cartesian3;y.intersectPlane=function(e,n){m=d.Cartesian3.subtract(e.maximum,e.minimum,m);var i=d.Cartesian3.multiplyByScalar(m,.5,m),t=n.normal,i=i.x*Math.abs(t.x)+i.y*Math.abs(t.y)+i.z*Math.abs(t.z),e=d.Cartesian3.dot(e.center,t)+n.distance;return 0<e-i?a.Intersect.INSIDE:e+i<0?a.Intersect.OUTSIDE:a.Intersect.INTERSECTING},y.prototype.clone=function(e){return y.clone(this,e)},y.prototype.intersectPlane=function(e){return y.intersectPlane(this,e)},y.prototype.equals=function(e){return y.equals(this,e)},e.AxisAlignedBoundingBox=y});