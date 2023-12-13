import AdhdCardView from "./card/card-view";

export default function AdhdPage(){
  return(
    <div className="adhdCom">

      <AdhdCardView />
      <AdhdCardView />

      <div className="adhdComButtons flex justify-center items-center gap-3">
        <button className="py-2 px-3 bg-transparent rounded-lg">Cancel</button>
        <button className="py-2 px-3 bg-root-green rounded-lg">Publish</button>
      </div> 

    </div>
  )
}