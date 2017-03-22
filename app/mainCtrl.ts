declare var $: any;

export class MainCtrl {
    VAR1 = 'value1';
    VAR2 = 'value2';

    bitches: Array<string> = ['hey', 'sieg', 'heil'];

    readonly baseUrl: string = '../img/'
    readonly mainMenu: Array<Object> = [
        {title: 'Home', icon: 'home'},
        {title: 'About me', icon: 'mail'},
        {title: 'Projects', icon: 'grid layout'},
        {title: 'My movies', icon: 'film'},
        {title: 'Contact', icon: 'film'}
    ];
}