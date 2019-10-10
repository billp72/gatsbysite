import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Moment from 'react-moment';
import './bubble.css';

const imageStyle = {
    width: '300px',
    marginTop: '20px'
}
const container = {
    width: '85%',
    margin: '0 auto',
    border: '3px solid grey',
    padding: '20px',
    display: 'flex',
    flexDirection:'column'
}
const dt = {
    display:'BLOCK',
    margin: '10px 0 0px 3px'
}
const largeImg = {
    width: '950px',
    height: '255px',
    marginTop:'-110px',
    float: 'right',
    backgroundColor: 'black'
}
const comparisonImg = {
    float:'right',
    margin:'-59px 0px 0 0'
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
          </hgroup>
          <img style={imageStyle} alt="Rodney Dangerfield from Back to School" src={images[1].file.url} />
          <div style={largeImg}>
            <img alt="just random code" src={images[0].file.url} />
          </div>
          <p>{about}&nbsp;<a target="_blank" rel="noopener noreferrer" href={links.link3}>Contentful</a></p>
          <p>{contentp}&nbsp;<a target="_blank" rel="noopener noreferrer" href={links.link4}>Gatsby</a></p>
          </section>
          <section>
            <a target="_blank" rel="noopener noreferrer" href={links.link1}>Stackoverfollow</a><br />
            <a target="_blank" rel="noopener noreferrer" href={links.link2}>Github</a>
            <div style={comparisonImg}>
              <img alt="CMS Comparison" src={images[2].file.url} />
            </div>
            <small style={dt}>Created on: <Moment>{date}</Moment></small>
          </section>
      </div>
      </>
    )}
  />
);

export default HomePage;
