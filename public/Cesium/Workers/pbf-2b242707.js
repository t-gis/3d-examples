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

define(["exports"],function(k){"use strict";var V=function(i,t,e,o,a){var r,s,n=8*a-o-1,h=(1<<n)-1,d=h>>1,u=-7,f=e?a-1:0,c=e?-1:1,l=i[t+f];for(f+=c,r=l&(1<<-u)-1,l>>=-u,u+=n;u>0;r=256*r+i[t+f],f+=c,u-=8);for(s=r&(1<<-u)-1,r>>=-u,u+=o;u>0;s=256*s+i[t+f],f+=c,u-=8);if(r===0)r=1-d;else{if(r===h)return s?NaN:1/0*(l?-1:1);s+=Math.pow(2,o),r-=d}return(l?-1:1)*s*Math.pow(2,r-o)},M=function(i,t,e,o,a,r){var s,n,h,d=8*r-a-1,u=(1<<d)-1,f=u>>1,c=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,l=o?0:r-1,x=o?1:-1,L=t<0||t===0&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(n=isNaN(t)?1:0,s=u):(s=Math.floor(Math.log(t)/Math.LN2),t*(h=Math.pow(2,-s))<1&&(s--,h*=2),(t+=s+f>=1?c/h:c*Math.pow(2,1-f))*h>=2&&(s++,h/=2),s+f>=u?(n=0,s=u):s+f>=1?(n=(t*h-1)*Math.pow(2,a),s+=f):(n=t*Math.pow(2,f-1)*Math.pow(2,a),s=0));a>=8;i[e+l]=255&n,l+=x,n/=256,a-=8);for(s=s<<a|n,d+=a;d>0;i[e+l]=255&s,l+=x,s/=256,d-=8);i[e+l-x]|=128*L};function p(i){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(i)?i:new Uint8Array(i||0),this.pos=0,this.type=0,this.length=this.buf.length}p.Varint=0,p.Fixed64=1,p.Bytes=2,p.Fixed32=5;var v=4294967296,S=1/v;function w(i){return i.type===p.Bytes?i.readVarint()+i.pos:i.pos+1}function F(i,t,e){return e?4294967296*t+(i>>>0):4294967296*(t>>>0)+(i>>>0)}function y(i,t,e){var o=t<=16383?1:t<=2097151?2:t<=268435455?3:Math.ceil(Math.log(t)/(7*Math.LN2));e.realloc(o);for(var a=e.pos-1;a>=i;a--)e.buf[a+o]=e.buf[a]}function P(i,t){for(var e=0;e<i.length;e++)t.writeVarint(i[e])}function T(i,t){for(var e=0;e<i.length;e++)t.writeSVarint(i[e])}function D(i,t){for(var e=0;e<i.length;e++)t.writeFloat(i[e])}function N(i,t){for(var e=0;e<i.length;e++)t.writeDouble(i[e])}function m(i,t){for(var e=0;e<i.length;e++)t.writeBoolean(i[e])}function A(i,t){for(var e=0;e<i.length;e++)t.writeFixed32(i[e])}function C(i,t){for(var e=0;e<i.length;e++)t.writeSFixed32(i[e])}function E(i,t){for(var e=0;e<i.length;e++)t.writeFixed64(i[e])}function U(i,t){for(var e=0;e<i.length;e++)t.writeSFixed64(i[e])}function g(i,t){return(i[t]|i[t+1]<<8|i[t+2]<<16)+16777216*i[t+3]}function b(i,t,e){i[e]=t,i[e+1]=t>>>8,i[e+2]=t>>>16,i[e+3]=t>>>24}function B(i,t){return(i[t]|i[t+1]<<8|i[t+2]<<16)+(i[t+3]<<24)}p.prototype={destroy:function(){this.buf=null},readFields:function(i,t,e){for(e=e||this.length;this.pos<e;){var o=this.readVarint(),a=o>>3,r=this.pos;this.type=7&o,i(a,t,this),this.pos===r&&this.skip(o)}return t},readMessage:function(i,t){return this.readFields(i,t,this.readVarint()+this.pos)},readFixed32:function(){var i=g(this.buf,this.pos);return this.pos+=4,i},readSFixed32:function(){var i=B(this.buf,this.pos);return this.pos+=4,i},readFixed64:function(){var i=g(this.buf,this.pos)+g(this.buf,this.pos+4)*v;return this.pos+=8,i},readSFixed64:function(){var i=g(this.buf,this.pos)+B(this.buf,this.pos+4)*v;return this.pos+=8,i},readFloat:function(){var i=V(this.buf,this.pos,!0,23,4);return this.pos+=4,i},readDouble:function(){var i=V(this.buf,this.pos,!0,52,8);return this.pos+=8,i},readVarint:function(i){var t,e,o=this.buf;return t=127&(e=o[this.pos++]),e<128?t:(t|=(127&(e=o[this.pos++]))<<7,e<128?t:(t|=(127&(e=o[this.pos++]))<<14,e<128?t:(t|=(127&(e=o[this.pos++]))<<21,e<128?t:function(a,r,s){var n,h,d=s.buf;if(h=d[s.pos++],n=(112&h)>>4,h<128||(h=d[s.pos++],n|=(127&h)<<3,h<128)||(h=d[s.pos++],n|=(127&h)<<10,h<128)||(h=d[s.pos++],n|=(127&h)<<17,h<128)||(h=d[s.pos++],n|=(127&h)<<24,h<128)||(h=d[s.pos++],n|=(1&h)<<31,h<128))return F(a,n,r);throw new Error("Expected varint not more than 10 bytes")}(t|=(15&(e=o[this.pos]))<<28,i,this))))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var i=this.readVarint();return i%2==1?(i+1)/-2:i/2},readBoolean:function(){return Boolean(this.readVarint())},readString:function(){var i=this.readVarint()+this.pos,t=function(e,o,a){for(var r="",s=o;s<a;){var n,h,d,u=e[s],f=null,c=u>239?4:u>223?3:u>191?2:1;if(s+c>a)break;c===1?u<128&&(f=u):c===2?(192&(n=e[s+1]))==128&&(f=(31&u)<<6|63&n)<=127&&(f=null):c===3?(n=e[s+1],h=e[s+2],(192&n)==128&&(192&h)==128&&((f=(15&u)<<12|(63&n)<<6|63&h)<=2047||f>=55296&&f<=57343)&&(f=null)):c===4&&(n=e[s+1],h=e[s+2],d=e[s+3],(192&n)==128&&(192&h)==128&&(192&d)==128&&((f=(15&u)<<18|(63&n)<<12|(63&h)<<6|63&d)<=65535||f>=1114112)&&(f=null)),f===null?(f=65533,c=1):f>65535&&(f-=65536,r+=String.fromCharCode(f>>>10&1023|55296),f=56320|1023&f),r+=String.fromCharCode(f),s+=c}return r}(this.buf,this.pos,i);return this.pos=i,t},readBytes:function(){var i=this.readVarint()+this.pos,t=this.buf.subarray(this.pos,i);return this.pos=i,t},readPackedVarint:function(i,t){var e=w(this);for(i=i||[];this.pos<e;)i.push(this.readVarint(t));return i},readPackedSVarint:function(i){var t=w(this);for(i=i||[];this.pos<t;)i.push(this.readSVarint());return i},readPackedBoolean:function(i){var t=w(this);for(i=i||[];this.pos<t;)i.push(this.readBoolean());return i},readPackedFloat:function(i){var t=w(this);for(i=i||[];this.pos<t;)i.push(this.readFloat());return i},readPackedDouble:function(i){var t=w(this);for(i=i||[];this.pos<t;)i.push(this.readDouble());return i},readPackedFixed32:function(i){var t=w(this);for(i=i||[];this.pos<t;)i.push(this.readFixed32());return i},readPackedSFixed32:function(i){var t=w(this);for(i=i||[];this.pos<t;)i.push(this.readSFixed32());return i},readPackedFixed64:function(i){var t=w(this);for(i=i||[];this.pos<t;)i.push(this.readFixed64());return i},readPackedSFixed64:function(i){var t=w(this);for(i=i||[];this.pos<t;)i.push(this.readSFixed64());return i},skip:function(i){var t=7&i;if(t===p.Varint)for(;this.buf[this.pos++]>127;);else if(t===p.Bytes)this.pos=this.readVarint()+this.pos;else if(t===p.Fixed32)this.pos+=4;else{if(t!==p.Fixed64)throw new Error("Unimplemented type: "+t);this.pos+=8}},writeTag:function(i,t){this.writeVarint(i<<3|t)},realloc:function(i){for(var t=this.length||16;t<this.pos+i;)t*=2;if(t!==this.length){var e=new Uint8Array(t);e.set(this.buf),this.buf=e,this.length=t}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(i){this.realloc(4),b(this.buf,i,this.pos),this.pos+=4},writeSFixed32:function(i){this.realloc(4),b(this.buf,i,this.pos),this.pos+=4},writeFixed64:function(i){this.realloc(8),b(this.buf,-1&i,this.pos),b(this.buf,Math.floor(i*S),this.pos+4),this.pos+=8},writeSFixed64:function(i){this.realloc(8),b(this.buf,-1&i,this.pos),b(this.buf,Math.floor(i*S),this.pos+4),this.pos+=8},writeVarint:function(i){(i=+i||0)>268435455||i<0?function(t,e){var o,a;if(t>=0?(o=t%4294967296|0,a=t/4294967296|0):(a=~(-t/4294967296),4294967295^(o=~(-t%4294967296))?o=o+1|0:(o=0,a=a+1|0)),t>=18446744073709552e3||t<-18446744073709552e3)throw new Error("Given varint doesn't fit into 10 bytes");e.realloc(10),function(r,s,n){n.buf[n.pos++]=127&r|128,r>>>=7,n.buf[n.pos++]=127&r|128,r>>>=7,n.buf[n.pos++]=127&r|128,r>>>=7,n.buf[n.pos++]=127&r|128,r>>>=7,n.buf[n.pos]=127&r}(o,0,e),function(r,s){var n=(7&r)<<4;s.buf[s.pos++]|=n|((r>>>=3)?128:0),r&&(s.buf[s.pos++]=127&r|((r>>>=7)?128:0),r&&(s.buf[s.pos++]=127&r|((r>>>=7)?128:0),r&&(s.buf[s.pos++]=127&r|((r>>>=7)?128:0),r&&(s.buf[s.pos++]=127&r|((r>>>=7)?128:0),r&&(s.buf[s.pos++]=127&r)))))}(a,e)}(i,this):(this.realloc(4),this.buf[this.pos++]=127&i|(i>127?128:0),i<=127||(this.buf[this.pos++]=127&(i>>>=7)|(i>127?128:0),i<=127||(this.buf[this.pos++]=127&(i>>>=7)|(i>127?128:0),i<=127||(this.buf[this.pos++]=i>>>7&127))))},writeSVarint:function(i){this.writeVarint(i<0?2*-i-1:2*i)},writeBoolean:function(i){this.writeVarint(Boolean(i))},writeString:function(i){i=String(i),this.realloc(4*i.length),this.pos++;var t=this.pos;this.pos=function(o,a,r){for(var s,n,h=0;h<a.length;h++){if((s=a.charCodeAt(h))>55295&&s<57344){if(!n){s>56319||h+1===a.length?(o[r++]=239,o[r++]=191,o[r++]=189):n=s;continue}if(s<56320){o[r++]=239,o[r++]=191,o[r++]=189,n=s;continue}s=n-55296<<10|s-56320|65536,n=null}else n&&(o[r++]=239,o[r++]=191,o[r++]=189,n=null);s<128?o[r++]=s:(s<2048?o[r++]=s>>6|192:(s<65536?o[r++]=s>>12|224:(o[r++]=s>>18|240,o[r++]=s>>12&63|128),o[r++]=s>>6&63|128),o[r++]=63&s|128)}return r}(this.buf,i,this.pos);var e=this.pos-t;e>=128&&y(t,e,this),this.pos=t-1,this.writeVarint(e),this.pos+=e},writeFloat:function(i){this.realloc(4),M(this.buf,i,this.pos,!0,23,4),this.pos+=4},writeDouble:function(i){this.realloc(8),M(this.buf,i,this.pos,!0,52,8),this.pos+=8},writeBytes:function(i){var t=i.length;this.writeVarint(t),this.realloc(t);for(var e=0;e<t;e++)this.buf[this.pos++]=i[e]},writeRawMessage:function(i,t){this.pos++;var e=this.pos;i(t,this);var o=this.pos-e;o>=128&&y(e,o,this),this.pos=e-1,this.writeVarint(o),this.pos+=o},writeMessage:function(i,t,e){this.writeTag(i,p.Bytes),this.writeRawMessage(t,e)},writePackedVarint:function(i,t){this.writeMessage(i,P,t)},writePackedSVarint:function(i,t){this.writeMessage(i,T,t)},writePackedBoolean:function(i,t){this.writeMessage(i,m,t)},writePackedFloat:function(i,t){this.writeMessage(i,D,t)},writePackedDouble:function(i,t){this.writeMessage(i,N,t)},writePackedFixed32:function(i,t){this.writeMessage(i,A,t)},writePackedSFixed32:function(i,t){this.writeMessage(i,C,t)},writePackedFixed64:function(i,t){this.writeMessage(i,E,t)},writePackedSFixed64:function(i,t){this.writeMessage(i,U,t)},writeBytesField:function(i,t){this.writeTag(i,p.Bytes),this.writeBytes(t)},writeFixed32Field:function(i,t){this.writeTag(i,p.Fixed32),this.writeFixed32(t)},writeSFixed32Field:function(i,t){this.writeTag(i,p.Fixed32),this.writeSFixed32(t)},writeFixed64Field:function(i,t){this.writeTag(i,p.Fixed64),this.writeFixed64(t)},writeSFixed64Field:function(i,t){this.writeTag(i,p.Fixed64),this.writeSFixed64(t)},writeVarintField:function(i,t){this.writeTag(i,p.Varint),this.writeVarint(t)},writeSVarintField:function(i,t){this.writeTag(i,p.Varint),this.writeSVarint(t)},writeStringField:function(i,t){this.writeTag(i,p.Bytes),this.writeString(t)},writeFloatField:function(i,t){this.writeTag(i,p.Fixed32),this.writeFloat(t)},writeDoubleField:function(i,t){this.writeTag(i,p.Fixed64),this.writeDouble(t)},writeBooleanField:function(i,t){this.writeVarintField(i,Boolean(t))}},k.Pbf=p});