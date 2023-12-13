export default function CardBodySectionView(){
  return(

    <div className="cardBodySectionCom">

      <div className="cardBodyTitle flex items-center gap-3 pb-2">

        <img src="/src/assets/icons/nineDotsGridIcon.svg" alt="Grid Icon" />

        <h4 className="text-2xl text-bg-color">A</h4>

        <div className="nestedTextareaGroup flex-grow flex justify-center items-stretch">

          <textarea 
            className="nestedTextarea 
            text-black w-full resize-none rounded-s-lg p-3 h-12"
            defaultValue="Test..."
          />

          <div 
            className="
              nestedTextareaButtons bg-white py-2
              flex justify-center items-center
              border-l-2 border-bg-color rounded-e-md">

            <button 
              className="
                nestedTextareaButton px-2 w-9 sm:w-12 
                flex justify-center items-center border-r-2 border-bg-color">
              <img src="/src/assets/icons/correctIcon.svg" alt="Grid Icon" />
            </button>

            <button 
              className="
                nestedTextareaButton px-2 w-9 sm:w-12 
                flex justify-center items-center">
              <img src="/src/assets/icons/xCloseIcon.svg" alt="Grid Icon" />
            </button>

          </div>

        </div>

      </div>

    </div>

  )
}