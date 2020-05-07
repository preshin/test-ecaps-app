import * as _ from "lodash";

export const catchCommonData = {
  toast: true,
  toastType: "error",
  loader: false,
  isSuccess: false
};

export const successCommonData = {
  loader: false,
  isSuccess: true
};

export const graphqlErrorFormat = (error: any) => {
  return {
    response: {
      data: {
        error: _.get(error, "response.data.errors[0].message", null)
      }
    }
  };
};
