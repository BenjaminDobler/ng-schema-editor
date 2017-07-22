import {Component} from '@angular/core';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  schema: any = {
    'name': 'track',
    'properties': {
      'id': {
        'description': 'identifier',
        'format': 'uuid',
        'type': 'string'
      },
      'name': {
        'description': 'shown name',
        'type': 'string'
      },
      'title': {
        'description': 'The title of the track',
        'type': 'string'
      },
      'uri': {
        'description': 'object uri',
        'format': 'uri',
        'type': 'string'
      },
      'genre': {
        'description': 'The musical direction of this track.',
        'enum': [
          'Rock',
          'Metal',
          'Pop',
          'Jazz'
        ],
        'type': 'string'
      },
      'single': {
        'description': 'if set to true, this track is available as a single.',
        'type': 'boolean'
      }
    }
  };

  resources:Array<any> = [];

  constructor() {
  }

  onFileSelect(evt: any) {
    console.log(evt.target.files);
    const files: FileList = evt.target.files;
    const file: File = files[0];

    var reader: FileReader = new FileReader();
    reader.onload = (e:any) => {
      console.log(e.target.result);
      const data:any = JSON.parse(e.target.result);
      for (let i in data.resources) {
        this.resources.push({
          name: i,
          data: data.resources[i]
        });
      }
    };
    reader.readAsText(file);


  }

  onSelectResource(r:any) {
    console.log(r);
    this.schema = r.data.model;
  }


}
