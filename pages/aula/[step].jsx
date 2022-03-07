import { useRouter } from 'next/router'
import Script from 'next/script'
import Head from 'next/head'
import { useState, useEffect } from 'react'

import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { VisitCounter } from '@components/VisitCounter/VisitCounter'
import { Video } from '@components/Video/Video'
import { NextLesson } from '@components/NexLesson/NextLesson'
import { LastStep } from '@components/LastStep/LastStep'
import { Landing } from '@components/Landing/Landing'

import styles from './aula.module.css'
import { data } from 'database/data'

const Aula = ({ setLoader }) => {
  const router = useRouter()

  const [step, setStep] = useState(0)
  const [unlock, setUnlock] = useState(false)

  useEffect(() => {
    const rStep = parseInt(router.query.step)
    if (router.isReady & rStep >= 1 && rStep <= 5) {
      setStep(rStep)
    } else if (router.isReady) {
      router.push('/aula/1')
    }
  }, [router])

  if (!step) {
    return null
  }

  return (
    <>
      <Head>
        <title>Clase {step} | {data[step].title}</title>
      </Head>
      <main className={styles.cont}>
        <VisitCounter />
        <ProgressBar {...{ step }} />
        <Video
          id={data[step].id}
          thtml={data[step].thtml}
          pntToUnlock={data[step].unlock}
          {...{ setUnlock, setLoader }}
        />
        {
          step < 4 &&
            <NextLesson
              nTitle={data[step + 1].title}
              {...{ step, router, unlock, setUnlock }}
            />
        }
        {
          step >= 4 &&
            <LastStep
              {... { step, router, unlock }}
            />
        }
      </main>
      {
        step === 5 &&
          <Landing />
      }
      <Script src='https://www.googletagmanager.com/gtag/js?id=UA-221794490-6' strategy='afterInteractive' />
      <Script
        id='gtag'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-221794490-6');`
        }}
      />
      <Script
        id='fbpixel'
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '536118997770453');
          fbq('track', 'PageView');
          ${step === 1 ? "fbq('track', 'Lead');" : "fbq('trackCustom', 'video" + step + "');"}
        `
        }}
      />
    </>
  )
}

export default Aula
