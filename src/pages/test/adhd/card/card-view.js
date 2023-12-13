import CardBodySectionView from "./card-body-section/card-body-section";
import CardHeaderView from "./card-header-section/card-header-section";

export default function AdhdCardView(){
  return(

    <div className="adhdCardCom py-2 px-2 sm:py-5 sm:px-8 mb-3 rounded-lg bg-[#9898aa]">

      <CardHeaderView />

      <div className="cardBody ps-1 sm:ps-6 pb-2">
        <CardBodySectionView />
        <CardBodySectionView />
      </div>

      <div className="cardFooter flex justify-end items-center gap-1">
        <span>
          add more
        </span>
        <img src="/src/assets/icons/addIcon.svg" alt="Grid Icon" />
      </div>

    </div>
  )
}


// Bottom padding except the last: cardBodySection
// Outline nn