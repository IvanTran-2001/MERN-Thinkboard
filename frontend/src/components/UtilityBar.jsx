import React from 'react'

const UtilityBar = ({ searchQuery, setSearchQuery, sortOption, setSortOption }) => {
  return (
    <div className="flex gap-4 p-4 mb-6 bg-base-100 rounded-lg">
      {/* Search input */}
      <input
        type="text"
        placeholder="Search notes..."
        className="input input-bordered w-full max-w-xs"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
        {/* Sort dropdown */}
        <select className="select select-bordered" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="title-asc">Title A-Z</option>
          <option value="title-desc">Title Z-A</option>
        </select>
    </div>
  );
};

export default UtilityBar