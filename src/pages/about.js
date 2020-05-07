import React,{useEffect,useRef} from "react";
import Layout from '../components/Layout';
import gsap,{TimelineLite,Power3,Back} from "gsap";
import "../style/about.less";
import {graphql,useStaticQuery} from "gatsby";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import SEO from "../components/seo";

import "splitting/dist/splitting-cells.css";

const About = () => {
    

    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                aboutme
            }
        }
    }
    `)
    

    let im = useRef(null);
    let dim = useRef(null);
    let about = useRef(null);
    let pabout = useRef(null);
    let button = useRef(null);


    useEffect(()=> {
       
     
        var splitaboutp = Splitting({ target:pabout,by:"chars"});
        var chars = splitaboutp[0].chars;
    //    console.log(splitaboutp);
    //    gsap.set(pabout,{perspective:400});
        var tl = new TimelineLite();
        tl.to(dim,0,{visibility:'visible'})
        .from(im,1,{y:-500,opacity:0,ease:Power3.easeOut})
        .from(about,.6,{opacity:0,y:100,ease:Power3.easeOut})
        .from(button,.6,{opacity:0,y:100,ease:Power3.easeOut},"-=0.4")
        .staggerFrom(chars, 0.3, {scale:4, autoAlpha:0,  rotationX:-180,  transformOrigin:"100% 50%", ease:Back.easeOut},0.015);
               
    })

    
    

    
    return(
        <Layout >
            <SEO lang="en" title="About" />
           <div className="container imgcontainer"  ref={e => {dim=e}}>
               
               <img src="images/mitpic.jpg" className="mypic" ref={e => {im=e} }   alt="Mit pic"/>
               <br/>
               <h2 ref={e => {about=e} }  className="grd-title abouth">About Me</h2>
               
               <a href="https://drive.google.com/file/d/1PLq8cnF7v9qwDMGrWQoYPc-Gr9mIU5QW/view?usp=sharing" target="_blank" className="btn" ref={e => {button=e} }>Download Resume</a>
               <div className="info details" ref={e => {pabout=e} } >
               {data.site.siteMetadata.aboutme}
               </div>
            
           </div>
            
        </Layout>

    );
}

export default About;