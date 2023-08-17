import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { NextPageWithLayout } from './_app'
import VerticalLayout from '@/components/layouts/VerticalLayout'

const Home: NextPageWithLayout<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ a }) => {
  return <div>Hello World</div>
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      a: 1,
    },
  }
}

Home.getLayout = (page) => <VerticalLayout>{page}</VerticalLayout>
export default Home
