# Cron Job with Node.js

This repository demonstrates how to create a simple cron job using Node.js. The example script fetches data from an API every second. You can easily modify the cron schedule to fit your needs.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Cron Syntax
- The cron job is scheduled using the node-cron library. The schedule syntax used is:
```
* * * * * *
│ │ │ │ │ │
│ │ │ │ │ └── Day of week (0 - 7) (Sunday is both 0 and 7)
│ │ │ │ └───── Month (1 - 12)
│ │ │ └─────── Day of month (1 - 31)
│ │ └────────── Hour (0 - 23)
│ └──────────── Minute (0 - 59)
└────────────── Second (0 - 59) (optional)
```
