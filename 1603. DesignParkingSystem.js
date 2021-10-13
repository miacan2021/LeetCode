/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
 var ParkingSystem = function(big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if (carType == 1 && this.big > 0) {
        this.big -= 1;
    } else if (carType == 2 && this.medium > 0) {
        this.medium -= 1;
    } else if (carType == 3 && this.small > 0) {
        this.small -= 1;
    } else {
        return false;
    }
    return true;
};
