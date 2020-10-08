class RemoveDetailsColumnFromIngredients < ActiveRecord::Migration[5.2]
  def change
    remove_column :ingredients, :details
  end
end
