import SClock from './SClock'
import SGift from './SGift'

import styles from './laststep.module.css'
import { useState, useEffect } from 'react'

export const LastStep = ({ router, unlock, step }) => {
  const [iStep, setIStep] = useState(1)
  console.log(step)

  useEffect(() => {
    step === 5 &&
    setIStep(3)
  }, [step])

  useEffect(() => {
    unlock && setIStep(2)
  }, [unlock])

  return (
    <>
      {
        iStep === 1 &&
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
        iStep === 2 &&
          <section className={styles.cont}>
            <h3 className={styles.title}>Presiona el regalo y revela el precio especial que tenemos para ti</h3>
            <SGift
              className={styles.gift}
              width='100px'
              height='100px'
              fill='#fff'
              onClick={() => {
                setIStep(3)
                setTimeout(() => {
                  router.push('5')
                }, 5000)
              }}
            />
          </section>
      }
      {
        iStep === 3 &&
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
