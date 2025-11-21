import { useEffect, useState } from "react";

function TodayMenu() {
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMenu() {
      try {
        const res = await fetch("http://localhost:3000/api/today");
        const data = await res.json();
        setMenu(data);
      } catch (e) {
        console.error("Failed to load menu:", e);
      } finally {
        setLoading(false);
      }
    }
    fetchMenu();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Menu for {menu.date}</h2>
      <ul>
        {menu.meals.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodayMenu;
