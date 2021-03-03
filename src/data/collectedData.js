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
    customerName: "John Olsson",
    customerEmail: "johns@mail.no",
    customerPhone: "",

    companyName: "John's yachts",
    companyStreet: "Tore Hunds gate 5",
    companySecondaryAddress: "",
    companyCity: "Mosjøen",
    companyZip: "8657",
    companyCountry: "Norway",
    companyTeamSize: "2-5",
    companyIndustry: {
        bikes: false,
        photo: false,
        transport: false,
        cars: false,
        machines: false,
        activities: true,
        boats: true,
        ceremonial: false,
        other: false,
    },

    bookingWebsite: "yes",
    bookingUrl: "www.johnsboats.no",
    bookingFontColor: "#000000",
    bookingButtonColor: "#00CCEE",
    bookingLogo: "",

    featuresChannels: {
        integration: true,
        payments: false,
        shop: true,
        smoobu: false,
    },
    featuresChannelsAutomation: {
        checkInOut: true,
        damage: false,
        request: false,
    },
    featuresChannelsManagment: {
        variations: true,
        tracing: false,
        codes: false,
    }
}