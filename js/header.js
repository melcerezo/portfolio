import React from 'react';

class WorkHeader extends React.Component {
  render() {
    return(
      <main className="overflow--auto">
        <h1 className="color--skyBlue section__heading--largest">
          {/*<!--Your name goes here -->*/}
          MELCHOR CEREZO
        </h1>

        <ul className="section--social">

          { this.props.myLinks.map( (myWorkLink, idx) => {
            return (
              <PortLink workLink={myWorkLink} />
            )
          })}

        </ul>
      </main>
    )
  }
}

class PortLink extends React.Component {
  render(){
    let link = this.props.workLink;
    let linkIcon = link.icon;
    return(
      <li className="socialWrapper">
        <a className="color--skyBlue social"
           title={ link.linkTitle }
           target="_blank"
           href={ link.linkHref }>
          <i className={"fa " + linkIcon}></i>
        </a>
      </li>
    )
  }
}

export default WorkHeader;
