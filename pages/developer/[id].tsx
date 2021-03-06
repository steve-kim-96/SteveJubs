import Layout from '../../components/Layout'
import DeveloperBlogContent from '../../components/DeveloperBlogContent'
import PageListItem from '../../lib/interfaces/PageListItem'
import DeveloperListItem from '../../lib/data/developerListItem'

interface Props {
  developerContent: PageListItem
}

const DeveloperJourneyContent = ({ developerContent }: Props) => (
  <Layout>
    <DeveloperBlogContent items={DeveloperListItem} />
  </Layout>
)

export default DeveloperJourneyContent