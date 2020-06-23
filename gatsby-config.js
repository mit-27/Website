const siteMetadata = {
  title: `Mit Suthar`,
  siteUrl: `http://localhost`,
  capitalizeTitleOnHome: true,
  logo: ``,
  icon: `/images/icon.jpg`,
  titleImage: ``,
  introTag: `ANDROID APP DEVELOPER | WEB DEVELOPER`,
  description: `Hey, I am Mit Suthar and this is my official Portfolio site`,
  keywords: `Mit Suthar,Portfolio, Web developer, Android App Developer, gatsby`,
  aboutme : `Hello !! My name is Mit Suthar. Currently, I am pursuing my B.Tech in Computer Engineering from Computer Engineering Department of Chandubhai S Patel Institute of Technology, CHARUSAT, Anand with overall Distinction.
   I am a Android App Developer and Web developer. I love to build new stuff. I had worked with C, Python, PHP, C++, Java, C#.Net, JavaScript, jQuery, ReactJS, GatsbyJS and Unity. I've built web and 
  mobile apps. My goal is to To secure a position where I can efficiently contribute my skills and abilities to the growth of the
  organization and build my professional career.
  `,
  author: `@Meetu_27`,
  portfolioItemsPerPage: 10,
  darkmode: true,
  switchTheme: true,
  navLinks: [
      {
          name: "Home",
          url: "home"
      },
      {
          name: "About",
          url: "about"
      },
      {
          name: "Projects",
          url: "project"
      }
      
  ],
  footerLinks: [
      // {
      //     name: "PRIVACY POLICY",
      //     url: "/privacy-policy"
      // },
      {
          name: "GitHub",
          url: "https://github.com/meetu-27"
      }
  ],
  social: [
    {
        name: "Linkdln",
        icon: "/images/Linkdln.svg",
        url: "https://www.linkedin.com/in/mit-suthar-7b5328161/"
    },
      {
          name: "Facebook",
          icon: "/images/Facebook.svg",
          url: "https://www.facebook.com/meet.suthar.37"
      },
      {
          name: "Twitter",
          icon: "/images/Twitter.svg",
          url: "https://twitter.com/Meetu_27"
      },
      {
          name: "Instagram",
          icon: "/images/Instagram.svg",
          url: "https://www.instagram.com/meetu_27/"
      },
      {
          name: "Gmail",
          icon: "/images/gmail.svg",
          url: "mailto:meetsuthar64@gmail.com"
      }
  ],
};
  

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    // {
    //     resolve: `gatsby-plugin-google-analytics`,
    //       options: {
    //          trackingId: "UA-146457377-1",
    //   },
    // },
    {
        resolve: `gatsby-plugin-nprogress`,
        options: {
          // Setting a color is optional.
          color: `yellow`,
          showSpinner: true,
          trickleSpeed: 20,
          easing: 'ease',
          speed: 100
        },
      },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
            resolve: `gatsby-plugin-less`,
            options: {
                strictMath: true
            }
        },
        
  ]
};
