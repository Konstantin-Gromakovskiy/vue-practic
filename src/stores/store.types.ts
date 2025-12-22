export type User = {
  auth: false
} | {
  auth: true
  email: string
}
