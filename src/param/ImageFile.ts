export default class ImageFile {
  private readonly file: any | null;
  private readonly fileName: string | null;

  constructor(file: any, fileName: string) {
    this.file = file;
    this.fileName = fileName;
  }
  get getFileName(): string | null {
    return this.fileName;
  }
  get getFile(): any | null {
    return this.file;
  }

}
