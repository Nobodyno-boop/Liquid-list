import {Edit} from "@/components/atoms/Edit";

export const Card = () => {
  return (
      <div className="card w-96 bg-primary shadow-xl text-neutral">
          <div className="card-body">
              <h2 className="card-title"><Edit placeHolder={'title'}/></h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
      </div>
  )
}
