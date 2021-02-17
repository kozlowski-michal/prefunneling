import { WhatNeeded, HaveWebsite, TeamSize } from './enums';

export const RightDialogSchemas = [{
        preTitle: "First,",
        title: "What's your name?",
        comment: "Please let us know how to address you best. We will protect your data and won’t share it anyhow.",
        input: {
            type: "text",
            name: 'name',
            placeholder: 'Name',
        }
    },{
        preTitle: "Next,",
        title: "How we can help you best?",
        input: {
            type: "checkbox",
            name: 'whatNeed',
            value: [
                WhatNeeded.CHANNELS,
                WhatNeeded.AUTOMATION,
                WhatNeeded.MANAGMENT,
            ],
        }
    },{
        preTitle: "Great,",
        title: "Do you have a website?",
        input: {
            type: "radio",
            name: 'haveWebsite',
            value: [
                HaveWebsite.YES,
                HaveWebsite.SOON,
                HaveWebsite.NO,
            ]
        }
    },{
        preTitle: "Understood,",
        title: "what size is your team?", 
        input: {
            type: "range",
            name: 'teamSize',
            min: 0,
            max: 2,
            descriptions: TeamSize,
        }
    },{
        preTitle: "Almost done,",
        title: "How can we reach you out?", 
        input: {
            type: "email",
        }

},{
    preTitle: "Done",
    title: "We will contact you soon.", 
    }
];
/*
{
        preTitle: "Great",
        title: "What do you offer?", 

    }
*/