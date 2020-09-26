class AddColumnToOrders < ActiveRecord::Migration[5.2]
  def change
    add_column :orders, :order_name, :string, null: false
  end
end
