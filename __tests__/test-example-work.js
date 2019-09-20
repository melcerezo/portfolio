import React from "react";
import { shallow } from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from '../js/example-work';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
const myWork = [
  {
    'title': "Richer Picture Website",
    'image': {
      'desc': "Richer Picture",
      'src': "images/richer_picture.png",
      'comment': ""
    }
  },
  {
    'title': "Richer Picture Webinar Archive",
    'image': {
      'desc': "Richer Picture webinar_archive",
      'src': "images/webinar_archive.png",
      'comment': ""
    }
  }
];

describe("ExampleWork component",() => {
  let component = shallow(<ExampleWork work ={myWork}/>)
  it("Should be a section element", () => {
    expect(component.type()).toEqual('section');
  });
  it("Should contain as many children as there are work examples", () => {
    expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
  });
});


describe("ExampleWorkBubble component", () => {
  let component = shallow(<ExampleWorkBubble example={myWork[1]}/>);
  let images = component.find("img");

  it("should contain an single 'img' element", () => {
    expect(images.length).toEqual(1);
  });

  it("should have the image src set correctly", () => {
    expect(images.prop('src')).toEqual(myWork[1].image.src);
  });
});
