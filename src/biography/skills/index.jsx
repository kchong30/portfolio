import './styles/skills.css'

function Skills() {
  return (
    <div className={`skills-section ${scroll >= window.innerHeight * 3 ? 'fade-in' : ''}`}>
    <h1 className = "skills-title">Skills and Proficiencies<span className = "punctuation">.</span></h1>
    <div className="animated-line"></div>      
    <div className="skills-row">
        <h3>Languages</h3>
        <div className="badge-grid">
          <div className="badge-icon"><img src="../../public/logos/js.png" alt="JavaScript"></img>JavaScript</div>
          <div className="badge-icon"><img src="../../public/logos/html5.png" alt="HTML 5"></img>HTML 5</div>
          <div className="badge-icon"><img src="../../public/logos/csharp.png" alt="C#"></img>C#</div>
          <div className="badge-icon"><img src="../../public/logos/python.png" alt="Python"></img>Python</div>
          <div className="badge-icon"><img src="../../public/logos/css.png" alt="CSS"></img>CSS</div>
        </div>
      </div>
      <div className="skills-row mt-6">
        <h3>Frameworks</h3>
        <div className="badge-grid">
          <div className="badge-icon"><img src="../../public/logos/react.png" alt="React"></img> React</div>
          <div className="badge-icon"><img src="../../public/logos/angular.png" alt="Angular"></img> Angular</div>
          <div className="badge-icon"><img src="../../public/logos/vue.png" alt="Vue"></img> Vue</div>
          <div className="badge-icon"><img src="../../public/logos/tailwind.png" alt="Tailwind"></img> Tailwind</div>
          <div className="badge-icon"><img src="../../public/logos/bootstrap.png" alt="Bootstrap"></img> Bootstrap</div>
          <div className="badge-icon"><img src="../../public/logos/netcore.png" alt="ASP.NET"></img> ASP.NET</div>
          <div className="badge-icon"><img src="../../public/logos/laravel.png" alt="Laravel"></img> Laravel</div>
          <div className="badge-icon"><img src="../../public/logos/sst.png" alt="SST"></img>SST</div>
        </div>
      </div>
      <div className="skills-row mt-6">
        <h3>Databases</h3>
        <div className="badge-grid">
          <div className="badge-icon"><img src="../../public/logos/mysql.png" alt="MySQL"></img> MySQL</div>
          <div className="badge-icon-mongo"><img src="../../public/logos/mongodb.png" alt="MongoDB"></img> MongoDB</div>
          <div className="badge-icon"><img src="../../public/logos/sqlite.png" alt="SQLite"></img> SQLite</div>
          <div className="badge-icon"><img src="../../public/logos/cockroachdb.png" alt="CockroachDB"></img> CockroachDB</div>
        </div>
      </div>
      <div className="skills-row ">
        <h3>Cloud Services</h3>
        <div className="badge-grid">
          <div className="badge-icon"><img src="../../public/logos/aws.png" alt="AWS"></img> AWS</div>
          <div className="badge-icon"><img src="../../public/logos/azure.png" alt="Azure"></img> Azure</div>
        </div>
      </div>
    </div>
  )
}

export default Skills