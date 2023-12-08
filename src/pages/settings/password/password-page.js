import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

export default function PasswordPage(){

  const { 
    formState: { errors },
    register,
    handleSubmit,
    getValues
  } = useForm({
    defaultValues: {
      recentPassword: '',
      newPassword: '',
      confirmPassword: '',
    }
  })

  const navigate = useNavigate();

  const onSubmit = (data) => {
    // TODO: Save info in DB.
    navigate("/dashboard"); 
  }

  return(

    <div className="passwordCom">

      <form onSubmit={handleSubmit(onSubmit)}>

        <div 
          className="
          textInputsContainer pt-8 pb-14">

          <div className="recentPasswordContainer mb-12">
            <label 
              className="
              recentPasswordLabel block font-medium cursor-pointer mb-2" 
              htmlFor="recentPasswordInput">Recent Password</label>
            <input 
              className="
                recentPasswordInput w-full h-10 p-2 text-xs text-black 
                rounded-lg outline-none" 
              id="recentPasswordInput" type="text"
              { ...register(
                "recentPassword", { 
                  required: {
                    value: true,
                    message: "Current password is required"
                  }, 
                  minLength: {
                    value: 8,
                    message: "Password is always 8 characters or more."
                  }, 
                  maxLength: {
                    value: 20,
                    message: "Password is always 20 characters or less."
                  } 
                } 
              )}
            />
            { 
              errors.recentPassword &&  
              <span className="formError text-[#F64E60] text-sm font-light">
                { errors.recentPassword.message }
              </span>
            }
          </div>

          <div className="newPasswordContainer mb-12">
            <label 
              className="
                newPasswordLabel block font-medium cursor-pointer mb-2" 
              htmlFor="newPasswordInput">New Password</label>
            <input 
              className="
                newPasswordInput w-full h-10 p-2 text-xs text-black 
                rounded-lg outline-none" 
              id="newPasswordInput" type="text" 
              { ...register(
                "newPassword", { 
                  required: {
                    value: true,
                    message: "Enter the new password."
                  }, 
                  minLength: {
                    value: 8,
                    message: "Password should be 8 characters or more."
                  }, 
                  maxLength: {
                    value: 20,
                    message: "Password should be 20 characters or less."
                  },
                  validate: 
                    value => 
                        value !== getValues("recentPassword")
                      ||
                        "The new password and the old password are the same.",
                } 
              )}
            />
            { 
              errors.newPassword &&  
              <span className="formError text-[#F64E60] text-sm font-light">
                { errors.newPassword.message }
              </span>
            }
          </div>

          <div className="confirmPasswordContainer">
            <label 
              className="
                confirmPasswordLabel block font-medium cursor-pointer mb-2" 
              htmlFor="confirmPasswordInput">Confirm Password</label>
            <input 
              className="
                confirmPasswordInput w-full h-10 p-2 text-xs text-black 
                rounded-lg outline-none" 
              id="confirmPasswordInput" type="text" 
              { ...register(
                "confirmPassword", { 
                  required: {
                    value: true,
                    message: "Confirm your password"
                  }, 
                  minLength: { 
                    value: 8,
                    message: "Password should be 8 characters or more."
                  }, 
                  maxLength: {
                    value: 20,
                    message: "Password should be 20 characters or less."
                  },
                  validate:
                    value => 
                        value === getValues("newPassword")
                      ||
                        "The new password and the confirm password are not the same.",
                } 
              )}
            />
            { 
              errors.confirmPassword &&  
              <span className="formError text-[#F64E60] text-sm font-light">
                { errors.confirmPassword.message }
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
