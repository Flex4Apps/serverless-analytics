var EVENT_ENDPOINT = 'https://11jd55zhtd.execute-api.eu-west-1.amazonaws.com/dev'; // example 'https://c2a0wnrn9i.execute-api.eu-west-1.amazonaws.com/dev

var sampleInputData = {
  "context": {
    "context": {
      "url": "/survey/aqtbis/questions"
    }
  },
  "user": {
    "user": {
      "id": 199,
      "username": "emery@example.com",
      "first_name": "Emery",
      "last_name": "Walraet",
      "live_url": null,
      "promocode_id": null,
      "role_id": 9,
      "organization_id": null,
      "tutorial": true,
      "reset_code": "pGOIB2pfpIU0M1d1zmMv",
      "reset_code_date": "2016-03-01 17:57:04",
      "recurly_id": "16ce52e7ba769cdcdce7439c4c508e04",
      "date_created": "2014-10-07 13:48:04",
      "register_origin": "app",
      "points": null,
      "avatar_url": null,
      "linkedin_id": null,
      "default_language_id": 6,
      "country": null,
      "timezone": "Europe/Brussels",
      "date_cancelsubscription": "2016-11-17 15:38:42",
      "downgradeplan": "free",
      "status": null,
      "cancel_reason": "satisfied: test",
      "yearly": false,
      "google_analytics": null,
      "cancel_date": null,
      "newsletter": true,
      "respondent_id": null
    }
  },
  "timestamp": "2017-06-07 12:00:00",
  "attributes": {
    "question": {
      "id": 501545,
      "order": 1,
      "locked": false,
      "status": true,
      "editable": true,
      "question_block": 65727,
      "mandatory": true,
      "next_question": 0,
      "next_question_number": false,
      "correct_score": null,
      "wrong_score": null,
      "score_weight": 1,
      "freetext": false,
      "allow_feedback": false,
      "feedback_media_enabled": false,
      "allow_facebook_like": false,
      "hasCorrectAnswer": false,
      "custom_validation": false,
      "type": {
        "id": 3,
        "object_name": "form",
        "name": "editor.questions.types.text_choice.name",
        "icon": "thumbnail",
        "params": {
          "1": {
            "skip_when_logged_in": [{
              "id": 1885919,
              "language": 1,
              "key": "skip_when_logged_in",
              "value": false
            }],
            "save_as_respondent": [{
              "id": 1885918,
              "language": 1,
              "key": "save_as_respondent",
              "value": false
            }]
          }
        }
      },
      "translations": {
        "1": {
          "id": 544372,
          "text": "",
          "explanation": null,
          "feedback_label": null,
          "x_axis_label": null,
          "y_axis_label": null,
          "question_tag": null,
          "hint": null
        }
      },
      "media": [],
      "answers": [{
        "id": 1659613,
        "order": 1,
        "next_question": 0,
        "next_question_number": false,
        "status": true,
        "accepted": false,
        "correct": false,
        "score": 0,
        "mandatory": true,
        "translations": {
          "1": {
            "id": 1801112,
            "text": "Naam + Voornaam",
            "explanation": null
          }
        },
        "type": {
          "id": 3,
          "type_name": "Text - Single Line",
          "object_name": "inputfield text",
          "description": "This is a special type of answer limited to the Form-type question. Specifically for getting name \/ address data.",
          "params": []
        }
      }, {
        "id": 1659618,
        "order": 2,
        "next_question": 0,
        "next_question_number": false,
        "status": true,
        "accepted": false,
        "correct": false,
        "score": 0,
        "mandatory": true,
        "translations": {
          "1": {
            "id": 1801117,
            "text": "Functie",
            "explanation": null
          }
        },
        "type": {
          "id": 3,
          "type_name": "Text - Single Line",
          "object_name": "inputfield text",
          "description": "This is a special type of answer limited to the Form-type question. Specifically for getting name \/ address data.",
          "params": []
        }
      }, {
        "id": 1659619,
        "order": 3,
        "next_question": 0,
        "next_question_number": false,
        "status": true,
        "accepted": false,
        "correct": false,
        "score": 0,
        "mandatory": true,
        "translations": {
          "1": {
            "id": 1801118,
            "text": "Email",
            "explanation": null
          }
        },
        "type": {
          "id": 4,
          "type_name": "E-mail",
          "object_name": "inputfield email",
          "description": "This is a special type of answer limited to the Form-type question. This can be used to ask for an email-address. Only valid addresses are allowed.",
          "params": []
        }
      }, {
        "id": 1659620,
        "order": 4,
        "next_question": 0,
        "next_question_number": false,
        "status": true,
        "accepted": false,
        "correct": false,
        "score": 0,
        "mandatory": true,
        "translations": {
          "1": {
            "id": 1801119,
            "text": "Tel nr.",
            "explanation": null
          }
        },
        "type": {
          "id": 6,
          "type_name": "Number",
          "object_name": "inputfield number",
          "description": "This is a special type of answer limited to the Form-type question. This can be used to ask for a numerical answer.",
          "params": []
        }
      }, {
        "id": 1659621,
        "order": 5,
        "next_question": 0,
        "next_question_number": false,
        "status": true,
        "accepted": false,
        "correct": false,
        "score": 0,
        "mandatory": true,
        "translations": {
          "1": {
            "id": 1801120,
            "text": "Naam bedrijf",
            "explanation": null
          }
        },
        "type": {
          "id": 3,
          "type_name": "Text - Single Line",
          "object_name": "inputfield text",
          "description": "This is a special type of answer limited to the Form-type question. Specifically for getting name \/ address data.",
          "params": []
        }
      }, {
        "id": 1659622,
        "order": 6,
        "next_question": 0,
        "next_question_number": false,
        "status": true,
        "accepted": false,
        "correct": false,
        "score": 0,
        "mandatory": true,
        "translations": {
          "1": {
            "id": 1801121,
            "text": "Website",
            "explanation": null
          }
        },
        "type": {
          "id": 3,
          "type_name": "Text - Single Line",
          "object_name": "inputfield text",
          "description": "This is a special type of answer limited to the Form-type question. Specifically for getting name \/ address data.",
          "params": []
        }
      }, {
        "id": 1659623,
        "order": 7,
        "next_question": 0,
        "next_question_number": false,
        "status": true,
        "accepted": false,
        "correct": false,
        "score": 0,
        "mandatory": true,
        "translations": {
          "1": {
            "id": 1801122,
            "text": "KMO\/GO?",
            "explanation": null
          }
        },
        "type": {
          "id": 3,
          "type_name": "Text - Single Line",
          "object_name": "inputfield text",
          "description": "This is a special type of answer limited to the Form-type question. Specifically for getting name \/ address data.",
          "params": []
        }
      }, {
        "id": 1659624,
        "order": 8,
        "next_question": 0,
        "next_question_number": false,
        "status": true,
        "accepted": false,
        "correct": false,
        "score": 0,
        "mandatory": true,
        "translations": {
          "1": {
            "id": 1801123,
            "text": "Sector bedrijf",
            "explanation": null
          }
        },
        "type": {
          "id": 3,
          "type_name": "Text - Single Line",
          "object_name": "inputfield text",
          "description": "This is a special type of answer limited to the Form-type question. Specifically for getting name \/ address data.",
          "params": []
        }
      }, {
        "id": 1659625,
        "order": 9,
        "next_question": 0,
        "next_question_number": false,
        "status": true,
        "accepted": false,
        "correct": false,
        "score": 0,
        "mandatory": true,
        "translations": {
          "1": {
            "id": 1801124,
            "text": "Aantal Werknemers",
            "explanation": null
          }
        },
        "type": {
          "id": 3,
          "type_name": "Text - Single Line",
          "object_name": "inputfield text",
          "description": "This is a special type of answer limited to the Form-type question. Specifically for getting name \/ address data.",
          "params": []
        }
      }]
    },
    "answer": {
      "id": 1659613,
      "order": 1,
      "next_question": 0,
      "next_question_number": false,
      "status": true,
      "accepted": false,
      "correct": false,
      "score": 0,
      "mandatory": true,
      "translations": {
        "1": {
          "id": 1801112,
          "text": "Naam + Voornaam",
          "explanation": null
        }
      },
      "type": {
        "id": 3,
        "type_name": "Checkbox",
        "object_name": "inputfield text",
        "description": "This is a special type of answer limited to the Form-type question. Specifically for getting name \/ address data.",
        "params": []
      }
    }
  }
};


$(function() {
  var statsLogger = new Flex4Apps(EVENT_ENDPOINT);


  $('a').on('click', function(event) {
    if (event.target.id === 'login') {
      statsLogger.identify('user-' + Math.floor(Math.random() * 10000));
    }
    var metaData = {
      some: '1',
      meta: '2',
      data: 3
    };

    // Update the sample data with event name
    sampleInputData.event = event.target.id;

    statsLogger.track(event.target.id, metaData, function(data, status) {});

  });

});
