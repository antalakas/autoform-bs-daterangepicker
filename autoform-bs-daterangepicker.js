AutoForm.addInputType('dateRange', {
  template: 'afDateRangePicker'
});

Template.afDateRangePicker.rendered = function () {
  $('#dateFromTo').daterangepicker(null, function(start, end, label) {
      console.log(start.toISOString(), end.toISOString(), label);
  });
};