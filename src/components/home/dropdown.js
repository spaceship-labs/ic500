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
              }
            }
          }
        `}
        render={data => {
          return (
            <Dropdown className={this.state.menu === true ? "open" : ""}>
              <Button
                onClick={() => {
                  this.toggle()
                }}
              >
                Descarga informe{" "}
                <span>
                  <i className="icon-arrow" />
                </span>
              </Button>
              <ul>{this.getLinks(data)}</ul>
            </Dropdown>
          )
        }}
      />
    )
  }
}

export default DropdownComponent
