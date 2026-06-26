const Search = ({ query, setQuery, handleSearch }) => {
  return (
    <form
      onSubmit={handleSearch}
      className="flex gap-3 justify-center mb-10"
    >
      <input
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border w-80 p-3 rounded-xl"
      />

      <button
        className="bg-orange-500 text-white px-6 rounded-xl"
      >
        Search
      </button>
    </form>
  );
};

export default Search;