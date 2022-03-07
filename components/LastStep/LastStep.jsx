import SClock from './SClock'
import SGift from './SGift'

import styles from './laststep.module.css'
import { useState, useEffect } from 'react'

export const LastStep = ({ unlock, setLanding }) => {
  const [step, setStep] = useState(1)

  useEffect(() => {
    unlock && setStep(2)
  }, [unlock])

  return (
    <>
      {
        step === 1 &&
          <section className={styles.cont}>
            <h3 className={styles.title}>Estamos preparando algo especial para ti</h3>
            <SClock
              className={styles.clock}
              width='80px'
              height='80px'
              stroke='#fff'
            />
            <p className={styles.text}>Continua reproduciendo el video, porque dentro de poco te revelaremos algo muy especial</p>
          </section>
      }
      {
        step === 2 &&
          <section className={styles.cont}>
            <h3 className={styles.title}>Presiona el regalo y revela el precio especial que tenemos para ti</h3>
            <SGift
              className={styles.gift}
              width='100px'
              height='100px'
              fill='#fff'
              onClick={() => {
                setStep(3)
                setTimeout(() => {
                  setLanding(true)
                }, 5000)
              }}
            />
          </section>
      }
      {
        step === 3 &&
          <section
            className={styles.cont_f}
          >
            <p>Sabemos que realmente necesitas duplicar
              tus ganancias por Whatsapp...
            </p>
            <p className={styles.t2}>Por ello el precio especial que tenemos para ti
              tiene un <strong>DESCUENTO DEL 50%!</strong>
            </p>
            <div
              className={styles.price}
              onClick={() => {
                window.open('https://go.hotmart.com/A63830245W?ap=2d49&src=boton1', '_blank')
              }}
            >
              <span>Precio sin descuento: <s>$197 USD</s></span>
              <p>Ahora<strong>$99 USD</strong> </p>
            </div>
          </section>
      }
    </>
  )
}
