AutoForm.addInputType('dateRange', {
  template: 'afDateRangePicker',
  valueIn: function(val, attrs) {
    if(_.isArray(val)) {
      var startDate = moment(val[0]).format(attrs.dateRangePickerOptions.format);
      var endDate = moment(val[1]).format(attrs.dateRangePickerOptions.format);
      return startDate+" - "+endDate;
    }
    return val;
  },
  valueOut: function () {
    if(! this.val()) {
      return {};
    }

    var range = this.data('daterangepicker');

    return {
      startDate: range.startDate,
      endDate: range.endDate
    };
  },
  valueConverters: {
    "dateArray": function (val) {
      var startDate = val.startDate ? val.startDate.toDate() : null;
      var endDate = val.endDate ? val.endDate.toDate() : null;
      return [startDate, endDate];
    }
  }
});

Template.afDateRangePicker.helpers({
  dataSchemaKey: function() {
    return this.atts['data-schema-key'];
  }
});

Template.afDateRangePicker.onRendered(function () {
  var $input = this.$('input');
  var data = this.data;

  $input.daterangepicker(data.atts.dateRangePickerOptions);
});
