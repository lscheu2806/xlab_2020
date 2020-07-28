# Magpie and implementation
This folder consists of the whole implementation of the study (pilot + main). The study was implemented in [magpie](https://magpie-ea.github.io/magpie-site/), using JavaScript.

## Custom styles
The css file allows to create custom styles for all the classes we used. We only changed *.magpie-response-picture img* to make the pictures appear bigger.

## Custom functions
If needed, custom functions could be implemented. In our case: *scenario*, a function which generates the IDs, a time limiting function and a check response function.

## Custom views templates
In this file a template can be created. It is used to make the trials look like the author wants them to.

## Trials
Put in here all the different trials. This included all 9 different sentences:
*"The boxes were heavy / tall / big.*
*"The boxes **each** were heavy / tall / big."*
*"The boxes **together** were heavy / tall / big."*

The trials looked like this: ![trial view](/experiments/02_main/implementation/magpie/Pics/trial_view.png)

## Views
All the predefined views are found here. Find out more at [magpie documentation](https://magpie-ea.github.io/magpie-docs/). We used the *intro*, *instructions*, *image_selection*, *post_test*, *thanks* view.

## Main
The main file. Without it, nothing works ;)

## Index
Click on it to see the experiment in your default browser.

## Miscellaneous
Also included in this folder are several packages we needed. npm and node among others.
