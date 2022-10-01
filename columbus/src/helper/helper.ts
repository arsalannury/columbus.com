export abstract class Helper {
  static readonly SortNumbers = (
    parameter: number | string
  ): string | number | undefined => {
    const toString = parameter.toString();
    if (toString.length <= 3 || toString.length <= 2) return parameter;

    switch (toString.length) {
      case 4:
        return this.CheckParameterOfSortNumber(toString, 1);
      case 5:
        return this.CheckParameterOfSortNumber(toString, 2);  
      case 6:
        return this.CheckParameterOfSortNumber(toString, 3);
      case 7:
        return this.CheckParameterOfSortNumber(toString, 1, 5);
      case 8:
        return this.CheckParameterOfSortNumber(toString, 2, 6);
      case 9:
        return this.CheckParameterOfSortNumber(toString, 3, 7);  
    }
  };

  static readonly ConvertBooleanToYesNo = (parameter: boolean): string => {
    switch (parameter) {
      case true:
        return "Yes";
        break;
      case false:
        return "No";
        break;
    }
  };

  private static CheckParameterOfSortNumber = (
    parameter: string,
    numberIndex: number,
    numberIndexSecond?: number,
    numberIndexThird?: number
  ): string => {
    const convertParameterToArray = parameter.split("");
    convertParameterToArray.splice(numberIndex, 0, "/");
    numberIndexSecond &&
      convertParameterToArray.splice(numberIndexSecond, 0, "/");
    numberIndexThird &&
      convertParameterToArray.splice(numberIndexThird, 0, "/");
    const resultParamater = convertParameterToArray.join("");
    return resultParamater;
  };
}
