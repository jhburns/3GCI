# Netlify
Check it out at https://relaxed-keller-2816e7.netlify.com/ (Disable/Clear cache if not updating)

## What
Handling hosting and building for the website automatically on github push

 - *netlify.toml* tells it what version of hugo to use.
 - Team version is paid so only Jonathan can see build information
 - Build command is `npm test; hugo`
 - Publishes from directory `public`

## Why
It is free and very fast. 

## Advanced

*_headers* file tells netlify to cache most static assets for a week or year. Main content is uncached to deliver new content as fast as possible.
See https://play.netlify.com/ to check if the header rules are valid.