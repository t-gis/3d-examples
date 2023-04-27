define(["./Matrix2-ccd5b911","./AxisAlignedBoundingBox-66b76991","./Transforms-2f9313e7","./when-4bbc8319","./RuntimeError-346a3079","./TerrainEncoding-e6d0ecf6","./ComponentDatatype-93750d1a","./OrientedBoundingBox-3deedc47","./WebMercatorProjection-b29097b4","./createTaskProcessorWorker","./combine-83860057","./AttributeCompression-1f045b73","./WebGLConstants-1c8239cc","./EllipsoidTangentPlane-53e9387a","./IntersectionTests-66bcab6d","./Plane-18bb00f8"],function(Fe,Ne,Oe,Re,r,Le,ze,He,_e,e,t,i,a,n,s,l){"use strict";var o=Object.freeze({NONE:0,LERC:1}),Ye={},We=(Ye.DEFAULT_STRUCTURE=Object.freeze({heightScale:1,heightOffset:0,elementsPerHeight:1,stride:1,elementMultiplier:256,isBigEndian:!1}),new Fe.Cartesian3),Xe=new Fe.Matrix4,Ze=new Fe.Cartesian3,je=new Fe.Cartesian3,f=(Ye.computeVertices=function(e){for(var t,i,a,N,O,R=Math.cos,L=Math.sin,z=Math.sqrt,H=Math.atan,_=Math.exp,Y=ze.CesiumMath.PI_OVER_TWO,r=ze.CesiumMath.toRadians,W=e.heightmap,n=e.width,s=e.height,l=e.skirtHeight,X=0<l,o=Re.defaultValue(e.isGeographic,!0),f=Re.defaultValue(e.ellipsoid,Fe.Ellipsoid.WGS84),u=1/f.maximumRadius,c=Fe.Rectangle.clone(e.nativeRectangle),d=Fe.Rectangle.clone(e.rectangle),Z=Re.defined(d)?(t=d.west,i=d.south,a=d.east,d.north):o?(t=r(c.west),i=r(c.south),a=r(c.east),r(c.north)):(t=c.west*u,i=Y-2*H(_(-c.south*u)),a=c.east*u,Y-2*H(_(-c.north*u))),h=e.relativeToCenter,j=Re.defined(h),h=j?h:Fe.Cartesian3.ZERO,m=Re.defaultValue(e.includeWebMercatorT,!1),G=Re.defaultValue(e.exaggeration,1),q=Re.defaultValue(e.exaggerationRelativeHeight,0),Q=1!==G,e=Re.defaultValue(e.structure,Ye.DEFAULT_STRUCTURE),J=Re.defaultValue(e.heightScale,Ye.DEFAULT_STRUCTURE.heightScale),K=Re.defaultValue(e.heightOffset,Ye.DEFAULT_STRUCTURE.heightOffset),$=Re.defaultValue(e.elementsPerHeight,Ye.DEFAULT_STRUCTURE.elementsPerHeight),ee=Re.defaultValue(e.stride,Ye.DEFAULT_STRUCTURE.stride),te=Re.defaultValue(e.elementMultiplier,Ye.DEFAULT_STRUCTURE.elementMultiplier),ie=Re.defaultValue(e.isBigEndian,Ye.DEFAULT_STRUCTURE.isBigEndian),g=Fe.Rectangle.computeWidth(c),p=Fe.Rectangle.computeHeight(c),ae=g/(n-1),re=p/(s-1),e=(o||(g*=u,p*=u),f.radiiSquared),ne=e.x,se=e.y,le=e.z,x=65536,w=-65536,e=Oe.Transforms.eastNorthUpToFixedFrame(h,f),oe=Fe.Matrix4.inverseTransformation(e,Xe),k=(m&&(N=_e.WebMercatorProjection.geodeticLatitudeToMercatorAngle(i),O=1/(_e.WebMercatorProjection.geodeticLatitudeToMercatorAngle(Z)-N)),Ze),y=(k.x=Number.POSITIVE_INFINITY,k.y=Number.POSITIVE_INFINITY,k.z=Number.POSITIVE_INFINITY,je),fe=(y.x=Number.NEGATIVE_INFINITY,y.y=Number.NEGATIVE_INFINITY,y.z=Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY),I=n*s,b=I+(0<l?2*n+2*s:0),ue=new Array(b),ce=new Array(b),de=new Array(b),he=m?new Array(b):[],me=Q?new Array(b):[],ge=0,pe=s,xe=0,we=n,U=(X&&(--ge,++pe,--xe,++we),ge);U<pe;++U){var ke,T=U,M=(s<=(T=T<0?0:T)&&(T=s-1),c.north-re*T),M=o?r(M):Y-2*H(_(-M*u)),ye=ze.CesiumMath.clamp((M-i)/(Z-i),0,1),Ie=U===ge,be=U===pe-1,Ue=(0<l&&(Ie?M+=1e-5*p:be&&(M-=1e-5*p)),R(M)),Te=L(M),Me=le*Te;m&&(ke=(_e.WebMercatorProjection.geodeticLatitudeToMercatorAngle(M)-N)*O);for(var V=xe;V<we;++V){var A=V,Ve=T*(n*ee)+(A=n<=(A=A<0?0:A)?n-1:A)*ee;if(1===$)B=W[Ve];else{var v,B=0;if(ie)for(v=0;v<$;++v)B=B*te+W[Ve+v];else for(v=$-1;0<=v;--v)B=B*te+W[Ve+v]}B=B*J+K;var w=Math.max(w,B),x=Math.min(x,B),D=c.west+ae*A,Ae=(o?D=r(D):D*=u,(D-t)/(a-t)),Ae=ze.CesiumMath.clamp(Ae,0,1),S=T*n+A;if(0<l){var P=V===xe,E=V===we-1,ve=Ie||be||P||E;if((Ie||be)&&(P||E))continue;ve&&(B-=l,P?(S=s-T-1+I,D-=1e-5*g):be?S=I+s+(n-A-1):E?(S=I+s+n+T,D+=1e-5*g):Ie&&(S=I+s+n+s+A))}var ve=Ue*R(D),P=Ue*L(D),E=ne*ve,A=se*P,D=1/z(E*ve+A*P+Me*Te),Be=E*D,A=A*D,D=Me*D,C=new Fe.Cartesian3;C.x=Be+ve*B,C.y=A+P*B,C.z=D+Te*B,Fe.Matrix4.multiplyByPoint(oe,C,We),Fe.Cartesian3.minimumByComponent(We,k,k),Fe.Cartesian3.maximumByComponent(We,y,y),fe=Math.min(fe,B),ue[S]=C,de[S]=new Fe.Cartesian2(Ae,ye),ce[S]=B,m&&(he[S]=ke),Q&&(me[S]=f.geodeticSurfaceNormal(C))}}for(var De,Se,X=Oe.BoundingSphere.fromPoints(ue),d=(Re.defined(d)&&(De=He.OrientedBoundingBox.fromRectangle(d,x,w,f)),j&&(Se=new Le.EllipsoidalOccluder(f).computeHorizonCullingPointPossiblyUnderEllipsoid(h,ue,x)),new Ne.AxisAlignedBoundingBox(k,y,h)),Pe=new Le.TerrainEncoding(h,d,fe,w,e,!1,m,Q,G,q),Ee=new Float32Array(b*Pe.stride),Ce=0,F=0;F<b;++F)Ce=Pe.encode(Ee,Ce,ue[F],de[F],ce[F],void 0,he[F],me[F]);return{vertices:Ee,maximumHeight:w,minimumHeight:x,encoding:Pe,boundingSphere3D:X,orientedBoundingBox:De,occludeePointInScaledSpace:Se}},Re.createCommonjsModule(function(i){!function(){n=function(e,t,i,a,r){for(var n,s,l,o,f,u=0,c=e.pixels.numBlocksX,d=e.pixels.numBlocksY,h=Math.floor(e.width/c),m=Math.floor(e.height/d),g=2*e.maxZError,p=Number.MAX_VALUE,x=(i=i||(e.mask?e.mask.bitset:null),s=new t(e.width*e.height),r&&i&&(l=new Uint8Array(e.width*e.height)),new Float32Array(h*m)),w=0;w<=d;w++){var k=w!==d?m:e.height%d;if(0!==k)for(var y=0;y<=c;y++){var I=y!==c?h:e.width%c;if(0!==I){var b,U,T,M,V=w*e.width*m+y*h,A=e.width-I,v=e.pixels.blocks[u];if(v.encoding<2?(b=0===v.encoding?v.rawData:(B(v.stuffedData,v.bitsPerPixel,v.numValidPixels,v.offset,g,x,e.pixels.maxValue),x),U=0):T=2===v.encoding?0:v.offset,i)for(f=0;f<k;f++){for(7&V&&(M=i[V>>3],M<<=7&V),o=0;o<I;o++)128&(M=7&V?M:i[V>>3])?(l&&(l[V]=1),p=(n=v.encoding<2?b[U++]:T)<p?n:p,s[V++]=n):(l&&(l[V]=0),s[V++]=a),M<<=1;V+=A}else if(v.encoding<2)for(f=0;f<k;f++){for(o=0;o<I;o++)p=(n=b[U++])<p?n:p,s[V++]=n;V+=A}else for(p=T<p?T:p,f=0;f<k;f++){for(o=0;o<I;o++)s[V++]=T;V+=A}if(1===v.encoding&&U!==v.numValidPixels)throw"Block and Mask do not match";u++}}}return{resultPixels:s,resultMask:l,minValue:p}},s=function(e){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,noDataValue:e.noDataValue}}},l=function(e){for(var t=e.pixels.numBlocksX*e.pixels.numBlocksY,i={},a=0;a<t;a++){var r=e.pixels.blocks[a];0===r.encoding?i.float32=!0:1===r.encoding?i[r.bitsPerPixel]=!0:i[0]=!0}return Object.keys(i)},o=function(e,t,i){var a={},r=new Uint8Array(e,t,10);if(a.fileIdentifierString=String.fromCharCode.apply(null,r),"CntZImage"!==a.fileIdentifierString.trim())throw"Unexpected file identifier string: "+a.fileIdentifierString;t+=10;var n=new DataView(e,t,24);if(a.fileVersion=n.getInt32(0,!0),a.imageType=n.getInt32(4,!0),a.height=n.getUint32(8,!0),a.width=n.getUint32(12,!0),a.maxZError=n.getFloat64(16,!0),t+=24,!i)if(n=new DataView(e,t,16),a.mask={},a.mask.numBlocksY=n.getUint32(0,!0),a.mask.numBlocksX=n.getUint32(4,!0),a.mask.numBytes=n.getUint32(8,!0),a.mask.maxValue=n.getFloat32(12,!0),t+=16,0<a.mask.numBytes){var s=new Uint8Array(Math.ceil(a.width*a.height/8)),l=(n=new DataView(e,t,a.mask.numBytes)).getInt16(0,!0),o=2,f=0;do{if(0<l)for(;l--;)s[f++]=n.getUint8(o++);else for(var u=n.getUint8(o++),l=-l;l--;)s[f++]=u}while(l=n.getInt16(o,!0),(o+=2)<a.mask.numBytes);if(-32768!==l||f<s.length)throw"Unexpected end of mask RLE encoding";a.mask.bitset=s,t+=a.mask.numBytes}else 0==(a.mask.numBytes|a.mask.numBlocksY|a.mask.maxValue)&&(a.mask.bitset=new Uint8Array(Math.ceil(a.width*a.height/8)));n=new DataView(e,t,16),a.pixels={},a.pixels.numBlocksY=n.getUint32(0,!0),a.pixels.numBlocksX=n.getUint32(4,!0),a.pixels.numBytes=n.getUint32(8,!0),a.pixels.maxValue=n.getFloat32(12,!0),t+=16;for(var r=a.pixels.numBlocksX,i=a.pixels.numBlocksY,c=r+(0<a.width%r?1:0),d=i+(0<a.height%i?1:0),h=(a.pixels.blocks=new Array(c*d),0),m=0;m<d;m++)for(var g=0;g<c;g++){var p,x=0,w=e.byteLength-t,w=(n=new DataView(e,t,Math.min(10,w)),{}),k=(a.pixels.blocks[h++]=w,n.getUint8(0));if(x++,w.encoding=63&k,3<w.encoding)throw"Invalid block encoding ("+w.encoding+")";if(2===w.encoding)t++;else{if(0!==k&&2!==k){if(k>>=6,2==(w.offsetType=k))w.offset=n.getInt8(1),x++;else if(1==k)w.offset=n.getInt16(1,!0),x+=2;else{if(0!=k)throw"Invalid block offset type";w.offset=n.getFloat32(1,!0),x+=4}if(1===w.encoding)if(k=n.getUint8(x),x++,w.bitsPerPixel=63&k,k>>=6,2==(w.numValidPixelsType=k))w.numValidPixels=n.getUint8(x),x++;else if(1==k)w.numValidPixels=n.getUint16(x,!0),x+=2;else{if(0!=k)throw"Invalid valid pixel count type";w.numValidPixels=n.getUint32(x,!0),x+=4}}if(t+=x,3!==w.encoding)if(0===w.encoding){var k=(a.pixels.numBytes-1)/4;if(k!==Math.floor(k))throw"uncompressed block has invalid length";p=new ArrayBuffer(4*k),new Uint8Array(p).set(new Uint8Array(e,t,4*k));var x=new Float32Array(p);w.rawData=x,t+=4*k}else 1===w.encoding&&(x=Math.ceil(w.numValidPixels*w.bitsPerPixel/8),k=Math.ceil(x/4),p=new ArrayBuffer(4*k),new Uint8Array(p).set(new Uint8Array(e,t,x)),w.stuffedData=new Uint32Array(p),t+=x)}}return a.eofOffset=t,a},B=function(e,t,i,a,r,n,s){var l,o,f,u,c=(1<<t)-1,d=0,h=0,m=Math.ceil((s-a)/r),g=4*e.length-Math.ceil(t*i/8);for(e[e.length-1]<<=8*g,l=0;l<i;l++)0===h&&(u=e[d++],h=32),t<=h?(f=u>>>h-t&c,h-=t):(f=(u&c)<<(o=t-h)&c,f+=(u=e[d++])>>>(h=32-o)),n[l]=f<m?a+f*r:s;return n};var r,n,s,l,o,B,y,I,b,U,T,M,N,A,e,x=r={defaultNoDataValue:-34027999387901484e22,decode:function(e,t){var i=(t=t||{}).encodedMaskData||null===t.encodedMaskData,e=o(e,t.inputOffset||0,i),i=null!==t.noDataValue?t.noDataValue:r.defaultNoDataValue,a=n(e,t.pixelType||Float32Array,t.encodedMaskData,i,t.returnMask),i={width:e.width,height:e.height,pixelData:a.resultPixels,minValue:a.minValue,maxValue:e.pixels.maxValue,noDataValue:i};return a.resultMask&&(i.maskData=a.resultMask),t.returnEncodedMask&&e.mask&&(i.encodedMaskData=e.mask.bitset||null),t.returnFileInfo&&(i.fileInfo=s(e),t.computeUsedBitDepths)&&(i.fileInfo.bitDepths=l(e)),i}},w=(y=function(e,t,i,a,r,n,s,l){var o,f,u,c,d,h=(1<<i)-1,m=0,g=0,p=4*e.length-Math.ceil(i*a/8);if(e[e.length-1]<<=8*p,r)for(o=0;o<a;o++)0===g&&(u=e[m++],g=32),i<=g?(f=u>>>g-i&h,g-=i):(f=(u&h)<<(c=i-g)&h,f+=(u=e[m++])>>>(g=32-c)),t[o]=r[f];else for(d=Math.ceil((l-n)/s),o=0;o<a;o++)0===g&&(u=e[m++],g=32),i<=g?(f=u>>>g-i&h,g-=i):(f=(u&h)<<(c=i-g)&h,f+=(u=e[m++])>>>(g=32-c)),t[o]=f<d?n+f*s:l},I=function(e,t,i,a,r,n){for(var s,l,o=(1<<t)-1,f=0,u=0,c=0,d=0,h=[],m=4*e.length-Math.ceil(t*i/8),g=(e[e.length-1]<<=8*m,Math.ceil((n-a)/r)),u=0;u<i;u++)0===c&&(l=e[f++],c=32),t<=c?(d=l>>>c-t&o,c-=t):(d=(l&o)<<(s=t-c)&o,d+=(l=e[f++])>>>(c=32-s)),h[u]=d<g?a+d*r:n;return h.unshift(a),h},b=function(e,t,i,a,r,n,s,l){var o,f,u,c=(1<<i)-1,d=0,h=0,m=0;if(r)for(p=0;p<a;p++)0===h&&(f=e[d++],h=32,m=0),i<=h?(o=f>>>m&c,h-=i,m+=i):(o=f>>>m&c,h=32-(u=i-h),o|=((f=e[d++])&(1<<u)-1)<<i-u,m=u),t[p]=r[o];else for(var g=Math.ceil((l-n)/s),p=0;p<a;p++)0===h&&(f=e[d++],h=32,m=0),i<=h?(o=f>>>m&c,h-=i,m+=i):(o=f>>>m&c,h=32-(u=i-h),o|=((f=e[d++])&(1<<u)-1)<<i-u,m=u),t[p]=o<g?n+o*s:l;return t},U=function(e,t,i,a,r,n){for(var s,l,o=(1<<t)-1,f=0,u=0,c=0,d=0,h=0,m=[],g=Math.ceil((n-a)/r),u=0;u<i;u++)0===c&&(l=e[f++],c=32,h=0),t<=c?(d=l>>>h&o,c-=t,h+=t):(d=l>>>h&o,c=32-(s=t-c),d|=((l=e[f++])&(1<<s)-1)<<t-s,h=s),m[u]=d<g?a+d*r:n;return m.unshift(a),m},T=function(e,t,i,a){var r,n,s,l,o=(1<<i)-1,f=0,u=0,c=4*e.length-Math.ceil(i*a/8);for(e[e.length-1]<<=8*c,r=0;r<a;r++)0===u&&(s=e[f++],u=32),i<=u?(n=s>>>u-i&o,u-=i):(n=(s&o)<<(l=i-u)&o,n+=(s=e[f++])>>>(u=32-l)),t[r]=n;return t},M=function(e,t,i,a){for(var r,n,s,l=(1<<i)-1,o=0,f=0,u=0,c=0;c<a;c++)0===f&&(n=e[o++],f=32,u=0),i<=f?(r=n>>>u&l,f-=i,u+=i):(r=n>>>u&l,f=32-(s=i-f),r|=((n=e[o++])&(1<<s)-1)<<i-s,u=s),t[c]=r;return t},N={HUFFMAN_LUT_BITS_MAX:12,computeChecksumFletcher32:function(e){for(var t=65535,i=65535,a=e.length,r=Math.floor(a/2),n=0;r;){var s=359<=r?359:r;for(r-=s;i+=t=(t+=e[n++]<<8)+e[n++],--s;);t=(65535&t)+(t>>>16),i=(65535&i)+(i>>>16)}return 1&a&&(i+=t+=e[n]<<8),((i=(65535&i)+(i>>>16))<<16|(t=(65535&t)+(t>>>16)))>>>0},readHeaderInfo:function(e,t){var i=t.ptr,a=new Uint8Array(e,i,6),r={};if(r.fileIdentifierString=String.fromCharCode.apply(null,a),0!==r.fileIdentifierString.lastIndexOf("Lerc2",0))throw"Unexpected file identifier string (expect Lerc2 ): "+r.fileIdentifierString;i+=6;var a=new DataView(e,i,8),n=a.getInt32(0,!0);if(i+=4,3<=(r.fileVersion=n)&&(r.checksum=a.getUint32(4,!0),i+=4),a=new DataView(e,i,12),r.height=a.getUint32(0,!0),r.width=a.getUint32(4,!0),i+=8,4<=n?(r.numDims=a.getUint32(8,!0),i+=4):r.numDims=1,a=new DataView(e,i,40),r.numValidPixel=a.getUint32(0,!0),r.microBlockSize=a.getInt32(4,!0),r.blobSize=a.getInt32(8,!0),r.imageType=a.getInt32(12,!0),r.maxZError=a.getFloat64(16,!0),r.zMin=a.getFloat64(24,!0),r.zMax=a.getFloat64(32,!0),i+=40,t.headerInfo=r,t.ptr=i,3<=n&&this.computeChecksumFletcher32(new Uint8Array(e,i-(4<=n?52:48),r.blobSize-14))!==r.checksum)throw"Checksum failed.";return!0},checkMinMaxRanges:function(e,t){var i=t.headerInfo,a=this.getDataTypeArray(i.imageType),r=i.numDims*this.getDataTypeSize(i.imageType),n=this.readSubArray(e,t.ptr,a,r),s=this.readSubArray(e,t.ptr+r,a,r);t.ptr+=2*r;for(var l=!0,o=0;o<i.numDims;o++)if(n[o]!==s[o]){l=!1;break}return i.minValues=n,i.maxValues=s,l},readSubArray:function(e,t,i,a){var r,e=i===Uint8Array?new Uint8Array(e,t,a):(r=new ArrayBuffer(a),new Uint8Array(r).set(new Uint8Array(e,t,a)),new i(r));return e},readMask:function(e,t){var i=t.ptr,a=t.headerInfo,r=a.width*a.height,a=a.numValidPixel,n=new DataView(e,i,4),s={};if(s.numBytes=n.getUint32(0,!0),i+=4,(0===a||r===a)&&0!==s.numBytes)throw"invalid mask";if(0===a)o=new Uint8Array(Math.ceil(r/8)),s.bitset=o,d=new Uint8Array(r),t.pixels.resultMask=d,i+=s.numBytes;else if(0<s.numBytes){var l,o=new Uint8Array(Math.ceil(r/8)),f=(n=new DataView(e,i,s.numBytes)).getInt16(0,!0),u=2,c=0;do{if(0<f)for(;f--;)o[c++]=n.getUint8(u++);else for(l=n.getUint8(u++),f=-f;f--;)o[c++]=l}while(f=n.getInt16(u,!0),(u+=2)<s.numBytes);if(-32768!==f||c<o.length)throw"Unexpected end of mask RLE encoding";for(var d=new Uint8Array(r),h=0,m=0,m=0;m<r;m++)7&m?(h=o[m>>3],h<<=7&m):h=o[m>>3],128&h&&(d[m]=1);t.pixels.resultMask=d,s.bitset=o,i+=s.numBytes}return t.ptr=i,t.mask=s,!0},readDataOneSweep:function(e,t,i){var a=t.ptr,r=t.headerInfo,n=r.numDims,s=r.width*r.height,l=r.imageType,r=r.numValidPixel*N.getDataTypeSize(l)*n,o=t.pixels.resultMask,f=i===Uint8Array?new Uint8Array(e,a,r):(l=new ArrayBuffer(r),new Uint8Array(l).set(new Uint8Array(e,a,r)),new i(l));if(f.length===s*n)t.pixels.resultPixels=f;else{t.pixels.resultPixels=new i(s*n);var u,c=0,d=0,h=0;if(1<n)for(h=0;h<n;h++)for(u=h*s,d=0;d<s;d++)o[d]&&(t.pixels.resultPixels[u+d]=f[c++]);else for(d=0;d<s;d++)o[d]&&(t.pixels.resultPixels[d]=f[c++])}return t.ptr=a+=r,!0},readHuffmanTree:function(e,t){var i=this.HUFFMAN_LUT_BITS_MAX,a=new DataView(e,t.ptr,16);if(t.ptr+=16,a.getInt32(0,!0)<2)throw"unsupported Huffman version";var r=a.getInt32(4,!0),n=a.getInt32(8,!0),s=a.getInt32(12,!0);if(s<=n)return!1;for(var l,o,f,u=new Uint32Array(s-n),c=(N.decodeBits(e,t,u),[]),d=n;d<s;d++)c[l=d-(d<r?0:r)]={first:u[d-n],second:null};var a=e.byteLength-t.ptr,h=Math.ceil(a/4),h=new ArrayBuffer(4*h),m=(new Uint8Array(h).set(new Uint8Array(e,t.ptr,a)),new Uint32Array(h)),g=0,p=0,x=m[0];for(d=n;d<s;d++)0<(f=c[l=d-(d<r?0:r)].first)&&(c[l].second=x<<g>>>32-f,f<=32-g?32===(g+=f)&&(g=0,x=m[++p]):(x=m[++p],c[l].second|=x>>>32-(g+=f-32)));var w=0,k=0,y=new A;for(d=0;d<c.length;d++)void 0!==c[d]&&(w=Math.max(w,c[d].first));k=i<=w?i:w,30<=w&&console.log("WARning, large NUM LUT BITS IS "+w);var I,b,U,T,M,V=[];for(d=n;d<s;d++)if(0<(f=c[l=d-(d<r?0:r)].first))if(I=[f,l],f<=k)for(b=c[l].second<<k-f,U=1<<k-f,o=0;o<U;o++)V[b|o]=I;else for(b=c[l].second,M=y,T=f-1;0<=T;T--)M=b>>>T&1?(M.right||(M.right=new A),M.right):(M.left||(M.left=new A),M.left),0!==T||M.val||(M.val=I[1]);return{decodeLut:V,numBitsLUTQick:k,numBitsLUT:w,tree:y,stuffedData:m,srcPtr:p,bitPos:g}},readHuffman:function(e,t,i){for(var a,r,n,s,l,o,f,u,c,d=t.headerInfo,h=d.numDims,m=t.headerInfo.height,g=t.headerInfo.width,p=g*m,e=this.readHuffmanTree(e,t),x=e.decodeLut,w=e.tree,k=e.stuffedData,y=e.srcPtr,I=e.bitPos,b=e.numBitsLUTQick,U=e.numBitsLUT,T=0===t.headerInfo.imageType?128:0,M=t.pixels.resultMask,V=0,A=(0<I&&(y++,I=0),k[y]),v=1===t.encodeMode,B=new i(p*h),D=B,S=0;S<d.numDims;S++){if(1<h&&(D=new i(B.buffer,p*S,p),V=0),t.headerInfo.numValidPixel===g*m)for(o=u=0;o<m;o++)for(f=0;f<g;f++,u++){if(r=0,l=s=A<<I>>>32-b,x[l=32-I<b?s|=k[y+1]>>>64-I-b:l])r=x[l][1],I+=x[l][0];else for(l=s=A<<I>>>32-U,32-I<U&&(l=s|=k[y+1]>>>64-I-U),a=w,c=0;c<U;c++)if(!(a=s>>>U-c-1&1?a.right:a.left).left&&!a.right){r=a.val,I=I+c+1;break}32<=I&&(I-=32,A=k[++y]),n=r-T,v?(n=n+(!(0<f)&&0<o?D[u-g]:V)&255,V=D[u]=n):D[u]=n}else for(o=u=0;o<m;o++)for(f=0;f<g;f++,u++)if(M[u]){if(r=0,l=s=A<<I>>>32-b,x[l=32-I<b?s|=k[y+1]>>>64-I-b:l])r=x[l][1],I+=x[l][0];else for(l=s=A<<I>>>32-U,32-I<U&&(l=s|=k[y+1]>>>64-I-U),a=w,c=0;c<U;c++)if(!(a=s>>>U-c-1&1?a.right:a.left).left&&!a.right){r=a.val,I=I+c+1;break}32<=I&&(I-=32,A=k[++y]),n=r-T,v?(!(0<f&&M[u-1])&&0<o&&M[u-g]?n+=D[u-g]:n+=V,n&=255,V=D[u]=n):D[u]=n}t.ptr=t.ptr+4*(y+1)+(0<I?4:0)}t.pixels.resultPixels=B},decodeBits:function(e,t,i,a,r){var n=t.headerInfo,s=n.fileVersion,l=0,o=new DataView(e,t.ptr,5),f=o.getUint8(0),u=(l++,f>>6),u=0==u?4:3-u,c=0<(32&f),f=31&f,d=0;if(1==u)d=o.getUint8(l),l++;else if(2==u)d=o.getUint16(l,!0),l+=2;else{if(4!=u)throw"Invalid valid pixel count type";d=o.getUint32(l,!0),l+=4}var h,m,g,p,x,w,k,u=2*n.maxZError,r=1<n.numDims?n.maxValues[r]:n.zMax;if(c){for(t.counter.lut++,w=o.getUint8(l),l++,p=Math.ceil((w-1)*f/8),x=Math.ceil(p/4),m=new ArrayBuffer(4*x),g=new Uint8Array(m),t.ptr+=l,g.set(new Uint8Array(e,t.ptr,p)),n=new Uint32Array(m),t.ptr+=p,k=0;w-1>>>k;)k++;p=Math.ceil(d*k/8),x=Math.ceil(p/4),m=new ArrayBuffer(4*x),(g=new Uint8Array(m)).set(new Uint8Array(e,t.ptr,p)),h=new Uint32Array(m),t.ptr+=p,c=(3<=s?U:I)(n,f,w-1,a,u,r),(3<=s?b:y)(h,i,k,d,c)}else t.counter.bitstuffer++,k=f,t.ptr+=l,0<k&&(p=Math.ceil(d*k/8),x=Math.ceil(p/4),m=new ArrayBuffer(4*x),(g=new Uint8Array(m)).set(new Uint8Array(e,t.ptr,p)),h=new Uint32Array(m),t.ptr+=p,3<=s?null==a?M(h,i,k,d):b(h,i,k,d,!1,a,u,r):null==a?T(h,i,k,d):y(h,i,k,d,!1,a,u,r))},readTiles:function(e,t,i){for(var a,r,n,s,l,o,f,u,c,d,h,m,g=t.headerInfo,p=g.width,x=g.height,w=g.microBlockSize,k=g.imageType,y=N.getDataTypeSize(k),I=Math.ceil(p/w),b=Math.ceil(x/w),U=(t.pixels.numBlocksY=b,t.pixels.numBlocksX=I,t.pixels.ptr=0),T=0,M=0,V=0,A=0,v=0,B=0,D=new i(w*w),S=x%w||w,P=p%w||w,E=g.numDims,C=t.pixels.resultMask,F=t.pixels.resultPixels,M=0;M<b;M++)for(a=M!==b-1?w:S,V=0;V<I;V++)for(A=M*p*w+V*w,s=p-(r=V!==I-1?w:P),m=0;m<E;m++){if(1<E&&(F=new i(t.pixels.resultPixels.buffer,p*x*m*y,p*x)),l=e.byteLength-t.ptr,o={},B=0,B++,n=(c=(l=new DataView(e,t.ptr,Math.min(10,l))).getUint8(0))>>6&255,(c>>2&15)!=(V*w>>3&15))throw"integrity issue";if(3<(c=3&c))throw t.ptr+=B,"Invalid block encoding ("+c+")";if(2==c)t.counter.constant++,t.ptr+=B;else if(0==c){if(t.counter.uncompressed++,t.ptr+=B,d=(d=a*r*y)<(f=e.byteLength-t.ptr)?d:f,f=new ArrayBuffer(d%y==0?d:d+y-d%y),new Uint8Array(f).set(new Uint8Array(e,t.ptr,d)),u=new i(f),v=0,C)for(U=0;U<a;U++){for(T=0;T<r;T++)C[A]&&(F[A]=u[v++]),A++;A+=s}else for(U=0;U<a;U++){for(T=0;T<r;T++)F[A++]=u[v++];A+=s}t.ptr+=v*y}else if(d=N.getDataTypeUsed(k,n),h=N.getOnePixel(o,B,d,l),B+=N.getDataTypeSize(d),3==c)if(t.ptr+=B,t.counter.constantoffset++,C)for(U=0;U<a;U++){for(T=0;T<r;T++)C[A]&&(F[A]=h),A++;A+=s}else for(U=0;U<a;U++){for(T=0;T<r;T++)F[A++]=h;A+=s}else if(t.ptr+=B,N.decodeBits(e,t,D,h,m),B=0,C)for(U=0;U<a;U++){for(T=0;T<r;T++)C[A]&&(F[A]=D[B++]),A++;A+=s}else for(U=0;U<a;U++){for(T=0;T<r;T++)F[A++]=D[B++];A+=s}}},formatFileInfo:function(e){return{fileIdentifierString:e.headerInfo.fileIdentifierString,fileVersion:e.headerInfo.fileVersion,imageType:e.headerInfo.imageType,height:e.headerInfo.height,width:e.headerInfo.width,numValidPixel:e.headerInfo.numValidPixel,microBlockSize:e.headerInfo.microBlockSize,blobSize:e.headerInfo.blobSize,maxZError:e.headerInfo.maxZError,pixelType:N.getPixelType(e.headerInfo.imageType),eofOffset:e.eofOffset,mask:e.mask?{numBytes:e.mask.numBytes}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,maxValue:e.headerInfo.zMax,minValue:e.headerInfo.zMin,noDataValue:e.noDataValue}}},constructConstantSurface:function(e){var t,i=e.headerInfo.zMax,a=e.headerInfo.numDims,r=e.headerInfo.height*e.headerInfo.width,n=r*a,s=0,l=0,o=e.pixels.resultMask;if(o)if(1<a)for(s=0;s<a;s++)for(t=s*r,l=0;l<r;l++)o[l]&&(e.pixels.resultPixels[t+l]=i);else for(l=0;l<r;l++)o[l]&&(e.pixels.resultPixels[l]=i);else if(e.pixels.resultPixels.fill)e.pixels.resultPixels.fill(i);else for(l=0;l<n;l++)e.pixels.resultPixels[l]=i},getDataTypeArray:function(e){var t;switch(e){case 0:t=Int8Array;break;case 1:t=Uint8Array;break;case 2:t=Int16Array;break;case 3:t=Uint16Array;break;case 4:t=Int32Array;break;case 5:t=Uint32Array;break;case 6:t=Float32Array;break;case 7:t=Float64Array;break;default:t=Float32Array}return t},getPixelType:function(e){var t;switch(e){case 0:t="S8";break;case 1:t="U8";break;case 2:t="S16";break;case 3:t="U16";break;case 4:t="S32";break;case 5:t="U32";break;case 6:t="F32";break;case 7:t="F64";break;default:t="F32"}return t},isValidPixelValue:function(e,t){if(null==t)return!1;var i;switch(e){case 0:i=-128<=t&&t<=127;break;case 1:i=0<=t&&t<=255;break;case 2:i=-32768<=t&&t<=32767;break;case 3:i=0<=t&&t<=65536;break;case 4:i=-2147483648<=t&&t<=2147483647;break;case 5:i=0<=t&&t<=4294967296;break;case 6:i=-34027999387901484e22<=t&&t<=34027999387901484e22;break;case 7:i=5e-324<=t&&t<=17976931348623157e292;break;default:i=!1}return i},getDataTypeSize:function(e){var t=0;switch(e){case 0:case 1:t=1;break;case 2:case 3:t=2;break;case 4:case 5:case 6:t=4;break;case 7:t=8;break;default:t=e}return t},getDataTypeUsed:function(e,t){var i=e;switch(e){case 2:case 4:i=e-t;break;case 3:case 5:i=e-2*t;break;case 6:i=0===t?e:1===t?2:1;break;case 7:i=0===t?e:e-2*t+1;break;default:i=e}return i},getOnePixel:function(e,t,i,a){var r=0;switch(i){case 0:r=a.getInt8(t);break;case 1:r=a.getUint8(t);break;case 2:r=a.getInt16(t,!0);break;case 3:r=a.getUint16(t,!0);break;case 4:r=a.getInt32(t,!0);break;case 5:r=a.getUInt32(t,!0);break;case 6:r=a.getFloat32(t,!0);break;case 7:r=a.getFloat64(t,!0);break;default:throw"the decoder does not understand this pixel type"}return r}},A=function(e,t,i){this.val=e,this.left=t,this.right=i},{decode:function(e,t){var i,a=(t=t||{}).noDataValue,r=0,n={},s=(n.ptr=t.inputOffset||0,n.pixels={},N.readHeaderInfo(e,n),n.headerInfo),l=s.fileVersion,o=N.getDataTypeArray(s.imageType),f=(N.readMask(e,n),s.numValidPixel===s.width*s.height||n.pixels.resultMask||(n.pixels.resultMask=t.maskData),s.width*s.height);if(n.pixels.resultPixels=new o(f*s.numDims),n.counter={onesweep:0,uncompressed:0,lut:0,bitstuffer:0,constant:0,constantoffset:0},0!==s.numValidPixel)if(s.zMax===s.zMin)N.constructConstantSurface(n);else if(4<=l&&N.checkMinMaxRanges(e,n))N.constructConstantSurface(n);else{var u=new DataView(e,n.ptr,2),c=u.getUint8(0);if(n.ptr++,c)N.readDataOneSweep(e,n,o);else if(1<l&&s.imageType<=1&&Math.abs(s.maxZError-.5)<1e-5){c=u.getUint8(1);if(n.ptr++,2<(n.encodeMode=c)||l<4&&1<c)throw"Invalid Huffman flag "+c;c?N.readHuffman(e,n,o):N.readTiles(e,n,o)}else N.readTiles(e,n,o)}n.eofOffset=n.ptr,t.inputOffset?(i=n.headerInfo.blobSize+t.inputOffset-n.ptr,1<=Math.abs(i)&&(n.eofOffset=t.inputOffset+n.headerInfo.blobSize)):(i=n.headerInfo.blobSize-n.ptr,1<=Math.abs(i)&&(n.eofOffset=n.headerInfo.blobSize));var d={width:s.width,height:s.height,pixelData:n.pixels.resultPixels,minValue:s.zMin,maxValue:s.zMax,validPixelCount:s.numValidPixel,dimCount:s.numDims,dimStats:{minValues:s.minValues,maxValues:s.maxValues},maskData:n.pixels.resultMask};if(n.pixels.resultMask&&N.isValidPixelValue(s.imageType,a)){for(var h=n.pixels.resultMask,r=0;r<f;r++)h[r]||(d.pixelData[r]=a);d.noDataValue=a}return n.noDataValue=a,t.returnFileInfo&&(d.fileInfo=N.formatFileInfo(n)),d},getBandCount:function(e){for(var t=0,i=0,a={ptr:0,pixels:{}};i<e.byteLength-58;)N.readHeaderInfo(e,a),i+=a.headerInfo.blobSize,t++,a.ptr=i;return t}}),k=(t=new ArrayBuffer(4),e=new Uint8Array(t),(new Uint32Array(t)[0]=1)===e[0]),t={decode:function(e,t){if(!k)throw"Big endian system is not supported.";var i,a,r=(t=t||{}).inputOffset||0,n=new Uint8Array(e,r,10),n=String.fromCharCode.apply(null,n);if("CntZImage"===n.trim())i=x,a=1;else{if("Lerc2"!==n.substring(0,5))throw"Unexpected file identifier string: "+n;i=w,a=2}for(var s,l,o,f,u,c,d=0,h=e.byteLength-10,m=[],g={width:0,height:0,pixels:[],pixelType:t.pixelType,mask:null,statistics:[]};r<h;){var p=i.decode(e,{inputOffset:r,encodedMaskData:s,maskData:o,returnMask:0===d,returnEncodedMask:0===d,returnFileInfo:!0,pixelType:t.pixelType||null,noDataValue:t.noDataValue||null}),r=p.fileInfo.eofOffset;0===d&&(s=p.encodedMaskData,o=p.maskData,g.width=p.width,g.height=p.height,g.dimCount=p.dimCount||1,g.pixelType=p.pixelType||p.fileInfo.pixelType,g.mask=p.maskData),1<a&&p.fileInfo.mask&&0<p.fileInfo.mask.numBytes&&m.push(p.maskData),d++,g.pixels.push(p.pixelData),g.statistics.push({minValue:p.minValue,maxValue:p.maxValue,noDataValue:p.noDataValue,dimStats:p.dimStats})}if(1<a&&1<m.length){for(c=g.width*g.height,g.bandMasks=m,(o=new Uint8Array(c)).set(m[0]),f=1;f<m.length;f++)for(l=m[f],u=0;u<c;u++)o[u]=o[u]&l[u];g.maskData=o}return g}};i.exports?i.exports=t:this.Lerc=t}()}));return e(function(e,t){if(e.encoding===o.LERC){try{i=f.decode(e.heightmap)}catch(e){throw new r.RuntimeError(e)}if(i.statistics[0].minValue===Number.MAX_VALUE)throw new r.RuntimeError("Invalid tile data");e.heightmap=i.pixels[0],e.width=i.width,e.height=i.height}e.ellipsoid=Fe.Ellipsoid.clone(e.ellipsoid),e.rectangle=Fe.Rectangle.clone(e.rectangle);var i=Ye.computeVertices(e),a=i.vertices;return t.push(a.buffer),{vertices:a.buffer,numberOfAttributes:i.encoding.stride,minimumHeight:i.minimumHeight,maximumHeight:i.maximumHeight,gridWidth:e.width,gridHeight:e.height,boundingSphere3D:i.boundingSphere3D,orientedBoundingBox:i.orientedBoundingBox,occludeePointInScaledSpace:i.occludeePointInScaledSpace,encoding:i.encoding,westIndicesSouthToNorth:i.westIndicesSouthToNorth,southIndicesEastToWest:i.southIndicesEastToWest,eastIndicesNorthToSouth:i.eastIndicesNorthToSouth,northIndicesWestToEast:i.northIndicesWestToEast}})});