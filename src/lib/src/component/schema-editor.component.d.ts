export declare class SchemaEditorComponent {
    schema: any;
    updateProps(): void;
    controlTypes: Array<string>;
    props: Array<any>;
    private _schema;
    constructor();
    getProperties(): any;
    onKeyChanged(): void;
    getSchemaJsonString(): string;
    addProperty(type: string): void;
}
