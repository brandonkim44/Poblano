class Api::MealsController < ApplicationController

    def index
        @meals = Meal.all.with_attached_photo
        render :index
    end

    def show
        @meal = Meal.find_by(id: params[:id])
        if @meal
            @ingredients = @meal.ingredients.includes(photo_attachment: :blob)
            render :show
        else
            render json: ["Could not find meal"], status: 401
        end
    end

end