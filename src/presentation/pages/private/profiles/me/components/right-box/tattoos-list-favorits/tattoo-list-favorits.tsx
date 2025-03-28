import { ITattoo } from '@/external/tattoos/tattoo.interface'
import { User } from '@/external/users/user.type'
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query'
import { TattooCard } from '../../../../../../../components/card/card'

interface ITattooList {
  tattoos: ITattoo[] | undefined
  refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<User, Error>>
}

export function TattooListFavorits(props: ITattooList) {
  return (
    <div className="flex gap-6 p-2 flex-wrap overflow-y-scroll w-full h-full  " style={{ gap: '2rem' }}>
      {props.tattoos?.map((tattoo, index) => (
        <TattooCard
          refetch={props.refetch}
          key={index}
          index={index}
          tattoo={tattoo}
          style={{ height: '40%', width: '18%' }}
        />
      ))}
    </div>
  )
}
