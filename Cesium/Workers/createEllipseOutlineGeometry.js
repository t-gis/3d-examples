define(["./Matrix2-ccd5b911","./when-4bbc8319","./EllipseOutlineGeometry-034f1234","./RuntimeError-346a3079","./ComponentDatatype-93750d1a","./WebGLConstants-1c8239cc","./GeometryOffsetAttribute-1772960d","./Transforms-2f9313e7","./combine-83860057","./EllipseGeometryLibrary-58daef83","./GeometryAttribute-4cca8ebf","./GeometryAttributes-7827a6c2","./IndexDatatype-b7d979a6"],function(r,i,n,e,t,o,c,l,a,s,u,d,m){"use strict";return function(e,t){return(e=i.defined(t)?n.EllipseOutlineGeometry.unpack(e,t):e)._center=r.Cartesian3.clone(e._center),e._ellipsoid=r.Ellipsoid.clone(e._ellipsoid),n.EllipseOutlineGeometry.createGeometry(e)}});