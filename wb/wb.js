/* WB engine v2: hand-drawn whiteboard explainer. Load with <script src> in <head>, then write SCENE(...) calls. */
(function(){var d=document,css='html,body{margin:0;height:100%;background:#efe9db;overflow:hidden;cursor:none}#w{position:absolute;left:50%;top:50%;width:1920px;height:1080px;overflow:hidden;background:#f3eee2;opacity:0}svg{display:block}text{font-family:Kalam,"Comic Sans MS",cursive;font-weight:700}.mk{font-family:"Permanent Marker",Kalam,cursive;font-weight:400}',f='https://fonts.googleapis.com/css2?family=Kalam:wght@700&family=Permanent+Marker&display=block';
 if(d.readyState=='loading'){d.write('<meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="'+f+'"><style>'+css+'</style>')}
 else{var h=d.head,l=d.createElement('link');l.rel='stylesheet';l.href=f;h.appendChild(l);var s=d.createElement('style');s.textContent=css;h.appendChild(s)}
 d.title='​'})();
const C={},$=i=>C[i]||(C[i]=document.getElementById(i));
const cl=(x,a=0,b=1)=>x<a?a:x>b?b:x,L=(a,b,u)=>a+(b-a)*u,f1=n=>Math.round(n*10)/10;
const EZ={l:u=>u,io:u=>u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2,o:u=>1-Math.pow(1-u,3),i:u=>u*u*u,x:u=>u>=1?1:1-Math.pow(2,-10*u),b:u=>{const c=1.9;return 1+(c+1)*Math.pow(u-1,3)+c*Math.pow(u-1,2)},e:u=>u<=0?0:u>=1?1:Math.pow(2,-9*u)*Math.sin((u*9-.75)*2.094)+1};
const U=(t,a,b,e='o')=>(EZ[e]||EZ.o)(cl((t-a)/Math.max(1e-4,b-a)));
const K=(t,k,e='io')=>{if(t<=k[0][0])return k[0][1];for(let i=1;i<k.length;i++)if(t<k[i][0]){const a=k[i-1],b=k[i];return L(a[1],b[1],(EZ[b[2]||e]||EZ.io)((t-a[0])/Math.max(1e-4,b[0]-a[0])))}return k[k.length-1][1]};
const T=(i,x=0,y=0,s=1,r=0,o=1,sy=s)=>{const e=typeof i=='string'?$(i):i;if(!e)return;e.setAttribute('transform',`translate(${f1(x)} ${f1(y)}) rotate(${f1(r)}) scale(${s.toFixed(4)} ${sy.toFixed(4)})`);e.setAttribute('opacity',cl(o).toFixed(3))};
const O=(i,o)=>{const e=$(i);if(e)e.setAttribute('opacity',cl(o).toFixed(3))};
const D=(i,u)=>{const e=$(i);if(!e)return;e.setAttribute('stroke-dasharray','1 1');e.setAttribute('stroke-dashoffset',(1-cl(u)).toFixed(4))};
const X=(i,s)=>{const e=$(i);if(e&&e.textContent!==s)e.textContent=s};
const money=v=>'$'+Math.round(v).toLocaleString('en-US');
const R=s=>()=>(s=(s*16807)%2147483647)/2147483647;
const CAM=(t,k)=>{let a=k[0],b=a,u=0;if(t>k[0][0])for(let i=1;i<k.length;i++){if(t<k[i][0]){a=k[i-1];b=k[i];u=(EZ[b[4]||'io']||EZ.io)((t-a[0])/Math.max(1e-4,b[0]-a[0]));break}a=b=k[i]}return{x:L(a[1],b[1],u),y:L(a[2],b[2],u),s:a[3]*Math.pow(b[3]/a[3],u)}};
const LAY=(i,c,f=1)=>{const e=$(i);if(e)e.setAttribute('transform',`translate(960 540) scale(${(1+(c.s-1)*f).toFixed(4)}) translate(${f1(-(960+(c.x-960)*f))} ${f1(-(540+(c.y-540)*f))})`)};
const BG=(id,k,o={})=>{const r=R(o.seed||7),x0=-2600,y0=-2000,w=o.w||1920,h=o.h||1080,W=w+5200,H=h+4000,fy=o.floor,PC='#8a7a58';
 let f=`<defs><radialGradient id="${id}g" gradientUnits="userSpaceOnUse" cx="${w/2}" cy="${h*.45}" r="${Math.max(w,h)*.9}"><stop offset="0" stop-color="#faf7ef"/><stop offset=".6" stop-color="#f1ecdf"/><stop offset="1" stop-color="#e4dcc9"/></radialGradient><pattern id="${id}n" width="230" height="230" patternUnits="userSpaceOnUse">`;
 for(let i=0;i<26;i++)f+=`<circle cx="${(r()*230)|0}" cy="${(r()*230)|0}" r="${(.6+r()*1.3).toFixed(1)}" fill="#5a4a30" fill-opacity="${(.05+r()*.08).toFixed(2)}"/>`;
 f+=`</pattern><pattern id="${id}h" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(-35)"><path d="M0 11H22" stroke="#2a2a2a" stroke-opacity=".16" stroke-width="2.4"/></pattern></defs><rect x="${x0}" y="${y0}" width="${W}" height="${H}" fill="url(#${id}g)"/>`;
 let m=`<rect x="${x0}" y="${y0}" width="${W}" height="${H}" fill="url(#${id}n)"/>`;
 const n=o.n||14,PT=[];for(let i=0;i<n;i++){const x=(r()*(w+1600)-800)|0,y=(r()*(h+800)-400)|0,sz=6+r()*10;PT.push([x,y,(r()*180)|0,r()*6]);
  m+=`<g id="${id}d${i}"><path d="M${f1(-sz/2)} 0Q0 ${f1(sz/5)} ${f1(sz/2)} 0" fill="none" stroke="${PC}" stroke-width="3" stroke-linecap="round" opacity=".25"/></g>`}
 if(fy!=null){let g=`M${x0} ${fy}`;for(let x=x0+200;x<=x0+W;x+=200)g+=`Q${x-100} ${f1(fy+(r()-.5)*9)} ${x} ${f1(fy+(r()-.5)*5)}`;m+=`<rect x="${x0}" y="${fy}" width="${W}" height="2400" fill="#dccfae" opacity=".35"/><rect x="${x0}" y="${fy+4}" width="${W}" height="56" fill="url(#${id}h)"/><path d="${g}" fill="none" stroke="#2a2a2a" stroke-width="5" stroke-linecap="round"/>`}
 return{far:f,mid:m,live:t=>{for(let i=0;i<n;i++){const p=PT[i];T(id+'d'+i,p[0]+Math.sin(t*.5+p[3])*4,p[1]+Math.sin(t*.35+p[3])*3,1,p[2])}}}};
const IN=(i,t,a,x=0,y=0,k='rise',d=.7,s=1)=>{const u=cl((t-a)/d),q=k=='spring'?EZ.e(u):EZ.b(u),o=EZ.o(cl(u*2.5));if(k=='rise')T(i,x,y+(1-q)*70,s,0,o);else if(k=='spring')T(i,x,y,s*(.2+.8*q),0,o);else if(k=='drop')T(i,x,y-(1-q)*260,s,0,o);else if(k=='left')T(i,x-(1-q)*220,y,s,0,o);else if(k=='right')T(i,x+(1-q)*220,y,s,0,o);else if(k=='swing')T(i,x,y,s,(1-q)*-28,o);else if(k=='stamp')T(i,x,y,s*L(2.6,1,EZ.o(u)),0,o);else T(i,x,y,s,0,o)};
const TW=(s,f)=>String(s).length*f*.58;
const SHD=(x,y,w,o=.3)=>`<ellipse cx="${x}" cy="${y}" rx="${w/2}" ry="${(w/12)|0}" fill="#2a2a2a" opacity="${(o*.4).toFixed(3)}"/>`;
const VIG=`<defs><radialGradient id="vg" cx=".5" cy=".46" r=".8"><stop offset=".55" stop-color="#7a6644" stop-opacity="0"/><stop offset="1" stop-color="#7a6644" stop-opacity=".2"/></radialGradient></defs><rect width="1920" height="1080" fill="url(#vg)" pointer-events="none"/><g fill="none" stroke="#3b3b3b" stroke-width="4" stroke-linecap="round" opacity=".6" pointer-events="none"><path d="M58 50Q960 42 1866 47M1859 38Q1866 540 1861 1040M1870 1033Q960 1040 52 1036M60 1044Q54 540 61 42"/><path d="M96 58Q700 54 1240 56" opacity=".35"/></g>`;
const INKC='#2a2a2a',OUT='#2a2a2a',SKIN='#fffdf6',INK='#2a2a2a';
const RL=(x1,y1,x2,y2,s=1)=>{const r=R(s*7919+3),m=1.5+Math.hypot(x2-x1,y2-y1)*.012,j=()=>(r()-.5)*2*m;return `M${f1(x1+j())} ${f1(y1+j())}Q${f1((x1+x2)/2+j()*1.5)} ${f1((y1+y2)/2+j()*1.5)} ${f1(x2+j())} ${f1(y2+j())}`};
const RR=(x,y,w,h,s=1)=>{const r=R(s*7919+11),j=(m=3)=>(r()-.5)*2*m,p=[[x,y],[x+w,y],[x+w,y+h],[x,y+h],[x,y]];let d=`M${f1(x+j())} ${f1(y+j())}`;for(let i=1;i<5;i++){const a=p[i-1],b=p[i];d+=`Q${f1((a[0]+b[0])/2+j(5))} ${f1((a[1]+b[1])/2+j(5))} ${f1(b[0]+j())} ${f1(b[1]+j())}`}return d+`L${f1(x+Math.min(w*.15,34))} ${f1(y+j(3))}`};
const RC=(cx,cy,rx,ry=rx,s=1)=>{const r=R(s*7919+29),a0=r()*6.28,n=18,P=[];for(let i=0;i<=n;i++){const a=a0+i/n*6.28*1.07,k=1+(r()-.5)*.05;P.push([cx+Math.cos(a)*rx*k,cy+Math.sin(a)*ry*k])}const M=(a,b)=>f1((a[0]+b[0])/2)+' '+f1((a[1]+b[1])/2);let d=`M${f1(P[0][0])} ${f1(P[0][1])}L${M(P[0],P[1])}`;for(let i=1;i<n;i++)d+=`Q${f1(P[i][0])} ${f1(P[i][1])} ${M(P[i],P[i+1])}`;return d+`L${f1(P[n][0])} ${f1(P[n][1])}`};
const SK=(i,d,fill='none',sw=5,col=INKC)=>`<g id="${i}">${fill!='none'?`<path id="${i}f" d="${d}" fill="${fill}" transform="translate(6 5)"/>`:''}<path id="${i}o" d="${d}" fill="none" stroke="${col}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" pathLength="1"/></g>`;
const DW=(i,t,a,d=.8)=>{D(i+'o',U(t,a,a+d,'io'));if($(i+'f'))O(i+'f',U(t,a+d*.5,a+d+.25))};
/* handwritten text; mw = max width (auto-shrinks), hl = highlighter colour behind the lower half */
const WT=(i,s,f,fill=INKC,a='middle',cls='',mw=0,hl='')=>{const w=TW(s,f)*1.15+f*.6,x=a=='middle'?-w/2:a=='end'?-w+f*.3:-f*.3;return `<g id="${i}" data-wt="${a}|${f}|${mw||0}">${hl?`<g id="${i}hg" transform="translate(${f1(x)} 0)"><rect id="${i}h" x="0" y="${f1(-f*.55)}" width="${f1(w)}" height="${f1(f*.62)}" fill="${hl}" opacity=".8" transform="skewX(-8)"/></g>`:''}<clipPath id="${i}c"><rect id="${i}k" x="${f1(x)}" y="${f1(-f*1.15)}" width="${f1(w)}" height="${f1(f*1.7)}"/></clipPath><text clip-path="url(#${i}c)" text-anchor="${a}" font-size="${f}" fill="${fill}"${cls?` class="${cls}"`:''}>${s}</text></g>`};
const WR=(i,u)=>{const k=$(i+'k');if(!k)return;const x=+k.getAttribute('x');k.setAttribute('transform',`translate(${x} 0) scale(${Math.max(cl(u),.0001).toFixed(4)} 1) translate(${-x} 0)`)};
const HLD=(i,t,a,d=.5)=>{const e=$(i+'h');if(e)e.setAttribute('transform',`skewX(-8) scale(${Math.max(U(t,a,a+d,'o'),.0001).toFixed(4)} 1)`)};
const PILLD=(tw,f,a)=>{const w=tw+f*1.1,h=f*1.25,x=a=='middle'?-w/2:a=='end'?-w:0;return[`M${f1(x+3)} ${f1(-h*.62)}L${f1(x+w)} ${f1(-h*.68)}L${f1(x+w-5)} ${f1(h*.4)}L${f1(x)} ${f1(h*.45)}Z`,x+w/2]};
const PILL=(i,s,f,fg=INKC,bg='#f3c25c',a='middle')=>{const p=PILLD(TW(s,f),f,a);return `<g id="${i}" data-pill="${a}|${f}"><path d="${p[0]}" fill="${bg}" opacity=".9"/><text x="${f1(p[1])}" y="${f1(f*.3)}" text-anchor="middle" font-size="${f}" fill="${fg}">${s}</text></g>`};
const BUBD=(w,h,tl)=>{const r=Math.min(34,h/2),x=-w/2,y=-h/2,B=y+h;let t='';if(tl=='l')t=`L${f1(x+w*.42)} ${f1(B)}L${f1(x+w*.16)} ${f1(B+46)}L${f1(x+w*.27)} ${f1(B)}`;else if(tl=='r')t=`L${f1(x+w*.73)} ${f1(B)}L${f1(x+w*.84)} ${f1(B+46)}L${f1(x+w*.58)} ${f1(B)}`;return `M${f1(x+r)} ${f1(y)}L${f1(x+w-r)} ${f1(y)}Q${f1(x+w)} ${f1(y)} ${f1(x+w)} ${f1(y+r)}L${f1(x+w)} ${f1(B-r)}Q${f1(x+w)} ${f1(B)} ${f1(x+w-r)} ${f1(B)}${t}L${f1(x+r)} ${f1(B)}Q${f1(x)} ${f1(B)} ${f1(x)} ${f1(B-r)}L${f1(x)} ${f1(y+r)}Q${f1(x)} ${f1(y)} ${f1(x+r)} ${f1(y)}Z`};
const BUB=(i,s,f=40,tl='l',bg='#fffdf6')=>`<g id="${i}" data-bub="${tl}|${f}">${SK(i+'s',BUBD(TW(s,f)+f*1.6,f*1.9,tl),bg,5)}<g transform="translate(0 ${f1(f*.32)})">${WT(i+'t',s,f)}</g></g>`;
const BUBW=(i,t,a,d=.6)=>{DW(i+'s',t,a,d);const g=$(i+'t'),n=g?g.textContent.length:12;WR(i+'t',U(t,a+d*.6,a+d*.6+Math.max(.4,n*.05),'l'))};
const STMP=(i,s,f=66,col='#d6453d',r=-10)=>{const w=TW(s,f)+f*1.2,h=f*1.7;return `<g id="${i}"><g transform="rotate(${r})" data-stp="${f}"><path d="${RR(-w/2,-h/2,w,h,9)}" fill="#fffdf6" fill-opacity=".92" stroke="${col}" stroke-width="9" stroke-linejoin="round"/><text y="${f1(f*.36)}" text-anchor="middle" font-size="${f}" fill="${col}" class="mk">${s}</text></g></g>`};
const ARW=(i,x1,y1,x2,y2,col=INKC,sw=6,sd=1)=>{const a=Math.atan2(y2-y1,x2-x1),h=Math.min(36,Math.hypot(x2-x1,y2-y1)*.3),p=q=>`${f1(x2-h*Math.cos(a+q))} ${f1(y2-h*Math.sin(a+q))}`;return SK(i,RL(x1,y1,x2,y2,sd)+`M${p(.5)}L${f1(x2)} ${f1(y2)}L${p(-.5)}`,'none',sw,col)};
/* ---------- characters ---------- */
const EXP={n:['M-9 -196H9',0,1,[0,0,0,0,0]],happy:['M-11 -199Q0 -186 11 -199',0,1,[-4,-8,-4,8,1]],sad:['M-10 -191Q0 -200 10 -191',0,1,[0,14,0,-14,1]],shocked:['',1,1.45,[-9,0,-9,0,1]],afraid:['M-11 -194q3.7 -5 7.3 0t7.3 0t7.3 0',0,1.25,[-6,16,-6,-16,1]],confused:['M-9 -193L9 -199',0,1,[-8,-10,2,6,1]],angry:['M-10 -192Q0 -198 10 -192',0,1,[2,-20,2,20,1]],thinking:['M-4 -196H8',0,1,[-9,-6,0,4,1]]};
const CH=(id,o={})=>{const her=o.her,him=o.him,c=o.c||SKIN;
 const rig=`<g id="${id}R"><g id="${id}L1" ><rect x="-10" y="-6" width="20" height="98" rx="10"/><ellipse cx="-4" cy="94" rx="15" ry="8"/></g><g id="${id}L2"><rect x="-10" y="-6" width="20" height="98" rx="10"/><ellipse cx="4" cy="94" rx="15" ry="8"/></g><g id="${id}B"><rect x="-34" y="-82" width="68" height="98" rx="30"/></g><g id="${id}H"><circle cy="-36" r="36"/>${her?'<circle cx="0" cy="-80" r="17"/>':''}</g><g id="${id}A1"><rect x="-9" y="-6" width="18" height="52" rx="9"/><g id="${id}a1"><rect x="-8" y="-4" width="16" height="48" rx="8"/><circle cy="46" r="10.5"/></g></g><g id="${id}A2"><rect x="-9" y="-6" width="18" height="52" rx="9"/><g id="${id}a2"><rect x="-8" y="-4" width="16" height="48" rx="8"/><circle cy="46" r="10.5"/></g></g></g>`;
 return `<defs>${rig}</defs><g id="${id}"><ellipse id="${id}S" cx="0" cy="6" rx="62" ry="9" fill="#2a2a2a" opacity=".13"/><g id="${id}K"><use href="#${id}R" fill="${OUT}" stroke="${OUT}" stroke-width="9" stroke-linejoin="round"/><use href="#${id}R" fill="${c}"/>${him?`<g id="${id}T"><path d="M-7 -176L7 -176L10 -136L0 -122L-10 -136Z" fill="#3d6fd6" stroke="#2a2a2a" stroke-width="3" stroke-linejoin="round"/></g>`:''}<g id="${id}F"><g id="${id}E1"><ellipse cx="0" cy="0" rx="3.8" ry="3.8" fill="${INK}"/></g><g id="${id}E2"><ellipse cx="0" cy="0" rx="3.8" ry="3.8" fill="${INK}"/></g><rect id="${id}W1" x="-8" y="-1.6" width="16" height="3.2" rx="1.6" fill="${INK}"/><rect id="${id}W2" x="-8" y="-1.6" width="16" height="3.2" rx="1.6" fill="${INK}"/><path id="${id}M" d="" stroke="${INK}" stroke-width="3.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><ellipse id="${id}O" cx="0" cy="-194" rx="6" ry="8" fill="${INK}"/>${him?`<g fill="none" stroke="${INK}" stroke-width="2.6"><circle cx="-13" cy="-216" r="9"/><circle cx="13" cy="-216" r="9"/><path d="M-4 -217H4"/></g>`:''}${her?`<g transform="translate(22 -262) rotate(20)" fill="#e0605a" stroke="#2a2a2a" stroke-width="3"><path d="M0 0L-18 -10V10Z"/><path d="M0 0L18 -10V10Z"/><circle r="5"/></g>`:''}</g></g></g>`};
const act=(id,t,o)=>{if(!$(id))return;if(o.in!=null){const u=cl((t-o.in)/.6);o=Object.assign({},o,{y:o.y+(1-EZ.b(u))*70,o:(o.o==null?1:o.o)*EZ.o(cl(u*2.5))})}const ph=(id.length*1.7+id.charCodeAt(id.length-1))%5,s=o.s||1.45,wk=o.walk?t*o.walk:0,sw=o.walk?Math.sin(wk*6.3):0,ex=EXP[o.ex||'n']||EXP.n,br=Math.sin(t*2.2+ph);
 T(id,o.x,o.y,s,0,o.o==null?1:o.o);if(o.f)$(id).setAttribute('transform',$(id).getAttribute('transform')+' scale(-1 1)');
 T(id+'K',0,-(o.walk?Math.abs(Math.cos(wk*6.3))*6:0)-(o.jump||0),1,o.lean||0);
 T(id+'L1',-13,-96,1,o.walk?sw*24:(o.ll||0));T(id+'L2',13,-96,1,o.walk?-sw*24:(o.rl||0));
 T(id+'B',0,-96,1,0,1,1+br*.012);
 const hd=(o.hd||0)+Math.sin(t*1.3+ph)*1.5,ny=-178+br*.8;T(id+'H',0,ny,1,hd);T(id+'F',0,ny,1,hd);$(id+'F').setAttribute('transform',`translate(0 ${f1(ny)}) rotate(${f1(hd)}) translate(0 178)`);
 if($(id+'T'))T(id+'T',0,0,1,0,1);
 const la=(o.la||0)+(o.walk?-sw*20:0)+br*1.5,ra=(o.ra||0)+(o.walk?sw*20:0)+br*1.5;
 T(id+'A1',-31,-162,1,la);T(id+'a1',0,46,1,-(o.lb||0));T(id+'A2',31,-162,1,-ra);T(id+'a2',0,46,1,o.rb||0);
 const bl=((t+ph)%3.4)<.13?.12:1,eb=ex[2];$(id+'E1').setAttribute('transform',`translate(-12 -216) scale(${eb} ${(eb*bl).toFixed(2)})`);$(id+'E2').setAttribute('transform',`translate(12 -216) scale(${eb} ${(eb*bl).toFixed(2)})`);
 const w=ex[3];$(id+'W1').setAttribute('transform',`translate(-13 ${-231+w[0]}) rotate(${w[1]})`);$(id+'W2').setAttribute('transform',`translate(13 ${-231+w[2]}) rotate(${w[3]})`);O(id+'W1',w[4]);O(id+'W2',w[4]);
 $(id+'M').setAttribute('d',ex[0]);O(id+'O',ex[1])};
/* ---------- layout: stations (camera stops) with a 12 x 6 grid, PUT = fit content into a grid box ---------- */
const GR={c:12,r:6,g:60,x:160,y:90,w:1600,h:900},GCW=(1600-11*60)/12,GRH=(900-5*60)/6;
const STN=(x,y,s,k)=>{s=s||1;const ox=x-960/s,oy=y-540/s,P=(c,r,nc,nr)=>{c=cl(Math.round(c),0,11);r=cl(Math.round(r),0,5);nc=cl(Math.round(nc),1,12-c);nr=cl(Math.round(nr),1,6-r);return[ox+(GR.x+c*(GCW+GR.g))/s,oy+(GR.y+r*(GRH+GR.g))/s,(nc*GCW+(nc-1)*GR.g)/s,(nr*GRH+(nr-1)*GR.g)/s,s,k]};
 return{x,y,s,k,g:(c,r,nc=1,nr=1)=>P(c,r,nc,nr),cx:(c,nc=1)=>{const b=P(c,0,nc,1);return b[0]+b[2]/2},cy:(r,nr=1)=>{const b=P(0,r,1,nr);return b[1]+b[3]/2},fr:[ox,oy,1920/s,1080/s]}};
const PUT=(id,b,svg,a='c',mx=1.15)=>`<g id="${id}_" data-fit="${b.slice(0,5).map(f1).join(',')}|${a}|${mx}"><g id="${id}">${svg}</g></g>`;
function fitWT(g){const q=g.dataset.wt.split('|'),a=q[0],mw=+q[2],tx=g.querySelector('text'),k=$(g.id+'k');if(!tx||!k)return;let f=+q[1],n=tx.getComputedTextLength();if(!(n>0))return;
 if(mw>0&&n>mw){f=f*mw/n;tx.setAttribute('font-size',f1(f));n=tx.getComputedTextLength()}
 const p=f*.3,x=a=='middle'?-n/2-p:a=='end'?-n-p:-p;k.setAttribute('x',f1(x));k.setAttribute('width',f1(n+2*p));k.setAttribute('y',f1(-f*1.2));k.setAttribute('height',f1(f*1.75));
 const hg=$(g.id+'hg'),hr=$(g.id+'h');if(hg&&hr){hg.setAttribute('transform',`translate(${f1(x+p*.5)} 0)`);hr.setAttribute('width',f1(n+p));hr.setAttribute('y',f1(-f*.55));hr.setAttribute('height',f1(f*.62))}}
function fitPILL(g){const q=g.dataset.pill.split('|'),tx=g.querySelector('text'),p=g.querySelector('path');if(!tx||!p)return;const n=tx.getComputedTextLength();if(!(n>0))return;const r=PILLD(n,+q[1],q[0]);p.setAttribute('d',r[0]);tx.setAttribute('x',f1(r[1]))}
function fitBUB(g){const q=g.dataset.bub.split('|'),f=+q[1],tx=g.querySelector('text');if(!tx)return;const n=tx.getComputedTextLength();if(!(n>0))return;const d=BUBD(n+f*1.6,f*1.9,q[0]);[g.id+'so',g.id+'sf'].forEach(i=>{const e=$(i);if(e)e.setAttribute('d',d)})}
function fitSTP(g){const f=+g.dataset.stp,tx=g.querySelector('text'),p=g.querySelector('path');if(!tx||!p)return;const n=tx.getComputedTextLength();if(!(n>0))return;const w=n+f*1.2,h=f*1.7;p.setAttribute('d',RR(-w/2,-h/2,w,h,9))}
function tbox(w){const inv=w.getScreenCTM().inverse();let x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;
 w.querySelectorAll('path,rect,circle,ellipse,line,polyline,polygon,text,use').forEach(el=>{if(el.closest('clipPath,defs,mask,pattern,marker'))return;let b;try{b=el.getBBox()}catch(e){return}if(!(b.width>0||b.height>0))return;
  if(el.tagName=='text'){const f=parseFloat(el.getAttribute('font-size'))||40,y=parseFloat(el.getAttribute('y'))||0;b={x:b.x,y:y-f*.8,width:b.width,height:f*1.02}}
  const m=inv.multiply(el.getScreenCTM());[[b.x,b.y],[b.x+b.width,b.y],[b.x,b.y+b.height],[b.x+b.width,b.y+b.height]].forEach(q=>{const X=m.a*q[0]+m.c*q[1]+m.e,Y=m.b*q[0]+m.d*q[1]+m.f;if(X<x0)x0=X;if(Y<y0)y0=Y;if(X>x1)x1=X;if(Y>y1)y1=Y})});
 return x1>x0?{x:x0,y:y0,width:x1-x0,height:y1-y0}:null}
function fitPUT(w){const q=w.dataset.fit.split('|'),b=q[0].split(',').map(Number),a=q[1]||'c',mx=+q[2]||1.15;w.removeAttribute('transform');let bb=null;try{bb=tbox(w)}catch(e){}if(!bb)try{bb=w.getBBox()}catch(e){return}if(!(bb.width>0&&bb.height>0))return;
 const k=Math.min(b[2]/bb.width,b[3]/bb.height,mx/(b[4]||1))*.98,cw=bb.width*k,ch=bb.height*k;let x=b[0]+b[2]/2,y=b[1]+b[3]/2;if(a.indexOf('l')>-1)x=b[0]+cw/2;if(a.indexOf('r')>-1)x=b[0]+b[2]-cw/2;if(a.indexOf('t')>-1)y=b[1]+ch/2;if(a.indexOf('b')>-1)y=b[1]+b[3]-ch/2;
 w.setAttribute('transform',`translate(${f1(x)} ${f1(y)}) scale(${k.toFixed(4)}) translate(${f1(-(bb.x+bb.width/2))} ${f1(-(bb.y+bb.height/2))})`)}
/* ---------- scenes and playback ---------- */
const V={},SCN=[];let TOT=0,cur=-1,RQ=0,T0=0,PREP=0;
function SCENE(o,build,draw){SCN.push({o:o||{},build,draw,n:SCN.length})}
const scene=(d,build,draw)=>console.warn('scene() is not used in this engine; write SCENE({e:...},build,draw)');
const dep=e=>{let n=0;while(e&&e.id!=='S'){n++;e=e.parentNode}return n};
function mkStage(){if($('w'))return;const w=document.createElement('div');w.id='w';w.innerHTML='<svg id="v" viewBox="0 0 1920 1080" width="1920" height="1080" xmlns="http://www.w3.org/2000/svg"><g id="S"></g></svg>';document.body.appendChild(w);for(const k in C)delete C[k]}
function boot(){let h='',t0=0;SCN.sort((a,b)=>((+a.o.e||0)-(+b.o.e||0))||(a.n-b.n));
 SCN.forEach((s,i)=>{const o=s.o,id='s'+i;s.id=id;s.t0=t0;s.e=+o.e>t0?+o.e:t0+10;t0=s.e;
  const st=Array.isArray(o.st)&&o.st.length?o.st:[[960,540,1]];s.A=st.map((q,k)=>STN(+q[0]||960,+q[1]||540,+q[2]||1,k));
  let mx=1920,my=1080;s.A.forEach(a=>{mx=Math.max(mx,a.fr[0]+a.fr[2]+200);my=Math.max(my,a.fr[1]+a.fr[3]+200)});
  let fl=o.floor;if(fl===true||fl==='auto')fl=s.A[0].y+290/s.A[0].s;s.A.f=fl==null?null:+fl;const b=BG(id+'b','P',{floor:s.A.f==null?undefined:s.A.f,w:mx,h:my,seed:o.seed||i*7+3});V[id]=b;
  const n=s.A.length,ck=(Array.isArray(o.cam)&&o.cam.length?o.cam:[[s.t0,0]]).map(k=>k.length>=4?k:(a=>[+k[0],a.x,a.y,a.s,k[2]])(s.A[cl(k[1]|0,0,n-1)]));s.ck=ck;
  let w='',bk='';try{w=s.build(id,s.A)||''}catch(e){console.error('SCENE',i,'build',e)}try{bk=typeof o.back=='function'?o.back(id,s.A):(o.back||'')}catch(e){}
  h+=`<g id="${id}" style="display:none"><g id="${id}F">${b.far}</g><g id="${id}M">${b.mid}${bk}</g><g id="${id}W">${w}</g></g>`});
 TOT=t0;$('S').innerHTML=h+VIG}
function draw1(s,t){const c=CAM(t,s.ck);LAY(s.id+'F',c,.3);LAY(s.id+'M',c,.6);LAY(s.id+'W',c,1);V[s.id].live(t);if(s.draw)try{s.draw(t,s.id,s.A)}catch(e){if(!s.err){s.err=1;console.error('SCENE',s.n,'draw',e)}}}
function prep(){if(PREP)return;PREP=1;SCN.forEach(s=>{const g=$(s.id);if(!g)return;g.style.display='';draw1(s,s.e-1e-3);
  g.querySelectorAll('[data-wt]').forEach(fitWT);g.querySelectorAll('[data-pill]').forEach(fitPILL);g.querySelectorAll('[data-bub]').forEach(fitBUB);g.querySelectorAll('[data-stp]').forEach(fitSTP);
  [...g.querySelectorAll('[data-fit]')].sort((a,b)=>dep(b)-dep(a)).forEach(fitPUT);g.style.display='none'});cur=-1}
function render(t){if(!SCN.length)return;t=cl(t,0,TOT-1e-4);let i=0;while(i<SCN.length-1&&t>=SCN[i].e)i++;const s=SCN[i];if(i!=cur){if(cur>=0&&SCN[cur])$(SCN[cur].id).style.display='none';$(s.id).style.display='';cur=i}draw1(s,t)}
function go(){prep();cancelAnimationFrame(RQ);T0=performance.now();render(0);$('w').style.opacity=1;const f=n=>{const t=(n-T0)/1000;render(t);if(t<TOT+.05)RQ=requestAnimationFrame(f)};RQ=requestAnimationFrame(f)}
function fit(){const w=$('w');if(w)w.style.transform=`translate(-50%,-50%) scale(${Math.min(innerWidth/1920,innerHeight/1080)})`}
addEventListener('resize',fit);
addEventListener('keydown',e=>{if(e.code=='Space'||e.key=='r'||e.key=='R'){e.preventDefault();go()}});
document.addEventListener('DOMContentLoaded',()=>{mkStage();fit();boot();const F=document.fonts;Promise.race([F?Promise.all([F.load('700 80px Kalam'),F.load('80px "Permanent Marker"')]).then(()=>F.ready):0,new Promise(r=>setTimeout(r,3500))]).then(()=>setTimeout(go,50))});
window.WB_OK=1;
