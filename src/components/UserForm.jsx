import { useState } from "react"
import FormUserDetails from "./FormUserDetails"

const UserForm = () => {
    const [step, setStep] = useState(1)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [occupation, setOccupation] = useState('')
    const [city, setCity] = useState('')
    const [bio, setBio] = useState('')

    //*************************************************************** */
    // Proceed to next step
    const nextStep = () => {
        setStep(step+1)
    }
    // Go back to prev step
    const prevStep = () => {
        setStep(step-1)
    }
    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleOccupationChange = (e) => {
        setOccupation(e.target.value)
    }
    const handleCityChange = (e) => {
        setCity(e.target.value)
    }
    const handleBioChange = (e) => {
        setBio(e.target.value)
    }
    //*************************************************************** */
    return (
        <></>
    )
}

export default UserForm