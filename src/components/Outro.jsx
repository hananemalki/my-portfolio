import Reveal from './Reveal.jsx'
import { useLanguage } from '../contexts/LanguageContext.jsx'
import { strings } from '../strings.js'

export default function Outro() {
  const { t } = useLanguage()

  return (
    <section className="outro">
      <div className="wrap">
        <Reveal>
          <div className="outro-tag">{'{ '}{t(strings.outro.tag)}{' }'}</div>
          <h2 className="outro-title">
            {t(strings.outro.titleLine1)}<br />{t(strings.outro.titleLine2)}<span className="outro-dot">.</span>
          </h2>
          <p className="outro-sub">{t(strings.outro.sub)}</p>
        </Reveal>
      </div>
    </section>
  )
}
