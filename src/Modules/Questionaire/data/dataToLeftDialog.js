import { Steps } from "./enums"

export const dataToLeftDialog = (step, dialogData) => {
    let services = [];
    Object.keys(dialogData?.servicesNeeded).map((key) => {
        if (dialogData.servicesNeeded[key])
            services.push(key)
    })

    switch (step) {
        case (Steps.AskForName):
            return {
                title: "questionaire.askForName",
                marco: true,
            }

        case (Steps.AskAboutServices):
            return {
                title: "questionaire.askAboutServices",
                name: dialogData.name,
                marco: true,
            }

        case (Steps.AskForWebsite):
            return {
                title: "questionaire.askForWebsite",
                listTitle: "questionaire.selections",
                squareList: services,
            }

        case (Steps.AskAboutTeamSize):
            return {
                title: "questionaire.askAboutTeamSize." + dialogData.website,
                listTitle: "questionaire.selections",
                squareList: services,
                roundList: [dialogData.website],
            }

        case (Steps.AskAboutOffer):
            return {
                title: "questionaire.askAboutOffer",
                listTitle: "questionaire.selections",
                squareList: services,
                roundList: [dialogData.website],
            }

        case (Steps.AskForContact):
            return {
                title: "questionaire.askForContact",
                listTitle: "questionaire.selections",
                squareList: services,
                roundList: [dialogData.website],
            }

        case (Steps.Done):
            return {
                title: "questionaire.done",
                listTitle: "questionaire.selections",
                squareList: services,
                roundList: [dialogData.website],
            }

        default:
            return null;

    }
}