import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../img/profile.jpg";

class Information extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.handleResume = this.handleResume.bind(this);
  }

  handleResume = () => {
    const resume = document.querySelector(".main");
    resume.classList.add("active");

    // resume.style.left = "15%";

    this.setState({ fullname: document.getElementById("full_name").value });
    this.setState({ profession: document.getElementById("profession").value });
    this.setState({ email: document.getElementById("email").value });
    this.setState({ phone: document.getElementById("phone").value });
    this.setState({ linkedIn: document.getElementById("linkedIn").value });
    this.setState({ github: document.getElementById("github").value });
    this.setState({ city: document.getElementById("city").value });
    this.setState({ state: document.getElementById("state").value });
    this.setState({ country: document.getElementById("country").value });
    this.setState({ about_me: document.getElementById("about_me").value });
    this.setState({ clg1: document.getElementById("clg1").value });
    this.setState({
      year_start1: document.getElementById("year_start1").value,
    });
    this.setState({ year_end1: document.getElementById("year_end1").value });
    this.setState({ qual1: document.getElementById("qual1").value });
    this.setState({ desc1: document.getElementById("desc1").value });
    this.setState({ clg2: document.getElementById("clg2").value });
    this.setState({
      year_start2: document.getElementById("year_start2").value,
    });
    this.setState({ year_end2: document.getElementById("year_end2").value });
    this.setState({ qual2: document.getElementById("qual2").value });
    this.setState({ desc2: document.getElementById("desc2").value });
    this.setState({ title1: document.getElementById("title1").value });
    this.setState({ Link1: document.getElementById("Link1").value });
    this.setState({ prjdtls1: document.getElementById("prjdtls1").value });
    this.setState({ title2: document.getElementById("title2").value });
    this.setState({ Link2: document.getElementById("Link2").value });
    this.setState({ prjdtls2: document.getElementById("prjdtls2").value });
    this.setState({ cmpn1: document.getElementById("cmpn1").value });
    this.setState({
      startDate1: document.getElementById("startDate1").value,
    });
    this.setState({ endDate1: document.getElementById("endDate1").value });
    this.setState({ position1: document.getElementById("position1").value });
    this.setState({
      companyDesc1: document.getElementById("companyDesc1").value,
    });
    this.setState({ cmpn2: document.getElementById("cmpn2").value });
    this.setState({
      startDate2: document.getElementById("startDate2").value,
    });
    this.setState({ endDate2: document.getElementById("endDate2").value });
    this.setState({ position2: document.getElementById("position2").value });
    this.setState({
      companyDesc2: document.getElementById("companyDesc2").value,
    });
    this.setState({ skill1: document.getElementById("skill1").value });
    this.setState({ skill2: document.getElementById("skill2").value });
    this.setState({ skill3: document.getElementById("skill3").value });
    this.setState({ skill4: document.getElementById("skill4").value });
    this.setState({ skill5: document.getElementById("skill5").value });
    this.setState({ skill6: document.getElementById("skill6").value });
    this.setState({ hobbies1: document.getElementById("hobbies1").value });
    this.setState({ hobbies2: document.getElementById("hobbies2").value });
    this.setState({ hobbies3: document.getElementById("hobbies3").value });
    this.setState({ hobbies4: document.getElementById("hobbies4").value });
    this.setState({ hobbies5: document.getElementById("hobbies5").value });
    this.setState({ hobbies6: document.getElementById("hobbies6").value });
  };

  render() {
    return (
      <div className="resume">
        <div className="resume_information">
          <div expand="md" className="container my-4 ">
            <h2 className="text-center my-4">Personal Information</h2>
            <Form className="personal1 needs-validation">
              <Row className="my-4">
                <Col>
                  <Form.Label htmlFor="validationCustom03">
                    Full Name
                  </Form.Label>
                  <Form.Control
                    id="full_name"
                    required
                    placeholder="Full Name"
                  />
                </Col>
                <Col>
                  <Form.Label>Profession</Form.Label>
                  <Form.Control id="profession" placeholder="Profession" />
                </Col>
              </Row>

              <Row className="my-4">
                <Col>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    id="email"
                    type="email"
                    placeholder="Enter email"
                  />
                </Col>
                <Col>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control id="phone" type="number" placeholder="Phone" />
                </Col>
              </Row>

              <Row className="my-4">
                <Col>
                  <Form.Label>LinkedIn</Form.Label>
                  <Form.Control
                    id="linkedIn"
                    type="website"
                    placeholder="LinkedIn"
                  />
                </Col>
                <Col>
                  <Form.Label>Github</Form.Label>
                  <Form.Control id="github" type="text" placeholder="Github" />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label>City</Form.Label>
                  <Form.Control id="city" type="website" placeholder="City" />
                </Col>
                <Col>
                  <Form.Label>State</Form.Label>
                  <Form.Control id="state" type="text" placeholder="State" />
                </Col>
                <Col>
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    id="country"
                    type="text"
                    placeholder="Country"
                  />
                </Col>
              </Row>

              <div className="form-group personal my-4">
                <label htmlFor="exampleFormControlTextarea1">About Me</label>
                <textarea
                  className="form-control"
                  id="about_me"
                  rows="3"
                ></textarea>
              </div>
              <h2 className="text-center my-4">Education Information</h2>

              <Row className="my-4">
                <Col xs={7}>
                  <Form.Label>College / University / School</Form.Label>
                  <Form.Control
                    id="clg1"
                    placeholder="College / University / School Name"
                  />
                </Col>
                <Col>
                  <Form.Label>From</Form.Label>
                  <Form.Control id="year_start1" placeholder="Start Date" />
                </Col>
                <Col>
                  <Form.Label>To</Form.Label>
                  <Form.Control id="year_end1" placeholder="End Date" />
                </Col>
              </Row>

              <Row className="my-4">
                <Col>
                  <Form.Label>Qualification</Form.Label>
                  <Form.Control id="qual1" placeholder="Qualification" />
                </Col>
                <Col>
                  <Form.Label>Description</Form.Label>
                  <Form.Control id="desc1" placeholder="Description" />
                </Col>
              </Row>

              <Row className="my-4">
                <Col xs={7}>
                  <Form.Label>College / University / School</Form.Label>
                  <Form.Control
                    id="clg2"
                    placeholder="College / University / School Name"
                  />
                </Col>
                <Col>
                  <Form.Label>From</Form.Label>
                  <Form.Control id="year_start2" placeholder="Start Date" />
                </Col>
                <Col>
                  <Form.Label>To</Form.Label>
                  <Form.Control id="year_end2" placeholder="End Date" />
                </Col>
              </Row>

              <Row className="my-4">
                <Col>
                  <Form.Label>Qualification</Form.Label>
                  <Form.Control id="qual2" placeholder="Qualification" />
                </Col>
                <Col>
                  <Form.Label>Description</Form.Label>
                  <Form.Control id="desc2" placeholder="Description" />
                </Col>
              </Row>
              <h2 className="text-center my-4">Projects Developed</h2>

              <Form.Group className="my-4">
                <Form.Label>Title Name</Form.Label>
                <Form.Control
                  id="title1"
                  type="text"
                  placeholder="Enter the title of the Project"
                />
              </Form.Group>
              <Form.Group className="my-4">
                <Form.Label>Link</Form.Label>
                <Form.Control id="Link1" type="text" placeholder="Link" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Project Details</Form.Label>
                <Form.Control
                  id="prjdtls1"
                  type="text"
                  placeholder="Project Details"
                />
              </Form.Group>

              <hr
                style={{
                  height: 3,
                }}
              />

              <Form.Group className="my-4">
                <Form.Label>Title Name</Form.Label>
                <Form.Control
                  id="title2"
                  type="text"
                  placeholder="Enter the title of the Project"
                />
              </Form.Group>
              <Form.Group className="my-4">
                <Form.Label>Link</Form.Label>
                <Form.Control id="Link2" type="text" placeholder="Link" />
              </Form.Group>
              <Form.Group className="my-4">
                <Form.Label>Project Details</Form.Label>
                <Form.Control
                  id="prjdtls2"
                  type="text"
                  placeholder="Project Details"
                />
              </Form.Group>

              <h2 className="text-center my-4">Experience</h2>

              <Row className="my-4">
                <Col xs={7}>
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control id="cmpn1" placeholder="Company Name" />
                </Col>
                <Col>
                  <Form.Label>From</Form.Label>
                  <Form.Control id="startDate1" placeholder="Start Date" />
                </Col>
                <Col>
                  <Form.Label>To</Form.Label>
                  <Form.Control id="endDate1" placeholder="End Date" />
                </Col>
              </Row>

              <Row className="my-4">
                <Col>
                  <Form.Label>Position</Form.Label>
                  <Form.Control id="position1" placeholder="Position" />
                </Col>
                <Col>
                  <Form.Label>Description</Form.Label>
                  <Form.Control id="companyDesc1" placeholder="Description" />
                </Col>
              </Row>

              <hr
                style={{
                  height: 3,
                }}
              />

              <Row className="my-4">
                <Col xs={7}>
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control id="cmpn2" placeholder="Company Name" />
                </Col>
                <Col>
                  <Form.Label>From</Form.Label>
                  <Form.Control id="startDate2" placeholder="Start Date" />
                </Col>
                <Col>
                  <Form.Label>To</Form.Label>
                  <Form.Control id="endDate2" placeholder="End Date" />
                </Col>
              </Row>

              <Row className="my-4">
                <Col>
                  <Form.Label>Position</Form.Label>
                  <Form.Control id="position2" placeholder="Position" />
                </Col>
                <Col>
                  <Form.Label>Description</Form.Label>
                  <Form.Control id="companyDesc2" placeholder="Description" />
                </Col>
              </Row>

              <h2 className="text-center my-4">Skills/Hobbies</h2>
              <Row className="my-4">
                <Col>
                  <Form.Label>Skill 1</Form.Label>
                  <Form.Control id="skill1" placeholder="Enter your Skills" />
                </Col>

                <Col>
                  <Form.Label>Skill 2</Form.Label>
                  <Form.Control id="skill2" placeholder="Enter your Skills" />
                </Col>

                <Col>
                  <Form.Label>Skill 3</Form.Label>
                  <Form.Control id="skill3" placeholder="Enter your Skills" />
                </Col>
              </Row>

              <Row className="my-4">
                <Col>
                  <Form.Label>Skill 4</Form.Label>
                  <Form.Control id="skill4" placeholder="Enter your Skills" />
                </Col>

                <Col>
                  <Form.Label>Skill 5</Form.Label>
                  <Form.Control id="skill5" placeholder="Enter your Skills" />
                </Col>

                <Col>
                  <Form.Label>Skill 6</Form.Label>
                  <Form.Control id="skill6" placeholder="Enter your Skills" />
                </Col>
              </Row>
              <Row className="my-4">
                <Col>
                  <Form.Label>Hobbies/Interest</Form.Label>
                  <Form.Control
                    id="hobbies1"
                    placeholder="Enter your Hobbies"
                  />
                </Col>
                <Col>
                  <Form.Label>Hobbies/Interest</Form.Label>
                  <Form.Control
                    id="hobbies2"
                    placeholder="Enter your Hobbies"
                  />
                </Col>
                <Col>
                  <Form.Label>Hobbies/Interest</Form.Label>
                  <Form.Control
                    id="hobbies3"
                    placeholder="Enter your Hobbies"
                  />
                </Col>
              </Row>
              <Row className="my-4 ">
                <Col>
                  <Form.Label>Hobbies/Interest</Form.Label>
                  <Form.Control
                    id="hobbies4"
                    placeholder="Enter your Hobbies"
                  />
                </Col>
                <Col>
                  <Form.Label>Hobbies/Interest</Form.Label>
                  <Form.Control
                    id="hobbies5"
                    placeholder="Enter your Hobbies"
                  />
                </Col>
                <Col>
                  <Form.Label>Hobbies/Interest</Form.Label>
                  <Form.Control
                    id="hobbies6"
                    placeholder="Enter your Hobbies"
                  />
                </Col>
              </Row>
            </Form>

            <div className="bt">
              <a href="/">
                <Button
                  className="btn" 
                  onClick={this.handleResume}
                  variant="outline-primary"
                >
                  {" "}
                  Submit
                </Button>{" "}
              </a>
            </div>
            {/* <button >Click me</button> */}
          </div>
        </div>

        <div className="main" id="Resume">
          <div className="container1">
            <div className="left_side">
              <div className="profileText">
                <div className="imgBx">
                  <img src={image} alt="" />
                </div>
                <h2>
                  {this.state.fullname}
                  <br />
                  <span>{this.state.profession}</span>
                </h2>
              </div>
              <div className="contactinfo">
                <h3 className="title">Contact Info</h3>
                <ul>
                  <li>
                    <span className="icon">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                    </span>
                    <span className="text">{this.state.phone}</span>
                  </li>
                  {/* <li>
                    <span className="icon">
                      <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    </span>
                    <span className="text">{this.state.phone}</span>
                  </li> */}
                  <li>
                    <span className="icon">
                      <i className="fa fa-globe" aria-hidden="true"></i>
                    </span>
                    <span className="text">
                      {" "}
                      <a href={this.state.github}>Github</a>
                    </span>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </span>
                    <span className="text">
                      <a href={this.state.linkedIn}>LinkedIn</a>
                    </span>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </span>
                    <span className="text">
                      {this.state.city}
                      {this.state.country}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="contactinfo education">
                <h3 className="title">Education</h3>
                <ul>
                  <li>
                    <h5>
                      {this.state.year_start1} - {this.state.year_end1}
                    </h5>
                    <h4>{this.state.qual1}</h4>
                    <h4>{this.state.desc1}</h4>
                  </li>
                  <li>
                    <h5>
                      {this.state.year_start2} - {this.state.year_end2}
                    </h5>
                    <h4>{this.state.qual2}</h4>
                    <h4>{this.state.desc2}</h4>
                  </li>
                </ul>
              </div>

              {/* <div className="contactinfo language">
                <h3 className="title">Languages</h3>
                <ul>
                  <li>
                    <span className="text">English</span>
                    <span className="percent">
                      <div style={{ width: "90%" }}></div>
                    </span>
                  </li>
                  <li>
                    <span className="text">Hindi</span>
                    <span className="percent">
                      <div style={{ width: "100%" }}></div>
                    </span>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="right_side">
              <div className="about">
                <h2 className="title2">About Me</h2>
                <p>{this.state.about_me}</p>
              </div>

              <div className="about">
                <h2 className="title2">Experience</h2>
                <div className="box">
                  <div className="year_company">
                    <h5>
                      {this.state.startDate1}-{this.state.endDate1}
                    </h5>
                    <h5>{this.state.cmpn1}</h5>
                  </div>
                  <div className="text">
                    <h4>{this.state.position1}</h4>
                    <p>{this.state.companyDesc1}</p>
                  </div>
                </div>
                <div className="box">
                  <div className="year_company">
                    <h5>
                      {this.state.startDate2}-{this.state.endDate2}
                    </h5>
                    <h5>{this.state.cmpn2}</h5>
                  </div>
                  <div className="text">
                    <h4>{this.state.position2}</h4>
                    <p>{this.state.companyDesc2}</p>
                  </div>
                </div>
              </div>

              <h2 className="title2">Professional Skills</h2>
              <div className="skills1">
                <div className="rect">
                  <div className="skill1">{this.setState.skill1}</div>
                </div>
                <div className="rect">
                  <span className="skill1">{this.setState.skill2}</span>
                </div>
                <div className="rect">
                  <span className="skill1">{this.setState.skill3}</span>
                </div>
                <div className="rect">
                  <span className="skill1">{this.setState.skill4}</span>
                </div>
                <div className="rect">
                  <span className="skill1">{this.setState.skill5}</span>
                </div>
                <div className="rect">
                  <span className="skill1">{this.setState.skill6}</span>
                </div>
              </div>
              <div className="hobbies">
                <h2 className="title2">Hobbies and Interest</h2>
                <div className="hobbies1">
                  <div className="rect">
                    <div className="skill1">{this.setState.hobbies1}</div>
                  </div>
                  <div className="rect">
                    <span className="skill1">{this.setState.hobbies2}</span>
                  </div>
                  <div className="rect">
                    <span className="skill1">{this.setState.hobbies3}</span>
                  </div>
                  <div className="rect">
                    <span className="skill1">{this.setState.hobbies4}</span>
                  </div>
                  <div className="rect">
                    <span className="skill1">{this.setState.hobbies5}</span>
                  </div>
                  <div className="rect">
                    <span className="skill1">{this.setState.hobbies6}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Information;
