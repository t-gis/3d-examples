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
define(["./AttributeCompression-aa7855e7","./Transforms-f305a473","./Matrix2-7dfd434a","./defaultValue-50f7432c","./TerrainEncoding-007c35af","./IndexDatatype-ceed713e","./ComponentDatatype-9b23164a","./OrientedBoundingBox-69290b47","./createTaskProcessorWorker","./combine-8462e002","./RuntimeError-48e1f06d","./WebGLConstants-58abc51a","./EllipsoidTangentPlane-03ebf5f4","./AxisAlignedBoundingBox-a2ff9dfd","./IntersectionTests-4a7694f7","./Plane-3d30b188"],(function(e,t,n,i,s,r,h,o,u,d,p,a,l,f,c,g){"use strict";const m={clipTriangleAtAxisAlignedThreshold:function(e,t,n,s,r,h){let o,u,d;i.defined(h)?h.length=0:h=[],t?(o=n<e,u=s<e,d=r<e):(o=n>e,u=s>e,d=r>e);const p=o+u+d;let a,l,f,c,g,m;return 1===p?o?(a=(e-n)/(s-n),l=(e-n)/(r-n),h.push(1),h.push(2),1!==l&&(h.push(-1),h.push(0),h.push(2),h.push(l)),1!==a&&(h.push(-1),h.push(0),h.push(1),h.push(a))):u?(f=(e-s)/(r-s),c=(e-s)/(n-s),h.push(2),h.push(0),1!==c&&(h.push(-1),h.push(1),h.push(0),h.push(c)),1!==f&&(h.push(-1),h.push(1),h.push(2),h.push(f))):d&&(g=(e-r)/(n-r),m=(e-r)/(s-r),h.push(0),h.push(1),1!==m&&(h.push(-1),h.push(2),h.push(1),h.push(m)),1!==g&&(h.push(-1),h.push(2),h.push(0),h.push(g))):2===p?o||n===e?u||s===e?d||r===e||(l=(e-n)/(r-n),f=(e-s)/(r-s),h.push(2),h.push(-1),h.push(0),h.push(2),h.push(l),h.push(-1),h.push(1),h.push(2),h.push(f)):(m=(e-r)/(s-r),a=(e-n)/(s-n),h.push(1),h.push(-1),h.push(2),h.push(1),h.push(m),h.push(-1),h.push(0),h.push(1),h.push(a)):(c=(e-s)/(n-s),g=(e-r)/(n-r),h.push(0),h.push(-1),h.push(1),h.push(0),h.push(c),h.push(-1),h.push(2),h.push(0),h.push(g)):3!==p&&(h.push(0),h.push(1),h.push(2)),h},computeBarycentricCoordinates:function(e,t,s,r,h,o,u,d,p){const a=s-u,l=u-h,f=o-d,c=r-d,g=1/(f*a+l*c),m=t-d,x=e-u,w=(f*x+l*m)*g,C=(-c*x+a*m)*g,B=1-w-C;return i.defined(p)?(p.x=w,p.y=C,p.z=B,p):new n.Cartesian3(w,C,B)},computeLineSegmentLineSegmentIntersection:function(e,t,s,r,h,o,u,d,p){const a=(d-o)*(s-e)-(u-h)*(r-t);if(0===a)return;const l=((u-h)*(t-o)-(d-o)*(e-h))/a,f=((s-e)*(t-o)-(r-t)*(e-h))/a;return l>=0&&l<=1&&f>=0&&f<=1?(i.defined(p)||(p=new n.Cartesian2),p.x=e+l*(s-e),p.y=t+l*(r-t),p):void 0}};var x=m;const w=32767,C=w/2|0,B=[],y=[],I=[],A=new n.Cartographic;let b=new n.Cartesian3;const v=[],T=[],z=[],V=[],M=[],N=new n.Cartesian3,E=new t.BoundingSphere,R=new o.OrientedBoundingBox,H=new n.Cartesian2,O=new n.Cartesian3;function S(){this.vertexBuffer=void 0,this.index=void 0,this.first=void 0,this.second=void 0,this.ratio=void 0}S.prototype.clone=function(e){return i.defined(e)||(e=new S),e.uBuffer=this.uBuffer,e.vBuffer=this.vBuffer,e.heightBuffer=this.heightBuffer,e.normalBuffer=this.normalBuffer,e.index=this.index,e.first=this.first,e.second=this.second,e.ratio=this.ratio,e},S.prototype.initializeIndexed=function(e,t,n,i,s){this.uBuffer=e,this.vBuffer=t,this.heightBuffer=n,this.normalBuffer=i,this.index=s,this.first=void 0,this.second=void 0,this.ratio=void 0},S.prototype.initializeFromClipResult=function(e,t,n){let i=t+1;return-1!==e[t]?n[e[t]].clone(this):(this.vertexBuffer=void 0,this.index=void 0,this.first=n[e[i]],++i,this.second=n[e[i]],++i,this.ratio=e[i],++i),i},S.prototype.getKey=function(){return this.isIndexed()?this.index:JSON.stringify({first:this.first.getKey(),second:this.second.getKey(),ratio:this.ratio})},S.prototype.isIndexed=function(){return i.defined(this.index)},S.prototype.getH=function(){return i.defined(this.index)?this.heightBuffer[this.index]:h.CesiumMath.lerp(this.first.getH(),this.second.getH(),this.ratio)},S.prototype.getU=function(){return i.defined(this.index)?this.uBuffer[this.index]:h.CesiumMath.lerp(this.first.getU(),this.second.getU(),this.ratio)},S.prototype.getV=function(){return i.defined(this.index)?this.vBuffer[this.index]:h.CesiumMath.lerp(this.first.getV(),this.second.getV(),this.ratio)};let U=new n.Cartesian2,F=-1;const P=[new n.Cartesian3,new n.Cartesian3],D=[new n.Cartesian3,new n.Cartesian3];function W(t,i){++F;let s=P[F],r=D[F];return s=e.AttributeCompression.octDecode(t.first.getNormalX(),t.first.getNormalY(),s),r=e.AttributeCompression.octDecode(t.second.getNormalX(),t.second.getNormalY(),r),b=n.Cartesian3.lerp(s,r,t.ratio,b),n.Cartesian3.normalize(b,b),e.AttributeCompression.octEncode(b,i),--F,i}S.prototype.getNormalX=function(){return i.defined(this.index)?this.normalBuffer[2*this.index]:(U=W(this,U),U.x)},S.prototype.getNormalY=function(){return i.defined(this.index)?this.normalBuffer[2*this.index+1]:(U=W(this,U),U.y)};const X=[];function k(e,t,n,s,r,h,o,u,d){if(0===o.length)return;let p=0,a=0;for(;a<o.length;)a=X[p++].initializeFromClipResult(o,a,u);for(let r=0;r<p;++r){const o=X[r];if(o.isIndexed())o.newIndex=h[o.index],o.uBuffer=e,o.vBuffer=t,o.heightBuffer=n,d&&(o.normalBuffer=s);else{const r=o.getKey();if(i.defined(h[r]))o.newIndex=h[r];else{const i=e.length;e.push(o.getU()),t.push(o.getV()),n.push(o.getH()),d&&(s.push(o.getNormalX()),s.push(o.getNormalY())),o.newIndex=i,h[r]=i}}}3===p?(r.push(X[0].newIndex),r.push(X[1].newIndex),r.push(X[2].newIndex)):4===p&&(r.push(X[0].newIndex),r.push(X[1].newIndex),r.push(X[2].newIndex),r.push(X[0].newIndex),r.push(X[2].newIndex),r.push(X[3].newIndex))}return X.push(new S),X.push(new S),X.push(new S),X.push(new S),u((function(e,i){const u=e.isEastChild,d=e.isNorthChild,p=u?C:0,a=u?w:C,l=d?C:0,f=d?w:C,c=v,g=T,m=z,U=M;c.length=0,g.length=0,m.length=0,U.length=0;const F=V;F.length=0;const P={},D=e.vertices;let W=e.indices;W=W.subarray(0,e.indexCountWithoutSkirts);const X=s.TerrainEncoding.clone(e.encoding),K=X.hasVertexNormals;let L=0;const Y=e.vertexCountWithoutSkirts,_=e.minimumHeight,G=e.maximumHeight,J=new Array(Y),Z=new Array(Y),j=new Array(Y),q=K?new Array(2*Y):void 0;let Q,$,ee,te,ne;for($=0,ee=0;$<Y;++$,ee+=2){const e=X.decodeTextureCoordinates(D,$,H);if(Q=X.decodeHeight(D,$),te=h.CesiumMath.clamp(e.x*w|0,0,w),ne=h.CesiumMath.clamp(e.y*w|0,0,w),j[$]=h.CesiumMath.clamp((Q-_)/(G-_)*w|0,0,w),te<20&&(te=0),ne<20&&(ne=0),w-te<20&&(te=w),w-ne<20&&(ne=w),J[$]=te,Z[$]=ne,K){const e=X.getOctEncodedNormal(D,$,O);q[ee]=e.x,q[ee+1]=e.y}(u&&te>=C||!u&&te<=C)&&(d&&ne>=C||!d&&ne<=C)&&(P[$]=L,c.push(te),g.push(ne),m.push(j[$]),K&&(U.push(q[ee]),U.push(q[ee+1])),++L)}const ie=[];ie.push(new S),ie.push(new S),ie.push(new S);const se=[];let re,he;for(se.push(new S),se.push(new S),se.push(new S),$=0;$<W.length;$+=3){const e=W[$],t=W[$+1],n=W[$+2],i=J[e],s=J[t],r=J[n];ie[0].initializeIndexed(J,Z,j,q,e),ie[1].initializeIndexed(J,Z,j,q,t),ie[2].initializeIndexed(J,Z,j,q,n);const h=x.clipTriangleAtAxisAlignedThreshold(C,u,i,s,r,B);re=0,re>=h.length||(re=se[0].initializeFromClipResult(h,re,ie),re>=h.length||(re=se[1].initializeFromClipResult(h,re,ie),re>=h.length||(re=se[2].initializeFromClipResult(h,re,ie),he=x.clipTriangleAtAxisAlignedThreshold(C,d,se[0].getV(),se[1].getV(),se[2].getV(),y),k(c,g,m,U,F,P,he,se,K),re<h.length&&(se[2].clone(se[1]),se[2].initializeFromClipResult(h,re,ie),he=x.clipTriangleAtAxisAlignedThreshold(C,d,se[0].getV(),se[1].getV(),se[2].getV(),y),k(c,g,m,U,F,P,he,se,K)))))}const oe=u?-w:0,ue=d?-w:0,de=[],pe=[],ae=[],le=[];let fe=Number.MAX_VALUE,ce=-fe;const ge=I;ge.length=0;const me=n.Ellipsoid.clone(e.ellipsoid),xe=n.Rectangle.clone(e.childRectangle),we=xe.north,Ce=xe.south;let Be=xe.east;const ye=xe.west;for(Be<ye&&(Be+=h.CesiumMath.TWO_PI),$=0;$<c.length;++$)te=Math.round(c[$]),te<=p?(de.push($),te=0):te>=a?(ae.push($),te=w):te=2*te+oe,c[$]=te,ne=Math.round(g[$]),ne<=l?(pe.push($),ne=0):ne>=f?(le.push($),ne=w):ne=2*ne+ue,g[$]=ne,Q=h.CesiumMath.lerp(_,G,m[$]/w),Q<fe&&(fe=Q),Q>ce&&(ce=Q),m[$]=Q,A.longitude=h.CesiumMath.lerp(ye,Be,te/w),A.latitude=h.CesiumMath.lerp(Ce,we,ne/w),A.height=Q,me.cartographicToCartesian(A,b),ge.push(b.x),ge.push(b.y),ge.push(b.z);const Ie=t.BoundingSphere.fromVertices(ge,n.Cartesian3.ZERO,3,E),Ae=o.OrientedBoundingBox.fromRectangle(xe,fe,ce,me,R),be=new s.EllipsoidalOccluder(me).computeHorizonCullingPointFromVerticesPossiblyUnderEllipsoid(Ie.center,ge,3,Ie.center,fe,N),ve=ce-fe,Te=new Uint16Array(c.length+g.length+m.length);for($=0;$<c.length;++$)Te[$]=c[$];let ze=c.length;for($=0;$<g.length;++$)Te[ze+$]=g[$];for(ze+=g.length,$=0;$<m.length;++$)Te[ze+$]=w*(m[$]-fe)/ve;const Ve=r.IndexDatatype.createTypedArray(c.length,F);let Me;if(K){const e=new Uint8Array(U);i.push(Te.buffer,Ve.buffer,e.buffer),Me=e.buffer}else i.push(Te.buffer,Ve.buffer);return{vertices:Te.buffer,encodedNormals:Me,indices:Ve.buffer,minimumHeight:fe,maximumHeight:ce,westIndices:de,southIndices:pe,eastIndices:ae,northIndices:le,boundingSphere:Ie,orientedBoundingBox:Ae,horizonOcclusionPoint:be}}))}));
