"use client";

import { useMemo, useState } from "react";

const demoItems = [
  { id: 1, icon: "💻", category: "Ordinateurs", name: "Ordinateur portable", location: "Himbi", detail: "Pour les travaux pratiques et les projets universitaires", color: "blue" },
  { id: 2, icon: "📽️", category: "Projecteurs", name: "Vidéoprojecteur", location: "Katindo", detail: "Pour les exposés et présentations en groupe", color: "purple" },
  { id: 3, icon: "🖥️", category: "Écrans", name: "Moniteur externe", location: "Les Volcans", detail: "Pour travailler avec un espace d'affichage supplémentaire", color: "green" }
];
const categories = [
  { icon: "💻", name: "Ordinateurs", description: "PC portables pour étudier" },
  { icon: "📽️", name: "Projecteurs", description: "Présentations et exposés" },
  { icon: "🖥️", name: "Écrans", description: "Moniteurs et affichage" },
  { icon: "🎧", name: "Accessoires", description: "Claviers, casques et plus" }
];
const steps = [
  { number: "01", title: "Découvrir", description: "Explorez les catégories de matériel adapté aux besoins universitaires." },
  { number: "02", title: "Échanger", description: "Prenez contact avec le propriétaire lorsque le service sera ouvert." },
  { number: "03", title: "Utiliser", description: "Convenir des conditions de location, de remise et de restitution." }
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("Tous");
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleItems = useMemo(() => demoItems.filter((item) =>
    (selected === "Tous" || item.category === selected) &&
    `${item.name} ${item.category} ${item.location}`.toLowerCase().includes(query.trim().toLowerCase())
  ), [selected, query]);
  const navigateTo = (id: string) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  return <>
    <header className="site-header">
      <div className="container header-content">
        <a className="brand" href="#accueil" aria-label="CampusShare, retour à l'accueil"><span className="brand-symbol">C<span>✦</span></span><span>Campus<span className="brand-highlight">Share</span></span></a>
        <button className="menu-toggle" aria-label="Ouvrir ou fermer le menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Navigation principale">
          <a href="#accueil" onClick={() => setMenuOpen(false)}>Accueil</a>
          <a href="#equipements" onClick={() => setMenuOpen(false)}>Équipements</a>
          <a href="#fonctionnement" onClick={() => setMenuOpen(false)}>Comment ça marche</a>
          <a href="#apropos" onClick={() => setMenuOpen(false)}>À propos</a>
          <a className="nav-button" href="#contact" onClick={() => setMenuOpen(false)}>Nous contacter ↗</a>
        </nav>
      </div>
    </header>
    <main>
      <section className="hero" id="accueil">
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse-dot"/> UNE IDÉE NÉE À GOMA, POUR LES ÉTUDIANTS</div>
            <h1>Le bon matériel, <span>au bon moment.</span></h1>
            <p className="hero-description">Besoin d&apos;un ordinateur pour un TP ou d&apos;un projecteur pour un exposé ? CampusShare imagine une nouvelle façon de louer et partager du matériel informatique entre étudiants à Goma.</p>
            <div className="hero-actions"><a className="btn btn-primary" href="#equipements">Explorer le concept <span>↗</span></a><a className="btn btn-outline" href="#fonctionnement">Comment ça marche ?</a></div>
            <p className="hero-disclaimer">Projet étudiant en démonstration — les annonces et réservations ne sont pas encore réelles.</p>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="halo halo-one"/><div className="halo halo-two"/><div className="grid-decoration"/>
            <div className="laptop"><div className="laptop-display"><div className="window-dots">● ● ●</div><div className="window-header"><span className="mini-logo">C✦</span><span>CampusShare</span></div><div className="window-hero"><div className="window-small-title"/><div className="window-line"/><div className="window-line short"/></div><div className="window-cards"><span>💻</span><span>📽️</span><span>🖥️</span></div></div><div className="laptop-base"/></div>
            <div className="float-chip chip-one">📍 Goma · RDC</div><div className="float-chip chip-two">✦ Partager, c&apos;est avancer</div>
          </div>
        </div>
        <div className="hero-strip"><span>PARTAGER</span><span>✦</span><span>ÉTUDIER</span><span>✦</span><span>INNOVER</span></div>
      </section>
      <section className="section categories-section" id="categories"><div className="container"><div className="section-heading"><div><p className="section-kicker">01 / LES POSSIBILITÉS</p><h2>Le matériel utile pour <span>vos projets.</span></h2></div><p>Une plateforme pensée autour des équipements dont les étudiants peuvent avoir besoin temporairement.</p></div><div className="category-grid">{categories.map((category) => <button className="category-card" type="button" key={category.name} onClick={() => { setSelected(category.name); navigateTo("equipements"); }}><span className="category-icon">{category.icon}</span><strong>{category.name}</strong><span>{category.description}</span><span className="category-arrow">↗</span></button>)}</div></div></section>
      <section className="section items-section" id="equipements"><div className="container"><div className="section-heading"><div><p className="section-kicker">02 / APERÇU DES ÉQUIPEMENTS</p><h2>Explorer les <span>annonces types.</span></h2></div><p>Découvrez comment des équipements pourront être présentés sur CampusShare.</p></div><div className="search-toolbar"><label className="search-box"><span aria-hidden="true">⌕</span><span className="sr-only">Rechercher un équipement</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Rechercher un équipement ou un quartier..." /></label><label className="category-select"><span className="sr-only">Filtrer par catégorie</span><select value={selected} onChange={(e)=>setSelected(e.target.value)}><option>Tous</option>{categories.map(c=><option key={c.name}>{c.name}</option>)}</select></label></div><div className="demo-notice">ⓘ Ces fiches sont des exemples fictifs pour le TP. Aucun matériel n&apos;est actuellement proposé à la location.</div><div className="item-grid">{visibleItems.map(item=><article className="item-card" key={item.id}><div className={`item-visual ${item.color}`}><span className="item-emoji" aria-hidden="true">{item.icon}</span><span className="item-tag">EXEMPLE</span></div><div className="item-body"><span className="item-location">⌖ {item.location}, Goma</span><h3>{item.name}</h3><p>{item.detail}</p><span className="item-link">Service en préparation <span>↗</span></span></div></article>)}{visibleItems.length===0 && <p className="no-results">Aucun exemple ne correspond à votre recherche. Essayez une autre catégorie.</p>}</div></div></section>
      <section className="section steps-section" id="fonctionnement"><div className="container"><div className="section-heading"><div><p className="section-kicker">03 / COMMENT ÇA MARCHERA</p><h2>Simple, du début <span>à la restitution.</span></h2></div><p>Une expérience de location envisagée pour faciliter les échanges et responsabiliser chacun.</p></div><div className="step-grid">{steps.map(step=><article className="step-card" key={step.number}><span className="step-number">{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></div></section>
      <section className="section about-section" id="apropos"><div className="container about-grid"><div><p className="section-kicker">04 / À PROPOS DU PROJET</p><h2>Une innovation locale <span>au service des études.</span></h2><p className="about-copy">À Goma, l&apos;achat de matériel informatique peut représenter un coût important pour un étudiant. Pendant ce temps, certains équipements restent inutilisés une partie du temps. CampusShare propose de rapprocher ces deux réalités grâce à une plateforme numérique accessible.</p><a className="text-link" href="#contact">Découvrir notre démarche ↗</a></div><div className="values"><div><span>✧</span><div><h3>Accessibilité</h3><p>Encourager l&apos;accès temporaire au matériel sans achat systématique.</p></div></div><div><span>⌘</span><div><h3>Économie de partage</h3><p>Donner une utilité supplémentaire aux équipements disponibles.</p></div></div><div><span>◇</span><div><h3>Confiance</h3><p>Prévoir un suivi des réservations, des restitutions et des signalements.</p></div></div></div></div></section>
      <section className="contact-section" id="contact"><div className="container contact-card"><div><p className="section-kicker">05 / CONTACT</p><h2>Construisons une autre façon de partager.</h2><p>CampusShare est un projet académique en cours de conception à Goma. Une future version pourra accueillir les offres et les demandes de réservation.</p></div><a className="btn btn-light" href="mailto:?subject=CampusShare%20-%20Prise%20de%20contact">Écrire un message ↗</a></div></section>
    </main>
    <footer className="footer"><div className="container footer-inner"><a className="brand" href="#accueil"><span className="brand-symbol">C<span>✦</span></span><span>Campus<span className="brand-highlight">Share</span></span></a><p>© {new Date().getFullYear()} CampusShare · Projet pédagogique · Goma, RDC</p><a href="#accueil">Retour en haut ↑</a></div></footer>
  </>;
}
