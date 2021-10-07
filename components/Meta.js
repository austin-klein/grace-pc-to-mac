import Head from "next/head";

export default function Meta({ title, keywords, description }) {
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="MobileOptimized" content="320" />
            <meta name="HandheldFriendly" content="true" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="canonical" href="https://gracelutheranvale.com/" />
            <link rel="apple-touch-icon" href="icon.png"></link>
            <link rel="icon" href="/favicon.ico" />
            <link rel="shortcut icon" href="/favicon.ico"></link>
            <link rel="preload" href="/logo.png" />
            <link rel="prefetch" href="/church-2.jpeg" as="image" />
            <link rel="prefetch" href="/leadership-2.jpeg" as="image" />
            <link rel="prefetch" href="/church-4.jpeg" as="image" />
            <link rel="prefetch" href="/outreach-3.png" as="image" />
            <title>{title}</title>

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Grace Lutheran Church | Vale Oregon" />
            <meta name="twitter:description" content="We are a Lutheran Church located in Vale, Oregon. Come join us Sunday's at 11:00AM!" />
            <meta name="twitter:image" content="https://gracelutheranvale.com/og.png" />
            <meta name="twitter:url" content="https://gracelutheranvale.com/" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="Grace Lutheran Church | Vale Oregon" />
            <meta property="og:description" content="We are a Lutheran Church located in Vale, Oregon. Come join us Sunday's at 11:00AM!" />
            <meta property="og:image" content="https://gracelutheranvale.com/og.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:url" content="https://gracelutheranvale.com/" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="Grace Lutheran Vale" />
        </Head>
    );
}

Meta.defaultProps = {
    title: "Grace Lutheran Church | Vale Oregon",
    keywords:
        "Vale, Oregon, lutheran church, lhurch Vale Oregon, Lutheran Church Vale Oregon, Grace Lutheran Church, church near me, churches near me, lutheran church near me",
    description:
        "We are a Lutheran Church located in Vale, Oregon. Come join us Sunday's at 11:00AM!",
};
