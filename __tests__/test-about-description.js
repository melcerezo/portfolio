import React from 'react';
import { shallow } from 'enzyme';
import AboutDescription from '../js/about-description'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe("About Description", () => {
  let component = shallow(<AboutDescription />);
  it("should be present", () => {
    expect(component.find(".section--description").exists());
  });
});
