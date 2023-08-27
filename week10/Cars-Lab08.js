// Lab-08 - Mobin

// Q1
// Connect To Data Base: DBS311
use('DBS311')

// Inserting Three Documents Into Collection, Each Including An Array Value With Three Or Four Elements
db.CARS.insertMany ([
    {
      'ID': 9,
      'Brand': 'Audi',
      'Model': 'A6',
      'Year': 2022,
      'Color': 'Blue',
      'Price': 60000,
      'Fuel-Type': 'Gasoline',
      'Features': ['Navigation', 'Leather Seats', 'Sunroof']
    },
    {
      'ID': 10,
      'Brand': 'Mercedes-Benz',
      'Model': 'E-Class',
      'Year': 2023,
      'Color': 'Silver',
      'Price': null, // 70000,
      'Fuel-Type': 'Gasoline',
      'Features': ['Backup Camera', 'Blind Spot Assist', 'Heated Seats', 'Apple CarPlay']
    },
    {
      'ID': 11,
      'Brand': 'Mercedes-Benz',
      'Model': 'E-Class',
      'Year': 2023,
      'Color': 'Yellow',
      'Price': 70000,
      'Fuel-Type': 'Gasoline',
      'Features': ['Blind Spot Assist', 'Heated Seats', 'Backup Camera', 'Apple CarPlay'],
      'Counter': 4 // Counter - Can Be Incremented And Decremented
    }
]);


// Q2 : Demonstrate A Successful Search
// This Query Will Perform A Case-Insensitive Search For The 'Leather Seats' Element In The "Features" Array
db.CARS.find ({
    'Features': /Leather Seats/i
});

// OR
db.CARS.find();

// Q3
/* Successful Search That Returns Only One Document With The Same Elements In A Different Order:
 * This Query Will Only Return The Document With ID 11 Because It Has The Specified Array 
 * Elements, 'Heated Seats', 'Backup Camera', And 'Blind Spot Assist', In The Same Order 
 * As The Search Query. The Document With ID 10 Will Be Missed Because The Order Of 
 * The Elements In Its "Features" Array Is Different.
 */
db.CARS.find ({
    'Features': ['Blind Spot Assist', 'Heated Seats', 'Backup Camera', 'Apple CarPlay']
});

/* Successful Search That Returns Both Documents With The Same Elements:
 * This Query Will Return Both Documents With Ids 10 And 11 Because They 
 * Both Have The Same Elements, 'Backup Camera', 'Blind Spot Assist', 
 * And 'Heated Seats', Regardless Of Their Order.

 * By Using The $all Operator, We Ensure That All The Elements In The 
 * Search Query Are Present In The "Features" Array Of The Documents
 * Regardless Of Their Order.
 */ 
db.CARS.find ({
    'Features': {
      $all: ['Blind Spot Assist', 'Backup Camera', 'Blind Spot Assist', 'Heated Seats']
    }
});


// Q4 : Demonstrate A Succesful Search Using $in
db.CARS.find ({
    'Color': {
      $in: ['Blue', 'Silver']
    }
});

// The $In Operator Allows Us To Specify An Array Of Values, And The Query Will Return
// Any Documents Where The "Color" Field Matches Any Of Those Values.


// Q5: Demonstrate A Search For Null Referring The Key Value Pair
db.CARS.find ({
    'Price': null
});

// Extra : Search For Not Null Value Using $ne Operator (Which Stands For "Not Equal")
db.CARS.find ({
    'Price': {
      $ne: null
    }
});


// Q6
// Multi-Document Update To Increase A Numeric Key-Value Pair By 10:
// db.CARS.updateMany({}, { $inc: { Counter: 10 } });
// This Update Will Increment The Value Of The "Counter" Field By 10 For All Documents In The "CARS" Collection
db.CARS.updateOne(
    { ID: 11 },
    { $inc: { Counter: 10 } }
);
// Update Counter In ID 11
  
// Find And Show The Result Of The Increase:
db.CARS.find({}, { _id: 0, ID: 1, Counter: 1 });

// Multi-Document Update To Decrease The Same Numeric Key-Value Pair By 10:
// db.CARS.updateMany({}, { $inc: { Counter: -10 } }); For All Of The Document
db.CARS.updateOne(
    { ID: 11 },
    { $inc: { Counter: -10 } }
); 
// For ID 11

// Find And Show The Result:
db.CARS.find({}, { _id: 0, ID: 1, Counter: 1 });

// Single-Document Update To Increase A Numeric Value By 5:
db.CARS.updateOne({ ID: 9 }, { $inc: { Price: 5 } });
// This Update Will Increase The Value Of The "Price" Field By 5 For The Document With ID 9

// Find And Show The Result Of The Increase:
db.CARS.find({ ID: 9 }, { _id: 0, ID: 1, Price: 1 });


// Single-Document Update To Reverse The Increase By 5:
db.CARS.updateOne({ ID: 9 }, { $inc: { Price: -5 } });

// Find And Show The Result:
db.CARS.find({ ID: 9 }, { _id: 0, ID: 1, Price: 1 });

// Note: The Use Of _id: 0 Or ID: 1 In The Projection Parameter Of The Find Query Is 
//       To Control Which Fields Are Included Or Excluded In The Query Result


// Q7 : Add A Key Value Pair To One Of The Documents In Your Collection Then Remove
//      It And Demonstrate The Key Value Pair Was Successfully Removed
db.CARS.updateOne (
    { ID: 10 },
    { $set: { Warranty: '3 years' } }  // This Update Will Add A New Key-Value Pair, "Warranty: '3 years'", To The Document With ID 10.
);

// Show The Result:
db.CARS.find({ ID: 10 });

// To Remove The Key-Value Pair And Demonstrate Its Successful Removal
db.CARS.updateOne (
    { ID: 10 },
    { $unset: { Warranty: 1 } }
);
  
// The $unset Operator Is Used To Remove A Field From A Document

// Show The Result:
db.CARS.find({ ID: 10 });


// Q8: Replace One Of The Documents In The "CARS" Collection With A New Document That Includes An Embedded Document
// Replace The Document With ID 9 With A New Document Including An Embedded Document:
db.CARS.replaceOne (
    { ID: 9 },
    {
      'ID': 9,
      'Brand': 'Audi',
      'Model': 'A6',
      'Year': 2022,
      'Color': 'Blue',
      'Price': 60000,
      'Fuel-Type': 'Gasoline',
      'Features': ['Navigation', 'Leather Seats', 'Sunroof'],
      'Specifications': {
        'Engine': 'V6',
        'Horsepower': 335,
        'Torque': '325 lb-ft',
        'Transmission': 'Automatic',
        'Cylinders': 6
      }
    }
);

// In This Update, We Replaced The Original Document With A New One, Including An 
// Embedded Document Named "Specifications" That Provides 
// Additional Details About The Car.

// Update Something In The Embedded Document (Change The Horsepower):
db.CARS.updateOne(
    { ID: 9 },
    { $set: { 'Specifications.Horsepower': 350 } }
);

// This Update Will Modify The "Horsepower" Field Inside The Embedded 
// "Specifications" Document For The Car With ID 9
// Changing It From 335 To 350.

// Show The Modified Document:
db.CARS.find({ ID: 9 });
   
  
  