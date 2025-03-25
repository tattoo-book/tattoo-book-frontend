import { TattooList } from './tattoos-list/tattoo-list'

interface IRigthBox {
  id: string | string[] | undefined
}

export const RigthBox = (props: IRigthBox) => {
  return <TattooList id={props.id} />
}
