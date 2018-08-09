# Profile
Everyone should have a profile in the about section which consists of an image, name, title(position), and email

## Make a new one

- Go to *./data/people* and make a new *.toml* file with any filename. [first initial][last name].toml is recommended.Ex jburns.toml
- Next, copy this into the new file:

```
name = ""
title = ""
email = ""
img = ""
weight = [integer, not 0]
enable_email = true
``` 
- Fill in the information, it is recommended to put "[at]" instead of @ in the email to prevent spam. Ex:
```
name = "Jonathan Burns"
title = "Website Head Developer"
email = "jburns [at] gmail.com"
img = "jburns.jpg"
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