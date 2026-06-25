import { Helmet } from 'react-helmet-async';

const defaultDescription =
  'Mihir Parida is a MERN stack developer building fast, accessible web applications with React, Node.js, Express, and MongoDB.';

const defaultKeywords = [
  'Mihir Parida',
  'MERN stack developer',
  'React developer',
  'Node.js developer',
  'Frontend engineer',
  'Portfolio',
  'Odisha India',
];

const Seo = ({
  title = 'Mihir Parida | MERN Stack Developer',
  description = defaultDescription,
  keywords = defaultKeywords,
  canonicalUrl = 'https://mihirparida.dev/',
  image = 'https://mihirparida.dev/og-image.png',
}) => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mihir Parida",
    jobTitle: "MERN Stack Developer",
    url: canonicalUrl,
    sameAs: [
      "https://github.com/Mihir09CS",
      "https://www.linkedin.com/in/mihir-parida-43b0aa295",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Gandhi Institute For Technology (GIFT Autonomous)",
    },
    knowsAbout: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Frontend Development",
      "Full Stack Development",
    ],
  };

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Mihir Parida Portfolio" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
    </Helmet>
  );
};

export default Seo;
