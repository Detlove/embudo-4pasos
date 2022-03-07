import { useState, useEffect } from 'react'
import styles from './progressbar.module.css'

export const ProgressBar = ({ step = 4 }) => {
  const [val, setVal] = useState(0)

  useEffect(() => {
    setVal(step <= 3 ? step * 25 : 99)
  }, [step])

  return (
    <section className={styles.cont}>
      <p className={styles.text} style={{ '--pnt': val }}>% Completado</p>
      <div className={styles.bar}>
        <div className={styles.bar_fill} style={{ width: val + '%' }} />
      </div>
    </section>
  )
}
