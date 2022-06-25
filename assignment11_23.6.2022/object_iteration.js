let anonymous = {
  name: "Priyansh Nahar",
  city: "Jaipur",
  contact: "8952807900",
  email: "priyanshnahar1998@gmail.com",
  address: {
    lane: "ring road",
    landmark: "apollo hospital",
    pincode: "312619",
  },
};
console.log(anonymous);
// if we want to fetch only landmark

console.log(anonymous.address.landmark);

// if we want to add
anonymous["height"] = "5.9";
console.log(anonymous);

// if we want to edit values
anonymous["city"] = "chhitorgarh";
console.log(anonymous);

// if we want to delete values
delete anonymous["name"];
console.log(anonymous);

// if we want to print pairs
console.log(Object.entries(anonymous));

// if we want to print keys & values seprately
console.log(Object.keys(anonymous));
console.log(Object.values(anonymous));
