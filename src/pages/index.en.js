import React from "react"
import { Trans } from "@lingui/macro"
import { I18nProvider } from "@lingui/react"

import catalogEN from "../locales/en/messages"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <I18nProvider
    language="en"
    catalogs={{
      en: catalogEN,
    }}
  >
    <Layout>
      <SEO title="Home" />
      <h1>
        <Trans>Hi people</Trans>
      </h1>
      <p>I am Jafar Rezaei(SayJeyHi).</p>
      <p>Welcome to my website.</p>
    </Layout>
  </I18nProvider>
)

export default IndexPage
