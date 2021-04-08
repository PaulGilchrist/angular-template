export const environment = {
    apiUrl: './assets/', // Would normally be a remote API, but for this demo we are using local JSON files
    appInsights: {
        instrumentationKey: '2ca976b1-98fd-4564-a913-967c14b3a19b'
    },
    azureClientId:'bd065891-b008-4968-9b26-5f2bcb9c1b66',
    dataCaching: { // milliseconds data is allowed to remain cached before next request for that data re-retrieves it from the remote data source
        defaultLong: 86400000, // Default for data that rarely or never changes such as a list of states (one day)
        defaultShort: 60000, // Default for data that changes frequently, but still worth caching (one minute)
        userData: 600000 // 10 minutes
    },
    envName: 'staging',
    vapid: {
        publicKey: 'BE6IqM0la0Mr7jg5w5vYwPk5gwbypKcpsJrqH-xX3nfLm9BCCrt2EDCyMZH7yZYFDGtGxtCgZqCgnGeuJehndoc'
    },
    production: true
};
