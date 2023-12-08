import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

export default function EmailPage(){
  const { 
    formState: { errors },
    register,
    handleSubmit,
    getValues
  } = useForm({
    defaultValues: {
      recentEmail: '',
      newEmail: '',
      confirmEmail: '',
    }
  })

  const navigate = useNavigate();


  const onSubmit = (data) => {
    // TODO: Save info in DB.
    navigate("/dashboard"); 
  }

  return(

    <div className="emailCom">

      <form onSubmit={handleSubmit(onSubmit)}>

        <div 
          className="
          textInputsContainer pt-8 pb-14">

          <div className="recentEmailContainer mb-12">
            <label 
              className="
              recentEmailLabel block font-medium cursor-pointer mb-2" 
              htmlFor="recentEmailInput">Recent Email</label>
            <input 
              className="
                recentEmailInput w-full h-10 p-2 text-xs text-black 
                rounded-lg outline-none" 
              id="recentEmailInput" type="text"
              { ...register(
                "recentEmail", { 
                  required: {
                    value: true,
                    message: "Current email is required"
                  },
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Invalid Email."
                  }
                } 
              )}
            />
            { 
              errors.recentEmail &&  
              <span className="formError text-[#F64E60] text-sm font-light">
                { errors.recentEmail.message }
              </span>
            }
          </div>

          <div className="newEmailContainer mb-12">
            <label 
              className="
                newEmailLabel block font-medium cursor-pointer mb-2" 
              htmlFor="newEmailInput">New Email</label>
            <input 
              className="
                newEmailInput w-full h-10 p-2 text-xs text-black 
                rounded-lg outline-none" 
              id="newEmailInput" type="text" 
              { ...register(
                "newEmail", { 
                  required: {
                    value: true,
                    message: "New email is required"
                  },
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Invalid Email."
                  },
                  validate: 
                    value => 
                        value !== getValues("recentEmail")
                      ||
                        "The new email and the old email are the same."
                } 
              )}
            />
            { 
              errors.newEmail &&  
              <span className="formError text-[#F64E60] text-sm font-light">
                { errors.newEmail.message }
              </span>
            }
          </div>

          <div className="confirmEmailContainer">
            <label 
              className="
                confirmEmailLabel block font-medium cursor-pointer mb-2" 
              htmlFor="confirmEmailInput">Confirm Email</label>
            <input 
              className="
                confirmEmailInput w-full h-10 p-2 text-xs text-black 
                rounded-lg outline-none" 
              id="confirmEmailInput" type="text" 
              { ...register(
                "confirmEmail", { 
                  required: {
                    value: true,
                    message: "Confirm email is required"
                  },
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Invalid Email."
                  },
                  validate: 
                    value => 
                        value === getValues("newEmail")
                      ||
                        "The new email and the confirm email are not the same.",
                  
                } 
              )}
            />
            { 
              errors.confirmEmail &&  
              <span className="formError text-[#F64E60] text-sm font-light">
                { errors.confirmEmail.message }
              </span>
            }
          </div>

        </div>

        <div className="buttonsContainer">

          <button 
            className="pe-8 py-2 rounded-lg" type="reset">Reset</button>

          <input 
            className="px-8 py-2 rounded-lg bg-root-green cursor-pointer" 
            type="submit" value="save" />

        </div>

      </form>

    </div>

  )
}