export type User = {
  auth: boolean
  email: string
}

export type Post = {
  id: number
  userId: number
  title: string
  body: string
}
