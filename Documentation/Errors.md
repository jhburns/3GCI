# Errors

This site is designed to handle error is the most user friendly way possible and heavily favors back-end error over front end.

## Back-end
These can be caused is a couple of ways. Check these errors anywhere from the travis badge/link.

1. Npm/yarn doesn't install packages correctly. This can be fixed by updating packages or adding extra dependencies. In extreme cases like `imagemin-mozjpeg` apt-get may be needed to install packages to install.
1. Webpack error. These are generally caused by incorrectly made configs. FIx and rerun.
1. Hugo error. These can be syntax error, or content error. Fix syntax or add needed content and rerun.

For all back-end error, these will not be shown to the end-user and instead are not build and deployed by netlify. As a result Admin can take their time to fix.

## Front-end
As a principle, front end error messages should be as rare as possible, used only when basically unavoidable. For example, if the main.css file is not available, there isn't anything that can be done for the user.
There are two types of general front-end errors.

1. Important file not found. No .html file, .css file etc.
1. Nothing in range. When hugo is rendering the site a range is used to get content from the blogs, there are multiple reasons why n content can be generated.
available 

### Error message
For each of these types a good message should still be delivered.
Format ```Error[optional]: [description of content not available]. Please contact Admin to [add content, optional] and then restart [yarn and/or hugo server].```

Example ```Error: no tips. contact Admin to check icons, add blog, and restart hugo server```

The reason for this structure is to inform the user is a simple and concise manner, then tell the Admin who is likely reading the message what to do to fix.

Do NOT use numbers as a part of error code. They are unnecessary and confusing.

### 404
404 not found is a classic error message and is delivered whenever a url is not possible. The content of the 404 page is found at */themes/GCI/layouts/404.html*.

Whether this document is shown on an bad url (other than site.com/404.html) is server dependant. The local hugo server does not server it for any bad url and instead gives a simple text message. However Netlify does server it for any bad url, which is good.

It is important to not give users bad urls, possible areas where this could happen:

- *config.toml* may use a bad variable, including BaseURL
-  *$nav.links* may have a bad link/text pair, also in *config.toml*
-  *.Slug* may not exist/have text and as a result will not point to the right blog. Fix the blog's `slug` config option then.

### Existence Checking
The website is largely designed not link to content that does not exist, using hugo's `fileExists` function. This prevents console errors.

If a file does not exist, the html needed to use it won't either in general. For example scripts.js may not load, and it is then not served without error because it is not page critical.

The reasoning to not server some content without error is because it is not page critical so it is not needed. 

## Non-local Scripts
Currently third-party loaded scripts (jQuery, poppers, bootstrap etc.) are not checked to see if loading on their own CDN. Their uptime is instead trusted to always be up.

## Thumbnails
Because it is a custom, hackish script there are a lot of possible error is can create. Make sure data is formatted correctly and urls are reachable.

If this is not run before build scripts or it fails before a build, the whole thing will fail so be cautious.

It is not designed to throw an error if no image is suitable for a webpage, but will instead not print the first 'done'.

## Searching Errors
Due to the nature of the site, searching can be very inconsistent. Details and reasoning are given in the *Search.md* doc, but here are some issue that could happen.

- Can't input: Likely caused by not putting in more than 1 character, but also can be from the front-end search script being broken
- No Results: Not itself and error, but there should also be a good message displayed
- Wrong input: Because there are three input boxes a user may be able to input something into one and click the button for another which can be confusing. If this is enough of a problem, the script should be changed
- Don't have the .json file: Either an issue with hugo or grunt. Check if either have errors on build.
- No content: Grunt is likely reading the wrong dir.

    