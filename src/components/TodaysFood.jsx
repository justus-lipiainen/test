import { useEffect, useState } from "react";

function TodayMenu() {
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        console.log("Fetching today's menu...");
        fetch("http://localhost:6767/api/foods/1")
            .then(response => response.json())
            .then(data => {console.log(data);setMenu(data);})
            .catch(error => console.error("Error fetching today's menu:", error));
    }, []);

    menu && console.log("Today's menu state:", menu.meals);

    return (
        <div>
        <h2>Menu for </h2>
        </div>
    );
}

export default TodayMenu;
