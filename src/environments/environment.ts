// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    apiUrl: 'https://apidev2.azurewebsites.net',
    applicationInsights: {
        instrumentationKey: '2ca976b1-98fd-4564-a913-967c14b3a19b'
    },
    azureAuthProvider: {
        aadInstance: 'https://login.microsoftonline.com/{0}',
        clientId: 'bd065891-b008-4968-9b26-5f2bcb9c1b66',
        domainHint: 'pulte.com',
        tenant: 'pulte.onmicrosoft.com'
    },
    envName: 'dev',
    production: false
};
