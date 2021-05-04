import Layout from '../components/Layout'
import React from 'react'
import SocialMediaLinks from '../components/SocialMediaLinks'

const HomePage = () => (
  <Layout>
    <div className='container'>
      <div className='homepage'>
        <section className='homepage-text'>
          <h1>Hi, I'm Steve</h1>
          <p>
            I am a Software Developer, passionate about all things
            programming
      </p>
        </section>
        <SocialMediaLinks />
      </div>
    </div>
  </Layout>
)

export default HomePage
