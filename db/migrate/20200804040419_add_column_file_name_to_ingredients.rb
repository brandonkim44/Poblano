class AddColumnFileNameToIngredients < ActiveRecord::Migration[5.2]
  def change
      add_column :ingredients, :filename, :string, null: false
  end
end
