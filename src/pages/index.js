import React from "react"
import Banner from "../components/banner"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </div>
    )
  }
}
export default () => (
  <Layout>
    <Application />
    <Banner />
    <h1>Hello world!</h1>
    <p>I'm a test el</p>
  </Layout>
)
