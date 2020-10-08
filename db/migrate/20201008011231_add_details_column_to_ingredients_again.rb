class AddDetailsColumnToIngredientsAgain < ActiveRecord::Migration[5.2]
  def change
    add_column :ingredients, :details, :text, array: true, default: []
  end
end
