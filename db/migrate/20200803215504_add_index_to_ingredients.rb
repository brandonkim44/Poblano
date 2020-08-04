class AddIndexToIngredients < ActiveRecord::Migration[5.2]
  def change
    add_index :ingredients, :meal_id
  end
end
