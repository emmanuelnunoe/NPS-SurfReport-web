import{_ as p}from"./BovMftgu.js";import{_ as l,u}from"./BUD3zV5S.js";import{m as _,o as n,c as i,a,t as c,b as f,w as h,d as x,n as y,F as b,p as g,u as w,q as N,_ as S}from"./CgSJc8iP.js";const k={class:"card",style:{width:"18rem"}},v={class:"card-body"},C={class:"card-title"},A={class:"card-text"},B=_({__name:"Card",props:["station"],setup(s){return(e,t)=>{const o=p;return n(),i("div",k,[t[1]||(t[1]=a("img",{class:"card-img-top",src:l,alt:"Station image"},null,-1)),a("div",v,[a("h5",C,c(s.station.name),1),a("p",A,"Id: "+c(s.station.id),1),f(o,{to:{name:"stations-id-name",params:{name:s.station.name,id:s.station.id}},class:"btn btn-primary"},{default:h(()=>t[0]||(t[0]=[x(" See Station")])),_:1},8,["to"])])])}}}),I={class:"container"},$={class:"grid"},F=_({__name:"locations",async setup(s){let e,t;const{data:o,error:P,pending:R}=([e,t]=y(()=>u("https://noaa-tides.p.rapidapi.com/stations",{headers:{"X-RapidAPI-Host":"noaa-tides.p.rapidapi.com","X-RapidAPI-Key":"7a5d40ba4fmsha7bab8f9481e8d5p118da3jsn758dd8cf7f36"}},"$AjdONpw0xr")),e=await e,t(),e);return(V,r)=>{const m=B;return n(),i("div",I,[r[0]||(r[0]=a("h1",null,"NPS | Surf Report",-1)),a("div",$,[(n(!0),i(b,null,g(w(o).stations,d=>(n(),N(m,{key:d.id,station:d},null,8,["station"]))),128))])])}}}),q=S(F,[["__scopeId","data-v-ec460181"]]);export{q as default};
