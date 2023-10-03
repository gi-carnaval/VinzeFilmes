import { CardGroup } from './CardGroup'

import { Title } from './Title'

export function ProposeSection() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-24">
      <Title title={'Conheça o nosso propósito'} />
      <div className="w-full my-32 px-[10%] flex flex-col items-center justify-center lg:mt-8 lg:flex-row lg:justify-between lg:items-stretch overflow-hidden">
        <CardGroup />
      </div>
    </div>
  )
}
