
Add a template to all events indices to ensure that timestamp is seen as a date, not a number
```bash
PUT search-sa-demo-app-2bcs4z2kzi5b5s7i3dob263h6e.eu-west-1.es.amazonaws.com/_template/events
{
  "template": "events*",
  "settings": {
    "number_of_shards": 1
  },
  "mappings": {
    "event": {
      "properties": {
        "timestamp": {
          "type": "date"
        },
        "event": {
          "type": "keyword"
        }
      }
    }
  }
}
```

Deleting indices
```bash
DELETE /my_index

```
