import '../styles/globals.css'
import React,  {useEffect, useState} from 'react'

export default function App({ Component, pageProps }) {
  const [message, setMessage] = useState('テスト')
  const [error, setError] = useState('')
 
  useEffect(() => {
    import('@line/liff').then((liff) => {
      liff
        .init({
          liffId: process.env.NEXT_PUBLIC_LIFF_ID,
        })
        .then(() => {
          setMessage('LIFF 初期化成功');
        })
        .catch((err) => {
          setMessage('LIFF 初期化エラー');
          setError(err);
        });
    });
  }, []);
   console.log(message)

  return <Component {...pageProps} />
}
