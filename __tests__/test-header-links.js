import React from 'react';
import { shallow } from 'enzyme';
import WorkHeader from '../js/header'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const myExample = [
  {
    'linkTitle':"LinkedIn Profile",
    'linkHref':"https://linkedin.com/in/melchor-cerezo/",
    'icon':"fa-linkedin"
  },
  {
    'linkTitle':"GitHub Profile",
    'linkHref':"https://github.com/melcerezo",
    'icon':"fa-github"
  },
  {
    'linkTitle':"Resume",
    'linkHref':"Melchor_Cerezo_Resume_2.pdf",
    'icon':"fa-file-text"
  }
]

describe("Links Test", () => {
  let component = shallow(<WorkHeader myLinks={myExample}/>)
  it("Should contain as many children as there are work examples", () => {
    expect(component.find("PortLink").length).toEqual(myExample.length);
  });
});
