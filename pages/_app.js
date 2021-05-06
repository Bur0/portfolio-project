import App from 'next/app';
import Navbar from '@/components/shared/Navbar'
import Hero from '@//components/shared/Hero'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/index.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div className="portfolio-app">
      <Navbar />
      {Component.name === 'Home' && <Hero />}
      <div className="container">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

MyApp.getInitialProps = async context => {
  console.log('GET INITIAL PROPS _APP')
  const initialProps = App.getInitialProps && (await App.getInitialProps(context))

  return { pageProps: { appData: 'Hello _App Component', ...initialProps.pageProps } }
}

export default MyApp
