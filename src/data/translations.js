const translations = {
    en: {
        leftDialog: {
            MarcoTitle: "Head of Customer’s success",
            questionaire: {
                askForName: "Okay!\nLet’s get started. 🤘️",
                askAboutServices: "Hej %{name}!\nNice to meet you!",
                askForWebsite: "Makes sense! 💪",
                askAboutTeamSize: {
                    no: <span>No website yet, okay.<br />No problem! 💪</span>,
                    soon: <span>Website soon.<br />Great! 💪</span>,
                    yes: <span>Website present.<br />Great! 💪</span>,
                },
                askAboutOffer: "That’s a big team already, exciting! 💪",
                askForContact: "Great choice!",
                done: "Ready. Create your account to be the next in line! 🤙",
                haveWebsite: {
                    yes: "Yes, I have website already!",
                    soon: "I have no website, but I’m on it.",
                    no: "I have no website yet and want help."
                },
                selections: "Selections:",
            },
            dashboard: {
                title: "We will reach out soon!",
                message: <span>Feel free to start your account configuration.<br />The more data you fill out, the faster we can process your account!</span>,
            }
        },
        questionaire: {
            askForName: {
                pretitle: "First,",
                title: "What's your name?",
                message: <span>Please let us know how to address you best.<br /> We will protect your data and won’t share it anyhow.</span>,
            },
            askAboutServices: {
                pretitle: "Next,",
                title: "How we can help you best?",
                need: "I need ... ",
            },
            askForWebsite: {
                pretitle: "Great,",
                title: "Do you have a website?",
            },
            askAboutTeamSize: {
                pretitle: "Understood,",
                title: "What size is your team?",
                message: "Based on your team size we can offer you advanced cooperation features.",
            },
            askAboutOffer: {
                pretitle: "Great,",
                title: "What do you offer?",
            },
            askForContact: {
                pretitle: "Almost done,",
                title: "How can we reach you out?",
            },
            done: {
                pretitle: "That's it!",
                message: <span><strong>Please validate your e-mail address.</strong><br />We will reach out to you afterwards and help you setting up your account.</span>
            },
            servicesNeeded: {
                channels: "Online booking channels",
                automation: 'Order handling automation',
                managment: 'Inventory management',
            },
            website: {
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
            ssl: "SSL encrypted",
        },
        dashboard: {
            customer: {
                title: "Your data",
                name: "Name",
                email: "E-mail",
                phone: "Phone",
            },
            company: {
                title: "Company data",
                name: "Company name",
                industry: "Industry",
                address: "Address",
                street: "Street + Number",
                street2: "Address 2",
                city: "City",
                zip: "Zip code",
                country: "Country",
                teamsize: "Team size",
            },
            booking: {
                title: "Booking",
            },
            features: {
                title: "Features",
            },
            errors: {
                noName: "Your name could not be empty",
                noEmail: "Please, write your email adress",
            }
        }
    },
    de: {
        leftDialog: {
            MarcoTitle: "Head of Customer’s success(DE)",
            questionaire: {
                askForName: <span>Okay! <br />Let’s get started. 🤘️(DE)</span >,
                askAboutServices: "Hej %{name}!\nNice to meet you!(DE)",
                askForWebsite: "Makes sense! 💪(DE)",
                askAboutTeamSize: {
                    no: <span>No website yet, okay.<br />No problem! 💪(DE)</span>,
                    soon: <span>Website soon.<br />Great! 💪(DE)</span>,
                    yes: <span>Website present.<br />Great! 💪(DE)</span>,
                },
                askAboutOffer: "That’s a big team already, exciting! 💪(DE)",
                askForContact: "Great choice!(DE)",
                done: "Ready. Create your account to be the next in line! 🤙(DE)",
                haveWebsite: {
                    yes: "Yes, I have website already!(DE)",
                    soon: "I have no website, but I’m on it.(DE)",
                    no: "I have no website yet and want help.(DE)"
                },
                selections: "Selections:(DE)",
            },
            dashboard: {
                title: "We will reach out soon!(DE)",
                message: <span>Feel free to start your account configuration.<br />The more data you fill out, the faster we can process your account!(DE)</span>,
            }
        },
        questionaire: {
            askForName: {
                pretitle: "First,(DE)",
                title: "What's your name?(DE)",
                message: <span>Please let us know how to address you best.<br /> We will protect your data and won’t share it anyhow.(DE)</span>,
            },
            askAboutServices: {
                pretitle: "Next,(DE)",
                title: "How we can help you best?(DE)",
                need: "I need ... (DE)",
            },
            askForWebsite: {
                pretitle: "Great,(DE)",
                title: "Do you have a website?(DE)",
            },
            askAboutTeamSize: {
                pretitle: "Understood,(DE)",
                title: "What size is your team?(DE)",
                message: "Based on your team size we can offer you advanced cooperation features.(DE)",
            },
            askAboutOffer: {
                pretitle: "Great,(DE)",
                title: "What do you offer?(DE)",
            },
            askForContact: {
                pretitle: "Almost done,(DE)",
                title: "How can we reach you out?(DE)",
            },
            done: {
                pretitle: "That's it!(DE)",
                message: <span><strong>Please validate your e-mail address.</strong><br />We will reach out to you afterwards and help you setting up your account.(DE)</span>
            },
            servicesNeeded: {
                channels: "Online booking channels(DE)",
                automation: 'Order handling automation(DE)',
                managment: 'Inventory management(DE)',
            },
            website: {
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
        },
        dashboard: {
            customer: {
                title: "Your data(DE)",
                name: "Name(DE)",
                email: "E-mail(DE)",
                phone: "Phone(DE)",
            },
            company: {
                title: "Company data(DE)",
                name: "Company name(DE)",
                industry: "Industry(DE)",
                address: "Address(DE)",
                street: "Street + Number(DE)",
                street2: "Address 2(DE)",
                city: "City(DE)",
                zip: "Zip code(DE)",
                country: "Country(DE)",
                teamsize: "Team size(DE)",
            },
            booking: {
                title: "Booking(DE)",
            },
            features: {
                title: "Features(DE)",
            },
            errors: {
                noName: "Your name could not be empty(DE)",
                noEmail: "Please, write your email adress(DE)",
            }
        }
    }
}

export default translations;
