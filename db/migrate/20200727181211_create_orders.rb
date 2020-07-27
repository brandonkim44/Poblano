class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.integer :user_id, null: false
      t.integer :store_id, null: false
      t.float :price, null: false
      t.string :details, null: false
      t.timestamps
    end
    add_index :orders, :user_id
    add_index :orders, :store_id
  end
end
