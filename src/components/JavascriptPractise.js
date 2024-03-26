const FindCount = () => {
  let arr = [
    {
      firstName: "Lata",
      lastName: "M",
      location: "Bangalore",
      age: 20
    },
    {
      firstName: "Mohan",
      lastName: "Raj",
      location: "Bangalore",
      age: 25
    },
    {
      firstName: "Usha",
      lastName: "L",
      location: "Channai",
      age: 25
    },
    {
      firstName: "Sanjay",
      lastName: "Jain",
      location: "Hyderabad",
      age: 30
    }
  ];

  // Count the locations Eg: {Bangalore: 2, Channai: 1, Hyderabad: 1}
  let newArray = arr.reduce((x,y) => {
    x[y.location] = x[y.location] ? x[y.location] + 1 : 1
    return x;
  }, {});
  console.log("Count of locations: ", newArray);

  // Count the number of people beloging to age Eg: {20: 1, 22: 1, 25: 1, 30: 1}
  let ageCount = arr.reduce((x,y) => {
    x[y.age] = x[y.age] ? x[y.age] + 1 : 1
    return x;
  }, {});
  console.log("Age count: ", ageCount);

  // Show employes >= 25 Eg:{name: 'Mohan', location: 'Bangalore', age: 25}
  let empDetailsList = arr.filter((x) => {
    if(x.age >=25) {
      return x;
    }
  });
  console.log("Employee's list whoes age is >=25:", empDetailsList);

  // Show employe name >= 25 Eg: ['Mohan', 'Sanjay']
  let empDetailsName = arr.filter((x) => x.age >=25).map((y) => y.firstName + " " + y.lastName)
  console.log("Employee's name whoes age is >=25:",empDetailsName);

  // Show employe name >= 25 Eg: {25: ['Mohan', 'Sanjay']}
  let output = Object.values(arr.reduce((x, y) => {
    if (!x[y.age]) {
        x[y.age] = {}; // assigns {}
        x[y.age][y.age] = []; // assignes value of age to {} => {20: []}
    }
    x[y.age][y.age].push(y.firstName + " " + y.lastName);
    return x;
  }, {})
  );
  console.log("Show employe name >= 25", output);

  // Capitalize the key values Eg: {Name: 'Lata', Location: 'Bangalore', Age: 20}
  const result = arr.map(obj => capitalizeKeys(obj));
  function capitalizeKeys(obj) {
    const newObj = {};
    for (const key in obj) {
      newObj[key.charAt(0).toUpperCase() + key.slice(1)] = obj[key];
    }
    return newObj;
  }
  console.log("Capitalize the key values ", result);

  // Downcase the string value Eg: {name: 'lata', location: 'bangalore', age: 20}
  const downcaseVal = arr.map(obj => ({
    ...obj,
    firstName: obj.firstName.toLowerCase(),
    lastName: obj.lastName.toLowerCase(),
    location: obj.location.toLowerCase()
  }));
  console.log("Downcase the string values: ", downcaseVal);

  // Find unique value in an array
  const array = [
    { name: "pankaj", age: "22"},
    { name: "dixshi", age: "22"},
    { name: "kt", age: "20"}
  ]
  function unique(array) {
    return [...new Map(array.map((item) => [item[name], item])).values()];
  }
  console.log("Unique array", unique(array))

  // Find unique location value
  const uniqueLocations = [...new Set(arr.map(obj => obj.location))];
  console.log("Unique location array", uniqueLocations);
}

export default FindCount;