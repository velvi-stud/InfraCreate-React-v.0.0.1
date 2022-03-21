import Keycloak from 'keycloak-js'; // per prendere token api


class Auth {
    constructor() {
        // remove return for auth
        return;
        this.generatetoken();
    }

    async generatetoken() {
        //keycloak init options
        let initOptions = {
            url: 'http://10.50.1.25/auth/',
            realm: 'cyberrange',
            clientId: 'emo-client',
            onLoad: 'login-required',
            //response_uri: 'localhost:3000'
        }

        let keycloak = Keycloak(initOptions);

        await keycloak.init({ onLoad: initOptions.onLoad })
            .success(
                (auth) => {
                    if (!auth) {
                        window.location.reload();
                    } else {
                        console.info("Authenticated");
                        //console.info("Authenticated", keycloak.token);
                    }

                    // ReactDOM.render....

                    localStorage.setItem("react-token", keycloak.token);
                    localStorage.setItem("react-refresh-token", keycloak.refreshToken);

                    setTimeout(
                        () => {
                            keycloak.updateToken(70)
                                .then(
                                    (refreshed) => {
                                        if (refreshed) {
                                            console.debug('Token refreshed' + refreshed);
                                        } else {
                                            console.warn('Token not refreshed, valid for '
                                                + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
                                        } //34637 sec
                                    }
                                )
                                .catch(
                                    () => {
                                        console.error('Failed to refresh token');
                                    }
                                );
                        }, 60000)
                }
            ).error(
                () => {
                    console.error("Authenticated Failed");
                }
            );
        ;
    }
}

export default Auth;