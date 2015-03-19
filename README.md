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
    label: "From-To",
    autoform:
      type: "dateRange"
  },

  ...

});

```