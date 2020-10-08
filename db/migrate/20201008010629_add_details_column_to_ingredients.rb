class AddDetailsColumnToIngredients < ActiveRecord::Migration[5.2]
  def change
    add_column :ingredients, :details, :string
  end
end
