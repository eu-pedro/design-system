import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
})

export function App() {
  return <Button>Hello World!</Button>
}
