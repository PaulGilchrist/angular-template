import { Headers } from '@angular/http';
export declare class IdentityService {
    id_token: any;
    refreshTimer: any;
    token: any;
    _authProvider: any;
    _expireOffsetMilliseconds: number;
    _renewInProgress: boolean;
    _state: string;
    clearToken(): void;
    appendAuthHeader(headers: Headers): any;
    getToken(): void;
    isTokenValid(): boolean;
    renewToken(): void;
    base64DecodeStringUrlSafe(base64IdToken: string): string;
    decodeJwt(jwtToken: string): any;
    base64Decode(encodedBase64: string): any;
    extractHeader(jwtToken: string): any;
    extractSignature(jwtToken: string): any;
    extractToken(encodedToken: string): any;
    getDomainHint(): string;
    getLoginHint(): string;
    getUuid(): string;
    addIFrame(iframeId: string): HTMLIFrameElement;
    removeIFrame(iframeId: string): void;
    loadFrame(url: string, iframeId: string): void;
}
