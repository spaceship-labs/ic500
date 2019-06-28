import React from "react"
import Layout from "../layouts/index"
import ContactContainer from "../containers/contacto"

const ContactPage = ({ data }) => {
  return (
    <Layout section="contact">
      <ContactContainer data={data.prismicContacto.data} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ContactPageQuery {
    prismicContacto {
      uid
      data {
        title {
          text
        }
        email {
          text
        }
        contact_data {
          contact_title {
            text
          }
          contact_content {
            html
          }
        }
      }
    }
  }
`

export default ContactPage
