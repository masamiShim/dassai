export default class ImageFile {
  private file: any;
  private fileName: string;

  constructor(file: any) {
    this.file = file;
    this.fileName = file.name;
  }

  public getFile() {
    return this.file;
  }

  public getFileName() {
    return this.fileName;
  }

}
