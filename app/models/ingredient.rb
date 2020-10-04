class Ingredient < ApplicationRecord
    validates :ingredient_name, :price, presence: true

    has_one_attached :photo

    has_many :builds,
        primary_key: :id,
        foreign_key: :ingredient_id,
        class_name: :Build

    has_many :meals, :through => :builds

end