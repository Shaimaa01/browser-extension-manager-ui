import axios from "axios";

export async function fetchExtensions() {
  try {
    const response = await axios.get("/data.json");
    
    return response.data;
  } catch (error) {
    console.error("Error fetching extensions:", error);
    return [];
  }
}
