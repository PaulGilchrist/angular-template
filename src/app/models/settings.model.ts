export interface Settings {
    apiUrl: string,
    azureAuthProvider: {
        aadInstance: string,
		clientId: string,
		domainHint: string,
        tenant: string
    }
}
