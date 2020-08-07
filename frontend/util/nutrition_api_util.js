export const fetchIngredients = id => {
    debugger;
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