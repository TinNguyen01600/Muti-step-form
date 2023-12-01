import { useState } from "react"
import FormUserDetails from "./FormUserDetails"
import FormPersonalDetails from "./FormPersonalDetails"

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
        setStep(step + 1)
    }
    // Go back to prev step
    const prevStep = () => {
        setStep(step - 1)
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
    switch (step) {
        case 1:
            return (
                <FormUserDetails
                    nextStep={nextStep}
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    handleFirstNameChange={handleFirstNameChange}
                    handleLastNameChange={handleLastNameChange}
                    handleEmailChange={handleEmailChange}
                />
            )
        case 2:
            return (
                <FormPersonalDetails
                    nextStep={nextStep}
                    prevStep={prevStep}
                    occupation={occupation}
                    city={city}
                    bio={bio}
                    handleOccupationChange={handleOccupationChange}
                    handleCityChange={handleCityChange}
                    handleBioChange={handleBioChange}
                />
            )
    }
}

export default UserForm