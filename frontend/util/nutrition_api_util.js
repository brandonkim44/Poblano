export const fetchIngredients = id => {
    return (
        $.ajax({
            method: 'GET',
            url: `/api/meals/${id}`,
        })
    );
};

export const fetchMeals = () => {
    return (
        $.ajax({
            method: 'GET',
            url: `api/meals`,
        })
    );
};