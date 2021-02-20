import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Helmet } from "react-helmet"
import { navigate } from "gatsby-link"
import ReCAPTCHA from "react-google-recaptcha"

const messageStyle = {
  resize: "none",
}

const RECAPTCHA_KEY = process.env.GATSBY_RECAPTCHA_SITE_KEY

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.recaptchaRef = React.createRef()
    this.state = {
      verified: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.onCaptchaChange = this.onCaptchaChange.bind(this)
  }

  onCaptchaChange(value) {
    if (value) this.setState({ verified: true })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const form = e.target
    const recaptchaValue = await this.recaptchaRef.current.getValue()

    if (recaptchaValue === null || recaptchaValue === "") {
      this.recaptchaRef.current.reset()
      this.setState({
        verified: false,
      })
      alert("Error: Invalid Captcha")
      return
    }

    const data = new FormData(form)
    await fetch(`https://formspree.io/${process.env.GATSBY_FORMSPREE_ID}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encode({
        name: data.get("name"),
        email: data.get("email"),
        company: data.get("company"),
        message: data.get("message"),
      }),
    })
      .then(() => navigate("/thanks"))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <SEO title="Let’s build your app!" description="Got an amazing app idea you want to turn into reality? Let’s discuss it." />
        <Helmet>
          <script
            src="https://www.google.com/recaptcha/api.js"
            async
            defer
          ></script>
        </Helmet>
        <section className="contact-page">
          <article className="contact-form">
            <h3>get in touch</h3>
            <p>
              Got a question or amazing app idea you want to turn into reality?
              Let’s discuss it. Just send a message via the form below or email
              me at <a href="mailto:garlen.javier@meekcode.com">garlen.javier@meekcode.com</a>
            </p>
            <form name="contact" onSubmit={e => this.handleSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="form-control"
                  required
                />
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="form-control"
                  required
                />
                <input
                  type="text"
                  placeholder="company(optional)"
                  name="company"
                  className="form-control"
                />
                <textarea
                  style={messageStyle}
                  name="message"
                  rows="5"
                  placeholder="message"
                  className="form-control"
                  required
                ></textarea>
              </div>

              <div>
                <ReCAPTCHA
                  className={!this.state.verified ? "captcha" : "hide-captcha"}
                  name="g-recaptcha-response"
                  ref={this.recaptchaRef}
                  sitekey={RECAPTCHA_KEY}
                  onChange={this.onCaptchaChange}
                />
              </div>

              {this.state.verified ? (
                <button type="submit" className="submit-btn btn">
                  submit here
                </button>
              ) : (
                ""
              )}
            </form>
          </article>
        </section>
      </Layout>
    )
  }
}

export default Contact
