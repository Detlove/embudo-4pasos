import { useState } from 'react'
import '@styles/global.css'
import { Loader } from '@components/Loader/Loader'

function MyApp ({ Component, pageProps }) {
  /* Disable Loader for develop */
  const [loader, setLoader] = useState(false)
  return (
    <>
      <Loader active={loader} />
      <Component loader={loader} setLoader={setLoader} {...pageProps} />
    </>
  )
}

export default MyApp
