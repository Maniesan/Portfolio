import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);
  
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {/* TITA TECHNOLOGY COMPANY WEBSITE */}
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>TITA TECHNOLOGY COMPANY WEBSITE | MERN STACK</h3>
                <div>
                  <h4>TECHNOLOGIES USED: React.js, Node.js, Express.js, MongoDB, CSS, Canva</h4>
                </div>
              </div>
           
            </div>
          </div>
  
          {/* COCO PEAT WEBSITE */}
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>COCO PEAT WEBSITE | MERN STACK</h3>
                <div>
                  <h4>TECHNOLOGIES USED: React.js, Node.js, Express.js, MongoDB, CSS, Canva</h4>
                </div>
              </div>
              
            </div>
          </div>
  
          {/* LEARNING MANAGEMENT SYSTEM (LMS) */}
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>LEARNING MANAGEMENT SYSTEM (LMS) | MERN STACK</h3>
                <div>
                  <h4>TECHNOLOGIES USED: React.js, Node.js, Express.js, MongoDB, CSS, Cashfree Payment Gateway</h4>
                </div>
              </div>
             
            </div>
          </div>
  
          {/* DAILY TUITION WEBSITE */}
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>DAILY TUITION WEBSITE | MERN STACK</h3>
                <div>
                  <h4>TECHNOLOGIES USED: React.js, Node.js, Express.js, MongoDB, CSS, Canva</h4>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
