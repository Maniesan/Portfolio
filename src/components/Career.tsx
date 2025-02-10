import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Developer</h4>
                <h5>TITA Technologies</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed and maintained full-stack web applications using the MERN stack (MongoDB, Express.js,
              React.js, and Node.js).
              Built dynamic, responsive user interfaces with React.js, utilizing hooks and state management for
              maintainable and scalable code.
              Designed and integrated RESTful APIs using Node.js and Express.js for seamless communication between
              front-end and back-end systems.
              Managed database operations and data models using MongoDB, ensuring efficient data storage and
              retrieval.
              Collaborated with cross-functional teams to define and prioritize application features and improvements.
              Conducted unit testing, debugging, and code reviews to ensure high-quality, bug-free deployments.

            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
