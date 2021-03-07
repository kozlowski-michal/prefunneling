const inputMultiselectStyle = (className) => {
    switch (className) {
        case "dashboard":
            const bodyStyles = window.getComputedStyle(document.body);
            let colorMain = bodyStyles.getPropertyValue('--main');
            let colorHalfLight = bodyStyles.getPropertyValue('--halfLight');
            let colorLight = bodyStyles.getPropertyValue('--light');
            let colorSecondary = bodyStyles.getPropertyValue('--secondary');
            let colorTertiary = bodyStyles.getPropertyValue('--tertiary');
            let colorUberLight = bodyStyles.getPropertyValue('--uberLight');

            return {
                //IndicatorSeparator: () => null,
                menu: styles => {
                    return {
                        ...styles,
                        zIndex: 30,
                    }
                },
                placeholder: styles => {
                    return {
                        ...styles,
                        color: colorSecondary,
                    }
                },
                singleValue: styles => {
                    return {
                        ...styles,
                        color: colorMain,
                        fontFamily: "Nunito",
                        padding: "2px",
                    }
                },
                control: (styles, { isFocused }) => ({
                    ...styles,
                    color: colorMain,
                    marginTop: "20px",
                    paddingTop: "4px",
                    minHeight: "40px",
                    borderColor: isFocused ? colorTertiary : colorHalfLight,
                    borderRadius: '5px',
                    outline: "none",
                    boxShadow: "none",
                    ":hover": {
                        borderColor: isFocused ? colorTertiary : colorSecondary,
                    },
                }),
                option: (styles, { isFocused }) => {
                    return {
                        ...styles,
                        color: colorMain,
                        background: isFocused ? colorUberLight : "white",
                        fontWeight: isFocused ? 700 : 300,
                        fontFamily: "Nunito",
                    }
                },
                multiValue: (styles) => {
                    return {
                        ...styles,
                        background: colorUberLight,
                        minHeight: "20px",
                        borderRadius: "10px",
                        padding: "1px 5px",
                    };
                },
                multiValueRemove: (styles) => ({
                    ...styles,
                    color: colorSecondary,
                    ':hover': {
                        background: colorLight,
                        color: colorTertiary,
                    },
                }),
            }

        default: return null
    }
}

export default inputMultiselectStyle;