import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import { Button, Dropdown } from "../../theme/index.styled"

class DropdownComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { menu: false }
  }
  toggle = () => {
    this.setState({ menu: !this.state.menu })
  }
  getTitle = () => {
    const type = this.props.type || "informes"
    const titles = {
      informes: "Descarga Informe",
      dbs: "Descarga Base de Datos",
    }
    return titles[type] || titles.informes
  }
  getLinks = data => {
    const informes = data.prismicComun.data.informes.sort((a, b) => {
      if (a.year.text > b.year.text) return 1
      if (a.year.text < b.year.text) return -1
      return 0
    })
    return informes.map(informe => (
      <li>
        <a href={informe.informe.url}>{informe.year.text}</a>
      </li>
    ))
  }
  getDBLinks = data => {
    const dbs = data.prismicComun.data.databases.sort((a, b) => {
      if (a.year.text > b.year.text) return 1
      if (a.year.text < b.year.text) return -1
      return 0
    })
    return dbs.map(db => (
      <li>
        <a href={db.url.url}>{db.year.text}</a>
      </li>
    ))
  }
  render() {
    return (
      <StaticQuery
        query={graphql`
          query DorpdownQuery {
            prismicComun {
              data {
                database {
                  url
                }
                informes {
                  year {
                    text
                  }
                  informe {
                    url
                  }
                }
                databases {
                  year {
                    text
                  }
                  url {
                    url
                  }
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <Dropdown
              grayButton={this.props.type === "dbs"}
              className={this.state.menu === true ? "open" : ""}
            >
              <Button
                onClick={() => {
                  this.toggle()
                }}
                grayButton={this.props.type === "dbs"}
              >
                {this.getTitle()}
                <span>
                  <i className="icon-arrow" />
                </span>
              </Button>
              <ul>
                {this.props.type === "dbs"
                  ? this.getDBLinks(data)
                  : this.getLinks(data)}
              </ul>
            </Dropdown>
          )
        }}
      />
    )
  }
}

export default DropdownComponent
