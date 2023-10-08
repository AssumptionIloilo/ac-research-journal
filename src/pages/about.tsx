import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { NextPageWithLayout } from '@/pages/_app';
import VerticalLayout from '@/components/layouts/VerticalLayout';
import { container } from '@/styles/variants';
import Image from 'next/image';
import useBackgroundColor from '@/hooks/useBackgroundColor';

const AboutPage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ a }) => {
  useBackgroundColor({ color: '#E6E6FA', enableTransition: true });

  return (
    <div className={container({ class: 'pt-10 pb-20 gap-y-10' })}>
      <header className="flex flex-col gap-y-8">
        <h1 className="mx-auto max-w-xl w-full text-center text-dark-500 font-medium text-3xl">
          Discover Our Journey:
          <br />
          Unveiling the Story{' '}
          <span className="text-primary-600">Assumption Iloilo</span> -
          Empowering Minds, Shaping Futures
        </h1>
        <Image
          src="/about-banner.png"
          alt="about banner"
          width={1520}
          height={598}
        />
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-[320px,1fr] gap-x-10 gap-y-5">
        <h2 className="text-dark-500 text-3xl font-bold">How We Started</h2>
        <div>
          <p className="indent-10 text-dark-400">
            First Sisters: Mother M. Teresita (called Mother M. Teresa in
            Iloilo), Srs. M. Rafaela, M. Silvina, M. Leandra, Angela M.,
            Bernardine, M. Matea, M. Eberard, Antonia Ma., M. Servula and M. d’
            Assise. With Mother Helene Marguerite who was returning to Manila
            after the Chapter, the party set sail from Barcelona on Nov. 12th
            1910 on board Spanish liner “Fernando Po.” They arrived in Iloilo on
            Dec. 16th at 6 a.m. They were met by Sr. Caroline M. and Rosario
            Araneta.
          </p>
          <p className="indent-10 text-dark-400">
            The school had already been functioning since July 15th, thanks to
            Sr. Caroline M., Sr. M. Benedict and Sr. M. Alfred and three Manila
            Old Girls, Rosario Araneta and Manuela and Trinidad Gay. The first
            pupil inscribed was Maria Arroyo y Lacson, aged 4, daughter of Jesus
            Lacson also an Old Girl.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[320px,1fr] gap-x-10 gap-y-5">
        <h2 className="text-dark-500 text-3xl font-bold">
          Purpose of the Foundation: The needs answered
        </h2>
        <div>
          <p className="indent-10 text-dark-400">
            The school was to be the counterpart of Assumption Manila. There
            was, at the time in Iloilo City, only one girls’ school run by the
            Daughters of Charity of St. Vincent de Paul, Jaro. In fact, even
            then, Msgr. Denys Dougherty was hoping for an Assumption school in
            Bacolod.
          </p>
          <p className="indent-10 text-dark-400">
            The first demand for Iloilo was made by Msgr. Jeremiah Harty,
            Archbishop of Manila, acting as administrator for the Jaro diocese,
            whose bishop, Msgr. Rooker had died in April 1909. This petition was
            heartily endorsed by the future Bishop of Jaro, Msgr. Denys
            Dougherty, Later Cardinal Archbishop of Philadelphia. Mother M.
            Celestine, Superior General, also received the same official demand
            and approved it on principle. A few months after, she cabled Mother
            Helene Marguerite instructing her to rent a suitable house.
            Whereupon Msgr. Dougherty sent her a check for P4,500 to cover
            traveling expenses for eight Sisters and promised as many pupils as
            the Sisters could accept. The house rented belonged to the Viaplana
            family and was located on Gen. Hughes St. It is now occupied by
            Colegio del Sagrado Corazon de Jesus of the Daughters of Charity.
          </p>
          <p className="indent-10 text-dark-400">
            In May, the sisters started work to adapt the house to the needs of
            a school. In June Sr. Caroline M. arrived and became acting
            directress, with her were Srs. N. Alfred and M. Benedict. To help in
            initial arrangements, the Bishop gave them his secretary, Fr. James
            McCloskey who became his future successor. The parents were
            delighted. On the very day of their arrival, the first boarder,
            Magdalena Kapeler arrived with them. Her mother has spent part of
            the summer in Iloilo to prepare for her daughter’s school outfit.
            Unfortunately Magdalena remained only a few months; she had to
            return home due to ill health. In Sept. 1911, she and her mother
            died in a shipwreck. Formal classes began on July 15th with 20
            pupils. They numbered 40 before the end of the year.
          </p>
          <p className="indent-10 text-dark-400">
            The great joy of that first feast of the Assumption in 1911 was that
            from then on, the Lord would remain in the tabernacle. “The
            Sisters,” so comment the annals, “had not much time to spend in the
            chapel, but the thought that the Master was there gave courage to
            shoulder the work.” Before the month ended, the children were
            invited to an “Episcopal merienda.” The Bishop sent two carriages to
            bring his guests to Jaro. The expedition ended with a delightful
            “paseo.” The children could not say enough of the kindness of the
            Bishop.
          </p>
        </div>
      </section>

      <section className="relative flex flex-col items-center mt-10">
        <div className="rounded-full px-5 py-2 font-bold absolute -top-5 bg-[#E8DCAD] text-[#9A7D07]">
          About The Logo
        </div>
        <div className="bg-white p-14 rounded-3xl flex flex-col items-center gap-y-5 text-dark-400">
          <h3 className="text-7xl text-primary-500 font-mixOldGirl pb-5">
            transformateur
          </h3>
          <p className="indent-10">
            At Assumption Iloilo, we believe in the transformative power of
            education and the profound impact it has on shaping young minds.
            "Transformateur" is our esteemed journal publication, dedicated to
            showcasing the intellectual prowess and creative brilliance of our
            students, faculty, and staff.
          </p>
          <p className="indent-10">
            As a premier educational institution, Assumption Iloilo has always
            strived to foster a holistic learning environment that nurtures
            critical thinking, innovative ideas, and a deep appreciation for
            knowledge. Our journal, "Transformateur," serves as a platform for
            our community to share their academic achievements, research
            findings, artistic endeavors, and insightful reflections.
          </p>
          <p className="indent-10">
            Through this publication, we aim to celebrate the diverse talents
            and interests of our students and educators. Each issue of
            "Transformateur" features a collection of thought-provoking
            articles, scholarly papers, captivating artworks, poetry, and more,
            highlighting the intellectual and artistic expressions of our
            school's community. Our journal also acts as a bridge, connecting
            Assumption Iloilo with the wider academic and creative community. By
            providing a space for sharing ideas and knowledge, "Transformateur"
            contributes to the enrichment of the academic landscape and promotes
            interdisciplinary collaborations. Whether you are a student, an
            educator, a parent, or a member of the broader community, we invite
            you to delve into the pages of "Transformateur" and witness the
            transformational journey that unfolds within our school. We hope
            that this publication inspires and motivates readers to explore new
            realms of thought, embrace their passions, and make a positive
            impact on the world.
          </p>
          <p className="indent-10">
            Join us as we embark on a voyage of knowledge, creativity, and
            inspiration with "Transformateur: The Official Journal Publication
            of Assumption Iloilo." Together, let us celebrate the power of
            education in transforming lives and shaping a brighter future.
          </p>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      a: 1,
    },
  };
}

AboutPage.getLayout = (page) => <VerticalLayout>{page}</VerticalLayout>;
export default AboutPage;
