interface TitleProps {
  title: String
}

export function Title({ title }: TitleProps) {
  return (
    <span className="bg-[#D9D9D9] w-full py-5 flex flex-col justify-center items-center lg:bg-background">
      <h2 className="font-bold text-background text-center w-full text-2xl lg:text-[#D9D9D9] lg:text-4xl">
        {title}
      </h2>
      <span className="w-1/4 lg:w-3/5 mx-[100px] h-[2px] mt-2 lg:mt-6 bg-red-600 rounded-sm" />
    </span>
  )
}
