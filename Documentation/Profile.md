# Profile
Make a new blank person file with `yarn new-pepe [firstintial, lastname]`, Ex: `yarn new-pepe jburns` then go into */data/people* to edit it.

Everyone should have a profile in the about section which consists of an image, name, title(position), and email.

## File Contents

- This is roughly what a new blank file will look like: 
```
name = ""
title = ""
email = ""
img = ""
description = ""
weight = [integer, not 0 or 1]
enable_email = true
``` 

- Fill in the information, it is recommended to put "[at]" instead of @ in the email to prevent spam. Ex:

```
name = "Jonathan Burns"
title = "Website Head Developer"
email = "jburns [at] gmail.com"
img = "jburns.jpg"
description = "He is dedicated to providing a good experience through this website and integration with the orientation workshop. His main focus is on creating, maintaining, and providing support to other memebers with the website, but he also helps with project management and the workshop."
weight = 1
enable_email = true
```
- Make sure the weight is higher than 1
- Add the image to *./themes/GCI/scr/img/profile* are run/restart yarn with `yarn run watch` to see the changes.

## Image tips
To make sure your face displays in the picture properly it is recommended that the image added is a square or close to it. The bottom of the image is automatically cropped off if not a square.

Use [GIMP](https://docs.gimp.org/en/gimp-tutorial-quickie-crop.html) for a free and easy way to crop.

## Content
Besides the profiles on the about section, content can be added to */content/about.md* under the config section like a normal blog.

## Advanced
The description only shows up on larger sized screens or larger to save space. 

The default template is in the parent folder */data*, called *people_template.toml.ig* and is copied into the correct folder with the file_copy script.