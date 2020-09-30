import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faTools } from '@fortawesome/free-solid-svg-icons';


const Education = props => (
  <Row>
    <Col xs="12">
      <h3><FontAwesomeIcon className="resume-icon" icon={faGraduationCap} />Education</h3>
    </Col>
    <Col xs="12">
      <p className="lead mb-0">University of California Berkeley, 2020</p>
      <p>B.S. <em>Electrical Engineering & Computer Science (EECS)</em>, GPA: 3.84/4</p>
    </Col>
  </Row>
);

const experienceData = [
  {
    company: "SpaceX",
    position: "Software Engineer",
    dates: { from: "Aug 2020", to: "Present" },
    bullets: [
      "Building software for Starlink User Terminal",
    ],
  },
  {
    company: "Berkeley Institute for Data Science",
    position: "Data Engineer",
    dates: { from: "Aug", to: "Dec 2019" },
    bullets: [
      "Constructed full data pipeline for NLP analysis of cannabis dispensary products to identify trends and cultural elements affecting market competition",
      "Used unsupervised learning methods to extract data features (word2vec, bag-of-words, TFxIDF, LDA, PCA)",
    ],
  },
  {
    company: "Quid Inc",
    position: "Software Engineer Intern",
    dates: { from: "Jun", to: "Aug 2019" },
    bullets: [
      "Built production-level map interface for the Pro data platform using React, Redux, Node.js", 
      "Helped clients like Walmart, Novartis and BCG breakdown voice-of-customer data by geographic region",
      "Developed word2vec model in PyTorch to help with company name (entity) disambiguation",
    ],
  },
  {
    company: "Lawrence Livermore National Laboratory",
    position: "Software Engineer Intern",
    dates: { from: "May", to: "Aug 2018" },
    bullets: [
      "Developed Linux video acquisition software for the National Ignition Facility (NIF) using Java, JNI and C",
      "Set up diskless Linux (RHEL 7) boot environment for over 500+ server machines",
    ],
  },
  {
    company: "Berkeley Artificial Intelligence Research",
    position: "Reinforcement Learning Researcher",
    dates: { from: "Sep 2018", to: "Jun 2019" },
    bullets: [
      "Developed an interface for crafting desirable policies in OpenAI gym environments via human interaction using behavioral cloning and deep reinforcement learning from human preferences",
      "Rahtz M., Fang J. et. al. “Towards an IDE for agent design.” LBI NeurIPS 2018.",
    ],
  },
];
const Experience = props => (
  <Row>
    <Col xs="12">
      <h3><FontAwesomeIcon className="resume-icon" icon={faBriefcase} />Experience</h3>
    </Col>
    {experienceData.map((exp, index) => (
      <Container fluid key={index} className="mt-3">
        <Row>
          <Col xs="9"><h5>{exp.position}, <em>{exp.company}</em></h5></Col>
          <Col xs="3" className="text-right">{exp.dates.from} - {exp.dates.to}</Col>
          <Col lg="10">
            {exp.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </Col>
        </Row>
      </Container>
    ))}
  </Row>
);

const Skills = props => (
  <Row>
    <Col xs="12">
      <h3><FontAwesomeIcon className="resume-icon" icon={faTools} />Skills</h3>
    </Col>
    <Col className="mt-3">
      <p className="mb-0"><b>Programming</b>: Python, Java, C, C#, JavaScript, Go</p>
      <p className="mb-0"><b>Web</b>: Flask, React, Redux, Angular, MongoDB, Express, Node.js, Firebase, SQL</p>
      <p className="mb-0"><b>Data science</b>: Tensorflow, sklearn, Pandas, Plotly/Dash, jupyter</p>
      <p className="mb-0"><b>Tools</b>: git, bash, npm, yarn, VSCode, Linux management, Unity</p>
    </Col>
  </Row>
);

export default class Resume extends Component {
  render() {
    return (
      <Container className="my-5 pb-5 mr-xs-3">
        <Education />
        <hr className="mb-4" />
        <Experience />
        <hr className="mb-4" />
        <Skills />
      </Container>
    )
  }
}
