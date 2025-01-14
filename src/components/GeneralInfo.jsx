import Section from './Section';
import TextInput from './TextInput';
import { useState } from 'react';

export default function GeneralInfo({ formData, setFormdata, editing }) {
  return (
    <Section title='General Info'>
      <TextInput
        formId={'firstName'}
        formLabel={'First Name'}
        formName={'firstName'}
        value={formData.fName}
        setValue={(val) => setFormdata({ ...formData, fName: val })}
        editing={editing}
      />
      <TextInput
        formId={'lastName'}
        formLabel={'Last Name'}
        formName={'lastName'}
        value={formData.lName}
        setValue={(val) => setFormdata({ ...formData, lName: val })}
        editing={editing}
      />
      <TextInput
        formId={'email'}
        formLabel={'Email'}
        formName={'email'}
        value={formData.email}
        setValue={(val) => setFormdata({ ...formData, email: val })}
        editing={editing}
      />
      <TextInput
        formId={'phone'}
        formLabel={'Phone'}
        formName={'phone'}
        value={formData.phone}
        setValue={(val) => setFormdata({ ...formData, phone: val })}
        editing={editing}
      />
    </Section>
  );
}
