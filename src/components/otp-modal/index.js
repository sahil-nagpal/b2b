import React ,{useState} from 'react';
import {Modal,Button} from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isPossiblePhoneNumber, isValidPhoneNumber } from 'react-phone-number-input';
import OtpInput  from 'react-otp-input';
import  {auth} from '../../firebase';
import { useNavigate } from "react-router-dom";
import { signInWithPhoneNumber,RecaptchaVerifier } from "firebase/auth";
import { useDispatch } from 'react-redux';
import {userActions} from '../../store/userSlice';
let verifier = ''
const OtpModal = (props)=>{
   const {setShow} = props.setShow
   const navigate = useNavigate();
   const dispatch = useDispatch()
   const [otpValue,setHandleOtp] = useState('')
	 const [editPhone,setEditPhone] = useState('')
   const [showOtpForm,setShowOtpForm] = useState(false);
   const [sendOtpAgain,setSendOtpAgain] = useState(false)
   const handlePhoneValue = (phone)=>{
    setEditPhone("+"+`${phone}`)
   }
   

   const sendOtp = ()=>{
    if(editPhone !==''){
      signInWithPhoneNumber(auth, editPhone, verifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult

          toast.success("Otp Sent Successfully",{
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true
            }
          )
          setTimeout(()=>{
            setSendOtpAgain(true)
          },60000)
          // ...
        }).catch((error) => {
          console.log(error )
          // Error; SMS not sent
          // ...
        });
    }
    


   }

   const handleSubmit = async()=>{
    if(showOtpForm){
      if(otpValue === ""){
        toast.error("Otp invalid",{
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true
          }
        )
        return;
      }
      let confirmationResult = window.confirmationResult;
      confirmationResult.confirm(otpValue).then((result)=>{
        console.log("result ::::::",result)
        setHandleOtp('')
        setShow(false)
        setSendOtpAgain(false)
      })
      .catch((error)=>{
        console.log("error in form ",error)
      })

      return
    }

    if (isPossiblePhoneNumber(editPhone) === false && isValidPhoneNumber(editPhone) === false) {
        // return 
        toast.error("Phone number is invalid",{
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true
          }
        )
        return;
    }

   else{
      setShowOtpForm(true)
      dispatch(userActions.setNumberForOtp({"phoneNumber":editPhone}))

      verifier  =  new RecaptchaVerifier('sign-in-button', {
          'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              console.log("okay");
            }
          }, auth)

        sendOtp()
      
      // window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {}
      // , auth);
      
   }
   }
  	return (
  	<>
       <ToastContainer />
  		 <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
        centered = {true}
        onExit={()=>{navigate("/register")}}
      >
        <Modal.Header closeButton>
          <Modal.Title>{showOtpForm?<span> Enter Otp </span>: <span>Enter Phone Number</span>}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="text-center p-4">
          
        {showOtpForm ? <><OtpInput
            numInputs={6}
            containerStyle = "otp-container"
            inputStyle = "otp-box-style"
            value = {otpValue}
            onChange={(e)=>{setHandleOtp(e)}}
         /> 
          
           </> :

         <PhoneInput
          onChange = {handlePhoneValue} 
          country={'in'}
          />

        }
        </div>
        <div id="sign-in-button"></div>
        </Modal.Body>
        <Modal.Footer>
         {sendOtpAgain && <Button variant="primary" onClick={sendOtp}>Send Otp Again</Button>}
          <Button variant="primary" onClick={handleSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>
     </>
      )
}

export default OtpModal