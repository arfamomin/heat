(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const nc="182",wd=0,dh=1,Ad=2,Eo=1,Cd=2,Qr=3,Ci=0,un=1,Sn=2,ui=0,Er=1,ph=2,mh=3,_h=4,Pd=5,Wi=100,Rd=101,Ld=102,Dd=103,Id=104,Nd=200,Ud=201,Od=202,Fd=203,tl=204,el=205,Bd=206,zd=207,kd=208,Hd=209,Vd=210,Gd=211,Wd=212,Xd=213,Zd=214,nl=0,il=1,rl=2,wr=3,sl=4,ol=5,al=6,ll=7,ic=0,qd=1,Yd=2,Zn=0,Du=1,Iu=2,Nu=3,Uu=4,Ou=5,Fu=6,Bu=7,zu=300,Ki=301,Ar=302,cl=303,hl=304,Fo=306,ul=1e3,ci=1001,fl=1002,Ye=1003,Jd=1004,ks=1005,$e=1006,pa=1007,Zi=1008,pn=1009,ku=1010,Hu=1011,hs=1012,rc=1013,Kn=1014,Wn=1015,di=1016,sc=1017,oc=1018,us=1020,Vu=35902,Gu=35899,Wu=1021,Xu=1022,In=1023,pi=1026,qi=1027,Zu=1028,ac=1029,Cr=1030,lc=1031,cc=1033,bo=33776,To=33777,wo=33778,Ao=33779,dl=35840,pl=35841,ml=35842,_l=35843,gl=36196,vl=37492,xl=37496,yl=37488,Sl=37489,Ml=37490,El=37491,bl=37808,Tl=37809,wl=37810,Al=37811,Cl=37812,Pl=37813,Rl=37814,Ll=37815,Dl=37816,Il=37817,Nl=37818,Ul=37819,Ol=37820,Fl=37821,Bl=36492,zl=36494,kl=36495,Hl=36283,Vl=36284,Gl=36285,Wl=36286,Kd=3200,qu=0,jd=1,bi="",xn="srgb",Pr="srgb-linear",Po="linear",Ee="srgb",ar=7680,gh=519,$d=512,Qd=513,tp=514,hc=515,ep=516,np=517,uc=518,ip=519,Xl=35044,vh="300 es",Xn=2e3,Ro=2001;function Yu(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Lo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function rp(){const r=Lo("canvas");return r.style.display="block",r}const xh={};function Do(...r){const t="THREE."+r.shift();console.log(t,...r)}function ne(...r){const t="THREE."+r.shift();console.warn(t,...r)}function xe(...r){const t="THREE."+r.shift();console.error(t,...r)}function fs(...r){const t=r.join(" ");t in xh||(xh[t]=!0,ne(...r))}function sp(r,t,e){return new Promise(function(i,s){function a(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}class Dr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yh=1234567;const br=Math.PI/180,ds=180/Math.PI;function qn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ke[r&255]+Ke[r>>8&255]+Ke[r>>16&255]+Ke[r>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]).toLowerCase()}function ae(r,t,e){return Math.max(t,Math.min(e,r))}function fc(r,t){return(r%t+t)%t}function op(r,t,e,i,s){return i+(r-t)*(s-i)/(e-t)}function ap(r,t,e){return r!==t?(e-r)/(t-r):0}function rs(r,t,e){return(1-e)*r+e*t}function lp(r,t,e,i){return rs(r,t,1-Math.exp(-e*i))}function cp(r,t=1){return t-Math.abs(fc(r,t*2)-t)}function hp(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function up(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function fp(r,t){return r+Math.floor(Math.random()*(t-r+1))}function dp(r,t){return r+Math.random()*(t-r)}function pp(r){return r*(.5-Math.random())}function mp(r){r!==void 0&&(yh=r);let t=yh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _p(r){return r*br}function gp(r){return r*ds}function vp(r){return(r&r-1)===0&&r!==0}function xp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function yp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Sp(r,t,e,i,s){const a=Math.cos,c=Math.sin,h=a(e/2),u=c(e/2),d=a((t+i)/2),p=c((t+i)/2),m=a((t-i)/2),g=c((t-i)/2),x=a((i-t)/2),S=c((i-t)/2);switch(s){case"XYX":r.set(h*p,u*m,u*g,h*d);break;case"YZY":r.set(u*g,h*p,u*m,h*d);break;case"ZXZ":r.set(u*m,u*g,h*p,h*d);break;case"XZX":r.set(h*p,u*S,u*x,h*d);break;case"YXY":r.set(u*x,h*p,u*S,h*d);break;case"ZYZ":r.set(u*S,u*x,h*p,h*d);break;default:ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Dn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function be(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ju={DEG2RAD:br,RAD2DEG:ds,generateUUID:qn,clamp:ae,euclideanModulo:fc,mapLinear:op,inverseLerp:ap,lerp:rs,damp:lp,pingpong:cp,smoothstep:hp,smootherstep:up,randInt:fp,randFloat:dp,randFloatSpread:pp,seededRandom:mp,degToRad:_p,radToDeg:gp,isPowerOfTwo:vp,ceilPowerOfTwo:xp,floorPowerOfTwo:yp,setQuaternionFromProperEuler:Sp,normalize:be,denormalize:Dn};class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),a=this.x-t.x,c=this.y-t.y;return this.x=a*i-c*s+t.x,this.y=a*s+c*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,a,c,h){let u=i[s+0],d=i[s+1],p=i[s+2],m=i[s+3],g=a[c+0],x=a[c+1],S=a[c+2],E=a[c+3];if(h<=0){t[e+0]=u,t[e+1]=d,t[e+2]=p,t[e+3]=m;return}if(h>=1){t[e+0]=g,t[e+1]=x,t[e+2]=S,t[e+3]=E;return}if(m!==E||u!==g||d!==x||p!==S){let y=u*g+d*x+p*S+m*E;y<0&&(g=-g,x=-x,S=-S,E=-E,y=-y);let v=1-h;if(y<.9995){const D=Math.acos(y),C=Math.sin(D);v=Math.sin(v*D)/C,h=Math.sin(h*D)/C,u=u*v+g*h,d=d*v+x*h,p=p*v+S*h,m=m*v+E*h}else{u=u*v+g*h,d=d*v+x*h,p=p*v+S*h,m=m*v+E*h;const D=1/Math.sqrt(u*u+d*d+p*p+m*m);u*=D,d*=D,p*=D,m*=D}}t[e]=u,t[e+1]=d,t[e+2]=p,t[e+3]=m}static multiplyQuaternionsFlat(t,e,i,s,a,c){const h=i[s],u=i[s+1],d=i[s+2],p=i[s+3],m=a[c],g=a[c+1],x=a[c+2],S=a[c+3];return t[e]=h*S+p*m+u*x-d*g,t[e+1]=u*S+p*g+d*m-h*x,t[e+2]=d*S+p*x+h*g-u*m,t[e+3]=p*S-h*m-u*g-d*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,a=t._z,c=t._order,h=Math.cos,u=Math.sin,d=h(i/2),p=h(s/2),m=h(a/2),g=u(i/2),x=u(s/2),S=u(a/2);switch(c){case"XYZ":this._x=g*p*m+d*x*S,this._y=d*x*m-g*p*S,this._z=d*p*S+g*x*m,this._w=d*p*m-g*x*S;break;case"YXZ":this._x=g*p*m+d*x*S,this._y=d*x*m-g*p*S,this._z=d*p*S-g*x*m,this._w=d*p*m+g*x*S;break;case"ZXY":this._x=g*p*m-d*x*S,this._y=d*x*m+g*p*S,this._z=d*p*S+g*x*m,this._w=d*p*m-g*x*S;break;case"ZYX":this._x=g*p*m-d*x*S,this._y=d*x*m+g*p*S,this._z=d*p*S-g*x*m,this._w=d*p*m+g*x*S;break;case"YZX":this._x=g*p*m+d*x*S,this._y=d*x*m+g*p*S,this._z=d*p*S-g*x*m,this._w=d*p*m-g*x*S;break;case"XZY":this._x=g*p*m-d*x*S,this._y=d*x*m-g*p*S,this._z=d*p*S+g*x*m,this._w=d*p*m+g*x*S;break;default:ne("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],a=e[8],c=e[1],h=e[5],u=e[9],d=e[2],p=e[6],m=e[10],g=i+h+m;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(p-u)*x,this._y=(a-d)*x,this._z=(c-s)*x}else if(i>h&&i>m){const x=2*Math.sqrt(1+i-h-m);this._w=(p-u)/x,this._x=.25*x,this._y=(s+c)/x,this._z=(a+d)/x}else if(h>m){const x=2*Math.sqrt(1+h-i-m);this._w=(a-d)/x,this._x=(s+c)/x,this._y=.25*x,this._z=(u+p)/x}else{const x=2*Math.sqrt(1+m-i-h);this._w=(c-s)/x,this._x=(a+d)/x,this._y=(u+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,a=t._z,c=t._w,h=e._x,u=e._y,d=e._z,p=e._w;return this._x=i*p+c*h+s*d-a*u,this._y=s*p+c*u+a*h-i*d,this._z=a*p+c*d+i*u-s*h,this._w=c*p-i*h-s*u-a*d,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let i=t._x,s=t._y,a=t._z,c=t._w,h=this.dot(t);h<0&&(i=-i,s=-s,a=-a,c=-c,h=-h);let u=1-e;if(h<.9995){const d=Math.acos(h),p=Math.sin(d);u=Math.sin(u*d)/p,e=Math.sin(e*d)/p,this._x=this._x*u+i*e,this._y=this._y*u+s*e,this._z=this._z*u+a*e,this._w=this._w*u+c*e,this._onChangeCallback()}else this._x=this._x*u+i*e,this._y=this._y*u+s*e,this._z=this._z*u+a*e,this._w=this._w*u+c*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,i=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*s,this.y=a[1]*e+a[4]*i+a[7]*s,this.z=a[2]*e+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=t.elements,c=1/(a[3]*e+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*s+a[12])*c,this.y=(a[1]*e+a[5]*i+a[9]*s+a[13])*c,this.z=(a[2]*e+a[6]*i+a[10]*s+a[14])*c,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,a=t.x,c=t.y,h=t.z,u=t.w,d=2*(c*s-h*i),p=2*(h*e-a*s),m=2*(a*i-c*e);return this.x=e+u*d+c*m-h*p,this.y=i+u*p+h*d-a*m,this.z=s+u*m+a*p-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s,this.y=a[1]*e+a[5]*i+a[9]*s,this.z=a[2]*e+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,a=t.z,c=e.x,h=e.y,u=e.z;return this.x=s*u-a*h,this.y=a*c-i*u,this.z=i*h-s*c,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ma.copy(this).projectOnVector(t),this.sub(ma)}reflect(t){return this.sub(ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ma=new z,Sh=new vs;class he{constructor(t,e,i,s,a,c,h,u,d){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,c,h,u,d)}set(t,e,i,s,a,c,h,u,d){const p=this.elements;return p[0]=t,p[1]=s,p[2]=h,p[3]=e,p[4]=a,p[5]=u,p[6]=i,p[7]=c,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,c=i[0],h=i[3],u=i[6],d=i[1],p=i[4],m=i[7],g=i[2],x=i[5],S=i[8],E=s[0],y=s[3],v=s[6],D=s[1],C=s[4],R=s[7],N=s[2],O=s[5],B=s[8];return a[0]=c*E+h*D+u*N,a[3]=c*y+h*C+u*O,a[6]=c*v+h*R+u*B,a[1]=d*E+p*D+m*N,a[4]=d*y+p*C+m*O,a[7]=d*v+p*R+m*B,a[2]=g*E+x*D+S*N,a[5]=g*y+x*C+S*O,a[8]=g*v+x*R+S*B,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],c=t[4],h=t[5],u=t[6],d=t[7],p=t[8];return e*c*p-e*h*d-i*a*p+i*h*u+s*a*d-s*c*u}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],c=t[4],h=t[5],u=t[6],d=t[7],p=t[8],m=p*c-h*d,g=h*u-p*a,x=d*a-c*u,S=e*m+i*g+s*x;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/S;return t[0]=m*E,t[1]=(s*d-p*i)*E,t[2]=(h*i-s*c)*E,t[3]=g*E,t[4]=(p*e-s*u)*E,t[5]=(s*a-h*e)*E,t[6]=x*E,t[7]=(i*u-d*e)*E,t[8]=(c*e-i*a)*E,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,a,c,h){const u=Math.cos(a),d=Math.sin(a);return this.set(i*u,i*d,-i*(u*c+d*h)+c+t,-s*d,s*u,-s*(-d*c+u*h)+h+e,0,0,1),this}scale(t,e){return this.premultiply(_a.makeScale(t,e)),this}rotate(t){return this.premultiply(_a.makeRotation(-t)),this}translate(t,e){return this.premultiply(_a.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _a=new he,Mh=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eh=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mp(){const r={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(s,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Ee&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ee&&(s.r=Tr(s.r),s.g=Tr(s.g),s.b=Tr(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?Po:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,c){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Pr]:{primaries:t,whitePoint:i,transfer:Po,toXYZ:Mh,fromXYZ:Eh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:t,whitePoint:i,transfer:Ee,toXYZ:Mh,fromXYZ:Eh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),r}const Se=Mp();function fi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Tr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let lr;class Ep{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{lr===void 0&&(lr=Lo("canvas")),lr.width=t.width,lr.height=t.height;const s=lr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=lr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Lo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=fi(a[c]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(fi(e[i]/255)*255):e[i]=fi(e[i]);return{data:e,width:t.width,height:t.height}}else return ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bp=0;class dc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=qn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,h=s.length;c<h;c++)s[c].isDataTexture?a.push(ga(s[c].image)):a.push(ga(s[c]))}else a=ga(s);i.url=a}return e||(t.images[this.uuid]=i),i}}function ga(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ep.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ne("Texture: Unable to serialize Texture."),{})}let Tp=0;const va=new z;class sn extends Dr{constructor(t=sn.DEFAULT_IMAGE,e=sn.DEFAULT_MAPPING,i=ci,s=ci,a=$e,c=Zi,h=In,u=pn,d=sn.DEFAULT_ANISOTROPY,p=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=qn(),this.name="",this.source=new dc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=u,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(va).x}get height(){return this.source.getSize(va).y}get depth(){return this.source.getSize(va).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){ne(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){ne(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ul:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case fl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ul:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case fl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=zu;sn.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,i=0,s=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=this.w,c=t.elements;return this.x=c[0]*e+c[4]*i+c[8]*s+c[12]*a,this.y=c[1]*e+c[5]*i+c[9]*s+c[13]*a,this.z=c[2]*e+c[6]*i+c[10]*s+c[14]*a,this.w=c[3]*e+c[7]*i+c[11]*s+c[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,a;const u=t.elements,d=u[0],p=u[4],m=u[8],g=u[1],x=u[5],S=u[9],E=u[2],y=u[6],v=u[10];if(Math.abs(p-g)<.01&&Math.abs(m-E)<.01&&Math.abs(S-y)<.01){if(Math.abs(p+g)<.1&&Math.abs(m+E)<.1&&Math.abs(S+y)<.1&&Math.abs(d+x+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const C=(d+1)/2,R=(x+1)/2,N=(v+1)/2,O=(p+g)/4,B=(m+E)/4,W=(S+y)/4;return C>R&&C>N?C<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(C),s=O/i,a=B/i):R>N?R<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(R),i=O/s,a=W/s):N<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(N),i=B/a,s=W/a),this.set(i,s,a,e),this}let D=Math.sqrt((y-S)*(y-S)+(m-E)*(m-E)+(g-p)*(g-p));return Math.abs(D)<.001&&(D=1),this.x=(y-S)/D,this.y=(m-E)/D,this.z=(g-p)/D,this.w=Math.acos((d+x+v-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wp extends Dr{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const s={width:t,height:e,depth:i.depth},a=new sn(s);this.textures=[];const c=i.count;for(let h=0;h<c;h++)this.textures[h]=a.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:$e,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new dc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends wp{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ku extends sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ap extends sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pi{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let c=0,h=a.count;c<h;c++)t.isMesh===!0?t.getVertexPosition(c,Pn):Pn.fromBufferAttribute(a,c),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hs.copy(i.boundingBox)),Hs.applyMatrix4(t.matrixWorld),this.union(Hs)}const s=t.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zr),Vs.subVectors(this.max,Zr),cr.subVectors(t.a,Zr),hr.subVectors(t.b,Zr),ur.subVectors(t.c,Zr),vi.subVectors(hr,cr),xi.subVectors(ur,hr),Oi.subVectors(cr,ur);let e=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Oi.z,Oi.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Oi.z,0,-Oi.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Oi.y,Oi.x,0];return!xa(e,cr,hr,ur,Vs)||(e=[1,0,0,0,1,0,0,0,1],!xa(e,cr,hr,ur,Vs))?!1:(Gs.crossVectors(vi,xi),e=[Gs.x,Gs.y,Gs.z],xa(e,cr,hr,ur,Vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ri=[new z,new z,new z,new z,new z,new z,new z,new z],Pn=new z,Hs=new Pi,cr=new z,hr=new z,ur=new z,vi=new z,xi=new z,Oi=new z,Zr=new z,Vs=new z,Gs=new z,Fi=new z;function xa(r,t,e,i,s){for(let a=0,c=r.length-3;a<=c;a+=3){Fi.fromArray(r,a);const h=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),u=t.dot(Fi),d=e.dot(Fi),p=i.dot(Fi);if(Math.max(-Math.max(u,d,p),Math.min(u,d,p))>h)return!1}return!0}const Cp=new Pi,qr=new z,ya=new z;class Ir{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Cp.setFromPoints(t).getCenter(i);let s=0;for(let a=0,c=t.length;a<c;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qr.subVectors(t,this.center);const e=qr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(qr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ya.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qr.copy(t.center).add(ya)),this.expandByPoint(qr.copy(t.center).sub(ya))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const si=new z,Sa=new z,Ws=new z,yi=new z,Ma=new z,Xs=new z,Ea=new z;class pc{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(si.copy(this.origin).addScaledVector(this.direction,e),si.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Sa.copy(t).add(e).multiplyScalar(.5),Ws.copy(e).sub(t).normalize(),yi.copy(this.origin).sub(Sa);const a=t.distanceTo(e)*.5,c=-this.direction.dot(Ws),h=yi.dot(this.direction),u=-yi.dot(Ws),d=yi.lengthSq(),p=Math.abs(1-c*c);let m,g,x,S;if(p>0)if(m=c*u-h,g=c*h-u,S=a*p,m>=0)if(g>=-S)if(g<=S){const E=1/p;m*=E,g*=E,x=m*(m+c*g+2*h)+g*(c*m+g+2*u)+d}else g=a,m=Math.max(0,-(c*g+h)),x=-m*m+g*(g+2*u)+d;else g=-a,m=Math.max(0,-(c*g+h)),x=-m*m+g*(g+2*u)+d;else g<=-S?(m=Math.max(0,-(-c*a+h)),g=m>0?-a:Math.min(Math.max(-a,-u),a),x=-m*m+g*(g+2*u)+d):g<=S?(m=0,g=Math.min(Math.max(-a,-u),a),x=g*(g+2*u)+d):(m=Math.max(0,-(c*a+h)),g=m>0?a:Math.min(Math.max(-a,-u),a),x=-m*m+g*(g+2*u)+d);else g=c>0?-a:a,m=Math.max(0,-(c*g+h)),x=-m*m+g*(g+2*u)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Sa).addScaledVector(Ws,g),x}intersectSphere(t,e){si.subVectors(t.center,this.origin);const i=si.dot(this.direction),s=si.dot(si)-i*i,a=t.radius*t.radius;if(s>a)return null;const c=Math.sqrt(a-s),h=i-c,u=i+c;return u<0?null:h<0?this.at(u,e):this.at(h,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,a,c,h,u;const d=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,g=this.origin;return d>=0?(i=(t.min.x-g.x)*d,s=(t.max.x-g.x)*d):(i=(t.max.x-g.x)*d,s=(t.min.x-g.x)*d),p>=0?(a=(t.min.y-g.y)*p,c=(t.max.y-g.y)*p):(a=(t.max.y-g.y)*p,c=(t.min.y-g.y)*p),i>c||a>s||((a>i||isNaN(i))&&(i=a),(c<s||isNaN(s))&&(s=c),m>=0?(h=(t.min.z-g.z)*m,u=(t.max.z-g.z)*m):(h=(t.max.z-g.z)*m,u=(t.min.z-g.z)*m),i>u||h>s)||((h>i||i!==i)&&(i=h),(u<s||s!==s)&&(s=u),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,si)!==null}intersectTriangle(t,e,i,s,a){Ma.subVectors(e,t),Xs.subVectors(i,t),Ea.crossVectors(Ma,Xs);let c=this.direction.dot(Ea),h;if(c>0){if(s)return null;h=1}else if(c<0)h=-1,c=-c;else return null;yi.subVectors(this.origin,t);const u=h*this.direction.dot(Xs.crossVectors(yi,Xs));if(u<0)return null;const d=h*this.direction.dot(Ma.cross(yi));if(d<0||u+d>c)return null;const p=-h*yi.dot(Ea);return p<0?null:this.at(p/c,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(t,e,i,s,a,c,h,u,d,p,m,g,x,S,E,y){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,c,h,u,d,p,m,g,x,S,E,y)}set(t,e,i,s,a,c,h,u,d,p,m,g,x,S,E,y){const v=this.elements;return v[0]=t,v[4]=e,v[8]=i,v[12]=s,v[1]=a,v[5]=c,v[9]=h,v[13]=u,v[2]=d,v[6]=p,v[10]=m,v[14]=g,v[3]=x,v[7]=S,v[11]=E,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,s=1/fr.setFromMatrixColumn(t,0).length(),a=1/fr.setFromMatrixColumn(t,1).length(),c=1/fr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*c,e[9]=i[9]*c,e[10]=i[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,a=t.z,c=Math.cos(i),h=Math.sin(i),u=Math.cos(s),d=Math.sin(s),p=Math.cos(a),m=Math.sin(a);if(t.order==="XYZ"){const g=c*p,x=c*m,S=h*p,E=h*m;e[0]=u*p,e[4]=-u*m,e[8]=d,e[1]=x+S*d,e[5]=g-E*d,e[9]=-h*u,e[2]=E-g*d,e[6]=S+x*d,e[10]=c*u}else if(t.order==="YXZ"){const g=u*p,x=u*m,S=d*p,E=d*m;e[0]=g+E*h,e[4]=S*h-x,e[8]=c*d,e[1]=c*m,e[5]=c*p,e[9]=-h,e[2]=x*h-S,e[6]=E+g*h,e[10]=c*u}else if(t.order==="ZXY"){const g=u*p,x=u*m,S=d*p,E=d*m;e[0]=g-E*h,e[4]=-c*m,e[8]=S+x*h,e[1]=x+S*h,e[5]=c*p,e[9]=E-g*h,e[2]=-c*d,e[6]=h,e[10]=c*u}else if(t.order==="ZYX"){const g=c*p,x=c*m,S=h*p,E=h*m;e[0]=u*p,e[4]=S*d-x,e[8]=g*d+E,e[1]=u*m,e[5]=E*d+g,e[9]=x*d-S,e[2]=-d,e[6]=h*u,e[10]=c*u}else if(t.order==="YZX"){const g=c*u,x=c*d,S=h*u,E=h*d;e[0]=u*p,e[4]=E-g*m,e[8]=S*m+x,e[1]=m,e[5]=c*p,e[9]=-h*p,e[2]=-d*p,e[6]=x*m+S,e[10]=g-E*m}else if(t.order==="XZY"){const g=c*u,x=c*d,S=h*u,E=h*d;e[0]=u*p,e[4]=-m,e[8]=d*p,e[1]=g*m+E,e[5]=c*p,e[9]=x*m-S,e[2]=S*m-x,e[6]=h*p,e[10]=E*m+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pp,t,Rp)}lookAt(t,e,i){const s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Si.crossVectors(i,fn),Si.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Si.crossVectors(i,fn)),Si.normalize(),Zs.crossVectors(fn,Si),s[0]=Si.x,s[4]=Zs.x,s[8]=fn.x,s[1]=Si.y,s[5]=Zs.y,s[9]=fn.y,s[2]=Si.z,s[6]=Zs.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,c=i[0],h=i[4],u=i[8],d=i[12],p=i[1],m=i[5],g=i[9],x=i[13],S=i[2],E=i[6],y=i[10],v=i[14],D=i[3],C=i[7],R=i[11],N=i[15],O=s[0],B=s[4],W=s[8],w=s[12],A=s[1],F=s[5],Y=s[9],j=s[13],st=s[2],it=s[6],Q=s[10],Z=s[14],J=s[3],Tt=s[7],rt=s[11],ft=s[15];return a[0]=c*O+h*A+u*st+d*J,a[4]=c*B+h*F+u*it+d*Tt,a[8]=c*W+h*Y+u*Q+d*rt,a[12]=c*w+h*j+u*Z+d*ft,a[1]=p*O+m*A+g*st+x*J,a[5]=p*B+m*F+g*it+x*Tt,a[9]=p*W+m*Y+g*Q+x*rt,a[13]=p*w+m*j+g*Z+x*ft,a[2]=S*O+E*A+y*st+v*J,a[6]=S*B+E*F+y*it+v*Tt,a[10]=S*W+E*Y+y*Q+v*rt,a[14]=S*w+E*j+y*Z+v*ft,a[3]=D*O+C*A+R*st+N*J,a[7]=D*B+C*F+R*it+N*Tt,a[11]=D*W+C*Y+R*Q+N*rt,a[15]=D*w+C*j+R*Z+N*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],a=t[12],c=t[1],h=t[5],u=t[9],d=t[13],p=t[2],m=t[6],g=t[10],x=t[14],S=t[3],E=t[7],y=t[11],v=t[15],D=u*x-d*g,C=h*x-d*m,R=h*g-u*m,N=c*x-d*p,O=c*g-u*p,B=c*m-h*p;return e*(E*D-y*C+v*R)-i*(S*D-y*N+v*O)+s*(S*C-E*N+v*B)-a*(S*R-E*O+y*B)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],c=t[4],h=t[5],u=t[6],d=t[7],p=t[8],m=t[9],g=t[10],x=t[11],S=t[12],E=t[13],y=t[14],v=t[15],D=m*y*d-E*g*d+E*u*x-h*y*x-m*u*v+h*g*v,C=S*g*d-p*y*d-S*u*x+c*y*x+p*u*v-c*g*v,R=p*E*d-S*m*d+S*h*x-c*E*x-p*h*v+c*m*v,N=S*m*u-p*E*u-S*h*g+c*E*g+p*h*y-c*m*y,O=e*D+i*C+s*R+a*N;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/O;return t[0]=D*B,t[1]=(E*g*a-m*y*a-E*s*x+i*y*x+m*s*v-i*g*v)*B,t[2]=(h*y*a-E*u*a+E*s*d-i*y*d-h*s*v+i*u*v)*B,t[3]=(m*u*a-h*g*a-m*s*d+i*g*d+h*s*x-i*u*x)*B,t[4]=C*B,t[5]=(p*y*a-S*g*a+S*s*x-e*y*x-p*s*v+e*g*v)*B,t[6]=(S*u*a-c*y*a-S*s*d+e*y*d+c*s*v-e*u*v)*B,t[7]=(c*g*a-p*u*a+p*s*d-e*g*d-c*s*x+e*u*x)*B,t[8]=R*B,t[9]=(S*m*a-p*E*a-S*i*x+e*E*x+p*i*v-e*m*v)*B,t[10]=(c*E*a-S*h*a+S*i*d-e*E*d-c*i*v+e*h*v)*B,t[11]=(p*h*a-c*m*a-p*i*d+e*m*d+c*i*x-e*h*x)*B,t[12]=N*B,t[13]=(p*E*s-S*m*s+S*i*g-e*E*g-p*i*y+e*m*y)*B,t[14]=(S*h*s-c*E*s-S*i*u+e*E*u+c*i*y-e*h*y)*B,t[15]=(c*m*s-p*h*s+p*i*u-e*m*u-c*i*g+e*h*g)*B,this}scale(t){const e=this.elements,i=t.x,s=t.y,a=t.z;return e[0]*=i,e[4]*=s,e[8]*=a,e[1]*=i,e[5]*=s,e[9]*=a,e[2]*=i,e[6]*=s,e[10]*=a,e[3]*=i,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),a=1-i,c=t.x,h=t.y,u=t.z,d=a*c,p=a*h;return this.set(d*c+i,d*h-s*u,d*u+s*h,0,d*h+s*u,p*h+i,p*u-s*c,0,d*u-s*h,p*u+s*c,a*u*u+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,a,c){return this.set(1,i,a,0,t,1,c,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,a=e._x,c=e._y,h=e._z,u=e._w,d=a+a,p=c+c,m=h+h,g=a*d,x=a*p,S=a*m,E=c*p,y=c*m,v=h*m,D=u*d,C=u*p,R=u*m,N=i.x,O=i.y,B=i.z;return s[0]=(1-(E+v))*N,s[1]=(x+R)*N,s[2]=(S-C)*N,s[3]=0,s[4]=(x-R)*O,s[5]=(1-(g+v))*O,s[6]=(y+D)*O,s[7]=0,s[8]=(S+C)*B,s[9]=(y-D)*B,s[10]=(1-(g+E))*B,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;if(t.x=s[12],t.y=s[13],t.z=s[14],this.determinant()===0)return i.set(1,1,1),e.identity(),this;let a=fr.set(s[0],s[1],s[2]).length();const c=fr.set(s[4],s[5],s[6]).length(),h=fr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),Rn.copy(this);const d=1/a,p=1/c,m=1/h;return Rn.elements[0]*=d,Rn.elements[1]*=d,Rn.elements[2]*=d,Rn.elements[4]*=p,Rn.elements[5]*=p,Rn.elements[6]*=p,Rn.elements[8]*=m,Rn.elements[9]*=m,Rn.elements[10]*=m,e.setFromRotationMatrix(Rn),i.x=a,i.y=c,i.z=h,this}makePerspective(t,e,i,s,a,c,h=Xn,u=!1){const d=this.elements,p=2*a/(e-t),m=2*a/(i-s),g=(e+t)/(e-t),x=(i+s)/(i-s);let S,E;if(u)S=a/(c-a),E=c*a/(c-a);else if(h===Xn)S=-(c+a)/(c-a),E=-2*c*a/(c-a);else if(h===Ro)S=-c/(c-a),E=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=p,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=m,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,i,s,a,c,h=Xn,u=!1){const d=this.elements,p=2/(e-t),m=2/(i-s),g=-(e+t)/(e-t),x=-(i+s)/(i-s);let S,E;if(u)S=1/(c-a),E=c/(c-a);else if(h===Xn)S=-2/(c-a),E=-(c+a)/(c-a);else if(h===Ro)S=-1/(c-a),E=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=p,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=m,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const fr=new z,Rn=new Re,Pp=new z(0,0,0),Rp=new z(1,1,1),Si=new z,Zs=new z,fn=new z,bh=new Re,Th=new vs;class jn{constructor(t=0,e=0,i=0,s=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,a=s[0],c=s[4],h=s[8],u=s[1],d=s[5],p=s[9],m=s[2],g=s[6],x=s[10];switch(e){case"XYZ":this._y=Math.asin(ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(u,d)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(ae(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,x),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(u,a));break;case"ZYX":this._y=Math.asin(-ae(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(u,a)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(h,a)):(this._x=Math.atan2(-p,x),this._y=0);break;default:ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return bh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Th.setFromEuler(this),this.setFromQuaternion(Th,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class mc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Lp=0;const wh=new z,dr=new vs,oi=new Re,qs=new z,Yr=new z,Dp=new z,Ip=new vs,Ah=new z(1,0,0),Ch=new z(0,1,0),Ph=new z(0,0,1),Rh={type:"added"},Np={type:"removed"},pr={type:"childadded",child:null},ba={type:"childremoved",child:null};class Je extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Je.DEFAULT_UP.clone();const t=new z,e=new jn,i=new vs,s=new z(1,1,1);function a(){i.setFromEuler(e,!1)}function c(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Re},normalMatrix:{value:new he}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=Je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return dr.setFromAxisAngle(t,e),this.quaternion.multiply(dr),this}rotateOnWorldAxis(t,e){return dr.setFromAxisAngle(t,e),this.quaternion.premultiply(dr),this}rotateX(t){return this.rotateOnAxis(Ah,t)}rotateY(t){return this.rotateOnAxis(Ch,t)}rotateZ(t){return this.rotateOnAxis(Ph,t)}translateOnAxis(t,e){return wh.copy(t).applyQuaternion(this.quaternion),this.position.add(wh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ah,t)}translateY(t){return this.translateOnAxis(Ch,t)}translateZ(t){return this.translateOnAxis(Ph,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?qs.copy(t):qs.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Yr,qs,this.up):oi.lookAt(qs,Yr,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),dr.setFromRotationMatrix(oi),this.quaternion.premultiply(dr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(xe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rh),pr.child=t,this.dispatchEvent(pr),pr.child=null):xe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Np),ba.child=t,this.dispatchEvent(ba),ba.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rh),pr.child=t,this.dispatchEvent(pr),pr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,t,Dp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,Ip,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(h=>({...h})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(h,u){return h[u.uuid]===void 0&&(h[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const u=h.shapes;if(Array.isArray(u))for(let d=0,p=u.length;d<p;d++){const m=u[d];a(t.shapes,m)}else a(t.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let u=0,d=this.material.length;u<d;u++)h.push(a(t.materials,this.material[u]));s.material=h}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let h=0;h<this.children.length;h++)s.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let h=0;h<this.animations.length;h++){const u=this.animations[h];s.animations.push(a(t.animations,u))}}if(e){const h=c(t.geometries),u=c(t.materials),d=c(t.textures),p=c(t.images),m=c(t.shapes),g=c(t.skeletons),x=c(t.animations),S=c(t.nodes);h.length>0&&(i.geometries=h),u.length>0&&(i.materials=u),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),m.length>0&&(i.shapes=m),g.length>0&&(i.skeletons=g),x.length>0&&(i.animations=x),S.length>0&&(i.nodes=S)}return i.object=s,i;function c(h){const u=[];for(const d in h){const p=h[d];delete p.metadata,u.push(p)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Je.DEFAULT_UP=new z(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new z,ai=new z,Ta=new z,li=new z,mr=new z,_r=new z,Lh=new z,wa=new z,Aa=new z,Ca=new z,Pa=new we,Ra=new we,La=new we;class Mn{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ln.subVectors(t,e),s.cross(Ln);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,i,s,a){Ln.subVectors(s,e),ai.subVectors(i,e),Ta.subVectors(t,e);const c=Ln.dot(Ln),h=Ln.dot(ai),u=Ln.dot(Ta),d=ai.dot(ai),p=ai.dot(Ta),m=c*d-h*h;if(m===0)return a.set(0,0,0),null;const g=1/m,x=(d*u-h*p)*g,S=(c*p-h*u)*g;return a.set(1-x-S,S,x)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,e,i,s,a,c,h,u){return this.getBarycoord(t,e,i,s,li)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(a,li.x),u.addScaledVector(c,li.y),u.addScaledVector(h,li.z),u)}static getInterpolatedAttribute(t,e,i,s,a,c){return Pa.setScalar(0),Ra.setScalar(0),La.setScalar(0),Pa.fromBufferAttribute(t,e),Ra.fromBufferAttribute(t,i),La.fromBufferAttribute(t,s),c.setScalar(0),c.addScaledVector(Pa,a.x),c.addScaledVector(Ra,a.y),c.addScaledVector(La,a.z),c}static isFrontFacing(t,e,i,s){return Ln.subVectors(i,e),ai.subVectors(t,e),Ln.cross(ai).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Ln.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,a){return Mn.getInterpolation(t,this.a,this.b,this.c,e,i,s,a)}containsPoint(t){return Mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,a=this.c;let c,h;mr.subVectors(s,i),_r.subVectors(a,i),wa.subVectors(t,i);const u=mr.dot(wa),d=_r.dot(wa);if(u<=0&&d<=0)return e.copy(i);Aa.subVectors(t,s);const p=mr.dot(Aa),m=_r.dot(Aa);if(p>=0&&m<=p)return e.copy(s);const g=u*m-p*d;if(g<=0&&u>=0&&p<=0)return c=u/(u-p),e.copy(i).addScaledVector(mr,c);Ca.subVectors(t,a);const x=mr.dot(Ca),S=_r.dot(Ca);if(S>=0&&x<=S)return e.copy(a);const E=x*d-u*S;if(E<=0&&d>=0&&S<=0)return h=d/(d-S),e.copy(i).addScaledVector(_r,h);const y=p*S-x*m;if(y<=0&&m-p>=0&&x-S>=0)return Lh.subVectors(a,s),h=(m-p)/(m-p+(x-S)),e.copy(s).addScaledVector(Lh,h);const v=1/(y+E+g);return c=E*v,h=g*v,e.copy(i).addScaledVector(mr,c).addScaledVector(_r,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function Da(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class ye{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Se.workingColorSpace){return this.r=t,this.g=e,this.b=i,Se.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Se.workingColorSpace){if(t=fc(t,1),e=ae(e,0,1),i=ae(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,c=2*i-a;this.r=Da(c,a,t+1/3),this.g=Da(c,a,t),this.b=Da(c,a,t-1/3)}return Se.colorSpaceToWorking(this,s),this}setStyle(t,e=xn){function i(a){a!==void 0&&parseFloat(a)<1&&ne("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const c=s[1],h=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:ne("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(a,16),e);ne("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xn){const i=ju[t.toLowerCase()];return i!==void 0?this.setHex(i,e):ne("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}copyLinearToSRGB(t){return this.r=Tr(t.r),this.g=Tr(t.g),this.b=Tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xn){return Se.workingToColorSpace(je.copy(this),t),Math.round(ae(je.r*255,0,255))*65536+Math.round(ae(je.g*255,0,255))*256+Math.round(ae(je.b*255,0,255))}getHexString(t=xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.workingToColorSpace(je.copy(this),e);const i=je.r,s=je.g,a=je.b,c=Math.max(i,s,a),h=Math.min(i,s,a);let u,d;const p=(h+c)/2;if(h===c)u=0,d=0;else{const m=c-h;switch(d=p<=.5?m/(c+h):m/(2-c-h),c){case i:u=(s-a)/m+(s<a?6:0);break;case s:u=(a-i)/m+2;break;case a:u=(i-s)/m+4;break}u/=6}return t.h=u,t.s=d,t.l=p,t}getRGB(t,e=Se.workingColorSpace){return Se.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=xn){Se.workingToColorSpace(je.copy(this),t);const e=je.r,i=je.g,s=je.b;return t!==xn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Mi),this.setHSL(Mi.h+t,Mi.s+e,Mi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Mi),t.getHSL(Ys);const i=rs(Mi.h,Ys.h,e),s=rs(Mi.s,Ys.s,e),a=rs(Mi.l,Ys.l,e);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*s,this.g=a[1]*e+a[4]*i+a[7]*s,this.b=a[2]*e+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new ye;ye.NAMES=ju;let Up=0;class Nr extends Dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=Er,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tl,this.blendDst=el,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){ne(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){ne(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(i.blending=this.blending),this.side!==Ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tl&&(i.blendSrc=this.blendSrc),this.blendDst!==el&&(i.blendDst=this.blendDst),this.blendEquation!==Wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const c=[];for(const h in a){const u=a[h];delete u.metadata,c.push(u)}return c}if(e){const a=s(t.textures),c=s(t.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class _c extends Nr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Oe=new z,Js=new Ct;let Op=0;class Nn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Op++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Xl,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Js.fromBufferAttribute(this,e),Js.applyMatrix3(t),this.setXY(e,Js.x,Js.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Dn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=be(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array),a=be(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xl&&(t.usage=this.usage),t}}class $u extends Nn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Qu extends Nn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Fe extends Nn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Fp=0;const vn=new Re,Ia=new Je,gr=new z,dn=new Pi,Jr=new Pi,Ge=new z;class on extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yu(t)?Qu:$u)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new he().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,i){return vn.makeTranslation(t,e,i),this.applyMatrix4(vn),this}scale(t,e,i){return vn.makeScale(t,e,i),this.applyMatrix4(vn),this}lookAt(t){return Ia.lookAt(t),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,a=t.length;s<a;s++){const c=t[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Fe(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const a=t[s];e.setXYZ(s,a.x,a.y,a.z||0)}t.length>e.count&&ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const a=e[i];dn.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ir);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let a=0,c=e.length;a<c;a++){const h=e[a];Jr.setFromBufferAttribute(h),this.morphTargetsRelative?(Ge.addVectors(dn.min,Jr.min),dn.expandByPoint(Ge),Ge.addVectors(dn.max,Jr.max),dn.expandByPoint(Ge)):(dn.expandByPoint(Jr.min),dn.expandByPoint(Jr.max))}dn.getCenter(i);let s=0;for(let a=0,c=t.count;a<c;a++)Ge.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(Ge));if(e)for(let a=0,c=e.length;a<c;a++){const h=e[a],u=this.morphTargetsRelative;for(let d=0,p=h.count;d<p;d++)Ge.fromBufferAttribute(h,d),u&&(gr.fromBufferAttribute(t,d),Ge.add(gr)),s=Math.max(s,i.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),h=[],u=[];for(let W=0;W<i.count;W++)h[W]=new z,u[W]=new z;const d=new z,p=new z,m=new z,g=new Ct,x=new Ct,S=new Ct,E=new z,y=new z;function v(W,w,A){d.fromBufferAttribute(i,W),p.fromBufferAttribute(i,w),m.fromBufferAttribute(i,A),g.fromBufferAttribute(a,W),x.fromBufferAttribute(a,w),S.fromBufferAttribute(a,A),p.sub(d),m.sub(d),x.sub(g),S.sub(g);const F=1/(x.x*S.y-S.x*x.y);isFinite(F)&&(E.copy(p).multiplyScalar(S.y).addScaledVector(m,-x.y).multiplyScalar(F),y.copy(m).multiplyScalar(x.x).addScaledVector(p,-S.x).multiplyScalar(F),h[W].add(E),h[w].add(E),h[A].add(E),u[W].add(y),u[w].add(y),u[A].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let W=0,w=D.length;W<w;++W){const A=D[W],F=A.start,Y=A.count;for(let j=F,st=F+Y;j<st;j+=3)v(t.getX(j+0),t.getX(j+1),t.getX(j+2))}const C=new z,R=new z,N=new z,O=new z;function B(W){N.fromBufferAttribute(s,W),O.copy(N);const w=h[W];C.copy(w),C.sub(N.multiplyScalar(N.dot(w))).normalize(),R.crossVectors(O,w);const F=R.dot(u[W])<0?-1:1;c.setXYZW(W,C.x,C.y,C.z,F)}for(let W=0,w=D.length;W<w;++W){const A=D[W],F=A.start,Y=A.count;for(let j=F,st=F+Y;j<st;j+=3)B(t.getX(j+0)),B(t.getX(j+1)),B(t.getX(j+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let g=0,x=i.count;g<x;g++)i.setXYZ(g,0,0,0);const s=new z,a=new z,c=new z,h=new z,u=new z,d=new z,p=new z,m=new z;if(t)for(let g=0,x=t.count;g<x;g+=3){const S=t.getX(g+0),E=t.getX(g+1),y=t.getX(g+2);s.fromBufferAttribute(e,S),a.fromBufferAttribute(e,E),c.fromBufferAttribute(e,y),p.subVectors(c,a),m.subVectors(s,a),p.cross(m),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,y),h.add(p),u.add(p),d.add(p),i.setXYZ(S,h.x,h.y,h.z),i.setXYZ(E,u.x,u.y,u.z),i.setXYZ(y,d.x,d.y,d.z)}else for(let g=0,x=e.count;g<x;g+=3)s.fromBufferAttribute(e,g+0),a.fromBufferAttribute(e,g+1),c.fromBufferAttribute(e,g+2),p.subVectors(c,a),m.subVectors(s,a),p.cross(m),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(h,u){const d=h.array,p=h.itemSize,m=h.normalized,g=new d.constructor(u.length*p);let x=0,S=0;for(let E=0,y=u.length;E<y;E++){h.isInterleavedBufferAttribute?x=u[E]*h.data.stride+h.offset:x=u[E]*p;for(let v=0;v<p;v++)g[S++]=d[x++]}return new Nn(g,p,m)}if(this.index===null)return ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new on,i=this.index.array,s=this.attributes;for(const h in s){const u=s[h],d=t(u,i);e.setAttribute(h,d)}const a=this.morphAttributes;for(const h in a){const u=[],d=a[h];for(let p=0,m=d.length;p<m;p++){const g=d[p],x=t(g,i);u.push(x)}e.morphAttributes[h]=u}e.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,u=c.length;h<u;h++){const d=c[h];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const d in u)u[d]!==void 0&&(t[d]=u[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const u in i){const d=i[u];t.data.attributes[u]=d.toJSON(t.data)}const s={};let a=!1;for(const u in this.morphAttributes){const d=this.morphAttributes[u],p=[];for(let m=0,g=d.length;m<g;m++){const x=d[m];p.push(x.toJSON(t.data))}p.length>0&&(s[u]=p,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const d in s){const p=s[d];this.setAttribute(d,p.clone(e))}const a=t.morphAttributes;for(const d in a){const p=[],m=a[d];for(let g=0,x=m.length;g<x;g++)p.push(m[g].clone(e));this.morphAttributes[d]=p}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let d=0,p=c.length;d<p;d++){const m=c[d];this.addGroup(m.start,m.count,m.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dh=new Re,Bi=new pc,Ks=new Ir,Ih=new z,js=new z,$s=new z,Qs=new z,Na=new z,to=new z,Nh=new z,eo=new z;class En extends Je{constructor(t=new on,e=new _c){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const h=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const h=this.morphTargetInfluences;if(a&&h){to.set(0,0,0);for(let u=0,d=a.length;u<d;u++){const p=h[u],m=a[u];p!==0&&(Na.fromBufferAttribute(m,t),c?to.addScaledVector(Na,p):to.addScaledVector(Na.sub(e),p))}e.add(to)}return e}raycast(t,e){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere),Ks.applyMatrix4(a),Bi.copy(t.ray).recast(t.near),!(Ks.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Ks,Ih)===null||Bi.origin.distanceToSquared(Ih)>(t.far-t.near)**2))&&(Dh.copy(a).invert(),Bi.copy(t.ray).applyMatrix4(Dh),!(i.boundingBox!==null&&Bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,i){let s;const a=this.geometry,c=this.material,h=a.index,u=a.attributes.position,d=a.attributes.uv,p=a.attributes.uv1,m=a.attributes.normal,g=a.groups,x=a.drawRange;if(h!==null)if(Array.isArray(c))for(let S=0,E=g.length;S<E;S++){const y=g[S],v=c[y.materialIndex],D=Math.max(y.start,x.start),C=Math.min(h.count,Math.min(y.start+y.count,x.start+x.count));for(let R=D,N=C;R<N;R+=3){const O=h.getX(R),B=h.getX(R+1),W=h.getX(R+2);s=no(this,v,t,i,d,p,m,O,B,W),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{const S=Math.max(0,x.start),E=Math.min(h.count,x.start+x.count);for(let y=S,v=E;y<v;y+=3){const D=h.getX(y),C=h.getX(y+1),R=h.getX(y+2);s=no(this,c,t,i,d,p,m,D,C,R),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(u!==void 0)if(Array.isArray(c))for(let S=0,E=g.length;S<E;S++){const y=g[S],v=c[y.materialIndex],D=Math.max(y.start,x.start),C=Math.min(u.count,Math.min(y.start+y.count,x.start+x.count));for(let R=D,N=C;R<N;R+=3){const O=R,B=R+1,W=R+2;s=no(this,v,t,i,d,p,m,O,B,W),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{const S=Math.max(0,x.start),E=Math.min(u.count,x.start+x.count);for(let y=S,v=E;y<v;y+=3){const D=y,C=y+1,R=y+2;s=no(this,c,t,i,d,p,m,D,C,R),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}}function Bp(r,t,e,i,s,a,c,h){let u;if(t.side===un?u=i.intersectTriangle(c,a,s,!0,h):u=i.intersectTriangle(s,a,c,t.side===Ci,h),u===null)return null;eo.copy(h),eo.applyMatrix4(r.matrixWorld);const d=e.ray.origin.distanceTo(eo);return d<e.near||d>e.far?null:{distance:d,point:eo.clone(),object:r}}function no(r,t,e,i,s,a,c,h,u,d){r.getVertexPosition(h,js),r.getVertexPosition(u,$s),r.getVertexPosition(d,Qs);const p=Bp(r,t,e,i,js,$s,Qs,Nh);if(p){const m=new z;Mn.getBarycoord(Nh,js,$s,Qs,m),s&&(p.uv=Mn.getInterpolatedAttribute(s,h,u,d,m,new Ct)),a&&(p.uv1=Mn.getInterpolatedAttribute(a,h,u,d,m,new Ct)),c&&(p.normal=Mn.getInterpolatedAttribute(c,h,u,d,m,new z),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const g={a:h,b:u,c:d,normal:new z,materialIndex:0};Mn.getNormal(js,$s,Qs,g.normal),p.face=g,p.barycoord=m}return p}class xs extends on{constructor(t=1,e=1,i=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:a,depthSegments:c};const h=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const u=[],d=[],p=[],m=[];let g=0,x=0;S("z","y","x",-1,-1,i,e,t,c,a,0),S("z","y","x",1,-1,i,e,-t,c,a,1),S("x","z","y",1,1,t,i,e,s,c,2),S("x","z","y",1,-1,t,i,-e,s,c,3),S("x","y","z",1,-1,t,e,i,s,a,4),S("x","y","z",-1,-1,t,e,-i,s,a,5),this.setIndex(u),this.setAttribute("position",new Fe(d,3)),this.setAttribute("normal",new Fe(p,3)),this.setAttribute("uv",new Fe(m,2));function S(E,y,v,D,C,R,N,O,B,W,w){const A=R/B,F=N/W,Y=R/2,j=N/2,st=O/2,it=B+1,Q=W+1;let Z=0,J=0;const Tt=new z;for(let rt=0;rt<Q;rt++){const ft=rt*F-j;for(let Xt=0;Xt<it;Xt++){const Vt=Xt*A-Y;Tt[E]=Vt*D,Tt[y]=ft*C,Tt[v]=st,d.push(Tt.x,Tt.y,Tt.z),Tt[E]=0,Tt[y]=0,Tt[v]=O>0?1:-1,p.push(Tt.x,Tt.y,Tt.z),m.push(Xt/B),m.push(1-rt/W),Z+=1}}for(let rt=0;rt<W;rt++)for(let ft=0;ft<B;ft++){const Xt=g+ft+it*rt,Vt=g+ft+it*(rt+1),Qt=g+(ft+1)+it*(rt+1),Zt=g+(ft+1)+it*rt;u.push(Xt,Vt,Zt),u.push(Vt,Qt,Zt),J+=6}h.addGroup(x,J,w),x+=J,g+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rr(r){const t={};for(const e in r){t[e]={};for(const i in r[e]){const s=r[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function nn(r){const t={};for(let e=0;e<r.length;e++){const i=Rr(r[e]);for(const s in i)t[s]=i[s]}return t}function zp(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function tf(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}const gc={clone:Rr,merge:nn};var kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends Nr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kp,this.fragmentShader=Hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rr(t.uniforms),this.uniformsGroups=zp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?e.uniforms[s]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[s]={type:"m4",value:c.toArray()}:e.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class ef extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new z,Uh=new Ct,Oh=new Ct;class yn extends ef{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z)}getViewSize(t,e){return this.getViewBounds(t,Uh,Oh),e.subVectors(Oh,Uh)}setViewOffset(t,e,i,s,a,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(br*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const u=c.fullWidth,d=c.fullHeight;a+=c.offsetX*s/u,e-=c.offsetY*i/d,s*=c.width/u,i*=c.height/d}const h=this.filmOffset;h!==0&&(a+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const vr=-90,xr=1;class Vp extends Je{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new yn(vr,xr,t,e);s.layers=this.layers,this.add(s);const a=new yn(vr,xr,t,e);a.layers=this.layers,this.add(a);const c=new yn(vr,xr,t,e);c.layers=this.layers,this.add(c);const h=new yn(vr,xr,t,e);h.layers=this.layers,this.add(h);const u=new yn(vr,xr,t,e);u.layers=this.layers,this.add(u);const d=new yn(vr,xr,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,a,c,h,u]=e;for(const d of e)this.remove(d);if(t===Xn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===Ro)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,c,h,u,d,p]=this.children,m=t.getRenderTarget(),g=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,a),t.setRenderTarget(i,1,s),t.render(e,c),t.setRenderTarget(i,2,s),t.render(e,h),t.setRenderTarget(i,3,s),t.render(e,u),t.setRenderTarget(i,4,s),t.render(e,d),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,s),t.render(e,p),t.setRenderTarget(m,g,x),t.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class nf extends sn{constructor(t=[],e=Ki,i,s,a,c,h,u,d,p){super(t,e,i,s,a,c,h,u,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rf extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new nf(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new xs(5,5,5),a=new Un({name:"CubemapFromEquirect",uniforms:Rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:ui});a.uniforms.tEquirect.value=e;const c=new En(s,a),h=e.minFilter;return e.minFilter===Zi&&(e.minFilter=$e),new Vp(1,10,this).update(t,c),e.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const a=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,i,s);t.setRenderTarget(a)}}class ts extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gp={type:"move"};class Ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,a=null,c=null;const h=this._targetRay,u=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(const E of t.hand.values()){const y=e.getJointPose(E,i),v=this._getHandJoint(d,E);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const p=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],g=p.position.distanceTo(m.position),x=.02,S=.005;d.inputState.pinching&&g>x+S?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=x-S&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1));h!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Gp)))}return h!==null&&(h.visible=s!==null),u!==null&&(u.visible=a!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ts;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Wp extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Xp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xl,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,a=this.stride;s<a;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new z;class Ti{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Dn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=be(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Dn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array),a=be(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=a,this}clone(t){if(t===void 0){Do("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return new Nn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ti(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Do("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Zp extends sn{constructor(t=null,e=1,i=1,s,a,c,h,u,d=Ye,p=Ye,m,g){super(null,c,h,u,d,p,s,a,m,g),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oa=new z,qp=new z,Yp=new he;class Vi{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Oa.subVectors(i,e).cross(qp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Oa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Yp.getNormalMatrix(t),s=this.coplanarPoint(Oa).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new Ir,Jp=new Ct(.5,.5),io=new z;class vc{constructor(t=new Vi,e=new Vi,i=new Vi,s=new Vi,a=new Vi,c=new Vi){this.planes=[t,e,i,s,a,c]}set(t,e,i,s,a,c){const h=this.planes;return h[0].copy(t),h[1].copy(e),h[2].copy(i),h[3].copy(s),h[4].copy(a),h[5].copy(c),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Xn,i=!1){const s=this.planes,a=t.elements,c=a[0],h=a[1],u=a[2],d=a[3],p=a[4],m=a[5],g=a[6],x=a[7],S=a[8],E=a[9],y=a[10],v=a[11],D=a[12],C=a[13],R=a[14],N=a[15];if(s[0].setComponents(d-c,x-p,v-S,N-D).normalize(),s[1].setComponents(d+c,x+p,v+S,N+D).normalize(),s[2].setComponents(d+h,x+m,v+E,N+C).normalize(),s[3].setComponents(d-h,x-m,v-E,N-C).normalize(),i)s[4].setComponents(u,g,y,R).normalize(),s[5].setComponents(d-u,x-g,v-y,N-R).normalize();else if(s[4].setComponents(d-u,x-g,v-y,N-R).normalize(),e===Xn)s[5].setComponents(d+u,x+g,v+y,N+R).normalize();else if(e===Ro)s[5].setComponents(u,g,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){zi.center.set(0,0,0);const e=Jp.distanceTo(t.center);return zi.radius=.7071067811865476+e,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(io.x=s.normal.x>0?t.max.x:t.min.x,io.y=s.normal.y>0?t.max.y:t.min.y,io.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(io)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xc extends Nr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Io=new z,No=new z,Fh=new Re,Kr=new pc,ro=new Ir,Fa=new z,Bh=new z;class Kp extends Je{constructor(t=new on,e=new xc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,a=e.count;s<a;s++)Io.fromBufferAttribute(e,s-1),No.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Io.distanceTo(No);t.setAttribute("lineDistance",new Fe(i,1))}else ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ro.copy(i.boundingSphere),ro.applyMatrix4(s),ro.radius+=a,t.ray.intersectsSphere(ro)===!1)return;Fh.copy(s).invert(),Kr.copy(t.ray).applyMatrix4(Fh);const h=a/((this.scale.x+this.scale.y+this.scale.z)/3),u=h*h,d=this.isLineSegments?2:1,p=i.index,g=i.attributes.position;if(p!==null){const x=Math.max(0,c.start),S=Math.min(p.count,c.start+c.count);for(let E=x,y=S-1;E<y;E+=d){const v=p.getX(E),D=p.getX(E+1),C=so(this,t,Kr,u,v,D,E);C&&e.push(C)}if(this.isLineLoop){const E=p.getX(S-1),y=p.getX(x),v=so(this,t,Kr,u,E,y,S-1);v&&e.push(v)}}else{const x=Math.max(0,c.start),S=Math.min(g.count,c.start+c.count);for(let E=x,y=S-1;E<y;E+=d){const v=so(this,t,Kr,u,E,E+1,E);v&&e.push(v)}if(this.isLineLoop){const E=so(this,t,Kr,u,S-1,x,S-1);E&&e.push(E)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const h=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}}function so(r,t,e,i,s,a,c){const h=r.geometry.attributes.position;if(Io.fromBufferAttribute(h,s),No.fromBufferAttribute(h,a),e.distanceSqToSegment(Io,No,Fa,Bh)>i)return;Fa.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(Fa);if(!(d<t.near||d>t.far))return{distance:d,point:Bh.clone().applyMatrix4(r.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:r}}const zh=new z,kh=new z;class jp extends Kp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,a=e.count;s<a;s+=2)zh.fromBufferAttribute(e,s),kh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+zh.distanceTo(kh);t.setAttribute("lineDistance",new Fe(i,1))}else ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ps extends sn{constructor(t,e,i=Kn,s,a,c,h=Ye,u=Ye,d,p=pi,m=1){if(p!==pi&&p!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:e,depth:m};super(g,s,a,c,h,u,p,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new dc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class $p extends ps{constructor(t,e=Kn,i=Ki,s,a,c=Ye,h=Ye,u,d=pi){const p={width:t,height:t,depth:1},m=[p,p,p,p,p,p];super(t,t,e,i,s,a,c,h,u,d),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class sf extends sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}const oo=new z,ao=new z,Ba=new z,lo=new Mn;class Qp extends on{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),a=Math.cos(br*e),c=t.getIndex(),h=t.getAttribute("position"),u=c?c.count:h.count,d=[0,0,0],p=["a","b","c"],m=new Array(3),g={},x=[];for(let S=0;S<u;S+=3){c?(d[0]=c.getX(S),d[1]=c.getX(S+1),d[2]=c.getX(S+2)):(d[0]=S,d[1]=S+1,d[2]=S+2);const{a:E,b:y,c:v}=lo;if(E.fromBufferAttribute(h,d[0]),y.fromBufferAttribute(h,d[1]),v.fromBufferAttribute(h,d[2]),lo.getNormal(Ba),m[0]=`${Math.round(E.x*s)},${Math.round(E.y*s)},${Math.round(E.z*s)}`,m[1]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,m[2]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,!(m[0]===m[1]||m[1]===m[2]||m[2]===m[0]))for(let D=0;D<3;D++){const C=(D+1)%3,R=m[D],N=m[C],O=lo[p[D]],B=lo[p[C]],W=`${R}_${N}`,w=`${N}_${R}`;w in g&&g[w]?(Ba.dot(g[w].normal)<=a&&(x.push(O.x,O.y,O.z),x.push(B.x,B.y,B.z)),g[w]=null):W in g||(g[W]={index0:d[D],index1:d[C],normal:Ba.clone()})}}for(const S in g)if(g[S]){const{index0:E,index1:y}=g[S];oo.fromBufferAttribute(h,E),ao.fromBufferAttribute(h,y),x.push(oo.x,oo.y,oo.z),x.push(ao.x,ao.y,ao.z)}this.setAttribute("position",new Fe(x,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class $n{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ne("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),a=0;e.push(0);for(let c=1;c<=t;c++)i=this.getPoint(c/t),a+=i.distanceTo(s),e.push(a),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const a=i.length;let c;e?c=e:c=t*i[a-1];let h=0,u=a-1,d;for(;h<=u;)if(s=Math.floor(h+(u-h)/2),d=i[s]-c,d<0)h=s+1;else if(d>0)u=s-1;else{u=s;break}if(s=u,i[s]===c)return s/(a-1);const p=i[s],g=i[s+1]-p,x=(c-p)/g;return(s+x)/(a-1)}getTangent(t,e){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);const c=this.getPoint(s),h=this.getPoint(a),u=e||(c.isVector2?new Ct:new z);return u.copy(h).sub(c).normalize(),u}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new z,s=[],a=[],c=[],h=new z,u=new Re;for(let x=0;x<=t;x++){const S=x/t;s[x]=this.getTangentAt(S,new z)}a[0]=new z,c[0]=new z;let d=Number.MAX_VALUE;const p=Math.abs(s[0].x),m=Math.abs(s[0].y),g=Math.abs(s[0].z);p<=d&&(d=p,i.set(1,0,0)),m<=d&&(d=m,i.set(0,1,0)),g<=d&&i.set(0,0,1),h.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],h),c[0].crossVectors(s[0],a[0]);for(let x=1;x<=t;x++){if(a[x]=a[x-1].clone(),c[x]=c[x-1].clone(),h.crossVectors(s[x-1],s[x]),h.length()>Number.EPSILON){h.normalize();const S=Math.acos(ae(s[x-1].dot(s[x]),-1,1));a[x].applyMatrix4(u.makeRotationAxis(h,S))}c[x].crossVectors(s[x],a[x])}if(e===!0){let x=Math.acos(ae(a[0].dot(a[t]),-1,1));x/=t,s[0].dot(h.crossVectors(a[0],a[t]))>0&&(x=-x);for(let S=1;S<=t;S++)a[S].applyMatrix4(u.makeRotationAxis(s[S],x*S)),c[S].crossVectors(s[S],a[S])}return{tangents:s,normals:a,binormals:c}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class yc extends $n{constructor(t=0,e=0,i=1,s=1,a=0,c=Math.PI*2,h=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=c,this.aClockwise=h,this.aRotation=u}getPoint(t,e=new Ct){const i=e,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const c=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(c?a=0:a=s),this.aClockwise===!0&&!c&&(a===s?a=-s:a=a-s);const h=this.aStartAngle+t*a;let u=this.aX+this.xRadius*Math.cos(h),d=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const p=Math.cos(this.aRotation),m=Math.sin(this.aRotation),g=u-this.aX,x=d-this.aY;u=g*p-x*m+this.aX,d=g*m+x*p+this.aY}return i.set(u,d)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class tm extends yc{constructor(t,e,i,s,a,c){super(t,e,i,i,s,a,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Sc(){let r=0,t=0,e=0,i=0;function s(a,c,h,u){r=a,t=h,e=-3*a+3*c-2*h-u,i=2*a-2*c+h+u}return{initCatmullRom:function(a,c,h,u,d){s(c,h,d*(h-a),d*(u-c))},initNonuniformCatmullRom:function(a,c,h,u,d,p,m){let g=(c-a)/d-(h-a)/(d+p)+(h-c)/p,x=(h-c)/p-(u-c)/(p+m)+(u-h)/m;g*=p,x*=p,s(c,h,g,x)},calc:function(a){const c=a*a,h=c*a;return r+t*a+e*c+i*h}}}const co=new z,za=new Sc,ka=new Sc,Ha=new Sc;class em extends $n{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new z){const i=e,s=this.points,a=s.length,c=(a-(this.closed?0:1))*t;let h=Math.floor(c),u=c-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/a)+1)*a:u===0&&h===a-1&&(h=a-2,u=1);let d,p;this.closed||h>0?d=s[(h-1)%a]:(co.subVectors(s[0],s[1]).add(s[0]),d=co);const m=s[h%a],g=s[(h+1)%a];if(this.closed||h+2<a?p=s[(h+2)%a]:(co.subVectors(s[a-1],s[a-2]).add(s[a-1]),p=co),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let S=Math.pow(d.distanceToSquared(m),x),E=Math.pow(m.distanceToSquared(g),x),y=Math.pow(g.distanceToSquared(p),x);E<1e-4&&(E=1),S<1e-4&&(S=E),y<1e-4&&(y=E),za.initNonuniformCatmullRom(d.x,m.x,g.x,p.x,S,E,y),ka.initNonuniformCatmullRom(d.y,m.y,g.y,p.y,S,E,y),Ha.initNonuniformCatmullRom(d.z,m.z,g.z,p.z,S,E,y)}else this.curveType==="catmullrom"&&(za.initCatmullRom(d.x,m.x,g.x,p.x,this.tension),ka.initCatmullRom(d.y,m.y,g.y,p.y,this.tension),Ha.initCatmullRom(d.z,m.z,g.z,p.z,this.tension));return i.set(za.calc(u),ka.calc(u),Ha.calc(u)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Hh(r,t,e,i,s){const a=(i-t)*.5,c=(s-e)*.5,h=r*r,u=r*h;return(2*e-2*i+a+c)*u+(-3*e+3*i-2*a-c)*h+a*r+e}function nm(r,t){const e=1-r;return e*e*t}function im(r,t){return 2*(1-r)*r*t}function rm(r,t){return r*r*t}function ss(r,t,e,i){return nm(r,t)+im(r,e)+rm(r,i)}function sm(r,t){const e=1-r;return e*e*e*t}function om(r,t){const e=1-r;return 3*e*e*r*t}function am(r,t){return 3*(1-r)*r*r*t}function lm(r,t){return r*r*r*t}function os(r,t,e,i,s){return sm(r,t)+om(r,e)+am(r,i)+lm(r,s)}class of extends $n{constructor(t=new Ct,e=new Ct,i=new Ct,s=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Ct){const i=e,s=this.v0,a=this.v1,c=this.v2,h=this.v3;return i.set(os(t,s.x,a.x,c.x,h.x),os(t,s.y,a.y,c.y,h.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cm extends $n{constructor(t=new z,e=new z,i=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new z){const i=e,s=this.v0,a=this.v1,c=this.v2,h=this.v3;return i.set(os(t,s.x,a.x,c.x,h.x),os(t,s.y,a.y,c.y,h.y),os(t,s.z,a.z,c.z,h.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class af extends $n{constructor(t=new Ct,e=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ct){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hm extends $n{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lf extends $n{constructor(t=new Ct,e=new Ct,i=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Ct){const i=e,s=this.v0,a=this.v1,c=this.v2;return i.set(ss(t,s.x,a.x,c.x),ss(t,s.y,a.y,c.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class um extends $n{constructor(t=new z,e=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new z){const i=e,s=this.v0,a=this.v1,c=this.v2;return i.set(ss(t,s.x,a.x,c.x),ss(t,s.y,a.y,c.y),ss(t,s.z,a.z,c.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cf extends $n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){const i=e,s=this.points,a=(s.length-1)*t,c=Math.floor(a),h=a-c,u=s[c===0?c:c-1],d=s[c],p=s[c>s.length-2?s.length-1:c+1],m=s[c>s.length-3?s.length-1:c+2];return i.set(Hh(h,u.x,d.x,p.x,m.x),Hh(h,u.y,d.y,p.y,m.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Ct().fromArray(s))}return this}}var Zl=Object.freeze({__proto__:null,ArcCurve:tm,CatmullRomCurve3:em,CubicBezierCurve:of,CubicBezierCurve3:cm,EllipseCurve:yc,LineCurve:af,LineCurve3:hm,QuadraticBezierCurve:lf,QuadraticBezierCurve3:um,SplineCurve:cf});class fm extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=i){const c=s[a]-i,h=this.curves[a],u=h.getLength(),d=u===0?0:1-c/u;return h.getPointAt(d,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,a=this.curves;s<a.length;s++){const c=a[s],h=c.isEllipseCurve?t*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?t*c.points.length:t,u=c.getPoints(h);for(let d=0;d<u.length;d++){const p=u[d];i&&i.equals(p)||(e.push(p),i=p)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Zl[s.type]().fromJSON(s))}return this}}class Vh extends fm{constructor(t){super(),this.type="Path",this.currentPoint=new Ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new af(this.currentPoint.clone(),new Ct(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const a=new lf(this.currentPoint.clone(),new Ct(t,e),new Ct(i,s));return this.curves.push(a),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,a,c){const h=new of(this.currentPoint.clone(),new Ct(t,e),new Ct(i,s),new Ct(a,c));return this.curves.push(h),this.currentPoint.set(a,c),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new cf(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,a,c){const h=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(t+h,e+u,i,s,a,c),this}absarc(t,e,i,s,a,c){return this.absellipse(t,e,i,i,s,a,c),this}ellipse(t,e,i,s,a,c,h,u){const d=this.currentPoint.x,p=this.currentPoint.y;return this.absellipse(t+d,e+p,i,s,a,c,h,u),this}absellipse(t,e,i,s,a,c,h,u){const d=new yc(t,e,i,s,a,c,h,u);if(this.curves.length>0){const m=d.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(d);const p=d.getPoint(1);return this.currentPoint.copy(p),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Bo extends Vh{constructor(t){super(t),this.uuid=qn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Vh().fromJSON(s))}return this}}function dm(r,t,e=2){const i=t&&t.length,s=i?t[0]*e:r.length;let a=hf(r,0,s,e,!0);const c=[];if(!a||a.next===a.prev)return c;let h,u,d;if(i&&(a=vm(r,t,a,e)),r.length>80*e){h=r[0],u=r[1];let p=h,m=u;for(let g=e;g<s;g+=e){const x=r[g],S=r[g+1];x<h&&(h=x),S<u&&(u=S),x>p&&(p=x),S>m&&(m=S)}d=Math.max(p-h,m-u),d=d!==0?32767/d:0}return ms(a,c,e,h,u,d,0),c}function hf(r,t,e,i,s){let a;if(s===Pm(r,t,e,i)>0)for(let c=t;c<e;c+=i)a=Gh(c/i|0,r[c],r[c+1],a);else for(let c=e-i;c>=t;c-=i)a=Gh(c/i|0,r[c],r[c+1],a);return a&&Lr(a,a.next)&&(gs(a),a=a.next),a}function ji(r,t){if(!r)return r;t||(t=r);let e=r,i;do if(i=!1,!e.steiner&&(Lr(e,e.next)||Le(e.prev,e,e.next)===0)){if(gs(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ms(r,t,e,i,s,a,c){if(!r)return;!c&&a&&Em(r,i,s,a);let h=r;for(;r.prev!==r.next;){const u=r.prev,d=r.next;if(a?mm(r,i,s,a):pm(r)){t.push(u.i,r.i,d.i),gs(r),r=d.next,h=d.next;continue}if(r=d,r===h){c?c===1?(r=_m(ji(r),t),ms(r,t,e,i,s,a,2)):c===2&&gm(r,t,e,i,s,a):ms(ji(r),t,e,i,s,a,1);break}}}function pm(r){const t=r.prev,e=r,i=r.next;if(Le(t,e,i)>=0)return!1;const s=t.x,a=e.x,c=i.x,h=t.y,u=e.y,d=i.y,p=Math.min(s,a,c),m=Math.min(h,u,d),g=Math.max(s,a,c),x=Math.max(h,u,d);let S=i.next;for(;S!==t;){if(S.x>=p&&S.x<=g&&S.y>=m&&S.y<=x&&es(s,h,a,u,c,d,S.x,S.y)&&Le(S.prev,S,S.next)>=0)return!1;S=S.next}return!0}function mm(r,t,e,i){const s=r.prev,a=r,c=r.next;if(Le(s,a,c)>=0)return!1;const h=s.x,u=a.x,d=c.x,p=s.y,m=a.y,g=c.y,x=Math.min(h,u,d),S=Math.min(p,m,g),E=Math.max(h,u,d),y=Math.max(p,m,g),v=ql(x,S,t,e,i),D=ql(E,y,t,e,i);let C=r.prevZ,R=r.nextZ;for(;C&&C.z>=v&&R&&R.z<=D;){if(C.x>=x&&C.x<=E&&C.y>=S&&C.y<=y&&C!==s&&C!==c&&es(h,p,u,m,d,g,C.x,C.y)&&Le(C.prev,C,C.next)>=0||(C=C.prevZ,R.x>=x&&R.x<=E&&R.y>=S&&R.y<=y&&R!==s&&R!==c&&es(h,p,u,m,d,g,R.x,R.y)&&Le(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;C&&C.z>=v;){if(C.x>=x&&C.x<=E&&C.y>=S&&C.y<=y&&C!==s&&C!==c&&es(h,p,u,m,d,g,C.x,C.y)&&Le(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;R&&R.z<=D;){if(R.x>=x&&R.x<=E&&R.y>=S&&R.y<=y&&R!==s&&R!==c&&es(h,p,u,m,d,g,R.x,R.y)&&Le(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function _m(r,t){let e=r;do{const i=e.prev,s=e.next.next;!Lr(i,s)&&ff(i,e,e.next,s)&&_s(i,s)&&_s(s,i)&&(t.push(i.i,e.i,s.i),gs(e),gs(e.next),e=r=s),e=e.next}while(e!==r);return ji(e)}function gm(r,t,e,i,s,a){let c=r;do{let h=c.next.next;for(;h!==c.prev;){if(c.i!==h.i&&wm(c,h)){let u=df(c,h);c=ji(c,c.next),u=ji(u,u.next),ms(c,t,e,i,s,a,0),ms(u,t,e,i,s,a,0);return}h=h.next}c=c.next}while(c!==r)}function vm(r,t,e,i){const s=[];for(let a=0,c=t.length;a<c;a++){const h=t[a]*i,u=a<c-1?t[a+1]*i:r.length,d=hf(r,h,u,i,!1);d===d.next&&(d.steiner=!0),s.push(Tm(d))}s.sort(xm);for(let a=0;a<s.length;a++)e=ym(s[a],e);return e}function xm(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){const i=(r.next.y-r.y)/(r.next.x-r.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function ym(r,t){const e=Sm(r,t);if(!e)return t;const i=df(e,r);return ji(i,i.next),ji(e,e.next)}function Sm(r,t){let e=t;const i=r.x,s=r.y;let a=-1/0,c;if(Lr(r,e))return e;do{if(Lr(r,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const m=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(m<=i&&m>a&&(a=m,c=e.x<e.next.x?e:e.next,m===i))return c}e=e.next}while(e!==t);if(!c)return null;const h=c,u=c.x,d=c.y;let p=1/0;e=c;do{if(i>=e.x&&e.x>=u&&i!==e.x&&uf(s<d?i:a,s,u,d,s<d?a:i,s,e.x,e.y)){const m=Math.abs(s-e.y)/(i-e.x);_s(e,r)&&(m<p||m===p&&(e.x>c.x||e.x===c.x&&Mm(c,e)))&&(c=e,p=m)}e=e.next}while(e!==h);return c}function Mm(r,t){return Le(r.prev,r,t.prev)<0&&Le(t.next,r,r.next)<0}function Em(r,t,e,i){let s=r;do s.z===0&&(s.z=ql(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==r);s.prevZ.nextZ=null,s.prevZ=null,bm(s)}function bm(r){let t,e=1;do{let i=r,s;r=null;let a=null;for(t=0;i;){t++;let c=i,h=0;for(let d=0;d<e&&(h++,c=c.nextZ,!!c);d++);let u=e;for(;h>0||u>0&&c;)h!==0&&(u===0||!c||i.z<=c.z)?(s=i,i=i.nextZ,h--):(s=c,c=c.nextZ,u--),a?a.nextZ=s:r=s,s.prevZ=a,a=s;i=c}a.nextZ=null,e*=2}while(t>1);return r}function ql(r,t,e,i,s){return r=(r-e)*s|0,t=(t-i)*s|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Tm(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function uf(r,t,e,i,s,a,c,h){return(s-c)*(t-h)>=(r-c)*(a-h)&&(r-c)*(i-h)>=(e-c)*(t-h)&&(e-c)*(a-h)>=(s-c)*(i-h)}function es(r,t,e,i,s,a,c,h){return!(r===c&&t===h)&&uf(r,t,e,i,s,a,c,h)}function wm(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Am(r,t)&&(_s(r,t)&&_s(t,r)&&Cm(r,t)&&(Le(r.prev,r,t.prev)||Le(r,t.prev,t))||Lr(r,t)&&Le(r.prev,r,r.next)>0&&Le(t.prev,t,t.next)>0)}function Le(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Lr(r,t){return r.x===t.x&&r.y===t.y}function ff(r,t,e,i){const s=uo(Le(r,t,e)),a=uo(Le(r,t,i)),c=uo(Le(e,i,r)),h=uo(Le(e,i,t));return!!(s!==a&&c!==h||s===0&&ho(r,e,t)||a===0&&ho(r,i,t)||c===0&&ho(e,r,i)||h===0&&ho(e,t,i))}function ho(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function uo(r){return r>0?1:r<0?-1:0}function Am(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&ff(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function _s(r,t){return Le(r.prev,r,r.next)<0?Le(r,t,r.next)>=0&&Le(r,r.prev,t)>=0:Le(r,t,r.prev)<0||Le(r,r.next,t)<0}function Cm(r,t){let e=r,i=!1;const s=(r.x+t.x)/2,a=(r.y+t.y)/2;do e.y>a!=e.next.y>a&&e.next.y!==e.y&&s<(e.next.x-e.x)*(a-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==r);return i}function df(r,t){const e=Yl(r.i,r.x,r.y),i=Yl(t.i,t.x,t.y),s=r.next,a=t.prev;return r.next=t,t.prev=r,e.next=s,s.prev=e,i.next=e,e.prev=i,a.next=i,i.prev=a,i}function Gh(r,t,e,i){const s=Yl(r,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function gs(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Yl(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Pm(r,t,e,i){let s=0;for(let a=t,c=e-i;a<e;a+=i)s+=(r[c]-r[a])*(r[a+1]+r[c+1]),c=a;return s}class Rm{static triangulate(t,e,i=2){return dm(t,e,i)}}class hi{static area(t){const e=t.length;let i=0;for(let s=e-1,a=0;a<e;s=a++)i+=t[s].x*t[a].y-t[a].x*t[s].y;return i*.5}static isClockWise(t){return hi.area(t)<0}static triangulateShape(t,e){const i=[],s=[],a=[];Wh(t),Xh(i,t);let c=t.length;e.forEach(Wh);for(let u=0;u<e.length;u++)s.push(c),c+=e[u].length,Xh(i,e[u]);const h=Rm.triangulate(i,s);for(let u=0;u<h.length;u+=3)a.push(h.slice(u,u+3));return a}}function Wh(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Xh(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Mc extends on{constructor(t=new Bo([new Ct(.5,.5),new Ct(-.5,.5),new Ct(-.5,-.5),new Ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],a=[];for(let h=0,u=t.length;h<u;h++){const d=t[h];c(d)}this.setAttribute("position",new Fe(s,3)),this.setAttribute("uv",new Fe(a,2)),this.computeVertexNormals();function c(h){const u=[],d=e.curveSegments!==void 0?e.curveSegments:12,p=e.steps!==void 0?e.steps:1,m=e.depth!==void 0?e.depth:1;let g=e.bevelEnabled!==void 0?e.bevelEnabled:!0,x=e.bevelThickness!==void 0?e.bevelThickness:.2,S=e.bevelSize!==void 0?e.bevelSize:x-.1,E=e.bevelOffset!==void 0?e.bevelOffset:0,y=e.bevelSegments!==void 0?e.bevelSegments:3;const v=e.extrudePath,D=e.UVGenerator!==void 0?e.UVGenerator:Lm;let C,R=!1,N,O,B,W;if(v){C=v.getSpacedPoints(p),R=!0,g=!1;const ct=v.isCatmullRomCurve3?v.closed:!1;N=v.computeFrenetFrames(p,ct),O=new z,B=new z,W=new z}g||(y=0,x=0,S=0,E=0);const w=h.extractPoints(d);let A=w.shape;const F=w.holes;if(!hi.isClockWise(A)){A=A.reverse();for(let ct=0,pt=F.length;ct<pt;ct++){const ht=F[ct];hi.isClockWise(ht)&&(F[ct]=ht.reverse())}}function j(ct){const ht=10000000000000001e-36;let wt=ct[0];for(let I=1;I<=ct.length;I++){const Jt=I%ct.length,Lt=ct[Jt],Kt=Lt.x-wt.x,vt=Lt.y-wt.y,P=Kt*Kt+vt*vt,M=Math.max(Math.abs(Lt.x),Math.abs(Lt.y),Math.abs(wt.x),Math.abs(wt.y)),H=ht*M*M;if(P<=H){ct.splice(Jt,1),I--;continue}wt=Lt}}j(A),F.forEach(j);const st=F.length,it=A;for(let ct=0;ct<st;ct++){const pt=F[ct];A=A.concat(pt)}function Q(ct,pt,ht){return pt||xe("ExtrudeGeometry: vec does not exist"),ct.clone().addScaledVector(pt,ht)}const Z=A.length;function J(ct,pt,ht){let wt,I,Jt;const Lt=ct.x-pt.x,Kt=ct.y-pt.y,vt=ht.x-ct.x,P=ht.y-ct.y,M=Lt*Lt+Kt*Kt,H=Lt*P-Kt*vt;if(Math.abs(H)>Number.EPSILON){const et=Math.sqrt(M),ot=Math.sqrt(vt*vt+P*P),nt=pt.x-Kt/et,kt=pt.y+Lt/et,yt=ht.x-P/ot,Bt=ht.y+vt/ot,$t=((yt-nt)*P-(Bt-kt)*vt)/(Lt*P-Kt*vt);wt=nt+Lt*$t-ct.x,I=kt+Kt*$t-ct.y;const dt=wt*wt+I*I;if(dt<=2)return new Ct(wt,I);Jt=Math.sqrt(dt/2)}else{let et=!1;Lt>Number.EPSILON?vt>Number.EPSILON&&(et=!0):Lt<-Number.EPSILON?vt<-Number.EPSILON&&(et=!0):Math.sign(Kt)===Math.sign(P)&&(et=!0),et?(wt=-Kt,I=Lt,Jt=Math.sqrt(M)):(wt=Lt,I=Kt,Jt=Math.sqrt(M/2))}return new Ct(wt/Jt,I/Jt)}const Tt=[];for(let ct=0,pt=it.length,ht=pt-1,wt=ct+1;ct<pt;ct++,ht++,wt++)ht===pt&&(ht=0),wt===pt&&(wt=0),Tt[ct]=J(it[ct],it[ht],it[wt]);const rt=[];let ft,Xt=Tt.concat();for(let ct=0,pt=st;ct<pt;ct++){const ht=F[ct];ft=[];for(let wt=0,I=ht.length,Jt=I-1,Lt=wt+1;wt<I;wt++,Jt++,Lt++)Jt===I&&(Jt=0),Lt===I&&(Lt=0),ft[wt]=J(ht[wt],ht[Jt],ht[Lt]);rt.push(ft),Xt=Xt.concat(ft)}let Vt;if(y===0)Vt=hi.triangulateShape(it,F);else{const ct=[],pt=[];for(let ht=0;ht<y;ht++){const wt=ht/y,I=x*Math.cos(wt*Math.PI/2),Jt=S*Math.sin(wt*Math.PI/2)+E;for(let Lt=0,Kt=it.length;Lt<Kt;Lt++){const vt=Q(it[Lt],Tt[Lt],Jt);jt(vt.x,vt.y,-I),wt===0&&ct.push(vt)}for(let Lt=0,Kt=st;Lt<Kt;Lt++){const vt=F[Lt];ft=rt[Lt];const P=[];for(let M=0,H=vt.length;M<H;M++){const et=Q(vt[M],ft[M],Jt);jt(et.x,et.y,-I),wt===0&&P.push(et)}wt===0&&pt.push(P)}}Vt=hi.triangulateShape(ct,pt)}const Qt=Vt.length,Zt=S+E;for(let ct=0;ct<Z;ct++){const pt=g?Q(A[ct],Xt[ct],Zt):A[ct];R?(B.copy(N.normals[0]).multiplyScalar(pt.x),O.copy(N.binormals[0]).multiplyScalar(pt.y),W.copy(C[0]).add(B).add(O),jt(W.x,W.y,W.z)):jt(pt.x,pt.y,0)}for(let ct=1;ct<=p;ct++)for(let pt=0;pt<Z;pt++){const ht=g?Q(A[pt],Xt[pt],Zt):A[pt];R?(B.copy(N.normals[ct]).multiplyScalar(ht.x),O.copy(N.binormals[ct]).multiplyScalar(ht.y),W.copy(C[ct]).add(B).add(O),jt(W.x,W.y,W.z)):jt(ht.x,ht.y,m/p*ct)}for(let ct=y-1;ct>=0;ct--){const pt=ct/y,ht=x*Math.cos(pt*Math.PI/2),wt=S*Math.sin(pt*Math.PI/2)+E;for(let I=0,Jt=it.length;I<Jt;I++){const Lt=Q(it[I],Tt[I],wt);jt(Lt.x,Lt.y,m+ht)}for(let I=0,Jt=F.length;I<Jt;I++){const Lt=F[I];ft=rt[I];for(let Kt=0,vt=Lt.length;Kt<vt;Kt++){const P=Q(Lt[Kt],ft[Kt],wt);R?jt(P.x,P.y+C[p-1].y,C[p-1].x+ht):jt(P.x,P.y,m+ht)}}}q(),at();function q(){const ct=s.length/3;if(g){let pt=0,ht=Z*pt;for(let wt=0;wt<Qt;wt++){const I=Vt[wt];Ut(I[2]+ht,I[1]+ht,I[0]+ht)}pt=p+y*2,ht=Z*pt;for(let wt=0;wt<Qt;wt++){const I=Vt[wt];Ut(I[0]+ht,I[1]+ht,I[2]+ht)}}else{for(let pt=0;pt<Qt;pt++){const ht=Vt[pt];Ut(ht[2],ht[1],ht[0])}for(let pt=0;pt<Qt;pt++){const ht=Vt[pt];Ut(ht[0]+Z*p,ht[1]+Z*p,ht[2]+Z*p)}}i.addGroup(ct,s.length/3-ct,0)}function at(){const ct=s.length/3;let pt=0;Pt(it,pt),pt+=it.length;for(let ht=0,wt=F.length;ht<wt;ht++){const I=F[ht];Pt(I,pt),pt+=I.length}i.addGroup(ct,s.length/3-ct,1)}function Pt(ct,pt){let ht=ct.length;for(;--ht>=0;){const wt=ht;let I=ht-1;I<0&&(I=ct.length-1);for(let Jt=0,Lt=p+y*2;Jt<Lt;Jt++){const Kt=Z*Jt,vt=Z*(Jt+1),P=pt+wt+Kt,M=pt+I+Kt,H=pt+I+vt,et=pt+wt+vt;fe(P,M,H,et)}}}function jt(ct,pt,ht){u.push(ct),u.push(pt),u.push(ht)}function Ut(ct,pt,ht){me(ct),me(pt),me(ht);const wt=s.length/3,I=D.generateTopUV(i,s,wt-3,wt-2,wt-1);ie(I[0]),ie(I[1]),ie(I[2])}function fe(ct,pt,ht,wt){me(ct),me(pt),me(wt),me(pt),me(ht),me(wt);const I=s.length/3,Jt=D.generateSideWallUV(i,s,I-6,I-3,I-2,I-1);ie(Jt[0]),ie(Jt[1]),ie(Jt[3]),ie(Jt[1]),ie(Jt[2]),ie(Jt[3])}function me(ct){s.push(u[ct*3+0]),s.push(u[ct*3+1]),s.push(u[ct*3+2])}function ie(ct){a.push(ct.x),a.push(ct.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Dm(e,i,t)}static fromJSON(t,e){const i=[];for(let a=0,c=t.shapes.length;a<c;a++){const h=e[t.shapes[a]];i.push(h)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Zl[s.type]().fromJSON(s)),new Mc(i,t.options)}}const Lm={generateTopUV:function(r,t,e,i,s){const a=t[e*3],c=t[e*3+1],h=t[i*3],u=t[i*3+1],d=t[s*3],p=t[s*3+1];return[new Ct(a,c),new Ct(h,u),new Ct(d,p)]},generateSideWallUV:function(r,t,e,i,s,a){const c=t[e*3],h=t[e*3+1],u=t[e*3+2],d=t[i*3],p=t[i*3+1],m=t[i*3+2],g=t[s*3],x=t[s*3+1],S=t[s*3+2],E=t[a*3],y=t[a*3+1],v=t[a*3+2];return Math.abs(h-p)<Math.abs(c-d)?[new Ct(c,1-u),new Ct(d,1-m),new Ct(g,1-S),new Ct(E,1-v)]:[new Ct(h,1-u),new Ct(p,1-m),new Ct(x,1-S),new Ct(y,1-v)]}};function Dm(r,t,e){if(e.shapes=[],Array.isArray(r))for(let i=0,s=r.length;i<s;i++){const a=r[i];e.shapes.push(a.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class zo extends on{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const a=t/2,c=e/2,h=Math.floor(i),u=Math.floor(s),d=h+1,p=u+1,m=t/h,g=e/u,x=[],S=[],E=[],y=[];for(let v=0;v<p;v++){const D=v*g-c;for(let C=0;C<d;C++){const R=C*m-a;S.push(R,-D,0),E.push(0,0,1),y.push(C/h),y.push(1-v/u)}}for(let v=0;v<u;v++)for(let D=0;D<h;D++){const C=D+d*v,R=D+d*(v+1),N=D+1+d*(v+1),O=D+1+d*v;x.push(C,R,O),x.push(R,N,O)}this.setIndex(x),this.setAttribute("position",new Fe(S,3)),this.setAttribute("normal",new Fe(E,3)),this.setAttribute("uv",new Fe(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zo(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ec extends on{constructor(t=new Bo([new Ct(0,.5),new Ct(-.5,-.5),new Ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],a=[],c=[];let h=0,u=0;if(Array.isArray(t)===!1)d(t);else for(let p=0;p<t.length;p++)d(t[p]),this.addGroup(h,u,p),h+=u,u=0;this.setIndex(i),this.setAttribute("position",new Fe(s,3)),this.setAttribute("normal",new Fe(a,3)),this.setAttribute("uv",new Fe(c,2));function d(p){const m=s.length/3,g=p.extractPoints(e);let x=g.shape;const S=g.holes;hi.isClockWise(x)===!1&&(x=x.reverse());for(let y=0,v=S.length;y<v;y++){const D=S[y];hi.isClockWise(D)===!0&&(S[y]=D.reverse())}const E=hi.triangulateShape(x,S);for(let y=0,v=S.length;y<v;y++){const D=S[y];x=x.concat(D)}for(let y=0,v=x.length;y<v;y++){const D=x[y];s.push(D.x,D.y,0),a.push(0,0,1),c.push(D.x,D.y)}for(let y=0,v=E.length;y<v;y++){const D=E[y],C=D[0]+m,R=D[1]+m,N=D[2]+m;i.push(C,R,N),u+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Im(e,t)}static fromJSON(t,e){const i=[];for(let s=0,a=t.shapes.length;s<a;s++){const c=e[t.shapes[s]];i.push(c)}return new Ec(i,t.curveSegments)}}function Im(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,i=r.length;e<i;e++){const s=r[e];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t}class Nm extends on{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],i=new Set,s=new z,a=new z;if(t.index!==null){const c=t.attributes.position,h=t.index;let u=t.groups;u.length===0&&(u=[{start:0,count:h.count,materialIndex:0}]);for(let d=0,p=u.length;d<p;++d){const m=u[d],g=m.start,x=m.count;for(let S=g,E=g+x;S<E;S+=3)for(let y=0;y<3;y++){const v=h.getX(S+y),D=h.getX(S+(y+1)%3);s.fromBufferAttribute(c,v),a.fromBufferAttribute(c,D),Zh(s,a,i)===!0&&(e.push(s.x,s.y,s.z),e.push(a.x,a.y,a.z))}}}else{const c=t.attributes.position;for(let h=0,u=c.count/3;h<u;h++)for(let d=0;d<3;d++){const p=3*h+d,m=3*h+(d+1)%3;s.fromBufferAttribute(c,p),a.fromBufferAttribute(c,m),Zh(s,a,i)===!0&&(e.push(s.x,s.y,s.z),e.push(a.x,a.y,a.z))}}this.setAttribute("position",new Fe(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Zh(r,t,e){const i=`${r.x},${r.y},${r.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${r.x},${r.y},${r.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}class Um extends Un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pf extends Nr{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ye(16777215),this.specular=new ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qu,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Om extends Nr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fm extends Nr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class mf extends Je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Va=new Re,qh=new z,Yh=new z;class Bm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vc,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;qh.setFromMatrixPosition(t.matrixWorld),e.position.copy(qh),Yh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yh),e.updateMatrixWorld(),Va.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Va,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Va)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class bc extends ef{constructor(t=-1,e=1,i=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-t,c=i+t,h=s+e,u=s-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,c=a+d*this.view.width,h-=p*this.view.offsetY,u=h-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,h,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class zm extends Bm{constructor(){super(new bc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class km extends mf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new zm}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Hm extends mf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Vm extends on{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Gm extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Jl extends Xp{constructor(t,e,i=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const Jh=new Re;class Wm{constructor(t,e,i=0,s=1/0){this.ray=new pc(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new mc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):xe("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Jh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jh),this}intersectObject(t,e=!0,i=[]){return Kl(t,this,i,e),i.sort(Kh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,a=t.length;s<a;s++)Kl(t[s],this,i,e);return i.sort(Kh),i}}function Kh(r,t){return r.distance-t.distance}function Kl(r,t,e,i){let s=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const a=r.children;for(let c=0,h=a.length;c<h;c++)Kl(a[c],t,e,!0)}}const jh=new z,fo=new z,yr=new z,Sr=new z,Ga=new z,Xm=new z,Zm=new z;class qm{constructor(t=new z,e=new z){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){jh.subVectors(t,this.start),fo.subVectors(this.end,this.start);const i=fo.dot(fo);let a=fo.dot(jh)/i;return e&&(a=ae(a,0,1)),a}closestPointToPoint(t,e,i){const s=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Xm,i=Zm){const s=10000000000000001e-32;let a,c;const h=this.start,u=t.start,d=this.end,p=t.end;yr.subVectors(d,h),Sr.subVectors(p,u),Ga.subVectors(h,u);const m=yr.dot(yr),g=Sr.dot(Sr),x=Sr.dot(Ga);if(m<=s&&g<=s)return e.copy(h),i.copy(u),e.sub(i),e.dot(e);if(m<=s)a=0,c=x/g,c=ae(c,0,1);else{const S=yr.dot(Ga);if(g<=s)c=0,a=ae(-S/m,0,1);else{const E=yr.dot(Sr),y=m*g-E*E;y!==0?a=ae((E*x-S*g)/y,0,1):a=0,c=(E*a+x)/g,c<0?(c=0,a=ae(-S/m,0,1)):c>1&&(c=1,a=ae((E-S)/m,0,1))}}return e.copy(h).add(yr.multiplyScalar(a)),i.copy(u).add(Sr.multiplyScalar(c)),e.sub(i),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function $h(r,t,e,i){const s=Ym(i);switch(e){case Wu:return r*t;case Zu:return r*t/s.components*s.byteLength;case ac:return r*t/s.components*s.byteLength;case Cr:return r*t*2/s.components*s.byteLength;case lc:return r*t*2/s.components*s.byteLength;case Xu:return r*t*3/s.components*s.byteLength;case In:return r*t*4/s.components*s.byteLength;case cc:return r*t*4/s.components*s.byteLength;case bo:case To:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case wo:case Ao:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case pl:case _l:return Math.max(r,16)*Math.max(t,8)/4;case dl:case ml:return Math.max(r,8)*Math.max(t,8)/2;case gl:case vl:case yl:case Sl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case xl:case Ml:case El:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case wl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Al:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Il:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ol:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Bl:case zl:case kl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Hl:case Vl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Gl:case Wl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ym(r){switch(r){case pn:case ku:return{byteLength:1,components:1};case hs:case Hu:case di:return{byteLength:2,components:1};case sc:case oc:return{byteLength:2,components:4};case Kn:case rc:case Wn:return{byteLength:4,components:1};case Vu:case Gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nc}}));typeof window<"u"&&(window.__THREE__?ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nc);function _f(){let r=null,t=!1,e=null,i=null;function s(a,c){e(a,c),i=r.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(s),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){r=a}}}function Jm(r){const t=new WeakMap;function e(h,u){const d=h.array,p=h.usage,m=d.byteLength,g=r.createBuffer();r.bindBuffer(u,g),r.bufferData(u,d,p),h.onUploadCallback();let x;if(d instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=r.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=r.SHORT;else if(d instanceof Uint32Array)x=r.UNSIGNED_INT;else if(d instanceof Int32Array)x=r.INT;else if(d instanceof Int8Array)x=r.BYTE;else if(d instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:m}}function i(h,u,d){const p=u.array,m=u.updateRanges;if(r.bindBuffer(d,h),m.length===0)r.bufferSubData(d,0,p);else{m.sort((x,S)=>x.start-S.start);let g=0;for(let x=1;x<m.length;x++){const S=m[g],E=m[x];E.start<=S.start+S.count+1?S.count=Math.max(S.count,E.start+E.count-S.start):(++g,m[g]=E)}m.length=g+1;for(let x=0,S=m.length;x<S;x++){const E=m[x];r.bufferSubData(d,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const u=t.get(h);u&&(r.deleteBuffer(u.buffer),t.delete(h))}function c(h,u){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const p=t.get(h);(!p||p.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=t.get(h);if(d===void 0)t.set(h,e(h,u));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,h,u),d.version=h.version}}return{get:s,remove:a,update:c}}var Km=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$m=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,e_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,n_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,i_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,s_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,o_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,a_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,l_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,c_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,h_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,m_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,__=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,g_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,v_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,x_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,y_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,S_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,M_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w_="gl_FragColor = linearToOutputTexel( gl_FragColor );",A_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,C_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,P_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,R_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,L_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,I_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,B_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,V_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,G_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,W_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,X_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Y_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,J_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,K_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,j_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Q_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ng=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ig=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,og=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ag=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ag=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Dg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ig=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ng=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Og=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ev=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ov=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,av=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_v=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ev=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Av=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ue={alphahash_fragment:Km,alphahash_pars_fragment:jm,alphamap_fragment:$m,alphamap_pars_fragment:Qm,alphatest_fragment:t_,alphatest_pars_fragment:e_,aomap_fragment:n_,aomap_pars_fragment:i_,batching_pars_vertex:r_,batching_vertex:s_,begin_vertex:o_,beginnormal_vertex:a_,bsdfs:l_,iridescence_fragment:c_,bumpmap_pars_fragment:h_,clipping_planes_fragment:u_,clipping_planes_pars_fragment:f_,clipping_planes_pars_vertex:d_,clipping_planes_vertex:p_,color_fragment:m_,color_pars_fragment:__,color_pars_vertex:g_,color_vertex:v_,common:x_,cube_uv_reflection_fragment:y_,defaultnormal_vertex:S_,displacementmap_pars_vertex:M_,displacementmap_vertex:E_,emissivemap_fragment:b_,emissivemap_pars_fragment:T_,colorspace_fragment:w_,colorspace_pars_fragment:A_,envmap_fragment:C_,envmap_common_pars_fragment:P_,envmap_pars_fragment:R_,envmap_pars_vertex:L_,envmap_physical_pars_fragment:V_,envmap_vertex:D_,fog_vertex:I_,fog_pars_vertex:N_,fog_fragment:U_,fog_pars_fragment:O_,gradientmap_pars_fragment:F_,lightmap_pars_fragment:B_,lights_lambert_fragment:z_,lights_lambert_pars_fragment:k_,lights_pars_begin:H_,lights_toon_fragment:G_,lights_toon_pars_fragment:W_,lights_phong_fragment:X_,lights_phong_pars_fragment:Z_,lights_physical_fragment:q_,lights_physical_pars_fragment:Y_,lights_fragment_begin:J_,lights_fragment_maps:K_,lights_fragment_end:j_,logdepthbuf_fragment:$_,logdepthbuf_pars_fragment:Q_,logdepthbuf_pars_vertex:tg,logdepthbuf_vertex:eg,map_fragment:ng,map_pars_fragment:ig,map_particle_fragment:rg,map_particle_pars_fragment:sg,metalnessmap_fragment:og,metalnessmap_pars_fragment:ag,morphinstance_vertex:lg,morphcolor_vertex:cg,morphnormal_vertex:hg,morphtarget_pars_vertex:ug,morphtarget_vertex:fg,normal_fragment_begin:dg,normal_fragment_maps:pg,normal_pars_fragment:mg,normal_pars_vertex:_g,normal_vertex:gg,normalmap_pars_fragment:vg,clearcoat_normal_fragment_begin:xg,clearcoat_normal_fragment_maps:yg,clearcoat_pars_fragment:Sg,iridescence_pars_fragment:Mg,opaque_fragment:Eg,packing:bg,premultiplied_alpha_fragment:Tg,project_vertex:wg,dithering_fragment:Ag,dithering_pars_fragment:Cg,roughnessmap_fragment:Pg,roughnessmap_pars_fragment:Rg,shadowmap_pars_fragment:Lg,shadowmap_pars_vertex:Dg,shadowmap_vertex:Ig,shadowmask_pars_fragment:Ng,skinbase_vertex:Ug,skinning_pars_vertex:Og,skinning_vertex:Fg,skinnormal_vertex:Bg,specularmap_fragment:zg,specularmap_pars_fragment:kg,tonemapping_fragment:Hg,tonemapping_pars_fragment:Vg,transmission_fragment:Gg,transmission_pars_fragment:Wg,uv_pars_fragment:Xg,uv_pars_vertex:Zg,uv_vertex:qg,worldpos_vertex:Yg,background_vert:Jg,background_frag:Kg,backgroundCube_vert:jg,backgroundCube_frag:$g,cube_vert:Qg,cube_frag:tv,depth_vert:ev,depth_frag:nv,distance_vert:iv,distance_frag:rv,equirect_vert:sv,equirect_frag:ov,linedashed_vert:av,linedashed_frag:lv,meshbasic_vert:cv,meshbasic_frag:hv,meshlambert_vert:uv,meshlambert_frag:fv,meshmatcap_vert:dv,meshmatcap_frag:pv,meshnormal_vert:mv,meshnormal_frag:_v,meshphong_vert:gv,meshphong_frag:vv,meshphysical_vert:xv,meshphysical_frag:yv,meshtoon_vert:Sv,meshtoon_frag:Mv,points_vert:Ev,points_frag:bv,shadow_vert:Tv,shadow_frag:wv,sprite_vert:Av,sprite_frag:Cv},bt={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},cn={basic:{uniforms:nn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:nn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ye(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:nn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:nn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:nn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new ye(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:nn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:nn([bt.points,bt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:nn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:nn([bt.common,bt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:nn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:nn([bt.sprite,bt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:nn([bt.common,bt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:nn([bt.lights,bt.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};cn.physical={uniforms:nn([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const po={r:0,b:0,g:0},ki=new jn,Pv=new Re;function Rv(r,t,e,i,s,a,c){const h=new ye(0);let u=a===!0?0:1,d,p,m=null,g=0,x=null;function S(C){let R=C.isScene===!0?C.background:null;return R&&R.isTexture&&(R=(C.backgroundBlurriness>0?e:t).get(R)),R}function E(C){let R=!1;const N=S(C);N===null?v(h,u):N&&N.isColor&&(v(N,1),R=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||R)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(C,R){const N=S(R);N&&(N.isCubeTexture||N.mapping===Fo)?(p===void 0&&(p=new En(new xs(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Rr(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(O,B,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),ki.copy(R.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),p.material.uniforms.envMap.value=N,p.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Pv.makeRotationFromEuler(ki)),p.material.toneMapped=Se.getTransfer(N.colorSpace)!==Ee,(m!==N||g!==N.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,m=N,g=N.version,x=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(d===void 0&&(d=new En(new zo(2,2),new Un({name:"BackgroundMaterial",uniforms:Rr(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=N,d.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,d.material.toneMapped=Se.getTransfer(N.colorSpace)!==Ee,N.matrixAutoUpdate===!0&&N.updateMatrix(),d.material.uniforms.uvTransform.value.copy(N.matrix),(m!==N||g!==N.version||x!==r.toneMapping)&&(d.material.needsUpdate=!0,m=N,g=N.version,x=r.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null))}function v(C,R){C.getRGB(po,tf(r)),i.buffers.color.setClear(po.r,po.g,po.b,R,c)}function D(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,R=1){h.set(C),u=R,v(h,u)},getClearAlpha:function(){return u},setClearAlpha:function(C){u=C,v(h,u)},render:E,addToRenderList:y,dispose:D}}function Lv(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},s=g(null);let a=s,c=!1;function h(A,F,Y,j,st){let it=!1;const Q=m(j,Y,F);a!==Q&&(a=Q,d(a.object)),it=x(A,j,Y,st),it&&S(A,j,Y,st),st!==null&&t.update(st,r.ELEMENT_ARRAY_BUFFER),(it||c)&&(c=!1,R(A,F,Y,j),st!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(st).buffer))}function u(){return r.createVertexArray()}function d(A){return r.bindVertexArray(A)}function p(A){return r.deleteVertexArray(A)}function m(A,F,Y){const j=Y.wireframe===!0;let st=i[A.id];st===void 0&&(st={},i[A.id]=st);let it=st[F.id];it===void 0&&(it={},st[F.id]=it);let Q=it[j];return Q===void 0&&(Q=g(u()),it[j]=Q),Q}function g(A){const F=[],Y=[],j=[];for(let st=0;st<e;st++)F[st]=0,Y[st]=0,j[st]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Y,attributeDivisors:j,object:A,attributes:{},index:null}}function x(A,F,Y,j){const st=a.attributes,it=F.attributes;let Q=0;const Z=Y.getAttributes();for(const J in Z)if(Z[J].location>=0){const rt=st[J];let ft=it[J];if(ft===void 0&&(J==="instanceMatrix"&&A.instanceMatrix&&(ft=A.instanceMatrix),J==="instanceColor"&&A.instanceColor&&(ft=A.instanceColor)),rt===void 0||rt.attribute!==ft||ft&&rt.data!==ft.data)return!0;Q++}return a.attributesNum!==Q||a.index!==j}function S(A,F,Y,j){const st={},it=F.attributes;let Q=0;const Z=Y.getAttributes();for(const J in Z)if(Z[J].location>=0){let rt=it[J];rt===void 0&&(J==="instanceMatrix"&&A.instanceMatrix&&(rt=A.instanceMatrix),J==="instanceColor"&&A.instanceColor&&(rt=A.instanceColor));const ft={};ft.attribute=rt,rt&&rt.data&&(ft.data=rt.data),st[J]=ft,Q++}a.attributes=st,a.attributesNum=Q,a.index=j}function E(){const A=a.newAttributes;for(let F=0,Y=A.length;F<Y;F++)A[F]=0}function y(A){v(A,0)}function v(A,F){const Y=a.newAttributes,j=a.enabledAttributes,st=a.attributeDivisors;Y[A]=1,j[A]===0&&(r.enableVertexAttribArray(A),j[A]=1),st[A]!==F&&(r.vertexAttribDivisor(A,F),st[A]=F)}function D(){const A=a.newAttributes,F=a.enabledAttributes;for(let Y=0,j=F.length;Y<j;Y++)F[Y]!==A[Y]&&(r.disableVertexAttribArray(Y),F[Y]=0)}function C(A,F,Y,j,st,it,Q){Q===!0?r.vertexAttribIPointer(A,F,Y,st,it):r.vertexAttribPointer(A,F,Y,j,st,it)}function R(A,F,Y,j){E();const st=j.attributes,it=Y.getAttributes(),Q=F.defaultAttributeValues;for(const Z in it){const J=it[Z];if(J.location>=0){let Tt=st[Z];if(Tt===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(Tt=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(Tt=A.instanceColor)),Tt!==void 0){const rt=Tt.normalized,ft=Tt.itemSize,Xt=t.get(Tt);if(Xt===void 0)continue;const Vt=Xt.buffer,Qt=Xt.type,Zt=Xt.bytesPerElement,q=Qt===r.INT||Qt===r.UNSIGNED_INT||Tt.gpuType===rc;if(Tt.isInterleavedBufferAttribute){const at=Tt.data,Pt=at.stride,jt=Tt.offset;if(at.isInstancedInterleavedBuffer){for(let Ut=0;Ut<J.locationSize;Ut++)v(J.location+Ut,at.meshPerAttribute);A.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ut=0;Ut<J.locationSize;Ut++)y(J.location+Ut);r.bindBuffer(r.ARRAY_BUFFER,Vt);for(let Ut=0;Ut<J.locationSize;Ut++)C(J.location+Ut,ft/J.locationSize,Qt,rt,Pt*Zt,(jt+ft/J.locationSize*Ut)*Zt,q)}else{if(Tt.isInstancedBufferAttribute){for(let at=0;at<J.locationSize;at++)v(J.location+at,Tt.meshPerAttribute);A.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let at=0;at<J.locationSize;at++)y(J.location+at);r.bindBuffer(r.ARRAY_BUFFER,Vt);for(let at=0;at<J.locationSize;at++)C(J.location+at,ft/J.locationSize,Qt,rt,ft*Zt,ft/J.locationSize*at*Zt,q)}}else if(Q!==void 0){const rt=Q[Z];if(rt!==void 0)switch(rt.length){case 2:r.vertexAttrib2fv(J.location,rt);break;case 3:r.vertexAttrib3fv(J.location,rt);break;case 4:r.vertexAttrib4fv(J.location,rt);break;default:r.vertexAttrib1fv(J.location,rt)}}}}D()}function N(){W();for(const A in i){const F=i[A];for(const Y in F){const j=F[Y];for(const st in j)p(j[st].object),delete j[st];delete F[Y]}delete i[A]}}function O(A){if(i[A.id]===void 0)return;const F=i[A.id];for(const Y in F){const j=F[Y];for(const st in j)p(j[st].object),delete j[st];delete F[Y]}delete i[A.id]}function B(A){for(const F in i){const Y=i[F];if(Y[A.id]===void 0)continue;const j=Y[A.id];for(const st in j)p(j[st].object),delete j[st];delete Y[A.id]}}function W(){w(),c=!0,a!==s&&(a=s,d(a.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:h,reset:W,resetDefaultState:w,dispose:N,releaseStatesOfGeometry:O,releaseStatesOfProgram:B,initAttributes:E,enableAttribute:y,disableUnusedAttributes:D}}function Dv(r,t,e){let i;function s(d){i=d}function a(d,p){r.drawArrays(i,d,p),e.update(p,i,1)}function c(d,p,m){m!==0&&(r.drawArraysInstanced(i,d,p,m),e.update(p,i,m))}function h(d,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,p,0,m);let x=0;for(let S=0;S<m;S++)x+=p[S];e.update(x,i,1)}function u(d,p,m,g){if(m===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<d.length;S++)c(d[S],p[S],g[S]);else{x.multiDrawArraysInstancedWEBGL(i,d,0,p,0,g,0,m);let S=0;for(let E=0;E<m;E++)S+=p[E]*g[E];e.update(S,i,1)}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Iv(r,t,e,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");s=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(B){return!(B!==In&&i.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const W=B===di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==pn&&i.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Wn&&!W)}function u(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp";const p=u(d);p!==d&&(ne("WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const m=e.logarithmicDepthBuffer===!0,g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),C=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),N=r.getParameter(r.MAX_SAMPLES),O=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:u,textureFormatReadable:c,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:m,reversedDepthBuffer:g,maxTextures:x,maxVertexTextures:S,maxTextureSize:E,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:D,maxVaryings:C,maxFragmentUniforms:R,maxSamples:N,samples:O}}function Nv(r){const t=this;let e=null,i=0,s=!1,a=!1;const c=new Vi,h=new he,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const x=m.length!==0||g||i!==0||s;return s=g,i=m.length,x},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,g){e=p(m,g,0)},this.setState=function(m,g,x){const S=m.clippingPlanes,E=m.clipIntersection,y=m.clipShadows,v=r.get(m);if(!s||S===null||S.length===0||a&&!y)a?p(null):d();else{const D=a?0:i,C=D*4;let R=v.clippingState||null;u.value=R,R=p(S,g,C,x);for(let N=0;N!==C;++N)R[N]=e[N];v.clippingState=R,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=D}};function d(){u.value!==e&&(u.value=e,u.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function p(m,g,x,S){const E=m!==null?m.length:0;let y=null;if(E!==0){if(y=u.value,S!==!0||y===null){const v=x+E*4,D=g.matrixWorldInverse;h.getNormalMatrix(D),(y===null||y.length<v)&&(y=new Float32Array(v));for(let C=0,R=x;C!==E;++C,R+=4)c.copy(m[C]).applyMatrix4(D,h),c.normal.toArray(y,R),y[R+3]=c.constant}u.value=y,u.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,y}}function Uv(r){let t=new WeakMap;function e(c,h){return h===cl?c.mapping=Ki:h===hl&&(c.mapping=Ar),c}function i(c){if(c&&c.isTexture){const h=c.mapping;if(h===cl||h===hl)if(t.has(c)){const u=t.get(c).texture;return e(u,c.mapping)}else{const u=c.image;if(u&&u.height>0){const d=new rf(u.height);return d.fromEquirectangularTexture(r,c),t.set(c,d),c.addEventListener("dispose",s),e(d.texture,c.mapping)}else return null}}return c}function s(c){const h=c.target;h.removeEventListener("dispose",s);const u=t.get(h);u!==void 0&&(t.delete(h),u.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}const wi=4,Qh=[.125,.215,.35,.446,.526,.582],Xi=20,Ov=256,jr=new bc,tu=new ye;let Wa=null,Xa=0,Za=0,qa=!1;const Fv=new z;class eu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,a={}){const{size:c=256,position:h=Fv}=a;Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,i,s,u,h),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Wa,Xa,Za),this._renderer.xr.enabled=qa,t.scissorTest=!1,Mr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===Ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:di,format:In,colorSpace:Pr,depthBuffer:!1},s=nu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nu(t,e,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Bv(a)),this._blurMaterial=kv(a,t,e),this._ggxMaterial=zv(a,t,e)}return s}_compileMaterial(t){const e=new En(new on,t);this._renderer.compile(e,jr)}_sceneToCubeUV(t,e,i,s,a){const u=new yn(90,1,e,i),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,x=m.toneMapping;m.getClearColor(tu),m.toneMapping=Zn,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new En(new xs,new _c({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,y=E.material;let v=!1;const D=t.background;D?D.isColor&&(y.color.copy(D),t.background=null,v=!0):(y.color.copy(tu),v=!0);for(let C=0;C<6;C++){const R=C%3;R===0?(u.up.set(0,d[C],0),u.position.set(a.x,a.y,a.z),u.lookAt(a.x+p[C],a.y,a.z)):R===1?(u.up.set(0,0,d[C]),u.position.set(a.x,a.y,a.z),u.lookAt(a.x,a.y+p[C],a.z)):(u.up.set(0,d[C],0),u.position.set(a.x,a.y,a.z),u.lookAt(a.x,a.y,a.z+p[C]));const N=this._cubeSize;Mr(s,R*N,C>2?N:0,N,N),m.setRenderTarget(s),v&&m.render(E,u),m.render(t,u)}m.toneMapping=x,m.autoClear=g,t.background=D}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ki||t.mapping===Ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iu());const a=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const h=a.uniforms;h.envMap.value=t;const u=this._cubeSize;Mr(e,0,0,3*u,2*u),i.setRenderTarget(e),i.render(c,jr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,h=this._lodMeshes[i];h.material=c;const u=c.uniforms,d=i/(this._lodMeshes.length-1),p=e/(this._lodMeshes.length-1),m=Math.sqrt(d*d-p*p),g=0+d*1.25,x=m*g,{_lodMax:S}=this,E=this._sizeLods[i],y=3*E*(i>S-wi?i-S+wi:0),v=4*(this._cubeSize-E);u.envMap.value=t.texture,u.roughness.value=x,u.mipInt.value=S-e,Mr(a,y,v,3*E,2*E),s.setRenderTarget(a),s.render(h,jr),u.envMap.value=a.texture,u.roughness.value=0,u.mipInt.value=S-i,Mr(t,y,v,3*E,2*E),s.setRenderTarget(t),s.render(h,jr)}_blur(t,e,i,s,a){const c=this._pingPongRenderTarget;this._halfBlur(t,c,e,i,s,"latitudinal",a),this._halfBlur(c,t,i,i,s,"longitudinal",a)}_halfBlur(t,e,i,s,a,c,h){const u=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&xe("blur direction must be either latitudinal or longitudinal!");const p=3,m=this._lodMeshes[s];m.material=d;const g=d.uniforms,x=this._sizeLods[i]-1,S=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*Xi-1),E=a/S,y=isFinite(a)?1+Math.floor(p*E):Xi;y>Xi&&ne(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Xi}`);const v=[];let D=0;for(let B=0;B<Xi;++B){const W=B/E,w=Math.exp(-W*W/2);v.push(w),B===0?D+=w:B<y&&(D+=2*w)}for(let B=0;B<v.length;B++)v[B]=v[B]/D;g.envMap.value=t.texture,g.samples.value=y,g.weights.value=v,g.latitudinal.value=c==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:C}=this;g.dTheta.value=S,g.mipInt.value=C-i;const R=this._sizeLods[s],N=3*R*(s>C-wi?s-C+wi:0),O=4*(this._cubeSize-R);Mr(e,N,O,3*R,2*R),u.setRenderTarget(e),u.render(m,jr)}}function Bv(r){const t=[],e=[],i=[];let s=r;const a=r-wi+1+Qh.length;for(let c=0;c<a;c++){const h=Math.pow(2,s);t.push(h);let u=1/h;c>r-wi?u=Qh[c-r+wi-1]:c===0&&(u=0),e.push(u);const d=1/(h-2),p=-d,m=1+d,g=[p,p,m,p,m,m,p,p,m,m,p,m],x=6,S=6,E=3,y=2,v=1,D=new Float32Array(E*S*x),C=new Float32Array(y*S*x),R=new Float32Array(v*S*x);for(let O=0;O<x;O++){const B=O%3*2/3-1,W=O>2?0:-1,w=[B,W,0,B+2/3,W,0,B+2/3,W+1,0,B,W,0,B+2/3,W+1,0,B,W+1,0];D.set(w,E*S*O),C.set(g,y*S*O);const A=[O,O,O,O,O,O];R.set(A,v*S*O)}const N=new on;N.setAttribute("position",new Nn(D,E)),N.setAttribute("uv",new Nn(C,y)),N.setAttribute("faceIndex",new Nn(R,v)),i.push(new En(N,null)),s>wi&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function nu(r,t,e){const i=new Yn(r,t,e);return i.texture.mapping=Fo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mr(r,t,e,i,s){r.viewport.set(t,e,i,s),r.scissor.set(t,e,i,s)}function zv(r,t,e){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ov,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ko(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function kv(r,t,e){const i=new Float32Array(Xi),s=new z(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function iu(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function ru(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function ko(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hv(r){let t=new WeakMap,e=null;function i(h){if(h&&h.isTexture){const u=h.mapping,d=u===cl||u===hl,p=u===Ki||u===Ar;if(d||p){let m=t.get(h);const g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return e===null&&(e=new eu(r)),m=d?e.fromEquirectangular(h,m):e.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const x=h.image;return d&&x&&x.height>0||p&&x&&s(x)?(e===null&&(e=new eu(r)),m=d?e.fromEquirectangular(h):e.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",a),m.texture):null}}}return h}function s(h){let u=0;const d=6;for(let p=0;p<d;p++)h[p]!==void 0&&u++;return u===d}function a(h){const u=h.target;u.removeEventListener("dispose",a);const d=t.get(u);d!==void 0&&(t.delete(u),d.dispose())}function c(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:c}}function Vv(r){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=r.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&fs("WebGLRenderer: "+i+" extension not supported."),s}}}function Gv(r,t,e,i){const s={},a=new WeakMap;function c(m){const g=m.target;g.index!==null&&t.remove(g.index);for(const S in g.attributes)t.remove(g.attributes[S]);g.removeEventListener("dispose",c),delete s[g.id];const x=a.get(g);x&&(t.remove(x),a.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function h(m,g){return s[g.id]===!0||(g.addEventListener("dispose",c),s[g.id]=!0,e.memory.geometries++),g}function u(m){const g=m.attributes;for(const x in g)t.update(g[x],r.ARRAY_BUFFER)}function d(m){const g=[],x=m.index,S=m.attributes.position;let E=0;if(x!==null){const D=x.array;E=x.version;for(let C=0,R=D.length;C<R;C+=3){const N=D[C+0],O=D[C+1],B=D[C+2];g.push(N,O,O,B,B,N)}}else if(S!==void 0){const D=S.array;E=S.version;for(let C=0,R=D.length/3-1;C<R;C+=3){const N=C+0,O=C+1,B=C+2;g.push(N,O,O,B,B,N)}}else return;const y=new(Yu(g)?Qu:$u)(g,1);y.version=E;const v=a.get(m);v&&t.remove(v),a.set(m,y)}function p(m){const g=a.get(m);if(g){const x=m.index;x!==null&&g.version<x.version&&d(m)}else d(m);return a.get(m)}return{get:h,update:u,getWireframeAttribute:p}}function Wv(r,t,e){let i;function s(g){i=g}let a,c;function h(g){a=g.type,c=g.bytesPerElement}function u(g,x){r.drawElements(i,x,a,g*c),e.update(x,i,1)}function d(g,x,S){S!==0&&(r.drawElementsInstanced(i,x,a,g*c,S),e.update(x,i,S))}function p(g,x,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,a,g,0,S);let y=0;for(let v=0;v<S;v++)y+=x[v];e.update(y,i,1)}function m(g,x,S,E){if(S===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<g.length;v++)d(g[v]/c,x[v],E[v]);else{y.multiDrawElementsInstancedWEBGL(i,x,0,a,g,0,E,0,S);let v=0;for(let D=0;D<S;D++)v+=x[D]*E[D];e.update(v,i,1)}}this.setMode=s,this.setIndex=h,this.render=u,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function Xv(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,h){switch(e.calls++,c){case r.TRIANGLES:e.triangles+=h*(a/3);break;case r.LINES:e.lines+=h*(a/2);break;case r.LINE_STRIP:e.lines+=h*(a-1);break;case r.LINE_LOOP:e.lines+=h*a;break;case r.POINTS:e.points+=h*a;break;default:xe("WebGLInfo: Unknown draw mode:",c);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Zv(r,t,e){const i=new WeakMap,s=new we;function a(c,h,u){const d=c.morphTargetInfluences,p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=p!==void 0?p.length:0;let g=i.get(h);if(g===void 0||g.count!==m){let A=function(){W.dispose(),i.delete(h),h.removeEventListener("dispose",A)};var x=A;g!==void 0&&g.texture.dispose();const S=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let R=0;S===!0&&(R=1),E===!0&&(R=2),y===!0&&(R=3);let N=h.attributes.position.count*R,O=1;N>t.maxTextureSize&&(O=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const B=new Float32Array(N*O*4*m),W=new Ku(B,N,O,m);W.type=Wn,W.needsUpdate=!0;const w=R*4;for(let F=0;F<m;F++){const Y=v[F],j=D[F],st=C[F],it=N*O*4*F;for(let Q=0;Q<Y.count;Q++){const Z=Q*w;S===!0&&(s.fromBufferAttribute(Y,Q),B[it+Z+0]=s.x,B[it+Z+1]=s.y,B[it+Z+2]=s.z,B[it+Z+3]=0),E===!0&&(s.fromBufferAttribute(j,Q),B[it+Z+4]=s.x,B[it+Z+5]=s.y,B[it+Z+6]=s.z,B[it+Z+7]=0),y===!0&&(s.fromBufferAttribute(st,Q),B[it+Z+8]=s.x,B[it+Z+9]=s.y,B[it+Z+10]=s.z,B[it+Z+11]=st.itemSize===4?s.w:1)}}g={count:m,texture:W,size:new Ct(N,O)},i.set(h,g),h.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)u.getUniforms().setValue(r,"morphTexture",c.morphTexture,e);else{let S=0;for(let y=0;y<d.length;y++)S+=d[y];const E=h.morphTargetsRelative?1:1-S;u.getUniforms().setValue(r,"morphTargetBaseInfluence",E),u.getUniforms().setValue(r,"morphTargetInfluences",d)}u.getUniforms().setValue(r,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:a}}function qv(r,t,e,i){let s=new WeakMap;function a(u){const d=i.render.frame,p=u.geometry,m=t.get(u,p);if(s.get(m)!==d&&(t.update(m),s.set(m,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",h)===!1&&u.addEventListener("dispose",h),s.get(u)!==d&&(e.update(u.instanceMatrix,r.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,r.ARRAY_BUFFER),s.set(u,d))),u.isSkinnedMesh){const g=u.skeleton;s.get(g)!==d&&(g.update(),s.set(g,d))}return m}function c(){s=new WeakMap}function h(u){const d=u.target;d.removeEventListener("dispose",h),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:c}}const Yv={[Du]:"LINEAR_TONE_MAPPING",[Iu]:"REINHARD_TONE_MAPPING",[Nu]:"CINEON_TONE_MAPPING",[Uu]:"ACES_FILMIC_TONE_MAPPING",[Fu]:"AGX_TONE_MAPPING",[Bu]:"NEUTRAL_TONE_MAPPING",[Ou]:"CUSTOM_TONE_MAPPING"};function Jv(r,t,e,i,s){const a=new Yn(t,e,{type:r,depthBuffer:i,stencilBuffer:s}),c=new Yn(t,e,{type:di,depthBuffer:!1,stencilBuffer:!1}),h=new on;h.setAttribute("position",new Fe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Fe([0,2,0,0,2,0],2));const u=new Um({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new En(h,u),p=new bc(-1,1,1,-1,0,1);let m=null,g=null,x=!1,S,E=null,y=[],v=!1;this.setSize=function(D,C){a.setSize(D,C),c.setSize(D,C);for(let R=0;R<y.length;R++){const N=y[R];N.setSize&&N.setSize(D,C)}},this.setEffects=function(D){y=D,v=y.length>0&&y[0].isRenderPass===!0;const C=a.width,R=a.height;for(let N=0;N<y.length;N++){const O=y[N];O.setSize&&O.setSize(C,R)}},this.begin=function(D,C){if(x||D.toneMapping===Zn&&y.length===0)return!1;if(E=C,C!==null){const R=C.width,N=C.height;(a.width!==R||a.height!==N)&&this.setSize(R,N)}return v===!1&&D.setRenderTarget(a),S=D.toneMapping,D.toneMapping=Zn,!0},this.hasRenderPass=function(){return v},this.end=function(D,C){D.toneMapping=S,x=!0;let R=a,N=c;for(let O=0;O<y.length;O++){const B=y[O];if(B.enabled!==!1&&(B.render(D,N,R,C),B.needsSwap!==!1)){const W=R;R=N,N=W}}if(m!==D.outputColorSpace||g!==D.toneMapping){m=D.outputColorSpace,g=D.toneMapping,u.defines={},Se.getTransfer(m)===Ee&&(u.defines.SRGB_TRANSFER="");const O=Yv[g];O&&(u.defines[O]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=R.texture,D.setRenderTarget(E),D.render(d,p),E=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),c.dispose(),h.dispose(),u.dispose()}}const gf=new sn,jl=new ps(1,1),vf=new Ku,xf=new Ap,yf=new nf,su=[],ou=[],au=new Float32Array(16),lu=new Float32Array(9),cu=new Float32Array(4);function Ur(r,t,e){const i=r[0];if(i<=0||i>0)return r;const s=t*e;let a=su[s];if(a===void 0&&(a=new Float32Array(s),su[s]=a),t!==0){i.toArray(a,0);for(let c=1,h=0;c!==t;++c)h+=e,r[c].toArray(a,h)}return a}function ze(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function ke(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Ho(r,t){let e=ou[t];e===void 0&&(e=new Int32Array(t),ou[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function Kv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function jv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2fv(this.addr,t),ke(e,t)}}function $v(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;r.uniform3fv(this.addr,t),ke(e,t)}}function Qv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4fv(this.addr,t),ke(e,t)}}function t0(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,i))return;cu.set(i),r.uniformMatrix2fv(this.addr,!1,cu),ke(e,i)}}function e0(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,i))return;lu.set(i),r.uniformMatrix3fv(this.addr,!1,lu),ke(e,i)}}function n0(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,i))return;au.set(i),r.uniformMatrix4fv(this.addr,!1,au),ke(e,i)}}function i0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function r0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2iv(this.addr,t),ke(e,t)}}function s0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;r.uniform3iv(this.addr,t),ke(e,t)}}function o0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4iv(this.addr,t),ke(e,t)}}function a0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function l0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2uiv(this.addr,t),ke(e,t)}}function c0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;r.uniform3uiv(this.addr,t),ke(e,t)}}function h0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4uiv(this.addr,t),ke(e,t)}}function u0(r,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s);let a;this.type===r.SAMPLER_2D_SHADOW?(jl.compareFunction=e.isReversedDepthBuffer()?uc:hc,a=jl):a=gf,e.setTexture2D(t||a,s)}function f0(r,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||xf,s)}function d0(r,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||yf,s)}function p0(r,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||vf,s)}function m0(r){switch(r){case 5126:return Kv;case 35664:return jv;case 35665:return $v;case 35666:return Qv;case 35674:return t0;case 35675:return e0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return r0;case 35668:case 35672:return s0;case 35669:case 35673:return o0;case 5125:return a0;case 36294:return l0;case 36295:return c0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return f0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return p0}}function _0(r,t){r.uniform1fv(this.addr,t)}function g0(r,t){const e=Ur(t,this.size,2);r.uniform2fv(this.addr,e)}function v0(r,t){const e=Ur(t,this.size,3);r.uniform3fv(this.addr,e)}function x0(r,t){const e=Ur(t,this.size,4);r.uniform4fv(this.addr,e)}function y0(r,t){const e=Ur(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function S0(r,t){const e=Ur(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function M0(r,t){const e=Ur(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function E0(r,t){r.uniform1iv(this.addr,t)}function b0(r,t){r.uniform2iv(this.addr,t)}function T0(r,t){r.uniform3iv(this.addr,t)}function w0(r,t){r.uniform4iv(this.addr,t)}function A0(r,t){r.uniform1uiv(this.addr,t)}function C0(r,t){r.uniform2uiv(this.addr,t)}function P0(r,t){r.uniform3uiv(this.addr,t)}function R0(r,t){r.uniform4uiv(this.addr,t)}function L0(r,t,e){const i=this.cache,s=t.length,a=Ho(e,s);ze(i,a)||(r.uniform1iv(this.addr,a),ke(i,a));let c;this.type===r.SAMPLER_2D_SHADOW?c=jl:c=gf;for(let h=0;h!==s;++h)e.setTexture2D(t[h]||c,a[h])}function D0(r,t,e){const i=this.cache,s=t.length,a=Ho(e,s);ze(i,a)||(r.uniform1iv(this.addr,a),ke(i,a));for(let c=0;c!==s;++c)e.setTexture3D(t[c]||xf,a[c])}function I0(r,t,e){const i=this.cache,s=t.length,a=Ho(e,s);ze(i,a)||(r.uniform1iv(this.addr,a),ke(i,a));for(let c=0;c!==s;++c)e.setTextureCube(t[c]||yf,a[c])}function N0(r,t,e){const i=this.cache,s=t.length,a=Ho(e,s);ze(i,a)||(r.uniform1iv(this.addr,a),ke(i,a));for(let c=0;c!==s;++c)e.setTexture2DArray(t[c]||vf,a[c])}function U0(r){switch(r){case 5126:return _0;case 35664:return g0;case 35665:return v0;case 35666:return x0;case 35674:return y0;case 35675:return S0;case 35676:return M0;case 5124:case 35670:return E0;case 35667:case 35671:return b0;case 35668:case 35672:return T0;case 35669:case 35673:return w0;case 5125:return A0;case 36294:return C0;case 36295:return P0;case 36296:return R0;case 35678:case 36198:case 36298:case 36306:case 35682:return L0;case 35679:case 36299:case 36307:return D0;case 35680:case 36300:case 36308:case 36293:return I0;case 36289:case 36303:case 36311:case 36292:return N0}}class O0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=m0(e.type)}}class F0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=U0(e.type)}}class B0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const h=s[a];h.setValue(t,e[h.id],i)}}}const Ya=/(\w+)(\])?(\[|\.)?/g;function hu(r,t){r.seq.push(t),r.map[t.id]=t}function z0(r,t,e){const i=r.name,s=i.length;for(Ya.lastIndex=0;;){const a=Ya.exec(i),c=Ya.lastIndex;let h=a[1];const u=a[2]==="]",d=a[3];if(u&&(h=h|0),d===void 0||d==="["&&c+2===s){hu(e,d===void 0?new O0(h,r,t):new F0(h,r,t));break}else{let m=e.map[h];m===void 0&&(m=new B0(h),hu(e,m)),e=m}}}class Co{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const h=t.getActiveUniform(e,c),u=t.getUniformLocation(e,h.name);z0(h,u,this)}const s=[],a=[];for(const c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(c):a.push(c);s.length>0&&(this.seq=s.concat(a))}setValue(t,e,i,s){const a=this.map[e];a!==void 0&&a.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let a=0,c=e.length;a!==c;++a){const h=e[a],u=i[h.id];u.needsUpdate!==!1&&h.setValue(t,u.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,a=t.length;s!==a;++s){const c=t[s];c.id in e&&i.push(c)}return i}}function uu(r,t,e){const i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}const k0=37297;let H0=0;function V0(r,t){const e=r.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let c=s;c<a;c++){const h=c+1;i.push(`${h===t?">":" "} ${h}: ${e[c]}`)}return i.join(`
`)}const fu=new he;function G0(r){Se._getMatrix(fu,Se.workingColorSpace,r);const t=`mat3( ${fu.elements.map(e=>e.toFixed(4))} )`;switch(Se.getTransfer(r)){case Po:return[t,"LinearTransferOETF"];case Ee:return[t,"sRGBTransferOETF"];default:return ne("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function du(r,t,e){const i=r.getShaderParameter(t,r.COMPILE_STATUS),a=(r.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const h=parseInt(c[1]);return e.toUpperCase()+`

`+a+`

`+V0(r.getShaderSource(t),h)}else return a}function W0(r,t){const e=G0(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const X0={[Du]:"Linear",[Iu]:"Reinhard",[Nu]:"Cineon",[Uu]:"ACESFilmic",[Fu]:"AgX",[Bu]:"Neutral",[Ou]:"Custom"};function Z0(r,t){const e=X0[t];return e===void 0?(ne("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const mo=new z;function q0(){Se.getLuminanceCoefficients(mo);const r=mo.x.toFixed(4),t=mo.y.toFixed(4),e=mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ns).join(`
`)}function J0(r){const t=[];for(const e in r){const i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function K0(r,t){const e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=r.getActiveAttrib(t,s),c=a.name;let h=1;a.type===r.FLOAT_MAT2&&(h=2),a.type===r.FLOAT_MAT3&&(h=3),a.type===r.FLOAT_MAT4&&(h=4),e[c]={type:a.type,location:r.getAttribLocation(t,c),locationSize:h}}return e}function ns(r){return r!==""}function pu(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const j0=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(r){return r.replace(j0,Q0)}const $0=new Map;function Q0(r,t){let e=ue[t];if(e===void 0){const i=$0.get(t);if(i!==void 0)e=ue[i],ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return $l(e)}const tx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _u(r){return r.replace(tx,ex)}function ex(r,t,e,i){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function gu(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const nx={[Eo]:"SHADOWMAP_TYPE_PCF",[Qr]:"SHADOWMAP_TYPE_VSM"};function ix(r){return nx[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const rx={[Ki]:"ENVMAP_TYPE_CUBE",[Ar]:"ENVMAP_TYPE_CUBE",[Fo]:"ENVMAP_TYPE_CUBE_UV"};function sx(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":rx[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const ox={[Ar]:"ENVMAP_MODE_REFRACTION"};function ax(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":ox[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lx={[ic]:"ENVMAP_BLENDING_MULTIPLY",[qd]:"ENVMAP_BLENDING_MIX",[Yd]:"ENVMAP_BLENDING_ADD"};function cx(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":lx[r.combine]||"ENVMAP_BLENDING_NONE"}function hx(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function ux(r,t,e,i){const s=r.getContext(),a=e.defines;let c=e.vertexShader,h=e.fragmentShader;const u=ix(e),d=sx(e),p=ax(e),m=cx(e),g=hx(e),x=Y0(e),S=J0(a),E=s.createProgram();let y,v,D=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(ns).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(ns).join(`
`),v.length>0&&(v+=`
`)):(y=[gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),v=[gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",e.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?ue.tonemapping_pars_fragment:"",e.toneMapping!==Zn?Z0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,W0("linearToOutputTexel",e.outputColorSpace),q0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ns).join(`
`)),c=$l(c),c=pu(c,e),c=mu(c,e),h=$l(h),h=pu(h,e),h=mu(h,e),c=_u(c),h=_u(h),e.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",e.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const C=D+y+c,R=D+v+h,N=uu(s,s.VERTEX_SHADER,C),O=uu(s,s.FRAGMENT_SHADER,R);s.attachShader(E,N),s.attachShader(E,O),e.index0AttributeName!==void 0?s.bindAttribLocation(E,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function B(F){if(r.debug.checkShaderErrors){const Y=s.getProgramInfoLog(E)||"",j=s.getShaderInfoLog(N)||"",st=s.getShaderInfoLog(O)||"",it=Y.trim(),Q=j.trim(),Z=st.trim();let J=!0,Tt=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,E,N,O);else{const rt=du(s,N,"vertex"),ft=du(s,O,"fragment");xe("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+it+`
`+rt+`
`+ft)}else it!==""?ne("WebGLProgram: Program Info Log:",it):(Q===""||Z==="")&&(Tt=!1);Tt&&(F.diagnostics={runnable:J,programLog:it,vertexShader:{log:Q,prefix:y},fragmentShader:{log:Z,prefix:v}})}s.deleteShader(N),s.deleteShader(O),W=new Co(s,E),w=K0(s,E)}let W;this.getUniforms=function(){return W===void 0&&B(this),W};let w;this.getAttributes=function(){return w===void 0&&B(this),w};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(E,k0)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=H0++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=N,this.fragmentShader=O,this}let fx=0;class dx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(t);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new px(t),e.set(t,i)),i}}class px{constructor(t){this.id=fx++,this.code=t,this.usedTimes=0}}function mx(r,t,e,i,s,a,c){const h=new mc,u=new dx,d=new Set,p=[],m=new Map,g=s.logarithmicDepthBuffer;let x=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return d.add(w),w===0?"uv":`uv${w}`}function y(w,A,F,Y,j){const st=Y.fog,it=j.geometry,Q=w.isMeshStandardMaterial?Y.environment:null,Z=(w.isMeshStandardMaterial?e:t).get(w.envMap||Q),J=Z&&Z.mapping===Fo?Z.image.height:null,Tt=S[w.type];w.precision!==null&&(x=s.getMaxPrecision(w.precision),x!==w.precision&&ne("WebGLProgram.getParameters:",w.precision,"not supported, using",x,"instead."));const rt=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,ft=rt!==void 0?rt.length:0;let Xt=0;it.morphAttributes.position!==void 0&&(Xt=1),it.morphAttributes.normal!==void 0&&(Xt=2),it.morphAttributes.color!==void 0&&(Xt=3);let Vt,Qt,Zt,q;if(Tt){const Me=cn[Tt];Vt=Me.vertexShader,Qt=Me.fragmentShader}else Vt=w.vertexShader,Qt=w.fragmentShader,u.update(w),Zt=u.getVertexShaderID(w),q=u.getFragmentShaderID(w);const at=r.getRenderTarget(),Pt=r.state.buffers.depth.getReversed(),jt=j.isInstancedMesh===!0,Ut=j.isBatchedMesh===!0,fe=!!w.map,me=!!w.matcap,ie=!!Z,ct=!!w.aoMap,pt=!!w.lightMap,ht=!!w.bumpMap,wt=!!w.normalMap,I=!!w.displacementMap,Jt=!!w.emissiveMap,Lt=!!w.metalnessMap,Kt=!!w.roughnessMap,vt=w.anisotropy>0,P=w.clearcoat>0,M=w.dispersion>0,H=w.iridescence>0,et=w.sheen>0,ot=w.transmission>0,nt=vt&&!!w.anisotropyMap,kt=P&&!!w.clearcoatMap,yt=P&&!!w.clearcoatNormalMap,Bt=P&&!!w.clearcoatRoughnessMap,$t=H&&!!w.iridescenceMap,dt=H&&!!w.iridescenceThicknessMap,Mt=et&&!!w.sheenColorMap,zt=et&&!!w.sheenRoughnessMap,Gt=!!w.specularMap,xt=!!w.specularColorMap,ce=!!w.specularIntensityMap,k=ot&&!!w.transmissionMap,Rt=ot&&!!w.thicknessMap,gt=!!w.gradientMap,It=!!w.alphaMap,mt=w.alphaTest>0,lt=!!w.alphaHash,Et=!!w.extensions;let re=Zn;w.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(re=r.toneMapping);const Te={shaderID:Tt,shaderType:w.type,shaderName:w.name,vertexShader:Vt,fragmentShader:Qt,defines:w.defines,customVertexShaderID:Zt,customFragmentShaderID:q,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:x,batching:Ut,batchingColor:Ut&&j._colorsTexture!==null,instancing:jt,instancingColor:jt&&j.instanceColor!==null,instancingMorph:jt&&j.morphTexture!==null,outputColorSpace:at===null?r.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Pr,alphaToCoverage:!!w.alphaToCoverage,map:fe,matcap:me,envMap:ie,envMapMode:ie&&Z.mapping,envMapCubeUVHeight:J,aoMap:ct,lightMap:pt,bumpMap:ht,normalMap:wt,displacementMap:I,emissiveMap:Jt,normalMapObjectSpace:wt&&w.normalMapType===jd,normalMapTangentSpace:wt&&w.normalMapType===qu,metalnessMap:Lt,roughnessMap:Kt,anisotropy:vt,anisotropyMap:nt,clearcoat:P,clearcoatMap:kt,clearcoatNormalMap:yt,clearcoatRoughnessMap:Bt,dispersion:M,iridescence:H,iridescenceMap:$t,iridescenceThicknessMap:dt,sheen:et,sheenColorMap:Mt,sheenRoughnessMap:zt,specularMap:Gt,specularColorMap:xt,specularIntensityMap:ce,transmission:ot,transmissionMap:k,thicknessMap:Rt,gradientMap:gt,opaque:w.transparent===!1&&w.blending===Er&&w.alphaToCoverage===!1,alphaMap:It,alphaTest:mt,alphaHash:lt,combine:w.combine,mapUv:fe&&E(w.map.channel),aoMapUv:ct&&E(w.aoMap.channel),lightMapUv:pt&&E(w.lightMap.channel),bumpMapUv:ht&&E(w.bumpMap.channel),normalMapUv:wt&&E(w.normalMap.channel),displacementMapUv:I&&E(w.displacementMap.channel),emissiveMapUv:Jt&&E(w.emissiveMap.channel),metalnessMapUv:Lt&&E(w.metalnessMap.channel),roughnessMapUv:Kt&&E(w.roughnessMap.channel),anisotropyMapUv:nt&&E(w.anisotropyMap.channel),clearcoatMapUv:kt&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:yt&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Bt&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:$t&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:zt&&E(w.sheenRoughnessMap.channel),specularMapUv:Gt&&E(w.specularMap.channel),specularColorMapUv:xt&&E(w.specularColorMap.channel),specularIntensityMapUv:ce&&E(w.specularIntensityMap.channel),transmissionMapUv:k&&E(w.transmissionMap.channel),thicknessMapUv:Rt&&E(w.thicknessMap.channel),alphaMapUv:It&&E(w.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(wt||vt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!it.attributes.uv&&(fe||It),fog:!!st,useFog:w.fog===!0,fogExp2:!!st&&st.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Pt,skinning:j.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Xt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:re,decodeVideoTexture:fe&&w.map.isVideoTexture===!0&&Se.getTransfer(w.map.colorSpace)===Ee,decodeVideoTextureEmissive:Jt&&w.emissiveMap.isVideoTexture===!0&&Se.getTransfer(w.emissiveMap.colorSpace)===Ee,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Sn,flipSided:w.side===un,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Et&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&w.extensions.multiDraw===!0||Ut)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Te.vertexUv1s=d.has(1),Te.vertexUv2s=d.has(2),Te.vertexUv3s=d.has(3),d.clear(),Te}function v(w){const A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(const F in w.defines)A.push(F),A.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(D(A,w),C(A,w),A.push(r.outputColorSpace)),A.push(w.customProgramCacheKey),A.join()}function D(w,A){w.push(A.precision),w.push(A.outputColorSpace),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.mapUv),w.push(A.alphaMapUv),w.push(A.lightMapUv),w.push(A.aoMapUv),w.push(A.bumpMapUv),w.push(A.normalMapUv),w.push(A.displacementMapUv),w.push(A.emissiveMapUv),w.push(A.metalnessMapUv),w.push(A.roughnessMapUv),w.push(A.anisotropyMapUv),w.push(A.clearcoatMapUv),w.push(A.clearcoatNormalMapUv),w.push(A.clearcoatRoughnessMapUv),w.push(A.iridescenceMapUv),w.push(A.iridescenceThicknessMapUv),w.push(A.sheenColorMapUv),w.push(A.sheenRoughnessMapUv),w.push(A.specularMapUv),w.push(A.specularColorMapUv),w.push(A.specularIntensityMapUv),w.push(A.transmissionMapUv),w.push(A.thicknessMapUv),w.push(A.combine),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numSpotLightMaps),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.numSpotLightShadowsWithMaps),w.push(A.numLightProbes),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function C(w,A){h.disableAll(),A.instancing&&h.enable(0),A.instancingColor&&h.enable(1),A.instancingMorph&&h.enable(2),A.matcap&&h.enable(3),A.envMap&&h.enable(4),A.normalMapObjectSpace&&h.enable(5),A.normalMapTangentSpace&&h.enable(6),A.clearcoat&&h.enable(7),A.iridescence&&h.enable(8),A.alphaTest&&h.enable(9),A.vertexColors&&h.enable(10),A.vertexAlphas&&h.enable(11),A.vertexUv1s&&h.enable(12),A.vertexUv2s&&h.enable(13),A.vertexUv3s&&h.enable(14),A.vertexTangents&&h.enable(15),A.anisotropy&&h.enable(16),A.alphaHash&&h.enable(17),A.batching&&h.enable(18),A.dispersion&&h.enable(19),A.batchingColor&&h.enable(20),A.gradientMap&&h.enable(21),w.push(h.mask),h.disableAll(),A.fog&&h.enable(0),A.useFog&&h.enable(1),A.flatShading&&h.enable(2),A.logarithmicDepthBuffer&&h.enable(3),A.reversedDepthBuffer&&h.enable(4),A.skinning&&h.enable(5),A.morphTargets&&h.enable(6),A.morphNormals&&h.enable(7),A.morphColors&&h.enable(8),A.premultipliedAlpha&&h.enable(9),A.shadowMapEnabled&&h.enable(10),A.doubleSided&&h.enable(11),A.flipSided&&h.enable(12),A.useDepthPacking&&h.enable(13),A.dithering&&h.enable(14),A.transmission&&h.enable(15),A.sheen&&h.enable(16),A.opaque&&h.enable(17),A.pointsUvs&&h.enable(18),A.decodeVideoTexture&&h.enable(19),A.decodeVideoTextureEmissive&&h.enable(20),A.alphaToCoverage&&h.enable(21),w.push(h.mask)}function R(w){const A=S[w.type];let F;if(A){const Y=cn[A];F=gc.clone(Y.uniforms)}else F=w.uniforms;return F}function N(w,A){let F=m.get(A);return F!==void 0?++F.usedTimes:(F=new ux(r,A,w,a),p.push(F),m.set(A,F)),F}function O(w){if(--w.usedTimes===0){const A=p.indexOf(w);p[A]=p[p.length-1],p.pop(),m.delete(w.cacheKey),w.destroy()}}function B(w){u.remove(w)}function W(){u.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:R,acquireProgram:N,releaseProgram:O,releaseShaderCache:B,programs:p,dispose:W}}function _x(){let r=new WeakMap;function t(c){return r.has(c)}function e(c){let h=r.get(c);return h===void 0&&(h={},r.set(c,h)),h}function i(c){r.delete(c)}function s(c,h,u){r.get(c)[h]=u}function a(){r=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:a}}function gx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function vu(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function xu(){const r=[];let t=0;const e=[],i=[],s=[];function a(){t=0,e.length=0,i.length=0,s.length=0}function c(m,g,x,S,E,y){let v=r[t];return v===void 0?(v={id:m.id,object:m,geometry:g,material:x,groupOrder:S,renderOrder:m.renderOrder,z:E,group:y},r[t]=v):(v.id=m.id,v.object=m,v.geometry=g,v.material=x,v.groupOrder=S,v.renderOrder=m.renderOrder,v.z=E,v.group=y),t++,v}function h(m,g,x,S,E,y){const v=c(m,g,x,S,E,y);x.transmission>0?i.push(v):x.transparent===!0?s.push(v):e.push(v)}function u(m,g,x,S,E,y){const v=c(m,g,x,S,E,y);x.transmission>0?i.unshift(v):x.transparent===!0?s.unshift(v):e.unshift(v)}function d(m,g){e.length>1&&e.sort(m||gx),i.length>1&&i.sort(g||vu),s.length>1&&s.sort(g||vu)}function p(){for(let m=t,g=r.length;m<g;m++){const x=r[m];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:s,init:a,push:h,unshift:u,finish:p,sort:d}}function vx(){let r=new WeakMap;function t(i,s){const a=r.get(i);let c;return a===void 0?(c=new xu,r.set(i,[c])):s>=a.length?(c=new xu,a.push(c)):c=a[s],c}function e(){r=new WeakMap}return{get:t,dispose:e}}function xx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new ye};break;case"SpotLight":e={position:new z,direction:new z,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new ye,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":e={color:new ye,position:new z,halfWidth:new z,halfHeight:new z};break}return r[t.id]=e,e}}}function yx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Sx=0;function Mx(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Ex(r){const t=new xx,e=yx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new z);const s=new z,a=new Re,c=new Re;function h(d){let p=0,m=0,g=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let x=0,S=0,E=0,y=0,v=0,D=0,C=0,R=0,N=0,O=0,B=0;d.sort(Mx);for(let w=0,A=d.length;w<A;w++){const F=d[w],Y=F.color,j=F.intensity,st=F.distance;let it=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Cr?it=F.shadow.map.texture:it=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)p+=Y.r*j,m+=Y.g*j,g+=Y.b*j;else if(F.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(F.sh.coefficients[Q],j);B++}else if(F.isDirectionalLight){const Q=t.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Z=F.shadow,J=e.get(F);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,i.directionalShadow[x]=J,i.directionalShadowMap[x]=it,i.directionalShadowMatrix[x]=F.shadow.matrix,D++}i.directional[x]=Q,x++}else if(F.isSpotLight){const Q=t.get(F);Q.position.setFromMatrixPosition(F.matrixWorld),Q.color.copy(Y).multiplyScalar(j),Q.distance=st,Q.coneCos=Math.cos(F.angle),Q.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Q.decay=F.decay,i.spot[E]=Q;const Z=F.shadow;if(F.map&&(i.spotLightMap[N]=F.map,N++,Z.updateMatrices(F),F.castShadow&&O++),i.spotLightMatrix[E]=Z.matrix,F.castShadow){const J=e.get(F);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,i.spotShadow[E]=J,i.spotShadowMap[E]=it,R++}E++}else if(F.isRectAreaLight){const Q=t.get(F);Q.color.copy(Y).multiplyScalar(j),Q.halfWidth.set(F.width*.5,0,0),Q.halfHeight.set(0,F.height*.5,0),i.rectArea[y]=Q,y++}else if(F.isPointLight){const Q=t.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity),Q.distance=F.distance,Q.decay=F.decay,F.castShadow){const Z=F.shadow,J=e.get(F);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,J.shadowCameraNear=Z.camera.near,J.shadowCameraFar=Z.camera.far,i.pointShadow[S]=J,i.pointShadowMap[S]=it,i.pointShadowMatrix[S]=F.shadow.matrix,C++}i.point[S]=Q,S++}else if(F.isHemisphereLight){const Q=t.get(F);Q.skyColor.copy(F.color).multiplyScalar(j),Q.groundColor.copy(F.groundColor).multiplyScalar(j),i.hemi[v]=Q,v++}}y>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=bt.LTC_FLOAT_1,i.rectAreaLTC2=bt.LTC_FLOAT_2):(i.rectAreaLTC1=bt.LTC_HALF_1,i.rectAreaLTC2=bt.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=m,i.ambient[2]=g;const W=i.hash;(W.directionalLength!==x||W.pointLength!==S||W.spotLength!==E||W.rectAreaLength!==y||W.hemiLength!==v||W.numDirectionalShadows!==D||W.numPointShadows!==C||W.numSpotShadows!==R||W.numSpotMaps!==N||W.numLightProbes!==B)&&(i.directional.length=x,i.spot.length=E,i.rectArea.length=y,i.point.length=S,i.hemi.length=v,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=D,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=R+N-O,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=B,W.directionalLength=x,W.pointLength=S,W.spotLength=E,W.rectAreaLength=y,W.hemiLength=v,W.numDirectionalShadows=D,W.numPointShadows=C,W.numSpotShadows=R,W.numSpotMaps=N,W.numLightProbes=B,i.version=Sx++)}function u(d,p){let m=0,g=0,x=0,S=0,E=0;const y=p.matrixWorldInverse;for(let v=0,D=d.length;v<D;v++){const C=d[v];if(C.isDirectionalLight){const R=i.directional[m];R.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(y),m++}else if(C.isSpotLight){const R=i.spot[x];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(y),x++}else if(C.isRectAreaLight){const R=i.rectArea[S];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(y),c.identity(),a.copy(C.matrixWorld),a.premultiply(y),c.extractRotation(a),R.halfWidth.set(C.width*.5,0,0),R.halfHeight.set(0,C.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),S++}else if(C.isPointLight){const R=i.point[g];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(y),g++}else if(C.isHemisphereLight){const R=i.hemi[E];R.direction.setFromMatrixPosition(C.matrixWorld),R.direction.transformDirection(y),E++}}}return{setup:h,setupView:u,state:i}}function yu(r){const t=new Ex(r),e=[],i=[];function s(p){d.camera=p,e.length=0,i.length=0}function a(p){e.push(p)}function c(p){i.push(p)}function h(){t.setup(e)}function u(p){t.setupView(e,p)}const d={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:h,setupLightsView:u,pushLight:a,pushShadow:c}}function bx(r){let t=new WeakMap;function e(s,a=0){const c=t.get(s);let h;return c===void 0?(h=new yu(r),t.set(s,[h])):a>=c.length?(h=new yu(r),c.push(h)):h=c[a],h}function i(){t=new WeakMap}return{get:e,dispose:i}}const Tx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ax=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Cx=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Su=new Re,$r=new z,Ja=new z;function Px(r,t,e){let i=new vc;const s=new Ct,a=new Ct,c=new we,h=new Om,u=new Fm,d={},p=e.maxTextureSize,m={[Ci]:un,[un]:Ci,[Sn]:Sn},g=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:Tx,fragmentShader:wx}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const S=new on;S.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new En(S,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eo;let v=this.type;this.render=function(O,B,W){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;O.type===Cd&&(ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),O.type=Eo);const w=r.getRenderTarget(),A=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(ui),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const j=v!==this.type;j&&B.traverse(function(st){st.material&&(Array.isArray(st.material)?st.material.forEach(it=>it.needsUpdate=!0):st.material.needsUpdate=!0)});for(let st=0,it=O.length;st<it;st++){const Q=O[st],Z=Q.shadow;if(Z===void 0){ne("WebGLShadowMap:",Q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);const J=Z.getFrameExtents();if(s.multiply(J),a.copy(Z.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(a.x=Math.floor(p/J.x),s.x=a.x*J.x,Z.mapSize.x=a.x),s.y>p&&(a.y=Math.floor(p/J.y),s.y=a.y*J.y,Z.mapSize.y=a.y)),Z.map===null||j===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Qr){if(Q.isPointLight){ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Yn(s.x,s.y,{format:Cr,type:di,minFilter:$e,magFilter:$e,generateMipmaps:!1}),Z.map.texture.name=Q.name+".shadowMap",Z.map.depthTexture=new ps(s.x,s.y,Wn),Z.map.depthTexture.name=Q.name+".shadowMapDepth",Z.map.depthTexture.format=pi,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Ye,Z.map.depthTexture.magFilter=Ye}else{Q.isPointLight?(Z.map=new rf(s.x),Z.map.depthTexture=new $p(s.x,Kn)):(Z.map=new Yn(s.x,s.y),Z.map.depthTexture=new ps(s.x,s.y,Kn)),Z.map.depthTexture.name=Q.name+".shadowMap",Z.map.depthTexture.format=pi;const rt=r.state.buffers.depth.getReversed();this.type===Eo?(Z.map.depthTexture.compareFunction=rt?uc:hc,Z.map.depthTexture.minFilter=$e,Z.map.depthTexture.magFilter=$e):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Ye,Z.map.depthTexture.magFilter=Ye)}Z.camera.updateProjectionMatrix()}const Tt=Z.map.isWebGLCubeRenderTarget?6:1;for(let rt=0;rt<Tt;rt++){if(Z.map.isWebGLCubeRenderTarget)r.setRenderTarget(Z.map,rt),r.clear();else{rt===0&&(r.setRenderTarget(Z.map),r.clear());const ft=Z.getViewport(rt);c.set(a.x*ft.x,a.y*ft.y,a.x*ft.z,a.y*ft.w),Y.viewport(c)}if(Q.isPointLight){const ft=Z.camera,Xt=Z.matrix,Vt=Q.distance||ft.far;Vt!==ft.far&&(ft.far=Vt,ft.updateProjectionMatrix()),$r.setFromMatrixPosition(Q.matrixWorld),ft.position.copy($r),Ja.copy(ft.position),Ja.add(Ax[rt]),ft.up.copy(Cx[rt]),ft.lookAt(Ja),ft.updateMatrixWorld(),Xt.makeTranslation(-$r.x,-$r.y,-$r.z),Su.multiplyMatrices(ft.projectionMatrix,ft.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Su,ft.coordinateSystem,ft.reversedDepth)}else Z.updateMatrices(Q);i=Z.getFrustum(),R(B,W,Z.camera,Q,this.type)}Z.isPointLightShadow!==!0&&this.type===Qr&&D(Z,W),Z.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(w,A,F)};function D(O,B){const W=t.update(E);g.defines.VSM_SAMPLES!==O.blurSamples&&(g.defines.VSM_SAMPLES=O.blurSamples,x.defines.VSM_SAMPLES=O.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Yn(s.x,s.y,{format:Cr,type:di})),g.uniforms.shadow_pass.value=O.map.depthTexture,g.uniforms.resolution.value=O.mapSize,g.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(B,null,W,g,E,null),x.uniforms.shadow_pass.value=O.mapPass.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(B,null,W,x,E,null)}function C(O,B,W,w){let A=null;const F=W.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(F!==void 0)A=F;else if(A=W.isPointLight===!0?u:h,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Y=A.uuid,j=B.uuid;let st=d[Y];st===void 0&&(st={},d[Y]=st);let it=st[j];it===void 0&&(it=A.clone(),st[j]=it,B.addEventListener("dispose",N)),A=it}if(A.visible=B.visible,A.wireframe=B.wireframe,w===Qr?A.side=B.shadowSide!==null?B.shadowSide:B.side:A.side=B.shadowSide!==null?B.shadowSide:m[B.side],A.alphaMap=B.alphaMap,A.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,A.map=B.map,A.clipShadows=B.clipShadows,A.clippingPlanes=B.clippingPlanes,A.clipIntersection=B.clipIntersection,A.displacementMap=B.displacementMap,A.displacementScale=B.displacementScale,A.displacementBias=B.displacementBias,A.wireframeLinewidth=B.wireframeLinewidth,A.linewidth=B.linewidth,W.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const Y=r.properties.get(A);Y.light=W}return A}function R(O,B,W,w,A){if(O.visible===!1)return;if(O.layers.test(B.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&A===Qr)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,O.matrixWorld);const j=t.update(O),st=O.material;if(Array.isArray(st)){const it=j.groups;for(let Q=0,Z=it.length;Q<Z;Q++){const J=it[Q],Tt=st[J.materialIndex];if(Tt&&Tt.visible){const rt=C(O,Tt,w,A);O.onBeforeShadow(r,O,B,W,j,rt,J),r.renderBufferDirect(W,null,j,rt,O,J),O.onAfterShadow(r,O,B,W,j,rt,J)}}}else if(st.visible){const it=C(O,st,w,A);O.onBeforeShadow(r,O,B,W,j,it,null),r.renderBufferDirect(W,null,j,it,O,null),O.onAfterShadow(r,O,B,W,j,it,null)}}const Y=O.children;for(let j=0,st=Y.length;j<st;j++)R(Y[j],B,W,w,A)}function N(O){O.target.removeEventListener("dispose",N);for(const W in d){const w=d[W],A=O.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}const Rx={[nl]:il,[rl]:al,[sl]:ll,[wr]:ol,[il]:nl,[al]:rl,[ll]:sl,[ol]:wr};function Lx(r,t){function e(){let k=!1;const Rt=new we;let gt=null;const It=new we(0,0,0,0);return{setMask:function(mt){gt!==mt&&!k&&(r.colorMask(mt,mt,mt,mt),gt=mt)},setLocked:function(mt){k=mt},setClear:function(mt,lt,Et,re,Te){Te===!0&&(mt*=re,lt*=re,Et*=re),Rt.set(mt,lt,Et,re),It.equals(Rt)===!1&&(r.clearColor(mt,lt,Et,re),It.copy(Rt))},reset:function(){k=!1,gt=null,It.set(-1,0,0,0)}}}function i(){let k=!1,Rt=!1,gt=null,It=null,mt=null;return{setReversed:function(lt){if(Rt!==lt){const Et=t.get("EXT_clip_control");lt?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),Rt=lt;const re=mt;mt=null,this.setClear(re)}},getReversed:function(){return Rt},setTest:function(lt){lt?at(r.DEPTH_TEST):Pt(r.DEPTH_TEST)},setMask:function(lt){gt!==lt&&!k&&(r.depthMask(lt),gt=lt)},setFunc:function(lt){if(Rt&&(lt=Rx[lt]),It!==lt){switch(lt){case nl:r.depthFunc(r.NEVER);break;case il:r.depthFunc(r.ALWAYS);break;case rl:r.depthFunc(r.LESS);break;case wr:r.depthFunc(r.LEQUAL);break;case sl:r.depthFunc(r.EQUAL);break;case ol:r.depthFunc(r.GEQUAL);break;case al:r.depthFunc(r.GREATER);break;case ll:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}It=lt}},setLocked:function(lt){k=lt},setClear:function(lt){mt!==lt&&(Rt&&(lt=1-lt),r.clearDepth(lt),mt=lt)},reset:function(){k=!1,gt=null,It=null,mt=null,Rt=!1}}}function s(){let k=!1,Rt=null,gt=null,It=null,mt=null,lt=null,Et=null,re=null,Te=null;return{setTest:function(Me){k||(Me?at(r.STENCIL_TEST):Pt(r.STENCIL_TEST))},setMask:function(Me){Rt!==Me&&!k&&(r.stencilMask(Me),Rt=Me)},setFunc:function(Me,an,bn){(gt!==Me||It!==an||mt!==bn)&&(r.stencilFunc(Me,an,bn),gt=Me,It=an,mt=bn)},setOp:function(Me,an,bn){(lt!==Me||Et!==an||re!==bn)&&(r.stencilOp(Me,an,bn),lt=Me,Et=an,re=bn)},setLocked:function(Me){k=Me},setClear:function(Me){Te!==Me&&(r.clearStencil(Me),Te=Me)},reset:function(){k=!1,Rt=null,gt=null,It=null,mt=null,lt=null,Et=null,re=null,Te=null}}}const a=new e,c=new i,h=new s,u=new WeakMap,d=new WeakMap;let p={},m={},g=new WeakMap,x=[],S=null,E=!1,y=null,v=null,D=null,C=null,R=null,N=null,O=null,B=new ye(0,0,0),W=0,w=!1,A=null,F=null,Y=null,j=null,st=null;const it=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,Z=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(J)[1]),Q=Z>=1):J.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Q=Z>=2);let Tt=null,rt={};const ft=r.getParameter(r.SCISSOR_BOX),Xt=r.getParameter(r.VIEWPORT),Vt=new we().fromArray(ft),Qt=new we().fromArray(Xt);function Zt(k,Rt,gt,It){const mt=new Uint8Array(4),lt=r.createTexture();r.bindTexture(k,lt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Et=0;Et<gt;Et++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Rt,0,r.RGBA,1,1,It,0,r.RGBA,r.UNSIGNED_BYTE,mt):r.texImage2D(Rt+Et,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,mt);return lt}const q={};q[r.TEXTURE_2D]=Zt(r.TEXTURE_2D,r.TEXTURE_2D,1),q[r.TEXTURE_CUBE_MAP]=Zt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[r.TEXTURE_2D_ARRAY]=Zt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),q[r.TEXTURE_3D]=Zt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),h.setClear(0),at(r.DEPTH_TEST),c.setFunc(wr),ht(!1),wt(dh),at(r.CULL_FACE),ct(ui);function at(k){p[k]!==!0&&(r.enable(k),p[k]=!0)}function Pt(k){p[k]!==!1&&(r.disable(k),p[k]=!1)}function jt(k,Rt){return m[k]!==Rt?(r.bindFramebuffer(k,Rt),m[k]=Rt,k===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=Rt),k===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Ut(k,Rt){let gt=x,It=!1;if(k){gt=g.get(Rt),gt===void 0&&(gt=[],g.set(Rt,gt));const mt=k.textures;if(gt.length!==mt.length||gt[0]!==r.COLOR_ATTACHMENT0){for(let lt=0,Et=mt.length;lt<Et;lt++)gt[lt]=r.COLOR_ATTACHMENT0+lt;gt.length=mt.length,It=!0}}else gt[0]!==r.BACK&&(gt[0]=r.BACK,It=!0);It&&r.drawBuffers(gt)}function fe(k){return S!==k?(r.useProgram(k),S=k,!0):!1}const me={[Wi]:r.FUNC_ADD,[Rd]:r.FUNC_SUBTRACT,[Ld]:r.FUNC_REVERSE_SUBTRACT};me[Dd]=r.MIN,me[Id]=r.MAX;const ie={[Nd]:r.ZERO,[Ud]:r.ONE,[Od]:r.SRC_COLOR,[tl]:r.SRC_ALPHA,[Vd]:r.SRC_ALPHA_SATURATE,[kd]:r.DST_COLOR,[Bd]:r.DST_ALPHA,[Fd]:r.ONE_MINUS_SRC_COLOR,[el]:r.ONE_MINUS_SRC_ALPHA,[Hd]:r.ONE_MINUS_DST_COLOR,[zd]:r.ONE_MINUS_DST_ALPHA,[Gd]:r.CONSTANT_COLOR,[Wd]:r.ONE_MINUS_CONSTANT_COLOR,[Xd]:r.CONSTANT_ALPHA,[Zd]:r.ONE_MINUS_CONSTANT_ALPHA};function ct(k,Rt,gt,It,mt,lt,Et,re,Te,Me){if(k===ui){E===!0&&(Pt(r.BLEND),E=!1);return}if(E===!1&&(at(r.BLEND),E=!0),k!==Pd){if(k!==y||Me!==w){if((v!==Wi||R!==Wi)&&(r.blendEquation(r.FUNC_ADD),v=Wi,R=Wi),Me)switch(k){case Er:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ph:r.blendFunc(r.ONE,r.ONE);break;case mh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _h:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:xe("WebGLState: Invalid blending: ",k);break}else switch(k){case Er:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ph:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case mh:xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _h:xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:xe("WebGLState: Invalid blending: ",k);break}D=null,C=null,N=null,O=null,B.set(0,0,0),W=0,y=k,w=Me}return}mt=mt||Rt,lt=lt||gt,Et=Et||It,(Rt!==v||mt!==R)&&(r.blendEquationSeparate(me[Rt],me[mt]),v=Rt,R=mt),(gt!==D||It!==C||lt!==N||Et!==O)&&(r.blendFuncSeparate(ie[gt],ie[It],ie[lt],ie[Et]),D=gt,C=It,N=lt,O=Et),(re.equals(B)===!1||Te!==W)&&(r.blendColor(re.r,re.g,re.b,Te),B.copy(re),W=Te),y=k,w=!1}function pt(k,Rt){k.side===Sn?Pt(r.CULL_FACE):at(r.CULL_FACE);let gt=k.side===un;Rt&&(gt=!gt),ht(gt),k.blending===Er&&k.transparent===!1?ct(ui):ct(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),a.setMask(k.colorWrite);const It=k.stencilWrite;h.setTest(It),It&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Jt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?at(r.SAMPLE_ALPHA_TO_COVERAGE):Pt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ht(k){A!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),A=k)}function wt(k){k!==wd?(at(r.CULL_FACE),k!==F&&(k===dh?r.cullFace(r.BACK):k===Ad?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Pt(r.CULL_FACE),F=k}function I(k){k!==Y&&(Q&&r.lineWidth(k),Y=k)}function Jt(k,Rt,gt){k?(at(r.POLYGON_OFFSET_FILL),(j!==Rt||st!==gt)&&(r.polygonOffset(Rt,gt),j=Rt,st=gt)):Pt(r.POLYGON_OFFSET_FILL)}function Lt(k){k?at(r.SCISSOR_TEST):Pt(r.SCISSOR_TEST)}function Kt(k){k===void 0&&(k=r.TEXTURE0+it-1),Tt!==k&&(r.activeTexture(k),Tt=k)}function vt(k,Rt,gt){gt===void 0&&(Tt===null?gt=r.TEXTURE0+it-1:gt=Tt);let It=rt[gt];It===void 0&&(It={type:void 0,texture:void 0},rt[gt]=It),(It.type!==k||It.texture!==Rt)&&(Tt!==gt&&(r.activeTexture(gt),Tt=gt),r.bindTexture(k,Rt||q[k]),It.type=k,It.texture=Rt)}function P(){const k=rt[Tt];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(k){xe("WebGLState:",k)}}function H(){try{r.compressedTexImage3D(...arguments)}catch(k){xe("WebGLState:",k)}}function et(){try{r.texSubImage2D(...arguments)}catch(k){xe("WebGLState:",k)}}function ot(){try{r.texSubImage3D(...arguments)}catch(k){xe("WebGLState:",k)}}function nt(){try{r.compressedTexSubImage2D(...arguments)}catch(k){xe("WebGLState:",k)}}function kt(){try{r.compressedTexSubImage3D(...arguments)}catch(k){xe("WebGLState:",k)}}function yt(){try{r.texStorage2D(...arguments)}catch(k){xe("WebGLState:",k)}}function Bt(){try{r.texStorage3D(...arguments)}catch(k){xe("WebGLState:",k)}}function $t(){try{r.texImage2D(...arguments)}catch(k){xe("WebGLState:",k)}}function dt(){try{r.texImage3D(...arguments)}catch(k){xe("WebGLState:",k)}}function Mt(k){Vt.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),Vt.copy(k))}function zt(k){Qt.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Qt.copy(k))}function Gt(k,Rt){let gt=d.get(Rt);gt===void 0&&(gt=new WeakMap,d.set(Rt,gt));let It=gt.get(k);It===void 0&&(It=r.getUniformBlockIndex(Rt,k.name),gt.set(k,It))}function xt(k,Rt){const It=d.get(Rt).get(k);u.get(Rt)!==It&&(r.uniformBlockBinding(Rt,It,k.__bindingPointIndex),u.set(Rt,It))}function ce(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),p={},Tt=null,rt={},m={},g=new WeakMap,x=[],S=null,E=!1,y=null,v=null,D=null,C=null,R=null,N=null,O=null,B=new ye(0,0,0),W=0,w=!1,A=null,F=null,Y=null,j=null,st=null,Vt.set(0,0,r.canvas.width,r.canvas.height),Qt.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),h.reset()}return{buffers:{color:a,depth:c,stencil:h},enable:at,disable:Pt,bindFramebuffer:jt,drawBuffers:Ut,useProgram:fe,setBlending:ct,setMaterial:pt,setFlipSided:ht,setCullFace:wt,setLineWidth:I,setPolygonOffset:Jt,setScissorTest:Lt,activeTexture:Kt,bindTexture:vt,unbindTexture:P,compressedTexImage2D:M,compressedTexImage3D:H,texImage2D:$t,texImage3D:dt,updateUBOMapping:Gt,uniformBlockBinding:xt,texStorage2D:yt,texStorage3D:Bt,texSubImage2D:et,texSubImage3D:ot,compressedTexSubImage2D:nt,compressedTexSubImage3D:kt,scissor:Mt,viewport:zt,reset:ce}}function Dx(r,t,e,i,s,a,c){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ct,p=new WeakMap;let m;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(P,M){return x?new OffscreenCanvas(P,M):Lo("canvas")}function E(P,M,H){let et=1;const ot=vt(P);if((ot.width>H||ot.height>H)&&(et=H/Math.max(ot.width,ot.height)),et<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const nt=Math.floor(et*ot.width),kt=Math.floor(et*ot.height);m===void 0&&(m=S(nt,kt));const yt=M?S(nt,kt):m;return yt.width=nt,yt.height=kt,yt.getContext("2d").drawImage(P,0,0,nt,kt),ne("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+nt+"x"+kt+")."),yt}else return"data"in P&&ne("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),P;return P}function y(P){return P.generateMipmaps}function v(P){r.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(P,M,H,et,ot=!1){if(P!==null){if(r[P]!==void 0)return r[P];ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let nt=M;if(M===r.RED&&(H===r.FLOAT&&(nt=r.R32F),H===r.HALF_FLOAT&&(nt=r.R16F),H===r.UNSIGNED_BYTE&&(nt=r.R8)),M===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(nt=r.R8UI),H===r.UNSIGNED_SHORT&&(nt=r.R16UI),H===r.UNSIGNED_INT&&(nt=r.R32UI),H===r.BYTE&&(nt=r.R8I),H===r.SHORT&&(nt=r.R16I),H===r.INT&&(nt=r.R32I)),M===r.RG&&(H===r.FLOAT&&(nt=r.RG32F),H===r.HALF_FLOAT&&(nt=r.RG16F),H===r.UNSIGNED_BYTE&&(nt=r.RG8)),M===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(nt=r.RG8UI),H===r.UNSIGNED_SHORT&&(nt=r.RG16UI),H===r.UNSIGNED_INT&&(nt=r.RG32UI),H===r.BYTE&&(nt=r.RG8I),H===r.SHORT&&(nt=r.RG16I),H===r.INT&&(nt=r.RG32I)),M===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(nt=r.RGB8UI),H===r.UNSIGNED_SHORT&&(nt=r.RGB16UI),H===r.UNSIGNED_INT&&(nt=r.RGB32UI),H===r.BYTE&&(nt=r.RGB8I),H===r.SHORT&&(nt=r.RGB16I),H===r.INT&&(nt=r.RGB32I)),M===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(nt=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(nt=r.RGBA16UI),H===r.UNSIGNED_INT&&(nt=r.RGBA32UI),H===r.BYTE&&(nt=r.RGBA8I),H===r.SHORT&&(nt=r.RGBA16I),H===r.INT&&(nt=r.RGBA32I)),M===r.RGB&&(H===r.UNSIGNED_INT_5_9_9_9_REV&&(nt=r.RGB9_E5),H===r.UNSIGNED_INT_10F_11F_11F_REV&&(nt=r.R11F_G11F_B10F)),M===r.RGBA){const kt=ot?Po:Se.getTransfer(et);H===r.FLOAT&&(nt=r.RGBA32F),H===r.HALF_FLOAT&&(nt=r.RGBA16F),H===r.UNSIGNED_BYTE&&(nt=kt===Ee?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(nt=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(nt=r.RGB5_A1)}return(nt===r.R16F||nt===r.R32F||nt===r.RG16F||nt===r.RG32F||nt===r.RGBA16F||nt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function R(P,M){let H;return P?M===null||M===Kn||M===us?H=r.DEPTH24_STENCIL8:M===Wn?H=r.DEPTH32F_STENCIL8:M===hs&&(H=r.DEPTH24_STENCIL8,ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Kn||M===us?H=r.DEPTH_COMPONENT24:M===Wn?H=r.DEPTH_COMPONENT32F:M===hs&&(H=r.DEPTH_COMPONENT16),H}function N(P,M){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ye&&P.minFilter!==$e?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function O(P){const M=P.target;M.removeEventListener("dispose",O),W(M),M.isVideoTexture&&p.delete(M)}function B(P){const M=P.target;M.removeEventListener("dispose",B),A(M)}function W(P){const M=i.get(P);if(M.__webglInit===void 0)return;const H=P.source,et=g.get(H);if(et){const ot=et[M.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&w(P),Object.keys(et).length===0&&g.delete(H)}i.remove(P)}function w(P){const M=i.get(P);r.deleteTexture(M.__webglTexture);const H=P.source,et=g.get(H);delete et[M.__cacheKey],c.memory.textures--}function A(P){const M=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(M.__webglFramebuffer[et]))for(let ot=0;ot<M.__webglFramebuffer[et].length;ot++)r.deleteFramebuffer(M.__webglFramebuffer[et][ot]);else r.deleteFramebuffer(M.__webglFramebuffer[et]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[et])}else{if(Array.isArray(M.__webglFramebuffer))for(let et=0;et<M.__webglFramebuffer.length;et++)r.deleteFramebuffer(M.__webglFramebuffer[et]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let et=0;et<M.__webglColorRenderbuffer.length;et++)M.__webglColorRenderbuffer[et]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[et]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=P.textures;for(let et=0,ot=H.length;et<ot;et++){const nt=i.get(H[et]);nt.__webglTexture&&(r.deleteTexture(nt.__webglTexture),c.memory.textures--),i.remove(H[et])}i.remove(P)}let F=0;function Y(){F=0}function j(){const P=F;return P>=s.maxTextures&&ne("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),F+=1,P}function st(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function it(P,M){const H=i.get(P);if(P.isVideoTexture&&Lt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){const et=P.image;if(et===null)ne("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)ne("WebGLRenderer: Texture marked for update but image is incomplete");else{q(H,P,M);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+M)}function Q(P,M){const H=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){q(H,P,M);return}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+M)}function Z(P,M){const H=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){q(H,P,M);return}e.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+M)}function J(P,M){const H=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&H.__version!==P.version){at(H,P,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+M)}const Tt={[ul]:r.REPEAT,[ci]:r.CLAMP_TO_EDGE,[fl]:r.MIRRORED_REPEAT},rt={[Ye]:r.NEAREST,[Jd]:r.NEAREST_MIPMAP_NEAREST,[ks]:r.NEAREST_MIPMAP_LINEAR,[$e]:r.LINEAR,[pa]:r.LINEAR_MIPMAP_NEAREST,[Zi]:r.LINEAR_MIPMAP_LINEAR},ft={[$d]:r.NEVER,[ip]:r.ALWAYS,[Qd]:r.LESS,[hc]:r.LEQUAL,[tp]:r.EQUAL,[uc]:r.GEQUAL,[ep]:r.GREATER,[np]:r.NOTEQUAL};function Xt(P,M){if(M.type===Wn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===$e||M.magFilter===pa||M.magFilter===ks||M.magFilter===Zi||M.minFilter===$e||M.minFilter===pa||M.minFilter===ks||M.minFilter===Zi)&&ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Tt[M.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Tt[M.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Tt[M.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,rt[M.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,rt[M.minFilter]),M.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,ft[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ye||M.minFilter!==ks&&M.minFilter!==Zi||M.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Vt(P,M){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",O));const et=M.source;let ot=g.get(et);ot===void 0&&(ot={},g.set(et,ot));const nt=st(M);if(nt!==P.__cacheKey){ot[nt]===void 0&&(ot[nt]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,H=!0),ot[nt].usedTimes++;const kt=ot[P.__cacheKey];kt!==void 0&&(ot[P.__cacheKey].usedTimes--,kt.usedTimes===0&&w(M)),P.__cacheKey=nt,P.__webglTexture=ot[nt].texture}return H}function Qt(P,M,H){return Math.floor(Math.floor(P/H)/M)}function Zt(P,M,H,et){const nt=P.updateRanges;if(nt.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,H,et,M.data);else{nt.sort((dt,Mt)=>dt.start-Mt.start);let kt=0;for(let dt=1;dt<nt.length;dt++){const Mt=nt[kt],zt=nt[dt],Gt=Mt.start+Mt.count,xt=Qt(zt.start,M.width,4),ce=Qt(Mt.start,M.width,4);zt.start<=Gt+1&&xt===ce&&Qt(zt.start+zt.count-1,M.width,4)===xt?Mt.count=Math.max(Mt.count,zt.start+zt.count-Mt.start):(++kt,nt[kt]=zt)}nt.length=kt+1;const yt=r.getParameter(r.UNPACK_ROW_LENGTH),Bt=r.getParameter(r.UNPACK_SKIP_PIXELS),$t=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let dt=0,Mt=nt.length;dt<Mt;dt++){const zt=nt[dt],Gt=Math.floor(zt.start/4),xt=Math.ceil(zt.count/4),ce=Gt%M.width,k=Math.floor(Gt/M.width),Rt=xt,gt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ce),r.pixelStorei(r.UNPACK_SKIP_ROWS,k),e.texSubImage2D(r.TEXTURE_2D,0,ce,k,Rt,gt,H,et,M.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,yt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Bt),r.pixelStorei(r.UNPACK_SKIP_ROWS,$t)}}function q(P,M,H){let et=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(et=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(et=r.TEXTURE_3D);const ot=Vt(P,M),nt=M.source;e.bindTexture(et,P.__webglTexture,r.TEXTURE0+H);const kt=i.get(nt);if(nt.version!==kt.__version||ot===!0){e.activeTexture(r.TEXTURE0+H);const yt=Se.getPrimaries(Se.workingColorSpace),Bt=M.colorSpace===bi?null:Se.getPrimaries(M.colorSpace),$t=M.colorSpace===bi||yt===Bt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let dt=E(M.image,!1,s.maxTextureSize);dt=Kt(M,dt);const Mt=a.convert(M.format,M.colorSpace),zt=a.convert(M.type);let Gt=C(M.internalFormat,Mt,zt,M.colorSpace,M.isVideoTexture);Xt(et,M);let xt;const ce=M.mipmaps,k=M.isVideoTexture!==!0,Rt=kt.__version===void 0||ot===!0,gt=nt.dataReady,It=N(M,dt);if(M.isDepthTexture)Gt=R(M.format===qi,M.type),Rt&&(k?e.texStorage2D(r.TEXTURE_2D,1,Gt,dt.width,dt.height):e.texImage2D(r.TEXTURE_2D,0,Gt,dt.width,dt.height,0,Mt,zt,null));else if(M.isDataTexture)if(ce.length>0){k&&Rt&&e.texStorage2D(r.TEXTURE_2D,It,Gt,ce[0].width,ce[0].height);for(let mt=0,lt=ce.length;mt<lt;mt++)xt=ce[mt],k?gt&&e.texSubImage2D(r.TEXTURE_2D,mt,0,0,xt.width,xt.height,Mt,zt,xt.data):e.texImage2D(r.TEXTURE_2D,mt,Gt,xt.width,xt.height,0,Mt,zt,xt.data);M.generateMipmaps=!1}else k?(Rt&&e.texStorage2D(r.TEXTURE_2D,It,Gt,dt.width,dt.height),gt&&Zt(M,dt,Mt,zt)):e.texImage2D(r.TEXTURE_2D,0,Gt,dt.width,dt.height,0,Mt,zt,dt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){k&&Rt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,It,Gt,ce[0].width,ce[0].height,dt.depth);for(let mt=0,lt=ce.length;mt<lt;mt++)if(xt=ce[mt],M.format!==In)if(Mt!==null)if(k){if(gt)if(M.layerUpdates.size>0){const Et=$h(xt.width,xt.height,M.format,M.type);for(const re of M.layerUpdates){const Te=xt.data.subarray(re*Et/xt.data.BYTES_PER_ELEMENT,(re+1)*Et/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,re,xt.width,xt.height,1,Mt,Te)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,xt.width,xt.height,dt.depth,Mt,xt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,mt,Gt,xt.width,xt.height,dt.depth,0,xt.data,0,0);else ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?gt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,xt.width,xt.height,dt.depth,Mt,zt,xt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,mt,Gt,xt.width,xt.height,dt.depth,0,Mt,zt,xt.data)}else{k&&Rt&&e.texStorage2D(r.TEXTURE_2D,It,Gt,ce[0].width,ce[0].height);for(let mt=0,lt=ce.length;mt<lt;mt++)xt=ce[mt],M.format!==In?Mt!==null?k?gt&&e.compressedTexSubImage2D(r.TEXTURE_2D,mt,0,0,xt.width,xt.height,Mt,xt.data):e.compressedTexImage2D(r.TEXTURE_2D,mt,Gt,xt.width,xt.height,0,xt.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?gt&&e.texSubImage2D(r.TEXTURE_2D,mt,0,0,xt.width,xt.height,Mt,zt,xt.data):e.texImage2D(r.TEXTURE_2D,mt,Gt,xt.width,xt.height,0,Mt,zt,xt.data)}else if(M.isDataArrayTexture)if(k){if(Rt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,It,Gt,dt.width,dt.height,dt.depth),gt)if(M.layerUpdates.size>0){const mt=$h(dt.width,dt.height,M.format,M.type);for(const lt of M.layerUpdates){const Et=dt.data.subarray(lt*mt/dt.data.BYTES_PER_ELEMENT,(lt+1)*mt/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,lt,dt.width,dt.height,1,Mt,zt,Et)}M.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Mt,zt,dt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Gt,dt.width,dt.height,dt.depth,0,Mt,zt,dt.data);else if(M.isData3DTexture)k?(Rt&&e.texStorage3D(r.TEXTURE_3D,It,Gt,dt.width,dt.height,dt.depth),gt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Mt,zt,dt.data)):e.texImage3D(r.TEXTURE_3D,0,Gt,dt.width,dt.height,dt.depth,0,Mt,zt,dt.data);else if(M.isFramebufferTexture){if(Rt)if(k)e.texStorage2D(r.TEXTURE_2D,It,Gt,dt.width,dt.height);else{let mt=dt.width,lt=dt.height;for(let Et=0;Et<It;Et++)e.texImage2D(r.TEXTURE_2D,Et,Gt,mt,lt,0,Mt,zt,null),mt>>=1,lt>>=1}}else if(ce.length>0){if(k&&Rt){const mt=vt(ce[0]);e.texStorage2D(r.TEXTURE_2D,It,Gt,mt.width,mt.height)}for(let mt=0,lt=ce.length;mt<lt;mt++)xt=ce[mt],k?gt&&e.texSubImage2D(r.TEXTURE_2D,mt,0,0,Mt,zt,xt):e.texImage2D(r.TEXTURE_2D,mt,Gt,Mt,zt,xt);M.generateMipmaps=!1}else if(k){if(Rt){const mt=vt(dt);e.texStorage2D(r.TEXTURE_2D,It,Gt,mt.width,mt.height)}gt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Mt,zt,dt)}else e.texImage2D(r.TEXTURE_2D,0,Gt,Mt,zt,dt);y(M)&&v(et),kt.__version=nt.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function at(P,M,H){if(M.image.length!==6)return;const et=Vt(P,M),ot=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+H);const nt=i.get(ot);if(ot.version!==nt.__version||et===!0){e.activeTexture(r.TEXTURE0+H);const kt=Se.getPrimaries(Se.workingColorSpace),yt=M.colorSpace===bi?null:Se.getPrimaries(M.colorSpace),Bt=M.colorSpace===bi||kt===yt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const $t=M.isCompressedTexture||M.image[0].isCompressedTexture,dt=M.image[0]&&M.image[0].isDataTexture,Mt=[];for(let lt=0;lt<6;lt++)!$t&&!dt?Mt[lt]=E(M.image[lt],!0,s.maxCubemapSize):Mt[lt]=dt?M.image[lt].image:M.image[lt],Mt[lt]=Kt(M,Mt[lt]);const zt=Mt[0],Gt=a.convert(M.format,M.colorSpace),xt=a.convert(M.type),ce=C(M.internalFormat,Gt,xt,M.colorSpace),k=M.isVideoTexture!==!0,Rt=nt.__version===void 0||et===!0,gt=ot.dataReady;let It=N(M,zt);Xt(r.TEXTURE_CUBE_MAP,M);let mt;if($t){k&&Rt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,It,ce,zt.width,zt.height);for(let lt=0;lt<6;lt++){mt=Mt[lt].mipmaps;for(let Et=0;Et<mt.length;Et++){const re=mt[Et];M.format!==In?Gt!==null?k?gt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et,0,0,re.width,re.height,Gt,re.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et,ce,re.width,re.height,0,re.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?gt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et,0,0,re.width,re.height,Gt,xt,re.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et,ce,re.width,re.height,0,Gt,xt,re.data)}}}else{if(mt=M.mipmaps,k&&Rt){mt.length>0&&It++;const lt=vt(Mt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,It,ce,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(dt){k?gt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Mt[lt].width,Mt[lt].height,Gt,xt,Mt[lt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ce,Mt[lt].width,Mt[lt].height,0,Gt,xt,Mt[lt].data);for(let Et=0;Et<mt.length;Et++){const Te=mt[Et].image[lt].image;k?gt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et+1,0,0,Te.width,Te.height,Gt,xt,Te.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et+1,ce,Te.width,Te.height,0,Gt,xt,Te.data)}}else{k?gt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Gt,xt,Mt[lt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ce,Gt,xt,Mt[lt]);for(let Et=0;Et<mt.length;Et++){const re=mt[Et];k?gt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et+1,0,0,Gt,xt,re.image[lt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et+1,ce,Gt,xt,re.image[lt])}}}y(M)&&v(r.TEXTURE_CUBE_MAP),nt.__version=ot.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Pt(P,M,H,et,ot,nt){const kt=a.convert(H.format,H.colorSpace),yt=a.convert(H.type),Bt=C(H.internalFormat,kt,yt,H.colorSpace),$t=i.get(M),dt=i.get(H);if(dt.__renderTarget=M,!$t.__hasExternalTextures){const Mt=Math.max(1,M.width>>nt),zt=Math.max(1,M.height>>nt);ot===r.TEXTURE_3D||ot===r.TEXTURE_2D_ARRAY?e.texImage3D(ot,nt,Bt,Mt,zt,M.depth,0,kt,yt,null):e.texImage2D(ot,nt,Bt,Mt,zt,0,kt,yt,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),Jt(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,et,ot,dt.__webglTexture,0,I(M)):(ot===r.TEXTURE_2D||ot>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,et,ot,dt.__webglTexture,nt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function jt(P,M,H){if(r.bindRenderbuffer(r.RENDERBUFFER,P),M.depthBuffer){const et=M.depthTexture,ot=et&&et.isDepthTexture?et.type:null,nt=R(M.stencilBuffer,ot),kt=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Jt(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,I(M),nt,M.width,M.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,I(M),nt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,nt,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,kt,r.RENDERBUFFER,P)}else{const et=M.textures;for(let ot=0;ot<et.length;ot++){const nt=et[ot],kt=a.convert(nt.format,nt.colorSpace),yt=a.convert(nt.type),Bt=C(nt.internalFormat,kt,yt,nt.colorSpace);Jt(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,I(M),Bt,M.width,M.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,I(M),Bt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Bt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ut(P,M,H){const et=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ot=i.get(M.depthTexture);if(ot.__renderTarget=M,(!ot.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),et){if(ot.__webglInit===void 0&&(ot.__webglInit=!0,M.depthTexture.addEventListener("dispose",O)),ot.__webglTexture===void 0){ot.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,ot.__webglTexture),Xt(r.TEXTURE_CUBE_MAP,M.depthTexture);const $t=a.convert(M.depthTexture.format),dt=a.convert(M.depthTexture.type);let Mt;M.depthTexture.format===pi?Mt=r.DEPTH_COMPONENT24:M.depthTexture.format===qi&&(Mt=r.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,Mt,M.width,M.height,0,$t,dt,null)}}else it(M.depthTexture,0);const nt=ot.__webglTexture,kt=I(M),yt=et?r.TEXTURE_CUBE_MAP_POSITIVE_X+H:r.TEXTURE_2D,Bt=M.depthTexture.format===qi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===pi)Jt(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Bt,yt,nt,0,kt):r.framebufferTexture2D(r.FRAMEBUFFER,Bt,yt,nt,0);else if(M.depthTexture.format===qi)Jt(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Bt,yt,nt,0,kt):r.framebufferTexture2D(r.FRAMEBUFFER,Bt,yt,nt,0);else throw new Error("Unknown depthTexture format")}function fe(P){const M=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const et=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),et){const ot=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,et.removeEventListener("dispose",ot)};et.addEventListener("dispose",ot),M.__depthDisposeCallback=ot}M.__boundDepthTexture=et}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(H)for(let et=0;et<6;et++)Ut(M.__webglFramebuffer[et],P,et);else{const et=P.texture.mipmaps;et&&et.length>0?Ut(M.__webglFramebuffer[0],P,0):Ut(M.__webglFramebuffer,P,0)}else if(H){M.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[et]),M.__webglDepthbuffer[et]===void 0)M.__webglDepthbuffer[et]=r.createRenderbuffer(),jt(M.__webglDepthbuffer[et],P,!1);else{const ot=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,nt=M.__webglDepthbuffer[et];r.bindRenderbuffer(r.RENDERBUFFER,nt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ot,r.RENDERBUFFER,nt)}}else{const et=P.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),jt(M.__webglDepthbuffer,P,!1);else{const ot=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,nt=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,nt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ot,r.RENDERBUFFER,nt)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function me(P,M,H){const et=i.get(P);M!==void 0&&Pt(et.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&fe(P)}function ie(P){const M=P.texture,H=i.get(P),et=i.get(M);P.addEventListener("dispose",B);const ot=P.textures,nt=P.isWebGLCubeRenderTarget===!0,kt=ot.length>1;if(kt||(et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture()),et.__version=M.version,c.memory.textures++),nt){H.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[yt]=[];for(let Bt=0;Bt<M.mipmaps.length;Bt++)H.__webglFramebuffer[yt][Bt]=r.createFramebuffer()}else H.__webglFramebuffer[yt]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let yt=0;yt<M.mipmaps.length;yt++)H.__webglFramebuffer[yt]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(kt)for(let yt=0,Bt=ot.length;yt<Bt;yt++){const $t=i.get(ot[yt]);$t.__webglTexture===void 0&&($t.__webglTexture=r.createTexture(),c.memory.textures++)}if(P.samples>0&&Jt(P)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let yt=0;yt<ot.length;yt++){const Bt=ot[yt];H.__webglColorRenderbuffer[yt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[yt]);const $t=a.convert(Bt.format,Bt.colorSpace),dt=a.convert(Bt.type),Mt=C(Bt.internalFormat,$t,dt,Bt.colorSpace,P.isXRRenderTarget===!0),zt=I(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,zt,Mt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,H.__webglColorRenderbuffer[yt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),jt(H.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(nt){e.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture),Xt(r.TEXTURE_CUBE_MAP,M);for(let yt=0;yt<6;yt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Bt=0;Bt<M.mipmaps.length;Bt++)Pt(H.__webglFramebuffer[yt][Bt],P,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt);else Pt(H.__webglFramebuffer[yt],P,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);y(M)&&v(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(kt){for(let yt=0,Bt=ot.length;yt<Bt;yt++){const $t=ot[yt],dt=i.get($t);let Mt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Mt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Mt,dt.__webglTexture),Xt(Mt,$t),Pt(H.__webglFramebuffer,P,$t,r.COLOR_ATTACHMENT0+yt,Mt,0),y($t)&&v(Mt)}e.unbindTexture()}else{let yt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(yt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(yt,et.__webglTexture),Xt(yt,M),M.mipmaps&&M.mipmaps.length>0)for(let Bt=0;Bt<M.mipmaps.length;Bt++)Pt(H.__webglFramebuffer[Bt],P,M,r.COLOR_ATTACHMENT0,yt,Bt);else Pt(H.__webglFramebuffer,P,M,r.COLOR_ATTACHMENT0,yt,0);y(M)&&v(yt),e.unbindTexture()}P.depthBuffer&&fe(P)}function ct(P){const M=P.textures;for(let H=0,et=M.length;H<et;H++){const ot=M[H];if(y(ot)){const nt=D(P),kt=i.get(ot).__webglTexture;e.bindTexture(nt,kt),v(nt),e.unbindTexture()}}}const pt=[],ht=[];function wt(P){if(P.samples>0){if(Jt(P)===!1){const M=P.textures,H=P.width,et=P.height;let ot=r.COLOR_BUFFER_BIT;const nt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,kt=i.get(P),yt=M.length>1;if(yt)for(let $t=0;$t<M.length;$t++)e.bindFramebuffer(r.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$t,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$t,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);const Bt=P.texture.mipmaps;Bt&&Bt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let $t=0;$t<M.length;$t++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ot|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ot|=r.STENCIL_BUFFER_BIT)),yt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,kt.__webglColorRenderbuffer[$t]);const dt=i.get(M[$t]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,dt,0)}r.blitFramebuffer(0,0,H,et,0,0,H,et,ot,r.NEAREST),u===!0&&(pt.length=0,ht.length=0,pt.push(r.COLOR_ATTACHMENT0+$t),P.depthBuffer&&P.resolveDepthBuffer===!1&&(pt.push(nt),ht.push(nt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ht)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),yt)for(let $t=0;$t<M.length;$t++){e.bindFramebuffer(r.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$t,r.RENDERBUFFER,kt.__webglColorRenderbuffer[$t]);const dt=i.get(M[$t]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$t,r.TEXTURE_2D,dt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&u){const M=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function I(P){return Math.min(s.maxSamples,P.samples)}function Jt(P){const M=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Lt(P){const M=c.render.frame;p.get(P)!==M&&(p.set(P,M),P.update())}function Kt(P,M){const H=P.colorSpace,et=P.format,ot=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==Pr&&H!==bi&&(Se.getTransfer(H)===Ee?(et!==In||ot!==pn)&&ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):xe("WebGLTextures: Unsupported texture color space:",H)),M}function vt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(d.width=P.naturalWidth||P.width,d.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(d.width=P.displayWidth,d.height=P.displayHeight):(d.width=P.width,d.height=P.height),d}this.allocateTextureUnit=j,this.resetTextureUnits=Y,this.setTexture2D=it,this.setTexture2DArray=Q,this.setTexture3D=Z,this.setTextureCube=J,this.rebindTextures=me,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=Jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ix(r,t){function e(i,s=bi){let a;const c=Se.getTransfer(s);if(i===pn)return r.UNSIGNED_BYTE;if(i===sc)return r.UNSIGNED_SHORT_4_4_4_4;if(i===oc)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Vu)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Gu)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===ku)return r.BYTE;if(i===Hu)return r.SHORT;if(i===hs)return r.UNSIGNED_SHORT;if(i===rc)return r.INT;if(i===Kn)return r.UNSIGNED_INT;if(i===Wn)return r.FLOAT;if(i===di)return r.HALF_FLOAT;if(i===Wu)return r.ALPHA;if(i===Xu)return r.RGB;if(i===In)return r.RGBA;if(i===pi)return r.DEPTH_COMPONENT;if(i===qi)return r.DEPTH_STENCIL;if(i===Zu)return r.RED;if(i===ac)return r.RED_INTEGER;if(i===Cr)return r.RG;if(i===lc)return r.RG_INTEGER;if(i===cc)return r.RGBA_INTEGER;if(i===bo||i===To||i===wo||i===Ao)if(c===Ee)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===bo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===To)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ao)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===bo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===To)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ao)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dl||i===pl||i===ml||i===_l)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===dl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ml)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_l)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gl||i===vl||i===xl||i===yl||i===Sl||i===Ml||i===El)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===gl||i===vl)return c===Ee?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===xl)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===yl)return a.COMPRESSED_R11_EAC;if(i===Sl)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Ml)return a.COMPRESSED_RG11_EAC;if(i===El)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===bl||i===Tl||i===wl||i===Al||i===Cl||i===Pl||i===Rl||i===Ll||i===Dl||i===Il||i===Nl||i===Ul||i===Ol||i===Fl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===bl)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Tl)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wl)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Al)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cl)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pl)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rl)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ll)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dl)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Il)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nl)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ul)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ol)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fl)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bl||i===zl||i===kl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Bl)return c===Ee?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hl||i===Vl||i===Gl||i===Wl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Hl)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Vl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===us?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}const Nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ux=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ox{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new sf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Un({vertexShader:Nx,fragmentShader:Ux,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new En(new zo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fx extends Dr{constructor(t,e){super();const i=this;let s=null,a=1,c=null,h="local-floor",u=1,d=null,p=null,m=null,g=null,x=null,S=null;const E=typeof XRWebGLBinding<"u",y=new Ox,v={},D=e.getContextAttributes();let C=null,R=null;const N=[],O=[],B=new Ct;let W=null;const w=new yn;w.viewport=new we;const A=new yn;A.viewport=new we;const F=[w,A],Y=new Gm;let j=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let at=N[q];return at===void 0&&(at=new Ua,N[q]=at),at.getTargetRaySpace()},this.getControllerGrip=function(q){let at=N[q];return at===void 0&&(at=new Ua,N[q]=at),at.getGripSpace()},this.getHand=function(q){let at=N[q];return at===void 0&&(at=new Ua,N[q]=at),at.getHandSpace()};function it(q){const at=O.indexOf(q.inputSource);if(at===-1)return;const Pt=N[at];Pt!==void 0&&(Pt.update(q.inputSource,q.frame,d||c),Pt.dispatchEvent({type:q.type,data:q.inputSource}))}function Q(){s.removeEventListener("select",it),s.removeEventListener("selectstart",it),s.removeEventListener("selectend",it),s.removeEventListener("squeeze",it),s.removeEventListener("squeezestart",it),s.removeEventListener("squeezeend",it),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",Z);for(let q=0;q<N.length;q++){const at=O[q];at!==null&&(O[q]=null,N[q].disconnect(at))}j=null,st=null,y.reset();for(const q in v)delete v[q];t.setRenderTarget(C),x=null,g=null,m=null,s=null,R=null,Zt.stop(),i.isPresenting=!1,t.setPixelRatio(W),t.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,i.isPresenting===!0&&ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){h=q,i.isPresenting===!0&&ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(q){d=q},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return m===null&&E&&(m=new XRWebGLBinding(s,e)),m},this.getFrame=function(){return S},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",it),s.addEventListener("selectstart",it),s.addEventListener("selectend",it),s.addEventListener("squeeze",it),s.addEventListener("squeezestart",it),s.addEventListener("squeezeend",it),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",Z),D.xrCompatible!==!0&&await e.makeXRCompatible(),W=t.getPixelRatio(),t.getSize(B),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,jt=null,Ut=null;D.depth&&(Ut=D.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Pt=D.stencil?qi:pi,jt=D.stencil?us:Kn);const fe={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:a};m=this.getBinding(),g=m.createProjectionLayer(fe),s.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),R=new Yn(g.textureWidth,g.textureHeight,{format:In,type:pn,depthTexture:new ps(g.textureWidth,g.textureHeight,jt,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Pt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(s,e,Pt),s.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),R=new Yn(x.framebufferWidth,x.framebufferHeight,{format:In,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(u),d=null,c=await s.requestReferenceSpace(h),Zt.setContext(s),Zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(q){for(let at=0;at<q.removed.length;at++){const Pt=q.removed[at],jt=O.indexOf(Pt);jt>=0&&(O[jt]=null,N[jt].disconnect(Pt))}for(let at=0;at<q.added.length;at++){const Pt=q.added[at];let jt=O.indexOf(Pt);if(jt===-1){for(let fe=0;fe<N.length;fe++)if(fe>=O.length){O.push(Pt),jt=fe;break}else if(O[fe]===null){O[fe]=Pt,jt=fe;break}if(jt===-1)break}const Ut=N[jt];Ut&&Ut.connect(Pt)}}const J=new z,Tt=new z;function rt(q,at,Pt){J.setFromMatrixPosition(at.matrixWorld),Tt.setFromMatrixPosition(Pt.matrixWorld);const jt=J.distanceTo(Tt),Ut=at.projectionMatrix.elements,fe=Pt.projectionMatrix.elements,me=Ut[14]/(Ut[10]-1),ie=Ut[14]/(Ut[10]+1),ct=(Ut[9]+1)/Ut[5],pt=(Ut[9]-1)/Ut[5],ht=(Ut[8]-1)/Ut[0],wt=(fe[8]+1)/fe[0],I=me*ht,Jt=me*wt,Lt=jt/(-ht+wt),Kt=Lt*-ht;if(at.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Kt),q.translateZ(Lt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ut[10]===-1)q.projectionMatrix.copy(at.projectionMatrix),q.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const vt=me+Lt,P=ie+Lt,M=I-Kt,H=Jt+(jt-Kt),et=ct*ie/P*vt,ot=pt*ie/P*vt;q.projectionMatrix.makePerspective(M,H,et,ot,vt,P),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ft(q,at){at===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(at.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let at=q.near,Pt=q.far;y.texture!==null&&(y.depthNear>0&&(at=y.depthNear),y.depthFar>0&&(Pt=y.depthFar)),Y.near=A.near=w.near=at,Y.far=A.far=w.far=Pt,(j!==Y.near||st!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),j=Y.near,st=Y.far),Y.layers.mask=q.layers.mask|6,w.layers.mask=Y.layers.mask&3,A.layers.mask=Y.layers.mask&5;const jt=q.parent,Ut=Y.cameras;ft(Y,jt);for(let fe=0;fe<Ut.length;fe++)ft(Ut[fe],jt);Ut.length===2?rt(Y,w,A):Y.projectionMatrix.copy(w.projectionMatrix),Xt(q,Y,jt)};function Xt(q,at,Pt){Pt===null?q.matrix.copy(at.matrixWorld):(q.matrix.copy(Pt.matrixWorld),q.matrix.invert(),q.matrix.multiply(at.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(at.projectionMatrix),q.projectionMatrixInverse.copy(at.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ds*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(g===null&&x===null))return u},this.setFoveation=function(q){u=q,g!==null&&(g.fixedFoveation=q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(q){return v[q]};let Vt=null;function Qt(q,at){if(p=at.getViewerPose(d||c),S=at,p!==null){const Pt=p.views;x!==null&&(t.setRenderTargetFramebuffer(R,x.framebuffer),t.setRenderTarget(R));let jt=!1;Pt.length!==Y.cameras.length&&(Y.cameras.length=0,jt=!0);for(let ie=0;ie<Pt.length;ie++){const ct=Pt[ie];let pt=null;if(x!==null)pt=x.getViewport(ct);else{const wt=m.getViewSubImage(g,ct);pt=wt.viewport,ie===0&&(t.setRenderTargetTextures(R,wt.colorTexture,wt.depthStencilTexture),t.setRenderTarget(R))}let ht=F[ie];ht===void 0&&(ht=new yn,ht.layers.enable(ie),ht.viewport=new we,F[ie]=ht),ht.matrix.fromArray(ct.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(ct.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(pt.x,pt.y,pt.width,pt.height),ie===0&&(Y.matrix.copy(ht.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),jt===!0&&Y.cameras.push(ht)}const Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){m=i.getBinding();const ie=m.getDepthInformation(Pt[0]);ie&&ie.isValid&&ie.texture&&y.init(ie,s.renderState)}if(Ut&&Ut.includes("camera-access")&&E){t.state.unbindTexture(),m=i.getBinding();for(let ie=0;ie<Pt.length;ie++){const ct=Pt[ie].camera;if(ct){let pt=v[ct];pt||(pt=new sf,v[ct]=pt);const ht=m.getCameraImage(ct);pt.sourceTexture=ht}}}}for(let Pt=0;Pt<N.length;Pt++){const jt=O[Pt],Ut=N[Pt];jt!==null&&Ut!==void 0&&Ut.update(jt,at,d||c)}Vt&&Vt(q,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),S=null}const Zt=new _f;Zt.setAnimationLoop(Qt),this.setAnimationLoop=function(q){Vt=q},this.dispose=function(){}}}const Hi=new jn,Bx=new Re;function zx(r,t){function e(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function i(y,v){v.color.getRGB(y.fogColor.value,tf(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function s(y,v,D,C,R){v.isMeshBasicMaterial||v.isMeshLambertMaterial?a(y,v):v.isMeshToonMaterial?(a(y,v),m(y,v)):v.isMeshPhongMaterial?(a(y,v),p(y,v)):v.isMeshStandardMaterial?(a(y,v),g(y,v),v.isMeshPhysicalMaterial&&x(y,v,R)):v.isMeshMatcapMaterial?(a(y,v),S(y,v)):v.isMeshDepthMaterial?a(y,v):v.isMeshDistanceMaterial?(a(y,v),E(y,v)):v.isMeshNormalMaterial?a(y,v):v.isLineBasicMaterial?(c(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?u(y,v,D,C):v.isSpriteMaterial?d(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function a(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,e(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,e(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,e(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===un&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,e(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===un&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,e(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,e(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,e(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const D=t.get(v),C=D.envMap,R=D.envMapRotation;C&&(y.envMap.value=C,Hi.copy(R),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),y.envMapRotation.value.setFromMatrix4(Bx.makeRotationFromEuler(Hi)),y.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,e(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,e(v.aoMap,y.aoMapTransform))}function c(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,e(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function u(y,v,D,C){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*D,y.scale.value=C*.5,v.map&&(y.map.value=v.map,e(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,e(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,e(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,e(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function m(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function g(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,e(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,e(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function x(y,v,D){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,e(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,e(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,e(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,e(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,e(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===un&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,e(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,e(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,e(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,e(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,e(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,e(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,e(v.specularIntensityMap,y.specularIntensityMapTransform))}function S(y,v){v.matcap&&(y.matcap.value=v.matcap)}function E(y,v){const D=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function kx(r,t,e,i){let s={},a={},c=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function u(D,C){const R=C.program;i.uniformBlockBinding(D,R)}function d(D,C){let R=s[D.id];R===void 0&&(S(D),R=p(D),s[D.id]=R,D.addEventListener("dispose",y));const N=C.program;i.updateUBOMapping(D,N);const O=t.render.frame;a[D.id]!==O&&(g(D),a[D.id]=O)}function p(D){const C=m();D.__bindingPointIndex=C;const R=r.createBuffer(),N=D.__size,O=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,N,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,C,R),R}function m(){for(let D=0;D<h;D++)if(c.indexOf(D)===-1)return c.push(D),D;return xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const C=s[D.id],R=D.uniforms,N=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,C);for(let O=0,B=R.length;O<B;O++){const W=Array.isArray(R[O])?R[O]:[R[O]];for(let w=0,A=W.length;w<A;w++){const F=W[w];if(x(F,O,w,N)===!0){const Y=F.__offset,j=Array.isArray(F.value)?F.value:[F.value];let st=0;for(let it=0;it<j.length;it++){const Q=j[it],Z=E(Q);typeof Q=="number"||typeof Q=="boolean"?(F.__data[0]=Q,r.bufferSubData(r.UNIFORM_BUFFER,Y+st,F.__data)):Q.isMatrix3?(F.__data[0]=Q.elements[0],F.__data[1]=Q.elements[1],F.__data[2]=Q.elements[2],F.__data[3]=0,F.__data[4]=Q.elements[3],F.__data[5]=Q.elements[4],F.__data[6]=Q.elements[5],F.__data[7]=0,F.__data[8]=Q.elements[6],F.__data[9]=Q.elements[7],F.__data[10]=Q.elements[8],F.__data[11]=0):(Q.toArray(F.__data,st),st+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(D,C,R,N){const O=D.value,B=C+"_"+R;if(N[B]===void 0)return typeof O=="number"||typeof O=="boolean"?N[B]=O:N[B]=O.clone(),!0;{const W=N[B];if(typeof O=="number"||typeof O=="boolean"){if(W!==O)return N[B]=O,!0}else if(W.equals(O)===!1)return W.copy(O),!0}return!1}function S(D){const C=D.uniforms;let R=0;const N=16;for(let B=0,W=C.length;B<W;B++){const w=Array.isArray(C[B])?C[B]:[C[B]];for(let A=0,F=w.length;A<F;A++){const Y=w[A],j=Array.isArray(Y.value)?Y.value:[Y.value];for(let st=0,it=j.length;st<it;st++){const Q=j[st],Z=E(Q),J=R%N,Tt=J%Z.boundary,rt=J+Tt;R+=Tt,rt!==0&&N-rt<Z.storage&&(R+=N-rt),Y.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=R,R+=Z.storage}}}const O=R%N;return O>0&&(R+=N-O),D.__size=R,D.__cache={},this}function E(D){const C={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(C.boundary=4,C.storage=4):D.isVector2?(C.boundary=8,C.storage=8):D.isVector3||D.isColor?(C.boundary=16,C.storage=12):D.isVector4?(C.boundary=16,C.storage=16):D.isMatrix3?(C.boundary=48,C.storage=48):D.isMatrix4?(C.boundary=64,C.storage=64):D.isTexture?ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ne("WebGLRenderer: Unsupported uniform value type.",D),C}function y(D){const C=D.target;C.removeEventListener("dispose",y);const R=c.indexOf(C.__bindingPointIndex);c.splice(R,1),r.deleteBuffer(s[C.id]),delete s[C.id],delete a[C.id]}function v(){for(const D in s)r.deleteBuffer(s[D]);c=[],s={},a={}}return{bind:u,update:d,dispose:v}}const Hx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let kn=null;function Vx(){return kn===null&&(kn=new Zp(Hx,16,16,Cr,di),kn.name="DFG_LUT",kn.minFilter=$e,kn.magFilter=$e,kn.wrapS=ci,kn.wrapT=ci,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn}class Gx{constructor(t={}){const{canvas:e=rp(),context:i=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:g=!1,outputBufferType:x=pn}=t;this.isWebGLRenderer=!0;let S;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=i.getContextAttributes().alpha}else S=c;const E=x,y=new Set([cc,lc,ac]),v=new Set([pn,Kn,hs,us,sc,oc]),D=new Uint32Array(4),C=new Int32Array(4);let R=null,N=null;const O=[],B=[];let W=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let A=!1;this._outputColorSpace=xn;let F=0,Y=0,j=null,st=-1,it=null;const Q=new we,Z=new we;let J=null;const Tt=new ye(0);let rt=0,ft=e.width,Xt=e.height,Vt=1,Qt=null,Zt=null;const q=new we(0,0,ft,Xt),at=new we(0,0,ft,Xt);let Pt=!1;const jt=new vc;let Ut=!1,fe=!1;const me=new Re,ie=new z,ct=new we,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function wt(){return j===null?Vt:1}let I=i;function Jt(T,V){return e.getContext(T,V)}try{const T={alpha:!0,depth:s,stencil:a,antialias:h,premultipliedAlpha:u,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nc}`),e.addEventListener("webglcontextlost",re,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",Me,!1),I===null){const V="webgl2";if(I=Jt(V,T),I===null)throw Jt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw xe("WebGLRenderer: "+T.message),T}let Lt,Kt,vt,P,M,H,et,ot,nt,kt,yt,Bt,$t,dt,Mt,zt,Gt,xt,ce,k,Rt,gt,It,mt;function lt(){Lt=new Vv(I),Lt.init(),gt=new Ix(I,Lt),Kt=new Iv(I,Lt,t,gt),vt=new Lx(I,Lt),Kt.reversedDepthBuffer&&g&&vt.buffers.depth.setReversed(!0),P=new Xv(I),M=new _x,H=new Dx(I,Lt,vt,M,Kt,gt,P),et=new Uv(w),ot=new Hv(w),nt=new Jm(I),It=new Lv(I,nt),kt=new Gv(I,nt,P,It),yt=new qv(I,kt,nt,P),ce=new Zv(I,Kt,H),zt=new Nv(M),Bt=new mx(w,et,ot,Lt,Kt,It,zt),$t=new zx(w,M),dt=new vx,Mt=new bx(Lt),xt=new Rv(w,et,ot,vt,yt,S,u),Gt=new Px(w,yt,Kt),mt=new kx(I,P,Kt,vt),k=new Dv(I,Lt,P),Rt=new Wv(I,Lt,P),P.programs=Bt.programs,w.capabilities=Kt,w.extensions=Lt,w.properties=M,w.renderLists=dt,w.shadowMap=Gt,w.state=vt,w.info=P}lt(),E!==pn&&(W=new Jv(E,e.width,e.height,s,a));const Et=new Fx(w,I);this.xr=Et,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=Lt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Lt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Vt},this.setPixelRatio=function(T){T!==void 0&&(Vt=T,this.setSize(ft,Xt,!1))},this.getSize=function(T){return T.set(ft,Xt)},this.setSize=function(T,V,tt=!0){if(Et.isPresenting){ne("WebGLRenderer: Can't change size while VR device is presenting.");return}ft=T,Xt=V,e.width=Math.floor(T*Vt),e.height=Math.floor(V*Vt),tt===!0&&(e.style.width=T+"px",e.style.height=V+"px"),W!==null&&W.setSize(e.width,e.height),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(ft*Vt,Xt*Vt).floor()},this.setDrawingBufferSize=function(T,V,tt){ft=T,Xt=V,Vt=tt,e.width=Math.floor(T*tt),e.height=Math.floor(V*tt),this.setViewport(0,0,T,V)},this.setEffects=function(T){if(E===pn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let V=0;V<T.length;V++)if(T[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}W.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Q)},this.getViewport=function(T){return T.copy(q)},this.setViewport=function(T,V,tt,K){T.isVector4?q.set(T.x,T.y,T.z,T.w):q.set(T,V,tt,K),vt.viewport(Q.copy(q).multiplyScalar(Vt).round())},this.getScissor=function(T){return T.copy(at)},this.setScissor=function(T,V,tt,K){T.isVector4?at.set(T.x,T.y,T.z,T.w):at.set(T,V,tt,K),vt.scissor(Z.copy(at).multiplyScalar(Vt).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(T){vt.setScissorTest(Pt=T)},this.setOpaqueSort=function(T){Qt=T},this.setTransparentSort=function(T){Zt=T},this.getClearColor=function(T){return T.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(T=!0,V=!0,tt=!0){let K=0;if(T){let G=!1;if(j!==null){const St=j.texture.format;G=y.has(St)}if(G){const St=j.texture.type,Ot=v.has(St),At=xt.getClearColor(),Ft=xt.getClearAlpha(),_t=At.r,Dt=At.g,qt=At.b;Ot?(D[0]=_t,D[1]=Dt,D[2]=qt,D[3]=Ft,I.clearBufferuiv(I.COLOR,0,D)):(C[0]=_t,C[1]=Dt,C[2]=qt,C[3]=Ft,I.clearBufferiv(I.COLOR,0,C))}else K|=I.COLOR_BUFFER_BIT}V&&(K|=I.DEPTH_BUFFER_BIT),tt&&(K|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",re,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",Me,!1),xt.dispose(),dt.dispose(),Mt.dispose(),M.dispose(),et.dispose(),ot.dispose(),yt.dispose(),It.dispose(),mt.dispose(),Bt.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",Wt),Et.removeEventListener("sessionend",Fr),On.stop()};function re(T){T.preventDefault(),Do("WebGLRenderer: Context Lost."),A=!0}function Te(){Do("WebGLRenderer: Context Restored."),A=!1;const T=P.autoReset,V=Gt.enabled,tt=Gt.autoUpdate,K=Gt.needsUpdate,G=Gt.type;lt(),P.autoReset=T,Gt.enabled=V,Gt.autoUpdate=tt,Gt.needsUpdate=K,Gt.type=G}function Me(T){xe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function an(T){const V=T.target;V.removeEventListener("dispose",an),bn(V)}function bn(T){Wo(T),M.remove(T)}function Wo(T){const V=M.get(T).programs;V!==void 0&&(V.forEach(function(tt){Bt.releaseProgram(tt)}),T.isShaderMaterial&&Bt.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,tt,K,G,St){V===null&&(V=pt);const Ot=G.isMesh&&G.matrixWorld.determinant()<0,At=Xo(T,V,tt,K,G);vt.setMaterial(K,Ot);let Ft=tt.index,_t=1;if(K.wireframe===!0){if(Ft=kt.getWireframeAttribute(tt),Ft===void 0)return;_t=2}const Dt=tt.drawRange,qt=tt.attributes.position;let se=Dt.start*_t,pe=(Dt.start+Dt.count)*_t;St!==null&&(se=Math.max(se,St.start*_t),pe=Math.min(pe,(St.start+St.count)*_t)),Ft!==null?(se=Math.max(se,0),pe=Math.min(pe,Ft.count)):qt!=null&&(se=Math.max(se,0),pe=Math.min(pe,qt.count));const Ae=pe-se;if(Ae<0||Ae===1/0)return;It.setup(G,K,At,tt,Ft);let Ht,te=k;if(Ft!==null&&(Ht=nt.get(Ft),te=Rt,te.setIndex(Ht)),G.isMesh)K.wireframe===!0?(vt.setLineWidth(K.wireframeLinewidth*wt()),te.setMode(I.LINES)):te.setMode(I.TRIANGLES);else if(G.isLine){let Yt=K.linewidth;Yt===void 0&&(Yt=1),vt.setLineWidth(Yt*wt()),G.isLineSegments?te.setMode(I.LINES):G.isLineLoop?te.setMode(I.LINE_LOOP):te.setMode(I.LINE_STRIP)}else G.isPoints?te.setMode(I.POINTS):G.isSprite&&te.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)fs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),te.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Lt.get("WEBGL_multi_draw"))te.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Yt=G._multiDrawStarts,_e=G._multiDrawCounts,oe=G._multiDrawCount,Qe=Ft?nt.get(Ft).bytesPerElement:1,Tn=M.get(K).currentProgram.getUniforms();for(let De=0;De<oe;De++)Tn.setValue(I,"_gl_DrawID",De),te.render(Yt[De]/Qe,_e[De])}else if(G.isInstancedMesh)te.renderInstances(se,Ae,G.count);else if(tt.isInstancedBufferGeometry){const Yt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,_e=Math.min(tt.instanceCount,Yt);te.renderInstances(se,Ae,_e)}else te.render(se,Ae)};function Ms(T,V,tt){T.transparent===!0&&T.side===Sn&&T.forceSinglePass===!1?(T.side=un,T.needsUpdate=!0,Li(T,V,tt),T.side=Ci,T.needsUpdate=!0,Li(T,V,tt),T.side=Sn):Li(T,V,tt)}this.compile=function(T,V,tt=null){tt===null&&(tt=T),N=Mt.get(tt),N.init(V),B.push(N),tt.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(N.pushLight(G),G.castShadow&&N.pushShadow(G))}),T!==tt&&T.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(N.pushLight(G),G.castShadow&&N.pushShadow(G))}),N.setupLights();const K=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const St=G.material;if(St)if(Array.isArray(St))for(let Ot=0;Ot<St.length;Ot++){const At=St[Ot];Ms(At,tt,G),K.add(At)}else Ms(St,tt,G),K.add(St)}),N=B.pop(),K},this.compileAsync=function(T,V,tt=null){const K=this.compile(T,V,tt);return new Promise(G=>{function St(){if(K.forEach(function(Ot){M.get(Ot).currentProgram.isReady()&&K.delete(Ot)}),K.size===0){G(T);return}setTimeout(St,10)}Lt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Or=null;function mn(T){Or&&Or(T)}function Wt(){On.stop()}function Fr(){On.start()}const On=new _f;On.setAnimationLoop(mn),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(T){Or=T,Et.setAnimationLoop(T),T===null?On.stop():On.start()},Et.addEventListener("sessionstart",Wt),Et.addEventListener("sessionend",Fr),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;const tt=Et.enabled===!0&&Et.isPresenting===!0,K=W!==null&&(j===null||tt)&&W.begin(w,j);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(W===null||W.isCompositing()===!1)&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(V),V=Et.getCamera()),T.isScene===!0&&T.onBeforeRender(w,T,V,j),N=Mt.get(T,B.length),N.init(V),B.push(N),me.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),jt.setFromProjectionMatrix(me,Xn,V.reversedDepth),fe=this.localClippingEnabled,Ut=zt.init(this.clippingPlanes,fe),R=dt.get(T,O.length),R.init(),O.push(R),Et.enabled===!0&&Et.isPresenting===!0){const Ot=w.xr.getDepthSensingMesh();Ot!==null&&$i(Ot,V,-1/0,w.sortObjects)}$i(T,V,0,w.sortObjects),R.finish(),w.sortObjects===!0&&R.sort(Qt,Zt),ht=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,ht&&xt.addToRenderList(R,T),this.info.render.frame++,Ut===!0&&zt.beginShadows();const G=N.state.shadowsArray;if(Gt.render(G,T,V),Ut===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(K&&W.hasRenderPass())===!1){const Ot=R.opaque,At=R.transmissive;if(N.setupLights(),V.isArrayCamera){const Ft=V.cameras;if(At.length>0)for(let _t=0,Dt=Ft.length;_t<Dt;_t++){const qt=Ft[_t];Qi(Ot,At,T,qt)}ht&&xt.render(T);for(let _t=0,Dt=Ft.length;_t<Dt;_t++){const qt=Ft[_t];Br(R,T,qt,qt.viewport)}}else At.length>0&&Qi(Ot,At,T,V),ht&&xt.render(T),Br(R,T,V)}j!==null&&Y===0&&(H.updateMultisampleRenderTarget(j),H.updateRenderTargetMipmap(j)),K&&W.end(w),T.isScene===!0&&T.onAfterRender(w,T,V),It.resetDefaultState(),st=-1,it=null,B.pop(),B.length>0?(N=B[B.length-1],Ut===!0&&zt.setGlobalState(w.clippingPlanes,N.state.camera)):N=null,O.pop(),O.length>0?R=O[O.length-1]:R=null};function $i(T,V,tt,K){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)tt=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)N.pushLight(T),T.castShadow&&N.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||jt.intersectsSprite(T)){K&&ct.setFromMatrixPosition(T.matrixWorld).applyMatrix4(me);const Ot=yt.update(T),At=T.material;At.visible&&R.push(T,Ot,At,tt,ct.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||jt.intersectsObject(T))){const Ot=yt.update(T),At=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ct.copy(T.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),ct.copy(Ot.boundingSphere.center)),ct.applyMatrix4(T.matrixWorld).applyMatrix4(me)),Array.isArray(At)){const Ft=Ot.groups;for(let _t=0,Dt=Ft.length;_t<Dt;_t++){const qt=Ft[_t],se=At[qt.materialIndex];se&&se.visible&&R.push(T,Ot,se,tt,ct.z,qt)}}else At.visible&&R.push(T,Ot,At,tt,ct.z,null)}}const St=T.children;for(let Ot=0,At=St.length;Ot<At;Ot++)$i(St[Ot],V,tt,K)}function Br(T,V,tt,K){const{opaque:G,transmissive:St,transparent:Ot}=T;N.setupLightsView(tt),Ut===!0&&zt.setGlobalState(w.clippingPlanes,tt),K&&vt.viewport(Q.copy(K)),G.length>0&&Ri(G,V,tt),St.length>0&&Ri(St,V,tt),Ot.length>0&&Ri(Ot,V,tt),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Qi(T,V,tt,K){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[K.id]===void 0){const se=Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[K.id]=new Yn(1,1,{generateMipmaps:!0,type:se?di:pn,minFilter:Zi,samples:Kt.samples,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Se.workingColorSpace})}const St=N.state.transmissionRenderTarget[K.id],Ot=K.viewport||Q;St.setSize(Ot.z*w.transmissionResolutionScale,Ot.w*w.transmissionResolutionScale);const At=w.getRenderTarget(),Ft=w.getActiveCubeFace(),_t=w.getActiveMipmapLevel();w.setRenderTarget(St),w.getClearColor(Tt),rt=w.getClearAlpha(),rt<1&&w.setClearColor(16777215,.5),w.clear(),ht&&xt.render(tt);const Dt=w.toneMapping;w.toneMapping=Zn;const qt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),N.setupLightsView(K),Ut===!0&&zt.setGlobalState(w.clippingPlanes,K),Ri(T,tt,K),H.updateMultisampleRenderTarget(St),H.updateRenderTargetMipmap(St),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let pe=0,Ae=V.length;pe<Ae;pe++){const Ht=V[pe],{object:te,geometry:Yt,material:_e,group:oe}=Ht;if(_e.side===Sn&&te.layers.test(K.layers)){const Qe=_e.side;_e.side=un,_e.needsUpdate=!0,Qn(te,tt,K,Yt,_e,oe),_e.side=Qe,_e.needsUpdate=!0,se=!0}}se===!0&&(H.updateMultisampleRenderTarget(St),H.updateRenderTargetMipmap(St))}w.setRenderTarget(At,Ft,_t),w.setClearColor(Tt,rt),qt!==void 0&&(K.viewport=qt),w.toneMapping=Dt}function Ri(T,V,tt){const K=V.isScene===!0?V.overrideMaterial:null;for(let G=0,St=T.length;G<St;G++){const Ot=T[G],{object:At,geometry:Ft,group:_t}=Ot;let Dt=Ot.material;Dt.allowOverride===!0&&K!==null&&(Dt=K),At.layers.test(tt.layers)&&Qn(At,V,tt,Ft,Dt,_t)}}function Qn(T,V,tt,K,G,St){T.onBeforeRender(w,V,tt,K,G,St),T.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(w,V,tt,K,T,St),G.transparent===!0&&G.side===Sn&&G.forceSinglePass===!1?(G.side=un,G.needsUpdate=!0,w.renderBufferDirect(tt,V,K,G,T,St),G.side=Ci,G.needsUpdate=!0,w.renderBufferDirect(tt,V,K,G,T,St),G.side=Sn):w.renderBufferDirect(tt,V,K,G,T,St),T.onAfterRender(w,V,tt,K,G,St)}function Li(T,V,tt){V.isScene!==!0&&(V=pt);const K=M.get(T),G=N.state.lights,St=N.state.shadowsArray,Ot=G.state.version,At=Bt.getParameters(T,G.state,St,V,tt),Ft=Bt.getProgramCacheKey(At);let _t=K.programs;K.environment=T.isMeshStandardMaterial?V.environment:null,K.fog=V.fog,K.envMap=(T.isMeshStandardMaterial?ot:et).get(T.envMap||K.environment),K.envMapRotation=K.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,_t===void 0&&(T.addEventListener("dispose",an),_t=new Map,K.programs=_t);let Dt=_t.get(Ft);if(Dt!==void 0){if(K.currentProgram===Dt&&K.lightsStateVersion===Ot)return bs(T,At),Dt}else At.uniforms=Bt.getUniforms(T),T.onBeforeCompile(At,w),Dt=Bt.acquireProgram(At,Ft),_t.set(Ft,Dt),K.uniforms=At.uniforms;const qt=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(qt.clippingPlanes=zt.uniform),bs(T,At),K.needsLights=Ts(T),K.lightsStateVersion=Ot,K.needsLights&&(qt.ambientLightColor.value=G.state.ambient,qt.lightProbe.value=G.state.probe,qt.directionalLights.value=G.state.directional,qt.directionalLightShadows.value=G.state.directionalShadow,qt.spotLights.value=G.state.spot,qt.spotLightShadows.value=G.state.spotShadow,qt.rectAreaLights.value=G.state.rectArea,qt.ltc_1.value=G.state.rectAreaLTC1,qt.ltc_2.value=G.state.rectAreaLTC2,qt.pointLights.value=G.state.point,qt.pointLightShadows.value=G.state.pointShadow,qt.hemisphereLights.value=G.state.hemi,qt.directionalShadowMap.value=G.state.directionalShadowMap,qt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,qt.spotShadowMap.value=G.state.spotShadowMap,qt.spotLightMatrix.value=G.state.spotLightMatrix,qt.spotLightMap.value=G.state.spotLightMap,qt.pointShadowMap.value=G.state.pointShadowMap,qt.pointShadowMatrix.value=G.state.pointShadowMatrix),K.currentProgram=Dt,K.uniformsList=null,Dt}function Es(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=Co.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function bs(T,V){const tt=M.get(T);tt.outputColorSpace=V.outputColorSpace,tt.batching=V.batching,tt.batchingColor=V.batchingColor,tt.instancing=V.instancing,tt.instancingColor=V.instancingColor,tt.instancingMorph=V.instancingMorph,tt.skinning=V.skinning,tt.morphTargets=V.morphTargets,tt.morphNormals=V.morphNormals,tt.morphColors=V.morphColors,tt.morphTargetsCount=V.morphTargetsCount,tt.numClippingPlanes=V.numClippingPlanes,tt.numIntersection=V.numClipIntersection,tt.vertexAlphas=V.vertexAlphas,tt.vertexTangents=V.vertexTangents,tt.toneMapping=V.toneMapping}function Xo(T,V,tt,K,G){V.isScene!==!0&&(V=pt),H.resetTextureUnits();const St=V.fog,Ot=K.isMeshStandardMaterial?V.environment:null,At=j===null?w.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Pr,Ft=(K.isMeshStandardMaterial?ot:et).get(K.envMap||Ot),_t=K.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,Dt=!!tt.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),qt=!!tt.morphAttributes.position,se=!!tt.morphAttributes.normal,pe=!!tt.morphAttributes.color;let Ae=Zn;K.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ae=w.toneMapping);const Ht=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,te=Ht!==void 0?Ht.length:0,Yt=M.get(K),_e=N.state.lights;if(Ut===!0&&(fe===!0||T!==it)){const Be=T===it&&K.id===st;zt.setState(K,T,Be)}let oe=!1;K.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==_e.state.version||Yt.outputColorSpace!==At||G.isBatchedMesh&&Yt.batching===!1||!G.isBatchedMesh&&Yt.batching===!0||G.isBatchedMesh&&Yt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Yt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Yt.instancing===!1||!G.isInstancedMesh&&Yt.instancing===!0||G.isSkinnedMesh&&Yt.skinning===!1||!G.isSkinnedMesh&&Yt.skinning===!0||G.isInstancedMesh&&Yt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Yt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Yt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Yt.instancingMorph===!1&&G.morphTexture!==null||Yt.envMap!==Ft||K.fog===!0&&Yt.fog!==St||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==zt.numPlanes||Yt.numIntersection!==zt.numIntersection)||Yt.vertexAlphas!==_t||Yt.vertexTangents!==Dt||Yt.morphTargets!==qt||Yt.morphNormals!==se||Yt.morphColors!==pe||Yt.toneMapping!==Ae||Yt.morphTargetsCount!==te)&&(oe=!0):(oe=!0,Yt.__version=K.version);let Qe=Yt.currentProgram;oe===!0&&(Qe=Li(K,V,G));let Tn=!1,De=!1,Ce=!1;const ge=Qe.getUniforms(),Ie=Yt.uniforms;if(vt.useProgram(Qe.program)&&(Tn=!0,De=!0,Ce=!0),K.id!==st&&(st=K.id,De=!0),Tn||it!==T){vt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ge.setValue(I,"projectionMatrix",T.projectionMatrix),ge.setValue(I,"viewMatrix",T.matrixWorldInverse);const Ne=ge.map.cameraPosition;Ne!==void 0&&Ne.setValue(I,ie.setFromMatrixPosition(T.matrixWorld)),Kt.logarithmicDepthBuffer&&ge.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ge.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),it!==T&&(it=T,De=!0,Ce=!0)}if(Yt.needsLights&&(_e.state.directionalShadowMap.length>0&&ge.setValue(I,"directionalShadowMap",_e.state.directionalShadowMap,H),_e.state.spotShadowMap.length>0&&ge.setValue(I,"spotShadowMap",_e.state.spotShadowMap,H),_e.state.pointShadowMap.length>0&&ge.setValue(I,"pointShadowMap",_e.state.pointShadowMap,H)),G.isSkinnedMesh){ge.setOptional(I,G,"bindMatrix"),ge.setOptional(I,G,"bindMatrixInverse");const Be=G.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),ge.setValue(I,"boneTexture",Be.boneTexture,H))}G.isBatchedMesh&&(ge.setOptional(I,G,"batchingTexture"),ge.setValue(I,"batchingTexture",G._matricesTexture,H),ge.setOptional(I,G,"batchingIdTexture"),ge.setValue(I,"batchingIdTexture",G._indirectTexture,H),ge.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&ge.setValue(I,"batchingColorTexture",G._colorsTexture,H));const He=tt.morphAttributes;if((He.position!==void 0||He.normal!==void 0||He.color!==void 0)&&ce.update(G,tt,Qe),(De||Yt.receiveShadow!==G.receiveShadow)&&(Yt.receiveShadow=G.receiveShadow,ge.setValue(I,"receiveShadow",G.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Ie.envMap.value=Ft,Ie.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&V.environment!==null&&(Ie.envMapIntensity.value=V.environmentIntensity),Ie.dfgLUT!==void 0&&(Ie.dfgLUT.value=Vx()),De&&(ge.setValue(I,"toneMappingExposure",w.toneMappingExposure),Yt.needsLights&&Zo(Ie,Ce),St&&K.fog===!0&&$t.refreshFogUniforms(Ie,St),$t.refreshMaterialUniforms(Ie,K,Vt,Xt,N.state.transmissionRenderTarget[T.id]),Co.upload(I,Es(Yt),Ie,H)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Co.upload(I,Es(Yt),Ie,H),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ge.setValue(I,"center",G.center),ge.setValue(I,"modelViewMatrix",G.modelViewMatrix),ge.setValue(I,"normalMatrix",G.normalMatrix),ge.setValue(I,"modelMatrix",G.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Be=K.uniformsGroups;for(let Ne=0,Di=Be.length;Ne<Di;Ne++){const wn=Be[Ne];mt.update(wn,Qe),mt.bind(wn,Qe)}}return Qe}function Zo(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function Ts(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(T,V,tt){const K=M.get(T);K.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),M.get(T.texture).__webglTexture=V,M.get(T.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:tt,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,V){const tt=M.get(T);tt.__webglFramebuffer=V,tt.__useDefaultFramebuffer=V===void 0};const qo=I.createFramebuffer();this.setRenderTarget=function(T,V=0,tt=0){j=T,F=V,Y=tt;let K=null,G=!1,St=!1;if(T){const At=M.get(T);if(At.__useDefaultFramebuffer!==void 0){vt.bindFramebuffer(I.FRAMEBUFFER,At.__webglFramebuffer),Q.copy(T.viewport),Z.copy(T.scissor),J=T.scissorTest,vt.viewport(Q),vt.scissor(Z),vt.setScissorTest(J),st=-1;return}else if(At.__webglFramebuffer===void 0)H.setupRenderTarget(T);else if(At.__hasExternalTextures)H.rebindTextures(T,M.get(T.texture).__webglTexture,M.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Dt=T.depthTexture;if(At.__boundDepthTexture!==Dt){if(Dt!==null&&M.has(Dt)&&(T.width!==Dt.image.width||T.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(T)}}const Ft=T.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(St=!0);const _t=M.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(_t[V])?K=_t[V][tt]:K=_t[V],G=!0):T.samples>0&&H.useMultisampledRTT(T)===!1?K=M.get(T).__webglMultisampledFramebuffer:Array.isArray(_t)?K=_t[tt]:K=_t,Q.copy(T.viewport),Z.copy(T.scissor),J=T.scissorTest}else Q.copy(q).multiplyScalar(Vt).floor(),Z.copy(at).multiplyScalar(Vt).floor(),J=Pt;if(tt!==0&&(K=qo),vt.bindFramebuffer(I.FRAMEBUFFER,K)&&vt.drawBuffers(T,K),vt.viewport(Q),vt.scissor(Z),vt.setScissorTest(J),G){const At=M.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+V,At.__webglTexture,tt)}else if(St){const At=V;for(let Ft=0;Ft<T.textures.length;Ft++){const _t=M.get(T.textures[Ft]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ft,_t.__webglTexture,tt,At)}}else if(T!==null&&tt!==0){const At=M.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,At.__webglTexture,tt)}st=-1},this.readRenderTargetPixels=function(T,V,tt,K,G,St,Ot,At=0){if(!(T&&T.isWebGLRenderTarget)){xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ot!==void 0&&(Ft=Ft[Ot]),Ft){vt.bindFramebuffer(I.FRAMEBUFFER,Ft);try{const _t=T.textures[At],Dt=_t.format,qt=_t.type;if(!Kt.textureFormatReadable(Dt)){xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(qt)){xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-K&&tt>=0&&tt<=T.height-G&&(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+At),I.readPixels(V,tt,K,G,gt.convert(Dt),gt.convert(qt),St))}finally{const _t=j!==null?M.get(j).__webglFramebuffer:null;vt.bindFramebuffer(I.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(T,V,tt,K,G,St,Ot,At=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ot!==void 0&&(Ft=Ft[Ot]),Ft)if(V>=0&&V<=T.width-K&&tt>=0&&tt<=T.height-G){vt.bindFramebuffer(I.FRAMEBUFFER,Ft);const _t=T.textures[At],Dt=_t.format,qt=_t.type;if(!Kt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,se),I.bufferData(I.PIXEL_PACK_BUFFER,St.byteLength,I.STREAM_READ),T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+At),I.readPixels(V,tt,K,G,gt.convert(Dt),gt.convert(qt),0);const pe=j!==null?M.get(j).__webglFramebuffer:null;vt.bindFramebuffer(I.FRAMEBUFFER,pe);const Ae=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await sp(I,Ae,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,se),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,St),I.deleteBuffer(se),I.deleteSync(Ae),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,V=null,tt=0){const K=Math.pow(2,-tt),G=Math.floor(T.image.width*K),St=Math.floor(T.image.height*K),Ot=V!==null?V.x:0,At=V!==null?V.y:0;H.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,tt,0,0,Ot,At,G,St),vt.unbindTexture()};const tr=I.createFramebuffer(),Yo=I.createFramebuffer();this.copyTextureToTexture=function(T,V,tt=null,K=null,G=0,St=null){St===null&&(G!==0?(fs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),St=G,G=0):St=0);let Ot,At,Ft,_t,Dt,qt,se,pe,Ae;const Ht=T.isCompressedTexture?T.mipmaps[St]:T.image;if(tt!==null)Ot=tt.max.x-tt.min.x,At=tt.max.y-tt.min.y,Ft=tt.isBox3?tt.max.z-tt.min.z:1,_t=tt.min.x,Dt=tt.min.y,qt=tt.isBox3?tt.min.z:0;else{const He=Math.pow(2,-G);Ot=Math.floor(Ht.width*He),At=Math.floor(Ht.height*He),T.isDataArrayTexture?Ft=Ht.depth:T.isData3DTexture?Ft=Math.floor(Ht.depth*He):Ft=1,_t=0,Dt=0,qt=0}K!==null?(se=K.x,pe=K.y,Ae=K.z):(se=0,pe=0,Ae=0);const te=gt.convert(V.format),Yt=gt.convert(V.type);let _e;V.isData3DTexture?(H.setTexture3D(V,0),_e=I.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(H.setTexture2DArray(V,0),_e=I.TEXTURE_2D_ARRAY):(H.setTexture2D(V,0),_e=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment);const oe=I.getParameter(I.UNPACK_ROW_LENGTH),Qe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Tn=I.getParameter(I.UNPACK_SKIP_PIXELS),De=I.getParameter(I.UNPACK_SKIP_ROWS),Ce=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ht.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ht.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_t),I.pixelStorei(I.UNPACK_SKIP_ROWS,Dt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,qt);const ge=T.isDataArrayTexture||T.isData3DTexture,Ie=V.isDataArrayTexture||V.isData3DTexture;if(T.isDepthTexture){const He=M.get(T),Be=M.get(V),Ne=M.get(He.__renderTarget),Di=M.get(Be.__renderTarget);vt.bindFramebuffer(I.READ_FRAMEBUFFER,Ne.__webglFramebuffer),vt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let wn=0;wn<Ft;wn++)ge&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,M.get(T).__webglTexture,G,qt+wn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,M.get(V).__webglTexture,St,Ae+wn)),I.blitFramebuffer(_t,Dt,Ot,At,se,pe,Ot,At,I.DEPTH_BUFFER_BIT,I.NEAREST);vt.bindFramebuffer(I.READ_FRAMEBUFFER,null),vt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||M.has(T)){const He=M.get(T),Be=M.get(V);vt.bindFramebuffer(I.READ_FRAMEBUFFER,tr),vt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Yo);for(let Ne=0;Ne<Ft;Ne++)ge?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,He.__webglTexture,G,qt+Ne):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,He.__webglTexture,G),Ie?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Be.__webglTexture,St,Ae+Ne):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Be.__webglTexture,St),G!==0?I.blitFramebuffer(_t,Dt,Ot,At,se,pe,Ot,At,I.COLOR_BUFFER_BIT,I.NEAREST):Ie?I.copyTexSubImage3D(_e,St,se,pe,Ae+Ne,_t,Dt,Ot,At):I.copyTexSubImage2D(_e,St,se,pe,_t,Dt,Ot,At);vt.bindFramebuffer(I.READ_FRAMEBUFFER,null),vt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ie?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(_e,St,se,pe,Ae,Ot,At,Ft,te,Yt,Ht.data):V.isCompressedArrayTexture?I.compressedTexSubImage3D(_e,St,se,pe,Ae,Ot,At,Ft,te,Ht.data):I.texSubImage3D(_e,St,se,pe,Ae,Ot,At,Ft,te,Yt,Ht):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,St,se,pe,Ot,At,te,Yt,Ht.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,St,se,pe,Ht.width,Ht.height,te,Ht.data):I.texSubImage2D(I.TEXTURE_2D,St,se,pe,Ot,At,te,Yt,Ht);I.pixelStorei(I.UNPACK_ROW_LENGTH,oe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Tn),I.pixelStorei(I.UNPACK_SKIP_ROWS,De),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ce),St===0&&V.generateMipmaps&&I.generateMipmap(_e),vt.unbindTexture()},this.initRenderTarget=function(T){M.get(T).__webglFramebuffer===void 0&&H.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?H.setTextureCube(T,0):T.isData3DTexture?H.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?H.setTexture2DArray(T,0):H.setTexture2D(T,0),vt.unbindTexture()},this.resetState=function(){F=0,Y=0,j=null,vt.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Se._getDrawingBufferColorSpace(t),e.unpackColorSpace=Se._getUnpackColorSpace()}}class Wx{constructor({tractCode:t,shapes:e,mapGroup:i}){this.tractCode=t,this.shapes=e,this.mapGroup=i,this.currentZ=0,this._renderOrder=1,this.allMeshes=[],this.allLines=[]}_extrude(t,e,i){const s=[],a=[];return this.shapes.forEach(c=>{const h=new Mc(c,{depth:t,bevelEnabled:!1}),u=new En(h,e);u.position.z=this.currentZ,u.renderOrder=this._renderOrder,u.userData.tractCode=this.tractCode,this.mapGroup.add(u),s.push(u),this.allMeshes.push(u);const d=new jp(new Qp(h),i);d.position.z=this.currentZ,d.renderOrder=this._renderOrder+1,this.mapGroup.add(d),a.push(d),this.allLines.push(d)}),this._renderOrder+=2,{meshes:s,lines:a}}buildBase(t,e,i){const s=this._extrude(t,e,i);return this.currentZ=t,s}addLayer(t,e,i){const s=this._extrude(t,e,i);return this.currentZ+=t,s}setOpacity(t){const e=t<1,i=t===1;this.allMeshes.forEach(s=>{s.userData.layerHidden||(s.userData.ownsMaterial||(s.material=s.material.clone(),s.userData.ownsMaterial=!0),s.material.transparent=e,s.material.opacity=t)}),this.allLines.forEach(s=>{s.userData.layerHidden||(s.visible=i)})}}function Xx(r,t,e){return!Number.isFinite(r)||e<=t?0:(r-t)/(e-t)}class Sf{constructor({name:t,color:e,edgeColor:i,minDepth:s,maxDepth:a,fetchData:c}){this.name=t,this.color=e,this.edgeColor=i??e,this.minDepth=s,this.maxDepth=a,this.fetchData=c,this.depthByTract=new Map,this.rawByTract=new Map,this.meshes=[],this.lines=[],this.visible=!0,this.tractEntries=new Map,this.material=new pf({color:this.color,side:Sn,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),this.lineMaterial=new xc({color:this.edgeColor})}async load(){const t=await this.fetchData(),e=[...t.values()].filter(Number.isFinite);if(!e.length)return;const i=Math.min(...e),s=Math.max(...e);t.forEach((a,c)=>{this.rawByTract.set(c,a);const h=Xx(a,i,s);this.depthByTract.set(c,this.minDepth+h*(this.maxDepth-this.minDepth))})}build(t){t.forEach((e,i)=>{const s=this.depthByTract.get(i);if(s==null)return;const{meshes:a,lines:c}=e.addLayer(s,this.material,this.lineMaterial);this.meshes.push(...a),this.lines.push(...c),this.tractEntries.set(i,{meshes:a,lines:c,depth:s})})}setVisible(t){this.visible=t,this.meshes.forEach(e=>{e.visible=t,e.userData.layerHidden=!t}),this.lines.forEach(e=>{e.visible=t,e.userData.layerHidden=!t})}}async function Zx(){const t=await(await fetch("data/shade/tree_data.geojson")).json(),e=new Map;t.features.forEach(s=>{const a=s.properties??{},c=String(a.GEOID??""),h=Number(a._bld1200);if(!Number.isFinite(h)||c.length<11||!c.startsWith("06037"))return;const u=c.slice(5,11),d=e.get(u)??{sum:0,count:0};d.sum+=h,d.count+=1,e.set(u,d)});const i=new Map;return e.forEach(({sum:s,count:a},c)=>{i.set(c,s/a)}),i}const qx=new Sf({name:"Tree Shade",color:12774246,edgeColor:4217625,minDepth:.02,maxDepth:.15,fetchData:Zx});async function Yx(){const t=await(await fetch("data/heat_island/UHII_latlon_CA.csv")).text(),[e,...i]=t.trim().split(`
`),s=e.split(",").map(u=>u.trim()),a=s.indexOf("FIPS"),c=s.indexOf("DegHourDay"),h=new Map;return i.forEach(u=>{const d=u.split(",").map(S=>S.trim()),p=d[a],m=Number(d[c]);if(!p||!Number.isFinite(m))return;const g=p.padStart(11,"0");if(!g.startsWith("06037"))return;const x=g.slice(5,11);h.set(x,m)}),h}const Jx=new Sf({name:"Urban Heat Island",color:16750331,edgeColor:13394120,minDepth:.02,maxDepth:.15,fetchData:Yx}),Mf=.05,_o={minLon:-118.685,maxLon:-118.155,minLat:33.704,maxLat:34.337};function Ka(r){return r?.geometry?.coordinates?r.geometry.type==="Polygon"?[r.geometry.coordinates[0]]:r.geometry.type==="MultiPolygon"?r.geometry.coordinates.map(t=>t[0]):[]:[]}function Kx(r){if(!r?.length)return null;let t=0,e=0;return r.forEach(([i,s])=>{t+=i,e+=s}),{lon:t/r.length,lat:e/r.length}}function jx(r,t,e,i){const s=new Bo;return r.forEach(([a,c],h)=>{const u=(a-t)*i,d=(c-e)*i;h===0?s.moveTo(u,d):s.lineTo(u,d)}),s}async function $x(r){const i=(await(await fetch("data/2020_LACounty_Census_Tracts.geojson")).json()).features.filter(E=>{const[y]=Ka(E),v=Kx(y);return v?v.lon>=_o.minLon&&v.lon<=_o.maxLon&&v.lat>=_o.minLat&&v.lat<=_o.maxLat:!1});let s=1/0,a=-1/0,c=1/0,h=-1/0;i.forEach(E=>{Ka(E).forEach(y=>{y.forEach(([v,D])=>{v<s&&(s=v),v>a&&(a=v),D<c&&(c=D),D>h&&(h=D)})})});const u=2/Math.max(a-s,h-c),d=(s+a)/2,p=(c+h)/2,m=new pf({color:13421772,side:Sn,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),g=new xc({color:0,transparent:!0,opacity:.2}),x=new Map;i.forEach(E=>{const y=String(E.properties?.CT20??""),v=Ka(E).map(C=>jx(C,d,p,u)),D=new Wx({tractCode:y,shapes:v,mapGroup:r});D.buildBase(Mf,m,g),x.set(y,D)});const S=[qx,Jx];for(const E of S)await E.load(),E.build(x);return console.log(`Loaded ${x.size} tracts, ${S.length} layer(s)`),{tracts:x,layers:S,laFeatures:i,geoBounds:{minX:s,maxX:a,minY:c,maxY:h},geoScale:u,geoOffset:{offsetX:d,offsetY:p}}}const Gi=document.getElementById("tract-tooltip");function Qx(r){return"#"+r.toString(16).padStart(6,"0")}function ty(r,t,e,i){const s=t.filter(p=>p.visible&&p.rawByTract.has(r));let a=`<div class="tooltip-title">Tract ${r}</div>`;s.length===0?a+='<div class="tooltip-row"><span class="tooltip-label">No data for this tract</span></div>':s.forEach(p=>{const m=p.rawByTract.get(r);a+=`
                <div class="tooltip-row">
                    <span class="tooltip-swatch" style="background:${Qx(p.color)}"></span>
                    <span class="tooltip-label">${p.name}</span>
                    <span class="tooltip-value">${m.toFixed(2)}</span>
                </div>`}),Gi.innerHTML=a,Gi.style.display="block";const c=14,h=220;let u=e+c,d=i+c;u+h>window.innerWidth&&(u=e-h-c),d+Gi.offsetHeight>window.innerHeight&&(d=i-Gi.offsetHeight-c),Gi.style.left=u+"px",Gi.style.top=d+"px"}function ey(){Gi.style.display="none"}function ny(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var is={exports:{}};var iy=is.exports,Mu;function ry(){return Mu||(Mu=1,(function(r,t){(function(e,i){i(t)})(iy,(function(e){var i="1.9.4";function s(n){var o,l,f,_;for(l=1,f=arguments.length;l<f;l++){_=arguments[l];for(o in _)n[o]=_[o]}return n}var a=Object.create||(function(){function n(){}return function(o){return n.prototype=o,new n}})();function c(n,o){var l=Array.prototype.slice;if(n.bind)return n.bind.apply(n,l.call(arguments,1));var f=l.call(arguments,2);return function(){return n.apply(o,f.length?f.concat(l.call(arguments)):arguments)}}var h=0;function u(n){return"_leaflet_id"in n||(n._leaflet_id=++h),n._leaflet_id}function d(n,o,l){var f,_,b,U;return U=function(){f=!1,_&&(b.apply(l,_),_=!1)},b=function(){f?_=arguments:(n.apply(l,arguments),setTimeout(U,o),f=!0)},b}function p(n,o,l){var f=o[1],_=o[0],b=f-_;return n===f&&l?n:((n-_)%b+b)%b+_}function m(){return!1}function g(n,o){if(o===!1)return n;var l=Math.pow(10,o===void 0?6:o);return Math.round(n*l)/l}function x(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function S(n){return x(n).split(/\s+/)}function E(n,o){Object.prototype.hasOwnProperty.call(n,"options")||(n.options=n.options?a(n.options):{});for(var l in o)n.options[l]=o[l];return n.options}function y(n,o,l){var f=[];for(var _ in n)f.push(encodeURIComponent(l?_.toUpperCase():_)+"="+encodeURIComponent(n[_]));return(!o||o.indexOf("?")===-1?"?":"&")+f.join("&")}var v=/\{ *([\w_ -]+) *\}/g;function D(n,o){return n.replace(v,function(l,f){var _=o[f];if(_===void 0)throw new Error("No value provided for variable "+l);return typeof _=="function"&&(_=_(o)),_})}var C=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"};function R(n,o){for(var l=0;l<n.length;l++)if(n[l]===o)return l;return-1}var N="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function O(n){return window["webkit"+n]||window["moz"+n]||window["ms"+n]}var B=0;function W(n){var o=+new Date,l=Math.max(0,16-(o-B));return B=o+l,window.setTimeout(n,l)}var w=window.requestAnimationFrame||O("RequestAnimationFrame")||W,A=window.cancelAnimationFrame||O("CancelAnimationFrame")||O("CancelRequestAnimationFrame")||function(n){window.clearTimeout(n)};function F(n,o,l){if(l&&w===W)n.call(o);else return w.call(window,c(n,o))}function Y(n){n&&A.call(window,n)}var j={__proto__:null,extend:s,create:a,bind:c,get lastId(){return h},stamp:u,throttle:d,wrapNum:p,falseFn:m,formatNum:g,trim:x,splitWords:S,setOptions:E,getParamString:y,template:D,isArray:C,indexOf:R,emptyImageUrl:N,requestFn:w,cancelFn:A,requestAnimFrame:F,cancelAnimFrame:Y};function st(){}st.extend=function(n){var o=function(){E(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},l=o.__super__=this.prototype,f=a(l);f.constructor=o,o.prototype=f;for(var _ in this)Object.prototype.hasOwnProperty.call(this,_)&&_!=="prototype"&&_!=="__super__"&&(o[_]=this[_]);return n.statics&&s(o,n.statics),n.includes&&(it(n.includes),s.apply(null,[f].concat(n.includes))),s(f,n),delete f.statics,delete f.includes,f.options&&(f.options=l.options?a(l.options):{},s(f.options,n.options)),f._initHooks=[],f.callInitHooks=function(){if(!this._initHooksCalled){l.callInitHooks&&l.callInitHooks.call(this),this._initHooksCalled=!0;for(var b=0,U=f._initHooks.length;b<U;b++)f._initHooks[b].call(this)}},o},st.include=function(n){var o=this.prototype.options;return s(this.prototype,n),n.options&&(this.prototype.options=o,this.mergeOptions(n.options)),this},st.mergeOptions=function(n){return s(this.prototype.options,n),this},st.addInitHook=function(n){var o=Array.prototype.slice.call(arguments,1),l=typeof n=="function"?n:function(){this[n].apply(this,o)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(l),this};function it(n){if(!(typeof L>"u"||!L||!L.Mixin)){n=C(n)?n:[n];for(var o=0;o<n.length;o++)n[o]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var Q={on:function(n,o,l){if(typeof n=="object")for(var f in n)this._on(f,n[f],o);else{n=S(n);for(var _=0,b=n.length;_<b;_++)this._on(n[_],o,l)}return this},off:function(n,o,l){if(!arguments.length)delete this._events;else if(typeof n=="object")for(var f in n)this._off(f,n[f],o);else{n=S(n);for(var _=arguments.length===1,b=0,U=n.length;b<U;b++)_?this._off(n[b]):this._off(n[b],o,l)}return this},_on:function(n,o,l,f){if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}if(this._listens(n,o,l)===!1){l===this&&(l=void 0);var _={fn:o,ctx:l};f&&(_.once=!0),this._events=this._events||{},this._events[n]=this._events[n]||[],this._events[n].push(_)}},_off:function(n,o,l){var f,_,b;if(this._events&&(f=this._events[n],!!f)){if(arguments.length===1){if(this._firingCount)for(_=0,b=f.length;_<b;_++)f[_].fn=m;delete this._events[n];return}if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}var U=this._listens(n,o,l);if(U!==!1){var X=f[U];this._firingCount&&(X.fn=m,this._events[n]=f=f.slice()),f.splice(U,1)}}},fire:function(n,o,l){if(!this.listens(n,l))return this;var f=s({},o,{type:n,target:this,sourceTarget:o&&o.sourceTarget||this});if(this._events){var _=this._events[n];if(_){this._firingCount=this._firingCount+1||1;for(var b=0,U=_.length;b<U;b++){var X=_[b],$=X.fn;X.once&&this.off(n,$,X.ctx),$.call(X.ctx||this,f)}this._firingCount--}}return l&&this._propagateEvent(f),this},listens:function(n,o,l,f){typeof n!="string"&&console.warn('"string" type argument expected');var _=o;typeof o!="function"&&(f=!!o,_=void 0,l=void 0);var b=this._events&&this._events[n];if(b&&b.length&&this._listens(n,_,l)!==!1)return!0;if(f){for(var U in this._eventParents)if(this._eventParents[U].listens(n,o,l,f))return!0}return!1},_listens:function(n,o,l){if(!this._events)return!1;var f=this._events[n]||[];if(!o)return!!f.length;l===this&&(l=void 0);for(var _=0,b=f.length;_<b;_++)if(f[_].fn===o&&f[_].ctx===l)return _;return!1},once:function(n,o,l){if(typeof n=="object")for(var f in n)this._on(f,n[f],o,!0);else{n=S(n);for(var _=0,b=n.length;_<b;_++)this._on(n[_],o,l,!0)}return this},addEventParent:function(n){return this._eventParents=this._eventParents||{},this._eventParents[u(n)]=n,this},removeEventParent:function(n){return this._eventParents&&delete this._eventParents[u(n)],this},_propagateEvent:function(n){for(var o in this._eventParents)this._eventParents[o].fire(n.type,s({layer:n.target,propagatedFrom:n.target},n),!0)}};Q.addEventListener=Q.on,Q.removeEventListener=Q.clearAllEventListeners=Q.off,Q.addOneTimeEventListener=Q.once,Q.fireEvent=Q.fire,Q.hasEventListeners=Q.listens;var Z=st.extend(Q);function J(n,o,l){this.x=l?Math.round(n):n,this.y=l?Math.round(o):o}var Tt=Math.trunc||function(n){return n>0?Math.floor(n):Math.ceil(n)};J.prototype={clone:function(){return new J(this.x,this.y)},add:function(n){return this.clone()._add(rt(n))},_add:function(n){return this.x+=n.x,this.y+=n.y,this},subtract:function(n){return this.clone()._subtract(rt(n))},_subtract:function(n){return this.x-=n.x,this.y-=n.y,this},divideBy:function(n){return this.clone()._divideBy(n)},_divideBy:function(n){return this.x/=n,this.y/=n,this},multiplyBy:function(n){return this.clone()._multiplyBy(n)},_multiplyBy:function(n){return this.x*=n,this.y*=n,this},scaleBy:function(n){return new J(this.x*n.x,this.y*n.y)},unscaleBy:function(n){return new J(this.x/n.x,this.y/n.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=Tt(this.x),this.y=Tt(this.y),this},distanceTo:function(n){n=rt(n);var o=n.x-this.x,l=n.y-this.y;return Math.sqrt(o*o+l*l)},equals:function(n){return n=rt(n),n.x===this.x&&n.y===this.y},contains:function(n){return n=rt(n),Math.abs(n.x)<=Math.abs(this.x)&&Math.abs(n.y)<=Math.abs(this.y)},toString:function(){return"Point("+g(this.x)+", "+g(this.y)+")"}};function rt(n,o,l){return n instanceof J?n:C(n)?new J(n[0],n[1]):n==null?n:typeof n=="object"&&"x"in n&&"y"in n?new J(n.x,n.y):new J(n,o,l)}function ft(n,o){if(n)for(var l=o?[n,o]:n,f=0,_=l.length;f<_;f++)this.extend(l[f])}ft.prototype={extend:function(n){var o,l;if(!n)return this;if(n instanceof J||typeof n[0]=="number"||"x"in n)o=l=rt(n);else if(n=Xt(n),o=n.min,l=n.max,!o||!l)return this;return!this.min&&!this.max?(this.min=o.clone(),this.max=l.clone()):(this.min.x=Math.min(o.x,this.min.x),this.max.x=Math.max(l.x,this.max.x),this.min.y=Math.min(o.y,this.min.y),this.max.y=Math.max(l.y,this.max.y)),this},getCenter:function(n){return rt((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,n)},getBottomLeft:function(){return rt(this.min.x,this.max.y)},getTopRight:function(){return rt(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(n){var o,l;return typeof n[0]=="number"||n instanceof J?n=rt(n):n=Xt(n),n instanceof ft?(o=n.min,l=n.max):o=l=n,o.x>=this.min.x&&l.x<=this.max.x&&o.y>=this.min.y&&l.y<=this.max.y},intersects:function(n){n=Xt(n);var o=this.min,l=this.max,f=n.min,_=n.max,b=_.x>=o.x&&f.x<=l.x,U=_.y>=o.y&&f.y<=l.y;return b&&U},overlaps:function(n){n=Xt(n);var o=this.min,l=this.max,f=n.min,_=n.max,b=_.x>o.x&&f.x<l.x,U=_.y>o.y&&f.y<l.y;return b&&U},isValid:function(){return!!(this.min&&this.max)},pad:function(n){var o=this.min,l=this.max,f=Math.abs(o.x-l.x)*n,_=Math.abs(o.y-l.y)*n;return Xt(rt(o.x-f,o.y-_),rt(l.x+f,l.y+_))},equals:function(n){return n?(n=Xt(n),this.min.equals(n.getTopLeft())&&this.max.equals(n.getBottomRight())):!1}};function Xt(n,o){return!n||n instanceof ft?n:new ft(n,o)}function Vt(n,o){if(n)for(var l=o?[n,o]:n,f=0,_=l.length;f<_;f++)this.extend(l[f])}Vt.prototype={extend:function(n){var o=this._southWest,l=this._northEast,f,_;if(n instanceof Zt)f=n,_=n;else if(n instanceof Vt){if(f=n._southWest,_=n._northEast,!f||!_)return this}else return n?this.extend(q(n)||Qt(n)):this;return!o&&!l?(this._southWest=new Zt(f.lat,f.lng),this._northEast=new Zt(_.lat,_.lng)):(o.lat=Math.min(f.lat,o.lat),o.lng=Math.min(f.lng,o.lng),l.lat=Math.max(_.lat,l.lat),l.lng=Math.max(_.lng,l.lng)),this},pad:function(n){var o=this._southWest,l=this._northEast,f=Math.abs(o.lat-l.lat)*n,_=Math.abs(o.lng-l.lng)*n;return new Vt(new Zt(o.lat-f,o.lng-_),new Zt(l.lat+f,l.lng+_))},getCenter:function(){return new Zt((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new Zt(this.getNorth(),this.getWest())},getSouthEast:function(){return new Zt(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(n){typeof n[0]=="number"||n instanceof Zt||"lat"in n?n=q(n):n=Qt(n);var o=this._southWest,l=this._northEast,f,_;return n instanceof Vt?(f=n.getSouthWest(),_=n.getNorthEast()):f=_=n,f.lat>=o.lat&&_.lat<=l.lat&&f.lng>=o.lng&&_.lng<=l.lng},intersects:function(n){n=Qt(n);var o=this._southWest,l=this._northEast,f=n.getSouthWest(),_=n.getNorthEast(),b=_.lat>=o.lat&&f.lat<=l.lat,U=_.lng>=o.lng&&f.lng<=l.lng;return b&&U},overlaps:function(n){n=Qt(n);var o=this._southWest,l=this._northEast,f=n.getSouthWest(),_=n.getNorthEast(),b=_.lat>o.lat&&f.lat<l.lat,U=_.lng>o.lng&&f.lng<l.lng;return b&&U},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(n,o){return n?(n=Qt(n),this._southWest.equals(n.getSouthWest(),o)&&this._northEast.equals(n.getNorthEast(),o)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function Qt(n,o){return n instanceof Vt?n:new Vt(n,o)}function Zt(n,o,l){if(isNaN(n)||isNaN(o))throw new Error("Invalid LatLng object: ("+n+", "+o+")");this.lat=+n,this.lng=+o,l!==void 0&&(this.alt=+l)}Zt.prototype={equals:function(n,o){if(!n)return!1;n=q(n);var l=Math.max(Math.abs(this.lat-n.lat),Math.abs(this.lng-n.lng));return l<=(o===void 0?1e-9:o)},toString:function(n){return"LatLng("+g(this.lat,n)+", "+g(this.lng,n)+")"},distanceTo:function(n){return Pt.distance(this,q(n))},wrap:function(){return Pt.wrapLatLng(this)},toBounds:function(n){var o=180*n/40075017,l=o/Math.cos(Math.PI/180*this.lat);return Qt([this.lat-o,this.lng-l],[this.lat+o,this.lng+l])},clone:function(){return new Zt(this.lat,this.lng,this.alt)}};function q(n,o,l){return n instanceof Zt?n:C(n)&&typeof n[0]!="object"?n.length===3?new Zt(n[0],n[1],n[2]):n.length===2?new Zt(n[0],n[1]):null:n==null?n:typeof n=="object"&&"lat"in n?new Zt(n.lat,"lng"in n?n.lng:n.lon,n.alt):o===void 0?null:new Zt(n,o,l)}var at={latLngToPoint:function(n,o){var l=this.projection.project(n),f=this.scale(o);return this.transformation._transform(l,f)},pointToLatLng:function(n,o){var l=this.scale(o),f=this.transformation.untransform(n,l);return this.projection.unproject(f)},project:function(n){return this.projection.project(n)},unproject:function(n){return this.projection.unproject(n)},scale:function(n){return 256*Math.pow(2,n)},zoom:function(n){return Math.log(n/256)/Math.LN2},getProjectedBounds:function(n){if(this.infinite)return null;var o=this.projection.bounds,l=this.scale(n),f=this.transformation.transform(o.min,l),_=this.transformation.transform(o.max,l);return new ft(f,_)},infinite:!1,wrapLatLng:function(n){var o=this.wrapLng?p(n.lng,this.wrapLng,!0):n.lng,l=this.wrapLat?p(n.lat,this.wrapLat,!0):n.lat,f=n.alt;return new Zt(l,o,f)},wrapLatLngBounds:function(n){var o=n.getCenter(),l=this.wrapLatLng(o),f=o.lat-l.lat,_=o.lng-l.lng;if(f===0&&_===0)return n;var b=n.getSouthWest(),U=n.getNorthEast(),X=new Zt(b.lat-f,b.lng-_),$=new Zt(U.lat-f,U.lng-_);return new Vt(X,$)}},Pt=s({},at,{wrapLng:[-180,180],R:6371e3,distance:function(n,o){var l=Math.PI/180,f=n.lat*l,_=o.lat*l,b=Math.sin((o.lat-n.lat)*l/2),U=Math.sin((o.lng-n.lng)*l/2),X=b*b+Math.cos(f)*Math.cos(_)*U*U,$=2*Math.atan2(Math.sqrt(X),Math.sqrt(1-X));return this.R*$}}),jt=6378137,Ut={R:jt,MAX_LATITUDE:85.0511287798,project:function(n){var o=Math.PI/180,l=this.MAX_LATITUDE,f=Math.max(Math.min(l,n.lat),-l),_=Math.sin(f*o);return new J(this.R*n.lng*o,this.R*Math.log((1+_)/(1-_))/2)},unproject:function(n){var o=180/Math.PI;return new Zt((2*Math.atan(Math.exp(n.y/this.R))-Math.PI/2)*o,n.x*o/this.R)},bounds:(function(){var n=jt*Math.PI;return new ft([-n,-n],[n,n])})()};function fe(n,o,l,f){if(C(n)){this._a=n[0],this._b=n[1],this._c=n[2],this._d=n[3];return}this._a=n,this._b=o,this._c=l,this._d=f}fe.prototype={transform:function(n,o){return this._transform(n.clone(),o)},_transform:function(n,o){return o=o||1,n.x=o*(this._a*n.x+this._b),n.y=o*(this._c*n.y+this._d),n},untransform:function(n,o){return o=o||1,new J((n.x/o-this._b)/this._a,(n.y/o-this._d)/this._c)}};function me(n,o,l,f){return new fe(n,o,l,f)}var ie=s({},Pt,{code:"EPSG:3857",projection:Ut,transformation:(function(){var n=.5/(Math.PI*Ut.R);return me(n,.5,-n,.5)})()}),ct=s({},ie,{code:"EPSG:900913"});function pt(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function ht(n,o){var l="",f,_,b,U,X,$;for(f=0,b=n.length;f<b;f++){for(X=n[f],_=0,U=X.length;_<U;_++)$=X[_],l+=(_?"L":"M")+$.x+" "+$.y;l+=o?Wt.svg?"z":"x":""}return l||"M0 0"}var wt=document.documentElement.style,I="ActiveXObject"in window,Jt=I&&!document.addEventListener,Lt="msLaunchUri"in navigator&&!("documentMode"in document),Kt=mn("webkit"),vt=mn("android"),P=mn("android 2")||mn("android 3"),M=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),H=vt&&mn("Google")&&M<537&&!("AudioNode"in window),et=!!window.opera,ot=!Lt&&mn("chrome"),nt=mn("gecko")&&!Kt&&!et&&!I,kt=!ot&&mn("safari"),yt=mn("phantom"),Bt="OTransition"in wt,$t=navigator.platform.indexOf("Win")===0,dt=I&&"transition"in wt,Mt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!P,zt="MozPerspective"in wt,Gt=!window.L_DISABLE_3D&&(dt||Mt||zt)&&!Bt&&!yt,xt=typeof orientation<"u"||mn("mobile"),ce=xt&&Kt,k=xt&&Mt,Rt=!window.PointerEvent&&window.MSPointerEvent,gt=!!(window.PointerEvent||Rt),It="ontouchstart"in window||!!window.TouchEvent,mt=!window.L_NO_TOUCH&&(It||gt),lt=xt&&et,Et=xt&&nt,re=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Te=(function(){var n=!1;try{var o=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("testPassiveEventSupport",m,o),window.removeEventListener("testPassiveEventSupport",m,o)}catch{}return n})(),Me=(function(){return!!document.createElement("canvas").getContext})(),an=!!(document.createElementNS&&pt("svg").createSVGRect),bn=!!an&&(function(){var n=document.createElement("div");return n.innerHTML="<svg/>",(n.firstChild&&n.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),Wo=!an&&(function(){try{var n=document.createElement("div");n.innerHTML='<v:shape adj="1"/>';var o=n.firstChild;return o.style.behavior="url(#default#VML)",o&&typeof o.adj=="object"}catch{return!1}})(),Ms=navigator.platform.indexOf("Mac")===0,Or=navigator.platform.indexOf("Linux")===0;function mn(n){return navigator.userAgent.toLowerCase().indexOf(n)>=0}var Wt={ie:I,ielt9:Jt,edge:Lt,webkit:Kt,android:vt,android23:P,androidStock:H,opera:et,chrome:ot,gecko:nt,safari:kt,phantom:yt,opera12:Bt,win:$t,ie3d:dt,webkit3d:Mt,gecko3d:zt,any3d:Gt,mobile:xt,mobileWebkit:ce,mobileWebkit3d:k,msPointer:Rt,pointer:gt,touch:mt,touchNative:It,mobileOpera:lt,mobileGecko:Et,retina:re,passiveEvents:Te,canvas:Me,svg:an,vml:Wo,inlineSvg:bn,mac:Ms,linux:Or},Fr=Wt.msPointer?"MSPointerDown":"pointerdown",On=Wt.msPointer?"MSPointerMove":"pointermove",$i=Wt.msPointer?"MSPointerUp":"pointerup",Br=Wt.msPointer?"MSPointerCancel":"pointercancel",Qi={touchstart:Fr,touchmove:On,touchend:$i,touchcancel:Br},Ri={touchstart:Yo,touchmove:tr,touchend:tr,touchcancel:tr},Qn={},Li=!1;function Es(n,o,l){return o==="touchstart"&&qo(),Ri[o]?(l=Ri[o].bind(this,l),n.addEventListener(Qi[o],l,!1),l):(console.warn("wrong event specified:",o),m)}function bs(n,o,l){if(!Qi[o]){console.warn("wrong event specified:",o);return}n.removeEventListener(Qi[o],l,!1)}function Xo(n){Qn[n.pointerId]=n}function Zo(n){Qn[n.pointerId]&&(Qn[n.pointerId]=n)}function Ts(n){delete Qn[n.pointerId]}function qo(){Li||(document.addEventListener(Fr,Xo,!0),document.addEventListener(On,Zo,!0),document.addEventListener($i,Ts,!0),document.addEventListener(Br,Ts,!0),Li=!0)}function tr(n,o){if(o.pointerType!==(o.MSPOINTER_TYPE_MOUSE||"mouse")){o.touches=[];for(var l in Qn)o.touches.push(Qn[l]);o.changedTouches=[o],n(o)}}function Yo(n,o){o.MSPOINTER_TYPE_TOUCH&&o.pointerType===o.MSPOINTER_TYPE_TOUCH&&We(o),tr(n,o)}function T(n){var o={},l,f;for(f in n)l=n[f],o[f]=l&&l.bind?l.bind(n):l;return n=o,o.type="dblclick",o.detail=2,o.isTrusted=!1,o._simulated=!0,o}var V=200;function tt(n,o){n.addEventListener("dblclick",o);var l=0,f;function _(b){if(b.detail!==1){f=b.detail;return}if(!(b.pointerType==="mouse"||b.sourceCapabilities&&!b.sourceCapabilities.firesTouchEvents)){var U=Pc(b);if(!(U.some(function($){return $ instanceof HTMLLabelElement&&$.attributes.for})&&!U.some(function($){return $ instanceof HTMLInputElement||$ instanceof HTMLSelectElement}))){var X=Date.now();X-l<=V?(f++,f===2&&o(T(b))):f=1,l=X}}}return n.addEventListener("click",_),{dblclick:o,simDblclick:_}}function K(n,o){n.removeEventListener("dblclick",o.dblclick),n.removeEventListener("click",o.simDblclick)}var G=Tn(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),St=Tn(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Ot=St==="webkitTransition"||St==="OTransition"?St+"End":"transitionend";function At(n){return typeof n=="string"?document.getElementById(n):n}function Ft(n,o){var l=n.style[o]||n.currentStyle&&n.currentStyle[o];if((!l||l==="auto")&&document.defaultView){var f=document.defaultView.getComputedStyle(n,null);l=f?f[o]:null}return l==="auto"?null:l}function _t(n,o,l){var f=document.createElement(n);return f.className=o||"",l&&l.appendChild(f),f}function Dt(n){var o=n.parentNode;o&&o.removeChild(n)}function qt(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function se(n){var o=n.parentNode;o&&o.lastChild!==n&&o.appendChild(n)}function pe(n){var o=n.parentNode;o&&o.firstChild!==n&&o.insertBefore(n,o.firstChild)}function Ae(n,o){if(n.classList!==void 0)return n.classList.contains(o);var l=_e(n);return l.length>0&&new RegExp("(^|\\s)"+o+"(\\s|$)").test(l)}function Ht(n,o){if(n.classList!==void 0)for(var l=S(o),f=0,_=l.length;f<_;f++)n.classList.add(l[f]);else if(!Ae(n,o)){var b=_e(n);Yt(n,(b?b+" ":"")+o)}}function te(n,o){n.classList!==void 0?n.classList.remove(o):Yt(n,x((" "+_e(n)+" ").replace(" "+o+" "," ")))}function Yt(n,o){n.className.baseVal===void 0?n.className=o:n.className.baseVal=o}function _e(n){return n.correspondingElement&&(n=n.correspondingElement),n.className.baseVal===void 0?n.className:n.className.baseVal}function oe(n,o){"opacity"in n.style?n.style.opacity=o:"filter"in n.style&&Qe(n,o)}function Qe(n,o){var l=!1,f="DXImageTransform.Microsoft.Alpha";try{l=n.filters.item(f)}catch{if(o===1)return}o=Math.round(o*100),l?(l.Enabled=o!==100,l.Opacity=o):n.style.filter+=" progid:"+f+"(opacity="+o+")"}function Tn(n){for(var o=document.documentElement.style,l=0;l<n.length;l++)if(n[l]in o)return n[l];return!1}function De(n,o,l){var f=o||new J(0,0);n.style[G]=(Wt.ie3d?"translate("+f.x+"px,"+f.y+"px)":"translate3d("+f.x+"px,"+f.y+"px,0)")+(l?" scale("+l+")":"")}function Ce(n,o){n._leaflet_pos=o,Wt.any3d?De(n,o):(n.style.left=o.x+"px",n.style.top=o.y+"px")}function ge(n){return n._leaflet_pos||new J(0,0)}var Ie,He,Be;if("onselectstart"in document)Ie=function(){le(window,"selectstart",We)},He=function(){Pe(window,"selectstart",We)};else{var Ne=Tn(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Ie=function(){if(Ne){var n=document.documentElement.style;Be=n[Ne],n[Ne]="none"}},He=function(){Ne&&(document.documentElement.style[Ne]=Be,Be=void 0)}}function Di(){le(window,"dragstart",We)}function wn(){Pe(window,"dragstart",We)}var ws,Jo;function Ko(n){for(;n.tabIndex===-1;)n=n.parentNode;n.style&&(As(),ws=n,Jo=n.style.outlineStyle,n.style.outlineStyle="none",le(window,"keydown",As))}function As(){ws&&(ws.style.outlineStyle=Jo,ws=void 0,Jo=void 0,Pe(window,"keydown",As))}function Ac(n){do n=n.parentNode;while((!n.offsetWidth||!n.offsetHeight)&&n!==document.body);return n}function jo(n){var o=n.getBoundingClientRect();return{x:o.width/n.offsetWidth||1,y:o.height/n.offsetHeight||1,boundingClientRect:o}}var Df={__proto__:null,TRANSFORM:G,TRANSITION:St,TRANSITION_END:Ot,get:At,getStyle:Ft,create:_t,remove:Dt,empty:qt,toFront:se,toBack:pe,hasClass:Ae,addClass:Ht,removeClass:te,setClass:Yt,getClass:_e,setOpacity:oe,testProp:Tn,setTransform:De,setPosition:Ce,getPosition:ge,get disableTextSelection(){return Ie},get enableTextSelection(){return He},disableImageDrag:Di,enableImageDrag:wn,preventOutline:Ko,restoreOutline:As,getSizedParentNode:Ac,getScale:jo};function le(n,o,l,f){if(o&&typeof o=="object")for(var _ in o)Qo(n,_,o[_],l);else{o=S(o);for(var b=0,U=o.length;b<U;b++)Qo(n,o[b],l,f)}return this}var Fn="_leaflet_events";function Pe(n,o,l,f){if(arguments.length===1)Cc(n),delete n[Fn];else if(o&&typeof o=="object")for(var _ in o)ta(n,_,o[_],l);else if(o=S(o),arguments.length===2)Cc(n,function(X){return R(o,X)!==-1});else for(var b=0,U=o.length;b<U;b++)ta(n,o[b],l,f);return this}function Cc(n,o){for(var l in n[Fn]){var f=l.split(/\d/)[0];(!o||o(f))&&ta(n,f,null,null,l)}}var $o={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Qo(n,o,l,f){var _=o+u(l)+(f?"_"+u(f):"");if(n[Fn]&&n[Fn][_])return this;var b=function(X){return l.call(f||n,X||window.event)},U=b;!Wt.touchNative&&Wt.pointer&&o.indexOf("touch")===0?b=Es(n,o,b):Wt.touch&&o==="dblclick"?b=tt(n,b):"addEventListener"in n?o==="touchstart"||o==="touchmove"||o==="wheel"||o==="mousewheel"?n.addEventListener($o[o]||o,b,Wt.passiveEvents?{passive:!1}:!1):o==="mouseenter"||o==="mouseleave"?(b=function(X){X=X||window.event,na(n,X)&&U(X)},n.addEventListener($o[o],b,!1)):n.addEventListener(o,U,!1):n.attachEvent("on"+o,b),n[Fn]=n[Fn]||{},n[Fn][_]=b}function ta(n,o,l,f,_){_=_||o+u(l)+(f?"_"+u(f):"");var b=n[Fn]&&n[Fn][_];if(!b)return this;!Wt.touchNative&&Wt.pointer&&o.indexOf("touch")===0?bs(n,o,b):Wt.touch&&o==="dblclick"?K(n,b):"removeEventListener"in n?n.removeEventListener($o[o]||o,b,!1):n.detachEvent("on"+o,b),n[Fn][_]=null}function Ii(n){return n.stopPropagation?n.stopPropagation():n.originalEvent?n.originalEvent._stopped=!0:n.cancelBubble=!0,this}function ea(n){return Qo(n,"wheel",Ii),this}function zr(n){return le(n,"mousedown touchstart dblclick contextmenu",Ii),n._leaflet_disable_click=!0,this}function We(n){return n.preventDefault?n.preventDefault():n.returnValue=!1,this}function Ni(n){return We(n),Ii(n),this}function Pc(n){if(n.composedPath)return n.composedPath();for(var o=[],l=n.target;l;)o.push(l),l=l.parentNode;return o}function Rc(n,o){if(!o)return new J(n.clientX,n.clientY);var l=jo(o),f=l.boundingClientRect;return new J((n.clientX-f.left)/l.x-o.clientLeft,(n.clientY-f.top)/l.y-o.clientTop)}var If=Wt.linux&&Wt.chrome?window.devicePixelRatio:Wt.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Lc(n){return Wt.edge?n.wheelDeltaY/2:n.deltaY&&n.deltaMode===0?-n.deltaY/If:n.deltaY&&n.deltaMode===1?-n.deltaY*20:n.deltaY&&n.deltaMode===2?-n.deltaY*60:n.deltaX||n.deltaZ?0:n.wheelDelta?(n.wheelDeltaY||n.wheelDelta)/2:n.detail&&Math.abs(n.detail)<32765?-n.detail*20:n.detail?n.detail/-32765*60:0}function na(n,o){var l=o.relatedTarget;if(!l)return!0;try{for(;l&&l!==n;)l=l.parentNode}catch{return!1}return l!==n}var Nf={__proto__:null,on:le,off:Pe,stopPropagation:Ii,disableScrollPropagation:ea,disableClickPropagation:zr,preventDefault:We,stop:Ni,getPropagationPath:Pc,getMousePosition:Rc,getWheelDelta:Lc,isExternalTarget:na,addListener:le,removeListener:Pe},Dc=Z.extend({run:function(n,o,l,f){this.stop(),this._el=n,this._inProgress=!0,this._duration=l||.25,this._easeOutPower=1/Math.max(f||.5,.2),this._startPos=ge(n),this._offset=o.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=F(this._animate,this),this._step()},_step:function(n){var o=+new Date-this._startTime,l=this._duration*1e3;o<l?this._runFrame(this._easeOut(o/l),n):(this._runFrame(1),this._complete())},_runFrame:function(n,o){var l=this._startPos.add(this._offset.multiplyBy(n));o&&l._round(),Ce(this._el,l),this.fire("step")},_complete:function(){Y(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(n){return 1-Math.pow(1-n,this._easeOutPower)}}),ve=Z.extend({options:{crs:ie,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(n,o){o=E(this,o),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(n),this._initLayout(),this._onResize=c(this._onResize,this),this._initEvents(),o.maxBounds&&this.setMaxBounds(o.maxBounds),o.zoom!==void 0&&(this._zoom=this._limitZoom(o.zoom)),o.center&&o.zoom!==void 0&&this.setView(q(o.center),o.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=St&&Wt.any3d&&!Wt.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),le(this._proxy,Ot,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(n,o,l){if(o=o===void 0?this._zoom:this._limitZoom(o),n=this._limitCenter(q(n),o,this.options.maxBounds),l=l||{},this._stop(),this._loaded&&!l.reset&&l!==!0){l.animate!==void 0&&(l.zoom=s({animate:l.animate},l.zoom),l.pan=s({animate:l.animate,duration:l.duration},l.pan));var f=this._zoom!==o?this._tryAnimatedZoom&&this._tryAnimatedZoom(n,o,l.zoom):this._tryAnimatedPan(n,l.pan);if(f)return clearTimeout(this._sizeTimer),this}return this._resetView(n,o,l.pan&&l.pan.noMoveStart),this},setZoom:function(n,o){return this._loaded?this.setView(this.getCenter(),n,{zoom:o}):(this._zoom=n,this)},zoomIn:function(n,o){return n=n||(Wt.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+n,o)},zoomOut:function(n,o){return n=n||(Wt.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-n,o)},setZoomAround:function(n,o,l){var f=this.getZoomScale(o),_=this.getSize().divideBy(2),b=n instanceof J?n:this.latLngToContainerPoint(n),U=b.subtract(_).multiplyBy(1-1/f),X=this.containerPointToLatLng(_.add(U));return this.setView(X,o,{zoom:l})},_getBoundsCenterZoom:function(n,o){o=o||{},n=n.getBounds?n.getBounds():Qt(n);var l=rt(o.paddingTopLeft||o.padding||[0,0]),f=rt(o.paddingBottomRight||o.padding||[0,0]),_=this.getBoundsZoom(n,!1,l.add(f));if(_=typeof o.maxZoom=="number"?Math.min(o.maxZoom,_):_,_===1/0)return{center:n.getCenter(),zoom:_};var b=f.subtract(l).divideBy(2),U=this.project(n.getSouthWest(),_),X=this.project(n.getNorthEast(),_),$=this.unproject(U.add(X).divideBy(2).add(b),_);return{center:$,zoom:_}},fitBounds:function(n,o){if(n=Qt(n),!n.isValid())throw new Error("Bounds are not valid.");var l=this._getBoundsCenterZoom(n,o);return this.setView(l.center,l.zoom,o)},fitWorld:function(n){return this.fitBounds([[-90,-180],[90,180]],n)},panTo:function(n,o){return this.setView(n,this._zoom,{pan:o})},panBy:function(n,o){if(n=rt(n).round(),o=o||{},!n.x&&!n.y)return this.fire("moveend");if(o.animate!==!0&&!this.getSize().contains(n))return this._resetView(this.unproject(this.project(this.getCenter()).add(n)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Dc,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),o.noMoveStart||this.fire("movestart"),o.animate!==!1){Ht(this._mapPane,"leaflet-pan-anim");var l=this._getMapPanePos().subtract(n).round();this._panAnim.run(this._mapPane,l,o.duration||.25,o.easeLinearity)}else this._rawPanBy(n),this.fire("move").fire("moveend");return this},flyTo:function(n,o,l){if(l=l||{},l.animate===!1||!Wt.any3d)return this.setView(n,o,l);this._stop();var f=this.project(this.getCenter()),_=this.project(n),b=this.getSize(),U=this._zoom;n=q(n),o=o===void 0?U:o;var X=Math.max(b.x,b.y),$=X*this.getZoomScale(U,o),ut=_.distanceTo(f)||1,Nt=1.42,ee=Nt*Nt;function de(Ue){var zs=Ue?-1:1,Md=Ue?$:X,Ed=$*$-X*X+zs*ee*ee*ut*ut,bd=2*Md*ee*ut,da=Ed/bd,fh=Math.sqrt(da*da+1)-da,Td=fh<1e-9?-18:Math.log(fh);return Td}function tn(Ue){return(Math.exp(Ue)-Math.exp(-Ue))/2}function Ve(Ue){return(Math.exp(Ue)+Math.exp(-Ue))/2}function gn(Ue){return tn(Ue)/Ve(Ue)}var ln=de(0);function or(Ue){return X*(Ve(ln)/Ve(ln+Nt*Ue))}function vd(Ue){return X*(Ve(ln)*gn(ln+Nt*Ue)-tn(ln))/ee}function xd(Ue){return 1-Math.pow(1-Ue,1.5)}var yd=Date.now(),hh=(de(1)-ln)/Nt,Sd=l.duration?1e3*l.duration:1e3*hh*.8;function uh(){var Ue=(Date.now()-yd)/Sd,zs=xd(Ue)*hh;Ue<=1?(this._flyToFrame=F(uh,this),this._move(this.unproject(f.add(_.subtract(f).multiplyBy(vd(zs)/ut)),U),this.getScaleZoom(X/or(zs),U),{flyTo:!0})):this._move(n,o)._moveEnd(!0)}return this._moveStart(!0,l.noMoveStart),uh.call(this),this},flyToBounds:function(n,o){var l=this._getBoundsCenterZoom(n,o);return this.flyTo(l.center,l.zoom,o)},setMaxBounds:function(n){return n=Qt(n),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),n.isValid()?(this.options.maxBounds=n,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(n){var o=this.options.minZoom;return this.options.minZoom=n,this._loaded&&o!==n&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(n):this},setMaxZoom:function(n){var o=this.options.maxZoom;return this.options.maxZoom=n,this._loaded&&o!==n&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(n):this},panInsideBounds:function(n,o){this._enforcingBounds=!0;var l=this.getCenter(),f=this._limitCenter(l,this._zoom,Qt(n));return l.equals(f)||this.panTo(f,o),this._enforcingBounds=!1,this},panInside:function(n,o){o=o||{};var l=rt(o.paddingTopLeft||o.padding||[0,0]),f=rt(o.paddingBottomRight||o.padding||[0,0]),_=this.project(this.getCenter()),b=this.project(n),U=this.getPixelBounds(),X=Xt([U.min.add(l),U.max.subtract(f)]),$=X.getSize();if(!X.contains(b)){this._enforcingBounds=!0;var ut=b.subtract(X.getCenter()),Nt=X.extend(b).getSize().subtract($);_.x+=ut.x<0?-Nt.x:Nt.x,_.y+=ut.y<0?-Nt.y:Nt.y,this.panTo(this.unproject(_),o),this._enforcingBounds=!1}return this},invalidateSize:function(n){if(!this._loaded)return this;n=s({animate:!1,pan:!0},n===!0?{animate:!0}:n);var o=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var l=this.getSize(),f=o.divideBy(2).round(),_=l.divideBy(2).round(),b=f.subtract(_);return!b.x&&!b.y?this:(n.animate&&n.pan?this.panBy(b):(n.pan&&this._rawPanBy(b),this.fire("move"),n.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(c(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:o,newSize:l}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(n){if(n=this._locateOptions=s({timeout:1e4,watch:!1},n),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var o=c(this._handleGeolocationResponse,this),l=c(this._handleGeolocationError,this);return n.watch?this._locationWatchId=navigator.geolocation.watchPosition(o,l,n):navigator.geolocation.getCurrentPosition(o,l,n),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(n){if(this._container._leaflet_id){var o=n.code,l=n.message||(o===1?"permission denied":o===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:o,message:"Geolocation error: "+l+"."})}},_handleGeolocationResponse:function(n){if(this._container._leaflet_id){var o=n.coords.latitude,l=n.coords.longitude,f=new Zt(o,l),_=f.toBounds(n.coords.accuracy*2),b=this._locateOptions;if(b.setView){var U=this.getBoundsZoom(_);this.setView(f,b.maxZoom?Math.min(U,b.maxZoom):U)}var X={latlng:f,bounds:_,timestamp:n.timestamp};for(var $ in n.coords)typeof n.coords[$]=="number"&&(X[$]=n.coords[$]);this.fire("locationfound",X)}},addHandler:function(n,o){if(!o)return this;var l=this[n]=new o(this);return this._handlers.push(l),this.options[n]&&l.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Dt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(Y(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var n;for(n in this._layers)this._layers[n].remove();for(n in this._panes)Dt(this._panes[n]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(n,o){var l="leaflet-pane"+(n?" leaflet-"+n.replace("Pane","")+"-pane":""),f=_t("div",l,o||this._mapPane);return n&&(this._panes[n]=f),f},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var n=this.getPixelBounds(),o=this.unproject(n.getBottomLeft()),l=this.unproject(n.getTopRight());return new Vt(o,l)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(n,o,l){n=Qt(n),l=rt(l||[0,0]);var f=this.getZoom()||0,_=this.getMinZoom(),b=this.getMaxZoom(),U=n.getNorthWest(),X=n.getSouthEast(),$=this.getSize().subtract(l),ut=Xt(this.project(X,f),this.project(U,f)).getSize(),Nt=Wt.any3d?this.options.zoomSnap:1,ee=$.x/ut.x,de=$.y/ut.y,tn=o?Math.max(ee,de):Math.min(ee,de);return f=this.getScaleZoom(tn,f),Nt&&(f=Math.round(f/(Nt/100))*(Nt/100),f=o?Math.ceil(f/Nt)*Nt:Math.floor(f/Nt)*Nt),Math.max(_,Math.min(b,f))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new J(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(n,o){var l=this._getTopLeftPoint(n,o);return new ft(l,l.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(n){return this.options.crs.getProjectedBounds(n===void 0?this.getZoom():n)},getPane:function(n){return typeof n=="string"?this._panes[n]:n},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(n,o){var l=this.options.crs;return o=o===void 0?this._zoom:o,l.scale(n)/l.scale(o)},getScaleZoom:function(n,o){var l=this.options.crs;o=o===void 0?this._zoom:o;var f=l.zoom(n*l.scale(o));return isNaN(f)?1/0:f},project:function(n,o){return o=o===void 0?this._zoom:o,this.options.crs.latLngToPoint(q(n),o)},unproject:function(n,o){return o=o===void 0?this._zoom:o,this.options.crs.pointToLatLng(rt(n),o)},layerPointToLatLng:function(n){var o=rt(n).add(this.getPixelOrigin());return this.unproject(o)},latLngToLayerPoint:function(n){var o=this.project(q(n))._round();return o._subtract(this.getPixelOrigin())},wrapLatLng:function(n){return this.options.crs.wrapLatLng(q(n))},wrapLatLngBounds:function(n){return this.options.crs.wrapLatLngBounds(Qt(n))},distance:function(n,o){return this.options.crs.distance(q(n),q(o))},containerPointToLayerPoint:function(n){return rt(n).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(n){return rt(n).add(this._getMapPanePos())},containerPointToLatLng:function(n){var o=this.containerPointToLayerPoint(rt(n));return this.layerPointToLatLng(o)},latLngToContainerPoint:function(n){return this.layerPointToContainerPoint(this.latLngToLayerPoint(q(n)))},mouseEventToContainerPoint:function(n){return Rc(n,this._container)},mouseEventToLayerPoint:function(n){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(n))},mouseEventToLatLng:function(n){return this.layerPointToLatLng(this.mouseEventToLayerPoint(n))},_initContainer:function(n){var o=this._container=At(n);if(o){if(o._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");le(o,"scroll",this._onScroll,this),this._containerId=u(o)},_initLayout:function(){var n=this._container;this._fadeAnimated=this.options.fadeAnimation&&Wt.any3d,Ht(n,"leaflet-container"+(Wt.touch?" leaflet-touch":"")+(Wt.retina?" leaflet-retina":"")+(Wt.ielt9?" leaflet-oldie":"")+(Wt.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var o=Ft(n,"position");o!=="absolute"&&o!=="relative"&&o!=="fixed"&&o!=="sticky"&&(n.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var n=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Ce(this._mapPane,new J(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Ht(n.markerPane,"leaflet-zoom-hide"),Ht(n.shadowPane,"leaflet-zoom-hide"))},_resetView:function(n,o,l){Ce(this._mapPane,new J(0,0));var f=!this._loaded;this._loaded=!0,o=this._limitZoom(o),this.fire("viewprereset");var _=this._zoom!==o;this._moveStart(_,l)._move(n,o)._moveEnd(_),this.fire("viewreset"),f&&this.fire("load")},_moveStart:function(n,o){return n&&this.fire("zoomstart"),o||this.fire("movestart"),this},_move:function(n,o,l,f){o===void 0&&(o=this._zoom);var _=this._zoom!==o;return this._zoom=o,this._lastCenter=n,this._pixelOrigin=this._getNewPixelOrigin(n),f?l&&l.pinch&&this.fire("zoom",l):((_||l&&l.pinch)&&this.fire("zoom",l),this.fire("move",l)),this},_moveEnd:function(n){return n&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return Y(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(n){Ce(this._mapPane,this._getMapPanePos().subtract(n))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(n){this._targets={},this._targets[u(this._container)]=this;var o=n?Pe:le;o(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&o(window,"resize",this._onResize,this),Wt.any3d&&this.options.transform3DLimit&&(n?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){Y(this._resizeRequest),this._resizeRequest=F(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var n=this._getMapPanePos();Math.max(Math.abs(n.x),Math.abs(n.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(n,o){for(var l=[],f,_=o==="mouseout"||o==="mouseover",b=n.target||n.srcElement,U=!1;b;){if(f=this._targets[u(b)],f&&(o==="click"||o==="preclick")&&this._draggableMoved(f)){U=!0;break}if(f&&f.listens(o,!0)&&(_&&!na(b,n)||(l.push(f),_))||b===this._container)break;b=b.parentNode}return!l.length&&!U&&!_&&this.listens(o,!0)&&(l=[this]),l},_isClickDisabled:function(n){for(;n&&n!==this._container;){if(n._leaflet_disable_click)return!0;n=n.parentNode}},_handleDOMEvent:function(n){var o=n.target||n.srcElement;if(!(!this._loaded||o._leaflet_disable_events||n.type==="click"&&this._isClickDisabled(o))){var l=n.type;l==="mousedown"&&Ko(o),this._fireDOMEvent(n,l)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(n,o,l){if(n.type==="click"){var f=s({},n);f.type="preclick",this._fireDOMEvent(f,f.type,l)}var _=this._findEventTargets(n,o);if(l){for(var b=[],U=0;U<l.length;U++)l[U].listens(o,!0)&&b.push(l[U]);_=b.concat(_)}if(_.length){o==="contextmenu"&&We(n);var X=_[0],$={originalEvent:n};if(n.type!=="keypress"&&n.type!=="keydown"&&n.type!=="keyup"){var ut=X.getLatLng&&(!X._radius||X._radius<=10);$.containerPoint=ut?this.latLngToContainerPoint(X.getLatLng()):this.mouseEventToContainerPoint(n),$.layerPoint=this.containerPointToLayerPoint($.containerPoint),$.latlng=ut?X.getLatLng():this.layerPointToLatLng($.layerPoint)}for(U=0;U<_.length;U++)if(_[U].fire(o,$,!0),$.originalEvent._stopped||_[U].options.bubblingMouseEvents===!1&&R(this._mouseEvents,o)!==-1)return}},_draggableMoved:function(n){return n=n.dragging&&n.dragging.enabled()?n:this,n.dragging&&n.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var n=0,o=this._handlers.length;n<o;n++)this._handlers[n].disable()},whenReady:function(n,o){return this._loaded?n.call(o||this,{target:this}):this.on("load",n,o),this},_getMapPanePos:function(){return ge(this._mapPane)||new J(0,0)},_moved:function(){var n=this._getMapPanePos();return n&&!n.equals([0,0])},_getTopLeftPoint:function(n,o){var l=n&&o!==void 0?this._getNewPixelOrigin(n,o):this.getPixelOrigin();return l.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(n,o){var l=this.getSize()._divideBy(2);return this.project(n,o)._subtract(l)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(n,o,l){var f=this._getNewPixelOrigin(l,o);return this.project(n,o)._subtract(f)},_latLngBoundsToNewLayerBounds:function(n,o,l){var f=this._getNewPixelOrigin(l,o);return Xt([this.project(n.getSouthWest(),o)._subtract(f),this.project(n.getNorthWest(),o)._subtract(f),this.project(n.getSouthEast(),o)._subtract(f),this.project(n.getNorthEast(),o)._subtract(f)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(n){return this.latLngToLayerPoint(n).subtract(this._getCenterLayerPoint())},_limitCenter:function(n,o,l){if(!l)return n;var f=this.project(n,o),_=this.getSize().divideBy(2),b=new ft(f.subtract(_),f.add(_)),U=this._getBoundsOffset(b,l,o);return Math.abs(U.x)<=1&&Math.abs(U.y)<=1?n:this.unproject(f.add(U),o)},_limitOffset:function(n,o){if(!o)return n;var l=this.getPixelBounds(),f=new ft(l.min.add(n),l.max.add(n));return n.add(this._getBoundsOffset(f,o))},_getBoundsOffset:function(n,o,l){var f=Xt(this.project(o.getNorthEast(),l),this.project(o.getSouthWest(),l)),_=f.min.subtract(n.min),b=f.max.subtract(n.max),U=this._rebound(_.x,-b.x),X=this._rebound(_.y,-b.y);return new J(U,X)},_rebound:function(n,o){return n+o>0?Math.round(n-o)/2:Math.max(0,Math.ceil(n))-Math.max(0,Math.floor(o))},_limitZoom:function(n){var o=this.getMinZoom(),l=this.getMaxZoom(),f=Wt.any3d?this.options.zoomSnap:1;return f&&(n=Math.round(n/f)*f),Math.max(o,Math.min(l,n))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){te(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(n,o){var l=this._getCenterOffset(n)._trunc();return(o&&o.animate)!==!0&&!this.getSize().contains(l)?!1:(this.panBy(l,o),!0)},_createAnimProxy:function(){var n=this._proxy=_t("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(n),this.on("zoomanim",function(o){var l=G,f=this._proxy.style[l];De(this._proxy,this.project(o.center,o.zoom),this.getZoomScale(o.zoom,1)),f===this._proxy.style[l]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Dt(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var n=this.getCenter(),o=this.getZoom();De(this._proxy,this.project(n,o),this.getZoomScale(o,1))},_catchTransitionEnd:function(n){this._animatingZoom&&n.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(n,o,l){if(this._animatingZoom)return!0;if(l=l||{},!this._zoomAnimated||l.animate===!1||this._nothingToAnimate()||Math.abs(o-this._zoom)>this.options.zoomAnimationThreshold)return!1;var f=this.getZoomScale(o),_=this._getCenterOffset(n)._divideBy(1-1/f);return l.animate!==!0&&!this.getSize().contains(_)?!1:(F(function(){this._moveStart(!0,l.noMoveStart||!1)._animateZoom(n,o,!0)},this),!0)},_animateZoom:function(n,o,l,f){this._mapPane&&(l&&(this._animatingZoom=!0,this._animateToCenter=n,this._animateToZoom=o,Ht(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:n,zoom:o,noUpdate:f}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(c(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&te(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Uf(n,o){return new ve(n,o)}var An=st.extend({options:{position:"topright"},initialize:function(n){E(this,n)},getPosition:function(){return this.options.position},setPosition:function(n){var o=this._map;return o&&o.removeControl(this),this.options.position=n,o&&o.addControl(this),this},getContainer:function(){return this._container},addTo:function(n){this.remove(),this._map=n;var o=this._container=this.onAdd(n),l=this.getPosition(),f=n._controlCorners[l];return Ht(o,"leaflet-control"),l.indexOf("bottom")!==-1?f.insertBefore(o,f.firstChild):f.appendChild(o),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Dt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(n){this._map&&n&&n.screenX>0&&n.screenY>0&&this._map.getContainer().focus()}}),kr=function(n){return new An(n)};ve.include({addControl:function(n){return n.addTo(this),this},removeControl:function(n){return n.remove(),this},_initControlPos:function(){var n=this._controlCorners={},o="leaflet-",l=this._controlContainer=_t("div",o+"control-container",this._container);function f(_,b){var U=o+_+" "+o+b;n[_+b]=_t("div",U,l)}f("top","left"),f("top","right"),f("bottom","left"),f("bottom","right")},_clearControlPos:function(){for(var n in this._controlCorners)Dt(this._controlCorners[n]);Dt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Ic=An.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(n,o,l,f){return l<f?-1:f<l?1:0}},initialize:function(n,o,l){E(this,l),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var f in n)this._addLayer(n[f],f);for(f in o)this._addLayer(o[f],f,!0)},onAdd:function(n){this._initLayout(),this._update(),this._map=n,n.on("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(n){return An.prototype.addTo.call(this,n),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var n=0;n<this._layers.length;n++)this._layers[n].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(n,o){return this._addLayer(n,o),this._map?this._update():this},addOverlay:function(n,o){return this._addLayer(n,o,!0),this._map?this._update():this},removeLayer:function(n){n.off("add remove",this._onLayerChange,this);var o=this._getLayer(u(n));return o&&this._layers.splice(this._layers.indexOf(o),1),this._map?this._update():this},expand:function(){Ht(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var n=this._map.getSize().y-(this._container.offsetTop+50);return n<this._section.clientHeight?(Ht(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=n+"px"):te(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return te(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var n="leaflet-control-layers",o=this._container=_t("div",n),l=this.options.collapsed;o.setAttribute("aria-haspopup",!0),zr(o),ea(o);var f=this._section=_t("section",n+"-list");l&&(this._map.on("click",this.collapse,this),le(o,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var _=this._layersLink=_t("a",n+"-toggle",o);_.href="#",_.title="Layers",_.setAttribute("role","button"),le(_,{keydown:function(b){b.keyCode===13&&this._expandSafely()},click:function(b){We(b),this._expandSafely()}},this),l||this.expand(),this._baseLayersList=_t("div",n+"-base",f),this._separator=_t("div",n+"-separator",f),this._overlaysList=_t("div",n+"-overlays",f),o.appendChild(f)},_getLayer:function(n){for(var o=0;o<this._layers.length;o++)if(this._layers[o]&&u(this._layers[o].layer)===n)return this._layers[o]},_addLayer:function(n,o,l){this._map&&n.on("add remove",this._onLayerChange,this),this._layers.push({layer:n,name:o,overlay:l}),this.options.sortLayers&&this._layers.sort(c(function(f,_){return this.options.sortFunction(f.layer,_.layer,f.name,_.name)},this)),this.options.autoZIndex&&n.setZIndex&&(this._lastZIndex++,n.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;qt(this._baseLayersList),qt(this._overlaysList),this._layerControlInputs=[];var n,o,l,f,_=0;for(l=0;l<this._layers.length;l++)f=this._layers[l],this._addItem(f),o=o||f.overlay,n=n||!f.overlay,_+=f.overlay?0:1;return this.options.hideSingleBase&&(n=n&&_>1,this._baseLayersList.style.display=n?"":"none"),this._separator.style.display=o&&n?"":"none",this},_onLayerChange:function(n){this._handlingClick||this._update();var o=this._getLayer(u(n.target)),l=o.overlay?n.type==="add"?"overlayadd":"overlayremove":n.type==="add"?"baselayerchange":null;l&&this._map.fire(l,o)},_createRadioElement:function(n,o){var l='<input type="radio" class="leaflet-control-layers-selector" name="'+n+'"'+(o?' checked="checked"':"")+"/>",f=document.createElement("div");return f.innerHTML=l,f.firstChild},_addItem:function(n){var o=document.createElement("label"),l=this._map.hasLayer(n.layer),f;n.overlay?(f=document.createElement("input"),f.type="checkbox",f.className="leaflet-control-layers-selector",f.defaultChecked=l):f=this._createRadioElement("leaflet-base-layers_"+u(this),l),this._layerControlInputs.push(f),f.layerId=u(n.layer),le(f,"click",this._onInputClick,this);var _=document.createElement("span");_.innerHTML=" "+n.name;var b=document.createElement("span");o.appendChild(b),b.appendChild(f),b.appendChild(_);var U=n.overlay?this._overlaysList:this._baseLayersList;return U.appendChild(o),this._checkDisabledLayers(),o},_onInputClick:function(){if(!this._preventClick){var n=this._layerControlInputs,o,l,f=[],_=[];this._handlingClick=!0;for(var b=n.length-1;b>=0;b--)o=n[b],l=this._getLayer(o.layerId).layer,o.checked?f.push(l):o.checked||_.push(l);for(b=0;b<_.length;b++)this._map.hasLayer(_[b])&&this._map.removeLayer(_[b]);for(b=0;b<f.length;b++)this._map.hasLayer(f[b])||this._map.addLayer(f[b]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var n=this._layerControlInputs,o,l,f=this._map.getZoom(),_=n.length-1;_>=0;_--)o=n[_],l=this._getLayer(o.layerId).layer,o.disabled=l.options.minZoom!==void 0&&f<l.options.minZoom||l.options.maxZoom!==void 0&&f>l.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var n=this._section;this._preventClick=!0,le(n,"click",We),this.expand();var o=this;setTimeout(function(){Pe(n,"click",We),o._preventClick=!1})}}),Of=function(n,o,l){return new Ic(n,o,l)},ia=An.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(n){var o="leaflet-control-zoom",l=_t("div",o+" leaflet-bar"),f=this.options;return this._zoomInButton=this._createButton(f.zoomInText,f.zoomInTitle,o+"-in",l,this._zoomIn),this._zoomOutButton=this._createButton(f.zoomOutText,f.zoomOutTitle,o+"-out",l,this._zoomOut),this._updateDisabled(),n.on("zoomend zoomlevelschange",this._updateDisabled,this),l},onRemove:function(n){n.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(n){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(n.shiftKey?3:1))},_zoomOut:function(n){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(n.shiftKey?3:1))},_createButton:function(n,o,l,f,_){var b=_t("a",l,f);return b.innerHTML=n,b.href="#",b.title=o,b.setAttribute("role","button"),b.setAttribute("aria-label",o),zr(b),le(b,"click",Ni),le(b,"click",_,this),le(b,"click",this._refocusOnMap,this),b},_updateDisabled:function(){var n=this._map,o="leaflet-disabled";te(this._zoomInButton,o),te(this._zoomOutButton,o),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||n._zoom===n.getMinZoom())&&(Ht(this._zoomOutButton,o),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||n._zoom===n.getMaxZoom())&&(Ht(this._zoomInButton,o),this._zoomInButton.setAttribute("aria-disabled","true"))}});ve.mergeOptions({zoomControl:!0}),ve.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new ia,this.addControl(this.zoomControl))});var Ff=function(n){return new ia(n)},Nc=An.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(n){var o="leaflet-control-scale",l=_t("div",o),f=this.options;return this._addScales(f,o+"-line",l),n.on(f.updateWhenIdle?"moveend":"move",this._update,this),n.whenReady(this._update,this),l},onRemove:function(n){n.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(n,o,l){n.metric&&(this._mScale=_t("div",o,l)),n.imperial&&(this._iScale=_t("div",o,l))},_update:function(){var n=this._map,o=n.getSize().y/2,l=n.distance(n.containerPointToLatLng([0,o]),n.containerPointToLatLng([this.options.maxWidth,o]));this._updateScales(l)},_updateScales:function(n){this.options.metric&&n&&this._updateMetric(n),this.options.imperial&&n&&this._updateImperial(n)},_updateMetric:function(n){var o=this._getRoundNum(n),l=o<1e3?o+" m":o/1e3+" km";this._updateScale(this._mScale,l,o/n)},_updateImperial:function(n){var o=n*3.2808399,l,f,_;o>5280?(l=o/5280,f=this._getRoundNum(l),this._updateScale(this._iScale,f+" mi",f/l)):(_=this._getRoundNum(o),this._updateScale(this._iScale,_+" ft",_/o))},_updateScale:function(n,o,l){n.style.width=Math.round(this.options.maxWidth*l)+"px",n.innerHTML=o},_getRoundNum:function(n){var o=Math.pow(10,(Math.floor(n)+"").length-1),l=n/o;return l=l>=10?10:l>=5?5:l>=3?3:l>=2?2:1,o*l}}),Bf=function(n){return new Nc(n)},zf='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',ra=An.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(Wt.inlineSvg?zf+" ":"")+"Leaflet</a>"},initialize:function(n){E(this,n),this._attributions={}},onAdd:function(n){n.attributionControl=this,this._container=_t("div","leaflet-control-attribution"),zr(this._container);for(var o in n._layers)n._layers[o].getAttribution&&this.addAttribution(n._layers[o].getAttribution());return this._update(),n.on("layeradd",this._addAttribution,this),this._container},onRemove:function(n){n.off("layeradd",this._addAttribution,this)},_addAttribution:function(n){n.layer.getAttribution&&(this.addAttribution(n.layer.getAttribution()),n.layer.once("remove",function(){this.removeAttribution(n.layer.getAttribution())},this))},setPrefix:function(n){return this.options.prefix=n,this._update(),this},addAttribution:function(n){return n?(this._attributions[n]||(this._attributions[n]=0),this._attributions[n]++,this._update(),this):this},removeAttribution:function(n){return n?(this._attributions[n]&&(this._attributions[n]--,this._update()),this):this},_update:function(){if(this._map){var n=[];for(var o in this._attributions)this._attributions[o]&&n.push(o);var l=[];this.options.prefix&&l.push(this.options.prefix),n.length&&l.push(n.join(", ")),this._container.innerHTML=l.join(' <span aria-hidden="true">|</span> ')}}});ve.mergeOptions({attributionControl:!0}),ve.addInitHook(function(){this.options.attributionControl&&new ra().addTo(this)});var kf=function(n){return new ra(n)};An.Layers=Ic,An.Zoom=ia,An.Scale=Nc,An.Attribution=ra,kr.layers=Of,kr.zoom=Ff,kr.scale=Bf,kr.attribution=kf;var Bn=st.extend({initialize:function(n){this._map=n},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Bn.addTo=function(n,o){return n.addHandler(o,this),this};var Hf={Events:Q},Uc=Wt.touch?"touchstart mousedown":"mousedown",_i=Z.extend({options:{clickTolerance:3},initialize:function(n,o,l,f){E(this,f),this._element=n,this._dragStartTarget=o||n,this._preventOutline=l},enable:function(){this._enabled||(le(this._dragStartTarget,Uc,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(_i._dragging===this&&this.finishDrag(!0),Pe(this._dragStartTarget,Uc,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(n){if(this._enabled&&(this._moved=!1,!Ae(this._element,"leaflet-zoom-anim"))){if(n.touches&&n.touches.length!==1){_i._dragging===this&&this.finishDrag();return}if(!(_i._dragging||n.shiftKey||n.which!==1&&n.button!==1&&!n.touches)&&(_i._dragging=this,this._preventOutline&&Ko(this._element),Di(),Ie(),!this._moving)){this.fire("down");var o=n.touches?n.touches[0]:n,l=Ac(this._element);this._startPoint=new J(o.clientX,o.clientY),this._startPos=ge(this._element),this._parentScale=jo(l);var f=n.type==="mousedown";le(document,f?"mousemove":"touchmove",this._onMove,this),le(document,f?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(n){if(this._enabled){if(n.touches&&n.touches.length>1){this._moved=!0;return}var o=n.touches&&n.touches.length===1?n.touches[0]:n,l=new J(o.clientX,o.clientY)._subtract(this._startPoint);!l.x&&!l.y||Math.abs(l.x)+Math.abs(l.y)<this.options.clickTolerance||(l.x/=this._parentScale.x,l.y/=this._parentScale.y,We(n),this._moved||(this.fire("dragstart"),this._moved=!0,Ht(document.body,"leaflet-dragging"),this._lastTarget=n.target||n.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Ht(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(l),this._moving=!0,this._lastEvent=n,this._updatePosition())}},_updatePosition:function(){var n={originalEvent:this._lastEvent};this.fire("predrag",n),Ce(this._element,this._newPos),this.fire("drag",n)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(n){te(document.body,"leaflet-dragging"),this._lastTarget&&(te(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Pe(document,"mousemove touchmove",this._onMove,this),Pe(document,"mouseup touchend touchcancel",this._onUp,this),wn(),He();var o=this._moved&&this._moving;this._moving=!1,_i._dragging=!1,o&&this.fire("dragend",{noInertia:n,distance:this._newPos.distanceTo(this._startPos)})}});function Oc(n,o,l){var f,_=[1,4,2,8],b,U,X,$,ut,Nt,ee,de;for(b=0,Nt=n.length;b<Nt;b++)n[b]._code=Ui(n[b],o);for(X=0;X<4;X++){for(ee=_[X],f=[],b=0,Nt=n.length,U=Nt-1;b<Nt;U=b++)$=n[b],ut=n[U],$._code&ee?ut._code&ee||(de=Cs(ut,$,ee,o,l),de._code=Ui(de,o),f.push(de)):(ut._code&ee&&(de=Cs(ut,$,ee,o,l),de._code=Ui(de,o),f.push(de)),f.push($));n=f}return n}function Fc(n,o){var l,f,_,b,U,X,$,ut,Nt;if(!n||n.length===0)throw new Error("latlngs not passed");_n(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var ee=q([0,0]),de=Qt(n),tn=de.getNorthWest().distanceTo(de.getSouthWest())*de.getNorthEast().distanceTo(de.getNorthWest());tn<1700&&(ee=sa(n));var Ve=n.length,gn=[];for(l=0;l<Ve;l++){var ln=q(n[l]);gn.push(o.project(q([ln.lat-ee.lat,ln.lng-ee.lng])))}for(X=$=ut=0,l=0,f=Ve-1;l<Ve;f=l++)_=gn[l],b=gn[f],U=_.y*b.x-b.y*_.x,$+=(_.x+b.x)*U,ut+=(_.y+b.y)*U,X+=U*3;X===0?Nt=gn[0]:Nt=[$/X,ut/X];var or=o.unproject(rt(Nt));return q([or.lat+ee.lat,or.lng+ee.lng])}function sa(n){for(var o=0,l=0,f=0,_=0;_<n.length;_++){var b=q(n[_]);o+=b.lat,l+=b.lng,f++}return q([o/f,l/f])}var Vf={__proto__:null,clipPolygon:Oc,polygonCenter:Fc,centroid:sa};function Bc(n,o){if(!o||!n.length)return n.slice();var l=o*o;return n=Xf(n,l),n=Wf(n,l),n}function zc(n,o,l){return Math.sqrt(Hr(n,o,l,!0))}function Gf(n,o,l){return Hr(n,o,l)}function Wf(n,o){var l=n.length,f=typeof Uint8Array<"u"?Uint8Array:Array,_=new f(l);_[0]=_[l-1]=1,oa(n,_,o,0,l-1);var b,U=[];for(b=0;b<l;b++)_[b]&&U.push(n[b]);return U}function oa(n,o,l,f,_){var b=0,U,X,$;for(X=f+1;X<=_-1;X++)$=Hr(n[X],n[f],n[_],!0),$>b&&(U=X,b=$);b>l&&(o[U]=1,oa(n,o,l,f,U),oa(n,o,l,U,_))}function Xf(n,o){for(var l=[n[0]],f=1,_=0,b=n.length;f<b;f++)Zf(n[f],n[_])>o&&(l.push(n[f]),_=f);return _<b-1&&l.push(n[b-1]),l}var kc;function Hc(n,o,l,f,_){var b=f?kc:Ui(n,l),U=Ui(o,l),X,$,ut;for(kc=U;;){if(!(b|U))return[n,o];if(b&U)return!1;X=b||U,$=Cs(n,o,X,l,_),ut=Ui($,l),X===b?(n=$,b=ut):(o=$,U=ut)}}function Cs(n,o,l,f,_){var b=o.x-n.x,U=o.y-n.y,X=f.min,$=f.max,ut,Nt;return l&8?(ut=n.x+b*($.y-n.y)/U,Nt=$.y):l&4?(ut=n.x+b*(X.y-n.y)/U,Nt=X.y):l&2?(ut=$.x,Nt=n.y+U*($.x-n.x)/b):l&1&&(ut=X.x,Nt=n.y+U*(X.x-n.x)/b),new J(ut,Nt,_)}function Ui(n,o){var l=0;return n.x<o.min.x?l|=1:n.x>o.max.x&&(l|=2),n.y<o.min.y?l|=4:n.y>o.max.y&&(l|=8),l}function Zf(n,o){var l=o.x-n.x,f=o.y-n.y;return l*l+f*f}function Hr(n,o,l,f){var _=o.x,b=o.y,U=l.x-_,X=l.y-b,$=U*U+X*X,ut;return $>0&&(ut=((n.x-_)*U+(n.y-b)*X)/$,ut>1?(_=l.x,b=l.y):ut>0&&(_+=U*ut,b+=X*ut)),U=n.x-_,X=n.y-b,f?U*U+X*X:new J(_,b)}function _n(n){return!C(n[0])||typeof n[0][0]!="object"&&typeof n[0][0]<"u"}function Vc(n){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),_n(n)}function Gc(n,o){var l,f,_,b,U,X,$,ut;if(!n||n.length===0)throw new Error("latlngs not passed");_n(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var Nt=q([0,0]),ee=Qt(n),de=ee.getNorthWest().distanceTo(ee.getSouthWest())*ee.getNorthEast().distanceTo(ee.getNorthWest());de<1700&&(Nt=sa(n));var tn=n.length,Ve=[];for(l=0;l<tn;l++){var gn=q(n[l]);Ve.push(o.project(q([gn.lat-Nt.lat,gn.lng-Nt.lng])))}for(l=0,f=0;l<tn-1;l++)f+=Ve[l].distanceTo(Ve[l+1])/2;if(f===0)ut=Ve[0];else for(l=0,b=0;l<tn-1;l++)if(U=Ve[l],X=Ve[l+1],_=U.distanceTo(X),b+=_,b>f){$=(b-f)/_,ut=[X.x-$*(X.x-U.x),X.y-$*(X.y-U.y)];break}var ln=o.unproject(rt(ut));return q([ln.lat+Nt.lat,ln.lng+Nt.lng])}var qf={__proto__:null,simplify:Bc,pointToSegmentDistance:zc,closestPointOnSegment:Gf,clipSegment:Hc,_getEdgeIntersection:Cs,_getBitCode:Ui,_sqClosestPointOnSegment:Hr,isFlat:_n,_flat:Vc,polylineCenter:Gc},aa={project:function(n){return new J(n.lng,n.lat)},unproject:function(n){return new Zt(n.y,n.x)},bounds:new ft([-180,-90],[180,90])},la={R:6378137,R_MINOR:6356752314245179e-9,bounds:new ft([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(n){var o=Math.PI/180,l=this.R,f=n.lat*o,_=this.R_MINOR/l,b=Math.sqrt(1-_*_),U=b*Math.sin(f),X=Math.tan(Math.PI/4-f/2)/Math.pow((1-U)/(1+U),b/2);return f=-l*Math.log(Math.max(X,1e-10)),new J(n.lng*o*l,f)},unproject:function(n){for(var o=180/Math.PI,l=this.R,f=this.R_MINOR/l,_=Math.sqrt(1-f*f),b=Math.exp(-n.y/l),U=Math.PI/2-2*Math.atan(b),X=0,$=.1,ut;X<15&&Math.abs($)>1e-7;X++)ut=_*Math.sin(U),ut=Math.pow((1-ut)/(1+ut),_/2),$=Math.PI/2-2*Math.atan(b*ut)-U,U+=$;return new Zt(U*o,n.x*o/l)}},Yf={__proto__:null,LonLat:aa,Mercator:la,SphericalMercator:Ut},Jf=s({},Pt,{code:"EPSG:3395",projection:la,transformation:(function(){var n=.5/(Math.PI*la.R);return me(n,.5,-n,.5)})()}),Wc=s({},Pt,{code:"EPSG:4326",projection:aa,transformation:me(1/180,1,-1/180,.5)}),Kf=s({},at,{projection:aa,transformation:me(1,0,-1,0),scale:function(n){return Math.pow(2,n)},zoom:function(n){return Math.log(n)/Math.LN2},distance:function(n,o){var l=o.lng-n.lng,f=o.lat-n.lat;return Math.sqrt(l*l+f*f)},infinite:!0});at.Earth=Pt,at.EPSG3395=Jf,at.EPSG3857=ie,at.EPSG900913=ct,at.EPSG4326=Wc,at.Simple=Kf;var Cn=Z.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(n){return n.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(n){return n&&n.removeLayer(this),this},getPane:function(n){return this._map.getPane(n?this.options[n]||n:this.options.pane)},addInteractiveTarget:function(n){return this._map._targets[u(n)]=this,this},removeInteractiveTarget:function(n){return delete this._map._targets[u(n)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(n){var o=n.target;if(o.hasLayer(this)){if(this._map=o,this._zoomAnimated=o._zoomAnimated,this.getEvents){var l=this.getEvents();o.on(l,this),this.once("remove",function(){o.off(l,this)},this)}this.onAdd(o),this.fire("add"),o.fire("layeradd",{layer:this})}}});ve.include({addLayer:function(n){if(!n._layerAdd)throw new Error("The provided object is not a Layer.");var o=u(n);return this._layers[o]?this:(this._layers[o]=n,n._mapToAdd=this,n.beforeAdd&&n.beforeAdd(this),this.whenReady(n._layerAdd,n),this)},removeLayer:function(n){var o=u(n);return this._layers[o]?(this._loaded&&n.onRemove(this),delete this._layers[o],this._loaded&&(this.fire("layerremove",{layer:n}),n.fire("remove")),n._map=n._mapToAdd=null,this):this},hasLayer:function(n){return u(n)in this._layers},eachLayer:function(n,o){for(var l in this._layers)n.call(o,this._layers[l]);return this},_addLayers:function(n){n=n?C(n)?n:[n]:[];for(var o=0,l=n.length;o<l;o++)this.addLayer(n[o])},_addZoomLimit:function(n){(!isNaN(n.options.maxZoom)||!isNaN(n.options.minZoom))&&(this._zoomBoundLayers[u(n)]=n,this._updateZoomLevels())},_removeZoomLimit:function(n){var o=u(n);this._zoomBoundLayers[o]&&(delete this._zoomBoundLayers[o],this._updateZoomLevels())},_updateZoomLevels:function(){var n=1/0,o=-1/0,l=this._getZoomSpan();for(var f in this._zoomBoundLayers){var _=this._zoomBoundLayers[f].options;n=_.minZoom===void 0?n:Math.min(n,_.minZoom),o=_.maxZoom===void 0?o:Math.max(o,_.maxZoom)}this._layersMaxZoom=o===-1/0?void 0:o,this._layersMinZoom=n===1/0?void 0:n,l!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var er=Cn.extend({initialize:function(n,o){E(this,o),this._layers={};var l,f;if(n)for(l=0,f=n.length;l<f;l++)this.addLayer(n[l])},addLayer:function(n){var o=this.getLayerId(n);return this._layers[o]=n,this._map&&this._map.addLayer(n),this},removeLayer:function(n){var o=n in this._layers?n:this.getLayerId(n);return this._map&&this._layers[o]&&this._map.removeLayer(this._layers[o]),delete this._layers[o],this},hasLayer:function(n){var o=typeof n=="number"?n:this.getLayerId(n);return o in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(n){var o=Array.prototype.slice.call(arguments,1),l,f;for(l in this._layers)f=this._layers[l],f[n]&&f[n].apply(f,o);return this},onAdd:function(n){this.eachLayer(n.addLayer,n)},onRemove:function(n){this.eachLayer(n.removeLayer,n)},eachLayer:function(n,o){for(var l in this._layers)n.call(o,this._layers[l]);return this},getLayer:function(n){return this._layers[n]},getLayers:function(){var n=[];return this.eachLayer(n.push,n),n},setZIndex:function(n){return this.invoke("setZIndex",n)},getLayerId:function(n){return u(n)}}),jf=function(n,o){return new er(n,o)},ti=er.extend({addLayer:function(n){return this.hasLayer(n)?this:(n.addEventParent(this),er.prototype.addLayer.call(this,n),this.fire("layeradd",{layer:n}))},removeLayer:function(n){return this.hasLayer(n)?(n in this._layers&&(n=this._layers[n]),n.removeEventParent(this),er.prototype.removeLayer.call(this,n),this.fire("layerremove",{layer:n})):this},setStyle:function(n){return this.invoke("setStyle",n)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var n=new Vt;for(var o in this._layers){var l=this._layers[o];n.extend(l.getBounds?l.getBounds():l.getLatLng())}return n}}),$f=function(n,o){return new ti(n,o)},nr=st.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(n){E(this,n)},createIcon:function(n){return this._createIcon("icon",n)},createShadow:function(n){return this._createIcon("shadow",n)},_createIcon:function(n,o){var l=this._getIconUrl(n);if(!l){if(n==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var f=this._createImg(l,o&&o.tagName==="IMG"?o:null);return this._setIconStyles(f,n),(this.options.crossOrigin||this.options.crossOrigin==="")&&(f.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),f},_setIconStyles:function(n,o){var l=this.options,f=l[o+"Size"];typeof f=="number"&&(f=[f,f]);var _=rt(f),b=rt(o==="shadow"&&l.shadowAnchor||l.iconAnchor||_&&_.divideBy(2,!0));n.className="leaflet-marker-"+o+" "+(l.className||""),b&&(n.style.marginLeft=-b.x+"px",n.style.marginTop=-b.y+"px"),_&&(n.style.width=_.x+"px",n.style.height=_.y+"px")},_createImg:function(n,o){return o=o||document.createElement("img"),o.src=n,o},_getIconUrl:function(n){return Wt.retina&&this.options[n+"RetinaUrl"]||this.options[n+"Url"]}});function Qf(n){return new nr(n)}var Vr=nr.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(n){return typeof Vr.imagePath!="string"&&(Vr.imagePath=this._detectIconPath()),(this.options.imagePath||Vr.imagePath)+nr.prototype._getIconUrl.call(this,n)},_stripUrl:function(n){var o=function(l,f,_){var b=f.exec(l);return b&&b[_]};return n=o(n,/^url\((['"])?(.+)\1\)$/,2),n&&o(n,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var n=_t("div","leaflet-default-icon-path",document.body),o=Ft(n,"background-image")||Ft(n,"backgroundImage");if(document.body.removeChild(n),o=this._stripUrl(o),o)return o;var l=document.querySelector('link[href$="leaflet.css"]');return l?l.href.substring(0,l.href.length-11-1):""}}),Xc=Bn.extend({initialize:function(n){this._marker=n},addHooks:function(){var n=this._marker._icon;this._draggable||(this._draggable=new _i(n,n,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Ht(n,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&te(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(n){var o=this._marker,l=o._map,f=this._marker.options.autoPanSpeed,_=this._marker.options.autoPanPadding,b=ge(o._icon),U=l.getPixelBounds(),X=l.getPixelOrigin(),$=Xt(U.min._subtract(X).add(_),U.max._subtract(X).subtract(_));if(!$.contains(b)){var ut=rt((Math.max($.max.x,b.x)-$.max.x)/(U.max.x-$.max.x)-(Math.min($.min.x,b.x)-$.min.x)/(U.min.x-$.min.x),(Math.max($.max.y,b.y)-$.max.y)/(U.max.y-$.max.y)-(Math.min($.min.y,b.y)-$.min.y)/(U.min.y-$.min.y)).multiplyBy(f);l.panBy(ut,{animate:!1}),this._draggable._newPos._add(ut),this._draggable._startPos._add(ut),Ce(o._icon,this._draggable._newPos),this._onDrag(n),this._panRequest=F(this._adjustPan.bind(this,n))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(n){this._marker.options.autoPan&&(Y(this._panRequest),this._panRequest=F(this._adjustPan.bind(this,n)))},_onDrag:function(n){var o=this._marker,l=o._shadow,f=ge(o._icon),_=o._map.layerPointToLatLng(f);l&&Ce(l,f),o._latlng=_,n.latlng=_,n.oldLatLng=this._oldLatLng,o.fire("move",n).fire("drag",n)},_onDragEnd:function(n){Y(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",n)}}),Ps=Cn.extend({options:{icon:new Vr,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(n,o){E(this,o),this._latlng=q(n)},onAdd:function(n){this._zoomAnimated=this._zoomAnimated&&n.options.markerZoomAnimation,this._zoomAnimated&&n.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(n){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&n.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(n){var o=this._latlng;return this._latlng=q(n),this.update(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},setZIndexOffset:function(n){return this.options.zIndexOffset=n,this.update()},getIcon:function(){return this.options.icon},setIcon:function(n){return this.options.icon=n,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var n=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(n)}return this},_initIcon:function(){var n=this.options,o="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),l=n.icon.createIcon(this._icon),f=!1;l!==this._icon&&(this._icon&&this._removeIcon(),f=!0,n.title&&(l.title=n.title),l.tagName==="IMG"&&(l.alt=n.alt||"")),Ht(l,o),n.keyboard&&(l.tabIndex="0",l.setAttribute("role","button")),this._icon=l,n.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&le(l,"focus",this._panOnFocus,this);var _=n.icon.createShadow(this._shadow),b=!1;_!==this._shadow&&(this._removeShadow(),b=!0),_&&(Ht(_,o),_.alt=""),this._shadow=_,n.opacity<1&&this._updateOpacity(),f&&this.getPane().appendChild(this._icon),this._initInteraction(),_&&b&&this.getPane(n.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Pe(this._icon,"focus",this._panOnFocus,this),Dt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Dt(this._shadow),this._shadow=null},_setPos:function(n){this._icon&&Ce(this._icon,n),this._shadow&&Ce(this._shadow,n),this._zIndex=n.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(n){this._icon&&(this._icon.style.zIndex=this._zIndex+n)},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center).round();this._setPos(o)},_initInteraction:function(){if(this.options.interactive&&(Ht(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Xc)){var n=this.options.draggable;this.dragging&&(n=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Xc(this),n&&this.dragging.enable()}},setOpacity:function(n){return this.options.opacity=n,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var n=this.options.opacity;this._icon&&oe(this._icon,n),this._shadow&&oe(this._shadow,n)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var n=this._map;if(n){var o=this.options.icon.options,l=o.iconSize?rt(o.iconSize):rt(0,0),f=o.iconAnchor?rt(o.iconAnchor):rt(0,0);n.panInside(this._latlng,{paddingTopLeft:f,paddingBottomRight:l.subtract(f)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function td(n,o){return new Ps(n,o)}var gi=Cn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(n){this._renderer=n.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(n){return E(this,n),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&n&&Object.prototype.hasOwnProperty.call(n,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Rs=gi.extend({options:{fill:!0,radius:10},initialize:function(n,o){E(this,o),this._latlng=q(n),this._radius=this.options.radius},setLatLng:function(n){var o=this._latlng;return this._latlng=q(n),this.redraw(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(n){return this.options.radius=this._radius=n,this.redraw()},getRadius:function(){return this._radius},setStyle:function(n){var o=n&&n.radius||this._radius;return gi.prototype.setStyle.call(this,n),this.setRadius(o),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var n=this._radius,o=this._radiusY||n,l=this._clickTolerance(),f=[n+l,o+l];this._pxBounds=new ft(this._point.subtract(f),this._point.add(f))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(n){return n.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function ed(n,o){return new Rs(n,o)}var ca=Rs.extend({initialize:function(n,o,l){if(typeof o=="number"&&(o=s({},l,{radius:o})),E(this,o),this._latlng=q(n),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(n){return this._mRadius=n,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var n=[this._radius,this._radiusY||this._radius];return new Vt(this._map.layerPointToLatLng(this._point.subtract(n)),this._map.layerPointToLatLng(this._point.add(n)))},setStyle:gi.prototype.setStyle,_project:function(){var n=this._latlng.lng,o=this._latlng.lat,l=this._map,f=l.options.crs;if(f.distance===Pt.distance){var _=Math.PI/180,b=this._mRadius/Pt.R/_,U=l.project([o+b,n]),X=l.project([o-b,n]),$=U.add(X).divideBy(2),ut=l.unproject($).lat,Nt=Math.acos((Math.cos(b*_)-Math.sin(o*_)*Math.sin(ut*_))/(Math.cos(o*_)*Math.cos(ut*_)))/_;(isNaN(Nt)||Nt===0)&&(Nt=b/Math.cos(Math.PI/180*o)),this._point=$.subtract(l.getPixelOrigin()),this._radius=isNaN(Nt)?0:$.x-l.project([ut,n-Nt]).x,this._radiusY=$.y-U.y}else{var ee=f.unproject(f.project(this._latlng).subtract([this._mRadius,0]));this._point=l.latLngToLayerPoint(this._latlng),this._radius=this._point.x-l.latLngToLayerPoint(ee).x}this._updateBounds()}});function nd(n,o,l){return new ca(n,o,l)}var ei=gi.extend({options:{smoothFactor:1,noClip:!1},initialize:function(n,o){E(this,o),this._setLatLngs(n)},getLatLngs:function(){return this._latlngs},setLatLngs:function(n){return this._setLatLngs(n),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(n){for(var o=1/0,l=null,f=Hr,_,b,U=0,X=this._parts.length;U<X;U++)for(var $=this._parts[U],ut=1,Nt=$.length;ut<Nt;ut++){_=$[ut-1],b=$[ut];var ee=f(n,_,b,!0);ee<o&&(o=ee,l=f(n,_,b))}return l&&(l.distance=Math.sqrt(o)),l},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Gc(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(n,o){return o=o||this._defaultShape(),n=q(n),o.push(n),this._bounds.extend(n),this.redraw()},_setLatLngs:function(n){this._bounds=new Vt,this._latlngs=this._convertLatLngs(n)},_defaultShape:function(){return _n(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(n){for(var o=[],l=_n(n),f=0,_=n.length;f<_;f++)l?(o[f]=q(n[f]),this._bounds.extend(o[f])):o[f]=this._convertLatLngs(n[f]);return o},_project:function(){var n=new ft;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,n),this._bounds.isValid()&&n.isValid()&&(this._rawPxBounds=n,this._updateBounds())},_updateBounds:function(){var n=this._clickTolerance(),o=new J(n,n);this._rawPxBounds&&(this._pxBounds=new ft([this._rawPxBounds.min.subtract(o),this._rawPxBounds.max.add(o)]))},_projectLatlngs:function(n,o,l){var f=n[0]instanceof Zt,_=n.length,b,U;if(f){for(U=[],b=0;b<_;b++)U[b]=this._map.latLngToLayerPoint(n[b]),l.extend(U[b]);o.push(U)}else for(b=0;b<_;b++)this._projectLatlngs(n[b],o,l)},_clipPoints:function(){var n=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}var o=this._parts,l,f,_,b,U,X,$;for(l=0,_=0,b=this._rings.length;l<b;l++)for($=this._rings[l],f=0,U=$.length;f<U-1;f++)X=Hc($[f],$[f+1],n,f,!0),X&&(o[_]=o[_]||[],o[_].push(X[0]),(X[1]!==$[f+1]||f===U-2)&&(o[_].push(X[1]),_++))}},_simplifyPoints:function(){for(var n=this._parts,o=this.options.smoothFactor,l=0,f=n.length;l<f;l++)n[l]=Bc(n[l],o)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(n,o){var l,f,_,b,U,X,$=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(l=0,b=this._parts.length;l<b;l++)for(X=this._parts[l],f=0,U=X.length,_=U-1;f<U;_=f++)if(!(!o&&f===0)&&zc(n,X[_],X[f])<=$)return!0;return!1}});function id(n,o){return new ei(n,o)}ei._flat=Vc;var ir=ei.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Fc(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(n){var o=ei.prototype._convertLatLngs.call(this,n),l=o.length;return l>=2&&o[0]instanceof Zt&&o[0].equals(o[l-1])&&o.pop(),o},_setLatLngs:function(n){ei.prototype._setLatLngs.call(this,n),_n(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return _n(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var n=this._renderer._bounds,o=this.options.weight,l=new J(o,o);if(n=new ft(n.min.subtract(l),n.max.add(l)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}for(var f=0,_=this._rings.length,b;f<_;f++)b=Oc(this._rings[f],n,!0),b.length&&this._parts.push(b)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(n){var o=!1,l,f,_,b,U,X,$,ut;if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(b=0,$=this._parts.length;b<$;b++)for(l=this._parts[b],U=0,ut=l.length,X=ut-1;U<ut;X=U++)f=l[U],_=l[X],f.y>n.y!=_.y>n.y&&n.x<(_.x-f.x)*(n.y-f.y)/(_.y-f.y)+f.x&&(o=!o);return o||ei.prototype._containsPoint.call(this,n,!0)}});function rd(n,o){return new ir(n,o)}var ni=ti.extend({initialize:function(n,o){E(this,o),this._layers={},n&&this.addData(n)},addData:function(n){var o=C(n)?n:n.features,l,f,_;if(o){for(l=0,f=o.length;l<f;l++)_=o[l],(_.geometries||_.geometry||_.features||_.coordinates)&&this.addData(_);return this}var b=this.options;if(b.filter&&!b.filter(n))return this;var U=Ls(n,b);return U?(U.feature=Ns(n),U.defaultOptions=U.options,this.resetStyle(U),b.onEachFeature&&b.onEachFeature(n,U),this.addLayer(U)):this},resetStyle:function(n){return n===void 0?this.eachLayer(this.resetStyle,this):(n.options=s({},n.defaultOptions),this._setLayerStyle(n,this.options.style),this)},setStyle:function(n){return this.eachLayer(function(o){this._setLayerStyle(o,n)},this)},_setLayerStyle:function(n,o){n.setStyle&&(typeof o=="function"&&(o=o(n.feature)),n.setStyle(o))}});function Ls(n,o){var l=n.type==="Feature"?n.geometry:n,f=l?l.coordinates:null,_=[],b=o&&o.pointToLayer,U=o&&o.coordsToLatLng||ha,X,$,ut,Nt;if(!f&&!l)return null;switch(l.type){case"Point":return X=U(f),Zc(b,n,X,o);case"MultiPoint":for(ut=0,Nt=f.length;ut<Nt;ut++)X=U(f[ut]),_.push(Zc(b,n,X,o));return new ti(_);case"LineString":case"MultiLineString":return $=Ds(f,l.type==="LineString"?0:1,U),new ei($,o);case"Polygon":case"MultiPolygon":return $=Ds(f,l.type==="Polygon"?1:2,U),new ir($,o);case"GeometryCollection":for(ut=0,Nt=l.geometries.length;ut<Nt;ut++){var ee=Ls({geometry:l.geometries[ut],type:"Feature",properties:n.properties},o);ee&&_.push(ee)}return new ti(_);case"FeatureCollection":for(ut=0,Nt=l.features.length;ut<Nt;ut++){var de=Ls(l.features[ut],o);de&&_.push(de)}return new ti(_);default:throw new Error("Invalid GeoJSON object.")}}function Zc(n,o,l,f){return n?n(o,l):new Ps(l,f&&f.markersInheritOptions&&f)}function ha(n){return new Zt(n[1],n[0],n[2])}function Ds(n,o,l){for(var f=[],_=0,b=n.length,U;_<b;_++)U=o?Ds(n[_],o-1,l):(l||ha)(n[_]),f.push(U);return f}function ua(n,o){return n=q(n),n.alt!==void 0?[g(n.lng,o),g(n.lat,o),g(n.alt,o)]:[g(n.lng,o),g(n.lat,o)]}function Is(n,o,l,f){for(var _=[],b=0,U=n.length;b<U;b++)_.push(o?Is(n[b],_n(n[b])?0:o-1,l,f):ua(n[b],f));return!o&&l&&_.length>0&&_.push(_[0].slice()),_}function rr(n,o){return n.feature?s({},n.feature,{geometry:o}):Ns(o)}function Ns(n){return n.type==="Feature"||n.type==="FeatureCollection"?n:{type:"Feature",properties:{},geometry:n}}var fa={toGeoJSON:function(n){return rr(this,{type:"Point",coordinates:ua(this.getLatLng(),n)})}};Ps.include(fa),ca.include(fa),Rs.include(fa),ei.include({toGeoJSON:function(n){var o=!_n(this._latlngs),l=Is(this._latlngs,o?1:0,!1,n);return rr(this,{type:(o?"Multi":"")+"LineString",coordinates:l})}}),ir.include({toGeoJSON:function(n){var o=!_n(this._latlngs),l=o&&!_n(this._latlngs[0]),f=Is(this._latlngs,l?2:o?1:0,!0,n);return o||(f=[f]),rr(this,{type:(l?"Multi":"")+"Polygon",coordinates:f})}}),er.include({toMultiPoint:function(n){var o=[];return this.eachLayer(function(l){o.push(l.toGeoJSON(n).geometry.coordinates)}),rr(this,{type:"MultiPoint",coordinates:o})},toGeoJSON:function(n){var o=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(o==="MultiPoint")return this.toMultiPoint(n);var l=o==="GeometryCollection",f=[];return this.eachLayer(function(_){if(_.toGeoJSON){var b=_.toGeoJSON(n);if(l)f.push(b.geometry);else{var U=Ns(b);U.type==="FeatureCollection"?f.push.apply(f,U.features):f.push(U)}}}),l?rr(this,{geometries:f,type:"GeometryCollection"}):{type:"FeatureCollection",features:f}}});function qc(n,o){return new ni(n,o)}var sd=qc,Us=Cn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(n,o,l){this._url=n,this._bounds=Qt(o),E(this,l)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Ht(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Dt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(n){return this.options.opacity=n,this._image&&this._updateOpacity(),this},setStyle:function(n){return n.opacity&&this.setOpacity(n.opacity),this},bringToFront:function(){return this._map&&se(this._image),this},bringToBack:function(){return this._map&&pe(this._image),this},setUrl:function(n){return this._url=n,this._image&&(this._image.src=n),this},setBounds:function(n){return this._bounds=Qt(n),this._map&&this._reset(),this},getEvents:function(){var n={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var n=this._url.tagName==="IMG",o=this._image=n?this._url:_t("img");if(Ht(o,"leaflet-image-layer"),this._zoomAnimated&&Ht(o,"leaflet-zoom-animated"),this.options.className&&Ht(o,this.options.className),o.onselectstart=m,o.onmousemove=m,o.onload=c(this.fire,this,"load"),o.onerror=c(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(o.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),n){this._url=o.src;return}o.src=this._url,o.alt=this.options.alt},_animateZoom:function(n){var o=this._map.getZoomScale(n.zoom),l=this._map._latLngBoundsToNewLayerBounds(this._bounds,n.zoom,n.center).min;De(this._image,l,o)},_reset:function(){var n=this._image,o=new ft(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),l=o.getSize();Ce(n,o.min),n.style.width=l.x+"px",n.style.height=l.y+"px"},_updateOpacity:function(){oe(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var n=this.options.errorOverlayUrl;n&&this._url!==n&&(this._url=n,this._image.src=n)},getCenter:function(){return this._bounds.getCenter()}}),od=function(n,o,l){return new Us(n,o,l)},Yc=Us.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var n=this._url.tagName==="VIDEO",o=this._image=n?this._url:_t("video");if(Ht(o,"leaflet-image-layer"),this._zoomAnimated&&Ht(o,"leaflet-zoom-animated"),this.options.className&&Ht(o,this.options.className),o.onselectstart=m,o.onmousemove=m,o.onloadeddata=c(this.fire,this,"load"),n){for(var l=o.getElementsByTagName("source"),f=[],_=0;_<l.length;_++)f.push(l[_].src);this._url=l.length>0?f:[o.src];return}C(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(o.style,"objectFit")&&(o.style.objectFit="fill"),o.autoplay=!!this.options.autoplay,o.loop=!!this.options.loop,o.muted=!!this.options.muted,o.playsInline=!!this.options.playsInline;for(var b=0;b<this._url.length;b++){var U=_t("source");U.src=this._url[b],o.appendChild(U)}}});function ad(n,o,l){return new Yc(n,o,l)}var Jc=Us.extend({_initImage:function(){var n=this._image=this._url;Ht(n,"leaflet-image-layer"),this._zoomAnimated&&Ht(n,"leaflet-zoom-animated"),this.options.className&&Ht(n,this.options.className),n.onselectstart=m,n.onmousemove=m}});function ld(n,o,l){return new Jc(n,o,l)}var zn=Cn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(n,o){n&&(n instanceof Zt||C(n))?(this._latlng=q(n),E(this,o)):(E(this,n),this._source=o),this.options.content&&(this._content=this.options.content)},openOn:function(n){return n=arguments.length?n:this._source._map,n.hasLayer(this)||n.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(n){return this._map?this.close():(arguments.length?this._source=n:n=this._source,this._prepareOpen(),this.openOn(n._map)),this},onAdd:function(n){this._zoomAnimated=n._zoomAnimated,this._container||this._initLayout(),n._fadeAnimated&&oe(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),n._fadeAnimated&&oe(this._container,1),this.bringToFront(),this.options.interactive&&(Ht(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(n){n._fadeAnimated?(oe(this._container,0),this._removeTimeout=setTimeout(c(Dt,void 0,this._container),200)):Dt(this._container),this.options.interactive&&(te(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(n){return this._latlng=q(n),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(n){return this._content=n,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var n={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&se(this._container),this},bringToBack:function(){return this._map&&pe(this._container),this},_prepareOpen:function(n){var o=this._source;if(!o._map)return!1;if(o instanceof ti){o=null;var l=this._source._layers;for(var f in l)if(l[f]._map){o=l[f];break}if(!o)return!1;this._source=o}if(!n)if(o.getCenter)n=o.getCenter();else if(o.getLatLng)n=o.getLatLng();else if(o.getBounds)n=o.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(n),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var n=this._contentNode,o=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof o=="string")n.innerHTML=o;else{for(;n.hasChildNodes();)n.removeChild(n.firstChild);n.appendChild(o)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var n=this._map.latLngToLayerPoint(this._latlng),o=rt(this.options.offset),l=this._getAnchor();this._zoomAnimated?Ce(this._container,n.add(l)):o=o.add(n).add(l);var f=this._containerBottom=-o.y,_=this._containerLeft=-Math.round(this._containerWidth/2)+o.x;this._container.style.bottom=f+"px",this._container.style.left=_+"px"}},_getAnchor:function(){return[0,0]}});ve.include({_initOverlay:function(n,o,l,f){var _=o;return _ instanceof n||(_=new n(f).setContent(o)),l&&_.setLatLng(l),_}}),Cn.include({_initOverlay:function(n,o,l,f){var _=l;return _ instanceof n?(E(_,f),_._source=this):(_=o&&!f?o:new n(f,this),_.setContent(l)),_}});var Os=zn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(n){return n=arguments.length?n:this._source._map,!n.hasLayer(this)&&n._popup&&n._popup.options.autoClose&&n.removeLayer(n._popup),n._popup=this,zn.prototype.openOn.call(this,n)},onAdd:function(n){zn.prototype.onAdd.call(this,n),n.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof gi||this._source.on("preclick",Ii))},onRemove:function(n){zn.prototype.onRemove.call(this,n),n.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof gi||this._source.off("preclick",Ii))},getEvents:function(){var n=zn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(n.preclick=this.close),this.options.keepInView&&(n.moveend=this._adjustPan),n},_initLayout:function(){var n="leaflet-popup",o=this._container=_t("div",n+" "+(this.options.className||"")+" leaflet-zoom-animated"),l=this._wrapper=_t("div",n+"-content-wrapper",o);if(this._contentNode=_t("div",n+"-content",l),zr(o),ea(this._contentNode),le(o,"contextmenu",Ii),this._tipContainer=_t("div",n+"-tip-container",o),this._tip=_t("div",n+"-tip",this._tipContainer),this.options.closeButton){var f=this._closeButton=_t("a",n+"-close-button",o);f.setAttribute("role","button"),f.setAttribute("aria-label","Close popup"),f.href="#close",f.innerHTML='<span aria-hidden="true">&#215;</span>',le(f,"click",function(_){We(_),this.close()},this)}},_updateLayout:function(){var n=this._contentNode,o=n.style;o.width="",o.whiteSpace="nowrap";var l=n.offsetWidth;l=Math.min(l,this.options.maxWidth),l=Math.max(l,this.options.minWidth),o.width=l+1+"px",o.whiteSpace="",o.height="";var f=n.offsetHeight,_=this.options.maxHeight,b="leaflet-popup-scrolled";_&&f>_?(o.height=_+"px",Ht(n,b)):te(n,b),this._containerWidth=this._container.offsetWidth},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center),l=this._getAnchor();Ce(this._container,o.add(l))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var n=this._map,o=parseInt(Ft(this._container,"marginBottom"),10)||0,l=this._container.offsetHeight+o,f=this._containerWidth,_=new J(this._containerLeft,-l-this._containerBottom);_._add(ge(this._container));var b=n.layerPointToContainerPoint(_),U=rt(this.options.autoPanPadding),X=rt(this.options.autoPanPaddingTopLeft||U),$=rt(this.options.autoPanPaddingBottomRight||U),ut=n.getSize(),Nt=0,ee=0;b.x+f+$.x>ut.x&&(Nt=b.x+f-ut.x+$.x),b.x-Nt-X.x<0&&(Nt=b.x-X.x),b.y+l+$.y>ut.y&&(ee=b.y+l-ut.y+$.y),b.y-ee-X.y<0&&(ee=b.y-X.y),(Nt||ee)&&(this.options.keepInView&&(this._autopanning=!0),n.fire("autopanstart").panBy([Nt,ee]))}},_getAnchor:function(){return rt(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),cd=function(n,o){return new Os(n,o)};ve.mergeOptions({closePopupOnClick:!0}),ve.include({openPopup:function(n,o,l){return this._initOverlay(Os,n,o,l).openOn(this),this},closePopup:function(n){return n=arguments.length?n:this._popup,n&&n.close(),this}}),Cn.include({bindPopup:function(n,o){return this._popup=this._initOverlay(Os,this._popup,n,o),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(n){return this._popup&&(this instanceof ti||(this._popup._source=this),this._popup._prepareOpen(n||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(n){return this._popup&&this._popup.setContent(n),this},getPopup:function(){return this._popup},_openPopup:function(n){if(!(!this._popup||!this._map)){Ni(n);var o=n.layer||n.target;if(this._popup._source===o&&!(o instanceof gi)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(n.latlng);return}this._popup._source=o,this.openPopup(n.latlng)}},_movePopup:function(n){this._popup.setLatLng(n.latlng)},_onKeyPress:function(n){n.originalEvent.keyCode===13&&this._openPopup(n)}});var Fs=zn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(n){zn.prototype.onAdd.call(this,n),this.setOpacity(this.options.opacity),n.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(n){zn.prototype.onRemove.call(this,n),n.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var n=zn.prototype.getEvents.call(this);return this.options.permanent||(n.preclick=this.close),n},_initLayout:function(){var n="leaflet-tooltip",o=n+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=_t("div",o),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+u(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(n){var o,l,f=this._map,_=this._container,b=f.latLngToContainerPoint(f.getCenter()),U=f.layerPointToContainerPoint(n),X=this.options.direction,$=_.offsetWidth,ut=_.offsetHeight,Nt=rt(this.options.offset),ee=this._getAnchor();X==="top"?(o=$/2,l=ut):X==="bottom"?(o=$/2,l=0):X==="center"?(o=$/2,l=ut/2):X==="right"?(o=0,l=ut/2):X==="left"?(o=$,l=ut/2):U.x<b.x?(X="right",o=0,l=ut/2):(X="left",o=$+(Nt.x+ee.x)*2,l=ut/2),n=n.subtract(rt(o,l,!0)).add(Nt).add(ee),te(_,"leaflet-tooltip-right"),te(_,"leaflet-tooltip-left"),te(_,"leaflet-tooltip-top"),te(_,"leaflet-tooltip-bottom"),Ht(_,"leaflet-tooltip-"+X),Ce(_,n)},_updatePosition:function(){var n=this._map.latLngToLayerPoint(this._latlng);this._setPosition(n)},setOpacity:function(n){this.options.opacity=n,this._container&&oe(this._container,n)},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center);this._setPosition(o)},_getAnchor:function(){return rt(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),hd=function(n,o){return new Fs(n,o)};ve.include({openTooltip:function(n,o,l){return this._initOverlay(Fs,n,o,l).openOn(this),this},closeTooltip:function(n){return n.close(),this}}),Cn.include({bindTooltip:function(n,o){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Fs,this._tooltip,n,o),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(n){if(!(!n&&this._tooltipHandlersAdded)){var o=n?"off":"on",l={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?l.add=this._openTooltip:(l.mouseover=this._openTooltip,l.mouseout=this.closeTooltip,l.click=this._openTooltip,this._map?this._addFocusListeners():l.add=this._addFocusListeners),this._tooltip.options.sticky&&(l.mousemove=this._moveTooltip),this[o](l),this._tooltipHandlersAdded=!n}},openTooltip:function(n){return this._tooltip&&(this instanceof ti||(this._tooltip._source=this),this._tooltip._prepareOpen(n)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(n){return this._tooltip&&this._tooltip.setContent(n),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(n){var o=typeof n.getElement=="function"&&n.getElement();o&&(le(o,"focus",function(){this._tooltip._source=n,this.openTooltip()},this),le(o,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(n){var o=typeof n.getElement=="function"&&n.getElement();o&&o.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(n){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var o=this;this._map.once("moveend",function(){o._openOnceFlag=!1,o._openTooltip(n)});return}this._tooltip._source=n.layer||n.target,this.openTooltip(this._tooltip.options.sticky?n.latlng:void 0)}},_moveTooltip:function(n){var o=n.latlng,l,f;this._tooltip.options.sticky&&n.originalEvent&&(l=this._map.mouseEventToContainerPoint(n.originalEvent),f=this._map.containerPointToLayerPoint(l),o=this._map.layerPointToLatLng(f)),this._tooltip.setLatLng(o)}});var Kc=nr.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(n){var o=n&&n.tagName==="DIV"?n:document.createElement("div"),l=this.options;if(l.html instanceof Element?(qt(o),o.appendChild(l.html)):o.innerHTML=l.html!==!1?l.html:"",l.bgPos){var f=rt(l.bgPos);o.style.backgroundPosition=-f.x+"px "+-f.y+"px"}return this._setIconStyles(o,"icon"),o},createShadow:function(){return null}});function ud(n){return new Kc(n)}nr.Default=Vr;var Gr=Cn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:Wt.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(n){E(this,n)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(n){n._addZoomLimit(this)},onRemove:function(n){this._removeAllTiles(),Dt(this._container),n._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(se(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(pe(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(n){return this.options.opacity=n,this._updateOpacity(),this},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var n=this._clampZoom(this._map.getZoom());n!==this._tileZoom&&(this._tileZoom=n,this._updateLevels()),this._update()}return this},getEvents:function(){var n={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=d(this._onMoveEnd,this.options.updateInterval,this)),n.move=this._onMove),this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},createTile:function(){return document.createElement("div")},getTileSize:function(){var n=this.options.tileSize;return n instanceof J?n:new J(n,n)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(n){for(var o=this.getPane().children,l=-n(-1/0,1/0),f=0,_=o.length,b;f<_;f++)b=o[f].style.zIndex,o[f]!==this._container&&b&&(l=n(l,+b));isFinite(l)&&(this.options.zIndex=l+n(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Wt.ielt9){oe(this._container,this.options.opacity);var n=+new Date,o=!1,l=!1;for(var f in this._tiles){var _=this._tiles[f];if(!(!_.current||!_.loaded)){var b=Math.min(1,(n-_.loaded)/200);oe(_.el,b),b<1?o=!0:(_.active?l=!0:this._onOpaqueTile(_),_.active=!0)}}l&&!this._noPrune&&this._pruneTiles(),o&&(Y(this._fadeFrame),this._fadeFrame=F(this._updateOpacity,this))}},_onOpaqueTile:m,_initContainer:function(){this._container||(this._container=_t("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var n=this._tileZoom,o=this.options.maxZoom;if(n!==void 0){for(var l in this._levels)l=Number(l),this._levels[l].el.children.length||l===n?(this._levels[l].el.style.zIndex=o-Math.abs(n-l),this._onUpdateLevel(l)):(Dt(this._levels[l].el),this._removeTilesAtZoom(l),this._onRemoveLevel(l),delete this._levels[l]);var f=this._levels[n],_=this._map;return f||(f=this._levels[n]={},f.el=_t("div","leaflet-tile-container leaflet-zoom-animated",this._container),f.el.style.zIndex=o,f.origin=_.project(_.unproject(_.getPixelOrigin()),n).round(),f.zoom=n,this._setZoomTransform(f,_.getCenter(),_.getZoom()),m(f.el.offsetWidth),this._onCreateLevel(f)),this._level=f,f}},_onUpdateLevel:m,_onRemoveLevel:m,_onCreateLevel:m,_pruneTiles:function(){if(this._map){var n,o,l=this._map.getZoom();if(l>this.options.maxZoom||l<this.options.minZoom){this._removeAllTiles();return}for(n in this._tiles)o=this._tiles[n],o.retain=o.current;for(n in this._tiles)if(o=this._tiles[n],o.current&&!o.active){var f=o.coords;this._retainParent(f.x,f.y,f.z,f.z-5)||this._retainChildren(f.x,f.y,f.z,f.z+2)}for(n in this._tiles)this._tiles[n].retain||this._removeTile(n)}},_removeTilesAtZoom:function(n){for(var o in this._tiles)this._tiles[o].coords.z===n&&this._removeTile(o)},_removeAllTiles:function(){for(var n in this._tiles)this._removeTile(n)},_invalidateAll:function(){for(var n in this._levels)Dt(this._levels[n].el),this._onRemoveLevel(Number(n)),delete this._levels[n];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(n,o,l,f){var _=Math.floor(n/2),b=Math.floor(o/2),U=l-1,X=new J(+_,+b);X.z=+U;var $=this._tileCoordsToKey(X),ut=this._tiles[$];return ut&&ut.active?(ut.retain=!0,!0):(ut&&ut.loaded&&(ut.retain=!0),U>f?this._retainParent(_,b,U,f):!1)},_retainChildren:function(n,o,l,f){for(var _=2*n;_<2*n+2;_++)for(var b=2*o;b<2*o+2;b++){var U=new J(_,b);U.z=l+1;var X=this._tileCoordsToKey(U),$=this._tiles[X];if($&&$.active){$.retain=!0;continue}else $&&$.loaded&&($.retain=!0);l+1<f&&this._retainChildren(_,b,l+1,f)}},_resetView:function(n){var o=n&&(n.pinch||n.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),o,o)},_animateZoom:function(n){this._setView(n.center,n.zoom,!0,n.noUpdate)},_clampZoom:function(n){var o=this.options;return o.minNativeZoom!==void 0&&n<o.minNativeZoom?o.minNativeZoom:o.maxNativeZoom!==void 0&&o.maxNativeZoom<n?o.maxNativeZoom:n},_setView:function(n,o,l,f){var _=Math.round(o);this.options.maxZoom!==void 0&&_>this.options.maxZoom||this.options.minZoom!==void 0&&_<this.options.minZoom?_=void 0:_=this._clampZoom(_);var b=this.options.updateWhenZooming&&_!==this._tileZoom;(!f||b)&&(this._tileZoom=_,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),_!==void 0&&this._update(n),l||this._pruneTiles(),this._noPrune=!!l),this._setZoomTransforms(n,o)},_setZoomTransforms:function(n,o){for(var l in this._levels)this._setZoomTransform(this._levels[l],n,o)},_setZoomTransform:function(n,o,l){var f=this._map.getZoomScale(l,n.zoom),_=n.origin.multiplyBy(f).subtract(this._map._getNewPixelOrigin(o,l)).round();Wt.any3d?De(n.el,_,f):Ce(n.el,_)},_resetGrid:function(){var n=this._map,o=n.options.crs,l=this._tileSize=this.getTileSize(),f=this._tileZoom,_=this._map.getPixelWorldBounds(this._tileZoom);_&&(this._globalTileRange=this._pxBoundsToTileRange(_)),this._wrapX=o.wrapLng&&!this.options.noWrap&&[Math.floor(n.project([0,o.wrapLng[0]],f).x/l.x),Math.ceil(n.project([0,o.wrapLng[1]],f).x/l.y)],this._wrapY=o.wrapLat&&!this.options.noWrap&&[Math.floor(n.project([o.wrapLat[0],0],f).y/l.x),Math.ceil(n.project([o.wrapLat[1],0],f).y/l.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(n){var o=this._map,l=o._animatingZoom?Math.max(o._animateToZoom,o.getZoom()):o.getZoom(),f=o.getZoomScale(l,this._tileZoom),_=o.project(n,this._tileZoom).floor(),b=o.getSize().divideBy(f*2);return new ft(_.subtract(b),_.add(b))},_update:function(n){var o=this._map;if(o){var l=this._clampZoom(o.getZoom());if(n===void 0&&(n=o.getCenter()),this._tileZoom!==void 0){var f=this._getTiledPixelBounds(n),_=this._pxBoundsToTileRange(f),b=_.getCenter(),U=[],X=this.options.keepBuffer,$=new ft(_.getBottomLeft().subtract([X,-X]),_.getTopRight().add([X,-X]));if(!(isFinite(_.min.x)&&isFinite(_.min.y)&&isFinite(_.max.x)&&isFinite(_.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var ut in this._tiles){var Nt=this._tiles[ut].coords;(Nt.z!==this._tileZoom||!$.contains(new J(Nt.x,Nt.y)))&&(this._tiles[ut].current=!1)}if(Math.abs(l-this._tileZoom)>1){this._setView(n,l);return}for(var ee=_.min.y;ee<=_.max.y;ee++)for(var de=_.min.x;de<=_.max.x;de++){var tn=new J(de,ee);if(tn.z=this._tileZoom,!!this._isValidTile(tn)){var Ve=this._tiles[this._tileCoordsToKey(tn)];Ve?Ve.current=!0:U.push(tn)}}if(U.sort(function(ln,or){return ln.distanceTo(b)-or.distanceTo(b)}),U.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var gn=document.createDocumentFragment();for(de=0;de<U.length;de++)this._addTile(U[de],gn);this._level.el.appendChild(gn)}}}},_isValidTile:function(n){var o=this._map.options.crs;if(!o.infinite){var l=this._globalTileRange;if(!o.wrapLng&&(n.x<l.min.x||n.x>l.max.x)||!o.wrapLat&&(n.y<l.min.y||n.y>l.max.y))return!1}if(!this.options.bounds)return!0;var f=this._tileCoordsToBounds(n);return Qt(this.options.bounds).overlaps(f)},_keyToBounds:function(n){return this._tileCoordsToBounds(this._keyToTileCoords(n))},_tileCoordsToNwSe:function(n){var o=this._map,l=this.getTileSize(),f=n.scaleBy(l),_=f.add(l),b=o.unproject(f,n.z),U=o.unproject(_,n.z);return[b,U]},_tileCoordsToBounds:function(n){var o=this._tileCoordsToNwSe(n),l=new Vt(o[0],o[1]);return this.options.noWrap||(l=this._map.wrapLatLngBounds(l)),l},_tileCoordsToKey:function(n){return n.x+":"+n.y+":"+n.z},_keyToTileCoords:function(n){var o=n.split(":"),l=new J(+o[0],+o[1]);return l.z=+o[2],l},_removeTile:function(n){var o=this._tiles[n];o&&(Dt(o.el),delete this._tiles[n],this.fire("tileunload",{tile:o.el,coords:this._keyToTileCoords(n)}))},_initTile:function(n){Ht(n,"leaflet-tile");var o=this.getTileSize();n.style.width=o.x+"px",n.style.height=o.y+"px",n.onselectstart=m,n.onmousemove=m,Wt.ielt9&&this.options.opacity<1&&oe(n,this.options.opacity)},_addTile:function(n,o){var l=this._getTilePos(n),f=this._tileCoordsToKey(n),_=this.createTile(this._wrapCoords(n),c(this._tileReady,this,n));this._initTile(_),this.createTile.length<2&&F(c(this._tileReady,this,n,null,_)),Ce(_,l),this._tiles[f]={el:_,coords:n,current:!0},o.appendChild(_),this.fire("tileloadstart",{tile:_,coords:n})},_tileReady:function(n,o,l){o&&this.fire("tileerror",{error:o,tile:l,coords:n});var f=this._tileCoordsToKey(n);l=this._tiles[f],l&&(l.loaded=+new Date,this._map._fadeAnimated?(oe(l.el,0),Y(this._fadeFrame),this._fadeFrame=F(this._updateOpacity,this)):(l.active=!0,this._pruneTiles()),o||(Ht(l.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:l.el,coords:n})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Wt.ielt9||!this._map._fadeAnimated?F(this._pruneTiles,this):setTimeout(c(this._pruneTiles,this),250)))},_getTilePos:function(n){return n.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(n){var o=new J(this._wrapX?p(n.x,this._wrapX):n.x,this._wrapY?p(n.y,this._wrapY):n.y);return o.z=n.z,o},_pxBoundsToTileRange:function(n){var o=this.getTileSize();return new ft(n.min.unscaleBy(o).floor(),n.max.unscaleBy(o).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var n in this._tiles)if(!this._tiles[n].loaded)return!1;return!0}});function fd(n){return new Gr(n)}var sr=Gr.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(n,o){this._url=n,o=E(this,o),o.detectRetina&&Wt.retina&&o.maxZoom>0?(o.tileSize=Math.floor(o.tileSize/2),o.zoomReverse?(o.zoomOffset--,o.minZoom=Math.min(o.maxZoom,o.minZoom+1)):(o.zoomOffset++,o.maxZoom=Math.max(o.minZoom,o.maxZoom-1)),o.minZoom=Math.max(0,o.minZoom)):o.zoomReverse?o.minZoom=Math.min(o.maxZoom,o.minZoom):o.maxZoom=Math.max(o.minZoom,o.maxZoom),typeof o.subdomains=="string"&&(o.subdomains=o.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(n,o){return this._url===n&&o===void 0&&(o=!0),this._url=n,o||this.redraw(),this},createTile:function(n,o){var l=document.createElement("img");return le(l,"load",c(this._tileOnLoad,this,o,l)),le(l,"error",c(this._tileOnError,this,o,l)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(l.referrerPolicy=this.options.referrerPolicy),l.alt="",l.src=this.getTileUrl(n),l},getTileUrl:function(n){var o={r:Wt.retina?"@2x":"",s:this._getSubdomain(n),x:n.x,y:n.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var l=this._globalTileRange.max.y-n.y;this.options.tms&&(o.y=l),o["-y"]=l}return D(this._url,s(o,this.options))},_tileOnLoad:function(n,o){Wt.ielt9?setTimeout(c(n,this,null,o),0):n(null,o)},_tileOnError:function(n,o,l){var f=this.options.errorTileUrl;f&&o.getAttribute("src")!==f&&(o.src=f),n(l,o)},_onTileRemove:function(n){n.tile.onload=null},_getZoomForUrl:function(){var n=this._tileZoom,o=this.options.maxZoom,l=this.options.zoomReverse,f=this.options.zoomOffset;return l&&(n=o-n),n+f},_getSubdomain:function(n){var o=Math.abs(n.x+n.y)%this.options.subdomains.length;return this.options.subdomains[o]},_abortLoading:function(){var n,o;for(n in this._tiles)if(this._tiles[n].coords.z!==this._tileZoom&&(o=this._tiles[n].el,o.onload=m,o.onerror=m,!o.complete)){o.src=N;var l=this._tiles[n].coords;Dt(o),delete this._tiles[n],this.fire("tileabort",{tile:o,coords:l})}},_removeTile:function(n){var o=this._tiles[n];if(o)return o.el.setAttribute("src",N),Gr.prototype._removeTile.call(this,n)},_tileReady:function(n,o,l){if(!(!this._map||l&&l.getAttribute("src")===N))return Gr.prototype._tileReady.call(this,n,o,l)}});function jc(n,o){return new sr(n,o)}var $c=sr.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(n,o){this._url=n;var l=s({},this.defaultWmsParams);for(var f in o)f in this.options||(l[f]=o[f]);o=E(this,o);var _=o.detectRetina&&Wt.retina?2:1,b=this.getTileSize();l.width=b.x*_,l.height=b.y*_,this.wmsParams=l},onAdd:function(n){this._crs=this.options.crs||n.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var o=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[o]=this._crs.code,sr.prototype.onAdd.call(this,n)},getTileUrl:function(n){var o=this._tileCoordsToNwSe(n),l=this._crs,f=Xt(l.project(o[0]),l.project(o[1])),_=f.min,b=f.max,U=(this._wmsVersion>=1.3&&this._crs===Wc?[_.y,_.x,b.y,b.x]:[_.x,_.y,b.x,b.y]).join(","),X=sr.prototype.getTileUrl.call(this,n);return X+y(this.wmsParams,X,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+U},setParams:function(n,o){return s(this.wmsParams,n),o||this.redraw(),this}});function dd(n,o){return new $c(n,o)}sr.WMS=$c,jc.wms=dd;var ii=Cn.extend({options:{padding:.1},initialize:function(n){E(this,n),u(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Ht(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var n={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(n.zoomanim=this._onAnimZoom),n},_onAnimZoom:function(n){this._updateTransform(n.center,n.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(n,o){var l=this._map.getZoomScale(o,this._zoom),f=this._map.getSize().multiplyBy(.5+this.options.padding),_=this._map.project(this._center,o),b=f.multiplyBy(-l).add(_).subtract(this._map._getNewPixelOrigin(n,o));Wt.any3d?De(this._container,b,l):Ce(this._container,b)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var n in this._layers)this._layers[n]._reset()},_onZoomEnd:function(){for(var n in this._layers)this._layers[n]._project()},_updatePaths:function(){for(var n in this._layers)this._layers[n]._update()},_update:function(){var n=this.options.padding,o=this._map.getSize(),l=this._map.containerPointToLayerPoint(o.multiplyBy(-n)).round();this._bounds=new ft(l,l.add(o.multiplyBy(1+n*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Qc=ii.extend({options:{tolerance:0},getEvents:function(){var n=ii.prototype.getEvents.call(this);return n.viewprereset=this._onViewPreReset,n},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){ii.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var n=this._container=document.createElement("canvas");le(n,"mousemove",this._onMouseMove,this),le(n,"click dblclick mousedown mouseup contextmenu",this._onClick,this),le(n,"mouseout",this._handleMouseOut,this),n._leaflet_disable_events=!0,this._ctx=n.getContext("2d")},_destroyContainer:function(){Y(this._redrawRequest),delete this._ctx,Dt(this._container),Pe(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var n;this._redrawBounds=null;for(var o in this._layers)n=this._layers[o],n._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){ii.prototype._update.call(this);var n=this._bounds,o=this._container,l=n.getSize(),f=Wt.retina?2:1;Ce(o,n.min),o.width=f*l.x,o.height=f*l.y,o.style.width=l.x+"px",o.style.height=l.y+"px",Wt.retina&&this._ctx.scale(2,2),this._ctx.translate(-n.min.x,-n.min.y),this.fire("update")}},_reset:function(){ii.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(n){this._updateDashArray(n),this._layers[u(n)]=n;var o=n._order={layer:n,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=o),this._drawLast=o,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(n){this._requestRedraw(n)},_removePath:function(n){var o=n._order,l=o.next,f=o.prev;l?l.prev=f:this._drawLast=f,f?f.next=l:this._drawFirst=l,delete n._order,delete this._layers[u(n)],this._requestRedraw(n)},_updatePath:function(n){this._extendRedrawBounds(n),n._project(),n._update(),this._requestRedraw(n)},_updateStyle:function(n){this._updateDashArray(n),this._requestRedraw(n)},_updateDashArray:function(n){if(typeof n.options.dashArray=="string"){var o=n.options.dashArray.split(/[, ]+/),l=[],f,_;for(_=0;_<o.length;_++){if(f=Number(o[_]),isNaN(f))return;l.push(f)}n.options._dashArray=l}else n.options._dashArray=n.options.dashArray},_requestRedraw:function(n){this._map&&(this._extendRedrawBounds(n),this._redrawRequest=this._redrawRequest||F(this._redraw,this))},_extendRedrawBounds:function(n){if(n._pxBounds){var o=(n.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new ft,this._redrawBounds.extend(n._pxBounds.min.subtract([o,o])),this._redrawBounds.extend(n._pxBounds.max.add([o,o]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var n=this._redrawBounds;if(n){var o=n.getSize();this._ctx.clearRect(n.min.x,n.min.y,o.x,o.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var n,o=this._redrawBounds;if(this._ctx.save(),o){var l=o.getSize();this._ctx.beginPath(),this._ctx.rect(o.min.x,o.min.y,l.x,l.y),this._ctx.clip()}this._drawing=!0;for(var f=this._drawFirst;f;f=f.next)n=f.layer,(!o||n._pxBounds&&n._pxBounds.intersects(o))&&n._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(n,o){if(this._drawing){var l,f,_,b,U=n._parts,X=U.length,$=this._ctx;if(X){for($.beginPath(),l=0;l<X;l++){for(f=0,_=U[l].length;f<_;f++)b=U[l][f],$[f?"lineTo":"moveTo"](b.x,b.y);o&&$.closePath()}this._fillStroke($,n)}}},_updateCircle:function(n){if(!(!this._drawing||n._empty())){var o=n._point,l=this._ctx,f=Math.max(Math.round(n._radius),1),_=(Math.max(Math.round(n._radiusY),1)||f)/f;_!==1&&(l.save(),l.scale(1,_)),l.beginPath(),l.arc(o.x,o.y/_,f,0,Math.PI*2,!1),_!==1&&l.restore(),this._fillStroke(l,n)}},_fillStroke:function(n,o){var l=o.options;l.fill&&(n.globalAlpha=l.fillOpacity,n.fillStyle=l.fillColor||l.color,n.fill(l.fillRule||"evenodd")),l.stroke&&l.weight!==0&&(n.setLineDash&&n.setLineDash(o.options&&o.options._dashArray||[]),n.globalAlpha=l.opacity,n.lineWidth=l.weight,n.strokeStyle=l.color,n.lineCap=l.lineCap,n.lineJoin=l.lineJoin,n.stroke())},_onClick:function(n){for(var o=this._map.mouseEventToLayerPoint(n),l,f,_=this._drawFirst;_;_=_.next)l=_.layer,l.options.interactive&&l._containsPoint(o)&&(!(n.type==="click"||n.type==="preclick")||!this._map._draggableMoved(l))&&(f=l);this._fireEvent(f?[f]:!1,n)},_onMouseMove:function(n){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var o=this._map.mouseEventToLayerPoint(n);this._handleMouseHover(n,o)}},_handleMouseOut:function(n){var o=this._hoveredLayer;o&&(te(this._container,"leaflet-interactive"),this._fireEvent([o],n,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(n,o){if(!this._mouseHoverThrottled){for(var l,f,_=this._drawFirst;_;_=_.next)l=_.layer,l.options.interactive&&l._containsPoint(o)&&(f=l);f!==this._hoveredLayer&&(this._handleMouseOut(n),f&&(Ht(this._container,"leaflet-interactive"),this._fireEvent([f],n,"mouseover"),this._hoveredLayer=f)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,n),this._mouseHoverThrottled=!0,setTimeout(c(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(n,o,l){this._map._fireDOMEvent(o,l||o.type,n)},_bringToFront:function(n){var o=n._order;if(o){var l=o.next,f=o.prev;if(l)l.prev=f;else return;f?f.next=l:l&&(this._drawFirst=l),o.prev=this._drawLast,this._drawLast.next=o,o.next=null,this._drawLast=o,this._requestRedraw(n)}},_bringToBack:function(n){var o=n._order;if(o){var l=o.next,f=o.prev;if(f)f.next=l;else return;l?l.prev=f:f&&(this._drawLast=f),o.prev=null,o.next=this._drawFirst,this._drawFirst.prev=o,this._drawFirst=o,this._requestRedraw(n)}}});function th(n){return Wt.canvas?new Qc(n):null}var Wr=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(n){return document.createElement("<lvml:"+n+' class="lvml">')}}catch{}return function(n){return document.createElement("<"+n+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),pd={_initContainer:function(){this._container=_t("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(ii.prototype._update.call(this),this.fire("update"))},_initPath:function(n){var o=n._container=Wr("shape");Ht(o,"leaflet-vml-shape "+(this.options.className||"")),o.coordsize="1 1",n._path=Wr("path"),o.appendChild(n._path),this._updateStyle(n),this._layers[u(n)]=n},_addPath:function(n){var o=n._container;this._container.appendChild(o),n.options.interactive&&n.addInteractiveTarget(o)},_removePath:function(n){var o=n._container;Dt(o),n.removeInteractiveTarget(o),delete this._layers[u(n)]},_updateStyle:function(n){var o=n._stroke,l=n._fill,f=n.options,_=n._container;_.stroked=!!f.stroke,_.filled=!!f.fill,f.stroke?(o||(o=n._stroke=Wr("stroke")),_.appendChild(o),o.weight=f.weight+"px",o.color=f.color,o.opacity=f.opacity,f.dashArray?o.dashStyle=C(f.dashArray)?f.dashArray.join(" "):f.dashArray.replace(/( *, *)/g," "):o.dashStyle="",o.endcap=f.lineCap.replace("butt","flat"),o.joinstyle=f.lineJoin):o&&(_.removeChild(o),n._stroke=null),f.fill?(l||(l=n._fill=Wr("fill")),_.appendChild(l),l.color=f.fillColor||f.color,l.opacity=f.fillOpacity):l&&(_.removeChild(l),n._fill=null)},_updateCircle:function(n){var o=n._point.round(),l=Math.round(n._radius),f=Math.round(n._radiusY||l);this._setPath(n,n._empty()?"M0 0":"AL "+o.x+","+o.y+" "+l+","+f+" 0,"+65535*360)},_setPath:function(n,o){n._path.v=o},_bringToFront:function(n){se(n._container)},_bringToBack:function(n){pe(n._container)}},Bs=Wt.vml?Wr:pt,Xr=ii.extend({_initContainer:function(){this._container=Bs("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Bs("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Dt(this._container),Pe(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){ii.prototype._update.call(this);var n=this._bounds,o=n.getSize(),l=this._container;(!this._svgSize||!this._svgSize.equals(o))&&(this._svgSize=o,l.setAttribute("width",o.x),l.setAttribute("height",o.y)),Ce(l,n.min),l.setAttribute("viewBox",[n.min.x,n.min.y,o.x,o.y].join(" ")),this.fire("update")}},_initPath:function(n){var o=n._path=Bs("path");n.options.className&&Ht(o,n.options.className),n.options.interactive&&Ht(o,"leaflet-interactive"),this._updateStyle(n),this._layers[u(n)]=n},_addPath:function(n){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(n._path),n.addInteractiveTarget(n._path)},_removePath:function(n){Dt(n._path),n.removeInteractiveTarget(n._path),delete this._layers[u(n)]},_updatePath:function(n){n._project(),n._update()},_updateStyle:function(n){var o=n._path,l=n.options;o&&(l.stroke?(o.setAttribute("stroke",l.color),o.setAttribute("stroke-opacity",l.opacity),o.setAttribute("stroke-width",l.weight),o.setAttribute("stroke-linecap",l.lineCap),o.setAttribute("stroke-linejoin",l.lineJoin),l.dashArray?o.setAttribute("stroke-dasharray",l.dashArray):o.removeAttribute("stroke-dasharray"),l.dashOffset?o.setAttribute("stroke-dashoffset",l.dashOffset):o.removeAttribute("stroke-dashoffset")):o.setAttribute("stroke","none"),l.fill?(o.setAttribute("fill",l.fillColor||l.color),o.setAttribute("fill-opacity",l.fillOpacity),o.setAttribute("fill-rule",l.fillRule||"evenodd")):o.setAttribute("fill","none"))},_updatePoly:function(n,o){this._setPath(n,ht(n._parts,o))},_updateCircle:function(n){var o=n._point,l=Math.max(Math.round(n._radius),1),f=Math.max(Math.round(n._radiusY),1)||l,_="a"+l+","+f+" 0 1,0 ",b=n._empty()?"M0 0":"M"+(o.x-l)+","+o.y+_+l*2+",0 "+_+-l*2+",0 ";this._setPath(n,b)},_setPath:function(n,o){n._path.setAttribute("d",o)},_bringToFront:function(n){se(n._path)},_bringToBack:function(n){pe(n._path)}});Wt.vml&&Xr.include(pd);function eh(n){return Wt.svg||Wt.vml?new Xr(n):null}ve.include({getRenderer:function(n){var o=n.options.renderer||this._getPaneRenderer(n.options.pane)||this.options.renderer||this._renderer;return o||(o=this._renderer=this._createRenderer()),this.hasLayer(o)||this.addLayer(o),o},_getPaneRenderer:function(n){if(n==="overlayPane"||n===void 0)return!1;var o=this._paneRenderers[n];return o===void 0&&(o=this._createRenderer({pane:n}),this._paneRenderers[n]=o),o},_createRenderer:function(n){return this.options.preferCanvas&&th(n)||eh(n)}});var nh=ir.extend({initialize:function(n,o){ir.prototype.initialize.call(this,this._boundsToLatLngs(n),o)},setBounds:function(n){return this.setLatLngs(this._boundsToLatLngs(n))},_boundsToLatLngs:function(n){return n=Qt(n),[n.getSouthWest(),n.getNorthWest(),n.getNorthEast(),n.getSouthEast()]}});function md(n,o){return new nh(n,o)}Xr.create=Bs,Xr.pointsToPath=ht,ni.geometryToLayer=Ls,ni.coordsToLatLng=ha,ni.coordsToLatLngs=Ds,ni.latLngToCoords=ua,ni.latLngsToCoords=Is,ni.getFeature=rr,ni.asFeature=Ns,ve.mergeOptions({boxZoom:!0});var ih=Bn.extend({initialize:function(n){this._map=n,this._container=n._container,this._pane=n._panes.overlayPane,this._resetStateTimeout=0,n.on("unload",this._destroy,this)},addHooks:function(){le(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Pe(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Dt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(n){if(!n.shiftKey||n.which!==1&&n.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Ie(),Di(),this._startPoint=this._map.mouseEventToContainerPoint(n),le(document,{contextmenu:Ni,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(n){this._moved||(this._moved=!0,this._box=_t("div","leaflet-zoom-box",this._container),Ht(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(n);var o=new ft(this._point,this._startPoint),l=o.getSize();Ce(this._box,o.min),this._box.style.width=l.x+"px",this._box.style.height=l.y+"px"},_finish:function(){this._moved&&(Dt(this._box),te(this._container,"leaflet-crosshair")),He(),wn(),Pe(document,{contextmenu:Ni,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(n){if(!(n.which!==1&&n.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(c(this._resetState,this),0);var o=new Vt(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(o).fire("boxzoomend",{boxZoomBounds:o})}},_onKeyDown:function(n){n.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});ve.addInitHook("addHandler","boxZoom",ih),ve.mergeOptions({doubleClickZoom:!0});var rh=Bn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(n){var o=this._map,l=o.getZoom(),f=o.options.zoomDelta,_=n.originalEvent.shiftKey?l-f:l+f;o.options.doubleClickZoom==="center"?o.setZoom(_):o.setZoomAround(n.containerPoint,_)}});ve.addInitHook("addHandler","doubleClickZoom",rh),ve.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var sh=Bn.extend({addHooks:function(){if(!this._draggable){var n=this._map;this._draggable=new _i(n._mapPane,n._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),n.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),n.on("zoomend",this._onZoomEnd,this),n.whenReady(this._onZoomEnd,this))}Ht(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){te(this._map._container,"leaflet-grab"),te(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var n=this._map;if(n._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var o=Qt(this._map.options.maxBounds);this._offsetLimit=Xt(this._map.latLngToContainerPoint(o.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(o.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;n.fire("movestart").fire("dragstart"),n.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(n){if(this._map.options.inertia){var o=this._lastTime=+new Date,l=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(l),this._times.push(o),this._prunePositions(o)}this._map.fire("move",n).fire("drag",n)},_prunePositions:function(n){for(;this._positions.length>1&&n-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var n=this._map.getSize().divideBy(2),o=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=o.subtract(n).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(n,o){return n-(n-o)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var n=this._draggable._newPos.subtract(this._draggable._startPos),o=this._offsetLimit;n.x<o.min.x&&(n.x=this._viscousLimit(n.x,o.min.x)),n.y<o.min.y&&(n.y=this._viscousLimit(n.y,o.min.y)),n.x>o.max.x&&(n.x=this._viscousLimit(n.x,o.max.x)),n.y>o.max.y&&(n.y=this._viscousLimit(n.y,o.max.y)),this._draggable._newPos=this._draggable._startPos.add(n)}},_onPreDragWrap:function(){var n=this._worldWidth,o=Math.round(n/2),l=this._initialWorldOffset,f=this._draggable._newPos.x,_=(f-o+l)%n+o-l,b=(f+o+l)%n-o-l,U=Math.abs(_+l)<Math.abs(b+l)?_:b;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=U},_onDragEnd:function(n){var o=this._map,l=o.options,f=!l.inertia||n.noInertia||this._times.length<2;if(o.fire("dragend",n),f)o.fire("moveend");else{this._prunePositions(+new Date);var _=this._lastPos.subtract(this._positions[0]),b=(this._lastTime-this._times[0])/1e3,U=l.easeLinearity,X=_.multiplyBy(U/b),$=X.distanceTo([0,0]),ut=Math.min(l.inertiaMaxSpeed,$),Nt=X.multiplyBy(ut/$),ee=ut/(l.inertiaDeceleration*U),de=Nt.multiplyBy(-ee/2).round();!de.x&&!de.y?o.fire("moveend"):(de=o._limitOffset(de,o.options.maxBounds),F(function(){o.panBy(de,{duration:ee,easeLinearity:U,noMoveStart:!0,animate:!0})}))}}});ve.addInitHook("addHandler","dragging",sh),ve.mergeOptions({keyboard:!0,keyboardPanDelta:80});var oh=Bn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(n){this._map=n,this._setPanDelta(n.options.keyboardPanDelta),this._setZoomDelta(n.options.zoomDelta)},addHooks:function(){var n=this._map._container;n.tabIndex<=0&&(n.tabIndex="0"),le(n,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Pe(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var n=document.body,o=document.documentElement,l=n.scrollTop||o.scrollTop,f=n.scrollLeft||o.scrollLeft;this._map._container.focus(),window.scrollTo(f,l)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(n){var o=this._panKeys={},l=this.keyCodes,f,_;for(f=0,_=l.left.length;f<_;f++)o[l.left[f]]=[-1*n,0];for(f=0,_=l.right.length;f<_;f++)o[l.right[f]]=[n,0];for(f=0,_=l.down.length;f<_;f++)o[l.down[f]]=[0,n];for(f=0,_=l.up.length;f<_;f++)o[l.up[f]]=[0,-1*n]},_setZoomDelta:function(n){var o=this._zoomKeys={},l=this.keyCodes,f,_;for(f=0,_=l.zoomIn.length;f<_;f++)o[l.zoomIn[f]]=n;for(f=0,_=l.zoomOut.length;f<_;f++)o[l.zoomOut[f]]=-n},_addHooks:function(){le(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Pe(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(n){if(!(n.altKey||n.ctrlKey||n.metaKey)){var o=n.keyCode,l=this._map,f;if(o in this._panKeys){if(!l._panAnim||!l._panAnim._inProgress)if(f=this._panKeys[o],n.shiftKey&&(f=rt(f).multiplyBy(3)),l.options.maxBounds&&(f=l._limitOffset(rt(f),l.options.maxBounds)),l.options.worldCopyJump){var _=l.wrapLatLng(l.unproject(l.project(l.getCenter()).add(f)));l.panTo(_)}else l.panBy(f)}else if(o in this._zoomKeys)l.setZoom(l.getZoom()+(n.shiftKey?3:1)*this._zoomKeys[o]);else if(o===27&&l._popup&&l._popup.options.closeOnEscapeKey)l.closePopup();else return;Ni(n)}}});ve.addInitHook("addHandler","keyboard",oh),ve.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var ah=Bn.extend({addHooks:function(){le(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Pe(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(n){var o=Lc(n),l=this._map.options.wheelDebounceTime;this._delta+=o,this._lastMousePos=this._map.mouseEventToContainerPoint(n),this._startTime||(this._startTime=+new Date);var f=Math.max(l-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(c(this._performZoom,this),f),Ni(n)},_performZoom:function(){var n=this._map,o=n.getZoom(),l=this._map.options.zoomSnap||0;n._stop();var f=this._delta/(this._map.options.wheelPxPerZoomLevel*4),_=4*Math.log(2/(1+Math.exp(-Math.abs(f))))/Math.LN2,b=l?Math.ceil(_/l)*l:_,U=n._limitZoom(o+(this._delta>0?b:-b))-o;this._delta=0,this._startTime=null,U&&(n.options.scrollWheelZoom==="center"?n.setZoom(o+U):n.setZoomAround(this._lastMousePos,o+U))}});ve.addInitHook("addHandler","scrollWheelZoom",ah);var _d=600;ve.mergeOptions({tapHold:Wt.touchNative&&Wt.safari&&Wt.mobile,tapTolerance:15});var lh=Bn.extend({addHooks:function(){le(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Pe(this._map._container,"touchstart",this._onDown,this)},_onDown:function(n){if(clearTimeout(this._holdTimeout),n.touches.length===1){var o=n.touches[0];this._startPos=this._newPos=new J(o.clientX,o.clientY),this._holdTimeout=setTimeout(c(function(){this._cancel(),this._isTapValid()&&(le(document,"touchend",We),le(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",o))},this),_d),le(document,"touchend touchcancel contextmenu",this._cancel,this),le(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function n(){Pe(document,"touchend",We),Pe(document,"touchend touchcancel",n)},_cancel:function(){clearTimeout(this._holdTimeout),Pe(document,"touchend touchcancel contextmenu",this._cancel,this),Pe(document,"touchmove",this._onMove,this)},_onMove:function(n){var o=n.touches[0];this._newPos=new J(o.clientX,o.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(n,o){var l=new MouseEvent(n,{bubbles:!0,cancelable:!0,view:window,screenX:o.screenX,screenY:o.screenY,clientX:o.clientX,clientY:o.clientY});l._simulated=!0,o.target.dispatchEvent(l)}});ve.addInitHook("addHandler","tapHold",lh),ve.mergeOptions({touchZoom:Wt.touch,bounceAtZoomLimits:!0});var ch=Bn.extend({addHooks:function(){Ht(this._map._container,"leaflet-touch-zoom"),le(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){te(this._map._container,"leaflet-touch-zoom"),Pe(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(n){var o=this._map;if(!(!n.touches||n.touches.length!==2||o._animatingZoom||this._zooming)){var l=o.mouseEventToContainerPoint(n.touches[0]),f=o.mouseEventToContainerPoint(n.touches[1]);this._centerPoint=o.getSize()._divideBy(2),this._startLatLng=o.containerPointToLatLng(this._centerPoint),o.options.touchZoom!=="center"&&(this._pinchStartLatLng=o.containerPointToLatLng(l.add(f)._divideBy(2))),this._startDist=l.distanceTo(f),this._startZoom=o.getZoom(),this._moved=!1,this._zooming=!0,o._stop(),le(document,"touchmove",this._onTouchMove,this),le(document,"touchend touchcancel",this._onTouchEnd,this),We(n)}},_onTouchMove:function(n){if(!(!n.touches||n.touches.length!==2||!this._zooming)){var o=this._map,l=o.mouseEventToContainerPoint(n.touches[0]),f=o.mouseEventToContainerPoint(n.touches[1]),_=l.distanceTo(f)/this._startDist;if(this._zoom=o.getScaleZoom(_,this._startZoom),!o.options.bounceAtZoomLimits&&(this._zoom<o.getMinZoom()&&_<1||this._zoom>o.getMaxZoom()&&_>1)&&(this._zoom=o._limitZoom(this._zoom)),o.options.touchZoom==="center"){if(this._center=this._startLatLng,_===1)return}else{var b=l._add(f)._divideBy(2)._subtract(this._centerPoint);if(_===1&&b.x===0&&b.y===0)return;this._center=o.unproject(o.project(this._pinchStartLatLng,this._zoom).subtract(b),this._zoom)}this._moved||(o._moveStart(!0,!1),this._moved=!0),Y(this._animRequest);var U=c(o._move,o,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=F(U,this,!0),We(n)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,Y(this._animRequest),Pe(document,"touchmove",this._onTouchMove,this),Pe(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});ve.addInitHook("addHandler","touchZoom",ch),ve.BoxZoom=ih,ve.DoubleClickZoom=rh,ve.Drag=sh,ve.Keyboard=oh,ve.ScrollWheelZoom=ah,ve.TapHold=lh,ve.TouchZoom=ch,e.Bounds=ft,e.Browser=Wt,e.CRS=at,e.Canvas=Qc,e.Circle=ca,e.CircleMarker=Rs,e.Class=st,e.Control=An,e.DivIcon=Kc,e.DivOverlay=zn,e.DomEvent=Nf,e.DomUtil=Df,e.Draggable=_i,e.Evented=Z,e.FeatureGroup=ti,e.GeoJSON=ni,e.GridLayer=Gr,e.Handler=Bn,e.Icon=nr,e.ImageOverlay=Us,e.LatLng=Zt,e.LatLngBounds=Vt,e.Layer=Cn,e.LayerGroup=er,e.LineUtil=qf,e.Map=ve,e.Marker=Ps,e.Mixin=Hf,e.Path=gi,e.Point=J,e.PolyUtil=Vf,e.Polygon=ir,e.Polyline=ei,e.Popup=Os,e.PosAnimation=Dc,e.Projection=Yf,e.Rectangle=nh,e.Renderer=ii,e.SVG=Xr,e.SVGOverlay=Jc,e.TileLayer=sr,e.Tooltip=Fs,e.Transformation=fe,e.Util=j,e.VideoOverlay=Yc,e.bind=c,e.bounds=Xt,e.canvas=th,e.circle=nd,e.circleMarker=ed,e.control=kr,e.divIcon=ud,e.extend=s,e.featureGroup=$f,e.geoJSON=qc,e.geoJson=sd,e.gridLayer=fd,e.icon=Qf,e.imageOverlay=od,e.latLng=q,e.latLngBounds=Qt,e.layerGroup=jf,e.map=Uf,e.marker=td,e.point=rt,e.polygon=rd,e.polyline=id,e.popup=cd,e.rectangle=md,e.setOptions=E,e.stamp=u,e.svg=eh,e.svgOverlay=ld,e.tileLayer=jc,e.tooltip=hd,e.transformation=me,e.version=i,e.videoOverlay=ad;var gd=window.L;e.noConflict=function(){return window.L=gd,this},window.L=e}))})(is,is.exports)),is.exports}var sy=ry();const go=ny(sy),Eu=.8;let vo,Ef,as,ls,Ql,bf=!1;function oy(r,t,e){Ql=e;const{minX:i,maxX:s,minY:a,maxY:c}=t;ls=(i+s)/2,as=(a+c)/2,vo=go.map("inset-map",{center:[37.2,-119.5],zoom:6,zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1,doubleClickZoom:!1,touchZoom:!1,keyboard:!1}),go.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",{subdomains:"abcd",maxZoom:19}).addTo(vo);const h={color:"#555",weight:.5,fillColor:"#c2eb66",fillOpacity:.35};go.geoJSON({type:"FeatureCollection",features:r},{style:h}).addTo(vo),Ef=go.rectangle([[as,ls],[as,ls]],{color:"#2a7a00",weight:1.5,dashArray:"4 3",fillColor:"#c2eb66",fillOpacity:.15}).addTo(vo),bf=!0}function ay(r){if(!bf)return;const t=r.position.z*Math.tan(r.fov/2*Math.PI/180),e=t*r.aspect,i=Math.min(t/(Ql*Eu),25),s=Math.min(e/(Ql*Eu),25);Ef.setBounds([[as-i,ls-s],[as+i,ls+s]])}const bu=new Pi,xo=new z;class Tf extends Vm{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Fe(t,3)),this.setAttribute("uv",new Fe(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,i=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),i.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const i=new Jl(e,6,1);return this.setAttribute("instanceStart",new Ti(i,3,0)),this.setAttribute("instanceEnd",new Ti(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const i=new Jl(e,6,1);return this.setAttribute("instanceColorStart",new Ti(i,3,0)),this.setAttribute("instanceColorEnd",new Ti(i,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Nm(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),bu.setFromBufferAttribute(e),this.boundingBox.union(bu))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ir),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let a=0,c=t.count;a<c;a++)xo.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(xo)),xo.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(xo));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}bt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ct(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};cn.line={uniforms:gc.merge([bt.common,bt.fog,bt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Tc extends Un{constructor(t){super({type:"LineMaterial",uniforms:gc.clone(cn.line.uniforms),vertexShader:cn.line.vertexShader,fragmentShader:cn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const ja=new we,Tu=new z,wu=new z,Xe=new we,Ze=new we,Hn=new we,$a=new z,Qa=new Re,qe=new qm,Au=new z,yo=new Pi,So=new Ir,Vn=new we;let Gn,Yi;function Cu(r,t,e){return Vn.set(0,0,-t,1).applyMatrix4(r.projectionMatrix),Vn.multiplyScalar(1/Vn.w),Vn.x=Yi/e.width,Vn.y=Yi/e.height,Vn.applyMatrix4(r.projectionMatrixInverse),Vn.multiplyScalar(1/Vn.w),Math.abs(Math.max(Vn.x,Vn.y))}function ly(r,t){const e=r.matrixWorld,i=r.geometry,s=i.attributes.instanceStart,a=i.attributes.instanceEnd,c=Math.min(i.instanceCount,s.count);for(let h=0,u=c;h<u;h++){qe.start.fromBufferAttribute(s,h),qe.end.fromBufferAttribute(a,h),qe.applyMatrix4(e);const d=new z,p=new z;Gn.distanceSqToSegment(qe.start,qe.end,p,d),p.distanceTo(d)<Yi*.5&&t.push({point:p,pointOnLine:d,distance:Gn.origin.distanceTo(p),object:r,face:null,faceIndex:h,uv:null,uv1:null})}}function cy(r,t,e){const i=t.projectionMatrix,a=r.material.resolution,c=r.matrixWorld,h=r.geometry,u=h.attributes.instanceStart,d=h.attributes.instanceEnd,p=Math.min(h.instanceCount,u.count),m=-t.near;Gn.at(1,Hn),Hn.w=1,Hn.applyMatrix4(t.matrixWorldInverse),Hn.applyMatrix4(i),Hn.multiplyScalar(1/Hn.w),Hn.x*=a.x/2,Hn.y*=a.y/2,Hn.z=0,$a.copy(Hn),Qa.multiplyMatrices(t.matrixWorldInverse,c);for(let g=0,x=p;g<x;g++){if(Xe.fromBufferAttribute(u,g),Ze.fromBufferAttribute(d,g),Xe.w=1,Ze.w=1,Xe.applyMatrix4(Qa),Ze.applyMatrix4(Qa),Xe.z>m&&Ze.z>m)continue;if(Xe.z>m){const C=Xe.z-Ze.z,R=(Xe.z-m)/C;Xe.lerp(Ze,R)}else if(Ze.z>m){const C=Ze.z-Xe.z,R=(Ze.z-m)/C;Ze.lerp(Xe,R)}Xe.applyMatrix4(i),Ze.applyMatrix4(i),Xe.multiplyScalar(1/Xe.w),Ze.multiplyScalar(1/Ze.w),Xe.x*=a.x/2,Xe.y*=a.y/2,Ze.x*=a.x/2,Ze.y*=a.y/2,qe.start.copy(Xe),qe.start.z=0,qe.end.copy(Ze),qe.end.z=0;const E=qe.closestPointToPointParameter($a,!0);qe.at(E,Au);const y=Ju.lerp(Xe.z,Ze.z,E),v=y>=-1&&y<=1,D=$a.distanceTo(Au)<Yi*.5;if(v&&D){qe.start.fromBufferAttribute(u,g),qe.end.fromBufferAttribute(d,g),qe.start.applyMatrix4(c),qe.end.applyMatrix4(c);const C=new z,R=new z;Gn.distanceSqToSegment(qe.start,qe.end,R,C),e.push({point:R,pointOnLine:C,distance:Gn.origin.distanceTo(R),object:r,face:null,faceIndex:g,uv:null,uv1:null})}}}class hy extends En{constructor(t=new Tf,e=new Tc({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,i=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let c=0,h=0,u=e.count;c<u;c++,h+=2)Tu.fromBufferAttribute(e,c),wu.fromBufferAttribute(i,c),s[h]=h===0?0:s[h-1],s[h+1]=s[h]+Tu.distanceTo(wu);const a=new Jl(s,2,1);return t.setAttribute("instanceDistanceStart",new Ti(a,1,0)),t.setAttribute("instanceDistanceEnd",new Ti(a,1,1)),this}raycast(t,e){const i=this.material.worldUnits,s=t.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const a=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Gn=t.ray;const c=this.matrixWorld,h=this.geometry,u=this.material;Yi=u.linewidth+a,h.boundingSphere===null&&h.computeBoundingSphere(),So.copy(h.boundingSphere).applyMatrix4(c);let d;if(i)d=Yi*.5;else{const m=Math.max(s.near,So.distanceToPoint(Gn.origin));d=Cu(s,m,u.resolution)}if(So.radius+=d,Gn.intersectsSphere(So)===!1)return;h.boundingBox===null&&h.computeBoundingBox(),yo.copy(h.boundingBox).applyMatrix4(c);let p;if(i)p=Yi*.5;else{const m=Math.max(s.near,yo.distanceToPoint(Gn.origin));p=Cu(s,m,u.resolution)}yo.expandByScalar(p),Gn.intersectsBox(yo)!==!1&&(i?ly(this,e):cy(this,s,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(ja),this.material.uniforms.resolution.value.set(ja.z,ja.w))}}class wf extends Tf{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,i=new Float32Array(2*e);for(let s=0;s<e;s+=3)i[2*s]=t[s],i[2*s+1]=t[s+1],i[2*s+2]=t[s+2],i[2*s+3]=t[s+3],i[2*s+4]=t[s+4],i[2*s+5]=t[s+5];return super.setPositions(i),this}setColors(t){const e=t.length-3,i=new Float32Array(2*e);for(let s=0;s<e;s+=3)i[2*s]=t[s],i[2*s+1]=t[s+1],i[2*s+2]=t[s+2],i[2*s+3]=t[s+3],i[2*s+4]=t[s+4],i[2*s+5]=t[s+5];return super.setColors(i),this}setFromPoints(t){const e=t.length-1,i=new Float32Array(6*e);for(let s=0;s<e;s++)i[6*s]=t[s].x,i[6*s+1]=t[s].y,i[6*s+2]=t[s].z||0,i[6*s+3]=t[s+1].x,i[6*s+4]=t[s+1].y,i[6*s+5]=t[s+1].z||0;return super.setPositions(i),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class uy extends hy{constructor(t=new wf,e=new Tc({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}const Mo=.55;class fy{constructor(){this.name="Neighborhoods",this.color=1118481,this.visible=!0,this.tractEntries=new Map,this._lines=[],this.hitMeshes=[],this._labels=[],this._lineMaterial=null}async load(){const t=await fetch("data/la-neighborhoods/la_city.json");this._geojson=await t.json()}build(t,e,i){const{offsetX:s,offsetY:a}=i;this._lineMaterial=new Tc({color:1118481,linewidth:2,depthTest:!1,transparent:!0,opacity:.9}),this._lineMaterial.resolution.set(window.innerWidth,window.innerHeight);const c=new _c({side:Sn,transparent:!0,opacity:0,depthWrite:!1});this._geojson.features.forEach(h=>{const u=h.properties.name,d=h.geometry,p=d.type==="Polygon"?[d.coordinates]:d.coordinates;let m=0,g=0,x=0;p.forEach(E=>{const y=E[0],v=[];y.forEach(([w,A])=>{const F=(w-s)*e,Y=(A-a)*e;m+=F,g+=Y,x++,v.push(F,Y,Mo)});const[D,C]=y[0];v.push((D-s)*e,(C-a)*e,Mo);const R=new wf;R.setPositions(v);const N=new uy(R,this._lineMaterial);N.renderOrder=100,t.add(N),this._lines.push(N);const O=new Bo;y.forEach(([w,A],F)=>{const Y=(w-s)*e,j=(A-a)*e;F===0?O.moveTo(Y,j):O.lineTo(Y,j)});const B=new Ec(O),W=new En(B,c.clone());W.position.z=Mo,W.userData.neighborhoodName=u,t.add(W),this.hitMeshes.push(W)});const S=document.createElement("div");S.className="neighborhood-label",S.textContent=u,S.style.display="none",document.body.appendChild(S),this._labels.push({el:S,name:u,worldPos:new z(m/x,g/x,Mo)})})}onResize(t,e){this._lineMaterial&&this._lineMaterial.resolution.set(t,e)}setVisible(t){this.visible=t,this._lines.forEach(e=>{e.visible=t}),t||this._labels.forEach(({el:e})=>{e.style.display="none"})}setOpacity(t){this._lineMaterial&&(this._lineMaterial.opacity=t<1?.15:.9)}updateLabels(t,e,i,s){if(!this.visible){this._labels.forEach(({el:c})=>{c.style.display="none"});return}const a=t.position.z<3.5;this._labels.forEach(({el:c,name:h,worldPos:u})=>{if(!a&&h!==s){c.style.display="none";return}const d=u.clone();if(d.applyMatrix4(e.matrixWorld),d.project(t),d.z>=1){c.style.display="none";return}const p=(d.x+1)/2*i.width,m=(-d.y+1)/2*i.height;c.style.display="block",c.style.left=p+"px",c.style.top=m+"px"})}destroy(){this._labels.forEach(({el:t})=>t.remove())}}const ys=new Wp;ys.background=new ye(16777215);const Ji=new ts;Ji.scale.set(.8,.8,.8);ys.add(Ji);const dy=new Hm(16777215,.5);ys.add(dy);const Af=new km(16777215,1);Af.position.set(5,5,5);ys.add(Af);const rn={width:window.innerWidth,height:window.innerHeight},Jn=new yn(45,rn.width/rn.height,.1,1e3);Jn.position.z=2;const Uo=document.querySelector("canvas.webgl"),Ss=new Gx({canvas:Uo,antialias:!0,precision:"highp"});Ss.setSize(rn.width,rn.height);Ss.setPixelRatio(Math.min(window.devicePixelRatio,2));Ss.shadowMap.enabled=!1;window.addEventListener("resize",()=>{rn.width=window.innerWidth,rn.height=window.innerHeight,Jn.aspect=rn.width/rn.height,Jn.updateProjectionMatrix(),Ss.setSize(rn.width,rn.height),hn&&hn.onResize(rn.width,rn.height),mi=!0});const cs={x:0,y:0};let tc=!1,ec=!0,mi=!0;const py=1,my=20,_y=.002;let hn=null,Cf=null;document.addEventListener("mousemove",r=>{if(cs.x=r.clientX/rn.width*2-1,cs.y=-(r.clientY/rn.height)*2+1,hn?.visible&&Go){Oo.setFromCamera(cs,Jn);const t=Oo.intersectObjects(hn.hitMeshes);Cf=t.length>0?t[0].object.userData.neighborhoodName:null}mi=!0});Uo.addEventListener("wheel",r=>{r.preventDefault();const t=Jn.position.z+r.deltaY*_y;Jn.position.z=Ju.clamp(t,py,my),mi=!0},{passive:!1});document.addEventListener("keydown",r=>{r.code==="Space"&&!r.repeat&&(r.preventDefault(),ec=!ec),r.key.toLowerCase()==="f"&&(tc=!tc)});const Oo=new Wm;let wc=null,Vo=new Map,Ai=[],Pf=[];function gy(r,t,e){wc=r,Vo.forEach((i,s)=>{i.setOpacity(s===r?1:.02)}),hn&&hn.setOpacity(.02),ty(r,Ai,t,e),mi=!0}function Pu(){wc=null,Vo.forEach(r=>r.setOpacity(1)),hn&&hn.setOpacity(1),ey(),mi=!0}Uo.addEventListener("click",r=>{if(!Go)return;const t=Uo.getBoundingClientRect(),e=(r.clientX-t.left)/t.width*2-1,i=(r.clientY-t.top)/t.height*-2+1;Oo.setFromCamera({x:e,y:i},Jn);const s=Oo.intersectObjects(Pf);if(s.length===0){Pu();return}const a=s[0].object.userData.tractCode;a===wc?Pu():gy(a,r.clientX,r.clientY)});let Go=!1;$x(Ji).then(async({tracts:r,layers:t,laFeatures:e,geoBounds:i,geoScale:s,geoOffset:a})=>{Vo=r,Ai=t,Pf=[...r.values()].flatMap(c=>c.allMeshes),hn=new fy,await hn.load(),hn.build(Ji,s,a),Ai.push(hn),Go=!0,mi=!0,Rf(Ai),oy(e,i,s)}).catch(r=>{console.error("Failed to build map:",r)});function Ru(){Vo.forEach((r,t)=>{let e=Mf;for(const i of Ai){const s=i.tractEntries.get(t);s&&i.visible&&(s.meshes.forEach(a=>{a.position.z=e}),s.lines.forEach(a=>{a.position.z=e}),e+=s.depth)}}),mi=!0}function Rf(r){const t=document.getElementById("layersList");t.innerHTML="",r.forEach((e,i)=>{const s=document.createElement("li");s.className="layer-item",s.draggable=!0;const a="#"+e.color.toString(16).padStart(6,"0");s.innerHTML=`
            <span class="layer-swatch${e.visible?"":" layer-swatch--off"}" style="background:${a}" title="Toggle layer"></span>
            <span class="layer-name">${e.name}</span>`;const c=s.querySelector(".layer-swatch");c.addEventListener("click",()=>{const h=!e.visible;e.setVisible(h),c.classList.toggle("layer-swatch--off",!h),Ru()}),s.addEventListener("dragstart",h=>{h.dataTransfer.effectAllowed="move",h.dataTransfer.setData("text/plain",String(i)),s.classList.add("dragging")}),s.addEventListener("dragend",()=>{s.classList.remove("dragging"),t.querySelectorAll(".layer-item").forEach(h=>h.classList.remove("drag-over"))}),s.addEventListener("dragover",h=>{h.preventDefault(),t.querySelectorAll(".layer-item").forEach(u=>u.classList.remove("drag-over")),s.classList.add("drag-over")}),s.addEventListener("drop",h=>{h.preventDefault();const u=parseInt(h.dataTransfer.getData("text/plain"),10),d=i;if(u===d)return;const[p]=Ai.splice(u,1);Ai.splice(d,0,p),Rf(Ai),Ru()}),t.appendChild(s)})}const Lu=document.getElementById("layersToggle"),vy=document.getElementById("layersList");Lu.addEventListener("click",()=>{const r=vy.classList.toggle("collapsed");Lu.textContent=r?"+":"−"});const Lf=()=>{!tc&&ec&&Go&&(Ji.rotation.y=cs.x*Math.PI,Ji.rotation.x=cs.y*Math.PI),mi&&(Ss.render(ys,Jn),hn&&hn.updateLabels(Jn,Ji,rn,Cf),ay(Jn),mi=!1),window.requestAnimationFrame(Lf)};Lf();
