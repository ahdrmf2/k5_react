

export default function TailButton({caption, handleClick}) {
  return (
    <button className="inline-flex justify-center items-center 
                         px-5 rounded-md h-10 m-2
                         hover:bg-yellow-200 hover:text-lime-950
                         bg-lime-700 text-white"
                          onClick={handleClick}
    >
        {caption}
    </button>
  )
}
