import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import RateLimitedUI from "../components/RateLimitedUI";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(true);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // useEffect(() => {
  //   const fetch
  // }, []);

  return (
    <div className="min-h-screen" data-theme="forest">
      <NavBar />

      {isRateLimited && <RateLimitedUI />}

    </div>
  )
}

export default HomePage