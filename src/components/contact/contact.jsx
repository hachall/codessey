import React, {Component} from 'react'

// import MyForm from './form'


class Contact extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  submitForm = (ev) => {
    console.log("here")
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  componentDidMount() {
    $(".sendmess").click(function() {
      $(".bar").css("animationName", "send");
      SendMess();
    })

    function SendMess() {
      setTimeout(function() {
        $(".l1").css("display", "none");
        $(".l2").css("display", "none");
        $(".mailinput").css("display", "none");
        $(".messtxt").css("display", "none");
        $(".sendmess").css("display", "none");

        $(".success").css("display", "inline");
        $(".closemess").css("display", "inline");
      }, 1500);
    }

    $(".closemess").click(function() {
      $(".bar").css("animationName", "none");
      $(".l1").css("display", "inline");
      $(".l2").css("display", "inline");
      $(".mailinput").css("display", "inline");
      $(".messtxt").css("display", "inline");
      $(".sendmess").css("display", "inline");

      $(".success").css("display", "none");
      $(".closemess").css("display", "none");

      $(".mailinput").val("");
      $(".messtxt").val("");
    })


  }

  resultMsg = (state_msg) => {
    if ( status == "SUCCESS" )  {
      return <div>Message sent successfully.<br></br>Thanks!</div>
    } else if ( status == "ERROR") {
      <div>Error sending message.<br></br>Please try again!</div>
    } else {
      return <div></div>
    }
  }

  render() {
    const { status } = this.state;
    let msg_div;
    if ( status == "SUCCESS" )  {
      msg_div =  <div>Message sent successfully.<br></br>Thanks!</div>
    } else if ( status == "ERROR") {
      msg_div = <div>Error sending message.<br></br>Please try again!</div>
    } else {
      msg_div =  <div>We seem to have missed that.<br></br>Please try again!</div>
    }

    return (
      <div className="contact-page">
        <div className="">


          <div className="mailbg">
            <form
              onSubmit={this.submitForm}
              action="https://formspree.io/mknjjgrk"
              method="POST"
            >
            <label className="l1 form-text" >Your email address*:</label>
            <input className="mailinput soft-edges" aria-label="Your Email" type="email" name="_replyto" placeholder=""/>
            <label className="l2 form-text" >Your message*:</label>
            <textarea className="messtxt soft-edges" aria-label="Your Message" name="message" placeholder=""></textarea>
            <button className="sendmess soft-edges" aria-label="Send message">Send<div className="bar"></div></button>
            <div className="success">
              { msg_div}
            </div>
            <button className="closemess" aria-label="Close Form">Close</button>
            </form>
          </div>

        </div>

      </div>
    )
  }
}

export default Contact;
