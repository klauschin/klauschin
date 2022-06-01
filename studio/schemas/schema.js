// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Document types
import page from './documents/page';
import filter from './documents/filter';
import solidColor from './documents/color';

import generalSettings from './documents/settings-general';
import cookieSettings from './documents/settings-cookie';
import promoSettings from './documents/settings-promo';
import headerSettings from './documents/settings-header';
import footerSettings from './documents/settings-footer';

import seoSettings from './documents/settings-seo';
import menu from './documents/menu';
import redirect from './documents/redirect';

// Module types
import grid from './modules/grid';
import hero from './modules/hero';
import marquee from './modules/marquee';
import dividerPhoto from './modules/divider-photo';
import newsletter from './modules/newsletter';

// Object types
import gridColumn from './objects/grid-column';
import gridSize from './objects/grid-size';
import seo from './objects/seo';

import navDropdown from './objects/nav-dropdown';
import navPage from './objects/nav-page';
import navLink from './objects/nav-link';
import socialLink from './objects/social-link';
import horizontalRule from './objects/horizontal-rule';

import simplePortableText from './objects/portable-simple';
import complexPortableText from './objects/portable-complex';

import freeform from './objects/freeform';
import accordions from './objects/accordions';
import accordion from './objects/accordion';

import participant from './objects/participant';
import callToAction from './objects/cta';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* 1: Document types */
    page,
    filter,
    solidColor,

    generalSettings,
    cookieSettings,
    promoSettings,
    headerSettings,
    footerSettings,

    seoSettings,
    menu,
    redirect,

    /* 2: Module types */
    grid,
    hero,
    marquee,
    dividerPhoto,
    newsletter,

    gridColumn,
    gridSize,
    seo,

    navDropdown,
    navPage,
    navLink,
    socialLink,
    horizontalRule,

    simplePortableText,
    complexPortableText,

    freeform,
    accordions,
    accordion,

    participant,
    /* Your types here! */

    callToAction,
  ]),
});
