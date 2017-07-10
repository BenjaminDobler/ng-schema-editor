import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  schema:any = {
    "name": "track",
    "properties": {
      "id": {
        "description": "identifier",
        "format": "uuid",
        "type": "string"
      },
      "name": {
        "description": "shown name",
        "type": "string"
      },
      "title": {
        "description": "The title of the track",
        "type": "string"
      },
      "uri": {
        "description": "object uri",
        "format": "uri",
        "type": "string"
      },
      "genre": {
        "description": "The musical direction of this track.",
        "enum": [
          "Rock",
          "Metal",
          "Pop",
          "Jazz"
        ],
        "type": "string"
      },
      "single": {
        "description": "if set to true, this track is available as a single.",
        "type": "boolean"
      }
    }
  };
  constructor() {
  }
}
