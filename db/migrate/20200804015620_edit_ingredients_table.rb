class EditIngredientsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :ingredients, :calories, :integer, null: false
    add_column :ingredients, :fats, :integer, null: false
    add_column :ingredients, :protein, :integer, null: false
  end
end
