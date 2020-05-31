import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "../style/contact.less";
import Navlinks from "./navlinks";
import "../style/footer.less";
import SocialLinks from "./sociallinks";

export default function() {
    const query = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <footer className="footer" style={{clear:"both"}}>
            <div className="container">
                <div id="contact">
                    <div className="row no-form">
                        <div className="col s12 details">
                            <ul>
                                <li>
                                    <SocialLinks/>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
                
                {/* <div
                    className="navlinks text-secondary"
                    style={{ marginTop: "20px" }}
                >
                    <FooterLinks />
                </div> */}
                <p className="text-primary f-d">
                    Copyright &copy; {query.site.siteMetadata.title}{" "}
                    {new Date().getFullYear()}{". All rights reserved."}
                </p>
            </div>
            
        </footer>
    );
}
