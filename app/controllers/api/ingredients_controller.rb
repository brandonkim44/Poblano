class Api::IngredientsController < ApplicationController

    def index
        @ingredients = Ingredient.all
        render :index
    end

    def show
        @meal = Meal.includes(ingredients: {photo_attachment: :blob} ).find_by(id: params[:id])
        if @meal
            @ingredients = @meal.ingredients
            render :show
        else
            render json: ["Could not find ingredients"], status: 401
        end
    end
end