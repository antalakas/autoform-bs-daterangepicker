var range = {};

AutoForm.addInputType('bootstrap-daterangepicker', {
  template: 'afBootstrapDateRangePicker',
  valueOut: function () {
    if (range.startDate && range.endDate)
      return [range.startDate.toDate(), range.endDate.toDate()];
    else
      return [];
  },
  valueConverters: {
    "dateArray": function (val) {
      if (range.startDate && range.endDate)
        return [range.startDate.toDate(), range.endDate.toDate()];
      else
        return [];
    }
  }
});

Template.afBootstrapDateRangePicker.helpers({
  atts: function addFormControlAtts() {
    var atts = _.clone(this.atts);
    // Add bootstrap class
    atts = AutoForm.Utility.addClass(atts, "form-control");
    delete atts.dateRangePickerOptions;
    return atts;
  },
  dateRangePickerValue: function() {
    return this.atts['dateRangePickerValue'];
  }
});

Template.afBootstrapDateRangePicker.rendered = function () {

  var $input = this.$('input');
  var data = this.data;

  if (data.atts.dateRangePickerOptions.startDate)
    range.startDate = data.atts.dateRangePickerOptions.startDate;

  if (data.atts.dateRangePickerOptions.endDate)
    range.endDate = data.atts.dateRangePickerOptions.endDate;

  // instanciate datepicker
  $input.daterangepicker(
      data.atts.dateRangePickerOptions,
      function(start, end) {
        range.startDate = start;
        range.endDate = end;
      }
  );
};

Template.afBootstrapDateRangePicker.destroyed = function () {
  var $input = this.$('input');
  $input.daterangepicker('remove');
};
