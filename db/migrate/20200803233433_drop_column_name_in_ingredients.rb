class DropColumnNameInIngredients < ActiveRecord::Migration[5.2]
  def change
    remove_column :ingredients, :name
    remove_column :meals, :meal_name
    add_column :ingredients, :ingredient_name, :string, null: false
    add_column :meals, :meal_name, :string, null: false
  end
end
