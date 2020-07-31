class ChangeColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :country, :boolean, default: false, null: false
  end
end
