export default class FriendListItem {

  private readonly _avatarSrc: string;
  private readonly _name: string;
  private readonly _comment: string;

  public constructor(avatarSrc: string, name: string, comment: string) {
    this._avatarSrc = avatarSrc;
    this._name = name;
    this._comment = comment;
  }

  get name() {
    return this._name;
  }

  get avatarSrc() {
    return this._avatarSrc;
  }

  get comment() {
    return this._comment;
  }

}
