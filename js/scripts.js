function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}
Phone.prototype.printInfo = function() {
    console.log("Phone brand is " +  this.brand + ", color is " + this.color + ", price is " + this.price + ".");
}
var samsungGalaxyS6 = new Phone("Samsung", 3000, "white");
var iPhone6S = new Phone("Apple", 5400, "silver");
var onePlusOne = new Phone("OnePlus", 2000, "black");

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();