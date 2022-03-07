import Script from 'next/script'
import Head from 'next/head'
import styles from './landing.module.scss'
import Image from 'next/image'

export const Landing = () => {
  return (
    <>
      <Head>
        <link rel='stylesheet' type='text/css' href='/flipdown.css' />
      </Head>
      <Script src='/flipdown.js' strategy='afterInteractive' />
      <section className={styles.message}>
        <p id='test'>Pero como lo bueno no dura para siempre y sabemos <strong>el valor que aporta este entrenamiento</strong>, necesitamos ponerle un tiempo limite</p>
      </section>
      <section className={styles.sale} id='landing'>
        <div className={styles.sale_cont}>
          <div id='flipdown' className={`flipdown ${styles.flipdown}`} />
          <h2>¿ESTÁS LISTO PARA <strong>DUPLICAR LAS VENTAS DE TU NEGOCIO</strong> CON WHATSAPP?</h2>
          <Image src='/box.png' width={1000} height={343} layout='responsive' className={styles.img} />
          <span className={styles.price}>UNICO PAGO DE <strong>$99 USD</strong></span>
          <span className={styles.price2}>o en 12 cuotas de <strong>$8.25 USD</strong></span>
          <button
            className={styles.button}
            onClick={() => {
              window.open('https://go.hotmart.com/A63830245W?ap=2d49&src=boton1', '_blank')
            }}
          >
            !ESTOY LISTO, PARA DUPLICAR MIS VENTAS!
          </button>
          <picture className={styles.payments}>
            <Image
              src='/payments.png'
              width={569}
              height={77}
              onClick={() => {
                window.open('https://go.hotmart.com/A63830245W?ap=2d49&src=boton1', '_blank')
              }}
            />
          </picture>
        </div>
      </section>
    </>
  )
}
