export class NavbarModel {
  redirectTo: string
  iconName: string
  order: number
  constructor(redirectTo: string, iconName: string, order: number) {
    this.redirectTo = redirectTo
    this.iconName = iconName
    this.order = order
  }
}
