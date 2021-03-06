import Link from "next/link"

const SocialMediaLinks = () => (
  <div className='social-media-links'>
    <Link href='https://github.com/steve-kim-96'>
      <a><img src="/images/socialMedia/Github.png" alt="GitHub logo" /></a>
    </Link>
    <Link href='https://www.linkedin.com/in/steve-soungku-kim/'>
      <a><img src="/images/socialMedia/linkedin.png" alt="LinkedIn logo" /></a>
    </Link>
    <Link href='https://drive.google.com/file/d/1OIcpGWRESoQqZPRXQE13y-9FYTb87MWl/view?usp=sharing'>
      <a><img src="/images/socialMedia/cv.png" alt="cv logo" /></a>
    </Link>
  </div>
)

export default SocialMediaLinks