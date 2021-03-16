class Customer {
    constructor(profile) {
        this.ID = 'ID';
        this.profile = profile || new (require('./Profile'))();
    }

    isRegistered () {
        return this.registered;
    }
    getID () {
        return this.ID;
    }
    getCustomerGroups () {
        return this.customerGroups;
    }
    getActiveData () {
        return this.activeData;
    }
    isExternallyAuthenticated () {
        return this.externallyAuthenticated || false;
    }
    isAuthenticated () {
        return this.authenticated || false;
    }
    getProfile () {
        return this.profile;
    }
    getOrderHistory () {
        return this.orderHistory;
    }
    isMemberOfCustomerGroup () {
        return false;
    }
    getProductLists () {
        return this.productLists;
    }
    getAddressBook () {
        return this.profile && this.profile.getAddressBook() || this.addressBook;
    }
    getNote () {
        return this.note;
    }
    setNote (note) {
        this.note = note;
    }
    isAnonymous () {
        return this.anonymous || false;
    }
}

module.exports = Customer;