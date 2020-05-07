import React from 'react';
import Layout from '../components/Layout';
import SEO from "../components/seo";
import {graphql} from "gatsby";
import {PortfolioComponent} from "./portfolio";
import SocialLinks from "../components/sociallinks";
import '../style/wall.less';
import {TimelineLite,Power3,Back} from "gsap";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import {document} from "browser-monads";


class index extends React.Component{
    constructor(props) {
        super(props);
        
    }

    componentDidMount()
    {
        // var splittitle = Splitting({target:".mt-lp",by:"chars"});
        var splittagline = Splitting({ target:".tag-line",by:"chars"});
        // var splitcaption = Splitting({target:".caption",by:"chars"});

        var taglines = splittagline[0].chars;
        // var titles = splittitle[0].chars;
        // var captions = splitcaption[0].chars;

        var tl = new TimelineLite();

        tl.to(".wall",0,{visibility:'visible'})
        .from(".mypic",.5,{y:-500,opacity:0,ease:Power3.easeOut})
        // .staggerFrom(titles,0.3,{y:-20,opacity:0,ease:Back.easeOut},0.02)
        .from(".mt-lp",0.5,{opacity:0,y:-100,ease:Back.easeOut})
        .staggerFrom(taglines,0.3, {scale:4, opacity:0,transformOrigin:"100% 50%", ease:Back.easeOut},0.0150)
        // .from(captions,{duration: 0.5, opacity:0, force3D:true,scale:0.5,  ease:Back.easeOut, stagger: 0.01}, "+=0")
        // .staggerFrom(captions,0.3, {scale:3, autoAlpha:0,  rotationX:-180,  transformOrigin:"50% 50%", ease:Back.easeOut},0.05)

        .from(".knowmebtn",0.5,{opacity:0,y:-100,ease:Power3.easeOut})
        .from(".resumebtn",0.5,{opacity:0,y:-100,ease:Power3.easeOut},"=-0.5");

        ;

    }

   
    render()
    {
        return(
            <Layout placeholder={true}>
                            
                <SEO lang="en" title={this.props.data.site.siteMetadata.title} />
                    <div className="wall">
                    <div className="intro container">
               <img src="images/mitpic.jpg" className="mypic" alt="Mit pic"/>
                        <h3 className="text-primary mt-lp" style={{padding:"5px"}}>
                            Mit Suthar here, 
                        </h3>
                        <p className="tag-line text-secondary">
                            {this.props.data.site.siteMetadata.introTag}
                        </p>
                        {/* <p className="caption details">
                            {this.props.data.site.siteMetadata.description}
                        </p> */}
                        
                        
                        {/* <div className="grpbtn">
                        <a href="/portfolio" className="col-md-6 col-sm-12 btn" style={{margin:"5px 20px"}}>
                            SEE WORKS
                        </a>
                        <a href="/about" className="col-md-6 col-sm-12 btn" style={{margin:"5px 20px"}}>
                            Know Me
                        </a>
                        </div> */}
                        <div className="grpbtn">
                        <a href="/about" style={{margin:"5px 20px"}}  className="col-md-6 col-sm-12 btn knowmebtn">
                            Know Me 
                        </a>
                        <a href="https://drive.google.com/file/d/1PLq8cnF7v9qwDMGrWQoYPc-Gr9mIU5QW/view?usp=sharing" rel="noopener noreferrer" target="_blank" style={{margin:"5px 20px"}} className="col-md-6 col-sm-12 btn resumebtn">
                            Download Resume
                        </a>
                        </div>
                       
                    </div>
                    <div className="social-buttons">
                        <SocialLinks />
                    </div>
                </div>
                    <PortfolioComponent/>
            </Layout>
    
        );
    }
    
}

export default index;

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                introTag
                description
                
            }
        }
    }
`;