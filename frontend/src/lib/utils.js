export function formatDate(dateString) {
  return dateString.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// Sort notes by criteria
export const sortNotes = (notes, sortBy) => {
  const notesCopy = [...notes]; // Don't mutate original

  switch (sortBy.toLowerCase()) {
    case "newest":
      return notesCopy.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      );
    case "oldest":
      return notesCopy.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      );
    case "title-asc":
      return notesCopy.sort((a, b) => a.title.localeCompare(b.title));
    case "title-desc":
      return notesCopy.sort((a, b) => b.title.localeCompare(a.title));
    default:
      return notesCopy;
  }
};

export const filterNotes = (notes, searchQuery) => {
  if (!searchQuery.trim()) return notes;

  const query = searchQuery.toLowerCase();
  return notes.filter(
    (note) =>
      note.title.toLowerCase().includes(query) ||
      note.content.toLowerCase().includes(query),
  );
};
