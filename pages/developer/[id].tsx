import Layout from '../../components/Layout'
import BlogContent from '../../components/BlogContent'
import DeveloperListItem from '../../lib/data/developerListItem'

const DeveloperJourneyContent = () => (
  <Layout>
    <BlogContent items={DeveloperListItem} />
  </Layout>
)

export default DeveloperJourneyContent