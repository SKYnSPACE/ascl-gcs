(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[151],{6716:function(e,t,a){"use strict";function r(e,t){if(t="number"==typeof t?t:5,!Array.isArray(e))throw TypeError("forward did not receive an array");if("string"==typeof e[0]||"string"==typeof e[1])throw TypeError("forward received an array of strings, but it only accepts an array of numbers.");let[a,r]=e;if(a<-180||a>180)throw TypeError("forward received an invalid longitude of "+a);if(r<-90||r>90)throw TypeError("forward received an invalid latitude of "+r);if(r<-80||r>84)throw TypeError(`forward received a latitude of ${r}, but this library does not support conversions of points in polar regions below 80\xb0S and above 84\xb0N`);return function(e,t){let a="00000"+e.easting,r="00000"+e.northing;return e.zoneNumber+e.zoneLetter+function(e,t,a){let r;let n=(0==(r=a%6)&&(r=6),r);return function(e,t,a){let r=a-1,n="AJSAJS".charCodeAt(r),s="AFAFAF".charCodeAt(r),l=n+e-1,i=s+t,o=!1;return l>90&&(l=l-90+65-1,o=!0),(73===l||n<73&&l>73||(l>73||n<73)&&o)&&l++,(79===l||n<79&&l>79||(l>79||n<79)&&o)&&73==++l&&l++,l>90&&(l=l-90+65-1),i>86?(i=i-86+65-1,o=!0):o=!1,(73===i||s<73&&i>73||(i>73||s<73)&&o)&&i++,(79===i||s<79&&i>79||(i>79||s<79)&&o)&&73==++i&&i++,i>86&&(i=i-86+65-1),String.fromCharCode(l)+String.fromCharCode(i)}(Math.floor(e/1e5),Math.floor(t/1e5)%20,n)}(e.easting,e.northing,e.zoneNumber)+a.substr(a.length-5,t)+r.substr(r.length-5,t)}(function(e){let t;let a=e.lat,r=e.lon,s=n(a),l=n(r);t=Math.floor((r+180)/6)+1,180===r&&(t=60),a>=56&&a<64&&r>=3&&r<12&&(t=32),a>=72&&a<84&&(r>=0&&r<9?t=31:r>=9&&r<21?t=33:r>=21&&r<33?t=35:r>=33&&r<42&&(t=37));let i=n(6*(t-1)-180+3),o=6378137/Math.sqrt(1-.00669438*Math.sin(s)*Math.sin(s)),c=Math.tan(s)*Math.tan(s),d=.006739496752268451*Math.cos(s)*Math.cos(s),m=Math.cos(s)*(l-i),_=.9996*(6378137*(.9983242984503243*s-.002514607064228144*Math.sin(2*s)+2639046602129982e-21*Math.sin(4*s)-3418046101696858e-24*Math.sin(6*s))+o*Math.tan(s)*(m*m/2+(5-c+9*d+4*d*d)*m*m*m*m/24+(61-58*c+c*c+600*d-2.2240339282485886)*m*m*m*m*m*m/720));return a<0&&(_+=1e7),{northing:Math.trunc(_),easting:Math.trunc(.9996*o*(m+(1-c+d)*m*m*m/6+(5-18*c+c*c+72*d-.39089081163157013)*m*m*m*m*m/120)+5e5),zoneNumber:t,zoneLetter:a<=84&&a>=72?"X":a<72&&a>=-80?"CDEFGHJKLMNPQRSTUVWX"[Math.floor((a- -80)/8)]:a>84||a<-80?"Z":void 0}}({lat:r,lon:a}),t)}function n(e){return e*(Math.PI/180)}a.d(t,{eH:function(){return r}})},4939:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mission",function(){return a(3489)}])},442:function(e,t,a){"use strict";var r=a(5893),n=a(7294),s=a(9583);t.Z=function(){let[e,t]=(0,n.useState)(!1);return(0,r.jsx)("button",{className:"flex justify-center items-center w-7 h-7 border border-gray-400 text-gray-400 bg-white rounded hover:bg-gray-400 hover:text-white hover:border-gray-300",onClick:()=>{document.fullscreenElement?document.exitFullscreen&&(document.exitFullscreen(),t(!1)):(document.documentElement.requestFullscreen(),t(!0))},children:e?(0,r.jsx)(s.Y7H,{className:"h-4 w-4"}):(0,r.jsx)(s.a1O,{className:"h-4 w-4"})})}},2352:function(e,t,a){"use strict";function r(){console.log("InitTelemetry() called");let e={};return e.HEARTBEAT={custom_mode:0,type:0,autopilot:0,base_mode:0,system_status:0,mavlink_version:0},e.GPS_RAW_INT={time_usec:0,fix_type:0,lat:0,lon:0,alt:0,eph:0,epv:0,vel:0,cog:0,satellites_visible:0,alt_ellpisoid:0,h_acc:0,v_acc:0,vel_acc:0,hdg_acc:0,yaw:0},e.SCALED_IMU={time_boot_ms:0,xacc:0,yacc:0,zacc:0,xgyro:0,ygyro:0,zgyro:0,xmag:0,ymag:0,zmag:0,temperature:0},e.ATTITUDE={time_boot_ms:0,roll:0,pitch:0,yaw:0,rollspeed:0,pitchspeed:0,yawspeed:0},e.ATTITUDE_QUATERNION={time_boot_ms:0,q1:0,q2:0,q3:0,q4:0,rollspeed:0,pitchspeed:0,yawspeed:0,repr_offset_q:[0,0,0,0]},e.LOCAL_POSITION_NED={time_boot_ms:0,x:0,y:0,z:0,vx:0,vy:0,vz:0},e.GLOBAL_POSITION_INT={time_boot_ms:0,lat:0,lon:0,alt:0,relative_alt:0,vx:0,vy:0,vz:0,hdg:0},e.HIL_STATE={time_usec:0,roll:0,pitch:0,yaw:0,rollspeed:0,pitchspeed:0,yawspeed:0,lat:0,lon:0,alt:0,vx:0,vy:0,vz:0,xacc:0,yacc:0,zacc:0},e.DISTANCE_SENSOR={time_boot_ms:0,min_distance:0,max_distance:0,current_distance:0,type:0,id:0,orientation:0,covariance:0,horizontal_fov:0,vertical_fov:0,quaternion:[0,0,0,0],signal_quality:0},e.MISSION_ITEM_INT={target_system:0,target_component:0,seq:0,frame:0,command:0,current:0,autocontinue:0,param1:0,param2:0,param3:0,param4:0,x:0,y:0,z:0,mission_type:0},e.CAMERA_TRACKING_IMAGE_STATUS={tracking_status:0,tracking_mode:0,target_data:0,point_x:0,poit_y:0,radius:0,rec_top_x:0,rec_top_y:0,rec_bottom_x:0,rec_bottom_y:0},e.CAMERA_CAPTURE_STATUS={time_boot_ms:0,image_status:0,video_status:0,image_interval:0,recording_time_ms:0,available_capacity:0,image_count:0},e}function n(e,t){switch(e.mavpackettype){case"HEARTBEAT":t.HEARTBEAT.custom_mode=e.custom_mode,t.HEARTBEAT.type=e.type,t.HEARTBEAT.autopilot=e.autopilot,t.HEARTBEAT.base_mode=e.base_mode,t.HEARTBEAT.system_status=e.system_status,t.HEARTBEAT.mavlink_version=e.mavlink_version,console.log("heartbeat");break;case"GPS_RAW_INT":t.GPS_RAW_INT.time_usec=e.time_usec,t.GPS_RAW_INT.fix_type=e.fix_type,t.GPS_RAW_INT.lat=1e-7*e.lat,t.GPS_RAW_INT.lon=1e-7*e.lon,t.GPS_RAW_INT.alt=.001*e.fix_type,t.GPS_RAW_INT.eph=e.eph,t.GPS_RAW_INT.epv=e.epv,t.GPS_RAW_INT.vel=.01*e.vel,t.GPS_RAW_INT.cog=.01*e.cog,t.GPS_RAW_INT.satellites_visible=e.satellites_visible,t.GPS_RAW_INT.alt_ellpisoid=e.alt_ellpisoid,t.GPS_RAW_INT.h_acc=.001*e.h_acc,t.GPS_RAW_INT.v_acc=.001*e.v_acc,t.GPS_RAW_INT.vel_acc=.001*e.vel_acc,t.GPS_RAW_INT.hdg_acc=.001*e.hdg_acc,t.GPS_RAW_INT.yaw=.01*e.yaw;break;case"SCALED_IMU":t.SCALED_IMU.time_boot_ms=e.time_boot_ms,t.SCALED_IMU.xacc=e.xacc,t.SCALED_IMU.yacc=e.yacc,t.SCALED_IMU.zacc=e.zacc,t.SCALED_IMU.xgyro=e.xgyro,t.SCALED_IMU.ygyro=e.ygyro,t.SCALED_IMU.zgyro=e.zgyro,t.SCALED_IMU.xmag=e.xmag,t.SCALED_IMU.ymag=e.ymag,t.SCALED_IMU.zmag=e.zmag,t.SCALED_IMU.temperature=e.temperature;break;case"ATTITUDE":t.ATTITUDE.time_boot_ms=e.time_boot_ms,t.ATTITUDE.roll=e.roll,t.ATTITUDE.pitch=e.pitch,t.ATTITUDE.yaw=e.yaw,t.ATTITUDE.rollspeed=e.rollspeed,t.ATTITUDE.pitchspeed=e.pitchspeed,t.ATTITUDE.yawspeed=e.yawspeed;break;case"ATTITUDE_QUATERNION":t.ATTITUDE_QUATERNION.time_boot_ms=e.time_boot_ms,t.ATTITUDE_QUATERNION.q1=e.q1,t.ATTITUDE_QUATERNION.q2=e.q2,t.ATTITUDE_QUATERNION.q3=e.q3,t.ATTITUDE_QUATERNION.q4=e.q4,t.ATTITUDE_QUATERNION.rollspeed=e.rollspeed,t.ATTITUDE_QUATERNION.pitchspeed=e.pitchspeed,t.ATTITUDE_QUATERNION.yawspeed=e.yawspeed,t.ATTITUDE_QUATERNION.repr_offset_q=e.repr_offset_q;break;case"LOCAL_POSITION_NED":t.LOCAL_POSITION_NED.time_boot_ms=e.time_boot_ms,t.LOCAL_POSITION_NED.x=e.x,t.LOCAL_POSITION_NED.y=e.y,t.LOCAL_POSITION_NED.z=e.z,t.LOCAL_POSITION_NED.vx=e.vx,t.LOCAL_POSITION_NED.vy=e.vy,t.LOCAL_POSITION_NED.vz=e.vz;break;case"GLOBAL_POSITION_INT":t.GLOBAL_POSITION_INT.time_boot_ms=e.time_boot_ms,t.GLOBAL_POSITION_INT.lat=1e-7*e.lat,t.GLOBAL_POSITION_INT.lon=1e-7*e.lon,t.GLOBAL_POSITION_INT.alt=.001*e.alt,t.GLOBAL_POSITION_INT.relative_alt=.001*e.relative_alt,t.GLOBAL_POSITION_INT.vx=.01*e.vx,t.GLOBAL_POSITION_INT.vy=.01*e.vy,t.GLOBAL_POSITION_INT.vz=.01*e.vz,t.GLOBAL_POSITION_INT.vz=.01*e.vz;break;case"HIL_STATE":t.HIL_STATE.time_usec=e.time_usec,t.HIL_STATE.roll=e.roll,t.HIL_STATE.pitch=e.pitch,t.HIL_STATE.yaw=e.yaw,t.HIL_STATE.rollspeed=e.rollspeed,t.HIL_STATE.pitchspeed=e.pitchspeed,t.HIL_STATE.yawspeed=e.yawspeed,t.HIL_STATE.lat=1e-7*e.lat,t.HIL_STATE.lon=1e-7*e.lon,t.HIL_STATE.alt=.001*e.alt,t.HIL_STATE.vx=.001*e.vx,t.HIL_STATE.vy=.001*e.vy,t.HIL_STATE.vz=.001*e.vz,t.HIL_STATE.xacc=e.xacc,t.HIL_STATE.yacc=e.yacc,t.HIL_STATE.zacc=e.zacc;break;case"DISTANCE_SENSOR":t.DISTANCE_SENSOR.time_boot_ms=e.time_boot_ms,t.DISTANCE_SENSOR.min_distance=.01*e.min_distance,t.DISTANCE_SENSOR.max_distance=.01*e.max_distance,t.DISTANCE_SENSOR.current_distance=.01*e.current_distance,t.DISTANCE_SENSOR.type=e.type,t.DISTANCE_SENSOR.id=e.id,t.DISTANCE_SENSOR.orientation=e.orientation,t.DISTANCE_SENSOR.covariance=e.covariance,t.DISTANCE_SENSOR.horizontal_fov=e.horizontal_fov,t.DISTANCE_SENSOR.vertical_fov=e.vertical_fov,t.DISTANCE_SENSOR.quaternion=e.quaternion,t.DISTANCE_SENSOR.signal_quality=e.signal_quality;break;case"MISSION_ITEM_INT":t.MISSION_ITEM_INT.target_system=e.target_system,t.MISSION_ITEM_INT.target_component=e.target_component,t.MISSION_ITEM_INT.seq=e.seq,t.MISSION_ITEM_INT.frame=e.frame,t.MISSION_ITEM_INT.command=e.command,t.MISSION_ITEM_INT.current=e.current,t.MISSION_ITEM_INT.autocontinue=e.autocontinue,t.MISSION_ITEM_INT.param1=e.param1,t.MISSION_ITEM_INT.param2=e.param2,t.MISSION_ITEM_INT.param3=e.param3,t.MISSION_ITEM_INT.param4=e.param4,t.MISSION_ITEM_INT.x=e.x,t.MISSION_ITEM_INT.y=e.y,t.MISSION_ITEM_INT.z=e.z,t.MISSION_ITEM_INT.mission_type=e.mission_type;break;case"CAMERA_TRACKING_IMAGE_STATUS":t.CAMERA_TRACKING_IMAGE_STATUS.tracking_status=e.tracking_status,t.CAMERA_TRACKING_IMAGE_STATUS.tracking_mode=e.tracking_mode,t.CAMERA_TRACKING_IMAGE_STATUS.target_data=e.target_data,t.CAMERA_TRACKING_IMAGE_STATUS.point_x=e.point_x,t.CAMERA_TRACKING_IMAGE_STATUS.point_y=e.point_y,t.CAMERA_TRACKING_IMAGE_STATUS.radius=e.raidus,t.CAMERA_TRACKING_IMAGE_STATUS.rec_top_x=e.rec_top_x,t.CAMERA_TRACKING_IMAGE_STATUS.rec_top_y=e.rec_top_y,t.CAMERA_TRACKING_IMAGE_STATUS.rec_bottom_x=e.rec_bottom_x,t.CAMERA_TRACKING_IMAGE_STATUS.rec_bottom_y=e.rec_bottom_y;break;case"CAMERA_CAPTURE_STATUS":t.CAMERA_CAPTURE_STATUS.time_boot_ms=e.time_boot_ms,t.CAMERA_CAPTURE_STATUS.image_status=e.image_status,t.CAMERA_CAPTURE_STATUS.video_status=e.video_status,t.CAMERA_CAPTURE_STATUS.image_interval=e.image_interval,t.CAMERA_CAPTURE_STATUS.recording_time_ms=e.recording_time_ms,t.CAMERA_CAPTURE_STATUS.available_capacity=e.available_capacity,t.CAMERA_CAPTURE_STATUS.image_count=e.image_count}return t}a.d(t,{U:function(){return n},u:function(){return r}})},3489:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return N}});var r=a(5893);a(5675);var n=a(9704),s=a(7294),l=a(4475),i=a(7950),o=a(8193),c=a(3750),d=a(6716),m=a(2533),_=a(442),u=a(2352),x=a(39);let T=[{name:"l5",icon:c.URD,href:"#",value:-5,current:!1},{name:"l1",icon:c.pjk,href:"#",value:-1,current:!1},{name:"r1",icon:c.fmn,href:"#",value:1,current:!1},{name:"r5",icon:c.ZC5,href:"#",value:5,current:!1}],h=[{name:"u5",icon:c.CvE,href:"#",value:5,current:!1},{name:"u1",icon:c.E0f,href:"#",value:1,current:!1},{name:"d1",icon:c.IAR,href:"#",value:-1,current:!1},{name:"d5",icon:c.t3p,href:"#",value:-5,current:!1}];function A(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}let p=(0,u.u)();function N(){var e,t;let a=(0,s.useContext)(x.ZP),[N,v]=(0,s.useState)({heading:0,headingRef:0}),{width:f,height:I}=function(){let[e,t]=(0,s.useState)(window.innerWidth),[a,r]=(0,s.useState)(window.innerHeight);return(0,s.useEffect)(()=>{function e(){t(window.innerWidth),r(window.innerHeight)}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),{width:e,height:a}}(),[y,S]=(0,s.useState)(null),[E,b]=(0,s.useState)(!1),[g,w]=(0,s.useState)({x:0,y:0}),M=()=>{let e=(null==y?void 0:y.left)/f||0,t=(null==y?void 0:y.top)/I||0,a=((null==y?void 0:y.left)+(null==y?void 0:y.width))/f||0,r=((null==y?void 0:y.top)+(null==y?void 0:y.height))/I||0,n={command:2005,param1:e,param2:t,param3:a,param4:r};console.log(n),m.W.emit("COMMAND_LONG",n)},O=e=>{b(!0),w(e),S(t=>({...t,left:e.x,top:e.y,width:0,height:0}))},C=e=>{if(!E)return;let t={left:e.x>g.x?g.x:e.x,top:e.y>g.y?g.y:e.y,width:Math.abs(e.x-g.x),height:Math.abs(e.y-g.y)};S(t)},R=()=>{b(!1),M()},[j,U]=(0,s.useState)(!1),[L,D]=(0,s.useState)(0),[P,G]=(0,s.useState)(0),[z,k]=(0,s.useState)(0),H=e=>{console.log(e),m.W.emit("COMMAND_LONG",e)},W=e=>{H({command:2004,param1:e,param2:0,param3:1})},q=e=>{H({command:2004,param1:0,param2:e,param3:1})},[B,F]=(0,s.useState)([127.36039,36.3721427]),[K,Q]=(0,s.useState)(0),[X,Z]=(0,s.useState)(d.eH(B,5)),J=e=>{var t,r,n,s,l,i,o,c,m,_,x,T;let h=JSON.parse(e);G(null!==(o=null==(p=(0,u.U)(h,p))?void 0:null===(t=p.CAMERA_CAPTURE_STATUS)||void 0===t?void 0:t.image_interval)&&void 0!==o?o:0),D(null!==(c=null==a?void 0:null===(r=a.flightStates)||void 0===r?void 0:r.heading)&&void 0!==c?c:0),k(null!==(m=null==p?void 0:null===(n=p.CAMERA_CAPTURE_STATUS)||void 0===n?void 0:n.available_capacity)&&void 0!==m?m:0);let A=[(null==p?void 0:null===(s=p.CAMERA_CAPTURE_STATUS)||void 0===s?void 0:s.recording_time_ms)*1e-7,(null==p?void 0:null===(l=p.CAMERA_CAPTURE_STATUS)||void 0===l?void 0:l.time_boot_ms)*1e-7];F(A),Z(d.eH(A,5)),Q((null==p?void 0:null===(i=p.CAMERA_CAPTURE_STATUS)||void 0===i?void 0:i.image_count)*.001)};return(0,s.useEffect)(()=>(m.W.on("CAMERA_CAPTURE_STATUS",J),()=>{m.W.off("CAMERA_CAPTURE_STATUS")})),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"fixed top-0 bottom-0 left-0 right-0 cursor-crosshair",onMouseDown:e=>O({x:e.clientX,y:e.clientY}),onMouseMove:e=>C({x:e.clientX,y:e.clientY}),onMouseUp:R,onMouseLeave:()=>{b(!1)},onTouchStart:e=>O({x:e.touches[0].clientX,y:e.touches[0].clientY}),onTouchMove:e=>C({x:e.touches[0].clientX,y:e.touches[0].clientY}),onTouchEnd:R,children:[(0,r.jsx)("img",{style:{width:"100vw",height:"100vh",position:"relative"},src:"http://127.0.0.1:5000/stream?src=0"}),E&&(0,r.jsx)("div",{className:"absolute border-4 border-dashed border-red-600",style:{left:y.left,top:y.top,width:y.width,height:y.height}})]}),!E&&!y&&(0,r.jsxs)("div",{className:"fixed bottom-16 left-1/2 transform -translate-x-1/2",children:[(0,r.jsxs)("div",{className:"sm:hidden",children:[(0,r.jsx)("label",{htmlFor:"panControls",className:"sr-only",children:"Select a tab"}),(0,r.jsx)("select",{id:"panControls",name:"panControls",className:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",defaultValue:null===(e=T.find(e=>e.current))||void 0===e?void 0:e.name,children:T.map(e=>(0,r.jsx)("option",{children:e.name},e.name))})]}),(0,r.jsx)("div",{className:"hidden sm:block",children:(0,r.jsx)("nav",{className:"isolate flex rounded-lg shadow","aria-label":"PanControls",children:T.map((e,t)=>(0,r.jsxs)("div",{className:A("relative",0===t?"rounded-l-lg":"",t===T.length-1?"rounded-r-lg":"","min-w-0 flex-1 overflow-hidden py-4 px-4 text-center text-sm font-medium focus:z-10 hover:bg-gray-50"),onClick:()=>W(e.value),children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-black opacity-50 "}),(0,r.jsx)("a",{href:e.href,className:A(e.current?"text-gray-900":"text-white","relative z-10"),"aria-current":e.current?"page":void 0,children:(0,r.jsx)(e.icon,{className:"mx-6 my-2 h-6 w-6","aria-hidden":"true"})}),t!==T.length-1&&(0,r.jsx)("div",{className:"absolute right-0 top-[12.5%] h-3/4 w-[1px] bg-gray-500"})]},e.name))})})]}),!E&&!y&&(0,r.jsxs)("div",{className:"fixed right-8 top-1/2 transform -translate-y-1/2",children:[(0,r.jsxs)("div",{className:"sm:hidden",children:[(0,r.jsx)("label",{htmlFor:"tiltControls",className:"sr-only",children:"Select a tab"}),(0,r.jsx)("select",{id:"tiltControls",name:"tiltControls",className:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",defaultValue:null===(t=h.find(e=>e.current))||void 0===t?void 0:t.name,children:h.map(e=>(0,r.jsx)("option",{children:e.name},e.name))})]}),(0,r.jsx)("div",{className:"hidden sm:block",children:(0,r.jsx)("nav",{className:"isolate flex flex-col rounded-lg shadow","aria-label":"TiltControls",children:h.map((e,t)=>(0,r.jsxs)("div",{className:A("relative",0===t?"rounded-t-lg":"",t===h.length-1?"rounded-b-lg":"","min-w-0 flex-1 overflow-hidden py-4 px-4 text-center text-sm font-medium focus:z-10 hover:bg-gray-50"),onClick:()=>q(e.value),children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-black opacity-50"}),(0,r.jsx)("a",{href:e.href,className:A(e.current?"text-gray-900":"text-white","relative z-10"),"aria-current":e.current?"page":void 0,children:(0,r.jsx)(e.icon,{className:"mx-6 my-2 h-6 w-6","aria-hidden":"true"})}),t!==h.length-1&&(0,r.jsx)("div",{className:"absolute bottom-0 left-[12.5%] w-3/4 h-[1px] bg-gray-500"})]},e.name))})})]}),!E&&y?(0,r.jsx)("div",{className:"fixed bottom-16 left-1/2 transform -translate-x-1/2",onMouseDown:()=>U(!0),onMouseUp:()=>U(!1),onMouseLeave:()=>U(!1),onClick:()=>S(null),children:(0,r.jsx)("div",{className:A("p-6 rounded-full bg-black  text-white hover:text-gray-500",j?"opacity-70":"hover:bg-gray-50 opacity-50"),children:(0,r.jsx)(o.oHP,{className:"h-8 w-8"})})}):(0,r.jsx)(r.Fragment,{children:"NOBOX"}),!E&&(0,r.jsx)("div",{className:"absolute top-4 left-1/2 transform -translate-x-1/2 user-select-none pointer-events-none",children:(0,r.jsx)(n.lr,{size:1e3,states:{heading:L+P,headingRef:L}})}),!E&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"fixed w-4 h-px bg-white left-1/2 transform -translate-x-1/2 top-1/2"}),(0,r.jsx)("div",{className:"fixed w-px h-4 bg-white left-1/2 top-1/2 transform -translate-y-1/2"})]}),(0,r.jsxs)("div",{className:"absolute top-4 left-4 flex flex-col",children:[(0,r.jsxs)("span",{className:"relative z-0 mb-1 inline-flex shadow-sm rounded-md",children:[(0,r.jsxs)("button",{type:"button",className:"relative inline-flex items-center w-16 px-2 py-1 rounded-l-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:[(0,r.jsx)(c.bEv,{className:"-ml-1 mr-2 h-5 w-5 text-gray-400","aria-hidden":"true"}),"BOX"]}),(0,r.jsx)("button",{type:"button",className:"-ml-px relative inline-flex items-center justify-center w-20 px-2 py-1 rounded-r-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsxs)("span",{className:"ml-1",children:[((null==y?void 0:y.left)/f||0).toFixed(2)," / ",((null==y?void 0:y.top)/I||0).toFixed(2)]}),(0,r.jsxs)("span",{className:"ml-1",children:[(((null==y?void 0:y.left)+(null==y?void 0:y.width))/f||0).toFixed(2)," / ",(((null==y?void 0:y.top)+(null==y?void 0:y.height))/I||0).toFixed(2)]})]})})]}),(0,r.jsxs)("span",{className:"relative z-0 mb-1 inline-flex shadow-sm rounded-md",children:[(0,r.jsxs)("button",{type:"button",className:"relative inline-flex items-center w-16 px-2 py-1 rounded-l-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:[(0,r.jsx)(l.Z,{className:"-ml-1 mr-2 h-5 w-5 text-gray-400","aria-hidden":"true"}),"LLH"]}),(0,r.jsx)("button",{type:"button",className:"-ml-px relative inline-flex items-center justify-center w-20 py-1 rounded-r-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsxs)("span",{className:"ml-1",children:[B[1].toFixed(7),"\xb0"]}),(0,r.jsxs)("span",{className:"ml-1",children:[B[0].toFixed(6),"\xb0"]}),(0,r.jsxs)("span",{className:"ml-1",children:[K.toFixed(1)," m"]})]})})]}),(0,r.jsxs)("span",{className:"relative z-0 mb-1 inline-flex shadow-sm rounded-md",children:[(0,r.jsxs)("button",{type:"button",className:"relative inline-flex items-center w-20 px-2 py-1 rounded-l-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:[(0,r.jsx)(i.Z,{className:"-ml-1 mr-2 h-5 w-5 text-gray-400","aria-hidden":"true"}),"MGRS"]}),(0,r.jsx)("button",{type:"button",className:"-ml-px relative inline-flex items-center justify-center w-16 py-1 rounded-r-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsxs)("span",{className:"ml-1",children:[X.slice(0,3)," ",X.slice(3,5)]}),(0,r.jsx)("span",{className:"ml-1",children:X.slice(5,10)}),(0,r.jsx)("span",{className:"ml-1",children:X.slice(10,15)})]})})]})]}),(0,r.jsxs)("div",{className:"absolute top-4 right-4 flex flex-col",children:[(0,r.jsxs)("span",{className:"relative z-0 mb-1 inline-flex shadow-sm rounded-md",children:[(0,r.jsxs)("button",{type:"button",className:"relative inline-flex items-center w-20 px-2 py-1 rounded-l-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:[(0,r.jsx)(c.Dgg,{className:"-ml-1 mr-2 h-5 w-5 text-gray-400","aria-hidden":"true"}),"MODE (CMD)"]}),(0,r.jsx)("button",{type:"button",className:"-ml-px relative inline-flex items-center justify-center w-16 px-2 py-1 rounded-r-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("span",{className:"ml-1",children:"MANUAL"}),(0,r.jsx)("span",{className:"ml-1",children:"(AUTO)"})]})})]}),(0,r.jsxs)("span",{className:"relative z-0 mb-1 inline-flex shadow-sm rounded-md",children:[(0,r.jsxs)("button",{type:"button",className:"relative inline-flex items-center w-20 px-2 py-1 rounded-l-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:[(0,r.jsx)(c.Dgg,{className:"-ml-1 mr-2 h-5 w-5 text-gray-400","aria-hidden":"true"}),"PAN (CMD)"]}),(0,r.jsx)("button",{type:"button",className:"-ml-px relative inline-flex items-center justify-center w-16 px-2 py-1 rounded-r-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsxs)("span",{className:"ml-1",children:[P.toFixed(1),"\xb0"]}),(0,r.jsx)("span",{className:"ml-1",children:"(888.8\xb0)"})]})})]}),(0,r.jsxs)("span",{className:"relative z-0 mb-1 inline-flex shadow-sm rounded-md",children:[(0,r.jsxs)("button",{type:"button",className:"relative inline-flex items-center w-20 px-2 py-1 rounded-l-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:[(0,r.jsx)(c.KJO,{className:"-ml-1 mr-2 h-5 w-5 text-gray-400","aria-hidden":"true"}),"TILT (CMD)"]}),(0,r.jsx)("button",{type:"button",className:"-ml-px relative inline-flex items-center justify-center w-16 px-2 py-1 rounded-r-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsxs)("span",{className:"ml-1",children:[z.toFixed(1),"\xb0"]}),(0,r.jsx)("span",{className:"ml-1",children:"(888.8\xb0)"})]})})]}),(0,r.jsxs)("span",{className:"relative z-0 mb-1 inline-flex shadow-sm rounded-md",children:[(0,r.jsxs)("button",{type:"button",className:"relative inline-flex items-center w-20 px-2 py-1 rounded-l-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:[(0,r.jsx)(c.ehW,{className:"-ml-1 mr-2 h-5 w-5 text-gray-400","aria-hidden":"true"}),"RANGE"]}),(0,r.jsx)("button",{type:"button",className:"-ml-px relative inline-flex items-center justify-center w-16 px-2 py-1 rounded-r-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:(0,r.jsx)("div",{className:"flex flex-col",children:(0,r.jsx)("span",{className:"ml-1",children:"8888.8m"})})})]})]}),(0,r.jsx)("div",{className:"absolute bottom-8 right-4",children:(0,r.jsx)(_.Z,{className:"relative inline-flex"})})]})}},8357:function(e,t,a){"use strict";a.d(t,{w_:function(){return o}});var r=a(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=r.createContext&&r.createContext(n),l=function(){return(l=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},i=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)0>t.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};function o(e){return function(t){return r.createElement(c,l({attr:l({},e.attr)},t),function e(t){return t&&t.map(function(t,a){return r.createElement(t.tag,l({key:a},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var a,n=e.attr,s=e.size,o=e.title,c=i(e,["attr","size","title"]),d=s||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:a,style:l(l({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==s?r.createElement(s.Consumer,null,function(e){return t(e)}):t(n)}},7950:function(e,t,a){"use strict";var r=a(7294);let n=r.forwardRef(function({title:e,titleId:t,...a},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},a),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"}))});t.Z=n},4475:function(e,t,a){"use strict";var r=a(7294);let n=r.forwardRef(function({title:e,titleId:t,...a},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},a),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"}))});t.Z=n}},function(e){e.O(0,[445,764,13,617,675,774,888,179],function(){return e(e.s=4939)}),_N_E=e.O()}]);