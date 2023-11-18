export const getGender = async (event) => {
    event.preventDefault()
    
    const name = event.target.name.value
    const response = await fetch(`https://api.genderize.io/?name=${name}`)
    const data = await response.json()

    return data
  }