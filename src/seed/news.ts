import type { Payload } from 'payload';

const NEWSTAGS_DATA = [
  {
    _id: '651d8f7e1b68165c2eda7e74',
    name: 'Research',
  },
  {
    _id: '651d8f7e1b68165c2eda7e76',
    name: 'Student Story',
  },
  {
    _id: '651d8f7e1b68165c2eda7e78',
    name: 'Science',
  },
  {
    _id: '651d8f7e1b68165c2eda7e7a',
    name: 'Medicine',
  },
  {
    _id: '651d8f7f1b68165c2eda7e7c',
    name: 'Engineering',
  },
  {
    _id: '651d8f7f1b68165c2eda7e7e',
    name: 'Technology',
  },
  {
    _id: '651d8f7f1b68165c2eda7e80',
    name: 'Climate Change',
  },
];

export async function seedNews(payload: Payload) {
  // create news tags
  await Promise.all(
    NEWSTAGS_DATA.map((data) =>
      payload.create({
        collection: 'news-tags',
        data: data,
      }),
    ),
  );

  // create news posts
  await Promise.all([
    await payload.create({
      collection: 'news',
      data: {
        title:
          'From Theory to Reality: SHS Scientific Journal Showcases Transformative Studies from Vision to Application!',
        slug: 'from-theory-to-reality-shs-scientific-journal-showcases-transformative-studies-from-vision-to-application',
        readTime: 1,
        status: 'draft',
        publishedDate: '2023-10-02T16:00:00.000+00:00',
        tags: [NEWSTAGS_DATA[0]._id, NEWSTAGS_DATA[1]._id],
        content: [
          {
            children: [
              {
                text: 'This is my content here.',
              },
            ],
          },
        ],
      },
    }),
    await payload.create({
      collection: 'news',
      data: {
        title: 'The Future of AI: A Discussion with Google AI Researchers',
        slug: 'the-future-of-ai-a-discussion-with-google-ai-researchers',
        readTime: 2,
        status: 'draft',
        publishedDate: '2023-10-02T16:00:00.000+00:00',
        tags: [NEWSTAGS_DATA[2]._id, NEWSTAGS_DATA[4]._id],
        content: [
          {
            children: [
              {
                text: "In this interview, we speak with Google AI researchers about the future of AI, including its potential to solve some of the world's most pressing problems.",
              },
            ],
          },
        ],
      },
    }),
    await payload.create({
      collection: 'news',
      data: {
        title: 'The Metaverse: What It Is and Why It Matters',
        slug: 'the-metaverse-what-it-is-and-why-it-matters',
        readTime: 4,
        status: 'draft',
        publishedDate: '2023-10-02T16:00:00.000+00:00',
        tags: [NEWSTAGS_DATA[3]._id, NEWSTAGS_DATA[1]._id],
        content: [
          {
            children: [
              {
                text: 'The metaverse is a shared virtual world that is still under development. It has the potential to revolutionize the way we work, learn, and play.',
              },
            ],
          },
        ],
      },
    }),
    await payload.create({
      collection: 'news',
      data: {
        title:
          'High School Student Wins National Science Fair Award for Research on Climate Change',
        slug: 'high-school-student-wins-national-science-fair-award-for-research-on-climate-change',
        readTime: 4,
        status: 'draft',
        publishedDate: '2023-10-02T16:00:00.000+00:00',
        tags: [NEWSTAGS_DATA[1]._id, NEWSTAGS_DATA[5]._id],
        content: [
          {
            children: [
              {
                text: 'A high school student has won a national science fair award for her research on climate change. The student, who is from a small town in the Midwest, developed a new model for predicting the effects of climate change on crop yields. Her research has the potential to help farmers adapt to climate change and protect their livelihoods.',
              },
            ],
          },
        ],
      },
    }),
  ]);
}
