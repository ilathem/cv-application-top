import { useState } from "react"
import Section from "./Section"
import TextInput from "./TextInput"

export default function Education({
  formData,
  setFormdata,
  editing,
}) {
  return (
    <Section title={'Education (most prestigious)'}>
      <TextInput 
        formId={'schoolName'}
        formName={'schoolName'}
        formLabel={'School Name'}
        value={formData.schoolName}
        setValue={val => setFormdata({...formData, schoolName: val})}
        editing={editing}
      />
      <TextInput 
        formId={'degree'}
        formName={'degree'}
        formLabel={'Degree'}
        value={formData.degree}
        setValue={val => setFormdata({...formData, degree: val})}
        editing={editing}
      />      
      <TextInput 
        formId={'gradDate'}
        formName={'gradDate'}
        formLabel={'Graduation Date'}
        value={formData.gradDate}
        setValue={val => setFormdata({...formData, gradDate: val})}
        editing={editing}
      />      
    </Section>
  )
}