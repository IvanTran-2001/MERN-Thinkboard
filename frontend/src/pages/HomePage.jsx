import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import RateLimitedUI from "../components/RateLimitedUI";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import api from "../lib/axios";
import NotesNotFound from "../components/NotesNotFound";
import UtilityBar from "../components/UtilityBar";
import { filterNotes, sortNotes } from "../lib/utils.js";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("newest");

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.error("Error fetching notes:", error);
        console.log("Error response:", error.response);
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to fetch notes.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />

      {isRateLimited && <RateLimitedUI />}
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <div className="text-center text-primary py-10">Loading Notes...</div>
        )}
        {notes.length === 0 && !loading && !isRateLimited && <NotesNotFound />}

        {notes.length > 0 && !isRateLimited && (
          <>
            <UtilityBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              sortOption={sortOption}
              setSortOption={setSortOption}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortNotes(filterNotes(notes, searchQuery), sortOption).map(
                (note) => (
                  <NoteCard key={note._id} note={note} setNotes={setNotes} />
                ),
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
