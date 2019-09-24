import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';
import SectionTitle from './section-title';
import WorkHeader from './header';


const portLinks = [
  {
    'linkTitle':"LinkedIn Profile",
    'linkHref':"https://linkedin.com/in/melchor-cerezo/",
    'icon':"fa-linkedin",
  },
  {
    'linkTitle':"GitHub Profile",
    'linkHref':"https://github.com/melcerezo",
    'icon':"fa-github",
  },
  {
    'linkTitle':"Resume",
    'linkHref':"Melchor_Cerezo_CV_092319.pdf",
    'icon':"fa-file-text",
  }
]

const myWork = [
  {
    'title': "Richer Picture Website",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "Richer Picture",
      'src': "images/richer_picture.png",
      'comment': ""
    }
  },
  {
    'title': "Richer Picture Webinar Archive",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "Richer Picture webinar_archive",
      'src': "images/webinar_archive.png",
      'comment': ""
    }
  }
]
ReactDOM.render(<WorkHeader myLinks={portLinks}/>, document.getElementById('example-header'));
ReactDOM.render(<SectionTitle sectionTitle={ 'Portfolio' }/>, document.getElementById('portfolioTitle'));
ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
ReactDOM.render(<SectionTitle sectionTitle={ 'About Me' }/>, document.getElementById('aboutTitle'));
