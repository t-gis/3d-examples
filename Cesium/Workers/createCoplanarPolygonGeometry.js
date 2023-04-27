define(["./arrayRemoveDuplicates-18786327","./BoundingRectangle-2da8b04c","./Transforms-2f9313e7","./Matrix2-ccd5b911","./RuntimeError-346a3079","./ComponentDatatype-93750d1a","./CoplanarPolygonGeometryLibrary-29533232","./when-4bbc8319","./GeometryAttribute-4cca8ebf","./GeometryAttributes-7827a6c2","./GeometryInstance-5f4fe82b","./GeometryPipeline-d56805c6","./IndexDatatype-b7d979a6","./PolygonGeometryLibrary-1a362b1d","./PolygonPipeline-13235481","./VertexFormat-71718faa","./combine-83860057","./WebGLConstants-1c8239cc","./OrientedBoundingBox-3deedc47","./EllipsoidTangentPlane-53e9387a","./AxisAlignedBoundingBox-66b76991","./IntersectionTests-66bcab6d","./Plane-18bb00f8","./AttributeCompression-1f045b73","./EncodedCartesian3-08b8d980","./ArcType-98ec98bf","./EllipsoidRhumbLine-aa9e6266"],function(b,e,G,L,t,E,h,l,T,D,x,C,_,f,V,s,n,a,o,r,i,u,d,g,N,Q,j){"use strict";var k=new L.Cartesian3,P=new e.BoundingRectangle,R=new L.Cartesian2,I=new L.Cartesian2,v=new L.Cartesian3,A=new L.Cartesian3,w=new L.Cartesian3,F=new L.Cartesian3,M=new L.Cartesian3,B=new L.Cartesian3,H=new G.Quaternion,O=new L.Matrix3,z=new L.Matrix3,S=new L.Cartesian3;function p(e){var t=(e=l.defaultValue(e,l.defaultValue.EMPTY_OBJECT)).polygonHierarchy,n=l.defaultValue(e.vertexFormat,s.VertexFormat.DEFAULT);this._vertexFormat=s.VertexFormat.clone(n),this._polygonHierarchy=t,this._stRotation=l.defaultValue(e.stRotation,0),this._ellipsoid=L.Ellipsoid.clone(l.defaultValue(e.ellipsoid,L.Ellipsoid.WGS84)),this._workerName="createCoplanarPolygonGeometry",this.packedLength=f.PolygonGeometryLibrary.computeHierarchyPackedLength(t)+s.VertexFormat.packedLength+L.Ellipsoid.packedLength+2}p.fromPositions=function(e){return new p({polygonHierarchy:{positions:(e=l.defaultValue(e,l.defaultValue.EMPTY_OBJECT)).positions},vertexFormat:e.vertexFormat,stRotation:e.stRotation,ellipsoid:e.ellipsoid})},p.pack=function(e,t,n){return n=l.defaultValue(n,0),n=f.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,n),L.Ellipsoid.pack(e._ellipsoid,t,n),n+=L.Ellipsoid.packedLength,s.VertexFormat.pack(e._vertexFormat,t,n),n+=s.VertexFormat.packedLength,t[n++]=e._stRotation,t[n]=e.packedLength,t};var y=L.Ellipsoid.clone(L.Ellipsoid.UNIT_SPHERE),c=new s.VertexFormat,m={polygonHierarchy:{}};return p.unpack=function(e,t,n){t=l.defaultValue(t,0);var a=f.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t),o=(t=a.startingIndex,delete a.startingIndex,L.Ellipsoid.unpack(e,t,y)),r=(t+=L.Ellipsoid.packedLength,s.VertexFormat.unpack(e,t,c)),i=(t+=s.VertexFormat.packedLength,e[t++]),e=e[t];return(n=l.defined(n)?n:new p(m))._polygonHierarchy=a,n._ellipsoid=L.Ellipsoid.clone(o,n._ellipsoid),n._vertexFormat=s.VertexFormat.clone(r,n._vertexFormat),n._stRotation=i,n.packedLength=e,n},p.createGeometry=function(e){var t=e._vertexFormat,n=e._polygonHierarchy,a=e._stRotation,o=n.positions;if(!((o=b.arrayRemoveDuplicates(o,L.Cartesian3.equalsEpsilon,!0)).length<3)){var r=v,i=A,l=w,s=M,p=B;if(h.CoplanarPolygonGeometryLibrary.computeProjectTo2DArguments(o,F,s,p)){var r=L.Cartesian3.cross(s,p,r),e=(r=L.Cartesian3.normalize(r,r),L.Cartesian3.equalsEpsilon(F,L.Cartesian3.ZERO,E.CesiumMath.EPSILON6)||(e=e._ellipsoid.geodeticSurfaceNormal(F,S),L.Cartesian3.dot(r,e)<0&&(r=L.Cartesian3.negate(r,r),s=L.Cartesian3.negate(s,s))),h.CoplanarPolygonGeometryLibrary.createProjectPointsTo2DFunction(F,s,p)),y=h.CoplanarPolygonGeometryLibrary.createProjectPointTo2DFunction(F,s,p),s=(t.tangent&&(i=L.Cartesian3.clone(s,i)),t.bitangent&&(l=L.Cartesian3.clone(p,l)),f.PolygonGeometryLibrary.polygonsFromHierarchy(n,e,!1)),p=s.hierarchy,c=s.polygons;if(0!==p.length){for(var o=p[0].outerRing,n=G.BoundingSphere.fromPoints(o),m=f.PolygonGeometryLibrary.computeBoundingRectangle(r,y,o,a,P),u=[],d=0;d<c.length;d++){var g=new x.GeometryInstance({geometry:function(e,t,n,a,o,r,i,l){for(var s=e.positions,p=((e=V.PolygonPipeline.triangulate(e.positions2D,e.holes)).length<3&&(e=[0,1,2]),_.IndexDatatype.createTypedArray(s.length,e.length)),y=(p.set(e),O),c=(0!==a?(e=G.Quaternion.fromAxisAngle(r,a,H),y=L.Matrix3.fromQuaternion(e,y),(t.tangent||t.bitangent)&&(e=G.Quaternion.fromAxisAngle(r,-a,H),a=L.Matrix3.fromQuaternion(e,z),i=L.Cartesian3.normalize(L.Matrix3.multiplyByVector(a,i,i),i),t.bitangent)&&(l=L.Cartesian3.normalize(L.Cartesian3.cross(r,i,l),l))):y=L.Matrix3.clone(L.Matrix3.IDENTITY,y),I),m=(t.st&&(c.x=n.x,c.y=n.y),s.length),e=3*m,u=new Float64Array(e),d=t.normal?new Float32Array(e):void 0,g=t.tangent?new Float32Array(e):void 0,b=t.bitangent?new Float32Array(e):void 0,h=t.st?new Float32Array(2*m):void 0,x=0,C=0,f=0,P=0,v=0,A=0;A<m;A++){var w,F=s[A];u[x++]=F.x,u[x++]=F.y,u[x++]=F.z,t.st&&(F=o(L.Matrix3.multiplyByVector(y,F,k),R),L.Cartesian2.subtract(F,c,F),w=E.CesiumMath.clamp(F.x/n.width,0,1),F=E.CesiumMath.clamp(F.y/n.height,0,1),h[v++]=w,h[v++]=F),t.normal&&(d[C++]=r.x,d[C++]=r.y,d[C++]=r.z),t.tangent&&(g[P++]=i.x,g[P++]=i.y,g[P++]=i.z),t.bitangent&&(b[f++]=l.x,b[f++]=l.y,b[f++]=l.z)}return a=new D.GeometryAttributes,t.position&&(a.position=new T.GeometryAttribute({componentDatatype:E.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:u})),t.normal&&(a.normal=new T.GeometryAttribute({componentDatatype:E.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:d})),t.tangent&&(a.tangent=new T.GeometryAttribute({componentDatatype:E.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:g})),t.bitangent&&(a.bitangent=new T.GeometryAttribute({componentDatatype:E.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:b})),t.st&&(a.st=new T.GeometryAttribute({componentDatatype:E.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:h})),new T.Geometry({attributes:a,indices:p,primitiveType:T.PrimitiveType.TRIANGLES})}(c[d],t,m,a,y,r,i,l)});u.push(g)}e=C.GeometryPipeline.combineInstances(u)[0],s=(e.attributes.position.values=new Float64Array(e.attributes.position.values),e.indices=_.IndexDatatype.createTypedArray(e.attributes.position.values.length/3,e.indices),e.attributes);return t.position||delete s.position,new T.Geometry({attributes:s,indices:e.indices,primitiveType:e.primitiveType,boundingSphere:n})}}}},function(e,t){return l.defined(t)&&(e=p.unpack(e,t)),p.createGeometry(e)}});
