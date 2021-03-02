/* This object is sent to backend */
export const questionaireDataModel = {
    language: "en",
    name: "",
    servicesNeeded: {
        channels: false,
        automation: false,
        managment: false,
    },
    website: "yes",
    teamSize: "2-5",
    offer: {
        bikes: false,
        photo: false,
        transport: false,
        cars: false,
        machines: false,
        activities: false,
        boats: false,
        ceremonial: false,
        other: false,
    },
    email: "",
    phone: "",
};

export const dashboardDataModel = {
    customer: {
        name: "John Olsson",
        email: "johns@mail.no",
        phone: ""
    },
    company: {
        name: "John's yachts",
        street: "Tore Hunds gate 5",
        secondaryAdress: "",
        city: "Mosjøen",
        zip: "8657 ",
        country: "Norway",
        teamsize: "2-5",
        industry: {
            bikes: false,
            photo: false,
            transport: false,
            cars: false,
            machines: false,
            activities: true,
            boats: true,
            ceremonial: false,
            other: false,
        }
    },
    booking: {
        website: "yes",
        url: "www.johnsboats.no",
        color: {
            font: "#000000",
            button: "#00CCEE",
        },
        logo: "",
    },
    features: {
        channels: {
            integration: true,
            payments: false,
            shop: true,
            smoobu: false,
        },
        automation: {
            checkInOut: true,
            damage: false,
            request: false,
        },
        managment: {
            variations: true,
            tracing: false,
            codes: false,
        }
    }
}