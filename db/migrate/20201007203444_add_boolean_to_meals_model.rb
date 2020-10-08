class AddBooleanToMealsModel < ActiveRecord::Migration[5.2]
  def change
    add_column :meals, :lifestyle_bowl, :boolean
  end
end
