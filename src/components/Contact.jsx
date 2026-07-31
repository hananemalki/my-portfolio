import { profile } from '../data.js'
import Reveal from './Reveal.jsx'
import Magnetic from './Magnetic.jsx'

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <Reveal className="contact">
          <div className="contact-inner">
            <div className="eyebrow eyebrow-dark">
              Prochaine étape
            </div>
            <h2>
              Disponible pour un poste d'ingénieure logiciel / IA — discutons de votre projet.
            </h2>
            <p>
              Je suis actuellement en stage de fin d'études chez Capgemini jusqu'en août 2026, et ouverte aux échanges pour la suite. N'hésitez pas à me contacter directement.
            </p>
            <div className="cta-row">
              <Magnetic className="btn btn-primary" href={`mailto:${profile.email}`}>
                Écrire un email ↗
              </Magnetic>
              <Magnetic className="btn btn-ghost" href={`tel:${profile.phone}`}>
                {profile.phoneDisplay}
              </Magnetic>
            </div>
            <div className="social-row">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}