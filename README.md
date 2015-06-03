autoform-bs-daterangepicker
====================
[daterangepicker](https://github.com/dangrossman/bootstrap-daterangepicker/) packaged for [Meteor](http://meteor.com).

### Installation

With Meteor 0.9.3 and above, install using:

```sh
$ meteor add antalakas:autoform-bs-daterangepicker
```


### Usage

```js

SearchSchema = new SimpleSchema({

  searchRange: {
    type: [Date],
    label: "From - To",
    optional: false,
    autoform: {
      type: "bootstrap-daterangepicker",
      dateRangePickerValue: moment().add(1, 'days').format("DD/MM/YYYY") + " - " + moment().add(3, 'days').format("DD/MM/YYYY"),
      dateRangePickerOptions: {
        dateLimit: { days: 6 },
        minDate: moment().add(-150, 'days').toDate(),
        maxDate:moment().add(6, 'months').toDate(),
        startDate: moment().add(1, 'days').toDate(),
        endDate: moment().add(3, 'days').toDate(),
        timePicker: false,
        format: 'DD/MM/YYYY',
        timePickerIncrement: 30,
        timePicker12Hour: false,
        timePickerSeconds: false
      }
    }
  },

  ...

});

```
