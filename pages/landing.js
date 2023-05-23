import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';




export default function Example() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

 
      {/* HERO */}
      <Container fluid >
      <Row>
          <Col className={styles.heroLanding}>
            <h1>Master Your Email with the Power of Ai</h1>
            <div className={styles.br20}></div>
            <h5>Compose and Respond to Emails 10x Faster with Unmatched Quality using our ChatGPT Chrome Extension</h5>
            <div className={styles.br40}></div>
            <div>
              <Button variant="custom" >Install Chrome Extension</Button>
              <Button variant="secondary">Sign Up</Button>
            </div>
          </Col>

          <Col className={styles.containerFeatureImage}>
            <img src="/img/wave.svg" alt="wave" className={styles.wave}/>
          </Col>


      </Row>
      </Container>

      {/* Line + Icons */}

      <Container fluid >
      <Row>
          <Col className={styles.bkgSecond}>
            <h3 className={styles.subtitle}>Experience a significant boost in productivity with the ability to</h3>
            <h3 className={styles.subtitle}><span>compose and respond to emails up to 10 times faster.</span></h3>
          </Col>
      </Row>
      </Container>

      {/* Feature 1 */}
      <Container fluid >
      <Row className={styles.containerFeature1}>
          <Col className={styles.containerFeature}>
            <h6 className={styles.cintillo}>Description</h6>
            <div className={styles.br20}></div>
            <h2 className={styles.titleFeature}>Boost Email Efficiency with AI: Experience the Power of the ChatGPT Chrome Extension!</h2>
            <img src="/img/line_feature.svg" alt="Line" className={styles.line}/>
            <h5 className={styles.descFeature}>Introducing the ChatGPT Chrome Extension, the ultimate tool to supercharge your email productivity. Designed to revolutionize your workflow, this powerful extension offers a range of benefits tailored to professionals like you:</h5>
            <div className={styles.br20}></div>
            <div>
              <Button variant="icon">
              <img src="img/img_chrome.svg" width="40"/> Install Chrome Extension</Button>
            </div>
          </Col>
          <Col className={styles.containerFeatureImage}>
            <img src="/img/wave.svg" alt="wave" className={styles.wave}/>
          </Col>
      </Row>
      </Container>

      {/* Feature 2 */}
      <Container fluid >
      <Row className={styles.containerFeature2}>
          <Col className={styles.containerFeatureImage}>
            <img src="/img/wave-2.svg" alt="wave" className={styles.wave}/>
          </Col>
          <Col className={styles.containerFeature}>
            <h6 className={styles.cintillo}>Description</h6>
            <div className={styles.br20}></div>
            <h2 className={styles.titleFeature}>Boost Email Efficiency with AI: Experience the Power of the ChatGPT Chrome Extension!</h2>
            <img src="/img/line_feature.svg" alt="Line" className={styles.line}/>
            <h5 className={styles.descFeature}>Harness the power of AI to compose emails up to 10 times faster. Simply start typing, and watch as the extension intelligently predicts and suggests your next words, saving you valuable time.</h5>
          </Col>
      </Row>
      </Container>

      {/* Feature 3 */}
      <Container fluid >
      <Row className={styles.containerFeature3}>
          <Col className={styles.containerFeature}>
            <h6 className={styles.cintillo}>Description</h6>
            <div className={styles.br20}></div>
            <h2 className={styles.titleFeature}>Boost Email Efficiency with AI: Experience the Power of the ChatGPT Chrome Extension!</h2>
            <img src="/img/line_feature.svg" alt="Line" className={styles.line}/>
            <h5 className={styles.descFeature}>Craft thoughtful and accurate email responses effortlessly. The extension provides context-aware prompts, suggestions, and even auto-complete options to help you respond with speed and precision.</h5>
          </Col>
          <Col className={styles.containerFeatureImage}>
            <img src="/img/wave-3.svg" alt="wave" className={styles.wave}/>
          </Col>
      </Row>
      </Container>

      {/* Feature 4 */}
      <Container fluid >
      <Row className={styles.containerFeature1}>
          <Col className={styles.containerFeatureImage}>
            <img src="/img/wave.svg" alt="wave" className={styles.wave}/>
          </Col>
          <Col className={styles.containerFeature}>
            <h6 className={styles.cintillo}>Description</h6>
            <div className={styles.br20}></div>
            <h2 className={styles.titleFeature}>Boost Email Efficiency with AI: Experience the Power of the ChatGPT Chrome Extension!</h2>
            <img src="/img/line_feature.svg" alt="Line" className={styles.line}/>
            <h5 className={styles.descFeature}>Extension and revolutionize your email communication. Unlock a new level of productivity, compose emails faster than ever, and impress recipients with professional and polished responses. Try it today and discover a world where email efficiency knows no bounds.</h5>
            <div className={styles.br20}></div>
          </Col>
      </Row>
      </Container>

       {/* Line + Icons */}

       <Container fluid >
      <Row>
          <Col className={styles.bkgEngage}>
            <h4 className={styles.experienceTitle}>Experience the Next Level of Email Efficiency </h4>
            <h3 className={styles.experienceSubtitle}>Get Started with the ChatGPT Chrome Extension Now!</h3>
            <div className={styles.br40}></div>
            <Button variant="line" >START NOW</Button>
          </Col>
      </Row>
      </Container>
      



      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style type="text/css">{`

      button {
        margin-right: 20px;
      }

        .btn-custom {
          background-color: #026BFF;
          color: white;
          font-family: Gilroy;
          padding:10px 20px;
          font-weight: 500;
          }

          .btn-custom:hover {
            background-color: #fff;
            color: #026BFF;
            border: 1px solid #026BFF;
            }

        .btn-secondary {
          background-color: white;
          font-weight:600;
          color: #026BFF;
          font-family: Gilroy;
          padding:10px 20px;
          border:0px;
          }

        .btn-icon {
          background-color: white;
          color: #026BFF;
          font-family: Gilroy;
          padding:16px 20px;
          border:2px solid #026BFF;
          font-weight:600;
          }

          .btn-icon:hover {
            background-color: #026BFF;
            color: white;
            font-family: Gilroy;
            padding:16px 20px;
            border:2px solid #026BFF;
            font-weight:600;
            }

          .btn-line {
            background-color: @026BFF;
            color: white;
            font-family: Gilroy;
            padding:16px 24px;
            border:2px solid #FFF;
            font-weight:600;
            }
            
      `} </style>


      <style jsx>{`
         h1 {
          font-family: Gilroy;
          font-weight: 600;
          color: #026BFF;
        }
        h5 {
          font-family: Gilroy;
          font-weight: 400;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
