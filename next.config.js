const path = require('path');
const sanityClient = require('@sanity/client');
const client = sanityClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2021-03-25',
});

// get redirects from Sanity for Vercel
async function fetchSanityRedirects() {
  const data = await client.fetch(
    `*[_type == "redirect"]{ from, to, isPermanent }`
  );

  const redirects = data.map((redirect) => {
    return {
      source: `/${redirect.from}`,
      destination: `/${redirect.to}`,
      permanent: redirect.isPermanent,
    };
  });

  return redirects;
}

module.exports = {
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
  async redirects() {
    const sanityRedirects = await fetchSanityRedirects();
    return sanityRedirects;
  },
};
