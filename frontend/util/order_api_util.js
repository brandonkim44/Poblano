export const fetchSideIngredients = (sidesId) => {
    return (
        $.ajax({
            method: 'GET',
            url: `api/ingredients/${sidesId}`
        })
    )
};