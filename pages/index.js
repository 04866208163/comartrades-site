
import Head from 'next/head'

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <Head>
        <title>Comar Trades</title>
      </Head>

      <h1>Comar Trades</h1>

      <h2>Gráfico ao Vivo</h2>
      <iframe 
        src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=br#%7B%22symbol%22%3A%22BMFBOVESPA%3AWDO1%21%22%2C%22width%22%3A%22600%22%2C%22height%22%3A%22300%22%2C%22dateRange%22%3A%22today%22%2C%22colorTheme%22%3A%22dark%22%2C%22trendLineColor%22%3A%22rgba%2841%2C%2098%2C%20255%2C%201%29%22%2C%22underLineColor%22%3A%22rgba%20120%2C%20123%2C%20134%2C%200.1%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%7D" 
        width="100%" 
        height="300" 
        frameBorder="0"
        allowTransparency="true"
        scrolling="no"
      />

      <h2>Sinais Recentes</h2>
      <ul>
        <li>14/05 - 10:15 - COMPRA - R$ 5.082 - STOP: R$ 5.074</li>
        <li>14/05 - 10:45 - VENDA - R$ 5.092 - STOP: R$ 5.098</li>
        <li>14/05 - 11:10 - COMPRA - R$ 5.086 - STOP: R$ 5.078</li>
      </ul>
    </div>
  )
}
