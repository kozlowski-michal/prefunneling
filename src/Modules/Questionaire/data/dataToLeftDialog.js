import React from 'react';
import { I18n, Translate } from 'react-i18nify';

import { RoundBulletSVG } from '../../../data/svg/DialogSummaryBullets';
import { SquareBulletSVG } from '../../../data/svg/DialogSummaryBullets';
import { Steps } from "./enums";

export const dataToLeftDialog = (step, dialogData) => {
    let returnedData = {
        title:
            <I18n render={() =>
                <Translate value={"leftDialog.questionaire." + Object.keys(Steps)[step]} name={dialogData?.name} />
            } />
    };
    if (step == Steps.askAboutTeamSize) returnedData = {
        title:
            <I18n render={() =>
                <Translate value={"leftDialog.questionaire." + Object.keys(Steps)[step] + "." + dialogData.website} />
            } />
    };

    switch (step) {
        case (Steps.askForName):
        case (Steps.askAboutServices):
            returnedData = {
                ...returnedData,
                marco: true,
            }
    }

    let services = [];
    Object.keys(dialogData?.servicesNeeded).map((key) => {
        if (dialogData.servicesNeeded[key])
            services.push(key)
    })

    switch (step) {
        case (Steps.askForWebsite):
        case (Steps.askAboutTeamSize):
        case (Steps.askAboutIndustry):
        case (Steps.askForContact):
        case (Steps.done):
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
                                <Translate value={"questionaire.servicesNeeded." + item} />
                            </span>
                        </p>
                    )
                })
            }
    }

    switch (step) {
        case (Steps.askAboutTeamSize):
        case (Steps.askAboutIndustry):
        case (Steps.askForContact):
        case (Steps.done):
            returnedData = {
                ...returnedData,
                roundList:
                    [<p key={dialogData.website} >
                        <RoundBulletSVG />
                        <span>
                            <I18n render={() =>
                                <Translate value={"leftDialog.questionaire.haveWebsite." + dialogData.website} />
                            } />
                        </span>
                    </p>]
            }
    }

    return returnedData;
}