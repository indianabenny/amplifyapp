{
  "auth": {
    "amplifyapp103fd0a0": {
      "service": "Cognito",
      "providerPlugin": "awscloudformation",
      "dependsOn": [],
      "customAuth": false
    }
  },
  "api": {
    "notesapp": {
      "service": "AppSync",
      "providerPlugin": "awscloudformation",
      "output": {
        "authConfig": {
          "defaultAuthentication": {
            "authenticationType": "API_KEY",
            "apiKeyConfig": {
              "apiKeyExpirationDays": 365,
              "description": "demo"
            }
          },
          "additionalAuthenticationProviders": []
        }
      }
    }
  }
}
