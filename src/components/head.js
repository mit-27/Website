import React from "react";
import {Helmet} from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Head = () => {
    const query = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    darkmode
                    icon
                }
            }
        }
    `);
    return (
        <Helmet>
            <link
                rel="icon"
                href={query.site.siteMetadata.icon}
                type="image/png"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdn.jsdelivr.net/gh/akzhy/trunk/dist/trunk.min.css"
            />
            
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet"></link>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/js/all.min.js" integrity="sha256-HkXXtFRaflZ7gjmpjGQBENGnq8NIno4SDNq/3DbkMgo=" crossorigin="anonymous"></script>
           


            <link
                href="https://fonts.googleapis.com/css?family=Work+Sans:800|Poppins&display=swap"
                rel="stylesheet"
            />
        </Helmet>
    );
}

export default Head;
