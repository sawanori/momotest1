import '../styles/globals.css'
import React,  {useEffect, useState} from 'react'

export default function App({ Component, pageProps }) {
  const [message, setMessage] = useState('テスト')
  const [error, setError] = useState('')
 
  const [[liffObject, profile], setLiffState] = useState([null, null]);
  useEffect(() => {
    if (!pageProps.liffId) return;
    import("@line/liff").then((liff) => {
      liff
        .init({ liffId: pageProps.liffId })
        .then(() => {
          if (liff.isLoggedIn()) {
            liff
              .getProfile()
              .then((profile) => {
                setLiffState([liff, profile]);
              })
              .catch((err) => {
                console.warn({ err });
              })

          } else {
            setLiffState([liff, null]);
          }
        })
        .catch((err) => {
          console.warn({ err });
        });
    });
  }, []);



    console.log(message)

  return <Component {...pageProps} />
}
