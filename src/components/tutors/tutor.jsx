import React, {Component} from 'react'

import logos from './logos'

class Tutor extends Component {

  render() {

    return (
           <div className='tutor-box'>
              <div className="tutor-img-wrapper">
                <div style={{backgroundImage: `url(${this.props.data.img_url})`}} className="tutor-img"></div>
              </div>


              <div className="main-tutor-box">

                <div className="tutor-name">
                  <span className="pink-bracket">{"{"}</span> {this.props.data.name} <span className="pink-bracket">{"}"}</span>
                </div>

                <div className="tutor-box-content">

                  <div className="tutor-education tutor-section">
                    <div className="section-title bold-text">Education</div>
                    <ul>
                      {this.props.data.education.map((education_data) => {
                        return (
                          <li key={`${education_data[1]}${education_data[2]}`}>
                            <span className="education-date">{education_data[0]}</span> {education_data[1]}, <span className="bold-text">{education_data[2]}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>

                  <div className="tutor-bio tutor-section">
                    <div className="section-title bold-text">Bio</div>
                      {this.props.data.bio_text}
                      {/*<ReadMoreReact min={200} ideal={300} max={400} text={hamish_text} />*/}
                  </div>

                  <div className="tutor-skills tutor-section">
                    <div className="section-title bold-text">Technical Skills</div>
                      {this.props.data.skills.map((skill_row) => {
                        let row_num = skill_row.length
                        let dummy_array = [...Array(8).keys()]
                        return (
                          <div className="row">
                            {dummy_array.map((index) => {
                              let skill = skill_row[index]
                              return (
                                <div className="column">
                                  <div className="skill-logo">
                                    {(index < row_num) ? <img className="skill-img" data-toggle="tooltip" title={skill} src={`assets/images/skill_logos/${logos[skill]}`} alt=""/> : ""}
                                  </div>
                                </div>
                              )
                            })}
                          </div>

                        )
                      })}

                  </div>

                </div>

              </div>

            </div>

    )
  }
}

export default Tutor
