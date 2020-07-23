// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*//* ${coin} */

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Thank you for taking part in our experiment! Please press the button below to receive your instructions.
            <br />
            <br />`,
  buttonText: 'Continue'
});

var pic = 0;

if (scenario == "move"){
  pic = "Pip_dolly.png";
} else {
  pic = "Pip_nodolly.png";
};

const instructions1 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `<img src="images/` + pic + `"><br /><br />
  This is Pip. Pip's job is to ${scenario} boxes. Pip receives the boxes from a dispenser in the ceiling.
            <br />
            <br />
            `,
  buttonText: 'Continue'
});

var todo = 0;
if (scenario == "move"){
  todo = "moved";
} else {
  todo = "inspected";
}

const instructions2 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `<img src="images/Pipnjim.png" alt="Pip and Jim"> <br /><br />
        After having ${todo} a shipment of boxes, Pip tells his friend Jim about them.
            <br />
            <br />
            Your task is to help Jim understand which boxes Pip is talking about. You can choose the correct boxes by clicking on them. Press the button below to begin.`,
  buttonText: 'Begin'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.',
  buttonText: "Send"

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you once again for participating! Please press the button below to conclude the experiment.',
  prolificConfirmText: 'Finish'
});

/*

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/
*/

// Here, we initialize a normal forced_choice view
const image_selection_pip = magpieViews.view_generator("image_selection", {
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: trial_info.image_selection.length,
  // name should be identical to the variable name
  name: 'image_selection_pip',
  data: _.shuffle(trial_info.image_selection)
});
