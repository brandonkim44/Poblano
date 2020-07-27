class EditUsers < ActiveRecord::Migration[5.2]
  def change
    add_index :users, :phone_number, unique: true
    add_index :users, :email, unique: true
    add_index :users, :store_id
    add_index :users, :session_token, unique: true
  end
end
