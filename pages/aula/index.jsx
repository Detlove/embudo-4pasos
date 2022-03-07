import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import { data } from 'database/data'

import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { VisitCounter } from '@components/VisitCounter/VisitCounter'
import { Video } from '@components/Video/Video'
import { NextLesson } from '@components/NexLesson/NextLesson'
import { LastStep } from '@components/LastStep/LastStep'

import styles from './aula.module.css'
import { Landing } from '@components/Landing/Landing'

function aula ({ setLoader }) {
  const router = useRouter()
  useEffect(() => {
    const rStep = parseInt(router.query.step)
    if (router.isReady & rStep <= 4) {
      setStep(rStep)
    } else if (rStep >= 5) {
      router.push('/aula')
    }
  }, [router])

  const [step, setStep] = useState(1)
  const [unlock, setUnlock] = useState(false)
  const [landing, setLanding] = useState(false)

  return (
    <>
      <Head>
        <title>Clase {step} | {data[step].title}</title>
        <script
          type='text/javascript' dangerouslySetInnerHTML={{
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
        <script async src='https://www.googletagmanager.com/gtag/js?id=UA-221794490-6' />
        <script
          type='text/javascript' dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-221794490-6');`
          }}
        />
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
              {...{ step, setStep, unlock, setUnlock }}
            />
        }
        {
          step === 4 &&
            <LastStep
              {... { unlock, setLanding }}
            />
        }
      </main>
      {
        landing &&
          <Landing />
      }
    </>
  )
}

export default aula
