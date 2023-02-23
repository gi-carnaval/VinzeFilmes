import '../styles/style.css'

export function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <span className="animate-svg flex items-center justify-center">
        <svg x="0px" y="0px" viewBox="0 0 1002 936">
          <path d="M501 934L1 1H484V217H350L501 501L652 217H518V1H1001L501 934Z" />
        </svg>
      </span>
    </div>
  )
}
