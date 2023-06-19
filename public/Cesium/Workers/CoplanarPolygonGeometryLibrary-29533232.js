define(["exports","./Matrix2-ccd5b911","./RuntimeError-346a3079","./OrientedBoundingBox-3deedc47"],function(n,g,t,l){"use strict";var e={},i=new g.Cartesian3,f=new g.Cartesian3,x=new g.Cartesian3,B=new g.Cartesian3,M=new l.OrientedBoundingBox;function o(n,t,e,r,a){n=g.Cartesian3.subtract(n,t,i),t=g.Cartesian3.dot(e,n),e=g.Cartesian3.dot(r,n);return g.Cartesian2.fromElements(t,e,a)}e.validOutline=function(n){var n=l.OrientedBoundingBox.fromPoints(n,M).halfAxes,t=g.Matrix3.getColumn(n,0,f),e=g.Matrix3.getColumn(n,1,x),n=g.Matrix3.getColumn(n,2,B),t=g.Cartesian3.magnitude(t),e=g.Cartesian3.magnitude(e),n=g.Cartesian3.magnitude(n);return!(0===t&&(0===e||0===n)||0===e&&0===n)},e.computeProjectTo2DArguments=function(n,t,e,r){var a,i,n=l.OrientedBoundingBox.fromPoints(n,M),o=n.halfAxes,u=g.Matrix3.getColumn(o,0,f),s=g.Matrix3.getColumn(o,1,x),o=g.Matrix3.getColumn(o,2,B),C=g.Cartesian3.magnitude(u),c=g.Cartesian3.magnitude(s),m=g.Cartesian3.magnitude(o),d=Math.min(C,c,m);return(0!==C||0!==c&&0!==m)&&(0!==c||0!==m)&&(d!==c&&d!==m||(a=u),d===C?a=s:d===m&&(i=s),d!==C&&d!==c||(i=o),g.Cartesian3.normalize(a,e),g.Cartesian3.normalize(i,r),g.Cartesian3.clone(n.center,t),!0)},e.createProjectPointsTo2DFunction=function(r,a,i){return function(n){for(var t=new Array(n.length),e=0;e<n.length;e++)t[e]=o(n[e],r,a,i);return t}},e.createProjectPointTo2DFunction=function(e,r,a){return function(n,t){return o(n,e,r,a,t)}},n.CoplanarPolygonGeometryLibrary=e});