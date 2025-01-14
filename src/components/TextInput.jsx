export default function TextInput({
  formName,
  formId,
  formLabel,
  value,
  setValue,
  editing,
}) {
  return (
    <div className='my-2 text-lg rounded-lg bg-white flex flex-col transition-all duration-200 shadow-md focus-within:scale-110 hover:scale-110 shadow-gray-200'>
      <label className="text-sm text-gray-700 ml-2" htmlFor={formName}>{formLabel}</label>
      <input
        disabled={!editing}
        placeholder={formLabel}
        className='text-black p-4 placeholder:text-gray-500 placeholder:text-xl rounded-lg'
        value={value || ''}
        onChange={(e) => setValue(e.target.value)}
        type='text'
        id={formId}
        name={formName}
      />
    </div>
  );
}
