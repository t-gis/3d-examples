define(["exports","./AttributeCompression-1f045b73","./Matrix2-ccd5b911","./RuntimeError-346a3079","./when-4bbc8319","./ComponentDatatype-93750d1a","./Transforms-2f9313e7","./EncodedCartesian3-08b8d980","./GeometryAttribute-4cca8ebf","./IndexDatatype-b7d979a6","./IntersectionTests-66bcab6d","./Plane-18bb00f8"],function(t,A,R,r,V,D,M,C,G,S,q,U){"use strict";var Y=new R.Cartesian3,Z=new R.Cartesian3,H=new R.Cartesian3;var h={calculateACMR:function(e){var t=(e=V.defaultValue(e,V.defaultValue.EMPTY_OBJECT)).indices,r=e.maximumIndex,a=V.defaultValue(e.cacheSize,24),i=t.length;if(!V.defined(r))for(var r=0,n=0,s=t[n];n<i;)r<s&&(r=s),s=t[++n];for(var o=[],u=0;u<r+1;u++)o[u]=0;for(var p=a+1,d=0;d<i;++d)p-o[t[d]]>a&&(o[t[d]]=p,++p);return(p-a+1)/(i/3)}},e=(h.tipsify=function(e){var t=(e=V.defaultValue(e,V.defaultValue.EMPTY_OBJECT)).indices,r=e.maximumIndex,a=V.defaultValue(e.cacheSize,24);function i(e,t,r,a,i,n,s){for(var o,u=-1,p=-1,d=0;d<r.length;){var l=r[d];a[l].numLiveTriangles&&(o=0,p<(o=i-a[l].timeStamp+2*a[l].numLiveTriangles<=t?i-a[l].timeStamp:o)||-1===p)&&(p=o,u=l),++d}if(-1!==u)return u;for(var y=a,f=n,m=s;1<=f.length;){var c=f[f.length-1];if(f.splice(f.length-1,1),0<y[c].numLiveTriangles)return c}for(;v<m;){if(0<y[v].numLiveTriangles)return++v-1;++v}return-1}var e=t.length,n=0,s=t[P=0],o=e;if(V.defined(r))n=r+1;else{for(;P<o;)n<s&&(n=s),s=t[++P];if(-1===n)return 0;++n}for(var u=[],p=0;p<n;p++)u[p]={numLiveTriangles:0,timeStamp:0,vertexTriangles:[]};for(var d=P=0;P<o;)u[t[P]].vertexTriangles.push(d),++u[t[P]].numLiveTriangles,u[t[P+1]].vertexTriangles.push(d),++u[t[P+1]].numLiveTriangles,u[t[P+2]].vertexTriangles.push(d),++u[t[P+2]].numLiveTriangles,++d,P+=3;var l,y=0,f=a+1,v=1,m=[],c=[],C=0,h=[],b=e/3,g=[];for(p=0;p<b;p++)g[p]=!1;for(;-1!==y;){for(var A,m=[],T=(A=u[y]).vertexTriangles.length,x=0;x<T;++x)if(!g[d=A.vertexTriangles[x]]){g[d]=!0;for(var P=d+d+d,w=0;w<3;++w)l=t[P],m.push(l),c.push(l),h[C]=l,++C,--(l=u[l]).numLiveTriangles,f-l.timeStamp>a&&(l.timeStamp=f,++f),++P}y=i(0,a,m,u,f,c,n)}return h},{});function s(e,t,r,a,i){e[t++]=r,e[t++]=a,e[t++]=a,e[t++]=i,e[t++]=i,e[t]=r}function g(e){var t,r,a={};for(t in e)e.hasOwnProperty(t)&&V.defined(e[t])&&V.defined(e[t].values)&&(r=e[t],a[t]=new G.GeometryAttribute({componentDatatype:r.componentDatatype,componentsPerAttribute:r.componentsPerAttribute,normalize:r.normalize,values:[]}));return a}e.toWireframe=function(e){var t=e.indices;if(V.defined(t)){switch(e.primitiveType){case G.PrimitiveType.TRIANGLES:e.indices=function(e){for(var t=e.length,r=S.IndexDatatype.createTypedArray(t,t/3*6),a=0,i=0;i<t;i+=3,a+=6)s(r,a,e[i],e[i+1],e[i+2]);return r}(t);break;case G.PrimitiveType.TRIANGLE_STRIP:e.indices=function(e){var t=e.length;if(3<=t){for(var r=S.IndexDatatype.createTypedArray(t,6*(t-2)),a=(s(r,0,e[0],e[1],e[2]),6),i=3;i<t;++i,a+=6)s(r,a,e[i-1],e[i],e[i-2]);return r}return new Uint16Array}(t);break;case G.PrimitiveType.TRIANGLE_FAN:e.indices=function(e){if(0<e.length){for(var t=e.length-1,r=S.IndexDatatype.createTypedArray(t,6*(t-1)),a=e[0],i=0,n=1;n<t;++n,i+=6)s(r,i,a,e[n],e[n+1]);return r}return new Uint16Array}(t)}e.primitiveType=G.PrimitiveType.LINES}return e},e.createLineSegmentsForVectors=function(e,t,r){t=V.defaultValue(t,"normal"),r=V.defaultValue(r,1e4);for(var a,i=e.attributes.position.values,n=e.attributes[t].values,s=i.length,o=new Float64Array(2*s),u=0,p=0;p<s;p+=3)o[u++]=i[p],o[u++]=i[p+1],o[u++]=i[p+2],o[u++]=i[p]+n[p]*r,o[u++]=i[p+1]+n[p+1]*r,o[u++]=i[p+2]+n[p+2]*r;t=e.boundingSphere;return V.defined(t)&&(a=new M.BoundingSphere(t.center,t.radius+r)),new G.Geometry({attributes:{position:new G.GeometryAttribute({componentDatatype:D.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:o})},primitiveType:G.PrimitiveType.LINES,boundingSphere:a})},e.createAttributeLocations=function(e){for(var t,r=["position","positionHigh","positionLow","position3DHigh","position3DLow","position2DHigh","position2DLow","pickColor","normal","st","tangent","bitangent","extrudeDirection","compressedAttributes"],a=e.attributes,i={},n=0,s=r.length,o=0;o<s;++o){var u=r[o];V.defined(a[u])&&(i[u]=n++)}for(t in a)a.hasOwnProperty(t)&&!V.defined(i[t])&&(i[t]=n++);return i},e.reorderForPreVertexCache=function(e){var t=G.Geometry.computeNumberOfVertices(e),r=e.indices;if(V.defined(r)){for(var a=new Int32Array(t),i=0;i<t;i++)a[i]=-1;for(var n,s=r,o=s.length,u=S.IndexDatatype.createTypedArray(t,o),p=0,d=0,l=0;p<o;)-1!==(n=a[s[p]])?u[d]=n:(a[s[p]]=l,u[d]=l,++l),++p,++d;e.indices=u;var y,f=e.attributes;for(y in f)if(f.hasOwnProperty(y)&&V.defined(f[y])&&V.defined(f[y].values)){for(var m=f[y],c=m.values,v=0,C=m.componentsPerAttribute,h=D.ComponentDatatype.createTypedArray(m.componentDatatype,l*C);v<t;){var b=a[v];if(-1!==b)for(var g=0;g<C;g++)h[C*b+g]=c[C*v+g];++v}m.values=h}}return e},e.reorderForPostVertexCache=function(e,t){var r=e.indices;if(e.primitiveType===G.PrimitiveType.TRIANGLES&&V.defined(r)){for(var a=r.length,i=0,n=0;n<a;n++)r[n]>i&&(i=r[n]);e.indices=h.tipsify({indices:r,maximumIndex:i,cacheSize:t})}return e},e.fitToUnsignedShortIndices=function(e){var t=[],r=G.Geometry.computeNumberOfVertices(e);if(V.defined(e.indices)&&r>=D.CesiumMath.SIXTY_FOUR_KILOBYTES){var a,i=[],n=[],s=0,o=g(e.attributes),u=e.indices,p=u.length;e.primitiveType===G.PrimitiveType.TRIANGLES?a=3:e.primitiveType===G.PrimitiveType.LINES?a=2:e.primitiveType===G.PrimitiveType.POINTS&&(a=1);for(var d=0;d<p;d+=a){for(var l=0;l<a;++l){var y=u[d+l],f=i[y];if(!V.defined(f)){f=s++,i[y]=f,b=h=m=C=v=c=void 0;var m,c=o,v=e.attributes,C=y;for(m in v)if(v.hasOwnProperty(m)&&V.defined(v[m])&&V.defined(v[m].values))for(var h=v[m],b=0;b<h.componentsPerAttribute;++b)c[m].values.push(h.values[C*h.componentsPerAttribute+b])}n.push(f)}s+a>=D.CesiumMath.SIXTY_FOUR_KILOBYTES&&(t.push(new G.Geometry({attributes:o,indices:n,primitiveType:e.primitiveType,boundingSphere:e.boundingSphere,boundingSphereCV:e.boundingSphereCV})),i=[],n=[],s=0,o=g(e.attributes))}0!==n.length&&t.push(new G.Geometry({attributes:o,indices:n,primitiveType:e.primitiveType,boundingSphere:e.boundingSphere,boundingSphereCV:e.boundingSphereCV}))}else t.push(e);return t};var b=new R.Cartesian3,W=new R.Cartographic,d=(e.projectTo2D=function(e,t,r,a,i){for(var n=e.attributes[t],s=(i=V.defined(i)?i:new M.GeographicProjection).ellipsoid,o=n.values,u=new Float64Array(o.length),p=0,d=0;d<o.length;d+=3){var l=R.Cartesian3.fromArray(o,d,b),l=s.cartesianToCartographic(l,W),l=i.project(l,b);u[p++]=l.x,u[p++]=l.y,u[p++]=l.z}return e.attributes[r]=n,e.attributes[a]=new G.GeometryAttribute({componentDatatype:D.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:u}),delete e.attributes[t],e},{high:0,low:0}),n=(e.encodeAttribute=function(e,t,r,a){for(var i=e.attributes[t],n=i.values,s=n.length,o=new Float32Array(s),u=new Float32Array(s),p=0;p<s;++p)C.EncodedCartesian3.encode(n[p],d),o[p]=d.high,u[p]=d.low;i=i.componentsPerAttribute;return e.attributes[r]=new G.GeometryAttribute({componentDatatype:D.ComponentDatatype.FLOAT,componentsPerAttribute:i,values:o}),e.attributes[a]=new G.GeometryAttribute({componentDatatype:D.ComponentDatatype.FLOAT,componentsPerAttribute:i,values:u}),delete e.attributes[t],e},new R.Cartesian3);function a(e,t){if(V.defined(t))for(var r=t.values,a=r.length,i=0;i<a;i+=3)R.Cartesian3.unpack(r,i,n),R.Matrix4.multiplyByPoint(e,n,n),R.Cartesian3.pack(n,r,i)}function i(e,t){if(V.defined(t))for(var r=t.values,a=r.length,i=0;i<a;i+=3)R.Cartesian3.unpack(r,i,n),R.Matrix3.multiplyByVector(e,n,n),n=R.Cartesian3.normalize(n,n),R.Cartesian3.pack(n,r,i)}var o=new R.Matrix4,u=new R.Matrix3;e.transformToWorldCoordinates=function(e){var t,r=e.modelMatrix;return R.Matrix4.equals(r,R.Matrix4.IDENTITY)||(a(r,(t=e.geometry.attributes).position),a(r,t.prevPosition),a(r,t.nextPosition),(V.defined(t.normal)||V.defined(t.tangent)||V.defined(t.bitangent))&&(R.Matrix4.inverse(r,o),R.Matrix4.transpose(o,o),R.Matrix4.getMatrix3(o,u),i(u,t.normal),i(u,t.tangent),i(u,t.bitangent)),t=e.geometry.boundingSphere,V.defined(t)&&(e.geometry.boundingSphere=M.BoundingSphere.transform(t,r,t)),e.modelMatrix=R.Matrix4.clone(R.Matrix4.IDENTITY)),e};var X=new R.Cartesian3;function p(e,t){var r,a,i,n,s,o,u=e.length,p=(e[0].modelMatrix,V.defined(e[0][t].indices)),d=e[0][t].primitiveType,l=function(e,t){var r,a=e.length,i={},n=e[0][t].attributes;for(r in n)if(n.hasOwnProperty(r)&&V.defined(n[r])&&V.defined(n[r].values)){for(var s=n[r],o=s.values.length,u=!0,p=1;p<a;++p){var d=e[p][t].attributes[r];if(!V.defined(d)||s.componentDatatype!==d.componentDatatype||s.componentsPerAttribute!==d.componentsPerAttribute||s.normalize!==d.normalize){u=!1;break}o+=d.values.length}u&&(i[r]=new G.GeometryAttribute({componentDatatype:s.componentDatatype,componentsPerAttribute:s.componentsPerAttribute,normalize:s.normalize,values:D.ComponentDatatype.createTypedArray(s.componentDatatype,o)}))}return i}(e,t);for(r in l)if(l.hasOwnProperty(r))for(i=l[r].values,f=b=0;f<u;++f)for(s=(n=e[f][t].attributes[r].values).length,a=0;a<s;++a)i[b++]=n[a];if(p){for(var y=0,f=0;f<u;++f)y+=e[f][t].indices.length;var p=G.Geometry.computeNumberOfVertices(new G.Geometry({attributes:l,primitiveType:G.PrimitiveType.POINTS})),m=S.IndexDatatype.createTypedArray(p,y),c=0,v=0;for(f=0;f<u;++f){for(var C=e[f][t].indices,h=C.length,b=0;b<h;++b)m[c++]=v+C[b];v+=G.Geometry.computeNumberOfVertices(e[f][t])}o=m}var g=new R.Cartesian3,A=0;for(f=0;f<u;++f){if(T=e[f][t].boundingSphere,!V.defined(T)){g=void 0;break}R.Cartesian3.add(T.center,g,g)}if(V.defined(g))for(R.Cartesian3.divideByScalar(g,u,g),f=0;f<u;++f){var T=e[f][t].boundingSphere,x=R.Cartesian3.magnitude(R.Cartesian3.subtract(T.center,g,X))+T.radius;A<x&&(A=x)}return new G.Geometry({attributes:l,indices:o,primitiveType:d,boundingSphere:V.defined(g)?new M.BoundingSphere(g,A):void 0})}e.combineInstances=function(e){for(var t=[],r=[],a=e.length,i=0;i<a;++i){var n=e[i];V.defined(n.geometry)?t.push(n):V.defined(n.westHemisphereGeometry)&&V.defined(n.eastHemisphereGeometry)&&r.push(n)}var s=[];return 0<t.length&&s.push(p(t,"geometry")),0<r.length&&(s.push(p(r,"westHemisphereGeometry")),s.push(p(r,"eastHemisphereGeometry"))),s};var T=new R.Cartesian3,x=new R.Cartesian3,P=new R.Cartesian3,w=new R.Cartesian3,j=(e.computeNormal=function(e){for(var t=e.indices,r=e.attributes,a=r.position.values,i=r.position.values.length/3,n=t.length,s=new Array(i),o=new Array(n/3),u=new Array(n),p=0;p<i;p++)s[p]={indexOffset:0,count:0,currentCount:0};var d=0;for(p=0;p<n;p+=3){var l=t[p],y=t[p+1],f=t[p+2],m=3*l,c=3*y,v=3*f;x.x=a[m],x.y=a[1+m],x.z=a[2+m],P.x=a[c],P.y=a[1+c],P.z=a[2+c],w.x=a[v],w.y=a[1+v],w.z=a[2+v],s[l].count++,s[y].count++,s[f].count++,R.Cartesian3.subtract(P,x,P),R.Cartesian3.subtract(w,x,w),o[d]=R.Cartesian3.cross(P,w,new R.Cartesian3),d++}var C,h=0;for(p=0;p<i;p++)s[p].indexOffset+=h,h+=s[p].count;for(p=d=0;p<n;p+=3)u[(C=s[t[p]]).indexOffset+C.currentCount]=d,C.currentCount++,u[(C=s[t[p+1]]).indexOffset+C.currentCount]=d,C.currentCount++,u[(C=s[t[p+2]]).indexOffset+C.currentCount]=d,C.currentCount++,d++;var b=new Float32Array(3*i);for(p=0;p<i;p++){var g=3*p;if(C=s[p],R.Cartesian3.clone(R.Cartesian3.ZERO,T),0<C.count){for(d=0;d<C.count;d++)R.Cartesian3.add(T,o[u[C.indexOffset+d]],T);R.Cartesian3.equalsEpsilon(R.Cartesian3.ZERO,T,D.CesiumMath.EPSILON10)&&R.Cartesian3.clone(o[u[C.indexOffset]],T)}R.Cartesian3.equalsEpsilon(R.Cartesian3.ZERO,T,D.CesiumMath.EPSILON10)&&(T.z=1),R.Cartesian3.normalize(T,T),b[g]=T.x,b[1+g]=T.y,b[2+g]=T.z}return e.attributes.normal=new G.GeometryAttribute({componentDatatype:D.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:b}),e},new R.Cartesian3),J=new R.Cartesian3,K=new R.Cartesian3,I=(e.computeTangentAndBitangent=function(e){e.attributes;for(var t=e.indices,r=e.attributes.position.values,a=e.attributes.normal.values,i=e.attributes.st.values,n=e.attributes.position.values.length/3,s=t.length,o=new Array(3*n),u=0;u<o.length;u++)o[u]=0;for(u=0;u<s;u+=3){var p,d=t[u],l=t[u+1],y=t[u+2],f=3*l,m=3*y,c=2*d,l=2*l,y=2*y,d=r[p=3*d],v=r[p+1],C=r[p+2],h=i[c],c=i[1+c],b=i[1+l]-c,c=i[1+y]-c,l=1/((i[l]-h)*c-(i[y]-h)*b),y=(c*(r[f]-d)-b*(r[m]-d))*l,h=(c*(r[f+1]-v)-b*(r[m+1]-v))*l,d=(c*(r[f+2]-C)-b*(r[m+2]-C))*l;o[p]+=y,o[p+1]+=h,o[p+2]+=d,o[f]+=y,o[f+1]+=h,o[f+2]+=d,o[m]+=y,o[m+1]+=h,o[m+2]+=d}var g=new Float32Array(3*n),A=new Float32Array(3*n);for(u=0;u<n;u++){f=(p=3*u)+1,m=p+2;var T=R.Cartesian3.fromArray(a,p,j),x=R.Cartesian3.fromArray(o,p,K),P=R.Cartesian3.dot(T,x);R.Cartesian3.multiplyByScalar(T,P,J),R.Cartesian3.normalize(R.Cartesian3.subtract(x,J,x),x),g[p]=x.x,g[f]=x.y,g[m]=x.z,R.Cartesian3.normalize(R.Cartesian3.cross(T,x,x),x),A[p]=x.x,A[f]=x.y,A[m]=x.z}return e.attributes.tangent=new G.GeometryAttribute({componentDatatype:D.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:g}),e.attributes.bitangent=new G.GeometryAttribute({componentDatatype:D.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:A}),e},new R.Cartesian2),O=new R.Cartesian3,Q=new R.Cartesian3,$=new R.Cartesian3,E=new R.Cartesian2;function ee(e){switch(e.primitiveType){case G.PrimitiveType.TRIANGLE_FAN:for(var t=e,r=G.Geometry.computeNumberOfVertices(t),a=S.IndexDatatype.createTypedArray(r,3*(r-2)),i=(a[0]=1,a[1]=0,a[2]=2,3),n=3;n<r;++n)a[i++]=n-1,a[i++]=0,a[i++]=n;return t.indices=a,t.primitiveType=G.PrimitiveType.TRIANGLES,t;case G.PrimitiveType.TRIANGLE_STRIP:for(var t=e,s=G.Geometry.computeNumberOfVertices(t),o=S.IndexDatatype.createTypedArray(s,3*(s-2)),u=(o[0]=0,o[1]=1,o[2]=2,3<s&&(o[3]=0,o[4]=2,o[5]=3),6),p=3;p<s-1;p+=2)o[u++]=p,o[u++]=p-1,o[u++]=p+1,p+2<s&&(o[u++]=p,o[u++]=p+1,o[u++]=p+2);return t.indices=o,t.primitiveType=G.PrimitiveType.TRIANGLES,t;case G.PrimitiveType.TRIANGLES:var d=e;if(!V.defined(d.indices)){for(var l=G.Geometry.computeNumberOfVertices(d),y=S.IndexDatatype.createTypedArray(l,l),f=0;f<l;++f)y[f]=f;d.indices=y}return d;case G.PrimitiveType.LINE_STRIP:for(var d=e,m=G.Geometry.computeNumberOfVertices(d),c=S.IndexDatatype.createTypedArray(m,2*(m-1)),v=(c[0]=0,c[1]=1,2),C=2;C<m;++C)c[v++]=C-1,c[v++]=C;return d.indices=c,d.primitiveType=G.PrimitiveType.LINES,d;case G.PrimitiveType.LINE_LOOP:for(var h=e,b=G.Geometry.computeNumberOfVertices(h),g=S.IndexDatatype.createTypedArray(b,2*b),A=(g[0]=0,g[1]=1,2),T=2;T<b;++T)g[A++]=T-1,g[A++]=T;return g[A++]=b-1,g[A]=0,h.indices=g,h.primitiveType=G.PrimitiveType.LINES,h;case G.PrimitiveType.LINES:h=e;if(!V.defined(h.indices)){for(var x=G.Geometry.computeNumberOfVertices(h),P=S.IndexDatatype.createTypedArray(x,x),w=0;w<x;++w)P[w]=w;h.indices=P}return h}}function l(e,t){Math.abs(e.y)<D.CesiumMath.EPSILON6&&(e.y=t?-D.CesiumMath.EPSILON6:D.CesiumMath.EPSILON6)}e.compressVertices=function(e){var t=e.attributes.extrudeDirection;if(V.defined(t)){for(var r=t.values,a=r.length/3,i=new Float32Array(2*a),n=0,s=0;s<a;++s)R.Cartesian3.fromArray(r,3*s,O),R.Cartesian3.equals(O,R.Cartesian3.ZERO)?n+=2:(E=A.AttributeCompression.octEncodeInRange(O,65535,E),i[n++]=E.x,i[n++]=E.y);e.attributes.compressedAttributes=new G.GeometryAttribute({componentDatatype:D.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:i}),delete e.attributes.extrudeDirection}else{var t=e.attributes.normal,o=e.attributes.st,u=V.defined(t),p=V.defined(o);if(u||p){var d,l,y,f,m=e.attributes.tangent,c=e.attributes.bitangent,v=V.defined(m),C=V.defined(c);u&&(d=t.values),p&&(l=o.values),v&&(y=m.values),C&&(f=c.values);var t=a=(u?d:l).length/(u?3:2),o=p&&u?2:1,h=(t*=o+=v||C?1:0,new Float32Array(t)),b=0;for(s=0;s<a;++s){p&&(R.Cartesian2.fromArray(l,2*s,I),h[b++]=A.AttributeCompression.compressTextureCoordinates(I));var g=3*s;u&&V.defined(y)&&V.defined(f)?(R.Cartesian3.fromArray(d,g,O),R.Cartesian3.fromArray(y,g,Q),R.Cartesian3.fromArray(f,g,$),A.AttributeCompression.octPack(O,Q,$,I),h[b++]=I.x,h[b++]=I.y):(u&&(R.Cartesian3.fromArray(d,g,O),h[b++]=A.AttributeCompression.octEncodeFloat(O)),v&&(R.Cartesian3.fromArray(y,g,O),h[b++]=A.AttributeCompression.octEncodeFloat(O)),C&&(R.Cartesian3.fromArray(f,g,O),h[b++]=A.AttributeCompression.octEncodeFloat(O)))}e.attributes.compressedAttributes=new G.GeometryAttribute({componentDatatype:D.ComponentDatatype.FLOAT,componentsPerAttribute:o,values:h}),u&&delete e.attributes.normal,p&&delete e.attributes.st,C&&delete e.attributes.bitangent,v&&delete e.attributes.tangent}}return e};var te=new R.Cartesian3;function y(e,t,r,a){R.Cartesian3.add(e,R.Cartesian3.multiplyByScalar(R.Cartesian3.subtract(t,e,te),e.y/(e.y-t.y),te),r),R.Cartesian3.clone(r,a),l(r,!0),l(a,!1)}var f=new R.Cartesian3,m=new R.Cartesian3,c=new R.Cartesian3,v=new R.Cartesian3,re={positions:new Array(7),indices:new Array(9)};function ae(e,t,r){var a,i,n,s,o,u;if(!(0<=e.x||0<=t.x||0<=r.x))return s=t,o=r,0!==(a=e).y&&0!==s.y&&0!==o.y?(l(a,a.y<0),l(s,s.y<0),l(o,o.y<0)):(u=Math.abs(a.y),n=Math.abs(s.y),i=Math.abs(o.y),l(a,u=(n<u?i<u?D.CesiumMath.sign(a.y):D.CesiumMath.sign(o.y):i<n?D.CesiumMath.sign(s.y):D.CesiumMath.sign(o.y))<0),l(s,u),l(o,u)),a=e.y<0,i=t.y<0,n=r.y<0,s=0,o=re.indices,1==(s=(s+=a?1:0)+(i?1:0)+(n?1:0))?(o[1]=3,o[2]=4,o[5]=6,o[7]=6,o[8]=5,a?(y(e,t,f,c),y(e,r,m,v),o[0]=0,o[3]=1,o[4]=2,o[6]=1):i?(y(t,r,f,c),y(t,e,m,v),o[0]=1,o[3]=2,o[4]=0,o[6]=2):n&&(y(r,e,f,c),y(r,t,m,v),o[0]=2,o[3]=0,o[4]=1,o[6]=0)):2==s&&(o[2]=4,o[4]=4,o[5]=3,o[7]=5,o[8]=6,a?i?n||(y(r,e,f,c),y(r,t,m,v),o[0]=0,o[1]=1,o[3]=0,o[6]=2):(y(t,r,f,c),y(t,e,m,v),o[0]=2,o[1]=0,o[3]=2,o[6]=1):(y(e,t,f,c),y(e,r,m,v),o[0]=1,o[1]=2,o[3]=1,o[6]=0)),(u=re.positions)[0]=e,u[1]=t,u[2]=r,u.length=3,1!=s&&2!=s||(u[3]=f,u[4]=m,u[5]=c,u[6]=v,u.length=7),re}function ie(e,t){var r=e.attributes;if(0!==r.position.values.length){for(var a in r)r.hasOwnProperty(a)&&V.defined(r[a])&&V.defined(r[a].values)&&((a=r[a]).values=D.ComponentDatatype.createTypedArray(a.componentDatatype,a.values));var i=G.Geometry.computeNumberOfVertices(e);return e.indices=S.IndexDatatype.createTypedArray(i,e.indices),t&&(e.boundingSphere=M.BoundingSphere.fromVertices(r.position.values)),e}}function F(e){var t,r,a=e.attributes,i={};for(t in a)a.hasOwnProperty(t)&&V.defined(a[t])&&V.defined(a[t].values)&&(r=a[t],i[t]=new G.GeometryAttribute({componentDatatype:r.componentDatatype,componentsPerAttribute:r.componentsPerAttribute,normalize:r.normalize,values:[]}));return new G.Geometry({attributes:i,indices:[],primitiveType:e.primitiveType})}function ne(e,t,r){var a=V.defined(e.geometry.boundingSphere);t=ie(t,a),r=ie(r,a),V.defined(r)&&!V.defined(t)?e.geometry=r:!V.defined(r)&&V.defined(t)?e.geometry=t:(e.westHemisphereGeometry=t,e.eastHemisphereGeometry=r,e.geometry=void 0)}function se(u,p){var d=new u,l=new u,y=new u;return function(e,t,r,a,i,n,s,o){e=u.fromArray(i,e*p,d),t=u.fromArray(i,t*p,l),i=u.fromArray(i,r*p,y),u.multiplyByScalar(e,a.x,e),u.multiplyByScalar(t,a.y,t),u.multiplyByScalar(i,a.z,i),r=u.add(e,t,e);u.add(r,i,r),o&&u.normalize(r,r),u.pack(r,n,s*p)}}var oe=se(R.Cartesian4,4),N=se(R.Cartesian3,3),ue=se(R.Cartesian2,2),pe=function(e,t,r,a,i,n,s){e=i[e]*a.x,t=i[t]*a.y,i=i[r]*a.z;n[s]=e+t+i>D.CesiumMath.EPSILON6?1:0},L=new R.Cartesian3,de=new R.Cartesian3,le=new R.Cartesian3,ye=new R.Cartesian3;function B(e,t,r,a,i,n,s,o,u,p,d,l,y,f,m,c){if(V.defined(n)||V.defined(s)||V.defined(o)||V.defined(u)||V.defined(p)||0!==f){var v,C=function(e,t,r,a,i){var n,s,o,u,p,d,l,y;if(V.defined(i)||(i=new R.Cartesian3),V.defined(t.z)){if(R.Cartesian3.equalsEpsilon(e,t,D.CesiumMath.EPSILON14))return R.Cartesian3.clone(R.Cartesian3.UNIT_X,i);if(R.Cartesian3.equalsEpsilon(e,r,D.CesiumMath.EPSILON14))return R.Cartesian3.clone(R.Cartesian3.UNIT_Y,i);if(R.Cartesian3.equalsEpsilon(e,a,D.CesiumMath.EPSILON14))return R.Cartesian3.clone(R.Cartesian3.UNIT_Z,i);n=R.Cartesian3.subtract(r,t,Y),s=R.Cartesian3.subtract(a,t,Z),o=R.Cartesian3.subtract(e,t,H),u=R.Cartesian3.dot(n,n),p=R.Cartesian3.dot(n,s),d=R.Cartesian3.dot(n,o),l=R.Cartesian3.dot(s,s),y=R.Cartesian3.dot(s,o)}else{if(R.Cartesian2.equalsEpsilon(e,t,D.CesiumMath.EPSILON14))return R.Cartesian3.clone(R.Cartesian3.UNIT_X,i);if(R.Cartesian2.equalsEpsilon(e,r,D.CesiumMath.EPSILON14))return R.Cartesian3.clone(R.Cartesian3.UNIT_Y,i);if(R.Cartesian2.equalsEpsilon(e,a,D.CesiumMath.EPSILON14))return R.Cartesian3.clone(R.Cartesian3.UNIT_Z,i);n=R.Cartesian2.subtract(r,t,Y),s=R.Cartesian2.subtract(a,t,Z),o=R.Cartesian2.subtract(e,t,H),u=R.Cartesian2.dot(n,n),p=R.Cartesian2.dot(n,s),d=R.Cartesian2.dot(n,o),l=R.Cartesian2.dot(s,s),y=R.Cartesian2.dot(s,o)}return i.y=l*d-p*y,i.z=u*y-p*d,r=u*l-p*p,0!==i.y&&(i.y/=r),0!==i.z&&(i.z/=r),i.x=1-i.y-i.z,i}(a,R.Cartesian3.fromArray(i,3*e,L),R.Cartesian3.fromArray(i,3*t,de),R.Cartesian3.fromArray(i,3*r,le),ye);if(V.defined(n)&&N(e,t,r,C,n,l.normal.values,c,!0),V.defined(p)&&(a=R.Cartesian3.fromArray(p,3*e,L),i=R.Cartesian3.fromArray(p,3*t,de),n=R.Cartesian3.fromArray(p,3*r,le),R.Cartesian3.multiplyByScalar(a,C.x,a),R.Cartesian3.multiplyByScalar(i,C.y,i),R.Cartesian3.multiplyByScalar(n,C.z,n),R.Cartesian3.equals(a,R.Cartesian3.ZERO)&&R.Cartesian3.equals(i,R.Cartesian3.ZERO)&&R.Cartesian3.equals(n,R.Cartesian3.ZERO)?((v=L).x=0,v.y=0,v.z=0):(v=R.Cartesian3.add(a,i,a),R.Cartesian3.add(v,n,v),R.Cartesian3.normalize(v,v)),R.Cartesian3.pack(v,l.extrudeDirection.values,3*c)),V.defined(d)&&pe(e,t,r,C,d,l.applyOffset.values,c),V.defined(s)&&N(e,t,r,C,s,l.tangent.values,c,!0),V.defined(o)&&N(e,t,r,C,o,l.bitangent.values,c,!0),V.defined(u)&&ue(e,t,r,C,u,l.st.values,c),0<f)for(var h=0;h<f;h++){var b=y[h],g=(E=O=I=S=w=P=x=T=A=g=void 0,e),A=t,T=r,x=C,P=c,w=m[b],S=l[b],I=w.componentsPerAttribute,O=w.values,E=S.values;switch(I){case 4:oe(g,A,T,x,O,E,P,!1);break;case 3:N(g,A,T,x,O,E,P,!1);break;case 2:ue(g,A,T,x,O,E,P,!1);break;default:E[P]=O[g]*x.x+O[A]*x.y+O[T]*x.z}}}}function _(e,t,r,a,i,n){var s=e.position.values.length/3;return-1!==i?-1===(i=r[a=a[i]])?(r[a]=s,e.position.values.push(n.x,n.y,n.z),t.push(s),s):(t.push(i),i):(e.position.values.push(n.x,n.y,n.z),t.push(s),s)}var fe={position:!0,normal:!0,bitangent:!0,tangent:!0,st:!0,extrudeDirection:!0,applyOffset:!0};function me(e){var t,r=e.geometry,a=r.attributes,i=a.position.values,n=V.defined(a.normal)?a.normal.values:void 0,s=V.defined(a.bitangent)?a.bitangent.values:void 0,o=V.defined(a.tangent)?a.tangent.values:void 0,u=V.defined(a.st)?a.st.values:void 0,p=V.defined(a.extrudeDirection)?a.extrudeDirection.values:void 0,d=V.defined(a.applyOffset)?a.applyOffset.values:void 0,l=r.indices,y=[];for(t in a)a.hasOwnProperty(t)&&!fe[t]&&V.defined(a[t])&&y.push(t);var f,m,c=y.length,v=F(r),C=F(r),h=[],b=(h.length=i.length/3,[]);for(b.length=i.length/3,A=0;A<h.length;++A)b[A]=h[A]=-1;for(var g=l.length,A=0;A<g;A+=3){var T=l[A],x=l[A+1],P=l[A+2],w=R.Cartesian3.fromArray(i,3*T),S=R.Cartesian3.fromArray(i,3*x),I=R.Cartesian3.fromArray(i,3*P),O=ae(w,S,I);if(V.defined(O)&&3<O.positions.length)for(var E=O.positions,N=O.indices,L=N.length,z=0;z<L;++z){var D=N[z],M=E[D],G=M.y<0?(f=C.attributes,m=C.indices,h):(f=v.attributes,m=v.indices,b);B(T,x,P,M,i,n,o,s,u,p,d,f,y,c,a,_(f,m,G,l,D<3?A+D:-1,M))}else V.defined(O)&&(w=O.positions[0],S=O.positions[1],I=O.positions[2]),G=w.y<0?(f=C.attributes,m=C.indices,h):(f=v.attributes,m=v.indices,b),B(T,x,P,w,i,n,o,s,u,p,d,f,y,c,a,_(f,m,G,l,A,w)),B(T,x,P,S,i,n,o,s,u,p,d,f,y,c,a,_(f,m,G,l,A+1,S)),B(T,x,P,I,i,n,o,s,u,p,d,f,y,c,a,_(f,m,G,l,A+2,I))}ne(e,C,v)}var ce=U.Plane.fromPointNormal(R.Cartesian3.ZERO,R.Cartesian3.UNIT_Y),ve=new R.Cartesian3,Ce=new R.Cartesian3;function z(e,t,r,a,i,n,s){V.defined(s)&&(a=R.Cartesian3.fromArray(a,3*e,L),R.Cartesian3.equalsEpsilon(a,r,D.CesiumMath.EPSILON10)?n.applyOffset.values[i]=s[e]:n.applyOffset.values[i]=s[t])}function he(e){var t,r=e.geometry,a=r.attributes,i=a.position.values,n=V.defined(a.applyOffset)?a.applyOffset.values:void 0,s=r.indices,o=F(r),u=F(r),p=s.length,d=[],l=(d.length=i.length/3,[]);for(l.length=i.length/3,t=0;t<d.length;++t)l[t]=d[t]=-1;for(t=0;t<p;t+=2){var y,f,m,c,v=s[t],C=s[t+1],h=R.Cartesian3.fromArray(i,3*v,L),b=R.Cartesian3.fromArray(i,3*C,de),g=(Math.abs(h.y)<D.CesiumMath.EPSILON6&&(h.y<0?h.y=-D.CesiumMath.EPSILON6:h.y=D.CesiumMath.EPSILON6),Math.abs(b.y)<D.CesiumMath.EPSILON6&&(b.y<0?b.y=-D.CesiumMath.EPSILON6:b.y=D.CesiumMath.EPSILON6),o.attributes),A=o.indices,T=l,x=u.attributes,P=u.indices,w=d,S=q.IntersectionTests.lineSegmentPlane(h,b,ce,le);V.defined(S)?(y=R.Cartesian3.multiplyByScalar(R.Cartesian3.UNIT_Y,5*D.CesiumMath.EPSILON9,ve),h.y<0&&(R.Cartesian3.negate(y,y),g=u.attributes,A=u.indices,T=d,x=o.attributes,P=o.indices,w=l),f=R.Cartesian3.add(S,y,Ce),z(v,C,h,i,_(g,A,T,s,t,h),g,n),z(v,C,f,i,_(g,A,T,s,-1,f),g,n),R.Cartesian3.negate(y,y),R.Cartesian3.add(S,y,f),z(v,C,f,i,_(x,P,w,s,-1,f),x,n),z(v,C,b,i,_(x,P,w,s,t+1,b),x,n)):(A=h.y<0?(m=u.attributes,c=u.indices,d):(m=o.attributes,c=o.indices,l),z(v,C,h,i,_(m,c,A,s,t,h),m,n),z(v,C,b,i,_(m,c,A,s,t+1,b),m,n))}ne(e,u,o)}var be=new R.Cartesian2,ge=new R.Cartesian2,Ae=new R.Cartesian3,Te=new R.Cartesian3,xe=new R.Cartesian3,Pe=new R.Cartesian3,we=new R.Cartesian3,Se=new R.Cartesian3,Ie=new R.Cartesian4;function Oe(e){for(var e=e.attributes,t=e.position.values,r=e.prevPosition.values,a=e.nextPosition.values,i=t.length,n=0;n<i;n+=3){var s,o=R.Cartesian3.unpack(t,n,Ae);0<o.x||(s=R.Cartesian3.unpack(r,n,Te),(o.y<0&&0<s.y||0<o.y&&s.y<0)&&(0<n-3?(r[n]=t[n-3],r[n+1]=t[n-2],r[n+2]=t[n-1]):R.Cartesian3.pack(o,r,n)),s=R.Cartesian3.unpack(a,n,xe),(o.y<0&&0<s.y||0<o.y&&s.y<0)&&(n+3<i?(a[n]=t[n+3],a[n+1]=t[n+4],a[n+2]=t[n+5]):R.Cartesian3.pack(o,a,n)))}}var Ee=5*D.CesiumMath.EPSILON9,k=D.CesiumMath.EPSILON6;e.splitLongitude=function(e){var t=e.geometry,r=t.boundingSphere;if(V.defined(r)&&(0<r.center.x-r.radius||M.BoundingSphere.intersectPlane(r,U.Plane.ORIGIN_ZX_PLANE)!==M.Intersect.INTERSECTING))return e;if(t.geometryType!==G.GeometryType.NONE)switch(t.geometryType){case G.GeometryType.POLYLINES:for(var a=e,i=a.geometry,n=i.attributes,s=n.position.values,o=n.prevPosition.values,u=n.nextPosition.values,p=n.expandAndWidth.values,d=V.defined(n.st)?n.st.values:void 0,l=V.defined(n.color)?n.color.values:void 0,y=F(i),f=F(i),m=!1,c=s.length/3,v=0;v<c;v+=4){var C=v,h=v+2,b=R.Cartesian3.fromArray(s,3*C,Ae),g=R.Cartesian3.fromArray(s,3*h,Te);if(Math.abs(b.y)<k)for(b.y=k*(g.y<0?-1:1),s[3*v+1]=b.y,s[3*(v+1)+1]=b.y,L=3*C;L<3*C+12;L+=3)o[L]=s[3*v],o[L+1]=s[3*v+1],o[L+2]=s[3*v+2];if(Math.abs(g.y)<k)for(g.y=k*(b.y<0?-1:1),s[3*(v+2)+1]=g.y,s[3*(v+3)+1]=g.y,L=3*C;L<3*C+12;L+=3)u[L]=s[3*(v+2)],u[L+1]=s[3*(v+2)+1],u[L+2]=s[3*(v+2)+2];var A=y.attributes,T=y.indices,x=f.attributes,P=f.indices,w=q.IntersectionTests.lineSegmentPlane(b,g,ce,Pe);if(V.defined(w)){var m=!0,S=R.Cartesian3.multiplyByScalar(R.Cartesian3.UNIT_Y,Ee,we),I=(b.y<0&&(R.Cartesian3.negate(S,S),A=f.attributes,T=f.indices,x=y.attributes,P=y.indices),R.Cartesian3.add(w,S,Se)),S=(A.position.values.push(b.x,b.y,b.z,b.x,b.y,b.z),A.position.values.push(I.x,I.y,I.z),A.position.values.push(I.x,I.y,I.z),A.prevPosition.values.push(o[3*C],o[3*C+1],o[3*C+2]),A.prevPosition.values.push(o[3*C+3],o[3*C+4],o[3*C+5]),A.prevPosition.values.push(b.x,b.y,b.z,b.x,b.y,b.z),A.nextPosition.values.push(I.x,I.y,I.z),A.nextPosition.values.push(I.x,I.y,I.z),A.nextPosition.values.push(I.x,I.y,I.z),A.nextPosition.values.push(I.x,I.y,I.z),R.Cartesian3.negate(S,S),R.Cartesian3.add(w,S,I),x.position.values.push(I.x,I.y,I.z),x.position.values.push(I.x,I.y,I.z),x.position.values.push(g.x,g.y,g.z,g.x,g.y,g.z),x.prevPosition.values.push(I.x,I.y,I.z),x.prevPosition.values.push(I.x,I.y,I.z),x.prevPosition.values.push(I.x,I.y,I.z),x.prevPosition.values.push(I.x,I.y,I.z),x.nextPosition.values.push(g.x,g.y,g.z,g.x,g.y,g.z),x.nextPosition.values.push(u[3*h],u[3*h+1],u[3*h+2]),x.nextPosition.values.push(u[3*h+3],u[3*h+4],u[3*h+5]),R.Cartesian2.fromArray(p,2*C,be)),I=Math.abs(S.y),S=(A.expandAndWidth.values.push(-1,I,1,I),A.expandAndWidth.values.push(-1,-I,1,-I),x.expandAndWidth.values.push(-1,I,1,I),x.expandAndWidth.values.push(-1,-I,1,-I),R.Cartesian3.magnitudeSquared(R.Cartesian3.subtract(w,b,xe)));if(S/=R.Cartesian3.magnitudeSquared(R.Cartesian3.subtract(g,b,xe)),V.defined(l)){for(var I=R.Cartesian4.fromArray(l,4*C,Ie),w=R.Cartesian4.fromArray(l,4*h,Ie),O=D.CesiumMath.lerp(I.x,w.x,S),E=D.CesiumMath.lerp(I.y,w.y,S),N=D.CesiumMath.lerp(I.z,w.z,S),I=D.CesiumMath.lerp(I.w,w.w,S),L=4*C;L<4*C+8;++L)A.color.values.push(l[L]);for(A.color.values.push(O,E,N,I),A.color.values.push(O,E,N,I),x.color.values.push(O,E,N,I),x.color.values.push(O,E,N,I),L=4*h;L<4*h+8;++L)x.color.values.push(l[L])}if(V.defined(d)){w=R.Cartesian2.fromArray(d,2*C,be),O=R.Cartesian2.fromArray(d,2*(v+3),ge),E=D.CesiumMath.lerp(w.x,O.x,S);for(L=2*C;L<2*C+4;++L)A.st.values.push(d[L]);for(A.st.values.push(E,w.y),A.st.values.push(E,O.y),x.st.values.push(E,w.y),x.st.values.push(E,O.y),L=2*h;L<2*h+4;++L)x.st.values.push(d[L])}N=A.position.values.length/3-4,T.push(N,N+2,N+1),T.push(N+1,N+2,N+3),N=x.position.values.length/3-4,P.push(N,N+2,N+1),P.push(N+1,N+2,N+3)}else{var z,I=(b.y<0?(z=f.attributes,f):(z=y.attributes,y)).indices;for(z.position.values.push(b.x,b.y,b.z),z.position.values.push(b.x,b.y,b.z),z.position.values.push(g.x,g.y,g.z),z.position.values.push(g.x,g.y,g.z),L=3*v;L<3*v+12;++L)z.prevPosition.values.push(o[L]),z.nextPosition.values.push(u[L]);for(L=2*v;L<2*v+8;++L)z.expandAndWidth.values.push(p[L]),V.defined(d)&&z.st.values.push(d[L]);if(V.defined(l))for(L=4*v;L<4*v+16;++L)z.color.values.push(l[L]);N=z.position.values.length/3-4,I.push(N,N+2,N+1),I.push(N+1,N+2,N+3)}}m&&(Oe(f),Oe(y)),ne(a,f,y);break;case G.GeometryType.TRIANGLES:me(e);break;case G.GeometryType.LINES:he(e)}else ee(t),t.primitiveType===G.PrimitiveType.TRIANGLES?me(e):t.primitiveType===G.PrimitiveType.LINES&&he(e);return e},t.GeometryPipeline=e});
