[![codecov.io](https://codecov.io/github/akitten/csv-linkedin-parser/coverage.svg?branch=master)](https://codecov.io/github/akitten/csv-linkedin-parser?branch=master)
[![Build Status](https://travis-ci.org/akitten/csv-linkedin-parser.svg?branch=master)](https://travis-ci.org/akitten/csv-linkedin-parser)
[![Dependency Status](https://david-dm.org/akitten/csv-linkedin-parser.svg)](https://david-dm.org/akitten/csv-linkedin-parser)
[![devDependency Status](https://david-dm.org/akitten/csv-linkedin-parser/dev-status.svg)](https://david-dm.org/akitten/csv-linkedin-parser#info=devDependencies)

# csv-linkedIn-parser

Csv LinkedIn format parser into JSON format. 

# Why

LinkedIn gives you options to export your contacts using the CSV format (see [here](https://www.linkedin.com/people/export-settings)). However it is easier to do some data manipulation with Javascript using JSON format.

This module will convert csv Linkedin format string into JSON format.

# What
LinkedIn format example: 

```
"Title","First Name","Middle Name","Last Name","Suffix","E-mail Address","E-mail 2 Address","E-mail 3 Address","Business Street","Business Street 2","Business Street 3","Business City","Business State","Business Postal Code","Business Country","Home Street","Home Street 2","Home Street 3","Home City","Home State","Home Postal Code","Home Country","Other Street","Other Street 2","Other Street 3","Other City","Other State","Other Postal Code","Other Country","Company","Department","Job Title","Assistant's Phone","Business Fax","Business Phone","Business Phone 2","Callback","Car Phone","Company Main Phone","Home Fax","Home Phone","Home Phone 2","ISDN","Mobile Phone","Other Fax","Other Phone","Pager","Primary Phone","Radio Phone","TTY/TDD Phone","Telex","Assistant's Name","Birthday","Manager's Name","Notes","Other Address PO Box","Spouse","Web Page","Personal Web Page"
"","Hugh","","Triggerr","","hrc@trigger.com","","","","","","","","","","","","","","","","","","","","","","","","Florist","","Project Manager","","","","","","","","","","","","","","","","","","","","","","","","","","",""
"","Michael","","Harney","","m@mharney.co","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""
"","Ola","","Malik","","ola@gmail.com","","","","","","","","","","","","","","","","","","","","","","","","Super Startup","","Junior Software Developer","","","","","","","","","","","","","","","","","","","","","","","","","","",""
```
This will be converted to an array of objects: 

```
[
  {
    names: ["Triggerr", "Hugh"],
    fullname: "Hugh Triggerr",
    headline: "Project Manager",
    org: "Florist",
    email: "hrc@trigger.com"
  },
  .
  .
  .
]

```

# How

```
npm install csv-linkedin-parser --save
```

Then in your script: 

```
var fs = require('fs');
var csv_linkedin_parser = require('csv-linkedin-parser');

var myCSVFile = fs.readFileSync('urlOfMyFile', 'utf-8');
var myJsonContacts = csv_linkedin_parser(myCSVFile);
console.log(myJsonContacts);

```

# Any questions?

Submit an issue [here](https://github.com/akitten/csv-linkedin-parser/issues)
