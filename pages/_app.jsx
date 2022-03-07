import { useState } from 'react'
import '@styles/global.css'
import { Loader } from '@components/Loader/Loader'

function MyApp ({ Component, pageProps }) {
  const [loader, setLoader] = useState(true)
  return (
    <>
      <Loader active={loader} />
      <Component loader={loader} setLoader={setLoader} {...pageProps} />
    </>
  )
}

export default MyApp
