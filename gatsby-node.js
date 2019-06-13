/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const languages = require("./src/languages/index")
const postsPerPage = 10

const getLangUrl = zone => {
  return languages.langsWithCode[zone]
}

const getLangWithCode = langKey => {
  const l = {
    es: "es-mx",
    en: "en-us",
  }
  return l[langKey] ? l[langKey] : langKey
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage, createRedirect } = actions

  deletePage(page)

  const newContext = {
    ...page.context,
    langWithCode: getLangWithCode[page.context.langKey],
  }

  createPage({
    ...page,
    context: newContext,
  })

  createRedirect({
    fromPath: `/`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/en`,
  })
}

/*
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const createPageSingle = (edge, section, template) => {
    createPage({
      path: `/${getLangUrl(edge.node.lang)}/${section}/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid,
        langWithCode: edge.node.lang,
      },
    })
  }

  const createPagePagination = (edges, section, lang, template) => {
    const pages = Math.ceil(edges.length / postsPerPage)
    Array.from({ length: pages }).forEach((_, i) => {
      // if (i > 0) {
      createPage({
        path: i === 0 ? `/${lang}/${section}` : `/${lang}/${section}/${i + 1}`,
        component: template,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          totalPages: pages,
          currentPage: i + 1,
          lang: lang,
          langWithCode: getLangWithCode(lang),
        },
      })
      // }
    })
  }

  const pagesEn = await graphql(`
    {
      allPrismicEvent(filter: { lang: { eq: "en-us" } }) {
        totalCount
        edges {
          node {
            uid
            lang
          }
        }
      }
      allPrismicNoticia(filter: { lang: { eq: "en-us" } }) {
        totalCount
        edges {
          node {
            uid
            lang
          }
        }
      }
    }
  `)
  const pagesEs = await graphql(`
    {
      allPrismicEvent(filter: { lang: { eq: "es-mx" } }) {
        totalCount
        edges {
          node {
            uid
            lang
          }
        }
      }
      allPrismicNoticia(filter: { lang: { eq: "es-mx" } }) {
        totalCount
        edges {
          node {
            uid
            lang
          }
        }
      }
    }
  `)

  const postTemplate = path.resolve("src/components/blog/single-post.js")
  const blogTemplate = path.resolve("src/containers/blog.js")

  pagesEn.data.allPrismicNoticia.edges.forEach(edge => {
    createPageSingle(edge, "blog", postTemplate)
  })
  pagesEs.data.allPrismicNoticia.edges.forEach(edge => {
    createPageSingle(edge, "blog", postTemplate)
  })
  createPagePagination(
    pagesEs.data.allPrismicNoticia.edges,
    "blog",
    "es",
    blogTemplate
  )
  createPagePagination(
    pagesEn.data.allPrismicNoticia.edges,
    "blog",
    "en",
    blogTemplate
  )

  const eventTemplate = path.resolve("src/components/event/index.js")
  const eventPaginationTemplate = path.resolve("src/containers/calendar.js")

  pagesEn.data.allPrismicEvent.edges.forEach(edge => {
    createPageSingle(edge, "events", eventTemplate)
  })
  pagesEs.data.allPrismicEvent.edges.forEach(edge => {
    createPageSingle(edge, "events", eventTemplate)
  })
  createPagePagination(
    pagesEs.data.allPrismicEvent.edges,
    "calendar",
    "es",
    eventPaginationTemplate
  )
  createPagePagination(
    pagesEn.data.allPrismicEvent.edges,
    "calendar",
    "en",
    eventPaginationTemplate
  )
}
*/
