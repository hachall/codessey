import React, {Component} from 'react'
import ReadMoreReact from 'read-more-react';

import Tutor from './tutor'
import Footer from '../footer'
import tutors_data from './tutors_data'

Object.defineProperty(Array.prototype, 'chunk', {
  value: function(chunkSize) {
    var R = [];
    for (var i = 0; i < this.length; i += chunkSize)
      R.push(this.slice(i, i + chunkSize));
    return R;
  }
});


class Tutors extends Component {
   constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }


  componentDidMount() {
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
      });
  }

  splitArray = (arr, mob) => {
    if (mob) {

      arr.reduce(function(result, value, index, array) {
        if (index % 2 === 0)
          result.push(array.slice(index, index + 2));
        return result;
      }, []);
    } else {
      arr.reduce(function(result, value, index, array) {
        if (index % 3 === 0)
          result.push(array.slice(index, index + 3));
        return result;
      }, []);
    }
    return arr;
  }



  render() {
    const { width } = this.state;
    const isMobile = width <= 768;
    const isSmaller = width <= 400;
    const img_urls = ["assets/images/tutoring_photo.jpg"]

    let data = tutors_data.chunk((isMobile) ? ((isSmaller) ? 1 : 2) : 3);

    return (
      <div className="tutors-page">

        <div className='some-page-wrapper'>
            {data.map((tutor_row) => {
              console.log(tutor_row)
              return (
                  <div key={tutor_row[0].name} className='row '>
                    <div className='column '>
                      {(tutor_row.length) > 0 ? <Tutor key={tutor_row[0].name} data={tutor_row[0]} /> : ""}
                    </div>
                    {
                      (!isSmaller) ?
                        <div className='column '>
                          {(tutor_row.length) > 1 ? <Tutor key={tutor_row[1].name} data={tutor_row[1]} /> : ""}
                        </div> : ""
                    }
                    { (!isMobile) ?
                      <div className='column '>
                        {(tutor_row.length) > 2 ? <Tutor key={tutor_row[2].name} data={tutor_row[2]} /> : ""}
                      </div> : ""

                    }
                  </div>

              )

            })}


        </div>
        {/*<Footer/>*/}
      </div>
    )
  }
}

export default Tutors;
