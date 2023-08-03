(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[969],{442:function(e,t,i){"use strict";var l=i(5893),r=i(7294),o=i(9583);t.Z=function(){let[e,t]=(0,r.useState)(!1);return(0,l.jsx)("button",{className:"flex justify-center items-center w-7 h-7 border border-gray-400 text-gray-400 bg-white rounded hover:bg-gray-400 hover:text-white hover:border-gray-300",onClick:()=>{document.fullscreenElement?document.exitFullscreen&&(document.exitFullscreen(),t(!1)):(document.documentElement.requestFullscreen(),t(!0))},children:e?(0,l.jsx)(o.Y7H,{className:"h-4 w-4"}):(0,l.jsx)(o.a1O,{className:"h-4 w-4"})})}},7264:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return M}});var l=i(5893),r=i(7294),o=i(4285),s=i(4308),a=i(8587),n=i(3863),d=i(1990),c=i(3687),u=i(4872),x=i(3418),g=i(6206),m=i(8553);i(3403);var h=i(8866),p=i(6716),y=i(1335),f=i(6010),b=i(2237),v=i(1415),w=i(6249),j=i(6947),N=i(8340),k=i(9396);i(2771);var P=i(4475),L=i(7950),C=i(2643),Z=function(e){let{distance:t,mousePosition:i,className:r}=e;return(0,l.jsxs)("div",{className:(0,f.Z)(r,"flex flex-col"),children:[(0,l.jsxs)("span",{className:"relative z-0 inline-flex shadow-xl rounded-md",children:[(0,l.jsxs)("button",{type:"button",className:"relative inline-flex items-center w-24 px-2 py-1 rounded-l-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:[(0,l.jsx)(C.Z,{className:"-ml-1 mr-2 h-5 w-5 text-gray-400","aria-hidden":"true"}),"Distance"]}),(0,l.jsxs)("button",{type:"button",className:"-ml-px relative inline-flex items-center w-12 px-2 py-1 rounded-r-md border border-gray-300 bg-white text-xs font-medium text-gray-700",children:[t," km"]})]}),(0,l.jsxs)("div",{className:"flex w-36 mt-1 rounded-md shadow-xl border border-gray-300 bg-white text-xs font-medium text-gray-700",children:[(0,l.jsx)(P.Z,{className:"h-5 w-5 text-gray-400"}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("span",{className:"ml-1",children:["Lat: ",i.lngLat[1].toFixed(8)]}),(0,l.jsxs)("span",{className:"ml-1",children:["Lon: ",i.lngLat[0].toFixed(8)]})]})]}),(0,l.jsxs)("div",{className:"flex w-36 mt-1 rounded-md shadow-xl border border-gray-300 bg-white text-xs font-medium text-gray-700",children:[(0,l.jsx)(L.Z,{className:"h-5 w-5 text-gray-400"}),(0,l.jsx)("div",{className:"flex flex-col",children:(0,l.jsx)("span",{className:"ml-1",children:i.mgrs})})]})]})},S=i(39);i(4384);var A=i(696),G=i(442);let W={latitude:36.3721427,longitude:127.36039,zoom:16,pitcn:60,bearing:0,maxZoom:20,maxPitch:85},D=window.devicePixelRatio||1;function F(e){let{tile:t,object:i}=e;if(t){let{x:e,y:i,z:l}=t.index;return"tile: x: ".concat(e,", y: ").concat(i,", z: ").concat(l)}return i?"".concat(i.id,"\n").concat(i.latitude):null}function E(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t.filter(Boolean).join(" ")}let z=(e,t,i)=>[...i.slice(0,e),t,...i.slice(e)],I={rScaler:6553.6,gScaler:25.6,bScaler:.1,offset:-1e4};function M(e){let{showBorder:t=!1,onTilesLoad:i=null}=e,[P,L]=(0,r.useState)(W),C=(0,r.useRef)(null),[M,H]=(0,r.useState)(null),[O,R]=(0,r.useState)(null),[T,V]=(0,r.useState)({width:void 0,height:void 0}),B=()=>{V({width:window.innerWidth,height:window.innerHeight}),L(e=>{let t={...e,width:window.innerWidth,height:window.innerHeight};return C.current=new h.DW(t),t})},[Y,q]=(0,r.useState)(!1),[J,X]=(0,r.useState)({lngLat:[0,0]}),[K,Q]=(0,r.useState)({visible:!1,x:0,y:0,lngLat:[0,0]}),U=(0,r.useContext)(S.ZP),[$,ee]=(0,r.useState)({roll:10,pitch:-20,heading:-30,lat:36.3721427,lon:127.36039,alt:100,u:0,v:0,w:0,airspeed:0});(0,r.useEffect)(()=>{var e,t,i,l,r,o,s;ee({...$,roll:null==U?void 0:null===(e=U.flightStates)||void 0===e?void 0:e.roll,pitch:null==U?void 0:null===(t=U.flightStates)||void 0===t?void 0:t.pitch,heading:null==U?void 0:null===(i=U.flightStates)||void 0===i?void 0:i.heading,lat:null!==(o=null==U?void 0:null===(l=U.flightStates)||void 0===l?void 0:l.latitude)&&void 0!==o?o:36.3721427,lon:null!==(s=null==U?void 0:null===(r=U.flightStates)||void 0===r?void 0:r.longitude)&&void 0!==s?s:127.36039})},[U]);let[et,ei]=(0,r.useState)(0),[el,er]=(0,r.useState)([]),[eo,es]=(0,r.useState)(!1),[ea,en]=(0,r.useState)({id:"HOME",latitude:37.4604491,longitude:126.4441687,altitudeAGL:0,speed:3,priority:0,subPriority:1,icon:b.Z,color:"bg-rose-500",fillColor:"fill-rose-500"}),[ed,ec]=(0,r.useState)(""),eu=""===ed?[]:el.filter(e=>e.id.toLowerCase().includes(ed.toLowerCase())),ex=()=>{let e=_.findLastIndex(el,{priority:50}),t={};return 0!=K.lngLat[0]&&0!=K.lngLat[1]?((t=-1==e?{...el[parseInt(el.length/2)-1]||A.D3}:{...el[e]}).latitude=K.lngLat[1].toFixed(8),t.longitude=K.lngLat[0].toFixed(8)):t=-1==e?{...el[parseInt(el.length/2)-1]||A.D3}:{...el[e]},t.id="WP_".concat(t.subPriority+1),t.priority=50,t.subPriority=t.subPriority+1,t.icon=N.Z,t.color="bg-blue-500",t.fillColor="fill-blue-500",-1==e?er([...z(parseInt(el.length/2),t,el)]):er([...z(e+1,t,el)]),t},eg=(e,t)=>{let i=_.findLastIndex(t,{priority:50});for(let l=e;l<=i;++l)t[l].id="WP_".concat(t[l].subPriority-1),t[l].subPriority-=1;er(t)},em={type:"Feature",properties:{},geometry:{type:"LineString",coordinates:el.map(e=>[e.longitude,e.latitude,e.altitudeAGL])}},eh=()=>{let e=y.TuJ(el.map(e=>[parseFloat(e.longitude),parseFloat(e.latitude)]));ei(parseFloat(y.kE(e,{units:"kilometers"})).toPrecision(4))};(0,r.useCallback)(e=>{},[]),(0,r.useCallback)((e,t)=>{let i=[{...el.find(e=>e.id===t),latitude:parseFloat(e.lngLat.lat).toPrecision(8),longitude:parseFloat(e.lngLat.lng).toPrecision(9)}],l=el.map(e=>i.find(t=>t.id===e.id)||e);er(l)},[el]),(0,r.useCallback)(e=>{},[]);let ep=e=>{e.preventDefault(),en(ex()),es(!0)},ey=(e,t)=>{t.preventDefault(),en(e),es(!0)},ef=(e,t)=>{t.preventDefault();let i=_.findIndex(el,{id:e.id}),l=_.cloneDeep(el);l.splice(i,1),eg(i,l),es(!1)},eb=()=>{let e=_.findIndex(el,{priority:50}),t=_.findLastIndex(el,{priority:50});if(-1!=e&&-1!=t){let i=[...el];i.splice(e,t-e+1),er(i),ei(0)}},ev=(e,t)=>{t.preventDefault();let i=_.findIndex(el,{id:e.id}),l=t.target.parentElement.parentElement.children,r=l[0].children[1].value,o=l[1].children[1].value,s=l[2].children[1].value,a=l[3].children[1].value,n=[...el];n[i].latitude=!r||isNaN(r)?n[i].latitude:r,n[i].longitude=!o||isNaN(o)?n[i].longitude:o,n[i].altitudeAGL=!s||isNaN(s)?n[i].altitudeAGL:s,n[i].speed=!a||isNaN(a)?n[i].speed:a,er(n),es(!1)};(0,r.useEffect)(()=>{void 0!=el&&el.length>1&&eh()},[el]),(0,r.useEffect)(()=>(B(),window.addEventListener("resize",B),()=>window.removeEventListener("resize",B)),[]),(0,r.useEffect)(()=>{C.current=new h.DW({...P,width:T.width,height:T.height})},[P]);let ew=new a.Z({data:["/api/proxySat?z={z}&x={x}&y={y}"],maxRequests:20,pickable:!0,onViewportLoad:i,autoHighlight:t,highlightColor:[60,60,60,40],minZoom:0,maxZoom:19,tileSize:256,zoomOffset:1===D?-1:0,renderSubLayers:e=>{let{bbox:{west:i,south:l,east:r,north:o}}=e.tile;return[new n.Z(e,{data:null,image:e.data,bounds:[i,l,r,o]}),t&&new d.Z({id:"".concat(e.id,"-border"),data:[[[i,o],[i,l],[r,l],[r,o],[i,o]]],getPath:e=>e,getColor:[255,0,0],widthMinPixels:4})]}});new c.Z({id:"terrain",minZoom:0,maxZoom:19,strategy:"no-overlap",elevationDecoder:I,elevationData:"/api/proxyDem?z={z}&x={x}&y={y}",texture:"/api/proxySat?z={z}&x={x}&y={y}",wireframe:!1,color:[255,255,255]});let ej=new u.Z({id:"scenegraph-layer",data:[$],pickable:!0,scenegraph:"/drone.glb",getPosition:e=>[e.lon,e.lat,e.alt],getOrientation:e=>[-e.roll,-e.heading+180,-e.pitch+90],_animations:{"*":{speed:1}},sizeScale:100,_lighting:"pbr"});el.map(e=>({type:"Feature",properties:{id:e.id,fillColor:e.fillColor,altitudeAGL:e.altitudeAGL,speed:e.speed,priority:e.priority,subPriority:e.subPriority,color:e.color},geometry:{type:"Point",coordinates:[e.longitude,e.latitude]}})),(0,r.useCallback)(e=>{let{updatedData:t,editType:i}=e;if("movedPosition"===i){let e=t.features.map(e=>({id:e.properties.id,latitude:e.geometry.coordinates[1],longitude:e.geometry.coordinates[0],altitudeAGL:e.properties.altitudeAGL,speed:e.properties.speed,priority:e.properties.priority,subPriority:e.properties.subPriority,color:e.properties.color,fillColor:e.properties.fillColor}));er(e),setLineData({...em,geometry:{...em.geometry,coordinates:e.map(e=>[e.longitude,e.latitude,e.altitudeAGL])}})}},[em]);let eN=new d.Z({id:"path-layer",data:[em],pickable:!0,widthScale:1,widthMinPixels:5,getPath:e=>e.geometry.coordinates,getColor:()=>[219,39,119,153],getWidth:()=>2}),ek={home:{x:0,y:0,width:128,height:128,mask:!1},waypoint:{x:128,y:0,width:128,height:128,mask:!1,anchorY:64},dst1:{x:0,y:128,width:128,height:128,mask:!1},dst2:{x:128,y:128,width:128,height:128,mask:!1}},[eP,eL]=(0,r.useState)(!1),[eC,eZ]=(0,r.useState)([127.36074405,36.37206927]),[eS,eA]=(0,r.useState)(null),[eG,e_]=(0,r.useState)(null);(0,r.useEffect)(()=>{eP&&eS&&eZ(eS)},[eS,eP]);let eW=new x.Z({id:"icon-layer",data:el,pickable:!0,iconAtlas:"WaypointIcons.png",iconMapping:ek,getIcon:e=>"waypoint",getSize:e=>50,getPosition:e=>[Number(e.longitude),Number(e.latitude),Number(e.altitudeAGL)],getColor:e=>e.id==eG?[255,0,0,255]:[59,130,246,180],onHover:e=>{e_(e.object)},onDragStart:e=>{console.log(e),H(e),R(e.object.coordinates)},onDrag:e=>{let t=[{...el.find(t=>t.id===e.object.id),latitude:parseFloat(e.coordinate[1]).toPrecision(8),longitude:parseFloat(e.coordinate[0]).toPrecision(9)}],i=el.map(e=>t.find(t=>t.id===e.id)||e);er(i),H(e),R(e.object.coordinates),e.object===M&&R(e.coordinate)},onDragEnd:()=>{M&&(M.coordinates=O,H(null))}}),eD=new x.Z({id:"hovered-icon-layer",data:M?[M]:[],pickable:!1,iconAtlas:"WaypointIcons.png",iconMapping:ek,getIcon:e=>"waypoint",getSize:e=>30,getColor:e=>[255,0,0,255],getPosition:e=>e.coordinate});return(0,l.jsxs)("div",{className:"relative flex items-stretch h-screen w-screen min-h-screen",children:[(0,l.jsxs)("div",{className:"w-full h-full bg-gray-900",onContextMenu:e=>{if(e.preventDefault(),!Y){let{clientX:t,clientY:i}=e,l=new h.DW({...P,width:T.width,height:T.height}),r=l.unproject([t,i]);Q({visible:!0,x:e.clientX,y:e.clientY,lngLat:r})}},onClick:()=>{Q({visible:!1,x:0,y:0,lngLat:[0,0]})},onMouseDown:()=>{q(!1)},onMouseMove:e=>{q(!0);let{clientX:t,clientY:i}=e;if(C.current){let e=C.current.unproject([t,i]),l=p.eH(e,5),r="".concat(l.slice(0,3)," ").concat(l.slice(3,5)," ").concat(l.slice(5,10)," ").concat(l.slice(10,15));X({lngLat:e,mgrs:r})}},children:[(0,l.jsx)(g.Z,{layers:[ew,eN,eW,eD,ej],views:new m.Z({repeat:!0}),initialViewState:P,onViewStateChange:e=>{let{viewState:t}=e;M||(C.current=new h.DW({...t,width:T.width,height:T.height}),L({...t,...T}))},controller:{dragPan:!M,doubleClickZoom:!1,touchRotate:!0},getTooltip:F}),K.visible&&(0,l.jsxs)("div",{className:"fixed",style:{top:K.y,left:K.x},children:[(0,l.jsx)(v.Z,{className:"-mx-4 -my-4 w-8 h-8 text-gray-900 bg-white/60 rounded-t-2xl rounded-bl-2xl"}),(0,l.jsxs)("div",{className:"mx-4 my-4 bg-gray-950 shadow-xl rounded-md ring-1 ring-gray-400 divide-y divide-gray-300",children:[(0,l.jsxs)("button",{className:"group flex w-full text-sm rounded-t-md cursor-pointer px-2 py-1 text-gray-300 hover:bg-gray-200 hover:text-gray-900",onClick:e=>ep(e),children:[(0,l.jsx)("span",{className:(0,f.Z)("text-gray-900 border-gray-200 group-hover:border-sky-500 group-hover:text-sky-500","flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"),children:"⌘W"}),(0,l.jsx)("span",{className:"ml-2 group-hover:border-sky-600 group-hover:text-sky-600",children:"Add waypoint here"})]}),(0,l.jsxs)("p",{className:"group flex text-sm cursor-pointer px-2 py-1 text-gray-300 hover:bg-gray-200 hover:text-gray-900",onClick:e=>handleSetHomePosition(e),children:[(0,l.jsx)("span",{className:(0,f.Z)("text-gray-900 border-gray-200 group-hover:border-sky-500 group-hover:text-sky-500","flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"),children:"⌘H"}),(0,l.jsx)("span",{className:"ml-2 group-hover:border-sky-500 group-hover:text-sky-500",children:"Mark as home-position"})]}),(0,l.jsxs)("p",{className:"group flex text-sm cursor-pointer px-2 py-1 text-gray-300 hover:bg-gray-200 hover:text-gray-900",children:[(0,l.jsx)("span",{className:(0,f.Z)("text-gray-900 border-gray-200 group-hover:border-sky-500 group-hover:text-sky-500","flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"),children:"⌘D"}),(0,l.jsx)("span",{className:"ml-2 group-hover:border-sky-500 group-hover:text-sky-500",children:"Mark as destination"})]}),(0,l.jsxs)("p",{className:"group flex text-sm rounded-b-md cursor-pointer px-2 py-1 text-gray-300 hover:bg-gray-200 hover:text-gray-900",children:[(0,l.jsx)("span",{className:(0,f.Z)("text-gray-900 border-gray-200 group-hover:border-sky-500 group-hover:text-sky-500","flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"),children:"⌘?"}),(0,l.jsx)("span",{className:"ml-2 group-hover:border-sky-500 group-hover:text-sky-500",children:"Where is this?"})]})]})]})]}),(0,l.jsx)(Z,{distance:et,mousePosition:J,className:"absolute top-4 left-4"}),(0,l.jsxs)("div",{className:"absolute bottom-8 right-4",children:[(0,l.jsx)("button",{className:"relative inline-flex justify-center items-center w-7 mb-2 py-1 rounded-b-md border border-gray-300 bg-white text-xs font-medium text-gray-700",onClick:e=>eb(e),children:(0,l.jsx)(w.Z,{className:"h-4 w-4 text-gray-400","aria-hidden":"true"})}),(0,l.jsx)(G.Z,{className:"relative inline-flex"})]}),(0,l.jsx)("div",{className:"absolute top-8 right-8 w-72",children:(0,l.jsxs)(o.h,{as:"div",className:"mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all",onChange:e=>{},children:[(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)(k.Z,{className:"pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400","aria-hidden":"true"}),(0,l.jsx)(o.h.Input,{className:"h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm",placeholder:"Search...",onChange:e=>ec(e.target.value)})]}),eu.length>0&&(0,l.jsx)(o.h.Options,{static:!0,className:"max-h-64 scroll-py-3 overflow-y-auto p-3",children:eu.map(e=>(0,l.jsx)(o.h.Option,{value:e,className:e=>{let{active:t}=e;return E("flex cursor-default select-none rounded-xl p-3",t&&"bg-gray-100")},children:t=>{let{active:i}=t;return(0,l.jsxs)("div",{className:"w-64 flex",onClick:t=>ey(e,t),children:[(0,l.jsx)("div",{className:E("flex h-10 w-10 flex-none items-center justify-center rounded-lg",e.color),children:(0,l.jsx)(e.icon,{className:"h-6 w-6 text-white","aria-hidden":"true"})}),(0,l.jsxs)("div",{className:"ml-4 flex-auto",children:[(0,l.jsx)("p",{className:E("text-sm font-medium",i?"text-gray-900":"text-gray-700"),children:e.id}),(0,l.jsxs)("p",{className:E("text-xs",i?"text-gray-700":"text-gray-500"),children:["(",e.latitude,", ",e.longitude,")"]}),(0,l.jsxs)("p",{className:E("text-xs text-right",i?"text-gray-700":"text-gray-500"),children:[e.altitudeAGL,"m AGL"]})]})]})}},e.id))}),0===eu.length&&(""===ed?(0,l.jsx)(o.h.Options,{static:!0,className:"max-h-64 scroll-py-3 overflow-y-auto p-3",children:el.map(e=>(0,l.jsx)(o.h.Option,{value:e,className:e=>{let{active:t}=e;return E("flex cursor-default select-none rounded-xl p-3",t&&"bg-gray-100")},children:t=>{let{active:i}=t;return(0,l.jsxs)("div",{className:"w-72 flex",onClick:t=>ey(e,t),children:[(0,l.jsx)("div",{className:E("flex h-10 w-10 flex-none items-center justify-center rounded-lg",e.color),children:(0,l.jsx)(e.icon,{className:"h-6 w-6 text-white","aria-hidden":"true"})}),(0,l.jsxs)("div",{className:"ml-4 flex-auto",children:[(0,l.jsx)("p",{className:E("text-sm font-medium",i?"text-gray-900":"text-gray-700"),children:e.id}),(0,l.jsxs)("p",{className:E("text-xs",i?"text-gray-700":"text-gray-500"),children:["(",e.latitude,", ",e.longitude,")"]}),(0,l.jsxs)("p",{className:E("text-xs text-right",i?"text-gray-700":"text-gray-500"),children:[e.altitudeAGL,"m AGL"]})]})]})}},e.id))}):(0,l.jsxs)("div",{className:"py-14 px-6 w-72 text-center text-sm",children:[(0,l.jsx)(j.Z,{type:"outline",name:"exclamation-circle",className:"mx-auto h-6 w-6 text-gray-400"}),(0,l.jsx)("p",{className:"mt-4 font-semibold text-gray-900",children:"No results found"}),(0,l.jsx)("p",{className:"mt-2 text-gray-500",children:"No components found for this search term. Please try again."})]}))]})}),(0,l.jsx)(s.V,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",open:eo,onClose:()=>es(!1),children:(0,l.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-32 px-4 pb-20 text-center sm:block",children:[(0,l.jsx)(s.V.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"}),(0,l.jsxs)("div",{className:"relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6",children:[(0,l.jsx)("div",{className:E("mx-auto flex items-center justify-center h-12 w-12 rounded-full",ea.color),children:(0,l.jsx)(ea.icon,{className:"h-6 w-6 text-white","aria-hidden":"true"})}),(0,l.jsx)("div",{className:"mt-3 text-center sm:mt-5",children:(0,l.jsx)(s.V.Title,{as:"h3",className:"text-lg leading-6 font-medium text-gray-900",children:ea.id})}),(0,l.jsx)(s.V.Description,{className:"mt-4 text-gray-500",children:"Replace latitude, longitude, altitude, and speed to change the waypoint."}),(0,l.jsxs)("div",{className:"mt-5 flex flex-col items-center",children:[(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsx)("label",{htmlFor:"latitude",className:"text-sm text-gray-700",children:"Latitude [deg]"}),(0,l.jsx)("input",{type:"text",name:"latitude",id:"latitude",className:"my-1 px-1 py-1 text-sm text-gray-700 shadow-sm border focus:ring-sky-500 focus:border-sky-500 block w-full border-gray-300 rounded-md",placeholder:ea.latitude})]}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsx)("label",{htmlFor:"longitude",className:"text-sm text-gray-700",children:"Longitude [deg]"}),(0,l.jsx)("input",{type:"text",name:"longitude",id:"longitude",className:"my-1 px-1 py-1 text-sm text-gray-700 shadow-sm border focus:ring-sky-500 focus:border-sky-500 block w-full border-gray-300 rounded-md",placeholder:ea.longitude})]}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsx)("label",{htmlFor:"altitude",className:"text-sm text-gray-700",children:"Altitude [m, AGL]"}),(0,l.jsx)("input",{type:"text",name:"altitude",id:"altitude",className:"my-1 px-1 py-1 text-sm text-gray-700 shadow-sm border focus:ring-sky-500 focus:border-sky-500 block w-full border-gray-300 rounded-md",placeholder:ea.altitudeAGL})]}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsx)("label",{htmlFor:"speed",className:"text-sm text-gray-700",children:"Speed [m/s]"}),(0,l.jsx)("input",{type:"text",name:"speed",id:"speed",className:"my-1 px-1 py-1 text-sm text-gray-700 shadow-sm border focus:ring-sky-500 focus:border-sky-500 block w-full border-gray-300 rounded-md",placeholder:ea.speed})]}),(0,l.jsxs)("div",{className:"mt-5 sm:mt-6",children:[(0,l.jsx)("button",{className:"mx-1 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#002c5f] text-base font-medium text-white hover:bg-[#aacae6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#002c5f] sm:text-sm",onClick:e=>ev(ea,e),children:"Modify"}),(0,l.jsx)("button",{className:"mx-1 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#002c5f]   sm:text-sm",onClick:()=>es(!1),children:"Cancel"})]})]}),ea.id.includes("WP_")?(0,l.jsx)("div",{className:"mt-5 sm:mt-6",children:(0,l.jsx)("button",{className:"inline-flex justify-center w-full px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",onClick:e=>ef(ea,e),children:"Delete Waypoint"})}):(0,l.jsx)("div",{})]})]})})]})}},4384:function(e,t,i){"use strict";var l=i(5893),r=i(7294);t.Z=r.memo(function(e){let{size:t=20,label:i,fillColor:r="fill-rose-500"}=e;return(0,l.jsxs)("div",{className:"flex flex-col items-center",children:[(0,l.jsx)("div",{children:(0,l.jsx)("svg",{height:t,viewBox:"0 0 24 24",className:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t.filter(Boolean).join(" ")}("stroke-2 stroke-white",r),children:(0,l.jsx)("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})})}),(0,l.jsx)("div",{className:"absolute ml-16 mt-5 px-1 bg-white/50",children:(0,l.jsx)("p",{className:"text-center text-black text-sm font-bold",children:i})})]})})},696:function(e,t,i){"use strict";i.d(t,{D3:function(){return s},gG:function(){return a},h9:function(){return n}});var l=i(2237),r=i(9696),o=i(8340);let s={latitude:37.557195,longitude:126.795112,altitudeAGL:0,speed:3,subPriority:0},a=[{id:"HOME",latitude:37.572098,longitude:126.773707,altitudeAGL:0,speed:5,priority:0,subPriority:0,icon:l.Z,color:"bg-rose-500",fillColor:"fill-rose-500"},{id:"WP_1",latitude:37.572098,longitude:126.773707,altitudeAGL:1e3,speed:15,priority:50,subPriority:1,icon:o.Z,color:"bg-blue-500",fillColor:"fill-blue-500"},{id:"WP_2",latitude:37.587943,longitude:126.827151,altitudeAGL:1e3,speed:20,priority:50,subPriority:2,icon:o.Z,color:"bg-blue-500",fillColor:"fill-blue-500"},{id:"WP_3",latitude:37.536468,longitude:126.914962,altitudeAGL:1e3,speed:25,priority:50,subPriority:3,icon:o.Z,color:"bg-blue-500",fillColor:"fill-blue-500"},{id:"WP_4",latitude:37.508751,longitude:126.980459,altitudeAGL:1e3,speed:20,priority:50,subPriority:4,icon:o.Z,color:"bg-blue-500",fillColor:"fill-blue-500"},{id:"WP_5",latitude:37.536798,longitude:127.026495,altitudeAGL:1e3,speed:15,priority:50,subPriority:5,icon:o.Z,color:"bg-blue-500",fillColor:"fill-blue-500"},{id:"WP_6",latitude:37.527455,longitude:127.058391,altitudeAGL:1e3,speed:10,priority:50,subPriority:6,icon:o.Z,color:"bg-blue-500",fillColor:"fill-blue-500"},{id:"DEST",latitude:37.511865,longitude:127.063515,altitudeAGL:0,speed:5,priority:100,subPriority:0,icon:r.LocationMarkerIcon,color:"bg-rose-500",fillColor:"fill-rose-500"}],n=[{id:"HOME",latitude:37.4604491,longitude:126.4441687,altitudeAGL:0,speed:3,priority:0,subPriority:0,icon:l.Z,color:"bg-rose-500",fillColor:"fill-rose-500"},{id:"TR_F",latitude:37.4604491,longitude:126.4441687,altitudeAGL:1e3,speed:3,priority:10,subPriority:0,icon:r.RefreshIcon,color:"bg-amber-500",fillColor:"fill-amber-500"},{id:"WP_1",latitude:37.499763,longitude:126.408383,altitudeAGL:1e3,speed:15,priority:50,subPriority:1,icon:o.Z,color:"bg-blue-500",fillColor:"fill-blue-500"},{id:"WP_2",latitude:37.557485,longitude:126.600064,altitudeAGL:1e3,speed:15,priority:50,subPriority:2,icon:o.Z,color:"bg-blue-500",fillColor:"fill-blue-500"},{id:"WP_3",latitude:37.570447,longitude:126.63851,altitudeAGL:1e3,speed:15,priority:50,subPriority:3,icon:o.Z,color:"bg-blue-500",fillColor:"fill-blue-500"},{id:"WP_4",latitude:37.574271,longitude:126.757715,altitudeAGL:1e3,speed:15,priority:50,subPriority:4,icon:o.Z,color:"bg-blue-500",fillColor:"fill-blue-500"},{id:"WP_5",latitude:37.602322,longitude:126.807035,altitudeAGL:1e3,speed:15,priority:50,subPriority:5,icon:o.Z,color:"bg-blue-500",fillColor:"fill-blue-500"},{id:"WP_6",latitude:37.507934,longitude:126.980449,altitudeAGL:1e3,speed:15,priority:50,subPriority:6,icon:o.Z,color:"bg-blue-500",fillColor:"fill-blue-500"},{id:"WP_7",latitude:37.537012,longitude:127.026548,altitudeAGL:1e3,speed:15,priority:50,subPriority:7,icon:o.Z,color:"bg-blue-500",fillColor:"fill-blue-500"},{id:"WP_8",latitude:37.529701,longitude:127.055958,altitudeAGL:1e3,speed:15,priority:50,subPriority:8,icon:o.Z,color:"bg-blue-500",fillColor:"fill-blue-500"},{id:"TR_B",latitude:37.512388,longitude:127.063284,altitudeAGL:1e3,speed:3,priority:90,subPriority:0,icon:r.RefreshIcon,color:"bg-amber-500",fillColor:"fill-amber-500"},{id:"DEST",latitude:37.512388,longitude:127.063284,altitudeAGL:0,speed:3,priority:100,subPriority:0,icon:r.LocationMarkerIcon,color:"bg-rose-500",fillColor:"fill-rose-500"}]},7180:function(){}}]);