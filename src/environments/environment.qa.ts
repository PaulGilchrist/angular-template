export const environment = {
    apiUrl: './assets/', // Would normally be a remote API, but for this demo we are using local JSON files
    appInsights: {
        instrumentationKey: '2ca976b1-98fd-4564-a913-967c14b3a19b'
    },
    azureAuthProvider: {
        aadInstance: 'https://login.microsoftonline.com/{0}',
        clientId: 'bd065891-b008-4968-9b26-5f2bcb9c1b66',
        domainHint: 'pulte.com',
        tenant: 'pulte.onmicrosoft.com'
    },
    dataCaching: { // milliseconds data is allowed to remain cached before next request for that data re-retrieves it from the remote data source
        defaultLong: 86400000, // Default for data that rarely or never changes such as a list of states (one day)
        defaultShort: 60000, // Default for data that changes frequently, but still worth caching (one minute)
        userData: 3600000 // 10 minutes
    },
    envName: 'qa',
    production: false
};
