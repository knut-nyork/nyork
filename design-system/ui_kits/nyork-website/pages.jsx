const { Nav, Card, ImageContainer, Tab, DataDisplayButton, FormsButton } = window.DesignSystem_1e8b4a;

function Breadcrumb({text}){
  return <div className="type-detail" style={{textAlign:'center'}}>{text}</div>;
}
function PageTitle({children}){
  return <div className="type-h1" style={{textAlign:'center',margin:'8px 0 24px'}}>{children}</div>;
}
function Shell({children}){
  return <div style={{maxWidth:1600,margin:'0 auto',padding:'24px 24px 80px',display:'flex',flexDirection:'column',alignItems:'center',gap:40,position:'relative'}}>{children}</div>;
}

function HomePage(){
  return <Shell>
    <div style={{height:100}} />
    <div style={{width:'100%',height:520,borderRadius:24,background:'url(../../assets/images/hero-cabin-exterior.png) center/cover no-repeat',display:'flex',alignItems:'flex-end',padding:32,boxSizing:'border-box'}}>
      <div style={{background:'rgba(255,255,255,0.85)',borderRadius:12,padding:24,maxWidth:600,display:'flex',flexDirection:'column',gap:16}}>
        <div className="type-display" style={{fontSize:40}}>Velkommen til Nyørk!</div>
        <div className="type-ingress">Nå bygger vi en destinasjon i destinasjonen Hemsedal. Planene er store og første byggetrinn er bare starten. Meld din interesse og bli med oss på eventyret!</div>
      </div>
    </div>
    <div style={{width:'100%',height:260,borderRadius:24,background:'url(../../assets/images/field-overview.png) center/cover no-repeat, linear-gradient(#F3EFE8,#F3EFE8)',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 48px',boxSizing:'border-box',gap:40}}>
      <div className="type-h2" style={{maxWidth:340}}>Sentrumsnært. Skin-in-out.</div>
      <div style={{maxWidth:420,display:'flex',flexDirection:'column',gap:12}}>
        <div className="type-ingress">Nyørk ligger flott til mellom Hemsedal Skisenter og sentrum. Første byggetrinn er ferdigstilt og har kun 1 ledig hytte igjen for salg.</div>
        <FormsButton type="secondary" text="Les mer om feltet" />
      </div>
    </div>
    <Card style={{width:'100%'}} property1="left" />
    <Card style={{width:'100%'}} property1="right" />
  </Shell>;
}

function HytterPage(){
  const cabins = [
    {name:'Hytte 01', price:'9 450 000 ,-', status:'Solgt'},
    {name:'Hytte 03', price:'9 890 000 ,-', status:'Solgt'},
    {name:'Hytte 05', price:'10 050 000 ,-', status:'Til salgs'},
  ];
  return <Shell>
    <div style={{height:100}} />
    <Breadcrumb text="Hjem / Hytter" />
    <PageTitle>Ferdigbygde hytter</PageTitle>
    <div style={{width:'100%',maxWidth:1000,borderRadius:12,boxShadow:'inset 0 0 0 1px var(--semantic-color-border-default)',overflow:'hidden'}}>
      {cabins.map((c,i)=>(
        <div key={c.name} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'18px 24px',borderBottom:i<cabins.length-1?'1px solid var(--semantic-color-border-subtle)':'none'}}>
          <div className="type-body" style={{fontWeight:600}}>{c.name}</div>
          <div className="type-body">{c.price}</div>
          <div className="type-caption" style={{background:c.status==='Solgt'?'var(--core-neutral-100)':'var(--core-brand-100)',padding:'4px 12px',borderRadius:999}}>{c.status}</div>
        </div>
      ))}
    </div>
    <div style={{display:'flex',gap:16,alignItems:'center'}}>
      <div className="type-h3">Hyttetyper</div>
    </div>
    <div style={{display:'flex',gap:12}}>
      <Tab type="summer" /><Tab type="winter" />
    </div>
    <div style={{display:'flex',gap:16,width:'100%'}}>
      <div style={{flex:1,height:100}}><ImageContainer property1="default" /></div>
      <div style={{flex:1,height:100}}><ImageContainer property1="variant2" /></div>
    </div>
  </Shell>;
}

function HytteDetailPage(){
  const specs = [
    ['Pris','10 050 000 ,-'],['Omk','50 000 ,-'],['Tot inkl omk','10 100 000 ,-'],
    ['BRA-i','143 m²'],['Etasjer','3'],['Soverom','4'],['Bad','2'],
  ];
  return <Shell>
    <div style={{height:100}} />
    <Breadcrumb text="Hjem / Hytter / Hytte 05" />
    <PageTitle>Hytte 05</PageTitle>
    <div style={{width:'100%',maxWidth:1000,height:480,borderRadius:12,background:'linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url(../../assets/images/hemsedal-1.jpg) center/cover no-repeat'}} />
    <div style={{width:'100%',maxWidth:800,borderRadius:12,background:'var(--core-brand-050)',padding:24,display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20,boxSizing:'border-box'}}>
      {specs.map(([label,val])=>(
        <div key={label} style={{display:'flex',flexDirection:'column',gap:4}}>
          <div className="type-caption">{label}</div>
          <div className="type-body" style={{fontWeight:600}}>{val}</div>
        </div>
      ))}
    </div>
    <div style={{display:'flex',gap:16,width:'100%',maxWidth:800}}>
      <div style={{flex:1,height:200,borderRadius:12,background:'url(../../assets/images/cabin-interior-1.png) center/cover no-repeat'}} />
      <div style={{flex:1,height:200,borderRadius:12,background:'url(../../assets/images/cabin-interior-2.png) center/cover no-repeat'}} />
    </div>
    <FormsButton type="primary" text="Meld interesse" />
  </Shell>;
}

function HemsedalPage(){
  return <Shell>
    <div style={{height:100}} />
    <Breadcrumb text="Hjem / Om Hemsedal" />
    <PageTitle>Destinasjon Hemsedal</PageTitle>
    <div style={{width:'100%',maxWidth:1000,height:420,borderRadius:12,background:'url(../../assets/images/hemsedal-panorama.png) center/cover no-repeat'}} />
    <div style={{width:'100%',maxWidth:800,display:'flex',flexDirection:'column',gap:24}}>
      <div className="type-h3">Hvorfor Hemsedal</div>
      <div className="type-body">Hemsedal er kjent som Norges skimekka, med et av landets største skianlegg rett utenfor døren. Nyørk ligger sentrumsnært, med kort vei til både bakke og bygd.</div>
      <div className="type-h3">Så enkelt</div>
      <div className="type-body">Fra parkering til førersete på heisen — Nyørk er bygget for et friksjonsfritt liv på fjellet, sommer som vinter.</div>
    </div>
  </Shell>;
}

const pages = { hjem: HomePage, hytter: HytterPage, hytte: HytteDetailPage, omradet: HemsedalPage };

function App(){
  const [page, setPage] = React.useState('hjem');
  const tabs = [['hjem','Hjem'],['hytter','Hytter'],['hytte','Hytte 05'],['omradet','Området']];
  return <div>
    <div style={{position:'fixed',top:0,left:0,right:0,zIndex:10,display:'flex',justifyContent:'center'}}>
      <Nav property1="desktop" style={{width:1600,maxWidth:'100%'}} />
    </div>
    <div style={{position:'fixed',top:70,left:0,right:0,zIndex:10,display:'flex',justifyContent:'center',background:'var(--core-neutral-900)'}}>
      <div style={{width:1600,maxWidth:'100%',display:'flex',gap:8,padding:'6px 24px',alignItems:'center'}}>
        <span style={{fontFamily:'var(--font-body)',fontSize:11,color:'var(--core-neutral-400)',marginRight:8}}>PROTOTYPE NAV →</span>
        {tabs.map(([key,label]) => (
          <button key={key} onClick={()=>setPage(key)} style={{background:page===key?'var(--core-brand-600)':'transparent',color:'#fff',border:'none',borderRadius:6,padding:'4px 10px',cursor:'pointer',fontFamily:'var(--font-body)',fontSize:13}}>{label}</button>
        ))}
      </div>
    </div>
    <div style={{height:28}} />
    {React.createElement(pages[page])}
  </div>;
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
