export class AuthService {
    loggedIn: boolean = false;

    //Fake Asynchronous Process Of Login Authentication checking
    //Returns loggedIn value after 800 ms
    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 800);
            }
        );
        return promise;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}