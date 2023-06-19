define(["./AttributeCompression-1f045b73","./Matrix2-ccd5b911","./Color-cd00d4a5","./when-4bbc8319","./IndexDatatype-b7d979a6","./ComponentDatatype-93750d1a","./OrientedBoundingBox-3deedc47","./createTaskProcessorWorker","./RuntimeError-346a3079","./Transforms-2f9313e7","./combine-83860057","./WebGLConstants-1c8239cc","./EllipsoidTangentPlane-53e9387a","./AxisAlignedBoundingBox-66b76991","./IntersectionTests-66bcab6d","./Plane-18bb00f8"],function(ye,Ce,Ie,xe,we,ve,Ae,e,n,a,r,t,i,o,s,d){"use strict";var Ee=new Ce.Cartesian3,Ne=new Ce.Ellipsoid,Te=new Ce.Rectangle,Be={min:void 0,max:void 0,indexBytesPerElement:void 0};function ke(e,n,a){var r=n.length,t=2+r*Ae.OrientedBoundingBox.packedLength+1+function(e){for(var n=e.length,a=0,r=0;r<n;++r)a+=Ie.Color.packedLength+3+e[r].batchIds.length;return a}(a),i=new Float64Array(t),o=0;i[o++]=e,i[o++]=r;for(var s=0;s<r;++s)Ae.OrientedBoundingBox.pack(n[s],i,o),o+=Ae.OrientedBoundingBox.packedLength;var d=a.length;i[o++]=d;for(var f=0;f<d;++f){var c=a[f],u=(Ie.Color.pack(c.color,i,o),o+=Ie.Color.packedLength,i[o++]=c.offset,i[o++]=c.count,c.batchIds),h=u.length;i[o++]=h;for(var l=0;l<h;++l)i[o++]=u[l]}return i}var Le=new Ce.Cartesian3,Oe=new Ce.Cartesian3,Ue=new Ce.Cartesian3,Pe=new Ce.Cartesian3,Fe=new Ce.Cartesian3,Se=new Ce.Cartographic,De=new Ce.Rectangle;return e(function(e,D){a=e.packedBuffer,a=new Float64Array(a),S=0,Be.indexBytesPerElement=a[S++],Be.min=a[S++],Be.max=a[S++],Ce.Cartesian3.unpack(a,3,Ee),S+=Ce.Cartesian3.packedLength,Ce.Ellipsoid.unpack(a,S,Ne),S+=Ce.Ellipsoid.packedLength,Ce.Rectangle.unpack(a,S,Te);for(var n=new(2===Be.indexBytesPerElement?Uint16Array:Uint32Array)(e.indices),a=new Uint16Array(e.positions),r=new Uint32Array(e.counts),t=new Uint32Array(e.indexCounts),R=new Uint32Array(e.batchIds),M=new Uint32Array(e.batchTableColors),_=new Array(r.length),G=Ee,i=Ne,o=Te,Y=Be.min,V=Be.max,s=e.minimumHeights,d=e.maximumHeights,f=(xe.defined(s)&&xe.defined(d)&&(s=new Float32Array(s),d=new Float32Array(d)),a.length/2),H=a.subarray(0,f),W=a.subarray(f,2*f),z=(ye.AttributeCompression.zigZagDeltaDecode(H,W),new Float64Array(3*f)),c=0;c<f;++c){var u=H[c],h=W[c],u=ve.CesiumMath.lerp(o.west,o.east,u/32767),h=ve.CesiumMath.lerp(o.south,o.north,h/32767),u=Ce.Cartographic.fromRadians(u,h,0,Se),h=i.cartographicToCartesian(u,Le);Ce.Cartesian3.pack(h,z,3*c)}var l=r.length,Z=new Array(l),g=new Array(l),j=0,q=0;for(c=0;c<l;++c)Z[c]=j,g[c]=q,j+=r[c],q+=t[c];var p=new Float32Array(3*f*2),b=new Uint16Array(2*f),m=new Uint32Array(g.length),y=new Uint32Array(t.length),C=[],I={};for(c=0;c<l;++c)w=M[c],xe.defined(I[w])?(I[w].positionLength+=r[c],I[w].indexLength+=t[c],I[w].batchIds.push(c)):I[w]={positionLength:r[c],indexLength:t[c],offset:0,indexOffset:0,batchIds:[c]};var J,K=0,Q=0;for(w in I)I.hasOwnProperty(w)&&((v=I[w]).offset=K,v.indexOffset=Q,K+=2*v.positionLength,Q+=J=2*v.indexLength+6*v.positionLength,v.indexLength=J);var x=[];for(w in I)I.hasOwnProperty(w)&&(v=I[w],x.push({color:Ie.Color.fromRgba(parseInt(w)),offset:v.indexOffset,count:v.indexLength,batchIds:v.batchIds}));for(c=0;c<l;++c){for(var w,v,A=(v=I[w=M[c]]).offset,E=3*A,N=A,T=Z[c],B=r[c],X=R[c],$=Y,ee=V,ne=(xe.defined(s)&&xe.defined(d)&&($=s[c],ee=d[c]),Number.POSITIVE_INFINITY),ae=Number.NEGATIVE_INFINITY,re=Number.POSITIVE_INFINITY,te=Number.NEGATIVE_INFINITY,k=0;k<B;++k){var L=Ce.Cartesian3.unpack(z,3*T+3*k,Le),O=(i.scaleToGeodeticSurface(L,L),i.cartesianToCartographic(L,Se)),U=O.latitude,O=O.longitude,ne=Math.min(U,ne),ae=Math.max(U,ae),re=Math.min(O,re),te=Math.max(O,te),U=i.geodeticSurfaceNormal(L,Oe),O=Ce.Cartesian3.multiplyByScalar(U,$,Ue),ie=Ce.Cartesian3.add(L,O,Pe),O=Ce.Cartesian3.multiplyByScalar(U,ee,O),U=Ce.Cartesian3.add(L,O,Fe);Ce.Cartesian3.subtract(U,G,U),Ce.Cartesian3.subtract(ie,G,ie),Ce.Cartesian3.pack(U,p,E),Ce.Cartesian3.pack(ie,p,E+3),b[N]=X,b[N+1]=X,E+=6,N+=2}(o=De).west=re,o.east=te,o.south=ne,o.north=ae,_[c]=Ae.OrientedBoundingBox.fromRectangle(o,Y,V,i);var P=v.indexOffset,oe=g[c],se=t[c];for(m[c]=P,k=0;k<se;k+=3){var de=n[oe+k]-T,fe=n[oe+k+1]-T,ce=n[oe+k+2]-T;C[P++]=2*de+A,C[P++]=2*fe+A,C[P++]=2*ce+A,C[P++]=2*ce+1+A,C[P++]=2*fe+1+A,C[P++]=2*de+1+A}for(k=0;k<B;++k){var ue=k,he=(k+1)%B;C[P++]=2*ue+1+A,C[P++]=2*he+A,C[P++]=2*ue+A,C[P++]=2*ue+1+A,C[P++]=2*he+1+A,C[P++]=2*he+A}v.offset+=2*B,v.indexOffset=P,y[c]=P-m[c]}for(var C=we.IndexDatatype.createTypedArray(p.length/3,C),le=x.length,F=0;F<le;++F){for(var ge=x[F].batchIds,pe=0,be=ge.length,me=0;me<be;++me)pe+=y[ge[me]];x[F].count=pe}var S=ke(2===C.BYTES_PER_ELEMENT?we.IndexDatatype.UNSIGNED_SHORT:we.IndexDatatype.UNSIGNED_INT,_,x);return D.push(p.buffer,C.buffer,m.buffer,y.buffer,b.buffer,S.buffer),{positions:p.buffer,indices:C.buffer,indexOffsets:m.buffer,indexCounts:y.buffer,batchIds:b.buffer,packedBuffer:S.buffer}})});