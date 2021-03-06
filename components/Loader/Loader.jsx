import { useTransition, animated as a, config } from 'react-spring'

import styles from './loader.module.css'

export const Loader = ({ active }) => {
  const transition = useTransition(active, {
    initial: { opacity: 1 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.default
  })

  return transition((style, item) =>
    item &&
      <a.div
        className={styles.cont}
        style={style}
      >
        <div className={styles.ball1}>
          <div className={styles.ball2}><div />
            <div /><div />
          </div>
        </div>
      </a.div>
  )
}
