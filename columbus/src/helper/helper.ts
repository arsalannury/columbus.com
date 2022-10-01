export const ConvertBooleanToYesNo = (parameter: boolean):string => {
  switch(parameter) {
    case true:
        return "Yes"
        break;
    case false:
        return "No"
        break
  }
};
