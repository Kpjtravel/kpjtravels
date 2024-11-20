(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33],{9424:function(e,t,a){Promise.resolve().then(a.bind(a,7056))},5813:function(e,t,a){"use strict";a.d(t,{j:function(){return r}});let s=(0,a(1904).oM)({name:"checkoutData",initialState:{data:{}},reducers:{checkoutData(e,t){e.data={...t.payload.checkoutData}}}}),r=s.actions;t.Z=s.reducer},2416:function(e,t,a){"use strict";a.d(t,{LV:function(){return u},mZ:function(){return f},We:function(){return h},EB:function(){return p}}),(s=n||(n={})).airport="airport",s.other="other",(r=o||(o={})).PENDING_ACTIVATION="PENDING_ACTIVATION",r.ISSUED="ISSUED",r.BLOCKED="BLOCKED",r.CONSUMED="CONSUMED",r.EXPIRED="EXPIRED",(i=c||(c={})).pickupTime="pickupTime",i.originName="originName",i.destName="destName",i.landmark="landmark",i.terminal="terminal",i.bookReturn="bookReturn",i.returnPickupTime="returnPickupTime",(l=d||(d={})).destAddress="destAddress",l.destLocality="destLocality",l.destPincode="destPincode",l.originAddress="originAddress",l.originLocality="originLocality",l.originPincode="originPincode";var s,r,i,l,n,o,c,d,m=a(2247);function p(e,t){let{userId:a,page:s,pageSize:r}=e;return(0,m.d)(m.b.get("/api/trip/getNextTripForCustomer",{params:{page:s,pageSize:r,userId:a},signal:t}),{title:"Unable to fetch upcoming trips data",description:"Please try again!"})}function f(e){return(0,m.d)(m.b.post("/api/trip/getFare",e),{title:"Unable to fetch the fare data",description:"Please try again!"})}function h(e){return(0,m.d)(m.b.post("/api/trip/getFareAndConfirmation",e),{title:"Unable to fetch updated fare and confirmation status",description:"Please try again!"})}function u(e){return(0,m.d)(m.b.post("/api/order/create",e),{title:"Unable to create order",description:"Please try again!"})}},6278:function(e,t,a){"use strict";a.d(t,{Jy:function(){return i},gU:function(){return n},re:function(){return c},sv:function(){return l},tm:function(){return o}});var s=a(1822),r=a(6150);a(9212);let i=[{id:1,label:"Airport Transfers",icon:"/icon/airport-transfers.svg",query:"airport-transfers",operationType:r.C8.AIRPORT_TRANSFER},{id:2,label:"City Rentals",icon:"/icon/outstation.svg",query:"city-rentals",operationType:r.C8.INTRACITY_RENTAL},{id:3,label:"Outstation Trips",icon:"/icon/city-rentals.svg",query:"outstation",operationType:r.C8.OUTSTATION}],l=e=>{var t;return null!==(t=({"airport-transfers":r.C8.AIRPORT_TRANSFER,"city-rentals":r.C8.INTRACITY_RENTAL,outstation:r.C8.OUTSTATION})[e])&&void 0!==t?t:r.C8.AIRPORT_TRANSFER};function n(e,t,a,i,l,n,o){let c={},d={address:e.destAddress,latitude:e.destinationLatitude,longitude:e.destinationLongitude,locality:e.destLocality,name:e.destName,pincode:e.destPincode},m={address:e.originAddress,latitude:e.originLatitude,longitude:e.originLongitude,locality:e.originLocality,name:e.originName,pincode:e.originPincode},p=d,f=m;return e.dutyType===r.GX.PICKUP_FROM_AIRPORT?(p=d,f="Terminal 1"===t?s.FE:s.JK):(p="Terminal 1"===t?s.FE:s.JK,f=m),c.destAddress=f.address,c.destinationLatitude=f.latitude,c.destinationLongitude=f.longitude,c.destLocality=f.locality,c.destName=f.name,c.destPincode=f.pincode,c.originAddress=p.address,c.originLatitude=p.latitude,c.originLongitude=p.longitude,c.originLocality=p.locality,c.originName=p.name,c.originPincode=p.pincode,c.flightNumber=null!=o?o:void 0,c.landmark=e.landmark,c.fare=e.fare,c.tripDistance=e.tripDistance,c.predictedDurationMins=e.predictedDurationMins,c.useToll=a,c.pickupTime=i,c.terminal=t,c.petType=l,c.dutyType="DROP_TO_AIRPORT"===e.dutyType?r.GX.PICKUP_FROM_AIRPORT:r.GX.DROP_TO_AIRPORT,c.placardMsg=n,c}function o(e){return{state:r.Kq.BOOKING_INITIATED}}let c=e=>{let t;switch(e){case r.kY["Payment Failed"]:t="Payment Failed";break;case r.kY.PAYMENT_PENDING:t="Payment Pending";break;case r.kY.CONFIRMATION_PENDING:t="Pending";break;case r.kY.DECLINED:t="Declined";break;case r.kY.BOOKED:t="Confirmed";break;case r.kY.ON_THE_WAY:t="Enroute";break;case r.kY.REACHED:t="Reached";break;case r.kY.ALLOCATED:t="Allocated";break;case r.kY.STARTED:t="Started";break;case r.kY.COMPLETED:t="Completed";break;case r.kY.CANCELLED:t="Cancelled";break;default:t="Unknown"}return t}},8651:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var s=a(7437),r=a(2265),i=a(2247);let l=e=>"api/trip/".concat(e,"/markfeedbackshown");var n=e=>{let{name:t,phone:a,tripId:n,driverId:o,driverName:c}=e,d=async e=>{await (0,i.d)(i.b.put(l(e)),{title:"Failed to update the trip",description:"Please try again!"})};return(0,r.useEffect)(()=>{let e;return async function(){(e=document.createElement("script")).src="https://paperform.co/__embed.min.js",e.onload=()=>{n&&o&&c&&(Paperform.popup("ifcnmpdg",{prefill:"name="+t+"&phone="+a+"&tripId="+n+"&driverId="+ +o+"&driverName="+c}),d(n))},document.body.appendChild(e)}(),()=>{e&&document.body.removeChild(e)}},[n,t,a,o,c]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("button",{"data-paperform-id":"ifcnmpdg","data-popup-button":"1"})})}},6374:function(e,t,a){"use strict";var s=a(7437),r=a(5810),i=a(7440),l=a(4087),n=a(6648),o=a(7138),c=a(6463),d=a(2265),m=a(1444);let p=[{title:"Home",route:r.Z.Home,icon:"/icon/payment/home.svg",activeIcon:"/icon/payment/home-gold.svg"},{title:"Rides",route:r.Z.Trips,icon:"/icon/payment/car.svg",activeIcon:"/icon/payment/car-gold.svg"},{title:"Profile",route:r.Z.Profile,icon:"/icon/default-user.svg",activeIcon:"/icon/gold-user.svg"}];t.Z=()=>{let e=(0,c.usePathname)(),[t,a]=(0,d.useState)(!1),r=(0,m.I0)();(0,d.useEffect)(()=>{a((0,i.Pc)()),r((0,l.w)(!1))},[r]);let f=(t,a)=>{t.ctrlKey||t.metaKey||a===e||r((0,l.w)(!0))};return(0,s.jsx)(s.Fragment,{children:t&&(0,s.jsx)("nav",{className:"fixed bottom-0 z-50 flex h-[70px] w-full items-start justify-between border-t border-solid border-[rgba(255,255,255,0.10)] bg-shoffr-deep-brown px-16 py-4 sm:hidden",children:p.map((t,a)=>{let r=e===t.route||"/"===t.route&&"/"===e;return(0,s.jsxs)(o.default,{id:"".concat(t.title," page"),onClick:e=>f(e,t.route),href:t.route,className:"relative z-50 flex flex-col items-center justify-center gap-1",children:[(0,s.jsx)(n.default,{src:r?t.activeIcon:t.icon,alt:t.title,height:20,width:20}),(0,s.jsx)("p",{className:"label-x-small text-center font-semibold ".concat(r?"gradient-text":"text-shoffr-secondary"),children:t.title})]},a)})})})}},8790:function(e,t,a){"use strict";a.d(t,{AT:function(){return m},bT:function(){return u},g0:function(){return h},hf:function(){return d},kb:function(){return f},sT:function(){return p},wt:function(){return x}});var s=a(2247),r=a(8813);let i=e=>"/api/website/trip/".concat(e),l=e=>"/api/website/trip/".concat(e,"/tracking"),n=e=>"/api/trip/".concat(e,"/cancel"),o=e=>"/api/trip/".concat(e,"/update"),c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return"/api/order/item/".concat(e,"/invoice/download")};function d(e){let{tripId:t}=e;return(0,s.d)(s.b.get(i(t)),{title:"Unable to fetch upcoming trips data",description:"Please try again!"})}function m(e,t){let{userId:a,page:r,pageSize:i}=e;return(0,s.d)(s.b.get("/api/website/trip/upcoming",{params:{page:r,pageSize:i,userId:a},signal:t}),{title:"Unable to fetch upcoming trips data",description:"Please try again!"})}function p(e,t){let{userId:a,page:r,pageSize:i}=e;return(0,s.d)(s.b.get("/api/website/trip/past",{params:{page:r,pageSize:i,userId:a},signal:t}),{title:"Unable to fetch past trips data",description:"Please try again!"})}function f(e){let{tripId:t,reqId:a,otp:r,cancellationReasonId:i}=e;return(0,s.d)(s.b.put(n(t),{},{params:{reqId:a,otp:r,cancellationReasonId:i}}),{title:"Failed to cancel the trip",description:"Please try again!"})}function h(e,t){return(0,s.d)(s.b.put(o(e),t,{}),{title:"Failed to update the trip",description:"Please try again!"})}async function u(e){return fetch(c(e),{method:"GET",headers:{"Content-Type":"application/octet-stream",Authorization:(0,r.bW)()}})}function x(e){let{tripId:t}=e;return(0,s.d)(s.b.get(l(t)),{title:"Unable to fetch trip tracking data",description:"Please try again!"})}},3272:function(e,t,a){"use strict";var s=a(7437),r=a(8202),i=a(6648);a(2265);var l=a(7138);t.Z=()=>(0,s.jsxs)("footer",{className:"flex w-full flex-col items-start gap-16 bg-shoffr-deep-brown pb-[72px] pt-9 md:py-16",children:[(0,s.jsxs)("article",{className:"m-auto flex w-[90%] flex-col items-start justify-between gap-16 self-stretch max-lg:gap-16 xl:w-[1212px] xl:flex-row",children:[(0,s.jsxs)("div",{className:"flex w-full flex-col items-start gap-4 self-stretch md:w-[297px] md:justify-between",children:[(0,s.jsx)(i.default,{src:"/image/shoffr-event-logo.png",alt:"shoffr",width:266,height:55,className:"h-8 w-[144px] md:h-10 md:w-[198.298px]",draggable:!1}),(0,s.jsx)("p",{className:"label-medium w-full text-xs font-normal text-shoffr-secondary md:w-[295px]",children:"4th Floor, Janardhan Towers, 133/2 Residency Road, Bangalore 560025"})]}),(0,s.jsx)("div",{className:"grid w-full grid-cols-2 items-start justify-between gap-10 md:w-[689px] md:grid-cols-3 lg:grid-cols-4",children:r.Mv.map((e,t)=>Object.entries(e).map(e=>{let[a,r]=e;return(0,s.jsxs)("div",{className:"flex flex-col items-start gap-4",children:[(0,s.jsx)("h4",{className:"title-x-small font-bold uppercase text-shoffr-primary",children:a}),(0,s.jsx)("ul",{className:"flex ".concat("Explore Our World"===a?"flex-row gap-3":"flex-col gap-2"," items-start self-stretch"),children:r.map(e=>(0,s.jsx)(l.default,{className:"duration-300",href:e.route,id:e.label,children:e.imgUrl?(0,s.jsx)(i.default,{src:e.imgUrl,alt:e.label,width:24,height:24}):(0,s.jsx)("p",{className:"body-medium text-shoffr-secondary hover:text-shoffr-primary",children:e.label})},e.id))})]},t+a)}))})]}),(0,s.jsxs)("p",{className:"body-medium w-full text-center font-semibold text-shoffr-secondary",children:[new Date().getFullYear()," \xa9 All rights reserved."]})]})},2325:function(e,t,a){"use strict";var s=a(7437),r=a(6648),i=a(7138),l=a(2265),n=a(7440),o=a(1444),c=a(5810),d=a(4087),m=a(6463);t.default=()=>{let[e,t]=(0,l.useState)(null),[a,p]=(0,l.useState)(0),f=(0,n.lp)(),h=(0,o.I0)(),[u,x]=((0,m.usePathname)(),(0,l.useState)(!0));return(0,s.jsx)("div",{className:"flex w-full justify-center px-[22px] pt-[24px]  md:px-[48px] md:pt-[28px] \n        ",children:(0,s.jsxs)("nav",{className:"flex h-[24px] w-[1212px] items-center justify-between md:h-[40px]",children:[(0,s.jsx)(i.default,{href:"/",children:(0,s.jsx)(r.default,{src:"/icon/shoffr-white-hex.svg",alt:"shoffr logo",height:28,width:25.2})}),f.id?(0,s.jsxs)("div",{className:"hidden items-center gap-6 md:flex",children:[(0,s.jsx)(i.default,{href:c.Z.Trips,className:"",children:(0,s.jsx)("h2",{onClick:()=>h((0,d.w)(!0)),className:"label-medium w-fit font-semibold ".concat((c.Z.Trips,"text-shoffr-primary")),children:"My Trips"})}),(0,s.jsx)(i.default,{href:c.Z.Profile,className:"",children:(0,s.jsx)("h2",{onClick:()=>h((0,d.w)(!0)),className:"label-medium w-fit font-semibold ".concat((c.Z.Trips,"text-shoffr-primary")),children:f.firstName})})]}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(i.default,{href:c.Z.Login,className:" flex size-fit items-center justify-center rounded-full border border-solid border-shoffr-primary bg-transparent px-6 py-2",children:(0,s.jsx)("span",{onClick:()=>h((0,d.w)(!0)),className:"label-small text-center font-semibold text-shoffr-primary",children:"Log In"})})})]})})}},7056:function(e,t,a){"use strict";a.d(t,{default:function(){return z}});var s=a(7437),r=a(2265),i=a(3272),l=a(6648),n=a(7138),o=()=>{let[e,t]=(0,r.useState)(!1),[a,i]=(0,r.useState)(!1);return(0,s.jsxs)("section",{className:"border-neutral-gradient z-[1] m-auto mb-[72px] flex w-[90%] flex-col items-center overflow-hidden rounded-lg lg:max-h-[412px] lg:flex-row-reverse lg:px-16 xl:max-w-[1212px]",children:[(0,s.jsx)("div",{className:"flex h-max flex-col items-center justify-end self-stretch overflow-hidden pb-0 pl-[43px] pr-[43.005px] pt-14 md:flex-1 md:pl-[45px] md:pr-[13.108px] md:pt-[78px]",children:(0,s.jsx)("div",{className:"relative h-[309px] w-[226px] md:h-[333px] md:w-[306px]",children:(0,s.jsx)(l.default,{className:"scale-[1.3] object-cover object-top pb-8",src:"/image/get-the-app.png",alt:"Get shoffr for mobile",layout:"fill"})})}),(0,s.jsxs)("div",{className:"border-neutral-gradient flex w-full flex-col gap-8 border-0 border-t px-6 py-12 sm:gap-14 sm:py-16 md:flex-1 md:px-8 lg:w-[492px] lg:border-none lg:px-0 ",children:[(0,s.jsxs)("div",{className:"flex items-center justify-start gap-3",children:[(0,s.jsx)("div",{className:"surface-bg-brand flex size-[32px] rounded sm:size-[64px]",children:(0,s.jsx)(l.default,{className:"invert-colors m-auto sm:h-[36.267px] sm:w-[38.4px]",src:"/icon/shoffr-white-hex.svg",alt:"shoffr logo",width:19.2,height:18.2})}),(0,s.jsx)("h3",{className:"title-medium md:title-large  font-semibold text-shoffr-primary",children:"Download the app"})]}),(0,s.jsxs)("div",{className:"flex w-full items-center justify-between gap-4",children:[(0,s.jsxs)(n.default,{id:"Download App - Apple Store",href:"https://apps.apple.com/in/app/shoffr/id6477756888",className:"title-x-small gradient-gold-cta-text flex h-auto flex-1 items-center justify-center gap-1 rounded-full border border-[#FFF3CA] bg-transparent px-[24px] py-[16px] font-semibold hover:bg-transparent",onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:[(0,s.jsx)(l.default,{loading:"lazy",src:e?"/icon/apple-store-hover-state.svg":"/icon/apple-store.svg",alt:"get shoffr on apple store",width:16.96,height:20.83,className:"size-[14px] sm:size-[20px]"}),"Apple Store"]}),(0,s.jsxs)(n.default,{id:"Download App - Google Play",href:"https://play.google.com/store/apps/details?id=com.shoffrdriverapp",className:"title-x-small gradient-gold-cta-text flex h-auto flex-1 items-center justify-center gap-1 rounded-full border border-[#FFF3CA] bg-transparent px-[20px] py-[16px] font-semibold hover:bg-transparent",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[(0,s.jsx)(l.default,{loading:"lazy",src:a?"/icon/google-play-hover-state.svg":"/icon/google-play.svg",alt:"get shoffr on google play",width:17.85,height:18.84,className:"size-[13px] sm:size-[18px]"}),"Google Play"]})]})]})]})},c=a(6278),d=a(1444),m=a(4087),p=a(5810),f=()=>{let e=(0,d.I0)(),t=(t,a)=>{t.ctrlKey||t.metaKey||e((0,m.w)(!0))};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"flex flex-wrap items-start gap-[13.825px] md:gap-[32px]",children:c.Jy.map(e=>(0,s.jsxs)(n.default,{onClick:e=>t(e,p.Z.Home),href:"/booking?operationType=".concat(e.query),id:e.label,className:"surface-glass border-neutral-gradient flex h-32 flex-1 flex-col items-center justify-end gap-2 rounded px-3 py-6 sm:h-[64px] sm:w-[266.33px] sm:flex-row sm:justify-center sm:rounded-full sm:bg-shoffr-primary sm:hover:bg-shoffr-cta-hover",children:[(0,s.jsx)(l.default,{src:e.icon,alt:e.label,height:28,width:28,className:"sm:invert-colors size-[28px] scale-[1.2] sm:size-[24px] sm:scale-[1.35] ".concat("Outstation Trips"===e.label&&"scale-110  sm:scale-[1.15]"," ").concat("Airport Transfers"===e.label&&"sm:rotate-90"),draggable:!1}),(0,s.jsx)("p",{className:"label-small sm:label-large w-14 flex-wrap text-center text-white sm:w-auto sm:text-shoffr-black",children:e.label})]},e.id))})})},h=()=>(0,s.jsx)("div",{className:"m-auto mb-[72px] w-[90%] md:mb-[64px] lg:w-[932px]",children:(0,s.jsxs)("div",{className:"flex w-full flex-col gap-[32px] sm:gap-[48px]",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center  gap-4 sm:gap-5",children:[(0,s.jsx)(l.default,{src:"/icon/shoffr-hero-logo.svg",alt:"shoffr",width:252,height:50,className:"h-[38px] w-[186px] sm:h-[50px] sm:w-[252px]",draggable:!1}),(0,s.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,s.jsx)("span",{className:"border-brand-gradient h-px w-[40px] rotate-0"}),(0,s.jsx)("p",{className:" sm:title-medium title-x-small gradient-text font-avenirnext",children:"THE GOLD STANDARD OF RIDES"}),(0,s.jsx)("span",{className:"border-brand-gradient h-px w-[40px] rotate-180"})]})]}),(0,s.jsx)("div",{children:(0,s.jsx)(f,{})})]})});let u="/icon/x-icon.png",x=(0,s.jsx)(n.default,{className:"underline",href:"https://x.com/shoffr_in",children:"@shoffr_in"}),g=(0,s.jsx)(n.default,{className:"underline",href:"https://x.com/kislayverma",children:"@kislayverma"}),b=(0,s.jsx)(n.default,{className:"underline",href:"https://x.com/vikasbardia",children:"@vikasbardia"}),w=(0,s.jsx)(n.default,{className:"underline",href:"https://x.com/BYDCompany",children:"@BYDCompany"}),j=[{profilePic:"/icon/tweets/user_profile/SatishSuggala.png",name:"Satish Suggala",userName:"@SatishSuggala",logo:u,redirectLink:"https://x.com/SatishSuggala/status/1632762459407765512",contentBody:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("p",{children:["Folks flying to/from Blr, try ",x," for your next ride."]}),(0,s.jsx)("p",{children:"All electric fleet, polite drivers & stellar in-cab experience."}),(0,s.jsxs)("p",{children:["Top job ",g," and team"]})]}),contentImage:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l.default,{src:"/icon/tweets/review_images/SatishSuggala.png",alt:"Chitra Singh Shoffr Review",width:270,height:290,className:"size-full overflow-auto"})})},{profilePic:"/icon/tweets/user_profile/ChitraSingh.png",name:"Chitra Singh",userName:"@chit_raa",logo:u,redirectLink:"https://x.com/chit_raa/status/1765914538615226607",contentBody:(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("p",{children:["The ",x," cab experience today to the airport has been the best I’ve had in years! The promise UberBlack started with. Spacious Xuv, working AC, courteous driver who wasn’t on call with anyone, something 99% ",(0,s.jsx)(n.default,{href:"https://x.com/hashtag/blr?src=hashtag_click",className:"underline",children:"#blr"})," cab drivers are infamous for! Excellent driving, affordable cabs."]})}),contentImage:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l.default,{src:"/icon/tweets/review_images/ChitraSingh.png",alt:"Chitra Singh Shoffr Review",width:270,height:273,className:"size-full overflow-auto"})})},{profilePic:"/icon/tweets/user_profile/Inc€nd1ary.png",name:"Inc€nd1ary",userName:"@PabloEkshobaar",logo:u,redirectLink:"https://x.com/thisisabhash/status/1812465680752759248",contentBody:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("p",{children:["Absolutely brilliant service from ",x," Effortless booking & impeccable car !!"]}),(0,s.jsx)("p",{children:"As I was carrying Gus, my boy, I had absolutely no hassles & Gus had an absolutely stress free time. The car accidentally broke down and they sent another car within 15 mins"})]}),contentImage:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l.default,{src:"/icon/tweets/review_images/Inc€nd1ary.png",alt:"Chitra Singh Shoffr Review",width:270,height:273,className:"size-full overflow-auto"})})},{profilePic:"/icon/tweets/user_profile/RajeshSawhney.png",name:"Rajesh Sawhney",userName:"@rajeshsawhney",logo:u,redirectLink:"https://x.com/SayaniBh/status/1801293170640359588",contentBody:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("p",{children:["Loved the experience ",x]}),(0,s.jsx)("p",{children:"Clean, on time, luxury Electric Car driven by well mannered driver. Priced at the same level as Uber Premium."}),(0,s.jsx)("p",{children:"Highly recommend it for airport drop and pick-ups."})]}),contentImage:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l.default,{src:"/icon/tweets/review_images/RajeshSawhney.png",alt:"Chitra Singh Shoffr Review",width:270,height:273,className:"size-full overflow-auto"})})},{profilePic:"/icon/tweets/user_profile/thindiipothi.png",name:"thindiipothi",userName:"@datt_mallika",logo:u,redirectLink:"https://x.com/aditi_tibarewal/status/1806369371281101202",contentBody:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("p",{children:["Thoroughly impressed with ",x," cab service to the airport. It’s an EV—the vehicle glided in sublime silence, and the drive was exceptionally smooth. "]}),(0,s.jsx)("p",{children:"The booking experience was seamless, the car was clean, and the driver was on time"})]}),contentImage:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l.default,{src:"/icon/tweets/review_images/thindiipothi.png",alt:"thindiipothi Shoffr Review",width:270,height:273,className:"size-full overflow-auto"})})},{profilePic:"/icon/tweets/user_profile/PiyuDutta.png",name:"Piyu Dutta",userName:"@PiyuduttaPiyu",logo:u,redirectLink:"https://x.com/akshay_moorthy/status/1724342460930052230",contentBody:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("p",{children:["Hey ",x,", so pleased to have found you. "]}),(0,s.jsx)("p",{children:"Always missed a premium service like this in Bangalore. Makes a huge difference when you have had a long distance travel. Hope to see more EVs on #Blr roads."})]}),contentImage:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l.default,{src:"/icon/tweets/review_images/PiyuDutta.png",alt:"Piyu Dutta Shoffr Review",width:270,height:273,className:"size-full overflow-auto"})})},{profilePic:"/icon/tweets/user_profile/HimanshuUpreti.png",name:" Himanshu Upreti",userName:"@HimUpreti",logo:u,redirectLink:"https://x.com/sushantjaipuria/status/1610575580080279552",contentBody:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("p",{children:["Reliability, Safety and Comfort - 3 words that describe ",x," experience "]}),(0,s.jsxs)("p",{children:[b," take a bow."]})]}),contentImage:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l.default,{src:"/icon/tweets/review_images/HimanshuUpreti.png",alt:"Himanshu Upreti Shoffr Review",width:270,height:273,className:"size-full overflow-auto"})})},{profilePic:"/icon/tweets/user_profile/Dravisha.png",name:"Dravisha",userName:"@dravishakatoch",logo:u,redirectLink:"https://x.com/avneer_bh/status/1744583596902588834",contentBody:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("p",{children:["Uber had a 1-hour waiting time too, and after tirelessly waiting, booked a ",x," cab and guess what?"]}),(0,s.jsxs)("p",{children:["Got a call within a few minutes that he was there already. Can't thank the ",x," team enough for coming to our rescue and such a comfortable ride back home."]})]}),contentImage:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l.default,{src:"/icon/tweets/review_images/Dravisha.png",alt:"Dravisha Shoffr Review",width:270,height:273,className:"size-full overflow-auto"})})},{profilePic:"/icon/tweets/user_profile/AbhinayOmkar.png",name:"Abhinay Omkar",userName:"@abhiomkar",logo:u,redirectLink:"https://x.com/kv_karthik/status/1781691839680315739",contentBody:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("p",{children:["nice ride! Thanks ",x]}),(0,s.jsx)("p",{children:"On time. Clean car. Spacious legroom. Smooth ride."}),(0,s.jsx)("p",{children:"Electric SUV is the future."})]}),contentImage:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l.default,{src:"/icon/tweets/review_images/AbhinayOmkar.png",alt:"Abhinay Omkar Shoffr Review",width:270,height:273,className:"size-full overflow-auto"})})},{profilePic:"/icon/tweets/user_profile/Kryptosauruseth.png",name:"Kryptosaurus.eth",userName:"@Saurab9290",logo:u,redirectLink:"https://x.com/shajeshmenon/status/1637703963536678913",contentBody:(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("p",{children:["Zooming to Bangalore airport in style with a spacious and premium",w," EV and a super friendly driver, all booked via the ",x," app!"]})}),contentImage:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l.default,{src:"/icon/tweets/review_images/Kryptosauruseth.png",alt:"Kryptosaurus Shoffr Review",width:270,height:273,className:"size-full overflow-auto"})})}];var y=()=>(0,s.jsxs)("section",{className:"m-auto flex flex-col items-start justify-center",children:[(0,s.jsx)("div",{className:"relative flex w-full items-center justify-center",children:(0,s.jsx)("h1",{className:"title-x-large max-md:title-large gradient-text w-full text-center",children:"Love From Guests"})}),(0,s.jsx)("div",{className:"m-auto w-screen overflow-x-auto pb-8 pt-4 sm:overflow-hidden sm:py-12 md:pb-14 2xl:w-[1636px]",children:(0,s.jsxs)("div",{className:"scroll-content flex w-max items-start gap-4 hover:paused sm:gap-[25px] xl:pl-[111px]",children:[j.map((e,t)=>(0,s.jsx)(v,{testimonial:e},t)),j.map((e,t)=>(0,s.jsx)(v,{testimonial:e},t+j.length))]})})]});let v=e=>{let{testimonial:t}=e;return(0,s.jsxs)("div",{className:"surface-glass flex h-[612px] max-w-[318px] flex-col items-start justify-start gap-8 rounded-lg px-6 py-8 text-shoffr-secondary animate-out hover:scale-[1.03] hover:animate-in sm:max-w-[318px]",children:[(0,s.jsxs)(n.default,{href:"#",className:"flex h-[35px] w-full flex-row items-center justify-between",children:[(0,s.jsxs)("div",{className:"flex items-center  gap-2",children:[(0,s.jsx)(l.default,{src:t.profilePic,alt:"".concat(t.userName," 'profile photo'"),width:32,height:32,className:"size-[32px] rounded-full object-cover md:size-[40px]",onError:e=>{e.target.onerror=null,e.target.src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}}),(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("p",{className:"label-medium md:label-large line-clamp-1 text-shoffr-primary ",children:t.name}),(0,s.jsx)("p",{className:"label-small md:label-medium line-clamp-1 font-normal",children:t.userName})]})]}),(0,s.jsx)("div",{children:(0,s.jsx)(l.default,{src:t.logo,alt:"".concat(t.userName," 'Twitter logo'"),width:32,height:32,className:"size-[32px] md:size-[40px]"})})]}),(0,s.jsx)("span",{className:"body-regular flex flex-col items-start gap-8 text-shoffr-primary md:text-[16px]",children:t.contentBody}),t.contentImage]})};var N=a(8202),k=e=>{let{href:t,className:a,title:r,children:i,...l}=e,o=(0,d.I0)();return(0,s.jsx)(n.default,{href:t,...l,id:r,onClick:e=>{e.ctrlKey||e.metaKey||o((0,m.w)(!0))},passHref:!0,children:(0,s.jsx)("span",{className:a,title:r,children:i})})},P=()=>(0,s.jsxs)("section",{className:"relative mb-24 flex h-auto flex-col items-start justify-center md:mb-[148px]",children:[(0,s.jsx)("div",{className:"absolute inset-0 m-0 h-[444px] w-full lg:mx-auto lg:h-full 2xl:w-[1447px]",children:(0,s.jsx)("div",{className:"shoffr-event-section absolute inset-0 object-fill"})}),(0,s.jsxs)("div",{className:"relative m-auto flex w-[90%] flex-col items-center justify-center gap-12 pt-[136px] md:gap-[108px] md:pt-[120px] lg:w-[1002px] xl:w-[1212px]",children:[(0,s.jsxs)("div",{className:"flex h-auto w-[232px] flex-col items-center gap-[10.568px] ",children:[(0,s.jsx)(l.default,{src:"/image/shoffr-event-logo.png",alt:"shoffr",width:266,height:55,className:"h-[35px] w-[171px] flex-1 md:h-[47.32px] md:w-[232px]",draggable:!1}),(0,s.jsxs)("div",{className:"flex w-full items-center justify-center gap-4",children:[(0,s.jsx)("span",{className:"h-0.5 w-[49px] rotate-180 [background:linear-gradient(115deg,#FFF3CA_-6.05%,rgba(0,0,0,0.00)_74.8%)]"}),(0,s.jsx)("p",{className:"sm:title-medium title-x-small gradient-text w-fit self-stretch text-center text-xs font-bold uppercase leading-[normal] tracking-normal md:text-base lg:w-max ",children:"FOR EVENTS"}),(0,s.jsx)("span",{className:"h-0.5 w-[49px] rotate-0 [background:linear-gradient(115deg,#FFF3CA_-6.05%,rgba(0,0,0,0.00)_74.8%)]"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col items-center gap-12 self-stretch",children:[(0,s.jsx)("div",{className:"flex w-full flex-wrap items-stretch justify-center gap-[13.825px] max-md:justify-around md:gap-12",children:N.Ob.map(e=>(0,s.jsx)(T,{id:e.id,label:e.label,completed:e.completed},e.id))}),(0,s.jsx)("div",{className:"max:mb-[24px] m-auto w-full",children:(0,s.jsx)(k,{href:p.Z.Events,title:"Explore More",className:"gradient-gold-cta-text label-medium sm:label-large secondary-cta mx-auto font-semibold sm:w-[370px] sm:py-[20px]",children:"Explore More"})})]})]})]});let T=e=>{let{id:t,completed:a,label:r}=e;return(0,s.jsxs)("div",{className:"flex min-h-[128px] flex-1 flex-col items-center justify-start gap-2 rounded px-4 py-8 [background:var(--Surface-Glass,rgba(255,255,255,0.10))] sm:min-h-[158px] lg:rounded-lg lg:p-6",children:[(0,s.jsx)("h2",{className:"title-large sm:title-x-large gradient-text text-center font-bold",children:a}),(0,s.jsx)("p",{className:"label-small sm:body-large text-center text-lg font-normal text-shoffr-secondary max-sm:text-xs sm:max-w-fit",children:r})]},t)};var A=()=>(0,s.jsxs)("div",{className:"m-auto mb-[96px] flex w-full flex-col items-start justify-center gap-[56px] sm:gap-16 md:mb-[136px] md:mt-[132px] xl:w-[1212px]",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center gap-4 self-stretch sm:gap-8",children:[(0,s.jsx)("h2",{className:"title-large gradient-text w-[90%] text-center md:w-full md:p-0 md:text-[56px]",children:"Experience Delight"}),(0,s.jsxs)("div",{className:"hide-scrollbar flex w-full items-start gap-4 self-stretch px-6 max-xl:overflow-auto md:gap-12 xl:px-0",children:[(0,s.jsxs)("article",{className:"relative flex h-[296px] min-w-[272px] flex-col items-start justify-between self-stretch rounded-lg bg-shoffr-deep-brown p-8 md:min-w-[372px]",children:[(0,s.jsxs)("div",{className:"flex w-full flex-col items-start gap-2 self-stretch",children:[(0,s.jsx)("h3",{className:"title-medium gradient-text text-xl",children:"Premium Service"}),(0,s.jsx)("p",{className:"body-medium text-base font-normal leading-[normal] text-shoffr-secondary",children:"Fleet of electric BYD e6 cars and polite drivers who take care of guests."})]}),(0,s.jsxs)("div",{className:"flex flex-col items-start gap-3 self-stretch",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 self-stretch",children:[(0,s.jsx)("span",{className:"flex items-center justify-center bg-transparent",children:(0,s.jsx)(l.default,{src:"/icon/plus-sign.svg",alt:"Shoffr Care",width:24,height:24})}),(0,s.jsx)("h4",{className:"label-medium md:label-large font-semibold text-shoffr-primary",children:"Water, tissues included"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2 self-stretch",children:[(0,s.jsx)("span",{className:"flex items-center justify-center bg-transparent",children:(0,s.jsx)(l.default,{src:"/icon/trolley-bag.svg",alt:"User",width:24,height:24})}),(0,s.jsx)("h4",{className:"label-medium md:label-large font-semibold text-shoffr-primary",children:"Seats 4 adults, fits 6 bags"})]})]})]}),(0,s.jsxs)("article",{className:"relative flex h-[296px] min-w-[272px] flex-col items-start justify-between self-stretch rounded-lg bg-shoffr-deep-brown p-8 md:min-w-[372px]",children:[(0,s.jsxs)("div",{className:"flex w-full flex-col items-start gap-2 self-stretch",children:[(0,s.jsx)("h3",{className:"title-medium gradient-text text-xl",children:"We Empathise"}),(0,s.jsx)("p",{className:"body-medium text-base font-normal leading-[normal] text-shoffr-secondary",children:"Empathetic human support on WhatsApp, calls, and e-mail. No bots, no spam."})]}),(0,s.jsx)("div",{className:"relative w-full",children:(0,s.jsx)(l.default,{className:" mx-0 w-full",src:"/icon/cx-links.svg",alt:"shoffr CX support",width:308,height:30})})]}),(0,s.jsxs)("article",{className:"relative flex h-[296px] min-w-[272px] flex-col items-start justify-between self-stretch rounded-lg bg-shoffr-deep-brown p-8 md:min-w-[372px]",children:[(0,s.jsxs)("div",{className:"flex w-full flex-col items-start gap-2 self-stretch",children:[(0,s.jsx)("h3",{className:"title-medium gradient-text text-xl",children:"Pet Friendly"}),(0,s.jsx)("p",{className:"body-medium text-base font-normal leading-[normal] text-shoffr-secondary",children:"The purr-fect choice for hassle free travel with your furry family members."})]}),(0,s.jsx)("div",{className:"relative w-full",children:(0,s.jsx)(l.default,{className:" mx-0 w-full",src:"/icon/pet-friendly.svg",alt:"shoffr CX support",width:308,height:30})})]})]})]}),(0,s.jsx)("div",{className:"m-auto w-[90%] md:w-full",children:(0,s.jsx)(k,{href:p.Z.FAQ,title:"Read the FAQs",className:"gradient-gold-cta-text label-medium m-auto flex h-auto w-full items-center justify-center rounded-full border px-[24px] py-[16px] font-semibold sm:w-[372px] sm:border-[#FFF3CA] sm:bg-transparent sm:py-[20px]",children:"Read The FAQs"})})]}),S=a(2325),I=a(6374),_=a(7440),C=e=>{let{type:t,trip:a}=e;return(0,s.jsxs)("section",{className:"relative m-auto flex w-full flex-col items-start gap-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] lg:w-[932px] lg:gap-6",children:[(0,s.jsx)("h3",{className:"label-x-small w-fit font-bold uppercase tracking-[0.4px] text-white",children:t}),(0,s.jsxs)("article",{className:"relative flex h-auto w-full flex-col gap-5 overflow-hidden rounded-lg border-[0.5px] border-solid border-[color:var(--Surface-Glass,rgba(255,255,255,0.10))] bg-shoffr-deep-brown px-6 py-[18px] sm:flex-row sm:justify-between lg:px-8 lg:py-6",children:[(0,s.jsx)(l.default,{src:"/icon/upcoming-trip-hex.svg",alt:"shoffr",width:148,height:182,className:"absolute right-px top-0  md:w-[148px]",draggable:!1}),(0,s.jsxs)("div",{className:"flex h-auto flex-col items-start gap-3 [background:linear-gradient(179deg,#1A1A1A_49.78%,rgba(26,26,26,0.00)_99.09%)] lg:gap-4",children:[(0,s.jsxs)("p",{className:"body-small font-normal text-shoffr-secondary",children:["Trip ID: ",a.id]}),(0,s.jsxs)("div",{className:"z-[1] flex flex-col items-start self-stretch lg:flex-col-reverse",children:[(0,s.jsx)("h3",{className:"label-medium text-lg font-semibold text-shoffr-primary md:text-shoffr-secondary lg:font-normal",children:(0,_.o0)(a.pickupTime)}),(0,s.jsx)("h3",{className:"body-medium lg:body-large text-sm font-normal text-shoffr-secondary md:text-lg md:font-bold md:text-shoffr-primary",children:(0,_.zJ)(a)})]})]}),(0,s.jsx)("div",{className:"z-[1] flex sm:items-end",children:(0,s.jsx)(n.default,{href:"".concat(p.Z.TripsDetails,"?id=").concat(a.id),id:"Upcominng Trip Card",className:"gradient-gold-cta-text label-small flex h-max w-[118px] items-center justify-center rounded-full border border-solid border-[color:var(--Text-Brand,#FFF3CA)] px-6 py-3 sm:w-60 sm:px-6 md:py-4",children:"See Details"})})]})]})},E=e=>{let{trip:t}=e;return t.outstandingAmount&&t.outstandingAmount>0?(0,s.jsxs)("div",{className:"m-auto flex w-full items-center justify-between rounded px-6 py-4 [background:#FF7070] md:w-[372px]",children:[(0,s.jsx)("h2",{className:"label-small font-semibold text-black",children:"Payment Pending"}),(0,s.jsx)(n.default,{id:"Unpaid Past Trip",href:"".concat(p.Z.TripsDetails,"?id=").concat(t.id),className:"label-small font-semibold text-black underline",children:"See Details"})]}):(0,s.jsx)(s.Fragment,{})},F=a(2416),R=a(8790),D=a(8651),O=()=>{let[e,t]=(0,r.useState)(),a=(0,_.lp)(),[i,l]=(0,r.useState)(),[n,o]=(0,r.useState)(!1),[c,p]=(0,r.useState)(!1),f=null==i?void 0:i.id,h=null==i?void 0:i.driverId,u=null==i?void 0:i.driverName,x=(0,d.I0)();return(0,r.useEffect)(()=>{let e=new AbortController;async function s(s,r){try{let i=await s({userId:a.id,pageSize:1,page:1},e.signal);i&&"UPCOMING_TRIP"===r&&i&&t(i),i&&"PAST_TRIP"===r&&(i.length>0?(l(()=>i[0]),p(0!==i[0].outstandingAmount)):l(void 0))}catch(e){}}return(0,_.Pc)()&&(s(F.EB,"UPCOMING_TRIP"),s(R.sT,"PAST_TRIP")),()=>e.abort()},[a.id]),(0,r.useEffect)(()=>{x((0,m.w)(!1))},[x]),(0,r.useEffect)(()=>{i&&(null==i?void 0:i.completedAt)&&o(function(e){let t=new Date,a=new Date(e);return t.getTime()-a.getTime()<=1728e5}(null==i?void 0:i.completedAt)&&!(null==i?void 0:i.feedbackShown))},[i]),(0,s.jsxs)(s.Fragment,{children:[(e||i)&&(0,s.jsxs)("section",{className:"m-auto mb-16 flex w-[90%] flex-col items-start justify-center gap-8 md:mb-[64px] md:gap-[88px]",children:[e&&(0,s.jsx)(C,{trip:e,type:"Upcoming Trip"}),c&&i&&(0,s.jsx)(E,{trip:i})]}),n&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(D.Z,{name:a.firstName,phone:+a.phone,tripId:f,driverId:h,driverName:u})})]})},L=a(5813),z=()=>{let e=(0,d.v9)(e=>e.loader.isLoading),t=(0,d.I0)(),a=(0,_.Yc)(),{data:n}=(0,d.v9)(e=>e.persistedReducer.checkoutData);return(0,r.useEffect)(()=>{n&&Object.keys(n).length>0&&t(L.j.checkoutData({checkoutData:{}}))},[n,t]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("section",{className:"relative w-full",children:[(0,s.jsx)("div",{className:"absolute inset-0 h-[543px] w-full overflow-hidden lg:h-[686px]",children:(0,s.jsx)("div",{className:"hero-section absolute inset-0 scale-110"})}),(0,s.jsxs)("div",{className:"relative z-50 flex flex-col ",children:[(0,s.jsx)(S.default,{}),(0,s.jsx)("div",{className:"overflow-hidden pt-[342px] lg:pt-[400px]",children:(0,s.jsxs)("div",{className:"m-auto flex w-full flex-col",children:[(0,s.jsx)(h,{}),(0,s.jsx)(O,{}),(0,s.jsx)(A,{}),(0,s.jsx)(y,{}),(0,s.jsx)(P,{}),a&&"Browser"===a&&(0,s.jsx)(o,{}),(0,s.jsx)(i.Z,{})]})}),(0,s.jsx)("div",{className:"sticky bottom-0 z-50",children:(0,s.jsx)(I.Z,{})})]}),e&&(0,s.jsx)("div",{className:"pointer-events-none fixed inset-0 z-50 flex items-center justify-center",children:(0,s.jsx)(l.default,{src:"/icon/shoffr-white-hex.svg",alt:"loading hex",height:52,width:52,className:"animate-spin"})})]})})}},8202:function(e,t,a){"use strict";a.d(t,{Mv:function(){return i},Ob:function(){return r}});var s=a(5810);let r=[{id:1,label:"Wedding Served",completed:"50+"},{id:2,label:"Corporate Events",completed:"25+ "},{id:3,label:"Partner Event Planners",completed:"30+"}],i=[{Company:[{id:1,label:"About us",route:s.Z.ABOUT},{id:2,label:"Privacy and policy",route:s.Z.PrivacyPolicy},{id:3,label:"Cancellation & refund",route:s.Z.CancellationPolicy},{id:4,label:"Terms and conditions",route:s.Z.TNC}]},{Services:[{id:1,label:"Airport transfers",route:"".concat(s.Z.Booking,"/?operationType=airport-transfers")},{id:2,label:"City rentals",route:"".concat(s.Z.Booking,"/?operationType=city-rentals")},{id:3,label:"Outstation trips",route:"".concat(s.Z.Booking,"/?operationType=outstation")},{id:4,label:"Event partnerships",route:s.Z.Events}]},{"Contact us on":[{id:1,label:"hello@shoffr.in",route:"mailto:hello@shoffr.in"},{id:2,label:"WhatsApp us",route:"https://api.whatsapp.com/send?phone=917065232323"}]},{"Explore Our World":[{id:1,imgUrl:"/icon/x-gold.svg",label:"X",route:"https://x.com/shoffr_in"},{id:2,imgUrl:"/icon/instagram.svg",label:"Instagram",route:"https://www.instagram.com/shoffr.in/"},{id:3,imgUrl:"/icon/linkedIn.svg",label:"LinkedIn",route:"https://www.linkedin.com/company/shoffr-mobility/"}]}]},6648:function(e,t,a){"use strict";a.d(t,{default:function(){return r.a}});var s=a(5601),r=a.n(s)},7138:function(e,t,a){"use strict";a.d(t,{default:function(){return r.a}});var s=a(231),r=a.n(s)},6463:function(e,t,a){"use strict";var s=a(1169);a.o(s,"usePathname")&&a.d(t,{usePathname:function(){return s.usePathname}}),a.o(s,"useRouter")&&a.d(t,{useRouter:function(){return s.useRouter}}),a.o(s,"useSearchParams")&&a.d(t,{useSearchParams:function(){return s.useSearchParams}})},5601:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return o},getImageProps:function(){return n}});let s=a(9920),r=a(497),i=a(8173),l=s._(a(1241));function n(e){let{props:t}=(0,r.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}}let o=i.Image}},function(e){e.O(0,[2465,8949,6990,7016,231,6006,8173,8060,2971,7023,1744],function(){return e(e.s=9424)}),_N_E=e.O()}]);