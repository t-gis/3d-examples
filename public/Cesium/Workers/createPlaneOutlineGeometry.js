define(["./when-4bbc8319","./Transforms-2f9313e7","./Matrix2-ccd5b911","./RuntimeError-346a3079","./ComponentDatatype-93750d1a","./GeometryAttribute-4cca8ebf","./GeometryAttributes-7827a6c2","./combine-83860057","./WebGLConstants-1c8239cc"],function(r,i,a,e,o,c,u,t,n){"use strict";function y(){this._workerName="createPlaneOutlineGeometry"}y.packedLength=0,y.pack=function(e,t){return t},y.unpack=function(e,t,n){return r.defined(n)?n:new y};var m=new a.Cartesian3(-.5,-.5,0),s=new a.Cartesian3(.5,.5,0);return y.createGeometry=function(){var e=new u.GeometryAttributes,t=new Uint16Array(8),n=new Float64Array(12);return n[0]=m.x,n[1]=m.y,n[2]=m.z,n[3]=s.x,n[4]=m.y,n[5]=m.z,n[6]=s.x,n[7]=s.y,n[8]=m.z,n[9]=m.x,n[10]=s.y,n[11]=m.z,e.position=new c.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:n}),t[0]=0,t[1]=1,t[2]=1,t[3]=2,t[4]=2,t[5]=3,t[6]=3,t[7]=0,new c.Geometry({attributes:e,indices:t,primitiveType:c.PrimitiveType.LINES,boundingSphere:new i.BoundingSphere(a.Cartesian3.ZERO,Math.sqrt(2))})},function(e,t){return r.defined(t)&&(e=y.unpack(e,t)),y.createGeometry(e)}});
