"use client";

import { useEffect, useState } from "react";

const projects = [
  { title: "User Management", type: "Admin workflow", icon: "◉", detail: "Roles, groups, profiles & access" },
  { title: "Question Bank", type: "Assessment tool", icon: "⌁", detail: "Flexible authoring & review flows" },
  { title: "Group Management", type: "Operations tool", icon: "◌", detail: "People, teams & permissions" },
  { title: "File & Folder Management", type: "Document workflow", icon: "▣", detail: "Organised content, search & access" },
  { title: "Repository Management", type: "Developer workflow", icon: "⌘", detail: "Clean updates & team collaboration" },
];

export default function Home() {
  const [light, setLight] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);
  const [demoTab, setDemoTab] = useState("Overview");

  useEffect(() => {
    document.documentElement.dataset.theme = light ? "light" : "dark";
  }, [light]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home">Monica R<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a>
        </nav>
        <div className="header-actions"><a className="header-cv" href="/Monica-Frontend-Developer.pdf" download>Download CV <b>↓</b></a><button className="theme-toggle" onClick={() => setLight(!light)} aria-label="Toggle light and dark theme"><span>☼</span><i className={light ? "on" : ""} /><span>☾</span></button></div>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Hi, I’m Monica</p>
          <h1>Websites that<br />feel <em>easy</em> to use.</h1>
          <p className="lede">Frontend developer. React, responsive UI, and real product workflows.</p>
          <div className="actions">
            <a className="button primary" href="#hiring">I’m hiring <b>→</b></a>
            <a className="button" href="#clients">I need a website <b>→</b></a>
          </div>
        </div>
        <div className="hero-work" aria-label="Interface preview">
          <div className="app-window">
            <aside><strong>MR</strong><span>⌂</span><span>♙</span><span>⊞</span><span>◌</span></aside>
            <div className="dashboard">
              <div className="dash-top"><b>Dashboard</b><small>Search anything...</small></div>
              <div className="stats"><Stat n="2,842" t="Users" /><Stat n="128" t="Groups" /><Stat n="1,095" t="Questions" /></div>
              <div className="chart"><span>Activity</span><svg viewBox="0 0 340 100" preserveAspectRatio="none"><polyline points="0,78 42,55 78,68 116,38 153,52 196,25 236,42 285,20 340,33" /></svg></div>
              <div className="rows">{["Priya Mehta", "Jessica Miller", "Rakesh B"].map((name) => <div key={name}><i />{name}<small>Active</small></div>)}</div>
            </div>
          </div>
          <div className="mobile-window"><b>Dashboard</b><strong>2,842</strong><span>Total users</span><strong>128</strong><span>Active groups</span></div>
        </div>
      </section>

      <section className="path-grid" aria-label="Choose your path">
        <article id="hiring"><span>01</span><h2>For hiring teams</h2><p>Experience, skills, and real product work.</p><a href="#work">See my work <b>→</b></a></article>
        <article id="clients"><span>02</span><h2>For clients</h2><p>Simple websites and useful web apps for your business.</p><a href="#contact">Start a project <b>→</b></a></article>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>Built for real people,<br />not just pretty screens.</h2></div><a href="#contact">Let’s talk <b>→</b></a></div>
        <div className="project-grid">{projects.map((project, index) => <button className={`project project-${index + 1}`} key={project.title} onClick={() => { setActiveDemo(index); setDemoTab("Overview"); document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" }); }} aria-label={`Open ${project.title} interactive demo`}><div className="mini-ui"><span>Dashboard</span><div className="mini-side" /><div className="mini-content"><b>{project.title}</b><i /><i /><i /></div></div><div className="project-info"><div><span>{project.icon}</span><h3>{project.title}</h3><p>{project.detail}</p></div><span className="project-arrow">↗</span></div></button>)}</div>
      </section>

      <section className="demo-section" id="demo">
        <div className="demo-heading"><div><p className="eyebrow">Interactive mock demo</p><h2>Try the workflow.</h2></div><p>Sample data only — built to show the kind of interface experience I create.</p></div>
        <div className="demo-picker" role="tablist" aria-label="Choose a demo">{projects.map((project, index) => <button role="tab" aria-selected={activeDemo === index} className={activeDemo === index ? "selected" : ""} onClick={() => { setActiveDemo(index); setDemoTab("Overview"); }} key={project.title}>{project.title}</button>)}</div>
        <DemoWorkspace activeDemo={activeDemo} demoTab={demoTab} setDemoTab={setDemoTab} />
      </section>

      <section className="about" id="about">
        <div className="portrait"><img src="/monica-handdrawn.png" alt="Illustration of Monica working on a laptop" /></div>
        <div className="about-copy"><p className="eyebrow">About Monica</p><h2>I like turning complex ideas into clear, useful experiences.</h2><p>Good interfaces make work feel lighter. I care about the small decisions that help people move through a product with confidence.</p><a href="#contact">Get to know me <b>→</b></a></div>
      </section>

      <section className="contact" id="contact"><div><p className="eyebrow">Let’s connect</p><h2>Have something<br /><em>in mind?</em></h2><p>Whether you’re hiring or need a website, I’d love to hear from you.</p></div><form action="https://formsubmit.co/e2d865e2b39e922e688efe873eb54277" method="POST"><input type="hidden" name="_subject" value="New portfolio enquiry" /><input type="hidden" name="_template" value="table" /><input className="honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" /><label>Name<input name="name" placeholder="Your name" required /></label><label>Email<input name="email" type="email" placeholder="Your email" required /></label><label>What can I help with?<textarea name="message" placeholder="Tell me about your project or goals..." required /></label><button className="button primary" type="submit">Send message <b>→</b></button></form></section>
      <footer><span>© 2026 Monica R</span><div><a href="#home">Home</a><a href="#work">Work</a><a href="#about">About</a><a href="https://www.linkedin.com/in/monica-ramasubramanian/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/MonicaRamasubramanian" target="_blank" rel="noreferrer">GitHub ↗</a></div><a className="footer-cv" href="/Monica-Frontend-Developer.pdf" download>Download CV ↓</a></footer>
    </main>
  );
}

function Stat({ n, t }: { n: string; t: string }) { return <div><span>{t}</span><strong>{n}</strong><small>↗ 12%</small></div>; }

function DemoWorkspace({ activeDemo, demoTab, setDemoTab }: { activeDemo: number; demoTab: string; setDemoTab: (tab: string) => void }) {
  const [selectedUser, setSelectedUser] = useState(0);
  const [leftPaneWidth, setLeftPaneWidth] = useState(700);
  const content = [
    { title: "User Management", label: "Users", action: "Add user", columns: ["Name", "Email", "Role", "Status"], rows: [["Asha Nair", "asha@demo.co", "Admin", "Active"], ["Kavin M", "kavin@demo.co", "Assessor", "Active"], ["Maya Roy", "maya@demo.co", "Skill seeker", "Invited"]] },
    { title: "Question Bank", label: "Questions", action: "Create question", columns: ["Question", "Type", "Difficulty", "Status"], rows: [["What makes a layout responsive?", "Short answer", "Easy", "Published"], ["Choose all correct HTML tags", "MSQ", "Medium", "Draft"], ["Rate this behaviour", "BARS", "Hard", "Published"]] },
    { title: "Group Management", label: "Groups", action: "Create group", columns: ["Group", "Members", "Owner", "Status"], rows: [["Product Team", "12", "Asha Nair", "Active"], ["Frontend", "8", "Kavin M", "Active"], ["Assessors", "6", "Maya Roy", "Active"]] },
    { title: "File & Folder Management", label: "Files", action: "Upload file", columns: ["Name", "Type", "Updated", "Access"], rows: [["Product brief", "Document", "Today", "Team"], ["Research notes", "Folder", "Yesterday", "Private"], ["Launch assets", "Folder", "Mon", "Team"]] },
    { title: "Repository Management", label: "Repositories", action: "New repository", columns: ["Repository", "Branch", "Updated", "Status"], rows: [["web-platform", "main", "Today", "Active"], ["admin-console", "release", "Yesterday", "Active"], ["ui-library", "main", "Mon", "Review"]] },
  ][activeDemo];
  const tabs = ["Overview", content.label, "Activity"];
  const people = [
    { initials: "AN", location: "Madurai, India", groups: "Product Team, Frontend" },
    { initials: "KM", location: "Chennai, India", groups: "Assessors, Frontend" },
    { initials: "MR", location: "Coimbatore, India", groups: "Skill seekers" },
  ];
  const table = <div className="demo-table-wrap"><div className="demo-table-top"><b>{demoTab === "Activity" ? "Recent activity" : content.label}</b><input aria-label="Search mock data" placeholder="Search..." /></div><table><thead><tr>{content.columns.map((column) => <th key={column}>{column}</th>)}<th>Action</th></tr></thead><tbody>{content.rows.map((row, rowIndex) => <tr onClick={activeDemo === 0 ? () => setSelectedUser(rowIndex) : undefined} className={activeDemo === 0 && rowIndex === selectedUser ? "selected-row clickable-row" : activeDemo === 0 ? "clickable-row" : ""} key={row[0]}>{row.map((cell, index) => <td key={cell}>{index === 3 ? <span className="status">{cell}</span> : cell}</td>)}<td><button className="more" onClick={(event) => { event.stopPropagation(); alert(`Actions for ${row[0]} are a visual demo.`); }} aria-label={`Actions for ${row[0]}`}>•••</button></td></tr>)}</tbody></table></div>;
  const person = people[selectedUser];
  const row = content.rows[selectedUser];
  const startResizing = (event: React.PointerEvent<HTMLButtonElement>) => {
    const shell = event.currentTarget.parentElement;
    if (!shell) return;
    const bounds = shell.getBoundingClientRect();
    const move = (moveEvent: PointerEvent) => setLeftPaneWidth(Math.max(560, Math.min(820, moveEvent.clientX - bounds.left)));
    const stop = () => { window.removeEventListener("pointermove", move); window.removeEventListener("pointerup", stop); };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", stop);
  };
  return <div className="demo-workspace"><div className="mobile-demo-card"><span>Project preview</span><div className="mobile-demo-screen"><div className="mobile-demo-rail"><b>MR</b><i /><i /><i /></div><div><small>{content.type}</small><strong>{content.title}</strong><em>{content.detail}</em><div className="mobile-demo-lines"><i /><i /><i /></div></div></div><p>This workflow is designed for desktop. Open it on a larger screen to try the full experience.</p></div><aside><b>MR</b><span>⌂</span><span className="active">◉</span><span>◫</span><span>⚙</span></aside><div className="demo-main"><div className="demo-bar"><div><p>{content.title}</p><small>Interactive portfolio demo</small></div><button onClick={() => alert(`${content.action} is a visual demo — the real portfolio will use a contact form.`)}>+ {content.action}</button></div><div className="demo-tabs">{tabs.map((tab) => <button className={demoTab === tab ? "active" : ""} onClick={() => setDemoTab(tab)} key={tab}>{tab}</button>)}</div>{activeDemo === 3 ? <FileExplorer /> : demoTab === "Overview" ? <div className="demo-overview"><div><span>Total {content.label.toLowerCase()}</span><strong>{activeDemo === 0 ? "248" : activeDemo === 1 ? "126" : "18"}</strong><small>Updated today</small></div><div><span>Active</span><strong>{activeDemo === 1 ? "84" : "16"}</strong><small>Everything is on track</small></div><div className="demo-note"><b>What this shows</b><p>{activeDemo === 0 ? "Clear access, role and profile management." : activeDemo === 1 ? "Structured question creation and review flows." : "Simple group ownership and member visibility."}</p></div></div> : activeDemo === 0 ? <div className="split-demo adjustable" style={{ gridTemplateColumns: `${leftPaneWidth}px 18px minmax(220px, 1fr)` }}><div>{table}</div><button className="split-handle" type="button" onPointerDown={startResizing} aria-label="Resize user list and details panels" title="Drag to resize panels"><i /><i /><i /></button><aside className="detail-card"><div className="detail-label">Selected user</div><div className="avatar">{person.initials}</div><h3>{row[0]}</h3><span>{row[2]}</span><hr/><p><b>Email</b>{row[1]}</p><p><b>Location</b>{person.location}</p><p><b>Groups</b>{person.groups}</p></aside></div> : table}</div></div>;
}

function FileExplorer() { const [selected, setSelected] = useState("Product brief.pdf"); const [notice, setNotice] = useState(""); const items=["📁 Opportunity","📁 Transaction","📁 Ventures","📄 Product brief.pdf","📄 Research notes.docx","🖼 Launch cover.png"]; return <div className="explorer"><div className="explorer-tools"><span>New</span><button onClick={()=>setNotice(`Copied ${selected}`)}>Copy</button><button onClick={()=>setNotice(`Move ${selected} to Ventures`)}>Move</button><button onClick={()=>setNotice(`Renamed ${selected}`)}>Rename</button><button onClick={()=>setNotice(`Deleted ${selected} — moved to Recycle Bin`)}>Delete</button></div><div className="crumbs">This PC <b>›</b> Data Room <b>›</b> Opportunity <b>›</b> Q3 Launch</div><div className="explorer-body"><aside><b>Quick access</b><span>⌂ Home</span><span>▣ Data Room</span><span className="tree-active">⌄ Opportunity</span><span className="tree-indent">⌄ Q3 Launch</span><span className="tree-indent2">Design</span><span className="tree-indent2">Research</span><span>› Transaction</span><span>› Ventures</span><span>♲ Recycle Bin</span></aside><div className="file-pane"><div className="file-head"><span>Name</span><span>Modified</span><span>Type</span></div>{items.map((item,index)=><button key={item} className={selected===item.replace(/^[^ ]+ /,"")?"file-row selected-file":"file-row"} onClick={()=>{setSelected(item.replace(/^[^ ]+ /,""));setNotice("")}}><span>{item}</span><span>{index<3?"Today":"Yesterday"}</span><span>{item.includes("📁")?"Folder":"File"}</span></button>)}{notice&&<div className="file-notice">✓ {notice}</div>}</div></div></div>; }
