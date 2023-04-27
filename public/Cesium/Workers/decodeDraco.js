define(["./ComponentDatatype-93750d1a","./when-4bbc8319","./IndexDatatype-b7d979a6","./RuntimeError-346a3079","./createTaskProcessorWorker","./WebGLConstants-1c8239cc"],function(d,c,y,f,t,e){"use strict";var A;function b(e,t,r){var n,o=e.num_points(),a=r.num_components(),i=new A.AttributeQuantizationTransform;if(i.InitFromAttribute(r)){for(var s=new Array(a),u=0;u<a;++u)s[u]=i.min_value(u);n={quantizationBits:i.quantization_bits(),minValues:s,range:i.range(),octEncoded:!1}}A.destroy(i),(i=new A.AttributeOctahedronTransform).InitFromAttribute(r)&&(n={quantizationBits:i.quantization_bits(),octEncoded:!0}),A.destroy(i);o*=a,e=c.defined(n)?function(e,t,r,n,o){var a,i;n.quantizationBits<=8?(i=new A.DracoUInt8Array,a=new Uint8Array(o),t.GetAttributeUInt8ForAllPoints(e,r,i)):(i=new A.DracoUInt16Array,a=new Uint16Array(o),t.GetAttributeUInt16ForAllPoints(e,r,i));for(var s=0;s<o;++s)a[s]=i.GetValue(s);return A.destroy(i),a}(e,t,r,n,o):function(e,t,r,n){var o,a;switch(r.data_type()){case 1:case 11:a=new A.DracoInt8Array,o=new Int8Array(n),t.GetAttributeInt8ForAllPoints(e,r,a);break;case 2:a=new A.DracoUInt8Array,o=new Uint8Array(n),t.GetAttributeUInt8ForAllPoints(e,r,a);break;case 3:a=new A.DracoInt16Array,o=new Int16Array(n),t.GetAttributeInt16ForAllPoints(e,r,a);break;case 4:a=new A.DracoUInt16Array,o=new Uint16Array(n),t.GetAttributeUInt16ForAllPoints(e,r,a);break;case 5:case 7:a=new A.DracoInt32Array,o=new Int32Array(n),t.GetAttributeInt32ForAllPoints(e,r,a);break;case 6:case 8:a=new A.DracoUInt32Array,o=new Uint32Array(n),t.GetAttributeUInt32ForAllPoints(e,r,a);break;case 9:case 10:a=new A.DracoFloat32Array,o=new Float32Array(n),t.GetAttributeFloatForAllPoints(e,r,a)}for(var i=0;i<n;++i)o[i]=a.GetValue(i);return A.destroy(a),o}(e,t,r,o),t=d.ComponentDatatype.fromTypedArray(e);return{array:e,data:{componentsPerAttribute:a,componentDatatype:t,byteOffset:r.byte_offset(),byteStride:d.ComponentDatatype.getSizeInBytes(t)*a,normalized:r.normalized(),quantization:n}}}function w(e){var t=new A.Decoder,r=e.bufferView,n=new A.DecoderBuffer;if(n.Init(e.array,r.byteLength),t.GetEncodedGeometryType(n)!==A.TRIANGULAR_MESH)throw new f.RuntimeError("Unsupported draco mesh geometry type.");var o=new A.Mesh,r=t.DecodeBufferToMesh(n,o);if(!r.ok()||0===o.ptr)throw new f.RuntimeError("Error decoding draco mesh geometry: "+r.error_msg());A.destroy(n);var a,i,s={},u=e.compressedAttributes;for(a in u)u.hasOwnProperty(a)&&(i=u[a],i=t.GetAttributeByUniqueId(o,i),s[a]=b(o,t,i));r={indexArray:function(e,t){for(var r=e.num_points(),n=e.num_faces(),o=new A.DracoInt32Array,a=3*n,i=y.IndexDatatype.createTypedArray(r,a),s=0,u=0;u<n;++u)t.GetFaceFromMesh(e,u,o),i[s+0]=o.GetValue(0),i[s+1]=o.GetValue(1),i[s+2]=o.GetValue(2),s+=3;return A.destroy(o),{typedArray:i,numberOfIndices:a}}(o,t),attributeData:s};return A.destroy(o),A.destroy(t),r}function r(e){if(c.defined(e.bufferView))return w(e);var t=new A.Decoder,r=(e.dequantizeInShader&&(t.SkipAttributeTransform(A.POSITION),t.SkipAttributeTransform(A.NORMAL)),new A.DecoderBuffer);if(r.Init(e.buffer,e.buffer.length),t.GetEncodedGeometryType(r)!==A.POINT_CLOUD)throw new f.RuntimeError("Draco geometry type must be POINT_CLOUD.");var n=new A.PointCloud,o=t.DecodeBufferToPointCloud(r,n);if(!o.ok()||0===n.ptr)throw new f.RuntimeError("Error decoding draco point cloud: "+o.error_msg());A.destroy(r);var a,i,s={},u=e.properties;for(a in u)u.hasOwnProperty(a)&&(i=u[a],i=t.GetAttributeByUniqueId(n,i),s[a]=b(n,t,i));return A.destroy(n),A.destroy(t),s}function n(e){A=e,self.onmessage=t(r),self.postMessage(!0)}return function(e){var t=e.data.webAssemblyConfig;if(c.defined(t))return require([t.modulePath],function(e){c.defined(t.wasmBinaryFile)?(e=c.defined(e)?e:self.DracoDecoderModule)(t).then(function(e){n(e)}):n(e())})}});
