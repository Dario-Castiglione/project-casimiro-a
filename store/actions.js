
export const setCarouselFirstInst = (data) => ({
    type: "setCarouselFirstInst",
    payload: data
})
export const setCarouselSecondInst = (data) => ({
    type: "setCarouselSecondInst",
    payload: data
})
export const setCarouselIndex = (num) => ({
    type: "setCarouselIndex",
    payload: num
})
export const SearchBarAppear = { type: "SearchBarAppear" }
export const SearchBarDisappear = { type: "SearchBarDisappear" }

const setSearchData = (data) => ({ type: "setSearchData", payload: data })
const showResult = ({ type: "showResult", payload: true });
export const hideResult = ({ type: "hideResult", payload: false });
export const SearchFetch = (e) => {

    return (dispatch) => {
        fetch(`https://sandbox.musement.com/api/v3/activities?text=${e.target.value}&text_operator=AUTO&extend_other_languages=AUTO&extend_content_fields=AUTO&fuzziness_level=LEVEL-0&zero_terms_query=NONE&limit=10&offset=0`)
            .then(res => res.json())
            .then(data => dispatch(setSearchData(data)))
            .then(dispatch(showResult))
            .then(e.target.value = "")
    }
}
export const toggleSideMenu = { type: "toggleSideMenu" };
export const setAllActivities = (data) => ({ type: "setAllActivities", payload: data });

export const filterActivities = (filter) => {
    return (dispatch) => {
        function handleHash() {
            if (filter.up === true) {
                window.location.hash = "up"
                setTimeout(() => {
                    window.location.hash = "/"
                }, 100)
            }
        }
        fetch(`https://sandbox.musement.com/api/v3/activities?text_operator=AUTO&extend_other_languages=AUTO&extend_content_fields=AUTO&fuzziness_level=LEVEL-0&zero_terms_query=NONE&city_in=${filter.city}&vertical_in=${filter.category}&sort_by=rating&category_in=&default_price_range=00.00%2C${filter.maxPrice}&limit=8&offset=${filter.pagination * 8}`)
            .then(res => res.json())
            .then(data => dispatch(setAllActivities(data)))
            .then(handleHash)
    }
}
const setSearchCity = (data) => ({ type: "setSearchCity", payload: data })
export const searchCity = (e) => {

    return (dispatch) => {
        fetch(`https://sandbox.musement.com/api/v3/autocomplete?sort_by=&text=${e.target.value}&city_limit=5`)
            .then(res => res.json())
            .then(data => dispatch(setSearchCity(data)))
    }
}