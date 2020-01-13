import React, { Component } from 'react'

import course from './course_data'



class Course extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scroll: 0
    }
  }

  componentDidMount() {
      let box = document.querySelector(".course-scroll-box");

      let offset = 250;
      let position1 = document.getElementById(`lesson-1`).offsetTop - offset;
      let position2 = document.getElementById(`lesson-2`).offsetTop - offset;
      let position3 = document.getElementById(`lesson-3`).offsetTop - offset;
      let position4 = document.getElementById(`lesson-4`).offsetTop - offset;
      let position5 = document.getElementById(`lesson-5`).offsetTop - offset;
      let position6 = document.getElementById(`lesson-6`).offsetTop - offset;
      let position7 = document.getElementById(`lesson-7`).offsetTop - offset;
      let position8 = document.getElementById(`lesson-8`).offsetTop - offset;
      let position9 = document.getElementById(`lesson-9`).offsetTop - offset;
      console.log(position1);


      box.addEventListener('scroll', () => {

          let scrollpos = box.scrollTop;
          // console.log(scrollpos);

          if (scrollpos > 0 && scrollpos < position1)
            this.setState({scroll: 0});
          else if (scrollpos > position1 && scrollpos < position2)
            this.setState({scroll: 1});
          else if (scrollpos > position2 && scrollpos < position3)
            this.setState({scroll: 2});
          else if (scrollpos > position3 && scrollpos < position4)
            this.setState({scroll: 3});
          else if (scrollpos > position4 && scrollpos < position5)
            this.setState({scroll: 4});
          else if (scrollpos > position5 && scrollpos < position6)
            this.setState({scroll: 5});
          else if (scrollpos > position6 && scrollpos < position7)
            this.setState({scroll: 6});
          else if (scrollpos > position7 && scrollpos < position8)
            this.setState({scroll: 7});
          else if (scrollpos > position8 && scrollpos < position9)
            this.setState({scroll: 8});
          else if (scrollpos > position9 )
            this.setState({scroll: 9});


      });
  }

  render() {

    return (
      <div className="course-page">

        <div className="timeline-section">
          <div className="timeline">
            {course.map((lesson, index) => {
              let pipe_classes = "timeline-pipe";
              let circle_classes = "timeline-circle";
              let text_classes = "lesson-title";
              if (index <= this.state.scroll) {
                circle_classes += " timeline-pink";
                text_classes += " timeline-text-pink";
              }
              if (index < this.state.scroll) {
                pipe_classes += " timeline-pink";

              }
              if (index == 9) {
                pipe_classes += " not-last"
              }
              return (
                <div className="lesson-wrapper" key={`${lesson.name}timeline`}>
                  <div className="lesson">
                    <div className="timeline-box">
                      <div className={circle_classes}></div>
                      <div className={pipe_classes}></div>
                    </div>
                    <div className={text_classes}>
                      {lesson.name}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="course-scroll-container">
          <div className="course-scroll-box">
            <div className="course-box" >
              {course.map((lesson, index) => {
                return (
                  <div id={`lesson-${index}`} className="lesson-content-box" key={`${lesson.name}content`}>
                    <div className="lesson-content-title">{index + 1} {lesson.name}</div>
                    <div className="lesson-content-desc">{lesson.description}</div>

                  </div>
                )
              })}
              <img className="course-img" id="course-img-1" src="assets/images/undraw_shared_workspace_hwky.svg" alt=""/>
              <img className="course-img" id="course-img-2" src="assets/images/undraw_collaborating_g8k8.svg" alt=""/>
              <img className="course-img" id="course-img-3" src="assets/images/undraw_completed_steps_yurw.svg" alt=""/>
              <img className="course-img" id="course-img-4" src="assets/images/undraw_online_everywhere_cd90.svg" alt=""/>
              <img className="course-img" id="course-img-5" src="assets/images/undraw_work_together_h63l.svg" alt=""/>
              <img className="course-img" id="course-img-6" src="assets/images/undraw_researching_22gp.svg" alt=""/>
              <img className="course-img" id="course-img-7" src="assets/images/undraw_project_feedback_2s92.svg" alt=""/>
              <img className="course-img" id="course-img-8" src="assets/images/undraw_hacker_mindset_gjwq.svg" alt=""/>
              <img className="course-img" id="course-img-9" src="assets/images/undraw_code_typing_7jnv.svg" alt=""/>
              <img className="course-img" id="course-img-10" src="assets/images/undraw_dev_focus_b9xo.svg" alt=""/>
              <img className="course-img" id="course-img-11" src="assets/images/undraw_dev_productivity_umsq.svg" alt=""/>
              <img className="course-img" id="course-img-12" src="assets/images/undraw_our_solution_htvp.svg" alt=""/>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Course;
