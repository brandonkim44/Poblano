class Order < ApplicationRecord
    validates :price, :details, :order_name, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
    
    belongs_to :store,
        primary_key: :id,
        foreign_key: :store_id,
        class_name: :Store
end