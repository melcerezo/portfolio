import React from 'react';

class SectionTitle extends React.Component {
  render(){
    let title = this.props.sectionTitle;
    return(
      <section className="background--skyBlue section">
        <h2 className="color--cloud margin--none section__text--centered">
          { title }
        </h2>
      </section>
    )
  }
}

export default SectionTitle;
