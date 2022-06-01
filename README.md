# Sanity + Next.js + Vercel Starter Template

> A example of a Vercel-deployable project with a [Next.js](https://nextjs.org/) frontend and a [Sanity Studio](https://www.sanity.io) on /studio

## 📃 Set Up

Clone this repository from your GitHub or Click [Use this template](https://github.com/View-Source-Dev/starter-next-js-sanity/generate).

### 1) Sanity

1. If you don't have the [Sanity CLI](https://www.sanity.io/docs/getting-started-with-sanity-cli) installed, first run `npm install -g @sanity/cli` to install it globally
2. `npm install && sanity init` in the `/studio` folder
3. During Sanity's initalization it will warn you, type `Y` and hit `enter`:

```
? The current folder contains a configured Sanity studio. Would you like to reconfigure it? (Y/n)
```

4. When it asks you what dataset configuration to use, go with the `default`
5. Add CORS Origins to your newly created Sanity project (visit: [manage.sanity.io](https://manage.sanity.io) and go to Settings > API): - Add your Studio URLs **_with_** credentials: `http://localhost:3333` and `[subdomain].sanity.studio` - Add your front-end URLs **_without_** credentials: `http://localhost:3000` and `https://[subdomain].vercel.app`
   > ⚠️ **Important!** <br />For "singleton" documents, like settings sections, the schema uses a combination of `__experimental_actions` and the new [actions resolver](https://www.sanity.io/docs/document-actions). If you are using this outside of the official Sanity Starter, you will need to comment out the `__experimental_actions` line in "singleton" schemas to publish settings for the first time. This is because a singleton is still a document type, and one needs to exist first before it can be edited. Additionally, if you want to create additional "singleton" schemas, be sure to edit the `singletons` array in the following file: `/studio/parts/resolve-actions.js`.

### 2) NextJS

1. `npm install` in the project root folder on local
2. Create an `.env.local` file in the project folder, and add the following variables:

```
NEXT_PUBLIC_SANITY_PROJECT_DATASET=production
NEXT_PUBLIC_SANITY_PROJECT_ID=XXXXXX
NEXT_PUBLIC_SANITY_API_TOKEN=XXXXXX

// Needed for Klaviyo forms:
KLAVIYO_API_KEY=XXXXXX

// Needed for Mailchimp forms:
MAILCHIMP_API_KEY=XXXXXX-usX
MAILCHIMP_SERVER=usX

// Needed for SendGrid forms:
SENDGRID_API_KEY=XXXXXX
```

3. Update all the `XXXXXX` values, here's where to find each:

- `SANITY_PROJECT_ID` - You can grab this after you've initalized Sanity, either from the `studio/sanity.json` file, or from your Sanity Manage dashboard
- `SANITY_API_TOKEN` - Generate an API token for your Sanity project. Access your project from the Sanity Manage dashboard, and navigate to: "Settings" -> "API" -> "Add New Token" button. Make sure you give `read + write` access!
- `KLAVIYO_API_KEY` - Create a Private API Key from your Klaviyo Account "Settings" -> "API Keys"
- `MAILCHIMP_API_KEY` - Create an API key from "Account -> "Extras" -> API Keys
- `MAILCHIMP_SERVER` - This is the server your account is from. It's in the URL when logged in and at the end of your API Key
- `SENDGRID_API_KEY` - Create an API key from "Settings" -> "API Keys" with "Restricted Access" to only "Mail Send"

# 🏃🏻‍♂️Getting Started

`npm run dev` in the project folder to start the front end locally

- Your front end should be running on [http://localhost:3000](http://localhost:3000)

- Your Sanity Studio should be running on [http://localhost:3333](http://localhost:3333)
  > ⚠️ **Gotcha!** <br />If you did not manually set up your project, the `projectId` in `/studio/sanity.json` will still be set to the starter-next-js-sanity demo project. Make sure to update this before starting the studio, otherwise you will be denied access when trying to access your studio.

<br />

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

# 🚀 Deployment

### Vercel

This is setup to work seamlessly with Vercel, which I highly recommend as your hosting provider of choice. Simply follow the on-screen instructions to setup your new project, and be sure to **add the same `.env.local` variables to your Vercel Project**

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Sanity

This is an easy one, you can simply run `sanity deploy` from the `/studio` folder in your project. Select a subdomain you want; your Studio is now accessible from the web. This is where I'll invite the client to manage the project so they can both add billing info and begin editing content.

<br />

# 💡 Extras/Tips

<details>
<summary><strong>Error: Failed to communicate with the Sanity API</strong></summary>

If you get this error in your CLI, you need to logout and log back in again. Simply do `sanity logout` and then `sanity login` to fix.

</details>

<details>
<summary><strong>How can I see the bundle size of my website?</strong></summary>

Simply run `npm run analyze` from the project folder. This will run a build of your site and automatically open the [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) visuals for your site's build files.

</details>

<br />
