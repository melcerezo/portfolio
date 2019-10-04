import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';
import SectionTitle from './section-title';
import WorkHeader from './header';
import AboutDescription from './about-description';


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
    'linkHref':"Melchor_Cerezo_CV_100319.pdf",
    'icon':"fa-file-text",
  }
]

const myWork = [
  {
    'title': "Richer Picture Website",
    'href': "https://www.richerpicture.com/",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "Richer Picture",
      'src': "images/richer_picture.png",
      'comment': ""
    }
  },
  {
    'title': "Richer Picture Webinar Archive",
    'href': "https://www.richerpicture.com/webinar-login.php",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "Richer Picture webinar_archive",
      'src': "images/webinar_archive.png",
      'comment': ""
    }
  },
  {
    'title': "Python Tweetbot",
    'href': "https://github.com/melcerezo/Tweetbot",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "Python Tweetbot",
      'src': "images/TweetBot.png",
      'comment': ""
    }
  },
  {
    'title': "DietSelect",
    'href': "https://github.com/melcerezo/dietselect",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "DietSelect",
      'src': "images/DietSelect.png",
      'comment': ""
    }
  }
]

const pageStructure = (
  <div>
    <WorkHeader myLinks={portLinks}/>
    <SectionTitle sectionTitle={ 'Portfolio' }/>
    <ExampleWork work={myWork}/>
    <SectionTitle sectionTitle={ 'About Me' }/>
    <AboutDescription />
  </div>
);

ReactDOM.render(pageStructure, document.getElementById('root'));
// ReactDOM.render(<SectionTitle sectionTitle={ 'Portfolio' }/>, document.getElementById('portfolioTitle'));
// ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
// ReactDOM.render(<SectionTitle sectionTitle={ 'About Me' }/>, document.getElementById('aboutTitle'));
// ReactDOM.render(<AboutDescription />, document.getElementById('aboutDescription'));
