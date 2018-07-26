# Blog
Welcome to the blog section which will detail mostly how to make a new post.

## Getting Started

1. Make a new file in *./content/blog*. It should be in filename *[name].md* where the name is what the url link should be
1. Add the header to the file in this format:
```
    +++
    title = "Will show at the top"
    description = "Will show on the homepage"
    type = "blog"
    layout = "single"
    date = "2018-07-25"
    slug = "[name]"
    weight = 0
    +++
```
Example `passwords.md`
```
    +++
    title = "Passwords"
    description = "Learn how to keep track pf passwords."
    type = "blog"
    layout = "single"
    date = "2018-07-25"
    slug = "passwords"
    weight = 0
    +++
```
Now the blog should be available at http://localhost:1313/blog/name/ or on the site at the same reference.

## Content

After the block of plus-signs is where content is added using the Markdown language. Markdown is the same language that Github uses for READMEs and that this file is formated in. See https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet for a complete list.

Text: Just type or copy-paste it in, no change needed. Add `\&emsp;` to the beginning of text chunk to indent it

Headers(titles): Put a `#` in front of text to make it a heading. The size inversely correlates with the number of #s.
So this:
```
# Heading
## Heading
### Heading
#### Heading
##### Heading
###### Heading
```
Becomes this
# Heading
## Heading
### Heading
#### Heading
##### Heading
###### Heading

*Italics*: put `*` around text, like `*this*`

**Bold**: put two '*' around text, like `**this**`

Link: Use this formatting   `[Name](http://urlhere.com)`

Lists: There are two ways of doing this.
Ordered,
```
1. First 
1. Second
```
Becomes
1. First
2. Second

Or Unordered,
```
- First 
- Second
```
Becomes
- First 
- Second

### Images
They are also added through Markdown, but are a little more complicated.

1. First an image has to be uploaded to *./themes/GCI/scr/img/blog* and then `yarn run watch` or `yarn run make` has to be run to compress it.
1. In the blog .md file, this formatting has to be used in content to display it `![alt text](/created/img/filename.jpg "Title Text")`
1. If the image is too vertical it will display poorly so it may need to be cropped outside of the website

Don't forget to change the alt-text and title text, they are important for accessibility. 

Currently only .jpg, .png, and .svg are supported.

## Advanced Config

In earlier sections, config was briefly gone over, check here and at https://gohugo.io/content-management/front-matter/ for full config options. Here are the imporant ones.

- slug: tells hugo what to make the url, overriding the filename
- weight: in a list, tels hugo which place this blog should have. Higher is higher 
