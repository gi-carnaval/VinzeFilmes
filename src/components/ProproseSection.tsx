import { CardGroup, cardGroupProps } from './CardGroup'
import { Title } from './Title'

export function ProposeSection({
  heightTriggerForFirstCard,
  heightTriggerForSecondCard,
  heightTriggerForThirdCard,
}: cardGroupProps) {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-24">
      <Title title={'Conheça o nosso propósito'} />
      <div className="w-full my-32 px-[10%] flex flex-col items-center justify-center lg:mt-8 lg:flex-row lg:justify-between lg:items-stretch">
        <CardGroup
          heightTriggerForFirstCard={heightTriggerForFirstCard}
          heightTriggerForSecondCard={heightTriggerForSecondCard}
          heightTriggerForThirdCard={heightTriggerForThirdCard}
        />
      </div>
    </div>
  )
}
