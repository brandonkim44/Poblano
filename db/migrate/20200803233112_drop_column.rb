class DropColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :ingredients, :meal_id
  end
end
