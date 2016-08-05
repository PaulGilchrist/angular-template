"use strict";
var testing_1 = require('@angular/core/testing');
var identity_service_1 = require('./identity.service');
testing_1.describe('IdentityService', function () {
    var identityService;
    testing_1.beforeEachProviders(function () {
        return [
            identity_service_1.IdentityService
        ];
    });
    testing_1.beforeEach(testing_1.inject([identity_service_1.IdentityService], function (_service) {
        identityService = _service;
    }));
    testing_1.it('Successfully decrypted token and accessed Audience ID', function () {
        var jwtToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJiZDA2NTg5MS1iMDA4LTQ5NjgtOWIyNi01ZjJiY2I5YzFiNjYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8xYTkyNzdhMy1lZjY2LTQxZjYtOTZiNS1jNTM5MGVlNDY4YTcvIiwiaWF0IjoxNDU3Mzg0MDk4LCJuYmYiOjE0NTczODQwOTgsImV4cCI6MTQ1NzM4Nzk5OCwiYW1yIjpbInB3ZCJdLCJmYW1pbHlfbmFtZSI6IkdpbGNocmlzdCIsImdpdmVuX25hbWUiOiJQYXVsIiwiaGFzZ3JvdXBzIjoidHJ1ZSIsImlwYWRkciI6IjEwNy41LjMwLjciLCJuYW1lIjoiUGF1bCBHaWxjaHJpc3QiLCJub25jZSI6ImY2ZjI4MDk2LWRjMTgtNDJlMS1hZWQ3LTlhZTM0MzQ3NTc2NSIsIm9pZCI6IjA1ZDgzM2FlLTQ5MGYtNGYxMi05ZGIzLWEzMTllZGYzODNiNCIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0xODQyNDI0MDI4LTE3MTY1NDY3MDQtMTg4NTYyNTE1Ni0yOTcyMzYiLCJyb2xlcyI6WyJBZG1pbiIsIldyaXRlciIsIkFwcHJvdmVyIl0sInN1YiI6ImVfQlNVSkk4M0RWVThzRWUzU0YyeFlQc29PVG41T0FEYVhveXpYSmNUMk0iLCJ0aWQiOiIxYTkyNzdhMy1lZjY2LTQxZjYtOTZiNS1jNTM5MGVlNDY4YTciLCJ1bmlxdWVfbmFtZSI6IlBHaWxjaHJpc3RAcHVsdGUuY29tIiwidXBuIjoiUEdpbGNocmlzdEBwdWx0ZS5jb20iLCJ2ZXIiOiIxLjAifQ.WDFs_R5lXcktmyiDl-kfmrViapTTGpgRzGXuKRAyxKu8_Vf3mmj0935VjtDZY2_0Jj_rcvfDt0JoHMMgUK49w3Wldy1NVo_fZNvD9mEYQTokWiXI-u4oYLGVSJ53RNIYQ8K35YeM9p5vj5f4Y2RFDqlbK0DXmYp_5iwzVYS1vmVhIFlwxpIUzh4_bFHYxSYunp4hQdVjVQVBzuFrYD0FHTX__wHlz_FzgmMlneuiW6GxQFmp6dtVSpfHvWm_JAatiizCMfbVW5g1P7fGiWFtUph13bZRvHeFYI-7to-VSl8mlm3-k8ha5sNaanczmq2DEHSsDRs_8g78MGTora9Wxg";
        var token = identityService.extractToken(jwtToken);
        testing_1.expect(token.aud).toEqual('bd065891-b008-4968-9b26-5f2bcb9c1b66');
        //expect(token.given_name).toEqual('Paul');
    });
});

//# sourceMappingURL=identity.service.spec.js.map
