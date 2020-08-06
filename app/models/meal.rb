class Meal < ApplicationRecord
    validates :meal_name, presence: true

    # has_one_attached :photo

    has_many :builds,
        primary_key: :id,
        foreign_key: :meal_id,
        class_name: :Build

    has_many :ingredients, :through => :builds
    
end