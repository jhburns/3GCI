# Hugo
Hugo is a static site generator that is the main builder of the website. See more at https://gohugo.io/

## What
Hugo does multiple thing for us, the first is to slot all content into the proper place.

- In the *config.toml* file, text is filled into website including file locations and other variables
- Inside the partials, there are injection areas for hugo that use the `{{ }}` brackets
- Hugo also links all the partials together to form a single document from */layouts* 
- It can also be used as a server while in development and nearly instantly rebuild the website. See the first *README.me*
- Hugo inserts the compiled data from the */static* folder
- It generates new webpages from the */content* folder, specifically blogs

## Why
Hugo is very fast and because it generates a static site, there is little overhead compared to a database

## Advanced

Hugo is downloaded using a custom npm package, and is run with `yarn hugo`, although custom commands are preferred.
This package will automatically install hugo on the first usage and reads in the version from *hugo-version.json*.

# Snippets
As a subsection of partials, the snippet folder is supposed to have very short partial for repeated html. The partials here should all be passed at least 1 variable. How to call each.

- *title.html*: Created a section-header that is centered to the middle of the screen with ```{{ partial "snippets/title.html" (dict "title" .Site.Params.titlevarhere ) }}```. Example ```{{ partial "snippets/title.html" (dict "title" .Site.Params.tips.title) }}```

```  