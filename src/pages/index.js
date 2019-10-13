import React from "react";
import ReactMarkdown from 'react-markdown';
import { StaticQuery, graphql } from "gatsby";
import Moment from 'react-moment';
import './bubble.css';

const imageStyle = {
    width: '300px',
    marginTop: '12%'
}
const container = {
    width: '85%',
    margin: '0 auto',
    border: '3px solid grey',
    padding: '20px',
    display: 'flex',
    flexDirection:'column'
}
const linkscont = {
    width:'100%',
    marginLeft:'44%'
}
const dateTime = {
    width:'200px',
    textAlign:'center'
}
const HomePage = () => (
  <StaticQuery
    query={graphql`
      query HomePage {
        contentfulHomePage {
          title
          date
          images {
            file {
              url
            }
          }
          links{
            link1
            link2
            link3
            link4
          }
          about {
            about
          }
          contentp {
              contentp
          }
          drawback {
              drawback
          }
        }
      }
    `}
    render={({
      contentfulHomePage: {
        title,
        date,
        images,
        links,
        about: { about },
        contentp: {contentp},
        drawback: {drawback}
      }
    }) => (
      <>
      <div style={container}>
        <section>
          <hgroup className={'speechBubble'}>
            <h1>{title}</h1>
            <img style={imageStyle} alt="Rodney Dangerfield from Back to School" src={images[1].file.url} />
          </hgroup> 
          <div className={'largeImg'}>
            <img alt="just random code" src={images[0].file.url} />
          </div>
          </section>
          <section>
          <p>
          <ReactMarkdown
             source={about}
          />&nbsp;<a target="_blank" rel="noopener noreferrer" href={links.link3}>Contentful</a></p>
          <p>{contentp}&nbsp;<a target="_blank" rel="noopener noreferrer" href={links.link4}>Gatsby</a></p>
          <ReactMarkdown
             source={drawback}
          />
          </section>
          <section>
            <div>
              <img alt="CMS Comparison" src={images[2].file.url} />
            </div>
            <div style={linkscont}>
              <div style={dateTime}>
                <a target="_blank" rel="noopener noreferrer" href={links.link1}>Stackoverflow</a><br />
                <a target="_blank" rel="noopener noreferrer" href={links.link2}>Github</a><br /><br />
                <small>Created on: <Moment>{date}</Moment></small>
              </div>
            </div>
          </section>
      </div>
      </>
    )}
  />
);

export default HomePage;
