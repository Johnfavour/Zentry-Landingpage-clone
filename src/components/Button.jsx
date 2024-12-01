 
const Button = ({id, title ,rightIcon, leftIcon , containerClass }) => {
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer
    overflow-hidden rounded-full px-7 bg-violet-50 py-3 text-black
    ${containerClass}`}>
        {leftIcon}

        <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
            <div>
                {title}
            </div>
        </span>
        {rightIcon}
    </button>
  )
}

export default Button