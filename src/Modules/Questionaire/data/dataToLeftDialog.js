import React from 'react';
import { I18n, Translate } from 'react-i18nify';

import { RoundBulletSVG } from '../../../data/svg/DialogSummaryBullets';
import { SquareBulletSVG } from '../../../data/svg/DialogSummaryBullets';
import { Steps } from "./enums";

export const dataToLeftDialog = (step, dialogData) => {
    let returnedData = {};

    switch (step) {
        case (Steps.AskForName):
            returnedData = {
                marco: true,
                title:
                    <I18n render={() =>
                        <Translate value={"leftDialog.questionaire.askForName"} />
                    } />,
            }
            break;

        case (Steps.AskAboutServices):
            returnedData = {
                marco: true,
                title:
                    <I18n render={() =>
                        <Translate value={"leftDialog.questionaire.askAboutServices"} name={dialogData.name} />
                    } />,
            }
            break;

        case (Steps.AskForWebsite):
            returnedData = {
                title:
                    <I18n render={() =>
                        <Translate value={"leftDialog.questionaire.askForWebsite"} />
                    } />,
            }
            break;

        case (Steps.AskAboutTeamSize):
            returnedData = {
                title:
                    <I18n render={() =>
                        <Translate value={"leftDialog.questionaire.askAboutTeamSize." + dialogData.website} />
                    } />,
                roundList: [dialogData.website],
            }
            break;

        case (Steps.AskAboutOffer):
            returnedData = {
                title:
                    <I18n render={() =>
                        <Translate value={"leftDialog.questionaire.askAboutOffer"} />
                    } />,

                roundList: [dialogData.website],
            }
            break;

        case (Steps.AskForContact):
            returnedData = {
                title:
                    <I18n render={() =>
                        <Translate value={"leftDialog.questionaire.askForContact"} />
                    } />,
                roundList: [dialogData.website],
            }
            break;

        case (Steps.Done):
            returnedData = {
                title:
                    <I18n render={() =>
                        <Translate value={"leftDialog.questionaire.done"} />
                    } />,
                roundList: [dialogData.website],
            }
            break;
    }

    let services = [];
    Object.keys(dialogData?.servicesNeeded).map((key) => {
        if (dialogData.servicesNeeded[key])
            services.push(key)
    })

    switch (step) {
        case (Steps.AskForWebsite):
        case (Steps.AskAboutTeamSize):
        case (Steps.AskAboutOffer):
        case (Steps.AskForContact):
        case (Steps.Done):
            returnedData = {
                ...returnedData,
                listTitle:
                    <I18n render={() =>
                        <Translate value={"leftDialog.questionaire.selections"} />
                    } />,
                squareList: services.map((item, index) => {
                    return (
                        <p key={index} >
                            <SquareBulletSVG />
                            <span>
                                <Translate value={"rightDialog.servicesNeeded." + item} />
                            </span>
                        </p>
                    )
                })
            }
    }

    switch (step) {
        case (Steps.AskAboutTeamSize):
        case (Steps.AskAboutOffer):
        case (Steps.AskForContact):
        case (Steps.Done):
            returnedData = {
                ...returnedData,
                roundList:
                    [<p key={dialogData.website} >
                        <RoundBulletSVG />
                        <span>
                            <I18n render={() =>
                                <Translate value={"rightDialog.haveWebsite." + dialogData.website} />
                            } />
                        </span>
                    </p>]
            }
    }

    return returnedData;
}