function Search({ value, onChange, onSearch }) {
  return (
    <div className="flex justify-center gap-4 mb-10 flex-wrap">

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search Food..."
        className="bg-slate-800 px-5 py-3 rounded-xl outline-none w-[300px]"
      />

      <button
        onClick={onSearch}
        className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl duration-300"
      >
        Search
      </button>

    </div>
  );
}

export default Search;