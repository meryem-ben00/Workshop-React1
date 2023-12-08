import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function AccountSettingPage(){
  const { 
    formState: { errors },
    register,
    handleSubmit,
    watch
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      userName: '',
      phoneNumber: '',
      occupation: '',
    }
  })

  const navigate = useNavigate();

  const simulateInputImageClick = () => 
    document.querySelector(".imageInput").click();

  const [image, setImage] = useState(null)
  const [inputImageFileList, setInputImageFileList] = useState("")

  const onSubmit = (data) => {
    data.image = inputImageFileList;
    // TODO: Save info in DB.
    navigate("/dashboard"); 
  }

  return(
    <div className="accountSettingCom">

      <form onSubmit={handleSubmit(onSubmit)} noValidate>

        <div className="imageInputContainer pb-10 relative">
          <label 
            className="imageInputLabel inline-block font-normal cursor-pointer mb-2" 
            htmlFor="imageInput"
          > Your profile picture </label>

          <div 
            className="
              inputCustomShape h-32 w-32 bg-white rounded-2xl cursor-pointer"
            onClick={simulateInputImageClick}
          >
            {
              image ?
                <img 
                  src={image} alt="Uploaded image"
                  className="w-full h-full rounded-2xl object-cover" />
              : 
                <div className="
                  noImageContentContainer border-2 border-dashed px-4 h-full rounded-2xl 
                  flex flex-col justify-center items-center gap-3 ">
                  <img 
                    src="/src/assets/icons/uploadImageIcon.svg" 
                    alt="Upload image icon" />
                  <span className="text-[#585858] text-center text-xs font-medium">
                    Upload your photo </span>
                </div>
            }
          </div> 
          <input 
            className="imageInput" id="imageInput" 
            type="file" accept="image/*"
            required name="image" hidden
            { ...register(
              "image", { 
                required: {
                  value: true,
                  message: "Image is required"
                }
              } 
            )}
            onChange={({ target: {files} }) => {
              if(files.length) {
                setInputImageFileList(files);
                errors.image = "";
                return setImage(URL.createObjectURL(files[0]))
              }
              setInputImageFileList("");
              setImage(null)
            }}
          />
          { 
            errors.image &&  
            <span className="formError text-[#F64E60] text-sm font-light">
              { errors.image.message }
            </span>
          }
        </div>

        <div 
          className="
          textInputsContainer grid gap-6 items-center pt-8 pb-12">

          <div className="firstNameContainer">
            <label 
              className="
                firstNameLabel block font-medium cursor-pointer mb-2" 
              htmlFor="firstNameInput">First Name</label>
            <input 
              className="
                firstNameInput w-full h-10 p-2 text-xs text-black 
                rounded-lg outline-none" 
              id="firstNameInput" type="text"
              { ...register(
                "firstName", { 
                  required: {
                    value: true,
                    message: "First name is required"
                  }, 
                  minLength: {
                    value: 3,
                    message: "Should have at least 3 characters"
                  }, 
                  maxLength: {
                    value: 20,
                    message: "Should have at max 20 characters"
                  } 
                } 
              )}
            />
            { 
              errors.firstName &&  
              <span className="formError text-[#F64E60] text-sm font-light">
                { errors.firstName.message }
              </span>
            }
          </div>

          <div className="lastNameContainer">
            <label 
              className="
                lastNameLabel block font-medium cursor-pointer mb-2" 
              htmlFor="lastNameInput">Last Name</label>
            <input 
              className="
                lastNameInput w-full h-10 p-2 text-xs text-black 
                rounded-lg outline-none" 
              id="lastNameInput" type="text" 
              { ...register(
                "lastName", { 
                  required: {
                    value: true,
                    message: "Last name is required"
                  }, 
                  minLength: {
                    value: 3,
                    message: "Should have at least 3 characters"
                  }, 
                  maxLength: {
                    value: 20,
                    message: "Should have at max 20 characters"
                  } 
                } 
              )}
            />
            { 
              errors.lastName &&  
              <span className="formError text-[#F64E60] text-sm font-light">
                { errors.lastName.message }
              </span>
            }
          </div>

          <div className="userNameContainer">
            <label 
              className="
                userNameLabel block font-medium cursor-pointer mb-2" 
              htmlFor="userNameInput">User Name</label>
            <input 
              className="
                userNameInput w-full h-10 p-2 text-xs text-black 
                rounded-lg outline-none" 
              id="userNameInput" type="text" 
              { ...register(
                "userName", { 
                  required: {
                    value: true,
                    message: "User name is required"
                  }, 
                  minLength: { //TODO: Make all this one template 'object'.
                    value: 3,
                    message: "Should have at least 3 characters"
                  }, 
                  maxLength: {
                    value: 20,
                    message: "Should have at max 20 characters"
                  } 
                } 
              )}
            />
            { 
              errors.userName &&  
              <span className="formError text-[#F64E60] text-sm font-light">
                { errors.userName.message }
              </span>
            }
          </div>
          
          <div className="phoneNumberContainer">
            <label 
              className="
                phoneNumberLabel block font-medium cursor-pointer mb-2" 
              htmlFor="phoneNumberInput">Phone number</label>
            <input 
              className="
                phoneNumberInput w-full h-10 p-2 text-xs text-black 
                rounded-lg outline-none" 
              id="phoneNumberInput" type="number" 
              { ...register(
                "phoneNumber", { 
                  required: {
                    value: true,
                    message: "Phone number is required"
                  }, 
                  minLength: {
                    value: 8,
                    message: "Should have at least 8 numbers"
                  }, 
                  maxLength: {
                    value: 20,
                    message: "Should have at max 12 numbers"
                  } 
                } 
              )}
            />
            { 
              errors.phoneNumber &&  
              <span className="formError text-[#F64E60] text-sm font-light">
                { errors.phoneNumber.message }
              </span>
            }
          </div>

          <div className="occupationContainer">
            <label 
              className="
                occupationLabel block font-medium cursor-pointer mb-2" 
              htmlFor="occupationSelect">Occupation</label>
            
            <div className="selectHolder relative">

              <select 
                className="
                occupationSelect w-full h-10 p-2 text-xs text-black 
                relative rounded-lg outline-none" 
                name="occupation" id="occupationSelect" 
                { ...register(
                  "occupation", { 
                    required: {
                      value: true,
                      message: "Occupation is required"
                    }
                  } 
                )}
              >
                <option value="" hidden></option>
                <option value="unknown">Unknown</option>
              </select>
              { 
                errors.occupation &&  
                <span className="formError text-[#F64E60] text-sm font-light">
                  { errors.occupation.message }
                </span>
              }

            </div>

          </div>

        </div>

        <div className="buttonsContainer">

          <button 
            className="pe-8 py-2 rounded-lg" type="reset" 
            onClick={() => setImage(null)}
          >Reset</button>

          <input 
            className="px-8 py-2 rounded-lg bg-root-green cursor-pointer" 
            type="submit" value="save" />

        </div>

      </form>

    </div>
  )
}