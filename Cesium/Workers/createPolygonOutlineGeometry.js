/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.98
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */
define(["./defaultValue-50f7432c","./Matrix2-7dfd434a","./ArcType-24f44850","./Transforms-f305a473","./ComponentDatatype-9b23164a","./EllipsoidTangentPlane-03ebf5f4","./GeometryAttribute-4d82fade","./GeometryAttributes-8bab1b25","./GeometryInstance-9e499d64","./GeometryOffsetAttribute-490bc2c9","./GeometryPipeline-33e32ecb","./IndexDatatype-ceed713e","./PolygonGeometryLibrary-7552563d","./PolygonPipeline-898e8861","./RuntimeError-48e1f06d","./combine-8462e002","./WebGLConstants-58abc51a","./AxisAlignedBoundingBox-a2ff9dfd","./IntersectionTests-4a7694f7","./Plane-3d30b188","./AttributeCompression-aa7855e7","./EncodedCartesian3-5efd45c3","./arrayRemoveDuplicates-fd3a3f4e","./EllipsoidRhumbLine-5454653c"],(function(e,t,i,o,r,n,a,s,l,y,u,p,d,c,f,g,m,h,b,P,E,A,_,G){"use strict";const L=[],T=[];function H(e,t,o,y,u){const f=n.EllipsoidTangentPlane.fromPoints(t,e).projectPointsOntoPlane(t,L);let g,m;c.PolygonPipeline.computeWindingOrder2D(f)===c.WindingOrder.CLOCKWISE&&(f.reverse(),t=t.slice().reverse());let h=t.length,b=0;if(y)for(g=new Float64Array(2*h*3),m=0;m<h;m++){const e=t[m],i=t[(m+1)%h];g[b++]=e.x,g[b++]=e.y,g[b++]=e.z,g[b++]=i.x,g[b++]=i.y,g[b++]=i.z}else{let r=0;if(u===i.ArcType.GEODESIC)for(m=0;m<h;m++)r+=d.PolygonGeometryLibrary.subdivideLineCount(t[m],t[(m+1)%h],o);else if(u===i.ArcType.RHUMB)for(m=0;m<h;m++)r+=d.PolygonGeometryLibrary.subdivideRhumbLineCount(e,t[m],t[(m+1)%h],o);for(g=new Float64Array(3*r),m=0;m<h;m++){let r;u===i.ArcType.GEODESIC?r=d.PolygonGeometryLibrary.subdivideLine(t[m],t[(m+1)%h],o,T):u===i.ArcType.RHUMB&&(r=d.PolygonGeometryLibrary.subdivideRhumbLine(e,t[m],t[(m+1)%h],o,T));const n=r.length;for(let e=0;e<n;++e)g[b++]=r[e]}}h=g.length/3;const P=2*h,E=p.IndexDatatype.createTypedArray(h,P);for(b=0,m=0;m<h-1;m++)E[b++]=m,E[b++]=m+1;return E[b++]=h-1,E[b++]=0,new l.GeometryInstance({geometry:new a.Geometry({attributes:new s.GeometryAttributes({position:new a.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:g})}),indices:E,primitiveType:a.PrimitiveType.LINES})})}function v(e,t,o,y,u){const f=n.EllipsoidTangentPlane.fromPoints(t,e).projectPointsOntoPlane(t,L);let g,m;c.PolygonPipeline.computeWindingOrder2D(f)===c.WindingOrder.CLOCKWISE&&(f.reverse(),t=t.slice().reverse());let h=t.length;const b=new Array(h);let P=0;if(y)for(g=new Float64Array(2*h*3*2),m=0;m<h;++m){b[m]=P/3;const e=t[m],i=t[(m+1)%h];g[P++]=e.x,g[P++]=e.y,g[P++]=e.z,g[P++]=i.x,g[P++]=i.y,g[P++]=i.z}else{let r=0;if(u===i.ArcType.GEODESIC)for(m=0;m<h;m++)r+=d.PolygonGeometryLibrary.subdivideLineCount(t[m],t[(m+1)%h],o);else if(u===i.ArcType.RHUMB)for(m=0;m<h;m++)r+=d.PolygonGeometryLibrary.subdivideRhumbLineCount(e,t[m],t[(m+1)%h],o);for(g=new Float64Array(3*r*2),m=0;m<h;++m){let r;b[m]=P/3,u===i.ArcType.GEODESIC?r=d.PolygonGeometryLibrary.subdivideLine(t[m],t[(m+1)%h],o,T):u===i.ArcType.RHUMB&&(r=d.PolygonGeometryLibrary.subdivideRhumbLine(e,t[m],t[(m+1)%h],o,T));const n=r.length;for(let e=0;e<n;++e)g[P++]=r[e]}}h=g.length/6;const E=b.length,A=2*(2*h+E),_=p.IndexDatatype.createTypedArray(h+E,A);for(P=0,m=0;m<h;++m)_[P++]=m,_[P++]=(m+1)%h,_[P++]=m+h,_[P++]=(m+1)%h+h;for(m=0;m<E;m++){const e=b[m];_[P++]=e,_[P++]=e+h}return new l.GeometryInstance({geometry:new a.Geometry({attributes:new s.GeometryAttributes({position:new a.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:g})}),indices:_,primitiveType:a.PrimitiveType.LINES})})}function C(o){const n=o.polygonHierarchy,a=e.defaultValue(o.ellipsoid,t.Ellipsoid.WGS84),s=e.defaultValue(o.granularity,r.CesiumMath.RADIANS_PER_DEGREE),l=e.defaultValue(o.perPositionHeight,!1),y=l&&e.defined(o.extrudedHeight),u=e.defaultValue(o.arcType,i.ArcType.GEODESIC);let p=e.defaultValue(o.height,0),c=e.defaultValue(o.extrudedHeight,p);if(!y){const e=Math.max(p,c);c=Math.min(p,c),p=e}this._ellipsoid=t.Ellipsoid.clone(a),this._granularity=s,this._height=p,this._extrudedHeight=c,this._arcType=u,this._polygonHierarchy=n,this._perPositionHeight=l,this._perPositionHeightExtrude=y,this._offsetAttribute=o.offsetAttribute,this._workerName="createPolygonOutlineGeometry",this.packedLength=d.PolygonGeometryLibrary.computeHierarchyPackedLength(n,t.Cartesian3)+t.Ellipsoid.packedLength+8}C.pack=function(i,o,r){return r=e.defaultValue(r,0),r=d.PolygonGeometryLibrary.packPolygonHierarchy(i._polygonHierarchy,o,r,t.Cartesian3),t.Ellipsoid.pack(i._ellipsoid,o,r),r+=t.Ellipsoid.packedLength,o[r++]=i._height,o[r++]=i._extrudedHeight,o[r++]=i._granularity,o[r++]=i._perPositionHeightExtrude?1:0,o[r++]=i._perPositionHeight?1:0,o[r++]=i._arcType,o[r++]=e.defaultValue(i._offsetAttribute,-1),o[r]=i.packedLength,o};const O=t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),x={polygonHierarchy:{}};return C.unpack=function(i,o,r){o=e.defaultValue(o,0);const n=d.PolygonGeometryLibrary.unpackPolygonHierarchy(i,o,t.Cartesian3);o=n.startingIndex,delete n.startingIndex;const a=t.Ellipsoid.unpack(i,o,O);o+=t.Ellipsoid.packedLength;const s=i[o++],l=i[o++],y=i[o++],u=1===i[o++],p=1===i[o++],c=i[o++],f=i[o++],g=i[o];return e.defined(r)||(r=new C(x)),r._polygonHierarchy=n,r._ellipsoid=t.Ellipsoid.clone(a,r._ellipsoid),r._height=s,r._extrudedHeight=l,r._granularity=y,r._perPositionHeight=p,r._perPositionHeightExtrude=u,r._arcType=c,r._offsetAttribute=-1===f?void 0:f,r.packedLength=g,r},C.fromPositions=function(t){return new C({polygonHierarchy:{positions:(t=e.defaultValue(t,e.defaultValue.EMPTY_OBJECT)).positions},height:t.height,extrudedHeight:t.extrudedHeight,ellipsoid:t.ellipsoid,granularity:t.granularity,perPositionHeight:t.perPositionHeight,arcType:t.arcType,offsetAttribute:t.offsetAttribute})},C.createGeometry=function(t){const i=t._ellipsoid,n=t._granularity,s=t._polygonHierarchy,l=t._perPositionHeight,p=t._arcType,f=d.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(s,!l,i);if(0===f.length)return;let g;const m=[],h=r.CesiumMath.chordLength(n,i.maximumRadius),b=t._height,P=t._extrudedHeight;let E,A;if(t._perPositionHeightExtrude||!r.CesiumMath.equalsEpsilon(b,P,0,r.CesiumMath.EPSILON2))for(A=0;A<f.length;A++){if(g=v(i,f[A],h,l,p),g.geometry=d.PolygonGeometryLibrary.scaleToGeodeticHeightExtruded(g.geometry,b,P,i,l),e.defined(t._offsetAttribute)){const e=g.geometry.attributes.position.values.length/3;let i=new Uint8Array(e);t._offsetAttribute===y.GeometryOffsetAttribute.TOP?i=i.fill(1,0,e/2):(E=t._offsetAttribute===y.GeometryOffsetAttribute.NONE?0:1,i=i.fill(E)),g.geometry.attributes.applyOffset=new a.GeometryAttribute({componentDatatype:r.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:i})}m.push(g)}else for(A=0;A<f.length;A++){if(g=H(i,f[A],h,l,p),g.geometry.attributes.position.values=c.PolygonPipeline.scaleToGeodeticHeight(g.geometry.attributes.position.values,b,i,!l),e.defined(t._offsetAttribute)){const e=g.geometry.attributes.position.values.length;E=t._offsetAttribute===y.GeometryOffsetAttribute.NONE?0:1;const i=new Uint8Array(e/3).fill(E);g.geometry.attributes.applyOffset=new a.GeometryAttribute({componentDatatype:r.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:i})}m.push(g)}const _=u.GeometryPipeline.combineInstances(m)[0],G=o.BoundingSphere.fromVertices(_.attributes.position.values);return new a.Geometry({attributes:_.attributes,indices:_.indices,primitiveType:_.primitiveType,boundingSphere:G,offsetAttribute:t._offsetAttribute})},function(i,o){return e.defined(o)&&(i=C.unpack(i,o)),i._ellipsoid=t.Ellipsoid.clone(i._ellipsoid),C.createGeometry(i)}}));
