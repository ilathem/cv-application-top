export default function Section({ title, children }) {
  return (
    <div className='flex flex-col items-center w-3/4 mt-2 pb-2 border-b border-white text-white'>
      <h2 className='text-2xl'>{title}</h2>
      {children}
    </div>
  );
}
