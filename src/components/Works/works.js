import WorkCard from "../WorkCard/work-card";
import Row from "react-bootstrap/Row";

import "./works.css";

function Works() {
  const projects = [
    {
      title: "Insta UI Clone",
      git: "",
      demo: "https://neslynchellaiah.github.io/instaPostUi/",
      id: "insta_ui_clone",
      img: "",
    },
  ];
  return (
    <section
      className="vh-100 bg-secondary p-5 row justify-content-around align-items-center"
      id="works"
    >
      <div className="my-works-height overflow-auto scroll-hide">
        <Row xs={1} sm={2} md={3} lg={4}>
          {projects.map((project, index) => (
            <WorkCard project={project} />
          ))}
        </Row>
      </div>
    </section>
  );
}

export default Works;
