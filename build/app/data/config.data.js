"use strict";
exports.CONFIG = {
    apiUrl: 'https://apidev2.azurewebsites.net',
    authProvider: {
        name: "AzureAD",
        adminUrl: "https://manage.windowsazure.com/Pulte.onmicrosoft.com",
        authUrl: "https://login.windows.net/1a9277a3-ef66-41f6-96b5-c5390ee468a7/oauth2/authorize",
        clientId: "bd065891-b008-4968-9b26-5f2bcb9c1b66",
        redirectUrl: window.location.origin + "/tokenResponse.html",
        return_type: "id_token"
    }
};

//# sourceMappingURL=config.data.js.map
