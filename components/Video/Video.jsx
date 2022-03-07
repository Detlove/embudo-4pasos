import Vimeo from '@u-wave/react-vimeo'
import { useState } from 'react'

import styles from './video.module.css'
export const Video = ({ id, thtml, pntToUnlock, setUnlock, setLoader }) => {
  const [ready, setReady] = useState(false)

  const onTimeUpdate = ({ percent }) => {
    if (ready & percent > pntToUnlock) {
      setUnlock(true)
      setReady(false)
    }
  }

  return (
    <section className={styles.cont}>
      <h1 className={styles.title}>{thtml}</h1>
      <Vimeo
        video={id}
        className={styles.player}
        showByline={false}
        controls
        showPortrait={false}
        showTitle={false}
        autoplay
        color='3aff66'
        onLoaded={() => {
          setReady(true)
        }}
        onReady={() => {
          setLoader(false)
        }}
        onTimeUpdate={onTimeUpdate}
      />
    </section>
  )
}
