class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :phone_number, null: false
      t.string :email, null: false
      t.boolean :country, null: false
      t.integer :reward_points
      t.integer :store_id
      t.string :session_token, null: false
      t.string :password_digest, null: false
    end
  end
end
