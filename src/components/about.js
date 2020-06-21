import React,{useEffect} from "react";
// import Layout from '../components/Layout';
// import {TimelineLite,Power3,Back} from "gsap";
import "../style/about.less";
import {graphql,useStaticQuery} from "gatsby";
// import Splitting from "splitting";
import "splitting/dist/splitting.css";
// import SEO from "../components/seo";
import "splitting/dist/splitting-cells.css";
// import {Element} from "react-scroll"




const About = () => {

    // useEffect(()=> {
        


       
     
    //     var splitaboutp = Splitting({ target:"#pabout",by:"chars"});
    //     var chars = splitaboutp[0].chars;
    // //    console.log(splitaboutp);
    // //    gsap.set(pabout,{perspective:400});
    //     var t2 = new TimelineLite();
    //     t2.to(".imgcontainer",0,{visibility:'visible'})
    //     .from(".abouth",1,{opacity:0,y:100,ease:Power3.easeOut})
    //     .staggerFrom(chars, 0.3, {scale:4, autoAlpha:0,  rotationX:-180,  transformOrigin:"100% 50%", ease:Back.easeOut},0.010);

    //     new ScrollMagic.Scene({
    //         triggerElement: ".abouth"
    //       })
    //         .setTween(t2)
    //         .reverse(false)
    //         .triggerHook(0.8)
    //               .addTo(controller);
               
    // });
    

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
        

        <div className="aboutsection" id="about" >
            


            {/* <SEO lang="en" title="About" /> */}
           <div className="container imgcontainer">
           
                
               <h2   className="abouth grd-title">About Me</h2>
               

               <div className="info details" id="pabout"  >
               {data.site.siteMetadata.aboutme}
               </div>

               
              
           </div>
           <div className="container" style={{paddingLeft:"15px"}}>
           <a href="https://drive.google.com/file/d/1Of-6Lgj_YlzDOQzuTifJXjV5LFcCPsVV/view?usp=sharing" rel="noopener noreferrer" target="_blank" style={{margin:"5px 20px"}} className="col-md-6 col-sm-12 btn resumebtn">
                            Get Resume
                        </a>
           </div>
           
        

           </div> 
          

           

        

    );
}

export default About;