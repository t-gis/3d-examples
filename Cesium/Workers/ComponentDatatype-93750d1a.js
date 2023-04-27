define(["exports","./RuntimeError-346a3079","./when-4bbc8319","./WebGLConstants-1c8239cc"],function(t,n,i,r){"use strict";function e(t){null==t&&(t=(new Date).getTime()),this.N=624,this.M=397,this.MATRIX_A=2567483615,this.UPPER_MASK=2147483648,this.LOWER_MASK=2147483647,this.mt=new Array(this.N),this.mti=this.N+1,t.constructor==Array?this.init_by_array(t,t.length):this.init_seed(t)}e.prototype.init_seed=function(t){for(this.mt[0]=t>>>0,this.mti=1;this.mti<this.N;this.mti++){t=this.mt[this.mti-1]^this.mt[this.mti-1]>>>30;this.mt[this.mti]=(1812433253*((4294901760&t)>>>16)<<16)+1812433253*(65535&t)+this.mti,this.mt[this.mti]>>>=0}},e.prototype.init_by_array=function(t,n){var r,e,a;for(this.init_seed(19650218),r=1,e=0,a=this.N>n?this.N:n;a;a--){var i=this.mt[r-1]^this.mt[r-1]>>>30;this.mt[r]=(this.mt[r]^(1664525*((4294901760&i)>>>16)<<16)+1664525*(65535&i))+t[e]+e,this.mt[r]>>>=0,e++,++r>=this.N&&(this.mt[0]=this.mt[this.N-1],r=1),n<=e&&(e=0)}for(a=this.N-1;a;a--){i=this.mt[r-1]^this.mt[r-1]>>>30;this.mt[r]=(this.mt[r]^(1566083941*((4294901760&i)>>>16)<<16)+1566083941*(65535&i))-r,this.mt[r]>>>=0,++r>=this.N&&(this.mt[0]=this.mt[this.N-1],r=1)}this.mt[0]=2147483648},e.prototype.random_int=function(){var t,n,r=new Array(0,this.MATRIX_A);if(this.mti>=this.N){for(this.mti==this.N+1&&this.init_seed(5489),n=0;n<this.N-this.M;n++)t=this.mt[n]&this.UPPER_MASK|this.mt[n+1]&this.LOWER_MASK,this.mt[n]=this.mt[n+this.M]^t>>>1^r[1&t];for(;n<this.N-1;n++)t=this.mt[n]&this.UPPER_MASK|this.mt[n+1]&this.LOWER_MASK,this.mt[n]=this.mt[n+(this.M-this.N)]^t>>>1^r[1&t];t=this.mt[this.N-1]&this.UPPER_MASK|this.mt[0]&this.LOWER_MASK,this.mt[this.N-1]=this.mt[this.M-1]^t>>>1^r[1&t],this.mti=0}return t=this.mt[this.mti++],(t=(t=(t=(t^=t>>>11)^t<<7&2636928640)^t<<15&4022730752)^t>>>18)>>>0},e.prototype.random_int31=function(){return this.random_int()>>>1},e.prototype.random_incl=function(){return this.random_int()*(1/4294967295)},e.prototype.random=function(){return this.random_int()*(1/4294967296)},e.prototype.random_excl=function(){return(this.random_int()+.5)*(1/4294967296)},e.prototype.random_long=function(){return 1/9007199254740992*(67108864*(this.random_int()>>>5)+(this.random_int()>>>6))};var a=e,s={EPSILON1:.1,EPSILON2:.01,EPSILON3:.001,EPSILON4:1e-4,EPSILON5:1e-5,EPSILON6:1e-6,EPSILON7:1e-7,EPSILON8:1e-8,EPSILON9:1e-9,EPSILON10:1e-10,EPSILON11:1e-11,EPSILON12:1e-12,EPSILON13:1e-13,EPSILON14:1e-14,EPSILON15:1e-15,EPSILON16:1e-16,EPSILON17:1e-17,EPSILON18:1e-18,EPSILON19:1e-19,EPSILON20:1e-20,EPSILON21:1e-21,GRAVITATIONALPARAMETER:3986004418e5,SOLAR_RADIUS:6955e5,LUNAR_RADIUS:1737400,SIXTY_FOUR_KILOBYTES:65536,FOUR_GIGABYTES:4294967296},o=(s.sign=i.defaultValue(Math.sign,function(t){return 0===(t=+t)||t!=t?t:0<t?1:-1}),s.signNotZero=function(t){return t<0?-1:1},s.toSNorm=function(t,n){return n=i.defaultValue(n,255),Math.round((.5*s.clamp(t,-1,1)+.5)*n)},s.fromSNorm=function(t,n){return n=i.defaultValue(n,255),s.clamp(t,0,n)/n*2-1},s.normalize=function(t,n,r){return 0===(r=Math.max(r-n,0))?0:s.clamp((t-n)/r,0,1)},s.sinh=i.defaultValue(Math.sinh,function(t){return(Math.exp(t)-Math.exp(-t))/2}),s.cosh=i.defaultValue(Math.cosh,function(t){return(Math.exp(t)+Math.exp(-t))/2}),s.lerp=function(t,n,r){return(1-r)*t+r*n},s.PI=Math.PI,s.ONE_OVER_PI=1/Math.PI,s.PI_OVER_TWO=Math.PI/2,s.PI_OVER_THREE=Math.PI/3,s.PI_OVER_FOUR=Math.PI/4,s.PI_OVER_SIX=Math.PI/6,s.THREE_PI_OVER_TWO=3*Math.PI/2,s.TWO_PI=2*Math.PI,s.ONE_OVER_TWO_PI=1/(2*Math.PI),s.RADIANS_PER_DEGREE=Math.PI/180,s.DEGREES_PER_RADIAN=180/Math.PI,s.RADIANS_PER_ARCSECOND=s.RADIANS_PER_DEGREE/3600,s.toRadians=function(t){return t*s.RADIANS_PER_DEGREE},s.toDegrees=function(t){return t*s.DEGREES_PER_RADIAN},s.convertLongitudeRange=function(t){var n=s.TWO_PI,t=t-Math.floor(t/n)*n;return t<-Math.PI?t+n:t>=Math.PI?t-n:t},s.clampToLatitudeRange=function(t){return s.clamp(t,-1*s.PI_OVER_TWO,s.PI_OVER_TWO)},s.negativePiToPi=function(t){return-s.PI<=t&&t<=s.PI?t:s.zeroToTwoPi(t+s.PI)-s.PI},s.zeroToTwoPi=function(t){var n;return 0<=t&&t<=s.TWO_PI?t:(n=s.mod(t,s.TWO_PI),Math.abs(n)<s.EPSILON14&&Math.abs(t)>s.EPSILON14?s.TWO_PI:n)},s.mod=function(t,n){return s.sign(t)===s.sign(n)&&Math.abs(t)<Math.abs(n)?t:(t%n+n)%n},s.equalsEpsilon=function(t,n,r,e){r=i.defaultValue(r,0),e=i.defaultValue(e,r);var a=Math.abs(t-n);return a<=e||a<=r*Math.max(Math.abs(t),Math.abs(n))},s.lessThan=function(t,n,r){return t-n<-r},s.lessThanOrEquals=function(t,n,r){return t-n<r},s.greaterThan=function(t,n,r){return r<t-n},s.greaterThanOrEquals=function(t,n,r){return-r<t-n},[1]),u=(s.factorial=function(t){var n=o.length;if(n<=t)for(var r=o[n-1],e=n;e<=t;e++){var a=r*e;o.push(a),r=a}return o[t]},s.incrementWrap=function(t,n,r){return r=i.defaultValue(r,0),t=n<++t?r:t},s.isPowerOfTwo=function(t){return 0!==t&&0==(t&t-1)},s.nextPowerOfTwo=function(t){return--t,t=(t=(t=(t=(t|=t>>1)|t>>2)|t>>4)|t>>8)|t>>16,++t},s.previousPowerOfTwo=function(t){return t=((t=(t=(t=(t=(t=(t|=t>>1)|t>>2)|t>>4)|t>>8)|t>>16)|t>>32)>>>0)-(t>>>1)},s.clamp=function(t,n,r){return t<n?n:r<t?r:t},new a),E=(s.setRandomNumberSeed=function(t){u=new a(t)},s.nextRandomNumber=function(){return u.random()},s.randomBetween=function(t,n){return s.nextRandomNumber()*(n-t)+t},s.acosClamped=function(t){return Math.acos(s.clamp(t,-1,1))},s.asinClamped=function(t){return Math.asin(s.clamp(t,-1,1))},s.chordLength=function(t,n){return 2*n*Math.sin(.5*t)},s.logBase=function(t,n){return Math.log(t)/Math.log(n)},s.cbrt=i.defaultValue(Math.cbrt,function(t){var n=Math.pow(Math.abs(t),1/3);return t<0?-n:n}),s.log2=i.defaultValue(Math.log2,function(t){return Math.log(t)*Math.LOG2E}),s.fog=function(t,n){t*=n;return 1-Math.exp(-t*t)},s.fastApproximateAtan=function(t){return t*(-.1784*Math.abs(t)-.0663*t*t+1.0301)},s.fastApproximateAtan2=function(t,n){var r=Math.abs(t),e=Math.abs(n),a=Math.max(r,e);e=Math.min(r,e);r=s.fastApproximateAtan(e/a);return r=Math.abs(n)>Math.abs(t)?s.PI_OVER_TWO-r:r,r=t<0?s.PI-r:r,n<0?-r:r},{BYTE:r.WebGLConstants.BYTE,UNSIGNED_BYTE:r.WebGLConstants.UNSIGNED_BYTE,SHORT:r.WebGLConstants.SHORT,UNSIGNED_SHORT:r.WebGLConstants.UNSIGNED_SHORT,INT:r.WebGLConstants.INT,UNSIGNED_INT:r.WebGLConstants.UNSIGNED_INT,FLOAT:r.WebGLConstants.FLOAT,DOUBLE:r.WebGLConstants.DOUBLE}),r=(E.getSizeInBytes=function(t){switch(t){case E.BYTE:return Int8Array.BYTES_PER_ELEMENT;case E.UNSIGNED_BYTE:return Uint8Array.BYTES_PER_ELEMENT;case E.SHORT:return Int16Array.BYTES_PER_ELEMENT;case E.UNSIGNED_SHORT:return Uint16Array.BYTES_PER_ELEMENT;case E.INT:return Int32Array.BYTES_PER_ELEMENT;case E.UNSIGNED_INT:return Uint32Array.BYTES_PER_ELEMENT;case E.FLOAT:return Float32Array.BYTES_PER_ELEMENT;case E.DOUBLE:return Float64Array.BYTES_PER_ELEMENT}},E.fromTypedArray=function(t){return t instanceof Int8Array?E.BYTE:t instanceof Uint8Array?E.UNSIGNED_BYTE:t instanceof Int16Array?E.SHORT:t instanceof Uint16Array?E.UNSIGNED_SHORT:t instanceof Int32Array?E.INT:t instanceof Uint32Array?E.UNSIGNED_INT:t instanceof Float32Array?E.FLOAT:t instanceof Float64Array?E.DOUBLE:void 0},E.validate=function(t){return i.defined(t)&&(t===E.BYTE||t===E.UNSIGNED_BYTE||t===E.SHORT||t===E.UNSIGNED_SHORT||t===E.INT||t===E.UNSIGNED_INT||t===E.FLOAT||t===E.DOUBLE)},E.createTypedArray=function(t,n){switch(t){case E.BYTE:return new Int8Array(n);case E.UNSIGNED_BYTE:return new Uint8Array(n);case E.SHORT:return new Int16Array(n);case E.UNSIGNED_SHORT:return new Uint16Array(n);case E.INT:return new Int32Array(n);case E.UNSIGNED_INT:return new Uint32Array(n);case E.FLOAT:return new Float32Array(n);case E.DOUBLE:return new Float64Array(n)}},E.createArrayBufferView=function(t,n,r,e){switch(r=i.defaultValue(r,0),e=i.defaultValue(e,(n.byteLength-r)/E.getSizeInBytes(t)),t){case E.BYTE:return new Int8Array(n,r,e);case E.UNSIGNED_BYTE:return new Uint8Array(n,r,e);case E.SHORT:return new Int16Array(n,r,e);case E.UNSIGNED_SHORT:return new Uint16Array(n,r,e);case E.INT:return new Int32Array(n,r,e);case E.UNSIGNED_INT:return new Uint32Array(n,r,e);case E.FLOAT:return new Float32Array(n,r,e);case E.DOUBLE:return new Float64Array(n,r,e)}},E.fromName=function(t){switch(t){case"BYTE":return E.BYTE;case"UNSIGNED_BYTE":return E.UNSIGNED_BYTE;case"SHORT":return E.SHORT;case"UNSIGNED_SHORT":return E.UNSIGNED_SHORT;case"INT":return E.INT;case"UNSIGNED_INT":return E.UNSIGNED_INT;case"FLOAT":return E.FLOAT;case"DOUBLE":return E.DOUBLE}},Object.freeze(E));t.CesiumMath=s,t.ComponentDatatype=r});
