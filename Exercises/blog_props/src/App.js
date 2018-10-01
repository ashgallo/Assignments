import React from 'react';
import Header from './Header';
import BlogList from './BlogList';
import Footer from './Footer';

const data = {
    Header: {
      Title: "Clean Blog",
      Subtitle: "A Blog Theme by Start Bootstrap",
      Navbar: {
        RightSide: "Start Bootstrap",
        LeftSide: [
          "Home",
          "About",
          "Sample Post",
          "Contact"
        ]
      }
    },
    BlogList: {
      BlogPost: [
        { title: "Man must explore, and this is exploration at its greatest", 
          subtitle: "Problems look mighty small from 150 miles up",
          author: "Posted by Start Bootstrap on September 24, 2018"
        },
        { title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.", 
          author: "Posted by Start Bootstrap on September 18, 2018"
        },
        { title: "Science has not yet mastered prophecy", 
          subtitle: "We predict too much for the next year and yet far too little for the next ten.",
          author: "Posted by Start Bootstrap on August 24, 2018"
        },
        { title: "Failure is not an option", 
          subtitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
          author: "Posted by Start Bootstrap on July 8, 2018"
        }
      ],
      button: "OLDER POST &#8594;"
    },
    Footer: {
      copyright: "Copyright © Your Website 2018"
    }
}

function App() {
  return(
    <div>
      <Header />
      <BlogList />
      <Footer />
    </div>
  )
}

export default App;

