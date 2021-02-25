import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Steps } from './enums';

const validatorOptions = (step) => {
    switch (step) {
        case Steps.AskForName:
            return yupResolver(yup.object().shape(
                { name: yup.string().required() }
            ));
        case Steps.AskAboutServices:
            return yupResolver(yup.object().shape({
                servicesNeeded: yup.array().min(1)
            }));
        case Steps.AskAboutOffer:
            return yupResolver(yup.object().shape({
                offer: yup.array().min(1)
            }));         
        case Steps.AskForContact:
            return yupResolver(yup.object().shape(
                { email: yup.string().required().email() }
            ));
        default: 
            return null;
    }
}

export default validatorOptions;

