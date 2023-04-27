import '../styles/globals.css'
import React,  {useEffect, useState} from 'react'

export default function App({ Component, pageProps }) {
  const [message, setMessage] = useState('テスト')
  const [error, setError] = useState('')


  useEffect(() => {
    const initLiff = async () => {
      try {
        const { default: liff } = await import('@line/liff');
        await liff.load({ liffId: process.env.NEXT_PUBLIC_LIFF_ID });
        setMessage('LIFF 初期化成功');
      } catch (err) {
        setMessage('LIFF 初期化エラー');
        setError(err);
      }
    };

    initLiff();
  }, []);


  return <Component {...pageProps} />
}
