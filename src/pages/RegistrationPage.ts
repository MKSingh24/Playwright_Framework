import{Page,Locator} from '@playwright/test'
import { BasePage } from './BasePage.js';
import { User } from '../utils/fakerUtils.js';

export class RegistrationPage extends BasePage{

    private readonly regBtn:Locator;
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly email: Locator;
    private readonly telephone:Locator;
    private readonly password: Locator;
    private readonly confirmPassword: Locator;
    private readonly privacyPolicy:Locator;
    private readonly submitBtn: Locator;

    constructor(page:Page){
        super(page);
        this.regBtn=page.getByRole('link',{name:'Register'})
        this.firstName=page.getByRole('textbox', { name: '* First Name' });
        this.lastName=page.getByRole('textbox', { name: '* Last Name' });
        this.email=page.getByRole('textbox', { name: '* E-Mail' });
        this.telephone=page.getByRole('textbox', { name: '* Telephone' });
        this.password=page.getByRole('textbox', { name: '* Password', exact: true });
        this.confirmPassword=page.getByRole('textbox', { name: '* Password Confirm' });
        this.privacyPolicy=page.getByRole('checkbox');
        this.submitBtn=page.getByRole('button', { name: 'Continue' });

    }

    async registerUser(user: User) {
        await this.regBtn.click();
        await this.firstName.fill(user.firstName);
        await this.lastName.fill(user.lastName);
        await this.email.fill(user.email);
        await this.telephone.fill(user.telephone);
        await this.password.fill(user.password);
        await this.confirmPassword.fill(user.password);
        await this.privacyPolicy.check();
        await this.submitBtn.click();

    }




}