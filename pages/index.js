import Head from 'next/head'
import {
    Section1
  , Section2
  , Section3
  , Section4
  , Section5
  , Section6
} from '../components/section-all'

import SectionShowcase from '../components/section-showcase'

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>balancestudio.fr</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      <link rel="stylesheet" href="/static/assets/css/main.css" />
      <noscript><link rel="stylesheet" href="/static/assets/css/noscript.css" /></noscript>
    </Head>
    {children}
  </div>
)

const Body = () => (<div className="body is-preload">

  <div id="page-wrapper">
    <div id="wrapper">

      { true && <Section1 /> }
      { true && <Section2 /> }
      { true && <Section3 /> }
      { true && <Section4 /> }
      { true && <Section5 /> }
      { true && <Section6 /> }
      { true && <SectionShowcase /> }

      <div className="copyright">&copy; balancestudio.fr. Code: <a href="https://www.larafale.pw">Chokola</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</div>

    </div>
  </div>

  <script src="/static/assets/js/jquery.min.js"></script>
  <script src="/static/assets/js/browser.min.js"></script>
  <script src="/static/assets/js/breakpoints.min.js"></script>
  <script src="/static/assets/js/main.js"></script>

</div>)

export default () => (<Layout>
  <Body />
</Layout>)