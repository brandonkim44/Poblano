class Api::MealsController < ApplicationController

    def index
        @meals = Meal.all.with_attached_photo
        render :index
    end

    def show
        @meal = Meal.includes(ingredients: {photo_attachment: :blob} ).find_by(id: params[:id])
        # @meal = Meal.includes(:ingredients).with_attached_photo.find_by(id: params[:id])
        if @meal
            # ingredientsId = @meal.ingredients.map {|ingredient| ingredient.id}
            # @ingredients = Ingredient.find(id: ingredientsId).with_attached_photo
            @ingredients = @meal.ingredients
            render :show
        else
            render json: ["Could not find meal"], status: 401
        end
    end
end