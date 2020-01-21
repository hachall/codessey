import React from "react";
import Slider from "react-slick";

const items = [
  {
    'title': "AI & Machine Learning",
    'img': "https://codessey.s3.eu-west-2.amazonaws.com/graphics/undraw_software_engineer_lvl5.svg"
      },{
    'title': "Game Development",
    'img': "https://codessey.s3.eu-west-2.amazonaws.com/graphics/undraw_augmented_reality_heuy.svg"
      },{
    'title': "Data Science",
    'img': "https://codessey.s3.eu-west-2.amazonaws.com/graphics/undraw_all_the_data_h4ki.svg"
      },{
    'title': "Web/Mobile Development",
    'img': "https://codessey.s3.eu-west-2.amazonaws.com/graphics/undraw_prototyping_process_rswj.svg"
      },{
    'title': "Computational Finance",
    'img': "https://codessey.s3.eu-west-2.amazonaws.com/graphics/undraw_financial_data_es63.svg"
      },{
    'title': "Robotics",
    'img': "https://codessey.s3.eu-west-2.amazonaws.com/graphics/undraw_robotics_kep0.svg"
      },{
    'title': "Tech Product Management",
    'img': "https://codessey.s3.eu-west-2.amazonaws.com/graphics/undraw_product_teardown_elol.svg"
      },{
    'title': "Networks & Systems",
    'img': "https://codessey.s3.eu-west-2.amazonaws.com/graphics/undraw_connected_world_wuay.svg"
      },{
    'title': "Tech Journalism",
    'img': "https://codessey.s3.eu-west-2.amazonaws.com/graphics/undraw_content_creator_xeju.svg"
      },{
    'title': "Ethical Hacking",
    'img': "https://codessey.s3.eu-west-2.amazonaws.com/graphics/undraw_hacker_mind_6y85.svg"
      }

]


class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      className: 'slides'
    };

    const slides = items.map((item) => {
      return (
        <div className="career" key={item.title}>
          <h3>{item.title}</h3>
          <div className="career-img-box">
            <img className="career-img" src={`${item.img}`} alt=""/>
          </div>
          {/*<p>{item.text}</p>*/}
        </div>

      )
    })

    return (
      <Slider {...settings}>
        {slides}
      </Slider>
    );
  }
}

export default SimpleSlider;
