import { getSanityClient } from '@/lib/sanity';
import * as queries from './queries';

// Fetch all dynamic docs
export async function getAllDocSlugs(doc) {
  const data = await getSanityClient().fetch(
    `*[_type == "${doc}" && !(_id in [
      ${queries.homeID}, 
      ${queries.errorID}]) && wasDeleted != true && isDraft != true]{ "slug": slug.current }`
  );
  return data;
}

// Fetch all our page redirects
export async function getAllRedirects() {
  const data = await getSanityClient().fetch(
    `*[_type == "redirect"]{ from, to }`
  );
  return data;
}

// Fetch a static page with our global data
export async function getStaticPage(pageData, preview) {
  const templateSlugQuey = `*[_type == "page" && _id == ${queries.homeID}][0].pageTemplate`;
  const templateSlug = await getSanityClient(preview).fetch(templateSlugQuey);
  const pageTemplateKey = `template_${templateSlug}`;

  const pageQueryData = pageData
    ? pageData
    : `*[_type == "page" && _id == ${queries.homeID}] | order(_updatedAt desc)[0]{
          pageTemplate,
          "pageMainData": select(
            pageTemplate == 'default' => {
              modules[]{
                defined(_ref) => { ...@->content[0] {
                  ${queries.modules}
                }},
                !defined(_ref) => {
                  ${queries.modules},
                }
              },
            },
            ${pageTemplateKey}
          ),      
          title,
          seo
        }`;

  const query = `
    { 
      "page": ${pageQueryData},
      ${queries.site}
    }
  `;

  const data = await getSanityClient(preview).fetch(query);

  return data;
}

// Fetch a specific dynamic page with our global data
export async function getPage(slug, preview) {
  const slugs = [`/${slug}`, slug, `/${slug}/`];
  const pageTemplateSlug = `template_${slug}`;

  const query = `
    {
      "page": *[_type == "page" && slug.current in ${JSON.stringify(
        slugs
      )}] | order(_updatedAt desc)[0]{             
        pageTemplate,
        "pageMainData": select(
          pageTemplate == 'default' => {
            modules[]{
             defined(_ref) => { ...@->content[0] {
                ${queries.modules}
              }},
              !defined(_ref) => {
                ${queries.modules},
              }
            },           
          },
          ${pageTemplateSlug} 
        ),
        title,
        seo,
      },
      ${queries.site}
    }
    `;

  const data = await getSanityClient(preview).fetch(query);

  return data;
}

export { queries };
