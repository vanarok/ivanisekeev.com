import type { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface Picture {
  id: number
  description: string
  picture: string
}

export interface Project {
  name: string
  skills: string[]
  pictures: Picture[]
  description: string[]
  logo: string
  previewPicture: string
}
