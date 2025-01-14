import TextInput from './TextInput';
import Section from './Section';

export default function Experience({ formData, setFormdata, editing }) {
  return (
    <Section title={'Experience (most relevant)'}>
      <TextInput
        formId={'cName'}
        formName={'cName'}
        formLabel={'Company Name'}
        value={formData.cName}
        setValue={(val) => setFormdata({ ...formData, cName: val })}
        editing={editing}
      />
      <TextInput
        formId={'pTitle'}
        formName={'pTitle'}
        formLabel={'Position Title'}
        value={formData.pTitle}
        setValue={(val) => setFormdata({ ...formData, pTitle: val })}
        editing={editing}
      />
      <TextInput
        formId={'responsibilities'}
        formName={'responsibilities'}
        formLabel={'Responsibilities'}
        value={formData.responsibilities}
        setValue={(val) => setFormdata({ ...formData, responsibilities: val })}
        editing={editing}
      />
      <TextInput
        formId={'startDate'}
        formName={'startDate'}
        formLabel={'Start Date'}
        value={formData.startDate}
        setValue={(val) => setFormdata({ ...formData, startDate: val })}
        editing={editing}
      />
      <TextInput
        formId={'endDate'}
        formName={'endDate'}
        formLabel={'End Date'}
        value={formData.endDate}
        setValue={(val) => setFormdata({ ...formData, endDate: val })}
        editing={editing}
      />
    </Section>
  );
}
