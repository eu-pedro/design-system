import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  padding: '$4',
  borderRadius: '$md',
})

export function App() {
  return <Button>Hello World!</Button>
}
