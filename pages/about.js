import styles from '../styles/Main.module.scss';
import Meta from '../components/Meta';

export default function about() {
  return (
    <>
      <Meta title='Grace Lutheran Church | About' />
      <main>
        <div className={styles.topAbout}>
          <h1>About</h1>
        </div>
        <section className={styles.about}>
          <h1>Our Mission</h1>
          <p>
            Our mission is to share the light and act with love toward others. We carry it out by
            supporting educational opportunities at our local schools, partnering with county
            organizations to support foster kids, and donating food to a new homeless shelter in
            Ontario. Two local Scout troops use our church for their weekly meetings.
          </p>
          <p>
            Since we don&apos;t have a lot of administrative costs, we decide as a congregation
            where our pooled offerings should be directed that month, along with our prayers and
            love. Here in a small town in the midst of a big agricultural county, we welcome
            everyone to celebrate God&apos;s grace! Jesus built community so successfully that right
            now, in the year 2020, in a tiny town in Eastern Oregon we are all gathered here today.
            Join us! COME AND SEE. As powerful an invitation today as it was 2000 years ago!
          </p>
          <p>
            Grace Lutheran was built by community volunteers back in 1955, and our weekly worship
            services are centered around traditional liturgy and sharing God&apos;s loving word. We
            are one of
            <a href='http://oregonsynod.org/' target='_blank' rel='noreferrer'>
              116 ELCA churches in the Oregon Synod.
            </a>
          </p>
        </section>
        <div className={styles.topTwoAbout}>
          <h1>History</h1>
        </div>
        <section className={styles.about}>
          <h1>History</h1>
          <p>
            April 23, 1950 was the beginning of Grace Lutheran Church. Pastor Sherwin Schmidt from
            Faith Lutheran Church in Nyssa, OR, held services at what is today the Willowcreek
            Community Church. Called the Vale Preaching Place, Reverend Theo Brackman and Reverend
            TM. Gebhard shared leadership and led worship.
          </p>
          <p>
            After several meeting places, by 1954 the congregation became Grace Lutheran Church and
            met at the Vale Grange Hall. Their ministry was part of a two-point parish with Faith
            Lutheran Church in Nyssa. On March 13, 1955, ground was broken for the Grace Lutheran
            Church building in Vale. Built almost entirely by volunteer labor of the congregation
            and many friends, construction came to a near standstill each summer as the pressing
            needs of farm and field were met. Most construction was done in the fall and in the
            winter, often under severe weather conditions. On February 16, 1958, the new sanctuary
            was dedicated by Rev. John Briehl. By June 1967, Grace Lutheran Churches mortgage was
            paid in full.
          </p>
          <p>
            In November 1975, under the leadership of Reverend Walter Schmidt, ground was broken for
            an addition that would include the Sunday School space, a pastors study, and fellowship
            hall. In the following years, cement walkways, sidewalks, and a parking pad were added
            around the building. When the Nyssa congregation closed, Faith Lutheran gifted their
            paraments and other church furnishings to Grace Lutheran.
          </p>
          <p>
            As the years have gone by, Grace Lutheran has continued to be active in fellowship,
            programs, worship, and outreach to the Vale community. They remain connected to and
            involved with the wider church, the Evangelical Lutheran Church in America (ELCA), and
            its many opportunities for ministry and missions. Grace Lutheran looks forward to more
            years of ministry and service together as a part of the body of Christ in Vale, Oregon.
          </p>
        </section>
      </main>
    </>
  );
}
