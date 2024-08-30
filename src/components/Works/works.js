import WorkCard from "../WorkCard/work-card";
import Row from "react-bootstrap/Row";

import "./works.css";

function Works() {
  const projects = [
    {
      title: "Carbon Copy",
      git: "https://github.com/NeslynChellaiah/carbon-copy",
      demo: "https://neslynchellaiah.github.io/carbon-copy/",
      id: "carbon_copy",
      img: "carbon_copy",
    },
    {
      title: "Insta UI Clone",
      git: "https://github.com/NeslynChellaiah/instaPostUi",
      demo: "https://neslynchellaiah.github.io/instaPostUi/",
      id: "insta_ui_clone",
      img: "insta_ui_clone",
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
