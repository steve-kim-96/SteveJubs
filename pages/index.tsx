import Layout from '../components/Layout'
import React from 'react'
import SocialMediaLinks from '../components/SocialMediaLinks'

const HomePage = () => (
  <Layout>
    <div className='homepage'>
      <h1>Hi, I'm Steve</h1>
      <p>
        I am a Software Developer, passionate about all things
        programming
      </p>
    </div>
      <SocialMediaLinks/>
  </Layout>
)

export default HomePage
