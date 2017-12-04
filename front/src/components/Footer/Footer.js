import React from "react";
import "./Footer.css";
import Fontawesome from "react-fontawesome"

class Footer extends React.Component {
  render() {
    return (
      <div className="footer f-size">
        {/* <div className="container"> */}
          {/* <div className="row"> */}
            <div className="pt-3">
               <h6 style={{color: "black"}}>copyright<Fontawesome name="copyright"/> </h6>
            </div>
            {/* <div className="col-xs-3 px-4">
              <a href="https://github.com/KobinaOtc"><h6><i className="fa fa-github-alt" style={{fontSize: "20px", paddingTop: "20px", color: "white"}}></i></h6></a>
            </div> */}

            {/* <div className="col-xs-3 px-4">
              <a href="https://www.linkedin.com/in/kobina-otchere-a17125143/"><h6><i className="fa fa-linkedin" style={{fontSize: "20px", paddingTop: "20px", color: "white" }}></i></h6></a>
            </div> */}
          {/* </div> */}
        {/* </div> */}
      </div>
    )
  }
}

export default Footer;
