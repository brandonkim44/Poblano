class CreateBuilds < ActiveRecord::Migration[5.2]
  def change
    create_table :builds do |t|
      t.integer :meal_id, null: false
      t.integer :ingredient_id, null: false
      t.timestamps
    end
  end
end
