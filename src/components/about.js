import React,{useEffect} from "react";
// import Layout from '../components/Layout';
// import {TimelineLite,Power3,Back} from "gsap";
import "../style/about.less";
import {graphql,useStaticQuery} from "gatsby";
// import Splitting from "splitting";
import "splitting/dist/splitting.css";
// import SEO from "../components/seo";
import "splitting/dist/splitting-cells.css";


const About = () => {

    useEffect(()=> {
        var gsap = require('gsap');
        var TimelineLite = gsap.TimelineLite;
        var TweenLite = gsap.TweenLite;
        var Power3 = gsap.Power3;
        var Back = gsap.Back;
        var ScrollMagic = require('scrollmagic');
        var smp = require('scrollmagic-plugin-gsap');
        var Splitting = require('splitting');
        var ScrollMagicPluginGsap = smp.ScrollMagicPluginGsap;
        ScrollMagicPluginGsap(ScrollMagic,TweenLite,TimelineLite);
        var controller = new ScrollMagic.Controller();


       
     
        var splitaboutp = Splitting({ target:"#pabout",by:"chars"});
        var chars = splitaboutp[0].chars;
    //    console.log(splitaboutp);
    //    gsap.set(pabout,{perspective:400});
        var t2 = new TimelineLite();
        t2.to(".imgcontainer",0,{visibility:'visible'})
        .from(".abouth",.5,{opacity:0,y:100,ease:Power3.easeOut})
        .staggerFrom(chars, 0.2, {scale:4, autoAlpha:0,  rotationX:-180,  transformOrigin:"100% 50%", ease:Back.easeOut},0.010);

        new ScrollMagic.Scene({
            triggerElement: "#aboutme"
          })
            .setTween(t2)
            .reverse(false)
            .triggerHook(0.8)
                  .addTo(controller);
               
    });
    

    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                aboutme
            }
        }
    }
    `)
    

    


    

    
    

    
    return(
        <div id="aboutme">
            {/* <SEO lang="en" title="About" /> */}
           <div className="container imgcontainer">
               
               <h2   className="abouth grd-title">About Me</h2>
               

               <div className="info details" id="pabout"  >
               {data.site.siteMetadata.aboutme}
               </div>
            
           </div>
           </div> 
        

    );
}

export default About;