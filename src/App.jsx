import { useState, useEffect } from 'react';
import TextInput from './components/TextInput';
import Header from './components/Header';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Button from './components/Button';
import { ToastContainer, toast, Zoom } from 'react-toastify';

function App() {
  const [formData, setFormData] = useState({});
  const [editing, setEditing] = useState();
  useEffect(() => {
    const data = localStorage.getItem('formData');
    if (data !== null) {
      setFormData(JSON.parse(data));
      setEditing(false);
    } else {
      setEditing(true);
    }
  }, []);
  return (
    <div className='flex flex-col items-center bg-black h-full'>
      <ToastContainer
        position='top-center'
        theme='dark'
        transition={Zoom}
        hideProgressBar={true}
      />
      <Header />
      <GeneralInfo
        editing={editing}
        formData={formData}
        setFormdata={setFormData}
      />
      <Education
        editing={editing}
        formData={formData}
        setFormdata={setFormData}
      />
      <Experience
        editing={editing}
        formData={formData}
        setFormdata={setFormData}
      />
      <Button
        name={'Edit'}
        onClick={() => {
          setEditing(true);
        }}
      />
      <Button
        name={'Submit'}
        onClick={() => {
          localStorage.setItem('formData', JSON.stringify(formData));
          setEditing(false);
          const id = toast.loading('Submitting...');
          setTimeout(() => {
            toast.update(id, {
            render: 'Submitted!',
            type: 'success',
            isLoading: false,
            autoClose: true,
          })}, 2000);
        }}
      />
    </div>
  );
}

export default App;
