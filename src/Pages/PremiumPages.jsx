


const Premium = () => {
  const riceVideos = [
    {
      title: "How to Cook Perfect Rice Every Time",
      url: "https://www.youtube.com/watch?v=sample1",
    },
    {
      title: "Fried Rice Recipe",
      url: "https://www.youtube.com/watch?v=sample2",
    },
    {
      title: "Rice Pilaf Recipe",
      url: "https://www.youtube.com/watch?v=sample3",
    },
    {
      title: "Jollof Rice Recipe",
      url: "https://www.youtube.com/watch?v=sample4",
    },
    // ... more rice videos
  ];

  const stewVideos = [
    {
      title: "Classic Beef Stew Recipe",
      url: "https://www.youtube.com/watch?v=sample5",
    },
    {
      title: "Chicken Stew Recipe",
      url: "https://www.youtube.com/watch?v=sample6",
    },
    {
      title: "Vegetable Stew Recipe",
      url: "https://www.youtube.com/watch?v=sample7",
    },
    {
      title: "Lamb Stew Recipe",
      url: "https://www.youtube.com/watch?v=sample8",
    },
    // ... more stew videos
  ];

  const soupVideos = [
    {
      title: "Creamy Tomato Soup",
      url: "https://www.youtube.com/watch?v=sample9",
    },
    {
      title: "Chicken Noodle Soup Recipe",
      url: "https://www.youtube.com/watch?v=sample10",
    },
    {
      title: "Minestrone Soup Recipe",
      url: "https://www.youtube.com/watch?v=sample11",
    },
    {
      title: "Pumpkin Soup Recipe",
      url: "https://www.youtube.com/watch?v=sample12",
    },
    // ... more soup videos
  ];

  // Ensure a total of 100 links, split approximately evenly among the categories
  const totalVideos = 100;
  const riceVideosCount = totalVideos / 3;
  const stewVideosCount = totalVideos / 3;
  const soupVideosCount = totalVideos / 3;

  while (riceVideos.length < riceVideosCount) {
    riceVideos.push({
      title: `Rice Recipe ${riceVideos.length + 1}`,
      url: `https://www.youtube.com/watch?v=rice${riceVideos.length + 1}`,
    });
  }

  while (stewVideos.length < stewVideosCount) {
    stewVideos.push({
      title: `Stew Recipe ${stewVideos.length + 1}`,
      url: `https://www.youtube.com/watch?v=stew${stewVideos.length + 1}`,
    });
  }

  while (soupVideos.length < soupVideosCount) {
    soupVideos.push({
      title: `Soup Recipe ${soupVideos.length + 1}`,
      url: `https://www.youtube.com/watch?v=soup${soupVideos.length + 1}`,
    });
  }

  return (
    <div className="premium-container bg-gray-100 p-6 lg:p-12 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Premium Recipe Videos
      </h1>

      <section className="mb-10">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Rice Recipes</h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {riceVideos.map((video, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {video.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Stew Recipes</h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stewVideos.map((video, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {video.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Soup Recipes</h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {soupVideos.map((video, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {video.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Premium;
