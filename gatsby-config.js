const siteMetadata = {
  title: `Mit Suthar`,
  siteUrl: `http://localhost`,
  capitalizeTitleOnHome: true,
  logo: ``,
  icon: `/images/icon.jpg`,
  titleImage: ``,
  introTag: `ANDROID APP DEVELOPER | WEB DEVELOPER`,
  description: `It is a Mit Suthar Portfolio Website.`,
  keywords: `Portfolio, Web developer, Android App Developer, gatsby`,
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
          url: "/"
      },
      {
          name: "About",
          url: "/about"
      },
      {
          name: "Projects",
          url: "/portfolio"
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
  // contact: {
  //     /* Leave the below value completely empty (no space either) if you don't want a contact form. */
  //     api_url: "./test.json",
  //     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Proin ac consequat arcu.`,
  //     mail: "hi@akzhy.com",
  //     phone: "000-000-0000",
  //     address: "1234 \nLocation \nLocation"
  // }
  // this is optional. you can uncomment this if you use disqus
  // disqus: `your-disqus-shortname`
};

// const plugins = [
//   `gatsby-plugin-sharp`,
//   `gatsby-transformer-sharp`,
//   `gatsby-plugin-react-helmet`,
//   {
//       resolve: `gatsby-transformer-remark`,
//       options: {
//           plugins: [
//               "gatsby-remark-copy-linked-files",
//               {
//                   resolve: `gatsby-remark-images`,
//                   options: {
//                       maxWidth: 1280
//                   }
//               }
//           ]
//       }
//   },
//   {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//           name: `contents`,
//           path: `${__dirname}/contents/`
//       }
//   },
//   {
//       resolve: `gatsby-plugin-less`,
//       options: {
//           strictMath: true
//       }
//   },
// ]

// if(siteMetadata.disqus) {
//   plugins.push({
//       resolve: `gatsby-plugin-disqus`,
//       options: {
//         shortname: siteMetadata.disqus
//       }
//   })
// }

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    {
        resolve: `gatsby-plugin-google-analytics`,
          options: {
             trackingId: "UA-146457377-1",
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-purgecss`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `Mit Suthar`,
          short_name: `Mit Suthar`,
          start_url: `/`,
          
          display: `standalone`,
        },
      },
    {
            resolve: `gatsby-plugin-less`,
            options: {
                strictMath: true
            }
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
              // Setting a color is optional.
              color: `blue`,
              // Disable the loading spinner.
              showSpinner: true,
            },
          },
  ]
};
