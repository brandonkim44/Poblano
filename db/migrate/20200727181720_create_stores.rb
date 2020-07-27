class CreateStores < ActiveRecord::Migration[5.2]
  def change
    create_table :stores do |t|
      t.string :phone_number, null: false
      t.string :hours, null: false
      t.string :address, null: false
      t.timestamps
    end
  end
end
