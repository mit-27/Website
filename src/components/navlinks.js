import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
// import {Link} from "react-scroll";
// import { Location } from "@reach/router";
import { Sun, Moon } from "./icons";
// import Scrollspy from "react-scrollspy"
// import ScrollspyNav from "react-scrollspy-nav";
// import Scrollspy from 'react-scrollspy'
// import Scroll from "./Scroll";


// function ListItem(props) {
//     const data = props.data;
//     let anchorAttrs = {
//         href: data.url,
//         title: data.name
//     };
//     return (
//         <Location>
//              {({ location }) => {
//                 return (
//                     <li>
//                         <Scroll type="id" element={data.url}>
//     <a href="#"><span>{data.name}</span></a>
//                 </Scroll>
//                         {/* <a href={data.url}><span>{data.name}</span></a> */}
//                         {/* <Link
//                             to={data.url}
//                             smooth={true}
//                             activeClass="active"
//                             className="active"
//                             // {...anchorAttrs}
//                             // className={
//                             //     location.pathname.split("/")[1] ===
//                             //     data.url
//                             //         ? "active"
//                             //         : ""
//                             // }
//                         >
//                             <span>{data.name}</span>
//                         </Link> */}
//                     </li>
//                 );
//             }}
//          </Location>
//     );
// }

class ThemeSwitchButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            darkMode: this.props.darkmode
        };
    }

    componentDidMount() {
        const _this = this;
        let darkMode = localStorage.getItem("darkMode");

    
        
            document.body.className = _this.state.darkMode ? "dark-mode" : "";
            if (darkMode) {
                this.setState(
                    {
                        darkMode: darkMode === "true"
                    },
                    () => {
                        document.body.className = _this.state.darkMode
                            ? "dark-mode"
                            : "";
                    }
                );
            }
    
            this.switchBtn.addEventListener("click", function() {
                _this.setState({
                    darkMode: !_this.state.darkMode
                });
                localStorage.setItem("darkMode", _this.state.darkMode);
    
                document.body.className = _this.state.darkMode ? "dark-mode" : "";
            });
        

        
    }
    render() {
        return (
            <React.Fragment>
                <li className="switch-theme">
                    <div
                        className="switch-button"
                        ref={c => (this.switchBtn = c)}
                    >
                        
                            <div
                            title="Switch to Light Mode"
                            data-switch-to="light"
                            className={this.state.darkMode ? "active" : ""}
                        >
                            <Moon />
                        </div>
                        
                    
                    
                        <div
                            title="Switch to Dark Mode"
                            data-switch-to="dark"
                            className={this.state.darkMode ? "" : "active"}
                        >
                            <Sun />
                        </div>
                    
                    
                        
                        
                    </div>
                </li>
            </React.Fragment>
        );
    }
}

// const themeswitcher = () => {
//     // const data = useStaticQuery(graphql`
//     //     query NavbarLinkQuery {
//     //         site {
//     //             siteMetadata {
//     //                 navLinks {
//     //                     name
//     //                     url
//     //                 }
//     //                 darkmode
//     //                 switchTheme
//     //             }
//     //         }
//     //     }
//     // `);
//     // const items = data.site.siteMetadata.navLinks;
//     // let list = [];

//     // items.forEach(function(e, i) {
        
//     //     list.push(<ListItem key={e.url + "-" + i} data={e} />);
//     // });

//     // if (data.site.siteMetadata.switchTheme) {
//     //     list.push(
            
//     //     );
//     // }

//     return(
        
//         <ThemeSwitchButton
//                 key="themeswitcher"
//                 darkmode={true}
//             />
//         // <Scrollspy
//         //             items={['home', 'about', 'project']}
                    
//         //             currentClassName="active"
                    
                    
                    
//         //         >
//         //         <ul className="navbar-links">{list}</ul>
//         //     </Scrollspy>
//     ) ;
// }

export default ThemeSwitchButton