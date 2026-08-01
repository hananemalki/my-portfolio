import Reveal from './Reveal.jsx'

export default function Outro() {
  return (
    <section className="outro">
      <div className="wrap">
        <Reveal>
          <div className="outro-tag">{'{ '}spécialité{' }'}</div>
          <h2 className="outro-title">
            Java<br />& IA Générative<span className="outro-dot">.</span>
          </h2>
          <p className="outro-sub">
            Qualité logicielle à chaque étape — pour que ça tienne en production, pas seulement en démo.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
