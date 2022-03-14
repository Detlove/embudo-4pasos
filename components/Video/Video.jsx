import Vimeo from '@u-wave/react-vimeo'
import { useState } from 'react'
import { useAula } from '@context/AulaContext'
import { useApp } from '@context/AppContext'

import styles from './video.module.css'
export const Video = () => {
  const { setUnlock, data, step, pauseVideo, setPauseVideo } = useAula()

  const { setLoader } = useApp()

  const [ready, setReady] = useState(false)
  const [finish, setFinish] = useState(false)

  const onTimeUpdate = ({ percent }) => {
    if (ready & percent > data[step].pntToUnlock) {
      setUnlock(true)
      setReady(false)
    }
  }

  const hidePlayer = () => {
    setFinish(true)
  }

  return (
    <section className={styles.cont}>
      <h1 className={styles.title}>{data[step].thtml}
      </h1>
      <Vimeo
        video={data[step].id}
        className={`${styles.player} ${finish ? styles.hide : ''}`}
        controls={false}
        showPortrait={false}
        showTitle={false}
        showByline={false}
        autoplay
        color='FF6363'
        onPlay={() => {
          if (pauseVideo) {
            setPauseVideo(false)
            setPauseVideo(true)
          }
        }}
        onLoaded={() => {
          setReady(true)
          setFinish(false)
        }}
        onReady={() => {
          setLoader(false)
        }}
        onTimeUpdate={onTimeUpdate}
        onEnd={hidePlayer}
        paused={pauseVideo}
      />
    </section>
  )
}
