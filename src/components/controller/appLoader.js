import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'e35bbece32c24b328a77955e2f7ec8db', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
