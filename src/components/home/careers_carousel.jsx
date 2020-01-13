import React from "react";
import Slider from "react-slick";

const items = [
  {
    'title': "AI & Machine Learning",
    'img': "undraw_software_engineer_lvl5.svg",
    'text': "sjdhfasdhf ahsfp hsadk ashdf "
  },{
    'title': "Game Development",
    'img': "undraw_augmented_reality_heuy.svg",
    'text': "sjdhfasdhf ahsfp hsadk ashdf "
  },{
    'title': "Data Science",
    'img': "undraw_all_the_data_h4ki.svg",
    'text': "sjdhfasdhf ahsfp hsadk ashdf "
  },{
    'title': "Web/Mobile Development",
    'img': "undraw_prototyping_process_rswj.svg",
    'text': "sjdhfasdhf ahsfp hsadk ashdf "
  },{
    'title': "Computational Finance",
    'img': "undraw_financial_data_es63.svg",
    'text': "sjdhfasdhf ahsfp hsadk ashdf "
  },{
    'title': "Robotics",
    'img': "undraw_robotics_kep0.svg",
    'text': "sjdhfasdhf ahsfp hsadk ashdf "
  },{
    'title': "Tech Product Management",
    'img': "undraw_product_teardown_elol.svg",
    'text': "sjdhfasdhf ahsfp hsadk ashdf "
  },{
    'title': "Networks & Systems",
    'img': "undraw_connected_world_wuay.svg",
    'text': "sjdhfasdhf ahsfp hsadk ashdf "
  },{
    'title': "Tech Journalism",
    'img': "undraw_content_creator_xeju.svg",
    'text': "sjdhfasdhf ahsfp hsadk ashdf "
  },{
    'title': "Ethical Hacking",
    'img': "undraw_hacker_mind_6y85.svg",
    'text': "sjdhfasdhf ahsfp hsadk ashdf "
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
            <img className="career-img" src={`assets/images/${item.img}`} alt=""/>
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
