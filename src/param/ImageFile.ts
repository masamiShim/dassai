export default class ImageFile {
  private readonly _file: any | null;
  private readonly _fileName: string | null;

  constructor(file: any | null, fileName: string | null) {
    this._file = file;
    this._fileName = fileName;
  }

  get fileName(): string | null {
    return this._fileName;
  }

  get file(): any | null {
    return this._file;
  }

}
