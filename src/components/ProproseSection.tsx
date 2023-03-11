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
      <div className="w-full mt-20 px-[10%] flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:items-stretch">
        <CardGroup
          heightTriggerForFirstCard={heightTriggerForFirstCard}
          heightTriggerForSecondCard={heightTriggerForSecondCard}
          heightTriggerForThirdCard={heightTriggerForThirdCard}
        />
      </div>
    </div>
  )
}
