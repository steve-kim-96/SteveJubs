import Layout from '../../components/Layout'
import BlogContent from '../../components/BlogContent'
import ProjectListItem from '../../lib/data/projectListItem'

const ProjectContent = () => (
  <Layout>
    <BlogContent items={ProjectListItem} />
  </Layout>
)

export default ProjectContent