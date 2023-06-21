exports.Landing = class Landing {
    constructor(page, test) {
        this.page = page;
        this.test = this.test;
        this.naveTestingtext = page.locator('//ul[@id="primary-menu"]/descendant::span[text()="Testing"]');
    }
}