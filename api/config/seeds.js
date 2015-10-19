var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose 
seeder.connect('mongodb://localhost:27017/i-hate-angular', function() {
  // Load Mongoose models 
  seeder.loadModels(['./models/Complaints.js']);
  // Clear specified collections 
  seeder.clearModels(['Complaint'], function() {
    // Callback to populate DB once collections have been cleared 
    seeder.populateModels(data);
  });
});

// Data array containing seed data - documents organized by Model 
var data = [
  
    {
      
    }
  
    ]
];  
