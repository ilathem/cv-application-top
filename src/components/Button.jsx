export default function Button({ name, onClick }) {
  return (
    <button
      className='text-black text-2xl rounded-xl my-2 px-16 py-4 hover:scale-110 focus:scale-110 active:scale-105 transition-all bg-white'
      onClick={() => onClick()}
    >
      {name}
    </button>
  );
}
