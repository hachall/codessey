import React, { Component } from 'react'
import { Link} from 'react-router-dom';

const hamish_url = "https://codessey.s3.eu-west-2.amazonaws.com/tutors/tutoring_photo.jpg"
const max_url = "https://codessey.s3.eu-west-2.amazonaws.com/tutors/78310544_1250018508521761_6671124086694871040_n.jpg"
const mon_url = "https://codessey.s3.eu-west-2.amazonaws.com/tutors/maon.jpeg"
const laura_url = "https://codessey.s3.eu-west-2.amazonaws.com/tutors/laura_photo.png"
const khalid_url = "https://codessey.s3.eu-west-2.amazonaws.com/tutors/0-2.jpeg"
const izzy_url = "https://codessey.s3.eu-west-2.amazonaws.com/tutors/izzy.jpeg"
const mark_url = "https://codessey.s3.eu-west-2.amazonaws.com/tutors/43185811_10218651718431288_7725163276505448448_n.jpg"
const cam_url = "https://codessey.s3.eu-west-2.amazonaws.com/tutors/0-3.jpeg"
const niall_url = "https://codessey.s3.eu-west-2.amazonaws.com/tutors/0-4.jpeg"
const sk_url = "https://codessey.s3.eu-west-2.amazonaws.com/tutors/Screenshot+2020-01-19+at+23.30.04.png"
const andrew_url = "https://codessey.s3.eu-west-2.amazonaws.com/tutors/0-5.jpeg"
const stef_url = "https://codessey.s3.eu-west-2.amazonaws.com/tutors/43411721_10217179342940810_9019848569082871808_o.jpg"
const theo_url = "https://codessey.s3.eu-west-2.amazonaws.com/tutors/0-6.jpeg"
const lili_url = "https://codessey.s3.eu-west-2.amazonaws.com/tutors/hvfjswdpst7xocoepeyu.jpg"
const dan_url = "https://codessey.s3.eu-west-2.amazonaws.com/tutors/0-7.jpeg"
const siv_url = "https://codessey.s3.eu-west-2.amazonaws.com/tutors/0-8.jpeg"
const kai_url = "https://codessey.s3.eu-west-2.amazonaws.com/tutors/0-9.jpeg"
const ben_url = "https://codessey.s3.eu-west-2.amazonaws.com/tutors/0-10.jpeg"
const fred_url = "https://codessey.s3.eu-west-2.amazonaws.com/tutors/0-11.jpeg"
const archie_url = "https://codessey.s3.eu-west-2.amazonaws.com/tutors/archie.jpeg"
const kate_url = "https://codessey.s3.eu-west-2.amazonaws.com/tutors/0-13.jpeg"
const alice_url = "https://codessey.s3.eu-west-2.amazonaws.com/tutors/0-14.jpeg"
const georgia_url = "https://codessey.s3.eu-west-2.amazonaws.com/tutors/0-15.jpeg"
const hope_url = "https://codessey.s3.eu-west-2.amazonaws.com/tutors/0-16.jpeg"
const dave_url = "https://codessey.s3.eu-west-2.amazonaws.com/tutors/0-17.jpeg"
const angus_url = "https://codessey.s3.eu-west-2.amazonaws.com/tutors/83914361_118485969430893_234949726296866816_n.jpg"

class NetworkDesktop extends Component {


  render() {

    return (

        <div className="grid-wrapper">
          <div className="parent">
            <div className="grid-centre div1">
              <div className="centre-inner">
                <div className="grid-text">
                  Have any tech related <span className="pink-text bold-text">ideas</span>, projects or <span className="blue-text">questions</span>?
                </div>
                <div className="grid-text">
                  Need any guidance or advice?
                </div>
                <Link to="/contact">
                  <div className="grid-button">Drop us a message!</div>
                </Link>
              </div>
            </div>
            <div style={{backgroundImage: `url(${mark_url})`}} className="net-avatar div2">
               <div className="overlay">
                MasterCard Fintech Consultant
               </div>
            </div>
            <div style={{backgroundImage: `url(${alice_url})`}} className="net-avatar div3">
               <div className="overlay">
                Blockchain Engineer, Fluidity
               </div>
            </div>
            <div style={{backgroundImage: `url(${mon_url})`}} className="net-avatar  div4">
               <div className="overlay">
                Medical Physicist, UCL
               </div>
            </div>
            <div style={{backgroundImage: `url(${izzy_url})`}} className="net-avatar div5">
               <div className="overlay">
                Imperial Computer Scientist, App Developer
               </div>
            </div>
            <div style={{backgroundImage: `url(${niall_url})`}} className="net-avatar div6">
               <div className="overlay">
                Dyson Engineer
               </div>
            </div>
            <div style={{backgroundImage: `url(${sk_url})`}} className="net-avatar div7">
               <div className="overlay">
                Finance & Econometrics Graduate
               </div>
            </div>
            <div style={{backgroundImage: `url(${andrew_url})`}} className="net-avatar div8">
               <div className="overlay">
                DPhil Computer Vision, University of Oxford
               </div>
            </div>
            <div style={{backgroundImage: `url(${stef_url})`}} className="net-avatar div9">
               <div className="overlay">
                MSc Econometrics, Cambridge
               </div>
            </div>
            <div style={{backgroundImage: `url(${theo_url})`}} className="net-avatar div10">
               <div className="overlay">
                Data Analyst, JP Morgan
               </div>
            </div>
            <div style={{backgroundImage: `url(${khalid_url})`}} className="net-avatar div11">
               <div className="overlay">
                Economics & Strategy, Imperial
               </div>
            </div>
            <div style={{backgroundImage: `url(${lili_url})`}} className="net-avatar div12">
               <div className="overlay">
                DPhil Computer Vision, University of Oxford
               </div>
            </div>
            <div style={{backgroundImage: `url(${georgia_url})`}} className="net-avatar div13">
               <div className="overlay">
                Senior Data Analyst, Tesco
               </div>
            </div>
            <div style={{backgroundImage: `url(${siv_url})`}} className="net-avatar div14">
               <div className="overlay">
                Founder Nanovert, Engineer
               </div>
            </div>
            <div style={{backgroundImage: `url(${laura_url})`}} className="net-avatar div15">
               <div className="overlay">
                Kubrick Data Scientist
               </div>
            </div>
            <div style={{backgroundImage: `url(${hamish_url})`}} className="net-avatar div16">
               <div className="overlay">
                Oxford Engineer & Imperial Computer Scientist
               </div>
            </div>
            <div style={{backgroundImage: `url(${kai_url})`}} className="net-avatar div17">
               <div className="overlay">
                Founder Cardea
               </div>
            </div>
            <div style={{backgroundImage: `url(${max_url})`}} className="net-avatar div18">
               <div className="overlay">
                Data Scientist
               </div>
            </div>
            <div style={{backgroundImage: `url(${ben_url})`}} className="net-avatar div19">
               <div className="overlay">
                Founder Changemakers, Medicine University of Oxford
               </div>
            </div>
            <div style={{backgroundImage: `url(${fred_url})`}} className="net-avatar div20">
               <div className="overlay">
                Mako Operations Analyst
               </div>
            </div>
            <div className="net-avatar div21" style={{backgroundImage: `url(${archie_url})`}}>
              <div className="overlay">
                Technical Lead, APJ
               </div>
            </div>
                <div style={{backgroundImage: `url(${kate_url})`}} className="net-avatar div22">
               <div className="overlay">
                Seeker Engineer, MBDA
               </div>
            </div>
            <div style={{backgroundImage: `url(${cam_url})`}} className="net-avatar div23">
               <div className="overlay">
                Calastone Client Manager
               </div>
            </div>
            <div style={{backgroundImage: `url(${dan_url})`}} className="net-avatar div24">
               <div className="overlay">
                Founder, MyWorld
               </div>
            </div>
            <div style={{backgroundImage: `url(${hope_url})`}} className="net-avatar div25">
               <div className="overlay">
                Deloitte Network Analyst
               </div>
            </div>
            <div style={{backgroundImage: `url(${angus_url})`}} className="net-avatar div26">
               <div className="overlay">
                Data Scientist
               </div>
            </div>
            <div className="net-avatar  div27" style={{backgroundImage: `url(${dave_url})`}}>
              <div className="overlay">
                Cundall Engineer
               </div>
            </div>
          </div>
        </div>


    )
  }
}
export default NetworkDesktop;
