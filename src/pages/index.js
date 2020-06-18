import React from 'react';
import Layout from '../components/Layout';
import SEO from "../components/seo";
import {graphql} from "gatsby";
import SocialLinks from "../components/sociallinks";
import '../style/wall.less';
import About from "../components/about"
// import {TimelineLite,Power3,Back} from "gsap";
// import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Portfolio from '../components/portfolio';
import $ from "jquery"
import { Waypoint } from 'react-waypoint'
// import ParticlesBg from 'particles-bg'
import Scroll from "../components/Scroll";



// import {Link,Element} from "react-scroll"


class index extends React.Component{
    constructor(props) {
        super(props);
        
    }

    componentDidMount()
    {
        


        var ParticlesBg = require('particles-bg')
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









        // var splittitle = Splitting({target:".mt-lp",by:"chars"});
        var splittagline = Splitting({ target:".tag-line",by:"chars"});
        // var splitcaption = Splitting({target:".caption",by:"chars"});

        var taglines = splittagline[0].chars;
        // var titles = splittitle[0].chars;
        // var captions = splitcaption[0].chars;

        var tl = new TimelineLite();
        var t3 = new TimelineLite();


        tl.to(".wall",0.5,{visibility:'visible'})
        .from(".mypic",1,{y:-500,opacity:0,ease:Power3.easeOut})
        // .staggerFrom(titles,0.3,{y:-20,opacity:0,ease:Back.easeOut},0.02)
        .from(".mt-lp",0.5,{opacity:0,y:-100,ease:Back.easeOut})
        .staggerFrom(taglines,0.3, {scale:4, opacity:0,transformOrigin:"100% 50%", ease:Back.easeOut},0.0150)
        // .from(captions,{duration: 0.5, opacity:0, force3D:true,scale:0.5,  ease:Back.easeOut, stagger: 0.01}, "+=0")
        // .staggerFrom(captions,0.3, {scale:3, autoAlpha:0,  rotationX:-180,  transformOrigin:"50% 50%", ease:Back.easeOut},0.05)

        // .from(".knowmebtn",0.5,{opacity:0,y:-100,ease:Power3.easeOut})
        .from(".resumebtn",0.5,{opacity:0,y:-100,ease:Power3.easeOut},"=-0.5");


        var splitaboutp = Splitting({ target:"#pabout",by:"chars"});
        var chars = splitaboutp[0].chars;
    //    console.log(splitaboutp);
    //    gsap.set(pabout,{perspective:400});
        var t2 = new TimelineLite();
        t2.to(".imgcontainer",0,{visibility:'visible'})
        .from(".abouth",1,{opacity:0,y:100,ease:Power3.easeOut})
        .staggerFrom(chars, 0.3, {scale:4, autoAlpha:0,  rotationX:-180,  transformOrigin:"100% 50%", ease:Back.easeOut},0.010);



        new ScrollMagic.Scene({
            triggerElement: ".abouth"
          })
            .setTween(t2)
            .reverse(false)
            .triggerHook(0.8)
                  .addTo(controller);

        

                  if($(window).width()<768)
                  {
                      t3.from(".prjtitle",0.8,{opacity:0,y:100,ease:Power3.easeOut})
                      .from("#proj1",.8,{opacity:0,ease:Power3.easeOut})
                      .from("#proj2",.8,{opacity:0,ease:Power3.easeOut})
                      .from("#proj3",.8,{opacity:0,ease:Power3.easeOut})
                      .from("#proj4",.8,{opacity:0,ease:Power3.easeOut});
                  }
                  else
                  {
                      t3.from(".prjtitle",0.8,{opacity:0,y:100,ease:Power3.easeOut})
                      .from("#proj1",.8,{opacity:0,x:150,ease:Power3.easeOut})
                      .from("#proj2",.8,{opacity:0,x:-150,ease:Power3.easeOut})
                      .from("#proj3",.8,{opacity:0,x:150,ease:Power3.easeOut})
                      .from("#proj4",.8,{opacity:0,x:-150,ease:Power3.easeOut});
                  }
                  new ScrollMagic.Scene({
                      triggerElement: "#proj1"
                    })
                      .setTween(t3)
                      .reverse(false)
                      .triggerHook(0.8)
                            .addTo(controller);

    }

   
    render()
    {
        let config = {
            num: [4, 7],
            rps: 0.1,
            radius: [5, 40],
            life: [1.5, 3],
            v: [1, 3],
            tha: [-40, 40],
            alpha: [0.6,0 ],
            scale: [.1, 0.4],
            position: "all",
            color: ["#535C68"],
            cross: "dead",
            // emitter: "follow",
            random: 15
          };
        return(
            <Layout placeholder={true}>
                <Waypoint/>
                <div id="home">
                    
                    {/* <div id="pbg">
                    <ParticlesBg type="custom" color="#171B27" config={config} bg={true} />
                    </div> */}
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
                        



                        
                        <Scroll type="id" element="project">
                        <a href="#"  style={{margin:"5px 20px"}} className="col-md-6 col-sm-12 btn resumebtn">
                            See Works
                        </a>
                        </Scroll>
                        

                        
                        
                       
                    </div>
                    <div className="social-buttons">
                        <SocialLinks />
                    </div>
                </div>
                </div>
                
                <About/>
                

                
                
                <Portfolio/>

                


                
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