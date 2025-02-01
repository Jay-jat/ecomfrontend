import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Noiseblogs() {
  const [allBlog, setAllBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching blog data inside useEffect to avoid repeated calls
    axios.get('http://localhost:9000/blog')
      .then((res) => {
        setAllBlog(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching blogs.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const containerWidth = allBlog.length * 20 + '%';  // Calculate width based on number of items

  return (
    <div className="h-[70vh] w-[100%] flex mt-10 justify-center items-center">
      <div className="h-[60vh] w-[83%]">
        <div className="flex justify-between">
          <label className="text-[26px] font-bold">Noise Blogs</label>
          <label className="text-[13px] underline cursor-pointer">View All</label>
        </div>

        <div className="main-div h-[55vh] w-[100%] overflow-hidden">
          <div className="animation-div w-[fit-content] flex gap-[20px]" style={{ width: containerWidth }}>
            {allBlog.map((i, index) => (
              <div key={index} className="h-[30vh] w-[20%] mt-5">
                <img className="h-[30vh] w-[100%] rounded-[20px]" src={i.images} alt={i.title} />
                <div className="flex flex-col mt-2">
                  <label className="text-[16px] font-bold truncate">{i.title}</label>
                  <label className="text-[13.5px] text-ellipsis overflow-hidden line-clamp-3">{i.description}</label>
                  <div>
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    <label className="text-[10px] px-1">May, 27 2024</label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Noiseblogs;
