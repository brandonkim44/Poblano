// export const fetchIngredients = id => {
//     return (
//         $.ajax({
//             method: 'GET',
//             url: `/api/meals/${id}`,
//         })
//     );
// };

export const fetchLifestyleBowls = () => {
    return (
        $.ajax({
            method: 'GET',
            url: `/api/meals/?lifestyle="true"`
        })
    )
};

export const fetchIngredients = id => {
    return (
        $.ajax({
            method: 'GET',
            url: `/api/ingredients/${id}`,
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