import React,{useEffect} from "react"
import Layout from '../components/Layout';
import SEO from "../components/seo";
import "../style/portfolio.less";
import {TimelineLite,TweenLite,Power3} from "gsap";
import ScrollMagic from "scrollmagic";
import $ from "jquery";
import {ScrollMagicPluginGsap} from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic,TweenLite,TimelineLite);

const Portfolio = () => {


    // let proj1 = useRef(null);
    // let proj2 = useRef(null);
    // let proj3 = useRef(null);
    // let proj4 = useRef(null);

    useEffect(() => {
        var t1 = new TimelineLite();

        if($(window).width()<768)
        {
            t1.from("#proj1",.8,{opacity:0,ease:Power3.easeOut})
            .from("#proj2",.8,{opacity:0,ease:Power3.easeOut})
            .from("#proj3",.8,{opacity:0,ease:Power3.easeOut})
            .from("#proj4",.8,{opacity:0,ease:Power3.easeOut});
        }
        else
        {
            t1.from("#proj1",.8,{opacity:0,x:150,ease:Power3.easeOut})
            .from("#proj2",.8,{opacity:0,x:-150,ease:Power3.easeOut})
            .from("#proj3",.8,{opacity:0,x:150,ease:Power3.easeOut})
            .from("#proj4",.8,{opacity:0,x:-150,ease:Power3.easeOut});
        }
        
    })


    return(
        <Layout>
            <SEO lang="en" title="Projects" />
            <div className="container-fluid portfolio">
            <div className="oddmainsection container-fluid" id="proj1" >
                        <h3>Recruitment Process Management</h3>
                        <p>
                        Recruiter Process Management project is developed to make the recruitment process advance by providing a web-portal to the recruiter. Collecting the candidate’s information to scheduling an interview of that candidate and taking the status to selection - done as easily as possible. Recruiter can manage all candidate which he/she have entered. After adding the candidate, he/she can schedule that candidate’s interview which can be updatable, after interview give the different rounds of interview as a status which provides easy to access. Overall all the phases of recruitment would achieve by this project.
                        </p>
                        <div className="spans">
                        
                            <span>Codeigniter Framework</span>
                            <span>PHP</span>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Bootstrap</span>
                            <span>Javascript</span>
                            <span>Ajax</span>
                            
                        </div>
                        <a href="https://github.com/meetu-27/Recruitment-Process-Management" rel="noopener noreferrer" target="_blank" className="gitbtn">View On Github   <i className="fab fa-github"></i></a>

                    </div>
                

                
                    <div className="evenmainsection container-fluid" id="proj2" >
                        <h3>Digi Paper</h3>
                        <p>
                            It is a android application is developed for CNC Eduserve Pvt. Lmt.
                            Digi Paper is an android app that has two modules. One is Teacher module and other is Student
                            module. In Teacher module, teacher can upload MCQ questions having different difficulty level
                            and theoretical Question bank having different weightage of marks. To take the theoretical exam,
                            Teacher can generate Question Paper in which questions are randomly selected based on marks
                            weightage and based on chosen level of difficulty of exam and save the generated Question Paper
                            as PDF. While in Student module, student can practice MCQ questions and get the result after
                            completing MCQ exam. Also, student can practice theoretical Question Paper by generating
                            randomly generated Question Paper.

                        </p>
                        <div className="spans">
                        
                            <span>Android</span>
                            <span>Java</span>
                            <span>Firebase</span>
                            
                        </div>
                        {/* <a href="#" className="gitbtn">View On Github   <i className="fab fa-github"></i></a> */}

                    </div>


                    <div className="oddmainsection container-fluid" id="proj3">
                        <h3>Candidate Management System</h3>
                        <p>
                            Candidate Management System will help company recruiters to manage their candidates. It is a basic Django
                            website which help students to get familiar with Django Framework and they can perform CRUD operations.
                            In this project, New User can register, login, logout and also he/she can modify their profiles. 
                            Each user can separetly manage their own candidates Data through Dashboard and Add candidate modules.

                        </p>
                        <div className="spans">
                        
                            <span>Django Framework</span>
                            <span>Python</span>
                            <span>Mysql</span>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Bootstrap</span>
                            
                        </div>
                        <a href="https://github.com/meetu-27/Django-Project" rel="noopener noreferrer" target="_blank" className="gitbtn">View On Github   <i className="fab fa-github"></i></a>

                    </div>
                

                    <div className="evenmainsection container-fluid" id="proj4">
                        <h3>Quiz Game</h3>
                        <p>
                        In this Game, user can play two type of quiz. First one is technical quiz and second is non-tech quiz in which it displayed randomly questions and provide four options from that user have to select one answer. According to choices it gives you output as audio. User can show scores. It provide one minute for each question.
                        </p>
                        <div className="spans">
                        
                            <span>C++</span>
                            <span>C</span>
                            
                        </div>
                        <a href="https://github.com/meetu-27/Quiz-Game" rel="noopener noreferrer" target="_blank" className="gitbtn">View On Github   <i className="fab fa-github"></i></a>

                    </div>

               
            </div>
        </Layout>

    );
}

export const PortfolioComponent = () => {

    useEffect(() => {
        var t1 = new TimelineLite();
        // var t2 = new TimelineLite();

        var controller = new ScrollMagic.Controller();
        
        if($(window).width()<768)
        {
            t1.from(".prjtitle",0.8,{opacity:0,y:100,ease:Power3.easeOut})
            .from("#proj1",.8,{opacity:0,ease:Power3.easeOut})
            .from("#proj2",.8,{opacity:0,ease:Power3.easeOut})
            .from("#proj3",.8,{opacity:0,ease:Power3.easeOut})
            .from("#proj4",.8,{opacity:0,ease:Power3.easeOut});
        }
        else
        {
            t1.from(".prjtitle",0.8,{opacity:0,y:100,ease:Power3.easeOut})
            .from("#proj1",.8,{opacity:0,x:150,ease:Power3.easeOut})
            .from("#proj2",.8,{opacity:0,x:-150,ease:Power3.easeOut})
            .from("#proj3",.8,{opacity:0,x:150,ease:Power3.easeOut})
            .from("#proj4",.8,{opacity:0,x:-150,ease:Power3.easeOut});
        }
        new ScrollMagic.Scene({
            triggerElement: "#proj1"
          })
            .setTween(t1)
            .reverse(false)
            .triggerHook(0.8)
                  .addTo(controller);

                })

    return (

        <div className="container-fluid portfolio">
            <h3 className="prjtitle grd-title">Projects</h3>
        <div className="oddmainsection container-fluid" id="proj1" >
                    <h3>Recruitment Process Management</h3>
                    <p>
                    Recruiter Process Management project is developed to make the recruitment process advance by providing a web-portal to the recruiter. Collecting the candidate’s information to scheduling an interview of that candidate and taking the status to selection - done as easily as possible. Recruiter can manage all candidate which he/she have entered. After adding the candidate, he/she can schedule that candidate’s interview which can be updatable, after interview give the different rounds of interview as a status which provides easy to access. Overall all the phases of recruitment would achieve by this project.
                    </p>
                    <div className="spans">
                    
                        <span>Codeigniter Framework</span>
                        <span>PHP</span>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Bootstrap</span>
                        <span>Javascript</span>
                        <span>Ajax</span>
                        
                    </div>
                    <a href="https://github.com/meetu-27/Recruitment-Process-Management" rel="noopener noreferrer" target="_blank" className="gitbtn">View On Github   <i className="fab fa-github"></i></a>

                </div>
            

            
                <div className="evenmainsection container-fluid" id="proj2" >
                    <h3>Digi Paper</h3>
                    <p>
                        It is a android application is developed for CNC Eduserve Pvt. Lmt.
                        Digi Paper is an android app that has two modules. One is Teacher module and other is Student
                        module. In Teacher module, teacher can upload MCQ questions having different difficulty level
                        and theoretical Question bank having different weightage of marks. To take the theoretical exam,
                        Teacher can generate Question Paper in which questions are randomly selected based on marks
                        weightage and based on chosen level of difficulty of exam and save the generated Question Paper
                        as PDF. While in Student module, student can practice MCQ questions and get the result after
                        completing MCQ exam. Also, student can practice theoretical Question Paper by generating
                        randomly generated Question Paper.

                    </p>
                    <div className="spans">
                    
                        <span>Android</span>
                        <span>Java</span>
                        <span>Firebase</span>
                        
                    </div>
                    {/* <a href="#" className="gitbtn">View On Github   <i className="fab fa-github"></i></a> */}

                </div>


                <div className="oddmainsection container-fluid" id="proj3">
                    <h3>Candidate Management System</h3>
                    <p>
                        Candidate Management System will help company recruiters to manage their candidates. It is a basic Django
                        website which help students to get familiar with Django Framework and they can perform CRUD operations.
                        In this project, New User can register, login, logout and also he/she can modify their profiles. 
                        Each user can separetly manage their own candidates Data through Dashboard and Add candidate modules.

                    </p>
                    <div className="spans">
                    
                        <span>Django Framework</span>
                        <span>Python</span>
                        <span>Mysql</span>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Bootstrap</span>
                        
                    </div>
                    <a href="https://github.com/meetu-27/Django-Project" rel="noopener noreferrer" target="_blank" className="gitbtn">View On Github   <i className="fab fa-github"></i></a>

                </div>
            

                <div className="evenmainsection container-fluid" id="proj4">
                    <h3>Quiz Game</h3>
                    <p>
                    In this Game, user can play two type of quiz. First one is technical quiz and second is non-tech quiz in which it displayed randomly questions and provide four options from that user have to select one answer. According to choices it gives you output as audio. User can show scores. It provide one minute for each question.
                    </p>
                    <div className="spans">
                    
                        <span>C++</span>
                        <span>C</span>
                        
                    </div>
                    <a href="https://github.com/meetu-27/Quiz-Game" rel="noopener noreferrer" target="_blank" className="gitbtn">View On Github   <i className="fab fa-github"></i></a>

                </div>

           
        </div>
        
    );
}

export default Portfolio;