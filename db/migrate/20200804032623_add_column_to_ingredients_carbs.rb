class AddColumnToIngredientsCarbs < ActiveRecord::Migration[5.2]
  def change
    add_column :ingredients, :carbs, :integer, null: false
  end
end
