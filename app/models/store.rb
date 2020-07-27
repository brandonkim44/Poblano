class Store < ApplicationRecord
    validates :phone_number, :hours, :address, presence: true

    has_many: :orders,
        primary_key: :id,
        foreign_key: :store_id,
        class_name: :Orders
end