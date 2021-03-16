var _super = require('./EncryptedObject');

class Profile extends _super {
    constructor() {
        super();
        this.customerNo = '000001';
        this.email = 'jdoe@salesforce.com';
        this.addressBook = new (require('./AddressBook'))();
        this.customer = new (require('./Customer'))(this);
        this.wallet = new (require('./Wallet'))();
    }

    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getFax() {
        return this.fax;
    }
    setFax(fax) {
        this.fax = fax;
    }
    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
    getAddressBook() {
        return this.addressBook;
    }
    getCustomer() {
        return this.customer;
    }
    getCompanyName() {
        return this.companyName;
    }
    setCompanyName(companyName) {
        this.companyName = companyName;
    }
    getFirstName() {
        return this.firstName;
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    getJobTitle() {
        return this.jobTitle;
    }
    setJobTitle(jobTitle) {
        this.jobTitle = jobTitle;
    }
    getLastName() {
        return this.lastName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    getSecondName() {
        return this.secondName;
    }
    setSecondName(secondName) {
        this.secondName = secondName;
    }
    getSuffix() {
        return this.suffix;
    }
    setSuffix(suffix) {
        this.suffix = suffix;
    }
    getSalutation() {
        return this.salutation;
    }
    setSaluation(salutation) {
        this.salutation = salutation;
    }
    getCredentials() {
        return this.credentials;
    }
    getBirthday() {
        return this.birthday;
    }
    setBirthday(birthday) {
        this.birthday = birthday;
    }
    getNextBirthday() {
        return this.nextBirthday;
    }
    getGender() {
        return this.gender;
    }
    setGender(gender) {
        this.gender = gender;
    }
    isMale() {
        return this.gender === 1;
    }
    isFemale() {
        return this.gender === 2;
    }
    getPreferredLocale() {
        return this.preferredLocale;
    }
    setPreferredLocale(preferredLocale) {
        this.preferredLocale = preferredLocale;
    }
    getPhoneHome() {
        return this.phoneHome;
    }
    setPhoneHome(phoneHome) {
        this.phoneHome = phoneHome;
    }
    getPhoneBusiness() {
        return this.phoneBusiness;
    }
    setPhoneBusiness(phoneBusiness) {
        this.phoneBusiness = phoneBusiness;
    }
    getPhoneMobile() {
        return this.phoneMobile;
    }
    setPhoneMobile(phoneMobile) {
        this.phoneMobile = phoneMobile;
    }
    getLastLoginTime() {
        return this.lastLoginTime;
    }
    getLastVisitTime() {
        return this.lastVisitTime;
    }
    getPreviousLoginTime() {
        return this.previousLoginTime;
    }
    getPreviousVisitTime() {
        return this.previousVisitTime;
    }
    getTaxID() {
        return this.taxID;
    }
    getTaxIDMasked() {
        return this.taxIDMasked;
    }
    setTaxID(taxID) {
        this.taxID = taxID;
    }
    getTaxIDType() {
        return this.taxIDType;
    }
    setTaxIDType(taxIDType) {
        this.taxIDType = taxIDType;
    }
    getCustomerNo() {
        return this.customerNo;
    }
    getWallet() {
        return this.wallet;
    }
}

module.exports = Profile;
