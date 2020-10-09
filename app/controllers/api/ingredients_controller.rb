class Api::IngredientsController < ApplicationController

    def index
        @ingredients = Ingredient.all
        render :index
    end

    def show
        @meal = Meal.includes(ingredients: {photo_attachment: :blob} ).find_by(id: params[:id])
        # @meal = Meal.includes(:ingredients).with_attached_photo.find_by(id: params[:id])
        if @meal
            # ingredientsId = @meal.ingredients.map {|ingredient| ingredient.id}
            # @ingredients = Ingredient.where(id: ingredientsId).with_attached_photo
            @ingredients = @meal.ingredients
            render :show
        else
            render json: ["Could not find meal"], status: 401
        end
    end
end