import { Steps } from "./enums";

const translations = {
    en: {
        leftDialog: {
            [Steps.AskForName]:  <span>Okay! <br/>Let’s get started. 🤘️</span>,
            [Steps.AskAboutServices]: { 
                line1: "Hej %{name}!",
                line2: "Nice to meet you!",
            },  
            [Steps.AskForWebsite]: {
                caseAll: "All of them, makes sense! 💪",
                default: ", makes sense!",
            },
            [Steps.AskAboutTeamSize]: {
                no: <span>No website yet, okay.<br/>No problem! 💪</span>,
                soon: <span>Website soon.<br/>Great! 💪</span>,
                yes: <span>Website present.<br/>Great! 💪</span>,
            },
            [Steps.AskAboutOffer]: "That’s a big team already, exciting! 💪",
            [Steps.AskForContact]: "Great choice!",
            [Steps.Done]: "See you soon! 🤘️",
            selections: "selections",
        },
        rightDialog: {
            [Steps.AskForName]: {
                pretitle: "First,",
                title: "What's your name?",
                message: "Please let us know how to address you best. We will protect your data and won’t share it anyhow.",
            },
            [Steps.AskAboutServices]: {
                pretitle: "Next,",
                title: "How we can help you best?",
            },
            [Steps.AskForWebsite]: {
                pretitle: "Great,",
                title: "Do you have a website?",
            },
            [Steps.AskAboutTeamSize]: {
                pretitle: "Understood,",
                title: "What size is your team?",
                message: "Based on your team size we can offer you advanced cooperation features.",
            },
            [Steps.AskAboutOffer]: {
                pretitle: "Great,",
                title: "What do you offer?",
            },
            [Steps.AskForContact]: {
                pretitle: "Almost done,",
                title: "How can we reach you out?",
            },
            servicesNeeded: {
                channels: "Online booking channels",
                automation: 'Order handling automation',
                managment: 'Inventory management',               
            },
            haveWebsite: {
                yes: "Yes, I have one already!",
                soon: "No, but I’m on it.",
                no: "I have no website yet and want help."
            },
            offer: {
                bikes: 'Bikes/ Scooters',
                photo: 'Photo/ Film',
                transport: 'Transport',
                cars: 'Cars/ RVs',
                machines: 'Machines',
                activities: 'Activities',
                boats: 'Boats / Yachts',
                ceremonial: 'Ceremonial',
                other: 'Other',
            },
            placeholders: {
                name: "Name",
                email: "Email",
                phone: "Phone (optional)",
            },
            errors: {
                noName: "Please, write your name",
                noEmail: "Please, write your email adress",
                oneCheck: "Please, select at least one option",
            },
            ssl : "SSL encrypted",
            seeYou: "We will contact with you soon!",
        }
    },
    de: {
        leftDialog: {
            [Steps.AskForName]:  <span>Okay! <br/>Let’s get started. 🤘️(DE)</span>,
            [Steps.AskAboutServices]: { 
                line1: "Hej %{name}!(DE)",
                line2: "Nice to meet you!(DE)",
            },  
            [Steps.AskForWebsite]: {
                caseAll: "All of them, makes sense! 💪(DE)",
                default: ", makes sense!(DE)",
            },
            [Steps.AskAboutTeamSize]: {
                no: <span>No website yet, okay.<br/>No problem! 💪(DE)</span>,
                soon: <span>Website soon.<br/>Great! 💪(DE)</span>,
                yes: <span>Website present.<br/>Great! 💪(DE)</span>,
            },
            [Steps.AskAboutOffer]: "That’s a big team already, exciting! 💪(DE)",
            [Steps.AskForContact]: "Great choice!(DE)",
            [Steps.Done]: "See you soon! 🤘️(DE)",
            selections: "selections(DE)",
        },
        rightDialog: {
            [Steps.AskForName]: {
                pretitle: "First,(DE)",
                title: "What's your name?(DE)",
                message: "Please let us know how to address you best. We will protect your data and won’t share it anyhow.(DE)",
            },
            [Steps.AskAboutServices]: {
                pretitle: "Next,(DE)",
                title: "How we can help you best?(DE)",
            },
            [Steps.AskForWebsite]: {
                pretitle: "Great,(DE)",
                title: "Do you have a website?(DE)",
            },
            [Steps.AskAboutTeamSize]: {
                pretitle: "Understood,(DE)",
                title: "What size is your team?(DE)",
                message: "Based on your team size we can offer you advanced cooperation features.(DE)",
            },
            [Steps.AskAboutOffer]: {
                pretitle: "Great,(DE)",
                title: "What do you offer?(DE)",
            },
            [Steps.AskForContact]: {
                pretitle: "Almost done,(DE)",
                title: "How can we reach you out?(DE)",
            },
            servicesNeeded: {
                channels: "Online booking channels(DE)",
                automation: 'Order handling automation(DE)',
                managment: 'Inventory management(DE)',               
            },
            haveWebsite: {
                yes: "Yes, I have one already!(DE)",
                soon: "No, but I’m on it.(DE)",
                no: "I have no website yet and want help.(DE)"
            },
            offer: {
                bikes: 'Bikes/ Scooters(DE)',
                photo: 'Photo/ Film(DE)',
                transport: 'Transport(DE)',
                cars: 'Cars/ RVs(DE)',
                machines: 'Machines(DE)',
                activities: 'Activities(DE)',
                boats: 'Boats / Yachts(DE)',
                ceremonial: 'Ceremonial(DE)',
                other: 'Other(DE)',
            },
            placeholders: {
                name: "Name(DE)",
                email: "Email(DE)",
                phone: "Phone (optional)(DE)",
            },
            errors: {
                noName: "Please, write your name(DE)",
                noEmail: "Please, write your email adress(DE)",
                oneCheck: "Please, select at least one option(DE)",
            },
            ssl : "SSL encrypted(DE)",
            seeYou: "We will contact with you soon!(DE)",
        }
    }
}

export default translations;
