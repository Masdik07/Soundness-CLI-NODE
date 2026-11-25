/* Whiteboard page engine. Load it in <head> with <script src>, then write one <script>SCENE(...)</script> per scene in <body>. */
(function(){var d=document,css='html,body{margin:0;height:100%;background:#efe9db;overflow:hidden;cursor:none}#w{position:absolute;left:50%;top:50%;width:1920px;height:1080px;overflow:hidden;background:#f3eee2;opacity:0}svg{display:block}text{font-family:Kalam,"Comic Sans MS",cursive;font-weight:700}.mk{font-family:"Permanent Marker",Kalam,cursive;font-weight:400}',f='https://fonts.googleapis.com/css2?family=Kalam:wght@700&family=Permanent+Marker&display=block';
 if(d.readyState=='loading')d.write('<meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="'+f+'"><style>'+css+'</style>');
 else{var h=d.head||d.documentElement,l=d.createElement('link');l.rel='stylesheet';l.href=f;h.appendChild(l);var s=d.createElement('style');s.textContent=css;h.appendChild(s)}
 if(!d.title)d.title='​'})();
const C={},$=i=>C[i]||(C[i]=document.getElementById(i));
const cl=(x,a=0,b=1)=>x<a?a:x>b?b:x,L=(a,b,u)=>a+(b-a)*u,f1=n=>Math.round(n*10)/10;
const EZ={l:u=>u,io:u=>u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2,o:u=>1-Math.pow(1-u,3),i:u=>u*u*u,x:u=>u>=1?1:1-Math.pow(2,-10*u),b:u=>{const c=1.9;return 1+(c+1)*Math.pow(u-1,3)+c*Math.pow(u-1,2)},e:u=>u<=0?0:u>=1?1:Math.pow(2,-9*u)*Math.sin((u*9-.75)*2.094)+1};
const U=(t,a,b,e='o')=>(EZ[e]||EZ.o)(cl((t-a)/(b-a)));
const K=(t,k,e='io')=>{if(t<=k[0][0])return k[0][1];for(let i=1;i<k.length;i++)if(t<k[i][0]){const a=k[i-1],b=k[i];return L(a[1],b[1],(EZ[b[2]||e]||EZ.io)((t-a[0])/(b[0]-a[0])))}return k[k.length-1][1]};
const NUM=(v,d)=>v==null||v!==v?d:+v;
const T=(i,x=0,y=0,s=1,r=0,o=1,sy=s)=>{const e=typeof i=='string'?$(i):i;if(!e)return;s=NUM(s,1);sy=NUM(sy,s);e.setAttribute('transform',`translate(${f1(NUM(x,0))} ${f1(NUM(y,0))}) rotate(${f1(NUM(r,0))}) scale(${s.toFixed(4)} ${sy.toFixed(4)})`);e.setAttribute('opacity',cl(NUM(o,1)).toFixed(3))};
const O=(i,o)=>{const e=typeof i=='string'?$(i):i;if(e)e.setAttribute('opacity',cl(NUM(o,0)).toFixed(3))};
const D=(i,u)=>{const e=typeof i=='string'?$(i):i;if(!e)return;e.setAttribute('stroke-dasharray','1 1');e.setAttribute('stroke-dashoffset',(1-cl(NUM(u,0))).toFixed(4))};
const X=(i,s)=>{const e=typeof i=='string'?$(i):i;if(!e)return;s=String(s);if(e.textContent!==s)e.textContent=s};
const money=v=>'$'+Math.round(v).toLocaleString('en-US');
const R=s=>()=>(s=(s*16807)%2147483647)/2147483647;
const CAM=(t,k)=>{let a=k[0],b=a,u=0;if(t>k[0][0])for(let i=1;i<k.length;i++){if(t<k[i][0]){a=k[i-1];b=k[i];u=(EZ[b[4]]||EZ.io)((t-a[0])/(b[0]-a[0]));break}a=b=k[i]}return{x:L(a[1],b[1],u),y:L(a[2],b[2],u),s:a[3]*Math.pow(b[3]/a[3],u)}};
const LAY=(i,c,f=1)=>{const e=$(i);if(e&&c)e.setAttribute('transform',`translate(960 540) scale(${(1+(c.s-1)*f).toFixed(4)}) translate(${f1(-(960+(c.x-960)*f))} ${f1(-(540+(c.y-540)*f))})`)};
const BGR={};
const BG=(id,k,o={})=>{const r=R(o.seed||7),x0=-2600,y0=-2000,w=o.w||1920,h=o.h||1080,W=w+5200,H=h+4000,fy=o.floor,PC='#8a7a58';
 let f=`<defs><radialGradient id="${id}g" gradientUnits="userSpaceOnUse" cx="${w/2}" cy="${h*.45}" r="${Math.max(w,h)*.9}"><stop offset="0" stop-color="#faf7ef"/><stop offset=".6" stop-color="#f1ecdf"/><stop offset="1" stop-color="#e4dcc9"/></radialGradient><pattern id="${id}n" width="230" height="230" patternUnits="userSpaceOnUse">`;
 for(let i=0;i<26;i++)f+=`<circle cx="${(r()*230)|0}" cy="${(r()*230)|0}" r="${(.6+r()*1.3).toFixed(1)}" fill="#5a4a30" fill-opacity="${(.05+r()*.08).toFixed(2)}"/>`;
 f+=`</pattern><pattern id="${id}h" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(-35)"><path d="M0 11H22" stroke="#2a2a2a" stroke-opacity=".16" stroke-width="2.4"/></pattern></defs><rect x="${x0}" y="${y0}" width="${W}" height="${H}" fill="url(#${id}g)"/>`;
 let m=`<rect x="${x0}" y="${y0}" width="${W}" height="${H}" fill="url(#${id}n)"/>`;
 const n=o.n||14,PT=[];for(let i=0;i<n;i++){const x=(r()*(w+1600)-800)|0,y=(r()*(h+800)-400)|0,sz=6+r()*10;PT.push([x,y,(r()*180)|0,r()*6]);
  m+=`<g id="${id}d${i}"><path d="M${f1(-sz/2)} 0Q0 ${f1(sz/5)} ${f1(sz/2)} 0" fill="none" stroke="${PC}" stroke-width="3" stroke-linecap="round" opacity=".25"/></g>`}
 if(fy!=null){let g=`M${x0} ${fy}`;for(let x=x0+200;x<=x0+W;x+=200)g+=`Q${x-100} ${f1(fy+(r()-.5)*9)} ${x} ${f1(fy+(r()-.5)*5)}`;m+=`<rect x="${x0}" y="${fy}" width="${W}" height="2400" fill="#dccfae" opacity=".35"/><rect x="${x0}" y="${fy+4}" width="${W}" height="56" fill="url(#${id}h)"/><path d="${g}" fill="none" stroke="#2a2a2a" stroke-width="5" stroke-linecap="round"/>`}
 return BGR[id]={far:f,mid:m,live:t=>{for(let i=0;i<n;i++){const p=PT[i];T(id+'d'+i,p[0]+Math.sin(t*.5+p[3])*4,p[1]+Math.sin(t*.35+p[3])*3,1,p[2])}}}};
const IN=(i,t,a,x,y,k='rise',d=.7,s=1)=>{const u=cl((t-a)/d),q=k=='spring'?EZ.e(u):EZ.b(u),o=EZ.o(cl(u*2.5));if(k=='rise')T(i,x,y+(1-q)*70,s,0,o);else if(k=='spring')T(i,x,y,s*(.2+.8*q),0,o);else if(k=='drop')T(i,x,y-(1-q)*260,s,0,o);else if(k=='left')T(i,x-(1-q)*220,y,s,0,o);else if(k=='right')T(i,x+(1-q)*220,y,s,0,o);else if(k=='swing')T(i,x,y,s,(1-q)*-28,o);else if(k=='stamp')T(i,x,y,s*L(2.6,1,EZ.o(u)),0,o)};
const TW=(s,f)=>s.length*f*.58;
const PILL=(i,s,f,fg,bg,a='middle',mw=0)=>{const w=TW(s,f)+f*1.1,h=f*1.25,x=a=='middle'?-w/2:a=='end'?-w:0;return `<g id="${i}" data-pill="${a}|${f}|${mw||0}"><path d="M${f1(x+3)} ${f1(-h*.62)}L${f1(x+w)} ${f1(-h*.68)}L${f1(x+w-5)} ${f1(h*.4)}L${f1(x)} ${f1(h*.45)}Z" fill="${bg}" opacity=".9"/><text x="${f1(x+w/2)}" y="${f1(f*.3)}" text-anchor="middle" font-size="${f}" fill="${fg}">${s}</text></g>`};
const SHD=(x,y,w,o=.3)=>`<ellipse cx="${x}" cy="${y}" rx="${w/2}" ry="${(w/12)|0}" fill="#2a2a2a" opacity="${(o*.4).toFixed(3)}"/>`;
const VIG=`<defs><radialGradient id="vg" cx=".5" cy=".46" r=".8"><stop offset=".55" stop-color="#7a6644" stop-opacity="0"/><stop offset="1" stop-color="#7a6644" stop-opacity=".2"/></radialGradient></defs><rect width="1920" height="1080" fill="url(#vg)" pointer-events="none"/><g fill="none" stroke="#3b3b3b" stroke-width="4" stroke-linecap="round" opacity=".6" pointer-events="none"><path d="M58 50Q960 42 1866 47M1859 38Q1866 540 1861 1040M1870 1033Q960 1040 52 1036M60 1044Q54 540 61 42"/><path d="M96 58Q700 54 1240 56" opacity=".35"/></g>`;
const INKC='#2a2a2a';
const RL=(x1,y1,x2,y2,s=1)=>{const r=R(s*7919+3),m=1.5+Math.hypot(x2-x1,y2-y1)*.012,j=()=>(r()-.5)*2*m;return `M${f1(x1+j())} ${f1(y1+j())}Q${f1((x1+x2)/2+j()*1.5)} ${f1((y1+y2)/2+j()*1.5)} ${f1(x2+j())} ${f1(y2+j())}`};
const RR=(x,y,w,h,s=1)=>{const r=R(s*7919+11),j=(m=3)=>(r()-.5)*2*m,p=[[x,y],[x+w,y],[x+w,y+h],[x,y+h],[x,y]];let d=`M${f1(x+j())} ${f1(y+j())}`;for(let i=1;i<5;i++){const a=p[i-1],b=p[i];d+=`Q${f1((a[0]+b[0])/2+j(5))} ${f1((a[1]+b[1])/2+j(5))} ${f1(b[0]+j())} ${f1(b[1]+j())}`}return d+`L${f1(x+Math.min(w*.15,34))} ${f1(y+j(3))}`};
const RC=(cx,cy,rx,ry=rx,s=1)=>{const r=R(s*7919+29),a0=r()*6.28,n=18,P=[];for(let i=0;i<=n;i++){const a=a0+i/n*6.28*1.07,k=1+(r()-.5)*.05;P.push([cx+Math.cos(a)*rx*k,cy+Math.sin(a)*ry*k])}const M=(a,b)=>f1((a[0]+b[0])/2)+' '+f1((a[1]+b[1])/2);let d=`M${f1(P[0][0])} ${f1(P[0][1])}L${M(P[0],P[1])}`;for(let i=1;i<n;i++)d+=`Q${f1(P[i][0])} ${f1(P[i][1])} ${M(P[i],P[i+1])}`;return d+`L${f1(P[n][0])} ${f1(P[n][1])}`};
const SK=(i,d,fill='none',sw=5,col=INKC)=>`<g id="${i}">${fill!='none'?`<path id="${i}f" d="${d}" fill="${fill}" transform="translate(6 5)"/>`:''}<path id="${i}o" d="${d}" fill="none" stroke="${col}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" pathLength="1"/></g>`;
const DW=(i,t,a,d=.8)=>{D(i+'o',U(t,a,a+d,'io'));if($(i+'f'))O(i+'f',U(t,a+d*.5,a+d+.25))};
const WT=(i,s,f,fill=INKC,a='middle',cls='',mw=0)=>{const w=TW(s,f)*1.15+f*.6,x=a=='middle'?-w/2:a=='end'?-w+f*.3:-f*.3;return `<g id="${i}" data-wt="${a}|${f}|${mw||0}"><clipPath id="${i}c"><rect id="${i}k" x="${f1(x)}" y="${f1(-f*1.15)}" width="${f1(w)}" height="${f1(f*1.7)}"/></clipPath><text clip-path="url(#${i}c)" text-anchor="${a}" font-size="${f}" fill="${fill}"${cls?` class="${cls}"`:''}>${s}</text></g>`};
const WR=(i,u)=>{const k=$(i+'k');if(!k)return;const x=+k.getAttribute('x');k.setAttribute('transform',`translate(${x} 0) scale(${Math.max(cl(NUM(u,0)),.0001).toFixed(4)} 1) translate(${-x} 0)`)};
const OUT='#2a2a2a',SKIN='#fffdf6',INK='#2a2a2a';
const EXP={n:['M-9 -196H9',0,1,[0,0,0,0,0]],happy:['M-11 -199Q0 -186 11 -199',0,1,[-4,-8,-4,8,1]],sad:['M-10 -191Q0 -200 10 -191',0,1,[0,14,0,-14,1]],shocked:['',1,1.45,[-9,0,-9,0,1]],afraid:['M-11 -194q3.7 -5 7.3 0t7.3 0t7.3 0',0,1.25,[-6,16,-6,-16,1]],confused:['M-9 -193L9 -199',0,1,[-8,-10,2,6,1]],angry:['M-10 -192Q0 -198 10 -192',0,1,[2,-20,2,20,1]],thinking:['M-4 -196H8',0,1,[-9,-6,0,4,1]],smile:['M-9 -198Q0 -191 9 -198',0,1,[0,0,0,0,0]],laugh:['M-12 -200Q0 -182 12 -200Z',0,.8,[-6,-8,-6,8,1]],worried:['M-9 -192Q0 -197 9 -192',0,1.1,[-4,-14,-4,14,1]],surprised:['',1,1.3,[-12,0,-12,0,1]],proud:['M-11 -199Q0 -189 11 -199',0,.9,[-3,-6,-3,6,1]],sleepy:['M-5 -195H5',0,.45,[4,0,4,0,1]],determined:['M-9 -195H9',0,1,[3,12,3,-12,1]],relieved:['M-10 -197Q0 -190 10 -197',0,.85,[-6,-6,-6,6,1]]};
const POSE={idle:[6,8,6,8,0,0],point:[6,10,100,0,4,2],pointup:[6,10,155,0,-3,0],present:[6,10,50,-60,3,0],explain:[25,100,45,-50,-3,0],shrug:[35,-65,35,-65,8,0],think:[6,10,15,160,-8,0],worry:[15,140,15,140,-4,0],facepalm:[6,10,20,170,14,3],cheer:[150,-15,150,-15,0,0],sad:[3,0,3,0,8,3],hips:[40,80,40,80,0,0],hold:[15,95,15,95,0,0],carry:[20,110,20,110,0,-2],stop:[6,10,80,-80,-4,-3],count:[20,120,30,-70,-3,0],sleep:[0,0,0,0,18,4],crossed:[12,100,12,100,0,0],scratch:[6,10,150,-80,-6,0],look:[6,10,150,-70,-5,0],wave:[6,10,125,-25,4,0],reach:[6,10,115,0,4,6],calm:[15,60,15,60,0,0],hopeful:[20,130,20,130,-7,-2],pay:[6,10,70,-20,3,3]};
const AP=(t,o)=>{const r=Object.assign({},o);if(o.pose){const k=typeof o.pose=='string'?[[0,o.pose]]:o.pose;let p=POSE[k[0][1]]||POSE.idle,w=k[0][1];for(let i=1;i<k.length;i++){if(t<k[i][0])break;const q=POSE[k[i][1]]||POSE.idle,u=EZ.io(cl((t-k[i][0])/.45));p=p.map((v,j)=>L(v,q[j],u));w=k[i][1]}['la','lb','ra','rb','hd','lean'].forEach((n,j)=>{if(o[n]==null)r[n]=p[j]});if(w=='wave'&&o.rb==null)r.rb+=Math.sin(t*11)*22}if(Array.isArray(o.ex)){let e=o.ex[0][1];o.ex.forEach(x=>{if(t>=x[0])e=x[1]});r.ex=e}if(!EXP[r.ex])r.ex='n';return r};
const GO=(t,k)=>{const x=K(t,k,'l'),d=K(t+.06,k,'l')-x;return{x,walk:Math.abs(d)>.4?1.7:0,f:d<-.4?1:0}};
const CH=(id,o={})=>{const her=o.her,him=o.him,c=o.c||SKIN,hc=o.hc,sh=o.shirt,ti=o.tie,bo=o.bow;
 const rig=`<g id="${id}R"><g id="${id}L1" ><rect x="-10" y="-6" width="20" height="98" rx="10"/><ellipse cx="-4" cy="94" rx="15" ry="8"/></g><g id="${id}L2"><rect x="-10" y="-6" width="20" height="98" rx="10"/><ellipse cx="4" cy="94" rx="15" ry="8"/></g><g id="${id}B"><rect x="-34" y="-82" width="68" height="98" rx="30"/></g><g id="${id}H"><circle cy="-36" r="36"/>${her?`<circle cx="0" cy="-80" r="17"${hc?` fill="${hc}"`:''}/>`:''}${hc?`<path d="M-35 -44A36 36 0 0 1 35 -44Q18 -60 0 -55Q-20 -62 -35 -44Z" fill="${hc}" stroke="${OUT}" stroke-width="3" stroke-linejoin="round"/>`:''}</g><g id="${id}A1"><rect x="-9" y="-6" width="18" height="52" rx="9"/><g id="${id}a1"><rect x="-8" y="-4" width="16" height="48" rx="8"/><circle cy="46" r="10.5" fill="${c}"/></g></g><g id="${id}A2"><rect x="-9" y="-6" width="18" height="52" rx="9"/><g id="${id}a2"><rect x="-8" y="-4" width="16" height="48" rx="8"/><circle cy="46" r="10.5" fill="${c}"/></g></g></g>`;
 return `<defs>${rig}</defs><g id="${id}"><ellipse id="${id}S" cx="0" cy="6" rx="62" ry="9" fill="#2a2a2a" opacity=".13"/><g id="${id}K"><use href="#${id}R" fill="${OUT}" stroke="${OUT}" stroke-width="9" stroke-linejoin="round"/><use href="#${id}R" fill="${c}"/>${sh?`<use href="#${id}B" fill="${sh}"/><use href="#${id}A1" fill="${sh}"/><use href="#${id}A2" fill="${sh}"/>`:''}${him&&ti!==0&&ti!==null?`<g id="${id}T"><path d="M-7 -176L7 -176L10 -136L0 -122L-10 -136Z" fill="${typeof ti=='string'?ti:'#3d6fd6'}" stroke="#2a2a2a" stroke-width="3" stroke-linejoin="round"/></g>`:''}<g id="${id}F"><g id="${id}E1"><ellipse cx="0" cy="0" rx="3.8" ry="3.8" fill="${INK}"/></g><g id="${id}E2"><ellipse cx="0" cy="0" rx="3.8" ry="3.8" fill="${INK}"/></g><rect id="${id}W1" x="-8" y="-1.6" width="16" height="3.2" rx="1.6" fill="${INK}"/><rect id="${id}W2" x="-8" y="-1.6" width="16" height="3.2" rx="1.6" fill="${INK}"/><path id="${id}M" d="" stroke="${INK}" stroke-width="3.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><ellipse id="${id}O" cx="0" cy="-194" rx="6" ry="8" fill="${INK}"/>${him?`<g fill="none" stroke="${INK}" stroke-width="2.6"><circle cx="-13" cy="-216" r="9"/><circle cx="13" cy="-216" r="9"/><path d="M-4 -217H4"/></g>`:''}${her&&bo!==0&&bo!==null?`<g transform="translate(22 -262) rotate(20)" fill="${typeof bo=='string'?bo:'#e0605a'}" stroke="#2a2a2a" stroke-width="3"><path d="M0 0L-18 -10V10Z"/><path d="M0 0L18 -10V10Z"/><circle r="5"/></g>`:''}</g></g></g>`};
const act=(id,t,o)=>{if(!$(id))return;o=AP(t,o||{});const ph=(id.length*1.7+id.charCodeAt(id.length-1))%5,s=o.s||1.45,wk=o.walk?t*o.walk:0,sw=o.walk?Math.sin(wk*6.3):0,ex=EXP[o.ex||'n'],br=Math.sin(t*2.2+ph);
 T(id,o.x,o.y,s,0,o.o==null?1:o.o);if(o.f)$(id).setAttribute('transform',$(id).getAttribute('transform')+' scale(-1 1)');
 T(id+'K',0,-(o.walk?Math.abs(Math.cos(wk*6.3))*6:0)-(o.jump||0),1,o.lean||0);
 T(id+'L1',-13,-96,1,o.walk?sw*24:(o.ll||0));T(id+'L2',13,-96,1,o.walk?-sw*24:(o.rl||0));
 T(id+'B',0,-96,1,0,1,1+br*.012);
 const hd=(o.hd||0)+Math.sin(t*1.3+ph)*1.5,ny=-178+br*.8;T(id+'H',0,ny,1,hd);T(id+'F',0,ny,1,hd);$(id+'F').setAttribute('transform',`translate(0 ${f1(ny)}) rotate(${f1(hd)}) translate(0 178)`);
 if($(id+'T'))T(id+'T',0,0,1,0,1);
 const la=(o.la||0)+(o.walk?-sw*20:0)+br*1.5,ra=(o.ra||0)+(o.walk?sw*20:0)+br*1.5;
 T(id+'A1',-31,-162,1,la);T(id+'a1',0,46,1,-(o.lb||0));T(id+'A2',31,-162,1,-ra);T(id+'a2',0,46,1,o.rb||0);
 const bl=((t+ph)%3.4)<.13?.12:1,eb=ex[2];T(id+'E1',-12,-216,1,0,1,eb*bl);$(id+'E1').setAttribute('transform',`translate(-12 -216) scale(${eb} ${(eb*bl).toFixed(2)})`);$(id+'E2').setAttribute('transform',`translate(12 -216) scale(${eb} ${(eb*bl).toFixed(2)})`);
 const w=ex[3];$(id+'W1').setAttribute('transform',`translate(-13 ${-231+w[0]}) rotate(${w[1]})`);$(id+'W2').setAttribute('transform',`translate(13 ${-231+w[2]}) rotate(${w[3]})`);O(id+'W1',w[4]);O(id+'W2',w[4]);
 $(id+'M').setAttribute('d',ex[0]);O(id+'O',ex[1])};
const PCAM=(t,id,k=[[0,960,540,1]])=>{const n=+String(id).slice(1),S=SC[n],d=S?S.d:10,ab=S&&!S.rel;if(ab&&k[0]&&k[0][0]<S.t0){k=k.slice();k[0]=k[0].slice();k[0][0]=S.t0}const u=cl((ab?t-S.t0:t)/d),c=CAM(t,k),m=n%5;if(m==0)c.s*=1+.045*u;else if(m==1)c.s*=1.045-.045*u;else if(m==2)c.x+=56*u-28;else if(m==3)c.x+=28-56*u;else{c.y+=22-44*u;c.s*=1+.02*u}return c};
const FX=(i,t,k,px=0,py=0)=>{let x=0,y=0,s=1,q=1,r=0,o=1;k.forEach(([a,n,v,w,h])=>{if(t<a)return;const u=cl((t-a)/(n=='move'?1:n=='spin'||n=='fall'||n=='fly'?.9:.7)),m=Math.sin(u*Math.PI),z=1-u,e=EZ.io(u);
 if(n=='pulse')s*=1+.14*m;else if(n=='pop')s*=u<.25?1+u*1.2:1+.3*(1-EZ.e((u-.25)/.75));else if(n=='shake')x+=Math.sin(u*50)*14*z;else if(n=='wiggle')r+=Math.sin(u*38)*9*z;else if(n=='bounce')y-=Math.abs(Math.sin(u*6.283))*44*z;else if(n=='jump')y-=m*80;else if(n=='swing')r+=Math.sin(u*25)*14*z;else if(n=='spin')r+=360*e;else if(n=='flip')q*=Math.cos(u*6.283);
 else if(n=='grow')s*=1+(v||.2)*EZ.b(u);else if(n=='shrink')s*=1-(v||.2)*EZ.o(u);else if(n=='tilt')r+=(v||-10)*EZ.b(u);else if(n=='sink')y+=(v||40)*e;else if(n=='rise')y-=(v||40)*e;else if(n=='fade')o*=1-(v||1)*EZ.o(u);
 else if(n=='move'){x+=(v||0)*e;y+=(w||0)*e-(h==null?120:h)*m}else if(n=='fall'){y+=760*EZ.i(u);r+=24*u;o*=1-EZ.i(u)}else if(n=='fly'){x+=(v||1100)*EZ.i(u);y-=320*EZ.i(u);o*=1-EZ.i(u)}});
 const g=$(i);if(!g)return;g.setAttribute('transform',`translate(${f1(px+x)} ${f1(py+y)}) rotate(${f1(r)}) scale(${(s*q).toFixed(4)} ${s.toFixed(4)}) translate(${f1(-px)} ${f1(-py)})`);g.setAttribute('opacity',cl(o).toFixed(3))};
const FLOW=(p,n,t,a,x1,y1,x2,y2,arc=-160,d=.9,g=.18)=>{for(let j=0;j<n;j++){const u=cl((t-a-j*g)/d),e=EZ.io(u),m=Math.sin(u*Math.PI);T(p+j,L(x1,x2,e),L(y1,y2,e)+arc*m,1,(j%2?-1:1)*12*m,u<=0||u>=1?0:cl(Math.min(u,1-u)*6))}};
const AR=(x1,y1,x2,y2,s=1)=>{const a=Math.atan2(y2-y1,x2-x1),h=Math.min(34,Math.hypot(x2-x1,y2-y1)*.3),p=b=>f1(x2-h*Math.cos(a+b))+' '+f1(y2-h*Math.sin(a+b));return RL(x1,y1,x2,y2,s)+`M${p(.5)}L${f1(x2)} ${f1(y2)}L${p(-.5)}`};
const MK=(i,k,x,y,w,h,col='#d6453d',sd=1)=>{const cx=x+w/2,cy=y+h/2;let d;if(k=='box')d=RR(x-16,y-14,w+32,h+28,sd);else if(k=='underline')d=RL(x-8,y+h+14,x+w+8,y+h+8,sd);else if(k=='strike')d=RL(x-14,cy+4,x+w+14,cy-6,sd);else if(k=='cross')d=RL(x,y,x+w,y+h,sd)+RL(x+w,y,x,y+h,sd+1);else if(k=='check')d=`M${f1(x+w*.12)} ${f1(y+h*.55)}L${f1(x+w*.4)} ${f1(y+h*.88)}L${f1(x+w*.92)} ${f1(y+h*.08)}`;else if(k=='arrow')d=AR(x-170,y+h+100,x-16,y+h*.6,sd);else if(k=='burst'){d='';for(let j=0;j<10;j++){const a=j*.628,co=Math.cos(a),si=Math.sin(a);d+=RL(cx+co*(w/2+22),cy+si*(h/2+18),cx+co*(w/2+56),cy+si*(h/2+44),sd+j)}}else d=RC(cx,cy,w/2+26,h/2+20,sd);return SK(i,d,'none',k=='underline'?9:7,col)};
/* ---------- layout boxes: PUT(id,box,svg,align,maxScale) fits a drawing into a named box of the page ---------- */
const BX={top:[160,92,1600,170],L:[160,300,490,650],C:[715,300,490,650],R:[1270,300,490,650],left:[160,300,760,650],right:[1000,300,760,650],LC:[160,300,1045,650],CR:[715,300,1045,650],mid:[210,300,1500,650],TL:[160,300,760,310],TR:[1000,300,760,310],BL:[160,640,760,310],BR:[1000,640,760,310],bot:[160,850,1600,130],full:[160,92,1600,898]};
const PUT=(id,b,svg,a='c',mx=1)=>`<g id="${id}_" data-fit="${Array.isArray(b)?b.map(f1).join(','):b}|${a}|${mx}"><g id="${id}">${svg}</g></g>`;
function tbox(w){const inv=w.getScreenCTM().inverse();let x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;
 w.querySelectorAll('path,rect,circle,ellipse,line,polyline,polygon,text,use').forEach(el=>{if(el.closest('clipPath,defs,mask,pattern,marker'))return;let b;try{b=el.getBBox()}catch(e){return}if(!(b.width>0||b.height>0))return;
  if(el.tagName=='text'){const f=parseFloat(el.getAttribute('font-size'))||40,y=parseFloat(el.getAttribute('y'))||0;b={x:b.x,y:y-f*.8,width:b.width,height:f*1.02}}
  const m=inv.multiply(el.getScreenCTM());[[b.x,b.y],[b.x+b.width,b.y],[b.x,b.y+b.height],[b.x+b.width,b.y+b.height]].forEach(q=>{const X=m.a*q[0]+m.c*q[1]+m.e,Y=m.b*q[0]+m.d*q[1]+m.f;if(X<x0)x0=X;if(Y<y0)y0=Y;if(X>x1)x1=X;if(Y>y1)y1=Y})});
 return x1>x0?{x:x0,y:y0,width:x1-x0,height:y1-y0}:null}
function fitWT(g){const q=(g.getAttribute('data-wt')||'').split('|'),a=q[0]||'middle',mw=+q[2]||0,tx=g.querySelector('text'),k=$(g.id+'k');if(!tx||!k)return;let f=+q[1]||40;tx.setAttribute('font-size',f1(f));let n=tx.getComputedTextLength();if(!(n>0))return;
 if(mw>0&&n>mw){f=f*mw/n;tx.setAttribute('font-size',f1(f));n=tx.getComputedTextLength()}
 const p=f*.3,x=a=='middle'?-n/2-p:a=='end'?-n-p:-p;k.setAttribute('x',f1(x));k.setAttribute('y',f1(-f*1.2));k.setAttribute('width',f1(n+2*p));k.setAttribute('height',f1(f*1.75))}
function fitPILL(g){const q=(g.getAttribute('data-pill')||'').split('|'),a=q[0]||'middle',mw=+q[2]||0,tx=g.querySelector('text'),p=g.querySelector('path');if(!tx||!p)return;let f=+q[1]||40;tx.setAttribute('font-size',f1(f));let n=tx.getComputedTextLength();if(!(n>0))return;
 if(mw>0&&n+f*1.1>mw){f=mw/(n/f+1.1);tx.setAttribute('font-size',f1(f));n=tx.getComputedTextLength()}
 const w=n+f*1.1,h=f*1.25,x=a=='middle'?-w/2:a=='end'?-w:0;p.setAttribute('d',`M${f1(x+3)} ${f1(-h*.62)}L${f1(x+w)} ${f1(-h*.68)}L${f1(x+w-5)} ${f1(h*.4)}L${f1(x)} ${f1(h*.45)}Z`);tx.setAttribute('x',f1(x+w/2));tx.setAttribute('y',f1(f*.3))}
function fitPUT(w,s,bot){const q=(w.getAttribute('data-fit')||'').split('|'),nm=q[0],a=q[1]||'c',mx=+q[2]||1;let b;
 if(BX[nm]){b=BX[nm].slice();if(bot&&nm!='bot'&&nm!='top'&&b[1]+b[3]>830)b[3]=Math.max(820-b[1],60)}else{b=nm.split(',').map(Number);if(b.length<4||b.some(v=>v!==v))return}
 w.removeAttribute('transform');let bb=null;try{bb=tbox(w)}catch(e){}if(!bb||!(bb.width>0&&bb.height>0))return;
 const fl=a.indexOf('f')>-1&&b[1]<860&&b[1]+b[3]>=900,bh=fl?900-b[1]:b[3],k=Math.min(b[2]*.96/bb.width,bh*.96/bb.height,mx),cw=bb.width*k,ch=bb.height*k;
 let x=b[0]+b[2]/2,y=b[1]+b[3]/2;if(a.indexOf('l')>-1)x=b[0]+cw/2;else if(a.indexOf('r')>-1)x=b[0]+b[2]-cw/2;
 if(fl)y=900-ch/2;else if(a.indexOf('t')>-1)y=b[1]+ch/2;else if(a.indexOf('b')>-1||a.indexOf('f')>-1)y=b[1]+b[3]-ch/2;
 let tr=`translate(${f1(x)} ${f1(y)}) scale(${k.toFixed(4)}) translate(${f1(-(bb.x+bb.width/2))} ${f1(-(bb.y+bb.height/2))})`;
 const P=w.parentNode,Wl=$(s.id+'W');if(P&&Wl&&P!==Wl&&Wl.contains(P))try{const m=P.getScreenCTM().inverse().multiply(Wl.getScreenCTM());tr=`matrix(${[m.a,m.b,m.c,m.d,m.e,m.f].map(v=>+v.toFixed(5)).join(' ')}) `+tr}catch(e){}
 w.setAttribute('transform',tr)}
const dep=e=>{let n=0;while(e&&e.id!=='S'){n++;e=e.parentNode}return n};
/* ---------- scenes and playback ---------- */
const V={},SC=[];let TOT=0,cur=-1,RQ=0,T0=0,PREP=0,BOOT=0;
const scene=(d,build,draw,tr)=>SC.push({d,build,draw,tr,n:SC.length});
const SCENE=(e,build,draw,tr)=>{if(e&&typeof e=='object')e=e.e;SC.push({e:+e,build,draw,tr,n:SC.length})};
const TRK=['shift','flip','fade','lift','pull','zoom'],TRD=.8,TRA=.55,EDG='<path d="M-34 0h34v1080h-34zM1920 0h34v1080h-34zM0 -34h1920v34H0zM0 1080h1920v34H0z" fill="#2a2a2a" opacity=".07"/><path d="M-12 0h12v1080h-12zM1920 0h12v1080h-12zM0 -12h1920v12H0zM0 1080h1920v12H0z" fill="#2a2a2a" opacity=".1"/>';
function boot(){$('S').innerHTML=`<defs><clipPath id="pgc"><rect width="1920" height="1080"/></clipPath></defs><g id="Q"></g>`+VIG;const Q=$('Q');
 let t=0;SC.forEach(s=>{if(typeof s.e=='number'&&s.e===s.e)s.rel=0;else{s.rel=1;s.e=t+Math.max(+s.d||10,.5)}t=s.e});
 t=0;
 SC.forEach((s,i)=>{const id='s'+i;s.id=id;s.t0=t;s.d=Math.max(s.e-t,.5);t+=s.d;s.e=t;s.tr=s.tr||TRK[(i+5)%6];s.on=0;
  let w='';try{w=s.build(id)}catch(e){s.bad=1;console.error('scene '+(s.n+1)+' build:',e)}
  if(typeof w!='string'||!w)s.bad=1;if(!V[id])V[id]=BGR[id+'b']||BG(id+'b','P',{seed:i*7+3});
  if(s.bad){const b=V[id];w=`<g id="${id}F">${b.far||''}</g><g id="${id}M">${b.mid||''}</g><g id="${id}W"></g>`}
  const g=document.createElementNS('http://www.w3.org/2000/svg','g');g.setAttribute('id',id);g.style.display='none';
  try{g.innerHTML=EDG+`<g clip-path="url(#pgc)">${w}</g>`}catch(e){s.bad=1;g.innerHTML=EDG}Q.appendChild(g)});
 TOT=t}
function show(a,b){SC.forEach((s,k)=>{const v=k==a||k==b;if(s.on!==v){$(s.id).style.display=v?'':'none';s.on=v}})}
function DR(s,t){const lt=s.rel?t-s.t0:t;if(s.bad||typeof s.draw!='function'){const c=PCAM(lt,s.id);LAY(s.id+'F',c,.3);LAY(s.id+'M',c,.6);LAY(s.id+'W',c,1);if(V[s.id]&&V[s.id].live)V[s.id].live(lt);return}
 try{s.draw(lt,s.id)}catch(e){if(!s.err){s.err=1;console.error('scene '+(s.n+1)+' draw:',e)}}}
function render(t){if(!SC.length)return;t=cl(t,0,TOT-1e-4);let i=0;while(i<SC.length-1&&t>=SC[i].t0+SC[i].d)i++;const n=i+1<SC.length&&t>=SC[i+1].t0-TRA?i+1:i>0&&t<SC[i].t0+TRD-TRA?i:-1;
 if(n<0){show(i,-1);T(SC[i].id,0,0);cur=i;DR(SC[i],t);return}
 const A=SC[n-1],B=SC[n],k=B.tr,u=EZ.io(cl((t-B.t0+TRA)/TRD)),q=$('Q'),tp=$((k=='shift'||k=='lift'?B:A).id);show(n-1,n);cur=n;if(q.lastChild!==tp)q.appendChild(tp);
 DR(A,Math.min(t,A.t0+A.d-1e-4));DR(B,Math.max(t,B.t0));
 if(k=='shift'){T(A.id,-380*u,0,1,0,1-.25*u);T(B.id,1960*(1-u),0)}else if(k=='lift'){T(A.id,0,-240*u,1,0,1-.25*u);T(B.id,0,1110*(1-u))}else if(k=='pull'){T(A.id,-2050*u,-60*u,1,-5*u);T(B.id,0,0,1,0,.7+.3*u)}else if(k=='flip'){T(A.id,0,0,1,0,1-.3*u,Math.max(1-u,.001));T(B.id,0,0,1,0,.75+.25*u)}else if(k=='zoom'){const s=1+.3*u,r=.94+.06*u;T(A.id,960-960*s,540-540*s,s,0,1-u);T(B.id,960-960*r,540-540*r,r)}else{T(A.id,0,0,1,0,1-u);T(B.id,0,0)}}
function go(){if(!BOOT)return;prep();cancelAnimationFrame(RQ);T0=performance.now();render(0);$('w').style.opacity=1;const f=n=>{const t=(n-T0)/1000;render(t);if(t<TOT+.05)RQ=requestAnimationFrame(f)};RQ=requestAnimationFrame(f)}
function prep(){if(PREP)return;PREP=1;SC.forEach(s=>{const g=$(s.id);if(!g)return;const dp=g.style.display;g.style.display='';
 try{g.querySelectorAll('[data-wt]').forEach(fitWT);g.querySelectorAll('[data-pill]').forEach(fitPILL);
  const P=[...g.querySelectorAll('[data-fit]')],bot=P.some(e=>(e.getAttribute('data-fit')||'').split('|')[0]=='bot');
  P.sort((a,b)=>dep(b)-dep(a)).forEach(e=>{try{fitPUT(e,s,bot)}catch(x){}})}catch(x){console.error('fit:',x)}
 g.style.display=dp})}
function fit(){const w=$('w');if(w)w.style.transform=`translate(-50%,-50%) scale(${Math.min(innerWidth/1920,innerHeight/1080)})`}
function mkStage(){if(!$('w')){const w=document.createElement('div');w.id='w';w.innerHTML='<svg id="v" viewBox="0 0 1920 1080" width="1920" height="1080" xmlns="http://www.w3.org/2000/svg"><g id="S"></g></svg>';document.body.appendChild(w)}for(const k in C)delete C[k]}
addEventListener('resize',fit);
addEventListener('keydown',e=>{if(e.code=='Space'||e.key=='r'||e.key=='R'){e.preventDefault();go()}});
function start(){if(BOOT)return;mkStage();fit();boot();BOOT=1;const F=document.fonts;Promise.race([F?Promise.all([F.load('700 80px Kalam'),F.load('80px "Permanent Marker"')]).then(()=>F.ready):0,new Promise(r=>setTimeout(r,3500))]).catch(()=>0).then(()=>setTimeout(go,30))}
if(document.readyState=='loading')document.addEventListener('DOMContentLoaded',start);else setTimeout(start,0);
window.WB_OK=1;
