import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Marquee() {
  const [ticker, setTicker] = useState('Loading...')

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('/api/uk-politics')
      const { polling, gdp, interestRate } = res.data
      setTicker(
        `Polling: ${polling.map(p => `${p.party}: ${p.percent}%`).join(' | ')} | GDP: £${gdp}bn | Interest Rate: ${interestRate}%`
      )
    }
    fetchData()
    const interval = setInterval(fetchData, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="marquee">
      <span>{ticker}</span>
      <style jsx>{`
        .marquee {
          width: 100vw;
          background: #222;
          color: #fff;
          padding: 0.5em 0;
          font-size: 1em;
          white-space: nowrap;
          overflow: hidden;
        }
        .marquee span {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(100%);}
          100% { transform: translateX(-100%);}
        }
      `}</style>
    </div>
  )
}
