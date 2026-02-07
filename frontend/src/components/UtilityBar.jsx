import React from 'react';
import { SearchIcon, ArrowDownWideNarrow, ArrowUpNarrowWide, ArrowDownAZ, ArrowUpZA } from 'lucide-react';

const UtilityBar = ({ searchQuery, setSearchQuery, sortOption, setSortOption }) => {
  const sortOptions = [
    { value: 'newest', label: 'Newest First', icon: ArrowDownWideNarrow },
    { value: 'oldest', label: 'Oldest First', icon: ArrowUpNarrowWide },
    { value: 'title-asc', label: 'Title A-Z', icon: ArrowDownAZ },
    { value: 'title-desc', label: 'Title Z-A', icon: ArrowUpZA },
  ];

  const currentSort = sortOptions.find(opt => opt.value === sortOption);
  const Icon = currentSort?.icon;

  return (
    <div className="sticky top-0 z-10 bg-base-200 flex gap-4 p-4 mb-6 rounded-lg">
      {/* Search input */}
      <div className="relative flex-1 max-w-xs">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-base-content/50" />
        <input
          type="text"
          placeholder="Search notes..."
          className="input input-bordered w-full pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Sort dropdown */}
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-outline gap-2">
          {Icon && <Icon className="size-5" />}
          {currentSort?.label}
        </label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
          {sortOptions.map((option) => {
            const OptionIcon = option.icon;
            return (
              <li key={option.value}>
                <button
                  onClick={() => setSortOption(option.value)}
                  className={sortOption === option.value ? 'active' : ''}
                >
                  <OptionIcon className="size-5" />
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default UtilityBar