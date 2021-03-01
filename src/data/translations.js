import { Steps } from "../Modules/Questionaire/data/enums";

const translations = {
    en: {
        leftDialog: {
            [Steps.AskForName]: <span>Okay! <br />Let’s get started. 🤘️</span>,
            [Steps.AskAboutServices]: {
                line1: "Hej %{name}!",
                line2: "Nice to meet you!",
            },
            [Steps.AskForWebsite]: {
                caseAll: "All of them, makes sense! 💪",
                default: ", makes sense!",
            },
            [Steps.AskAboutTeamSize]: {
                no: <span>No website yet, okay.<br />No problem! 💪</span>,
                soon: <span>Website soon.<br />Great! 💪</span>,
                yes: <span>Website present.<br />Great! 💪</span>,
            },
            [Steps.AskAboutOffer]: "That’s a big team already, exciting! 💪",
            [Steps.AskForContact]: "Great choice!",
            [Steps.Done]: "Ready. Create your account to be the next in line! 🤙",
            selections: "Selections:",
            MarcoTitle: "Head of Customer’s success",
            dashboard: {
                title: "We will reach out soon!",
                message: <span>Feel free to start your account configuration.<br />The more data you fill out, the faster we can process your account!</span>,
            }
        },
        rightDialog: {
            [Steps.AskForName]: {
                pretitle: "First,",
                title: "What's your name?",
                message: <span>Please let us know how to address you best.<br /> We will protect your data and won’t share it anyhow.</span>,
            },
            [Steps.AskAboutServices]: {
                pretitle: "Next,",
                title: "How we can help you best?",
                need: "I need ... ",
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
            [Steps.Done]: {
                pretitle: "That's it!",
                message: <span><strong>Please validate your e-mail address.</strong><br />We will reach out to you afterwards and help you setting up your account.</span>
            },
            servicesNeeded: {
                channels: "Online booking channels",
                automation: 'Order handling automation',
                managment: 'Inventory management',
            },
            haveWebsite: {
                yes: "Yes, I have website already!",
                soon: "I have no website, but I’m on it.",
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
            ssl: "SSL encrypted",
        }
    },
    de: {
        leftDialog: {
            [Steps.AskForName]: <span>Okay! <br />Let’s get started. 🤘️(DE)</span>,
            [Steps.AskAboutServices]: {
                line1: "Hej %{name}!(DE)",
                line2: "Nice to meet you!(DE)",
            },
            [Steps.AskForWebsite]: {
                caseAll: "All of them, makes sense! 💪(DE)",
                default: ", makes sense!(DE)",
            },
            [Steps.AskAboutTeamSize]: {
                no: <span>No website yet, okay.<br />No problem! 💪(DE)</span>,
                soon: <span>Website soon.<br />Great! 💪(DE)</span>,
                yes: <span>Website present.<br />Great! 💪(DE)</span>,
            },
            [Steps.AskAboutOffer]: "That’s a big team already, exciting! 💪(DE)",
            [Steps.AskForContact]: "Great choice!(DE)",
            [Steps.Done]: "Ready. Create your account to be the next in line! 🤙(DE)",
            selections: "Selections(DE):",
            MarcoTitle: "Head of Customer’s success(DE)",
            dashboard: {
                title: "We will reach out soon!(DE)",
                message: <span>Feel free to start your account configuration.<br />The more data you fill out, the faster we can process your account!(DE)</span>,
            }
        },
        rightDialog: {
            [Steps.AskForName]: {
                pretitle: "First,(DE)",
                title: "What's your name?(DE)",
                message: <span>Please let us know how to address you best.<br /> We will protect your data and won’t share it anyhow.(DE)</span>,
            },
            [Steps.AskAboutServices]: {
                pretitle: "Next,(DE)",
                title: "How we can help you best?(DE)",
                need: "I need ... (DE)",
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
            [Steps.Done]: {
                pretitle: "That's it!(DE)",
                message: <span><strong>Please validate your e-mail address.</strong><br />We will reach out to you afterwards and help you setting up your account.(DE)</span>
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
            ssl: "SSL encrypted(DE)",
        }
    }
}

export default translations;
