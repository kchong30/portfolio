import './styles/skills.css'

function Skills() {
  return (
<div className={`skills-section ${scroll >= window.innerHeight * 3 ? 'fade-in' : ''}`}>
  <h1 className="skills-title">Skills and Proficiencies<span className="punctuation">.</span></h1>
  <div className="animated-line"></div>
  <div className="skills-row">
    <h3>Languages</h3>
    <div className="badge-grid">
      <div className="badge-icon"><img src="/logos/js.png" alt="JavaScript" />JavaScript</div>
      <div className="badge-icon"><img src="/logos/html5.png" alt="HTML 5" />HTML 5</div>
      <div className="badge-icon"><img src="/logos/csharp.png" alt="C#" />C#</div>
      <div className="badge-icon"><img src="/logos/python.png" alt="Python" />Python</div>
      <div className="badge-icon"><img src="/logos/css.png" alt="CSS" />CSS</div>
    </div>
  </div>
  <div className="skills-row mt-6">
    <h3>Frameworks</h3>
    <div className="badge-grid">
      <div className="badge-icon"><img src="/logos/react.png" alt="React" /> React</div>
      <div className="badge-icon"><img src="/logos/angular.png" alt="Angular" /> Angular</div>
      <div className="badge-icon"><img src="/logos/vue.png" alt="Vue" /> Vue</div>
      <div className="badge-icon"><img src="/logos/tailwind.png" alt="Tailwind" /> Tailwind</div>
      <div className="badge-icon"><img src="/logos/bootstrap.png" alt="Bootstrap" /> Bootstrap</div>
      <div className="badge-icon"><img src="/logos/netcore.png" alt="ASP.NET" /> ASP.NET</div>
      <div className="badge-icon"><img src="/logos/laravel.png" alt="Laravel" /> Laravel</div>
      <div className="badge-icon"><img src="/logos/sst.png" alt="SST" />SST</div>
    </div>
  </div>
  <div className="skills-row mt-6">
    <h3>Databases</h3>
    <div className="badge-grid">
      <div className="badge-icon"><img src="/logos/mysql.png" alt="MySQL" /> MySQL</div>
      <div className="badge-icon-mongo"><img src="/logos/mongodb.png" alt="MongoDB" /> MongoDB</div>
      <div className="badge-icon"><img src="/logos/sqlite.png" alt="SQLite" /> SQLite</div>
      <div className="badge-icon"><img src="/logos/cockroachdb.png" alt="CockroachDB" /> CockroachDB</div>
    </div>
  </div>
  <div className="skills-row ">
    <h3>Cloud Services</h3>
    <div className="badge-grid">
      <div className="badge-icon"><img src="/logos/aws.png" alt="AWS" /> AWS</div>
      <div className="badge-icon"><img src="/logos/azure.png" alt="Azure" /> Azure</div>
    </div>
  </div>
</div>
  )
}

export default Skills