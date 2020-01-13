import React, {Component} from 'react'
import ReadMoreReact from 'read-more-react';

import Tutor from './tutor'
import tutors_data from './tutors_data'


class Tutors extends Component {


  componentDidMount() {
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
      });
  }

  render() {
    const img_urls = ["assets/images/tutoring_photo.jpg"]

    return (
      <div className="tutors-page">

        <div className='some-page-wrapper'>
            {tutors_data.map((tutor_row) => {
              return (

                <div key={tutor_row[0].name} className='row'>
                  <div className='column'>
                    {(tutor_row.length) > 0 ? <Tutor key={tutor_row[0].name} data={tutor_row[0]} /> : ""}
                  </div>
                  <div className='column'>
                    {(tutor_row.length) > 1 ? <Tutor key={tutor_row[0].name} data={tutor_row[1]} /> : ""}
                  </div>
                  <div className='column'>
                    {(tutor_row.length) > 2 ? <Tutor key={tutor_row[0].name} data={tutor_row[2]} /> : ""}
                  </div>
                </div>

              )

            })}


        </div>
      </div>
    )
  }
}

export default Tutors;
