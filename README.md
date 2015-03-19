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
    optional: true,
    autoform: {
      type: "dateRange",
      dateRangePickerValue: "01/01/2015 - 01/31/2015",
      dateRangePickerOptions: {
        timePicker: true,
        format: 'MM/DD/YYYY h:mm A',
        timePickerIncrement: 30,
        timePicker12Hour: true,
        timePickerSeconds: false
      }
    }
  },

  ...

});

```