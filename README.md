# Ionic Push REST API via Node.js

[![NPM version](http://img.shields.io/npm/v/ionic-push-server.svg)](https://www.npmjs.com/package/ionic-push-server)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/benrondeau/Ionic-Push-Notification-NodeJS-Server?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Node.js server using [Ionic Push REST API](http://docs.ionic.io/docs/push-overview) to send push notifications on iOS and Android.

# Requirements
- [NodeJS](https://nodejs.org/)
- Ionic App that is [setup for push notifications](http://docs.ionic.io/docs/push-quick-start)

# Example Usage:

```javascript
var ionicPushServer = require('ionic-push-server');

var credentials = {
    IonicApplicationID : "myID",
    IonicApplicationAPIToken : "myAPIsecret"
};

var notification = {
  "tokens": ["your", "device", "tokens"],
  "user_ids": ["your", "user", "ids"],
  "send_to_all": false,
  "profile": "my-security-profile",
  "scheduled": "2016-02-25T14:36:42+00:00",
  "notification": {
    "title": "Hi",
    "message": "Hello world!",
    "template_defaults": {
      "name": "Tim",
      "email": "ionitron@ionic.io"
    },
    "android": {
      "title": "Hey",
      "message": "Hello Android!",
      "payload": {
        "foo": true,
        "bar": false
      },
      "sound": "sound.wav",
      "image": "ionitron.png",
      "stack": 4,
      "collapse_key": false,
      "delay_while_idle": true,
      "time_to_live": 1000,
      "template_defaults": {
        "name": "Artyom",
        "email": "ionitron@ionic.io"
      }
    },
    "ios": {
      "title": "Howdy",
      "message": "Hello iOS!",
      "payload": {
        "foo": true,
        "bar": false
      },
      "sound": "sound.wav",
      "priority": 5,
      "badge": 3,
      "expiry": 1449256245,
      "content_available": true,
      "template_defaults": {
        "name": "Alberto",
        "email": "ionitron@ionic.io"
      }
    }
  }
};

ionicPushServer(credentials, notification).then(function(){},function(error){});

```

Problems? Join the discussion on [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/benrondeau/Ionic-Push-Notification-NodeJS-Server?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) or file an [issue](https://github.com/benrondeau/Ionic-Push-Notification-NodeJS-Server/issues). Thanks!

## License
[GNU General Public License v3](http://www.gnu.org/licenses/gpl-3.0.txt)
