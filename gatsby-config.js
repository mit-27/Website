const siteMetadata = {
    title: `Mit Suthar`,
    siteUrl: `http://localhost`,
    capitalizeTitleOnHome: true,
    logo: ``,
    icon: `/images/icon.jpg`,
    titleImage: ``,
    introTag: `FULL STACK DEVELOPER | ANDROID APP DEVELOPER`,
    description: `Hey, I am Mit Suthar and this is my official Portfolio site`,
    keywords: `Mit Suthar,Portfolio, Web developer, Android App Developer, gatsby`,
    aboutme: `Hello, my name is Mit Suthar and currently, I am pursuing a master’s degree in Applied Computer Science at Concordia University, Montreal.
    I have a great interest in exploring the field of mobile application development and web development. Apart from that, I love to participate in various hackathons where I could solve real-world problems and I have won two hackathons. I am curious to work in the tech world and tech fraternity as an employee in any of the good tech companies. Along with this, I have the ability to work under demanding and stressful situations. I can make decisions on my own, but I also consider and respect valuable opinions.    `,
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
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-146457377-1",
            },
        },
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
