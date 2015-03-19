var range = {};

AutoForm.addInputType('dateRange', {
  template: 'afDateRangePicker',
  valueOut: function () {
    //console.log("start date: " + range.startDate.format('YYYY-MM-DD'));
    //console.log("end date: " + range.endDate.format('YYYY-MM-DD'));
    //return range.startDate.format('YYYY-MM-DD') + " -> " + range.endDate.format('YYYY-MM-DD');
    return range;
  },
  valueConverters: {
    "dateArray": function (val) {
      //converted0 = val.startDate.format('YYYY-MM-DD') + " -> " + val.endDate.format('YYYY-MM-DD')
      //console.log("converted0: " + converted0);
      var converted = [val.startDate.toDate(), val.endDate.toDate()];
      //console.log (converted);
      return converted;
    }
  }
});

Template.afDateRangePicker.helpers({
  dataSchemaKey: function() {
    return this.atts['data-schema-key'];
  },
  dateRangePickerValue: function() {
    return this.atts['dateRangePickerValue'];  //console.log($input);
    //console.log(data);
  }
});

Template.afDateRangePicker.rendered = function () {

  var $input = this.$('input');
  var data = this.data;

  $input.daterangepicker(
      data.atts.dateRangePickerOptions,
      function(start, end) {

        range.startDate = start;
        range.endDate = end;

        //console.log(start.toISOString(), end.toISOString());
      }
  );
};