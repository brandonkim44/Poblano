class Build < ApplicationRecord

    belongs_to :meal,
        primary_key: :id,
        foreign_key: :meal_id,
        class_name: :Meal

    belongs_to :ingredient,
        primary_key: :id,
        foreign_key: :ingredient_id,
        class_name: :Ingredient
end