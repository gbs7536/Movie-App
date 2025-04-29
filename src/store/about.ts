import { Store } from '../core/reina'

interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}

export default new Store<State>({
  photo: 'https://avatars.githubusercontent.com/u/138460840?v=4',
  name: 'Reina / gbs7536',
  email: 'test@gmail.com',
  blog: 'https://gbs7536.tistory.com/',
  github: 'https://github.com/gbs7536',
  repository: 'https://github.com/gbs7536/Movie-App',
})
