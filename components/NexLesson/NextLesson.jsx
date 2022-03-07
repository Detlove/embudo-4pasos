import styles from './nextlesson.module.scss'
import SLock from './SLock'

export const NextLesson = ({ nTitle, step, router, unlock, setUnlock }) => {
  return (
    <section className={styles.cont} id='button-next'>
      <h3 className={styles.title}>Siguiente clase</h3>
      <div
        className={`${styles.button} ${unlock ? styles.unlock : ''}`}
        onClick={() => {
          // eslint-disable-next-line no-unused-expressions
          unlock &&
            (router.push(`${step + 1}`)
            , setUnlock(false))
        }}
      >
        <picture>
          <img src={`/video-${step + 1}.png`} />
          <SLock className={styles.lockicon} />
        </picture>
        <div className={styles.button_text}>
          <p className={styles.button_text_nc}>CLASE {step + 1}</p>
          <p className={styles.button_text_nct}>{nTitle}</p>
        </div>
      </div>
      <p className={styles.message}>Necesitas terminar de ver el video para desbloquar la siguiente clase</p>
    </section>
  )
}
