import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_G10ZnIjsx",
  ClientId: "65kf6eqjmr93v9qf484p8n79ht",
}

export default new CognitoUserPool(poolData);