export const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "42899490-861e6514c70e56b69d35e2ae0";

export const options = {
    params: {
        key: API_KEY,
        q: "",
        image_type: 'photo',
        orientation: "horizontal",
        safesearch: true,
        page: 1,
        per_page: 40,
    }
}