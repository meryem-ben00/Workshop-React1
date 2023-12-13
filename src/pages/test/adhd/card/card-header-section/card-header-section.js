export default function CardHeaderView(){
  return(

    <div className="cardHeader pb-2">
      <div className="cardHeaderTitle flex items-center gap-3 pb-2">
        <img src="/src/assets/icons/nineDotsGridIcon.svg" alt="Grid Icon" />
        <h4 className="flex-grow text-2xl">Test #1</h4>
        <img src="/src/assets/icons/xCloseIcon.svg" alt="Grid Icon" className="px-3" />
      </div>
      <textarea 
        className="text-black w-full resize-none rounded-lg p-3"
        defaultValue="Test..."
      />
    </div>

  )
}