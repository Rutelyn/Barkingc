

const LoaderButton = () => {
  return (
   <button className="relative px-20 py-5 rounded-3xl overflow-hidden">Let's chat
<span className="relative z-5"></span>
<span className="absolute inset-0 overflow-hidden">
  <span className="absolute inset-[-2px] bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-50 animate-spin"></span>
</span>
<span className="absolute inset-[2px] bg-black rounded-3xl"></span>
   </button>
  )
}

export default LoaderButton