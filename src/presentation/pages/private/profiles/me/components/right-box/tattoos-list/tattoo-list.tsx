import { ITattoo } from '@/external/tattoos/tattoo.interface'
import { User } from '@/external/users/user.type'
import { Box } from '@/presentation/components/box/box'
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query'
import { Key } from 'react'
import { TattooCard } from '../../../../../../../components/card/card'

interface ITattooList {
  readonly tattoos: ITattoo[] | undefined
  readonly refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<User, Error>>
}

export function TattooList(props: ITattooList) {
  return (
    <Box
      className="flex p-2  flex-wrap overflow-y-scroll w-full h-full"
      style={{ gap: '2rem', flexWrap: 'wrap', overflowY: 'scroll' }}
    >
      {props.tattoos?.map((tattoo, index) => (
        <TattooCard
          refetch={props.refetch}
          key={index as Key}
          editable={true}
          index={index}
          tattoo={tattoo}
          style={{ height: '40%', width: '230px' }}
        />
      ))}
    </Box>
  )
}
