import React from "react";
import ReactMarkdown from 'react-markdown/with-html';
import { StaticQuery, graphql } from "gatsby";
import Moment from 'react-moment';
import './bubble.css';

const margin = {
    marginTop: '20px'
}
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
        contentp: {contentp}
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
          <ReactMarkdown
             source={about}
             escapeHtml={false}
          />
          <p>{contentp}</p>
          <a target="_blank" rel="noopener noreferrer" href={links.link4}>Gatsby</a><br />
          <a target="_blank" rel="noopener noreferrer" href={links.link3}>Contentful</a>
          </section>
          <section style={margin}>
            <div>
              <img alt="CMS Comparison" src={images[2].file.url} />
            </div>
            <div style={linkscont}>
              <div style={dateTime}>
                <a target="_blank" rel="noopener noreferrer" href={links.link1}>Stackoverflow</a><br />
                <a target="_blank" rel="noopener noreferrer" href={links.link2}>Github</a><br /><br />
                <small>By Bill Pope: <Moment>{date}</Moment></small>
              </div>
            </div>
          </section>
      </div>
      </>
    )}
  />
);

export default HomePage;
