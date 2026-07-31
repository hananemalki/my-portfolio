import Reveal from './Reveal.jsx'

export default function Outro() {
  return (
    <section className="outro">
      <div className="wrap">
        <Reveal>
          <div className="outro-tag">{'{ '}rôle actuel{' }'}</div>
          <h2 className="outro-title">
            Ingénieure<br />Logiciel<span className="outro-dot">.</span>
          </h2>
          <p className="outro-sub">
            IA générative, qualité logicielle, et tout ce qu'il faut entre les deux pour que ça tienne en production.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
