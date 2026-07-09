import { useEffect, useState } from "react";
import { MENU_API } from "./constant";
import { restaurantDetail } from "./mockData";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(MENU_API + resId);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const text = await response.text();

        if (!text) {
          setResInfo(null);
          return;
        }

        const jsonData = JSON.parse(text);
        setResInfo(jsonData?.data ?? null);
      } catch (error) {
        console.error("Failed to fetch restaurant menu:", error);
        setResInfo(null);
      }
    };

    fetchData();
  }, [resId]);

  return resInfo;
  //return restaurantDetail;
};

export default useRestaurantMenu;
