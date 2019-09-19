import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

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
]
ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
