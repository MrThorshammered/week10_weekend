angular
  .module("complaintApp")
  .controller("MainController", MainController);

MainController.$inject = ['$resource']
function MainController($resource) {
  var self = this;

  var Complaint = $resource('http://localhost:3000/complaints/:id', { id: '@_id' }, {
    'update': { method: 'PUT' }
  });

  self.complaints = Complaint.query();

  this.selectComplaint = function(complaint, index) {
    self.activeComplaintIndex = index;
    self.selectedComplaint = Complaint.get({ id: complaint._id });
  };

  this.newComplaint = {};

  this.saveComplaint = function(complaint) {
    Complaint.save(self.newComplaint, function(complaint) {
      self.complaints.push(complaint);
      self.newComplaint = {};
    });
  }

  this.editComplaint = function(complaint) {
    self.selectedComplaint = complaint;
  }

  this.updateComplaint = function() {
    Complaint.update(self.selectedComplaint);
    self.selectedComplaint = {};
  }

  this.deleteComplaint = function(complaint) {
    Complaint.delete({ id: complaint._id });
    var index = self.complaints.indexOf(complaint);
    self.complaints.splice(index, 1);
  }
}





















